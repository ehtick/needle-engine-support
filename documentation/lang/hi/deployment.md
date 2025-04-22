---
title: Deployment and Optimization
---

## Deployment का क्या मतलब है?

Deployment आपकी एप्लिकेशन को किसी वेबसाइट पर सार्वजनिक रूप से उपलब्ध कराने की प्रक्रिया है। Needle Engine यह सुनिश्चित करता है कि KTX2, Draco और Meshopt जैसी नवीनतम कम्प्रेशन तकनीकों का उपयोग करके आपका प्रोजेक्ट यथासंभव छोटा और तेज़ हो।

## उपलब्ध Deployment लक्ष्य

- [Needle Cloud](./cloud/#deploy-from-unity)
  स्थानिक वेब ऐप्स और संपत्ति साझा करने के लिए बढ़िया।
- [Glitch](#deploy-to-glitch)
  सर्वर-साइड कोड पर प्रयोग और हैकिंग के लिए बढ़िया।

- [Netlify](#deploy-to-netlify)
  आपकी अपनी वेबसाइट और कस्टम डोमेन नाम होस्ट करने के लिए बढ़िया।
- [itch.io](#deploy-to-itch.io)
  अक्सर खेलों के लिए उपयोग किया जाता है।
- [GitHub Pages](#deploy-to-github-pages)
  मुफ़्त स्टैटिक पेज होस्टिंग।
- [Vercel](#deploy-to-vercel)
  फ्रंटएंड डेवलपर्स के लिए प्लेटफ़ॉर्म
- [FTP Upload](#deploy-to-ftp)
  FTP समर्थन वाले किसी भी सर्वर पर सीधे Deploy करें। FTP और SFTP दोनों समर्थित हैं।
- [Build to folder](#build-to-folder)
  किसी फ़ोल्डर में Build करते समय, आप फ़ाइलों को किसी भी वेब सर्वर या अन्य होस्टिंग सेवा पर अपलोड कर सकते हैं।
- [Facebook Instant Games](#deploy-to-facebook-instant-games)
  Facebook और Facebook Messenger पर गेम्स प्लेटफ़ॉर्म।

::: tip क्या कुछ छूट रहा है?
कृपया हमारे [forum](https://forum.needle.tools/?utm_source=needle_docs&utm_content=content) में हमें बताएं!
:::

## Development Builds

अपने Editor (जैसे Unity या Blender) के भीतर विकल्पों तक पहुँचने के तरीके के बारे में ऊपर दिए गए गाइड देखें।

Production build से मुख्य अंतर यह है कि यह फ़ाइल आकार और लोडिंग गति को कम करने के लिए [ktx2](https://registry.khronos.org/KTX/specs/2.0/ktxspec.v2.html) और [draco](https://google.github.io/draco/) कम्प्रेशन नहीं करता है, साथ ही उच्च-गुणवत्ता वाली textures को प्रगतिशील रूप से लोड करने का विकल्प भी नहीं होता है।

फ़ाइल आकार और लोडिंग गति को अनुकूलित करने के लिए हम आम तौर पर production build बनाने की सलाह देते हैं (नीचे अधिक जानकारी देखें)।

## Production Builds

एक production build बनाने के लिए, आपके पास [toktx](https://github.com/KhronosGroup/KTX-Software/releases) स्थापित होना चाहिए, जो KTX2 सुपरकम्प्रेशन फॉर्मेट का उपयोग करके texture कम्प्रेशन प्रदान करता है। कृपया [toktx Releases Page](https://github.com/KhronosGroup/KTX-Software/releases) पर जाएं और नवीनतम संस्करण (लिखते समय v4.1.0) डाउनलोड और इंस्टॉल करें। इसे इंस्टॉल करने के बाद आपको Unity को पुनरारंभ करने की आवश्यकता हो सकती है।
*यदि आप सुनिश्चित हैं कि आपने toktx इंस्टॉल कर लिया है और यह आपके PATH का हिस्सा है लेकिन फिर भी नहीं मिल रहा है, तो कृपया अपनी मशीन को पुनरारंभ करें और फिर से build करने का प्रयास करें।*

:::details Advanced: Custom glTF extensions
यदि आप अपने custom glTF extensions जोड़ने की योजना बना रहे हैं, तो production के लिए building के लिए ``gltf-transform`` में उन्हें संभालना आवश्यक है। संदर्भ के लिए [@needle-tools/gltf-build-pipeline](https://www.npmjs.com/package/@needle-tools/gltf-build-pipeline) देखें।
:::

### Optimization और Compression विकल्प

### Texture कम्प्रेशन
Production builds textures को डिफ़ॉल्ट रूप से **KTX2** का उपयोग करके कंप्रेस करेंगे (प्रोजेक्ट में उनके उपयोग के आधार पर ETC1S या UASTC)
लेकिन आप **WebP** कम्प्रेशन भी चुन सकते हैं और एक गुणवत्ता स्तर चुन सकते हैं।

#### मैं ETC1S, UASTC और WebP कम्प्रेशन में से कैसे चुनूं?

| फॉर्मेट | ETC1S | UASTC | WebP |
| --- | --- | --- | --- |
| **GPU Memory Usage** | कम | कम | उच्च (uncompressed) |
| **File Size** | कम | उच्च | बहुत कम |
| **Quality** | मध्यम | बहुत उच्च | गुणवत्ता सेटिंग पर निर्भर करता है |
| **Typical usage** | सभी चीज़ों के लिए काम करता है, लेकिन रंग textures के लिए सबसे अच्छा है | उच्च-विवरण डेटा textures: normal maps, roughness, metallic, आदि। | ऐसी फाइलें जहां ETC1S गुणवत्ता पर्याप्त नहीं है लेकिन UASTC बहुत बड़ी है |

आप Unity में Needle Texture Importer का उपयोग करके या Blender में Material टैब में प्रति Texture texture कम्प्रेशन और प्रगतिशील लोडिंग विकल्प चुनने का विकल्प रखते हैं।

:::details Unity: मैं प्रति-texture कम्प्रेशन सेटिंग्स कैसे सेट कर सकता हूं?
![image](/imgs/unity-texture-compression.jpg)
![image](/imgs/unity-texture-compression-options.jpg)
:::

:::details Blender: मैं प्रति-texture कम्प्रेशन सेटिंग्स कैसे सेट कर सकता हूं?
material टैब का चयन करें। आपको उस material द्वारा उपयोग की जा रही सभी textures के लिए कम्प्रेशन विकल्प दिखाई देंगे।
![Blender में Texture Compression विकल्प](/blender/texture-compression.webp)
:::

:::details Toktx नहीं मिल सकता है
  Windows: सुनिश्चित करें कि आपने toktx को अपने सिस्टम environment variables में जोड़ा है। environment variables को रीफ्रेश करने के लिए आपको इसे जोड़ने के बाद अपने कंप्यूटर को पुनरारंभ करने की आवश्यकता हो सकती है। डिफ़ॉल्ट इंस्टॉल स्थान ``C:\Program Files\KTX-Software\bin`` है
  ![image](/imgs/ktx-env-variable.webp)
:::

### Mesh कम्प्रेशन

डिफ़ॉल्ट रूप से, एक production build Draco कम्प्रेशन का उपयोग करके meshes को कंप्रेस करेगा। प्रति exported glTF draco और mesh-opt के बीच चयन करने के लिए `MeshCompression` component का उपयोग करें।
इसके अतिरिक्त आप mesh import settings (Unity) में production builds के लिए polycount को कम करने के लिए mesh simplification सेट कर सकते हैं। ब्राउज़र में अपनी एप्लिकेशन देखते समय, आप meshes का पूर्वावलोकन करने के लिए अपने URL में `?wireframe` जोड़ सकते हैं।

#### मैं Draco और Meshopt में से कैसे चुनूं?
| फॉर्मेट | Draco | Meshopt |
| --- | --- | --- |
| **GPU Memory Usage** | मध्यम | कम |
| **File Size** | सबसे कम | कम |
| **Animation compression** | नहीं | हाँ |

:::details मैं draco और meshopt कम्प्रेशन सेटिंग्स कैसे सेट कर सकता हूं?
प्रति exported glTF किस कम्प्रेशन को लागू किया जाना चाहिए यह चुनने के लिए MeshCompression घटक जोड़ें।

![image](/imgs/unity-mesh-compression-component.jpg)
- **वर्तमान scene** के लिए कम्प्रेशन बदलने के लिए इसे बस अपने root scene में कहीं भी जोड़ें।
- **prefab या NestedGltf** के लिए कम्प्रेशन बदलने के लिए इसे एक `GltfObject` या prefab में जोड़ें जिसे किसी भी घटक द्वारा संदर्भित / निर्यात किया जाता है।
- **संदर्भित scene** के लिए कम्प्रेशन बदलने के लिए इसे उस संदर्भित scene में जोड़ें जिसे निर्यात किया गया है
:::

:::details उत्पादन के लिए build करते समय vertex count को कम करने के लिए mesh simplification विकल्प कहां मिलेंगे?
एक Mesh का चयन करें और चयनित mesh के लिए उपलब्ध विकल्पों को देखने के लिए Needle importer विकल्प खोलें:
![image](/imgs/unity-mesh-simplification.jpg)
:::

### Progressive Textures

आप अपनी scene में कहीं भी `Progressive Texture Settings` component भी जोड़ सकते हैं, ताकि आपके प्रोजेक्ट में सभी textures प्रगतिशील रूप से लोड हो जाएं। इस समय lightmaps या skybox textures पर Progressive loading लागू नहीं होती है।

Progressive loading के साथ textures पहले कम रिज़ॉल्यूशन वाले संस्करण का उपयोग करके लोड की जाएंगी। texture दिखाई देने पर एक पूर्ण गुणवत्ता वाला संस्करण गतिशील रूप से लोड किया जाएगा। यह आमतौर पर आपकी scene की प्रारंभिक लोडिंग को काफी कम कर देता है।

:::details मैं Progressive texture loading कैसे सक्षम करूं?
### Progressive textures को प्रति texture<br/>या आपके प्रोजेक्ट में सभी textures के लिए सक्षम किया जा सकता है:
![image](/imgs/unity-texture-compression.jpg)
### प्रोजेक्ट में उन सभी textures के लिए सक्षम करें जिनकी कोई अन्य विशिष्ट सेटिंग नहीं है:
![image](/imgs/unity-progressive-textures.jpg)
:::

### Automatic Mesh LODs (Level of Detail)

Needle Engine 3.36 के बाद से हम स्वचालित रूप से LOD meshes उत्पन्न करते हैं और runtime पर उनके बीच स्विच करते हैं। LODs की आवश्यकता होने पर ही मांग पर लोड किए जाते हैं, इसलिए यह सुविधा आपकी लोडिंग समय और प्रदर्शन दोनों को कम करती है।

**मुख्य लाभ**
- तेज़ प्रारंभिक लोडिंग समय
- स्क्रीन पर औसतन कम vertices के कारण तेज़ रेंडरिंग समय
- LOD meshes के उपयोग के कारण तेज़ raycasting

आप `Progressive Loading Settings` component में या Mesh Importer settings में अपने पूरे प्रोजेक्ट के लिए LOD generation अक्षम कर सकते हैं।

![image](/imgs/unity-lods-settings-1.jpg)

![image](/imgs/unity-lods-settings-2.jpg)

## Deployment Options

### Deploy to Glitch 🎏

[Glitch](https://glitch.com/) छोटे और बड़े वेबसाइटों की होस्टिंग के लिए एक तेज़ और मुफ़्त तरीका प्रदान करता है। हम एक नए Glitch पेज (हमारे स्टार्टर के आधार पर) पर remix और deploy करने का एक आसान तरीका प्रदान कर रहे हैं, और यदि आवश्यक हो तो उसी Glitch पेज पर एक minimalistic networking server भी चलाने का तरीका प्रदान कर रहे हैं।

आप अपनी scene में `DeployToGlitch` component जोड़कर और निर्देशों का पालन करके Glitch पर deploy कर सकते हैं।

ध्यान दें कि Glitch पर होस्ट किए गए मुफ़्त प्रोजेक्ट्स ~100 MB से अधिक नहीं हो सकते हैं। यदि आपको एक बड़ा प्रोजेक्ट अपलोड करने की आवश्यकता है तो एक अलग Deployment लक्ष्य का उपयोग करने पर विचार करें।

:::details Unity से Glitch पर कैसे deploy करें?

1) `ExportInfo` component वाले GameObject में ``DeployToGlitch`` component जोड़ें।

2) component पर ``Create new Glitch Remix`` बटन पर क्लिक करें
   ![image](/deployment/deploytoglitch-1.jpg)
3) Glitch अब टेम्पलेट का एक remix बनाएगा। अपने ब्राउज़र से URL कॉपी करें
   ![image](https://user-images.githubusercontent.com/5083203/179834901-f28852a9-6b06-4d87-8b5b-0384768c92c1.png)
4) Unity को फिर से खोलें और अपनी ``Deploy To Glitch`` component के ``Project Name`` फ़ील्ड में URL पेस्ट करें
  ![image](https://user-images.githubusercontent.com/5083203/179835274-033e5e1d-b70d-4b13-95ad-f1e2f159b14e.png)
5) कुछ सेकंड प्रतीक्षा करें जब तक Unity को Glitch से आपकी Deployment key प्राप्त नहीं हो जाती (यह key Glitch पर `.env` फ़ाइल में सुरक्षित रूप से संग्रहीत है। इसे दूसरों के साथ साझा न करें, इस key वाले सभी लोग आपकी Glitch वेबसाइट पर अपलोड कर पाएंगे)
  ![key की प्रतीक्षा कर रहा है](/deployment/deploytoglitch-2.jpg)
6) एक बार जब Deploy Key प्राप्त हो जाती है, तो आप Glitch पर अपलोड करने के लिए `Build & Deploy` बटन पर क्लिक कर सकते हैं।

:::

:::details Blender से Glitch पर कैसे deploy करें?

![Blender component से Deploy To Glitch](/blender/deploy_to_glitch.webp)

1) Scene टैब में Deploy To Glitch पैनल ढूंढें
2) component पर ``Remix on glitch`` बटन पर क्लिक करें
3) आपका ब्राउज़र Glitch प्रोजेक्ट टेम्पलेट खोलेगा
4) Glitch द्वारा एक नया प्रोजेक्ट generate करने की प्रतीक्षा करें
5) प्रोजेक्ट URL को Blender DeployToGlitch पैनल में प्रोजेक्ट नाम के रूप में कॉपी पेस्ट करें (आप पूरा URL पेस्ट कर सकते हैं, पैनल आवश्यक जानकारी निकालेगा)
6) Glitch पर ``.env`` फ़ाइल खोलें और **DEPLOY_KEY** के आगे ``Variable Value`` फ़ील्ड में पासवर्ड दर्ज करें
7) Blender में उसी पासवर्ड को `Key` फ़ील्ड में दर्ज करें
8) अपनी परियोजना को build और Glitch पर अपलोड करने के लिए `DeployToGlitch` बटन पर क्लिक करें। जब अपलोड समाप्त हो जाएगा तो एक ब्राउज़र खुल जाएगा। यदि इसे खोलने के बाद काला दिखाई देता है तो पेज को रीफ्रेश करने का प्रयास करें।
:::

#### Glitch समस्या निवारण

यदि आप `Create new Glitch Remix` पर क्लिक करते हैं और ब्राउज़र `there was an error starting the editor` जैसी त्रुटि दिखाता है तो आप **OK** पर क्लिक कर सकते हैं। फिर [glitch.com](https://glitch.com/) पर जाएं और सुनिश्चित करें कि आप साइन इन हैं। उसके बाद आप Unity या Blender में बटन पर फिर से क्लिक करने का प्रयास करें।

### Deploy to Netlify
:::details Unity से Netlify पर कैसे deploy करें?
बस अपनी scene में `DeployToNetlify` component जोड़ें और निर्देशों का पालन करें। आप एक बटन के क्लिक के साथ या मौजूदा प्रोजेक्ट्स पर deploy करके नए प्रोजेक्ट्स बना सकते हैं।

![Netlify component पर deploy करें](/deployment/deploytonetlify-2.jpg)

![Netlify component पर deploy करें](/deployment/deploytonetlify.jpg)
:::

### Deploy to Vercel

1) Vercel पर एक नया प्रोजेक्ट बनाएं
2) अपनी वेब प्रोजेक्ट को एक github repository में जोड़ें
3) repository को Vercel पर अपने प्रोजेक्ट में जोड़ें

