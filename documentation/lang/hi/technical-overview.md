# तकनीकी अवलोकन

## यह कैसे काम करता है

Needle Engine मोटे तौर पर तीन हिस्सों से मिलकर बना है:
- कई **कंपोनेंट्स और टूल्स** जो आपको उदाहरण के लिए Unity Editor से Needle Engine के लिए सीन सेट करने की अनुमति देते हैं।  
- एक **एक्सपोर्टर** जो सीन और कंपोनेंट डेटा को glTF में बदलता है।
- एक **वेब रनटाइम** जो बनाए गए glTF फ़ाइलों और उनके एक्सटेंशन को लोड और चलाता है।

वेब रनटाइम रेंडरिंग के लिए three.js का उपयोग करता है, तीन सीन ग्राफ के ऊपर एक कंपोनेंट सिस्टम जोड़ता है और हमारे कस्टम glTF एक्सटेंशन के लिए एक्सटेंशन लोडर को जोड़ता है।  

प्रभावी रूप से, यह Unity या Blender जैसे टूल को स्थानिक वेब विकास पावरहाउस में बदल देता है – सामान्य HTML, CSS, JavaScript और बंडलिंग वर्कफ़्लो में glTF एसेट जोड़ता है।  


## glTF एसेट

मॉडल, टेक्सचर, एनिमेशन, लाइट्स, कैमरे और बहुत कुछ [glTF 2.0 files](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html) के रूप में Needle Engine में संग्रहीत किए जाते हैं।  
कस्टम डेटा [vendor extensions](#vendor-specific-gltf-extensions-needle_) में संग्रहीत किया जाता है। इनमें इंटरेक्टिव कंपोनेंट्स से लेकर फिजिक्स, सीक्वेंसिंग और लाइटमैप्स तक सब कुछ शामिल है।  

### समर्थित glTF एक्सटेंशन

Needle Engine द्वारा बनाया गया एक विशिष्ट प्रोडक्शन glTF निम्नलिखित एक्सटेंशन का उपयोग करता है:  
```
KHR_lights_punctual
KHR_materials_unlit
KHR_texture_transform
KHR_animation_pointer
NEEDLE_techniques_webgl
NEEDLE_gameobject_data
NEEDLE_components
NEEDLE_persistent_assets
NEEDLE_lightmaps
NEEDLE_lighting_settings
KHR_texture_basisu
KHR_draco_mesh_compression
```

अन्य समर्थित एक्सटेंशन:
```
EXT_meshopt_compression
EXT_mesh_gpu_instancing (import and export)
```

समर्थित मटेरियल एक्सटेंशन:  

```
KHR_materials_clearcoat
KHR_materials_ior
KHR_materials_specular
KHR_materials_transmission
KHR_materials_iridescence
KHR_materials_unlit
KHR_materials_volume
```

UnityGLTF (अभी तक प्रलेखित नहीं) के एक्सपोर्ट कॉलबैक और three.js के [glTF import extensions](https://threejs.org/docs/#examples/en/loaders/GLTFLoader) का उपयोग करके और एक्सटेंशन और कस्टम एक्सटेंशन जोड़े जा सकते हैं।  

> **ध्यान दें**: इन एक्सटेंशन का उपयोग करने वाले मटेरियल को UnityGLTF के `PBRGraph` मटेरियल के माध्यम से Unity से एक्सपोर्ट किया जा सकता है।  

> **ध्यान दें**: Audio और variants पहले से ही `NEEDLE_components` और `NEEDLE_persistent_assets` के माध्यम से Needle Engine में समर्थित हैं, लेकिन `KHR_audio` और `KHR_materials_variants` जैसे मौजूदा प्रस्तावों के साथ अधिक अलाइनमेंट के लिए कुछ विकल्प हैं।

[three.js में GLTF लोडिंग के बारे में और जानें](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)

### कंप्रेशन

उत्पादन के लिए, हम [`glTF-transform`](https://gltf-transform.donmccurdy.com/) के साथ glTF एसेट को कंप्रेस करते हैं। टेक्सचर प्रकार के आधार पर `etc1s`, `uastc`, `webp` या कोई कंप्रेशन का उपयोग करते हैं। Mesh डिफ़ॉल्ट रूप से `draco` का उपयोग करते हैं लेकिन `meshtopt` (प्रति glTF फ़ाइल) का उपयोग करने के लिए कॉन्फ़िगर किए जा सकते हैं। कस्टम एक्सटेंशन को एक ओपेक तरीके से पास किया जाता है।  

अधिक जानकारी के लिए [deployment & compression](./deployment.md#optimization-and-compression-options) पेज देखें


## वेंडर-विशिष्ट glTF एक्सटेंशन (NEEDLE_*)

Needle Engine हमारे वेंडर एक्सटेंशन के माध्यम से glTF फ़ाइलों में कस्टम डेटा संग्रहीत करता है। इन एक्सटेंशन को लचीला बनाने के लिए डिज़ाइन किया गया है और अपेक्षाकृत मनमाना डेटा डालने की अनुमति देता है। विशेष रूप से, इन फ़ाइलों में कोई कोड संग्रहीत नहीं किया जाता है। इंटरेक्टिव कंपोनेंट्स को रनटाइम पर डेटा से पुनर्स्थापित किया जाता है। यह कुछ हद तक AssetBundles के Unity में कार्य करने के तरीके के समान है – एसेट के प्राप्तकर्ता पक्ष को फ़ाइल में संग्रहीत कंपोनेंट्स के लिए मिलान कोड होना चाहिए।  

> हम वर्तमान में इन एक्सटेंशन के लिए स्कीमा प्रदान नहीं कर रहे हैं क्योंकि वे अभी भी विकास में हैं। नीचे दिए गए JSON स्निपेट उदाहरण के रूप में एक्सटेंशन के उपयोग को प्रदर्शित करते हैं और इसमें आर्किटेक्चरल विकल्पों और भविष्य के रिलीज में हम क्या बदल सकते हैं, इस पर नोट्स शामिल हैं।  

> डेटा के टुकड़ों के बीच संदर्भ वर्तमान में glTF फ़ाइल और JSON pointers के अन्य हिस्सों में इंडेक्स के मिश्रण के माध्यम से निर्मित होते हैं। हम भविष्य के रिलीज में इन दृष्टिकोणों को समेकित कर सकते हैं। हम उन मामलों के लिए स्ट्रिंग-आधारित GUID भी संग्रहीत कर रहे हैं जहां ऑर्डरिंग अन्यथा हल करना मुश्किल है (उदाहरण के लिए दो कंपोनेंट एक दूसरे का संदर्भ दे रहे हैं) जिन्हें हम भविष्य में हटा सकते हैं।  

### NEEDLE_components

यह एक्सटेंशन प्रति-नोड कंपोनेंट डेटा रखता है। कंपोनेंट नाम JavaScript और C# दोनों तरफ टाइप नामों से मैप होते हैं।  
एक ही नाम के कई कंपोनेंट एक ही नोड में जोड़े जा सकते हैं।  

`NEEDLE_components` में डेटा को वर्तमान में अप्रत्याशित [`KHR_animation_pointer`](https://github.com/ux3d/glTF/tree/extensions/KHR_animation_pointer/extensions/2.0/Khronos/KHR_animation_pointer) एक्सटेंशन के माध्यम से एनिमेट किया जा सकता है।  

```json
"NEEDLE_components": {
  "builtin_components": [
    {
      "name": "WebARSessionRoot",
      "guid": "1516450550",
      "arScale": 50,
      "invertForward": true,
      "enabled": true,
      "gameObject": {
        "node": 0
      }
    },
    {
      "name": "SyncedRoom",
      "guid": "1516450552",
      "roomName": "network-room",
      "urlParameterName": "room",
      "joinRandomRoom": true,
      "requireRoomParameter": false,
      "autoRejoin": true,
      "enabled": true,
      "gameObject": {
        "node": 0
      }
    },
    {
      "name": "PlayableDirector",
      "guid": "2243275882009986562_1668529989451832962",
      "state": 0,
      "extrapolationMode": 1,
      "playableAsset": "extensions/NEEDLE_persistent_assets/4",
      "playableGraph": {},
      "playOnAwake": true,
      "timeUpdateMode": 0,
      "time": 0,
      "initialTime": 0,
      "duration": 135.383333333332,
      "enabled": true,
      "gameObject": {
        "node": 0
      }
    }
  ]
}
```

> **ध्यान दें**: केवल कंपोनेंट टाइप नाम संग्रहीत करने का मतलब है कि टाइप नाम वर्तमान में प्रति प्रोजेक्ट अद्वितीय होने चाहिए। हम भविष्य के रिलीज में पैकेज नाम शामिल करने की योजना बना रहे हैं ताकि इस बाधा को वैश्विक रूप से अद्वितीय कंपोनेंट टाइप नामों के बजाय प्रति पैकेज अद्वितीय कंपोनेंट टाइप नामों तक सीमित किया जा सके।  

> **ध्यान दें**: वर्तमान में एक्सटेंशन में कोई संस्करण जानकारी नहीं है (एक कंपोनेंट किस npm पैकेज से संबंधित है, उस पैकेज का कौन सा संस्करण एक्सपोर्ट किया गया था)। हम भविष्य के रिलीज में संस्करण जानकारी शामिल करने की योजना बना रहे हैं।  

> **ध्यान दें**: वर्तमान में सभी कंपोनेंट `builtin_components` सरणी में हैं। हम भविष्य के रिलीज में इसका नाम बदलकर केवल `components` कर सकते हैं।  

### NEEDLE_gameobject_data

इस एक्सटेंशन में स्टेट, लेयर्स और टैग से संबंधित अतिरिक्त प्रति-नोड डेटा होता है। लेयर्स का उपयोग रेंडरिंग और फिजिक्स दोनों के लिए किया जाता है, जैसा कि [three.js](https://threejs.org/docs/#api/en/core/Layers) और [Unity](https://docs.unity3d.com/Manual/Layers.html) उनके साथ करते हैं।  

```json
"NEEDLE_gameobject_data": {
  "layers": 0,
  "tag": "Untagged",
  "hideFlags": 0,
  "static": false,
  "activeSelf": true,
  "guid": "1516450549"
}
```

> **ध्यान दें**: हमें बेहतर ढंग से समझाने की आवश्यकता हो सकती है कि यह [`NEEDLE_components`](#needle_components) में एक और एंट्री क्यों नहीं है। 

### NEEDLE_lighting_settings

यह एक रूट एक्सटेंशन है जो प्रति glTF फ़ाइल एम्बिएंट लाइटिंग प्रॉपर्टीज़ को परिभाषित करता है।   

```json
"NEEDLE_lighting_settings": {
  "ambientMode": 0,
  "ambientLight": [
    0.212,
    0.227,
    0.259,
    1
  ],
  "ambientIntensity": 1,
  "defaultReflectionMode": 0
}
```

> **ध्यान दें**: इस एक्सटेंशन को प्रति-फ़ाइल के बजाय प्रति-सीन परिभाषित करना पड़ सकता है।

### NEEDLE_lightmaps

यह एक रूट एक्सटेंशन है जो glTF फ़ाइल के लिए लाइटमैप्स का एक सेट परिभाषित करता है।

```json
"NEEDLE_lightmaps": {
  "textures": [
    {
      "pointer": "textures/20",
      "type": 1,
      "index": 0
    }
  ]
}
```

> **ध्यान दें**: फिलहाल इस एक्सटेंशन में एनवायरमेंट टेक्सचर संदर्भ भी शामिल हैं। हम भविष्य के रिलीज में इसे बदलने की योजना बना रहे हैं। 

| टेक्सचर प्रकार | मान |
| -- | -- |
| लाइटमैप | 0 |
| एनवायरमेंट मैप  | 1 |
| रिफ्लेक्शन मैप | 2 |

[`NEEDLE_components`](#needle_components) एक्सटेंशन के अंदर `MeshRenderer` कंपोनेंट में प्रति नोड परिभाषित किया गया है कि लाइटमैप कैसे लागू किए जाते हैं:  

```json
"NEEDLE_components": {
  "builtin_components": [
    {
      "name": "MeshRenderer",
      ...
      "lightmapIndex": 0,
      "lightmapScaleOffset": {
        "x": 1.00579774,
        "y": 1.00579774,
        "z": -0.00392889744,
        "w": -0.00392889744
      },
      ...
    }
  ]
}
```

> **ध्यान दें**: हम भविष्य के रिलीज में इसे बदल सकते हैं और लाइटमैप-संबंधित डेटा को प्रति नोड एक `NEEDLE_lightmap` एक्सटेंशन एंट्री में ले जा सकते हैं। 

### NEEDLE_persistent_assets

`NEEDLE_components` में कंपोनेंट JSON Pointers के माध्यम से डेटा का संदर्भ दे सकते हैं। `NEEDLE_persistent_assets` में डेटा को अक्सर विभिन्न कंपोनेंट द्वारा कई बार संदर्भित किया जाता है और इसलिए एक रूट एक्सटेंशन में अलग से संग्रहीत किया जाता है। डिज़ाइन के अनुसार, वे हमेशा किसी और चीज़ द्वारा संदर्भित होते हैं (या एक दूसरे के भीतर संदर्भ होते हैं), और इस प्रकार वे बिल्कुल भी टाइप जानकारी संग्रहीत नहीं करते हैं: वे केवल JSON डेटा के टुकड़े हैं और उन्हें संदर्भित करने वाले कंपोनेंट को वर्तमान में यह जानने की आवश्यकता है कि वे क्या उम्मीद करते हैं। 

यहां संग्रहीत एसेट/ डेटा के उदाहरण हैं:  
- AnimatorControllers, उनके लेयर्स और स्टेट्स
- PlayableAssets (टाइमलाइन), उनके ट्रैक और एम्बेडेड क्लिप्स
- SignalAssets
- ...

`persistent_assets` में डेटा JSON Pointer के माध्यम से अन्य `persistent_assets` का संदर्भ दे सकता है, लेकिन डिज़ाइन के अनुसार `NEEDLE_components` का संदर्भ नहीं दे सकता है। यह Unity में "Scene data" और "AssetDatabase content" के बीच अलगाव के समान है। 

```json
{
  "name": "LampionController",
  "guid": "9100000_ecab75bc7ab51a747a4c5c14236a43cd",
  "parameters": [],
  "layers": [
    {
      "name": "Base Layer",
      "stateMachine": {
        "name": "Base Layer",
        "defaultState": 0,
        "states": [
          {
            "name": "LampionFlying",
            "hash": 677739540,
            "motion": {
              "name": "LampionFlying",
              "isLooping": false,
              "guid": "7400000_c296c4d76e956b34f8b5833ba90653c1",
              "clips": [
                {
                  "node": "nodes/4",
                  "clip": "animations/0"
                },
                {
                  "node": "nodes/9",
                  "clip": "animations/6"
                },
                {
                  "node": "nodes/14",
                  "clip": "animations/12"
                }
              ]
            },
            "transitions": [
              {
                "isExit": false,
                "exitTime": 1,
                "hasFixedDuration": true,
                "offset": 0,
                "duration": 0,
                "hasExitTime": true,
                "destinationState": 0,
                "conditions": []
              }
            ]
          }
        ],
        "entryTransitions": []
      }
    }
  ]
},
{
  "name": "TrongCom Website",
  "guid": "11400000_93a8f856fe26af8498d94efe4835af36",
  "tracks": [
    {
      "name": "Markers",
      "type": "MarkerTrack",
      "muted": false,
      "outputs": [
        null
      ],
      "clips": [],
      "markers": [],
      "trackOffset": null
    },
    {
      "name": "Animation Track",
      "type": "AnimationTrack",
      "muted": false,
      "outputs": [
        "5017454109690854928_1668529989451832962"
      ],
      "clips": [
        {
          "start": 0,
          "end": 0.9833333333333333,
          "duration": 0.9833333333333333,
          "timeScale": 1,
          "asset": {
            "clip": "animations/78",
            "loop": false,
            "duration": 8,
            "position": {
              "x": 0,
              "y": 0,
              "z": 0
            },
            "rotation": {
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "removeStartOffset": true
          },
          "clipIn": 0,
          "easeInDuration": 0,
          "easeOutDuration": 0.41666666666666663,
          "preExtrapolationMode": 1,
          "postExtrapolationMode": 1
        },
        ... 
      ]
    }
  ]
}
```

> **ध्यान दें**: हम भविष्य में अधिक प्रकार और संस्करण जानकारी शामिल कर सकते हैं। 

### NEEDLE_techniques_webgl

यह एक्सटेंशन संग्रहीत [`KHR_techniques_webgl`](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Archived/KHR_techniques_webgl) एक्सटेंशन पर आधारित है और इसे कुछ महत्वपूर्ण स्थानों पर विस्तारित करता है। जबकि मूल एक्सटेंशन को WebGL 1.0 के मुकाबले निर्दिष्ट किया गया था, हम यहां इसे WebGL 2.0 के साथ उपयोग कर रहे हैं और कई uniform types जोड़े हैं।  

```json
"KHR_techniques_webgl": {
  "programs": [
    {
      "vertexShader": 1,
      "fragmentShader": 0,
      "id": 0
    }
  ],
  "shaders": [
    {
      "name": "Pass-FRAGMENT",
      "type": 35632,
      "uri": "<embedded WebGL fragment shader code ...>",
      "id": 1
    },
    {
      "name": "Pass-VERTEX",
      "type": 35633,
      "uri": "<embedded WebGL vertex shader code ...>",
      "id": 0
    }
  ],
  "techniques": [
    {
      "program": 0,
      "attributes": {},
      "uniforms": {
        "_TimeParameters": {
          "name": "_TimeParameters",
          "type": 35666,
          "semantic": null,
          "count": 1,
          "node": 0
        },
        "hlslcc_mtx4x4unity_MatrixVP": {
          "name": "hlslcc_mtx4x4unity_MatrixVP",
          "type": 35666,
          "semantic": "_VIEWPROJECTION",
          "count": 4,
          "node": 0
        }
      },
      "defines": []
    }
  ]
}     
```

> **ध्यान दें**: वर्तमान में, vertex और fragment shaders हमेशा URI के रूप में एम्बेडेड होते हैं; हम भविष्य में उस डेटा को अधिक उचित bufferViews में स्थानांतरित करने की योजना बना रहे हैं।  

> **ध्यान दें**: यहाँ कुछ निरर्थक प्रॉपर्टीज़ हैं जिन्हें हम साफ करने की योजना बना रहे हैं।  

## TypeScript और डेटा मैपिंग

> 🏗️ निर्माणधीन

## three.js के साथ रेंडरिंग

> 🏗️ निर्माणधीन

## आप WebAssembly में कंपाइल क्यों नहीं कर रहे हैं?

हालांकि Unity की C# से IL से C++ (IL2CPP के माध्यम से) से WASM (emscripten के माध्यम से) तक की कंपाइलेशन प्रक्रिया शानदार है, यह अपेक्षाकृत धीमी भी है। यहां तक कि एक साधारण प्रोजेक्ट को WASM में बनाने में कई मिनट लगते हैं, और यह प्रक्रिया लगभग हर कोड परिवर्तन पर दोहराई जाती है। चालाक कैशिंग और यह सुनिश्चित करने के माध्यम से कि dev builds अधिक कोड को strip करने की कोशिश न करें, इसमें से कुछ को टाला जा सकता है, लेकिन यह अभी भी धीमा ही रहता है।  
> हमारे पास कुछ WASM अनुवाद के लिए एक प्रोटोटाइप है, लेकिन यह अभी पूरी तरह से तैयार नहीं है और iteration speed धीमी बनी हुई है, इसलिए हम अभी इस रास्ते पर सक्रिय रूप से जांच नहीं कर रहे हैं। 

आधुनिक वेब वर्कफ़्लो को देखते हुए, हमने पाया कि विकास के दौरान कोड रीलोड का समय नगण्य है, आमतौर पर यह सब-सेकंड रेंज में होता है। यह निश्चित रूप से लचीलेपन के लिए कुछ प्रदर्शन (build time पर कंपाइलर ऑप्टिमाइज़ेशन के बजाय JavaScript की on the fly व्याख्या) का त्याग करता है, लेकिन ब्राउज़र JavaScript का अधिकतम लाभ उठाने में वास्तव में अच्छे हो गए हैं।  

हम मानते हैं कि iteration और tight testing workflows के लिए, डिवाइस पर और लक्ष्य प्लेटफॉर्म (इस मामले में ब्राउज़र) पर जितनी जल्दी और जितनी बार संभव हो सके परीक्षण करने में सक्षम होना फायदेमंद है - यही कारण है कि हम Unity के पूरे play mode को छोड़ रहे हैं, प्रभावी रूप से हमेशा ब्राउज़र में चल रहे हैं। 

> **ध्यान दें**: एक बहुत अच्छा साइड इफेक्ट पूरे धीमे "domain reload" स्टेप से बचना है जिसमें आमतौर पर हर बार Play Mode में प्रवेश करने पर 15-60 सेकंड लगते हैं। Play दबाते ही आप ब्राउज़र में बस "लाइव" होते हैं।


पेज का अनुवाद AI का उपयोग करके स्वचालित रूप से किया गया है