प्रोजेक्ट कॉन्फ़िगरेशन के लिए हमारा [sample project](https://github.com/needle-engine/nextjs-sample) देखें

### Deploy to itch.io

:::details Unity से itch.io पर कैसे deploy करें?
1) [itch.io](https://itch.io/game/new) पर एक नया प्रोजेक्ट बनाएं
2) ``Kind of project`` को ``HTML`` पर सेट करें
  ![image](https://user-images.githubusercontent.com/5083203/191211856-8a114480-bae7-4bd1-868e-2e955587acd7.png)
3) अपनी scene में ``DeployToItch`` component जोड़ें और ``Build`` बटन पर क्लिक करें
  ![image](https://user-images.githubusercontent.com/5083203/193812540-1881837e-ed9e-49fc-9658-52e5a914299a.png)

4) build समाप्त होने की प्रतीक्षा करें, यह समाप्त होने पर अंतिम zip के साथ एक फ़ोल्डर खोलेगा
5) अंतिम zip को itch.io पर अपलोड करें
  ![20220920-104629_Create_a_new_project_-_itch io_-_Google_Chrome-needle](https://user-images.githubusercontent.com/5083203/191212661-f626f0cb-bc8e-4738-ad2c-3982aca65f39.png)
6) ``This file will be played in the browser`` का चयन करें
  ![image](https://user-images.githubusercontent.com/5083203/191212967-00b687f3-bf56-449e-880c-d8daf8a52247.png)
7) अपना itch पेज सहेजें और itch प्रोजेक्ट पेज देखें।
  यह अब आपका Needle Engine प्रोजेक्ट लोड करना चाहिए 😊

#### Optional सेटिंग्स
![image](https://user-images.githubusercontent.com/5083203/191217263-355d9b72-5431-4170-8eca-bfbbb39ae810.png)
:::

:::details Itch.io: index.html नहीं मिला

#### index.html नहीं मिला
![image](https://user-images.githubusercontent.com/5083203/191213162-2be63e46-2a65-4d41-a713-98c753ccb600.png)
यदि आपको अपनी परियोजना अपलोड करने के बाद यह त्रुटि दिखाई देती है तो सुनिश्चित करें कि आप gzipped index.html अपलोड न करें।
आप अपने Needle web project फ़ोल्डर में ``vite.config.js`` में gzip कम्प्रेशन अक्षम कर सकते हैं। बस ``viteCompression({ deleteOriginFile: true })`` वाली पंक्ति हटा दें। अपनी परियोजना को फिर से build करें और itch पर अपलोड करें।

:::

### Deploy to FTP

:::details Unity से अपने FTP सर्वर पर कैसे deploy करें?
1) अपनी scene में एक GameObject पर ``DeployToFTP`` component¹ जोड़ें (यह ExportInfo वाले उसी GameObject में इसे जोड़ना एक अच्छा अभ्यास है - लेकिन यह अनिवार्य नहीं है)
2) यदि आपने पहले से नहीं किया है तो एक FTP सर्वर asset निर्दिष्ट करें और सर्वर, उपयोगकर्ता नाम और पासवर्ड भरें ²
  *इस asset में आपके FTP सर्वर तक पहुँच जानकारी होती है - जब आप अपने होस्टिंग प्रदाता पर एक नया FTP खाता बनाते हैं तो आपको वे प्राप्त होते हैं*
3) अपने प्रोजेक्ट को build और इसे अपने FTP खाते में अपलोड करने के लिए ``DeployToFTP`` component पर <kbd>Build & Deploy</kbd> बटन पर क्लिक करें

![Unity में Deploy to FTP component](/deployment/deploytoftp.jpg)
*¹ Deploy to FTP component*

![FTP सर्वर asset](/deployment/deploytoftp2.jpg)
*² FTP सर्वर asset जिसमें आपके FTP उपयोगकर्ता खाते की पहुँच जानकारी होती है*

![Unity में असाइन किए गए सर्वर asset के साथ Deploy to FTP component](/deployment/deploytoftp3.jpg)
*सर्वर asset असाइन होने के बाद Deploy To FTP component। आप path फ़ील्ड का उपयोग करके सीधे अपने सर्वर पर एक उप-फ़ोल्डर में deploy कर सकते हैं*
:::

:::details मैं मैन्युअल रूप से अपने FTP सर्वर पर कैसे deploy करूं?

1) `File > Build Settings` खोलें, `Needle Engine` चुनें, और <kbd>Build</kbd> पर क्लिक करें
2) build पूरा होने की प्रतीक्षा करें - परिणामी `dist` फ़ोल्डर सभी build और कम्प्रेशन चरण चलने के बाद स्वचालित रूप से खुल जाएगा।
3) `dist` फ़ोल्डर से फ़ाइलों को अपने FTP स्टोरेज में कॉपी करें।

**बस हो गया!** 😉

![20220830-003602_explorer-needle](https://user-images.githubusercontent.com/2693840/187311461-e6afb2d7-5761-48cf-bacb-1c1733bb768b.png)

> **ध्यान दें**: यदि अपलोड करने के बाद परिणाम काम नहीं करता है तो हो सकता है कि आपका वेब सर्वर gzipped फ़ाइलों को सर्व करने का समर्थन नहीं करता हो। समस्या को ठीक करने के लिए आपके पास दो विकल्प हैं:
विकल्प 1: आप .htaccess फ़ाइल का उपयोग करके अपने सर्वर पर gzip कम्प्रेशन सक्षम करने का प्रयास कर सकते हैं!
विकल्प 2: आप File/Build Window में build सेटिंग्स में gzip कम्प्रेशन बंद कर सकते हैं और Needle Engine प्लेटफ़ॉर्म चुन सकते हैं।

> **ध्यान दें**: यदि आपको कम्प्रेशन के दौरान त्रुटियां मिल रही हैं, तो कृपया हमें बताएं और बग रिपोर्ट करें! यदि आपकी परियोजना स्थानीय रूप से काम करती है और केवल उत्पादन build करते समय विफल हो जाती है, तो आप Development Build करके तुरंत समस्या से बाहर निकल सकते हैं। इसके लिए, Build Settings में बस `Development Build` चालू करें।

![Unity build window में Needle Engine प्लेटफ़ॉर्म दिखाया जा रहा है](/deployment/buildoptions_gzip.jpg)

:::

#### .htaccess फ़ाइल का उपयोग करके gzip सक्षम करना
अपने FTP सर्वर पर gzip कम्प्रेशन सक्षम करने के लिए आप उस डायरेक्टरी में (या पैरेंट डायरेक्टरी) `.htaccess` नाम की एक फ़ाइल बना सकते हैं जहाँ आप अपलोड करना चाहते हैं।
निम्नलिखित कोड को अपनी `.htaccess` फ़ाइल में डालें और इसे अपने सर्वर पर सहेजें/अपलोड करें:
```
<IfModule mod_mime.c>
RemoveType .gz
AddEncoding gzip .gz
AddType application/javascript .js.gz
```

### Deploy to Github Pages
:::details Unity से Github Pages पर कैसे deploy करें?

अपनी scene में DeployToGithubPages component जोड़ें और उस github repository (या github pages url) को कॉपी-पेस्ट करें जहाँ आप deploy करना चाहते हैं।
![Github pages component पर deploy करें](/deployment/deploytogithubpages.jpg)

<video-embed src="https://www.youtube.com/watch?v=Vyk3cWB6u-c" />

:::

#### Github pages समस्या निवारण
- **मैंने github pages पर deploy किया लेकिन कोई action नहीं चल रहा है / वेबसाइट लाइव नहीं है**
  - यदि आपने पहली बार deploy किया है तो आपकी वेबसाइट उपलब्ध होने में कुछ मिनट लग सकते हैं। आप deployment प्रक्रिया देखने के लिए github पर **Actions** टैब (`/actions`) देख सकते हैं।
  - यदि कुछ मिनटों के बाद आपकी वेबसाइट लाइव नहीं होती है या आपको github पर **Actions** टैब में कोई workflow run दिखाई नहीं देता है तो **Github Pages** सेटिंग्स पेज (`/settings/pages`) पर जाएं और सुनिश्चित करें कि **Branch** *gh-pages* पर सेट है।

### Deploy to Facebook Instant Games

Needle Engine के साथ आप Facebook Instant Games के लिए स्वचालित रूप से build कर सकते हैं
आपके वेब ऐप या गेम में कोई मैन्युअल समायोजन आवश्यक नहीं है।

:::details Unity से Facebook Instant Games पर कैसे deploy करें?
- अपनी scene में `Deploy To Facebook Instant Games` component जोड़ें:
  ![Facebook instant games component पर deploy करें](/deployment/deploytofacebookinstantgames.jpg)
- `Build For Instant Games` बटन पर क्लिक करें
- build समाप्त होने के बाद आपको एक ZIP फ़ाइल मिलेगी जिसे आप अपने facebook app पर अपलोड कर सकते हैं।
- Facebook पर `Instant Games` मॉड्यूल जोड़ें और `Instant Games/Web hosting` पर जाएं
  ![Facebook instant games होस्ट करना](/deployment/deploytofacebookinstantgames-hosting.jpg)
- आप `Upload version` बटन (1) का उपयोग करके अपना zip अपलोड कर सकते हैं। अपलोड समाप्त होने और zip संसाधित होने के बाद, अपनी ऐप (2, यहाँ नीला बटन) या `Push to production` (स्टार आइकन वाला बटन) का परीक्षण करने के लिए `Stage for testing` बटन पर क्लिक करें।
  ![zip को Facebook instant games पर अपलोड करें](/deployment/deploytofacebookinstantgames-upload.jpg)
- बस हो गया - फिर आप facebook पर अपने गेम का परीक्षण करने के लिए प्रत्येक संस्करण के आगे `Play` बटन पर क्लिक कर सकते हैं।

:::

:::details Facebook पर एक ऐप कैसे बनाएं (Instant Games क्षमताओं के साथ)

1) [एक नया ऐप बनाएं](https://developers.facebook.com/apps/creation/) और `Other` चुनें। फिर `Next` पर क्लिक करें।
  ![Facebook instant games app बनाएं](/deployment/facebookinstantgames-1.jpg)

2) `Instant Games` प्रकार चुनें
  ![Facebook instant games app बनाएं](/deployment/facebookinstantgames-2.jpg)

3) ऐप बनाने के बाद `Instant Games` उत्पाद जोड़ें
  ![Instant games उत्पाद जोड़ें](/deployment/facebookinstantgames-3.jpg)

यहां आप facebook पर [official instant games documentation](https://developers.facebook.com/docs/games/build/instant-games) पा सकते हैं।
**ध्यान दें** कि आपको बस instant games क्षमताओं वाला एक ऐप बनाना है।
हम बाकी सब का ध्यान रखेंगे और आपकी Needle Engine वेबसाइट में कोई मैन्युअल समायोजन आवश्यक नहीं है।
:::

## Build To Folder

Unity में ``File/Build Settings`` खोलें और विकल्पों के लिए ``Needle Engine`` चुनें:

![image](/imgs/unity-build-window-menu.jpg)

![image](/imgs/unity-build-window.jpg)

किसी भी वेब सर्वर पर अपलोड करने के लिए अपनी वेब प्रोजेक्ट को build करने के लिए आप Unity Editor Build Settings Window में **Build** पर क्लिक कर सकते हैं। आप कम्प्रेशन को छोड़ने के लिए ``Development Build`` चेकबॉक्स सक्षम कर सकते हैं (नीचे देखें) जिसके लिए आपकी मशीन पर toktx स्थापित होना आवश्यक है।

अपनी अंतिम build का स्थानीय रूप से पूर्वावलोकन करने के लिए आप विंडो के नीचे `Preview Build` बटन का उपयोग कर सकते हैं। यह बटन पहले एक नियमित build करेगा और फिर अंतिम फ़ाइलों वाली डायरेक्टरी में एक स्थानीय सर्वर शुरू करेगा ताकि आप देख सकें कि इन फ़ाइलों को अपने वेब सर्वर पर अपलोड करने के बाद आपको क्या मिलता है।

Nodejs केवल विकास के दौरान आवश्यक है। वितरित वेबसाइट (हमारे डिफ़ॉल्ट vite टेम्पलेट का उपयोग करके) एक static page है जो Nodejs पर निर्भर नहीं करती है और इसे किसी भी नियमित वेब सर्वर पर रखा जा सकता है। Nodejs आवश्यक है यदि आप हमारे minimalistic networking server को उसी वेब सर्वर पर चलाना चाहते हैं (Glitch Deployment प्रक्रिया में स्वचालित रूप से शामिल)।

---

## Cross-Platform Deployment वर्कफ़्लो

नियमित Unity प्रोजेक्ट बनाना संभव है जहां आप Needle Engine और Desktop या WebGL जैसे नियमित Unity प्लेटफ़ॉर्म दोनों पर build कर सकते हैं। हमारा "component mapping" दृष्टिकोण का मतलब है कि Unity के भीतर कोई runtime logic संशोधित नहीं होती है - यदि आप चाहें तो नियमित रूप से Play Mode का उपयोग कर सकते हैं और अन्य लक्ष्य प्लेटफ़ॉर्म पर build कर सकते हैं। कुछ मामलों में इसका मतलब होगा कि आपके पास डुप्लिकेट कोड (C# कोड और मिलान करने वाला TypeScript logic) होगा। इसके कारण अतिरिक्त कार्य की मात्रा आपके प्रोजेक्ट पर निर्भर करती है।

**Unity में Play Mode दर्ज करें**
`Project Settings > Needle Engine` में, आप Needle की build प्रक्रिया और Unity की build प्रक्रिया के बीच स्विच करने के लिए `Override Play Mode` और `Override Build settings` बंद कर सकते हैं:
![image](https://user-images.githubusercontent.com/2693840/187308490-5acb9016-ffff-4113-be62-4de450a42b08.png)

## Unity के लिए Needle Engine Commandline Arguments

Unity के लिए Needle Engine बैच मोड (windowsless) में एकल संपत्ति (Prefabs या Scenes) निर्यात करने या पूरी वेब प्रोजेक्ट को build करने के लिए विभिन्न commandline arguments का समर्थन करता है।

निम्नलिखित सूची उपलब्ध विकल्पों की एक तालिका प्रदान करती है:

| | |
| -- | -- |
| `-scene` | export किए जाने वाले दृश्य या संपत्ति का पथ, उदा. `Assets/path/to/myObject.prefab` या `Assets/path/to/myScene.unity` |
| `-outputPath <path/to/output.glb>` | build के लिए आउटपुट पथ सेट करें (केवल एक दृश्य build करते समय मान्य) |
| `-buildProduction` | एक production build चलाएं |
| `-buildDevelopment` | एक development build चलाएं |
| `-debug` | debugging के लिए एक कंसोल विंडो खोलें |

---
पेज AI द्वारा स्वचालित रूप से अनुवादित