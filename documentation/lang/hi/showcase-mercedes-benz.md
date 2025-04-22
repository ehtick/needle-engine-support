---
lang: hi-IN
title: मर्सिडीज-बेंज शोकेस
editLink: false
---

## परिचय

नमस्ते, मेरा नाम Kryštof है और मैंने Needle पर एक रिसर्च प्रोजेक्ट किया है। [हमारी कंपनी](https://www.ishowroom.cz/home/) में, हम यह निर्धारित करना चाहते थे कि Needle हमारे कार्यप्रवाह में कैसे मदद कर सकता है। हमारे पास एक स्थानीय ग्राहक है जो लक्जरी कारों के पुनर्विक्रय पर ध्यान केंद्रित करता है। हमने पहले ही Unity का उपयोग करके एक मोबाइल ऐप और VR अनुभव प्रदान किया है। हमारे पास इंजन में लगभग 30 अद्वितीय कारें तैयार हैं। हम ग्राहक की वेबसाइट को अधिक कॉन्फ़िगरेशन विकल्पों के साथ आकर्षक डिजिटल क्लोन के साथ विस्तारित करने की योजना बना रहे हैं। Needle, Unity और वेब विज़ुअल के बीच एक पूर्ण 1:1 रूपांतरण प्राप्त कर सकता है। यह हमारे कार्यप्रवाह के लिए एक बहुत बड़ा लाभ होगा। इसलिए यहीं से हमारे शोध की शुरुआत हुई।


<sample src="https://engine.needle.tools/demos/mercedes-benz-demo/" />


## संदर्भ

मुझे javascript, typescript या three.js का बहुत अधिक अनुभव नहीं है, इसलिए मेरा दृष्टिकोण एक अर्ध-अनुभवी Unity डेवलपर का है जो वेब अनुभव बनाने का सबसे सरल तरीका आज़मा रहा है। जो लोग Unity WebGL सुझाएंगे, वह दुर्भाग्य से काम नहीं करता है और मोबाइल ब्राउज़र पर लचीला नहीं है। Needle 💚 है


## लाइटिंग

हमारा लाइटिंग मॉडल Unity में reflection probes पर आधारित है। हमें किसी भी directional या point lights की आवश्यकता नहीं है, केवल ambient lighting की आवश्यकता है।


हम इस skybox का उपयोग कर रहे हैं:

 ![Skybox](/showcase-mercedes/1_skybox.png)

जो paint job पर ऐसा दिखता है:

![Paintjob](/showcase-mercedes/2_paintjob_simple.jpg)

फिर थोड़ा विवरण जोड़ने के लिए, मैंने specular highlights बनाने के लिए नगण्य तीव्रता (0.04) वाले 2 directional lights जोड़े हैं। तो पहले यह ऐसा दिखता था:

![Specular off](/showcase-mercedes/3_SpecularHighlights_off.jpg)

लेकिन जोड़े गए directional lights के साथ इसने एक बेहतर dynamic जोड़ा। उच्च तीव्रता के साथ प्रभाव को गहरा किया जा सकता है:

![Specular on](/showcase-mercedes/4_SpecularHighlights_on.jpg)



## बैकग्राउंड

दृश्य अब ऐसा दिखता है:

![No background](/showcase-mercedes/5_NoBackground.jpg)

काला बैकग्राउंड बहुत सुंदर नहीं है। इसलिए visual और lighting skyboxes के बीच अंतर करने के लिए मैंने एक inverse sphere जोड़ा है जो पूरे मैप को लपेटता है।

![With background](/showcase-mercedes/6_MapBackground.png)

gradient हल्के ग्रे से सफेद रंग तक जाता है..

यह प्रभाव केवल एक उचित UV mapping और एक single pixel high texture के साथ आसानी से बनाया जा सकता है जो gradient को परिभाषित करेगा।

मैंने shader graph में एक unlit shader बनाया है:

![Evironemnt shader](/showcase-mercedes/7_EnvShaderGraph.jpg)

मैंने एक color banding समस्या देखी है, इसलिए मैंने dithering लागू करने का प्रयास किया है। सच कहूं तो, इसने artefacts में मदद नहीं की, लेकिन मुझे यकीन है कि उस समस्या का एक सरल समाधान है। तो shader का ऊपरी हिस्सा object space में Y अक्ष के आधार पर gradient का sample लेता है। और निचला हिस्सा color banding को negate करने की कोशिश करता है।

shaders का उपयोग करके gradient का उपयोग करना और उसे iterate करना आसान हो जाता है। Needle के Shadergraph markdown asset का उपयोग करके, यह और भी सरल है! 🌵

![Gradiant](/showcase-mercedes/8_Gradiant.png)


## कार की नकली गति

दृश्य अभी static है क्योंकि कुछ भी हिलता नहीं है। हम गति की नकली भावना जोड़कर इसे negate कर सकते हैं। पहियों में गति जोड़कर शुरुआत करते हैं।

Rotator नामक एक सरल component के साथ, हम एक axis और उस पर गति परिभाषित करते हैं।

![Rotator](/showcase-mercedes/9_Rotator.png)
```ts twoslash
import { Behaviour, serializable } from "@needle-tools/engine";

export enum RotationAxis {
    X, Y, Z
}

export class Rotator extends Behaviour {
    //@type RotationAxis
    @serializable()
    axis : RotationAxis = RotationAxis.X;

    @serializable()
    speed : number = 1;

    update() {
        const angle = this.speed * this.context.time.deltaTime;
        switch(this.axis) {
            case RotationAxis.X:
                this.gameObject.rotateX(angle);
                break;
            case RotationAxis.Y:
                this.gameObject.rotateY(angle);
                break;
            case RotationAxis.Z:
                this.gameObject.rotateZ(angle);
                break;
        }
    }
}
```


उपयोगकर्ता अब एक कार को गहरी शून्यता में चलाते हुए देखता है, रंग किसी भी चीज़ जैसा नहीं दिखता है और अनुभव नीरस है। हम मॉडल को ground करना चाहते हैं और यह एक grid जोड़कर और फिर उसे shift करके किया जाता है ताकि ऐसा लगे कि कार चल रही है। हम यही हासिल करना चाहते हैं:

![Motion](/showcase-mercedes/10_WheelsAndGrid.png)

grid के लिए shader दो भागों से बना था। grid का एक सरल tiled texture जिसे circular gradient द्वारा multiply किया जा रहा है ताकि किनारे fade off हो जाएं।

![Grid](/showcase-mercedes/11_GridShader.jpg)


## अतिरिक्त तत्व

इस tech demo का लक्ष्य कार की क्षमताओं को प्रदर्शित करना है।

आइए पहियों को उजागर करके शुरुआत करते हैं।

![Wheel highlight](/showcase-mercedes/12_WheelWithText.png)

इस shader को एक plane में जोड़ने से एक dashed circle बनेगा जो परिभाषित गति से घूम रहा है। world space UI के साथ एक सामान्य Text component के संयोजन से यह दिए गए उत्पाद की कुछ रोचक क्षमताओं या parameters को उजागर कर सकता है।

![Wheel shader](/showcase-mercedes/13_WheelShader.jpg)

पहियों को प्रदर्शित करने के बाद हम उत्पाद के बारे में विस्तृत जानकारी के साथ समाप्त करना चाहते हैं। इस मामले में, वह कार का पूरा नाम और शायद कुछ उपलब्ध कॉन्फ़िगरेशन होंगे।

![Rear UI](/showcase-mercedes/14_RearUI.jpg)



## सारांश

Unity के timeline का उपयोग करके हम नियंत्रित कर सकते हैं कि wheel dashes और text कब दिखाए जाएंगे। यह camera animation द्वारा पूरक है।


## निष्कर्ष

Needle Engine हमारे लिए एक बहुत अच्छा उम्मीदवार लगता है!

कुछ विशेषताएं हैं जो हमें याद आती हैं।

उदाहरण के लिए, Lit Shader Graphs के लिए उचित समर्थन होगा। लेकिन तीन.js तरीके से shaders बनाने और हमारी सामग्री टीम के लिए सामग्री को tweak करने के लिए Unity में समान shaders बनाने से हमें कुछ भी नहीं रोकता है।

Needle का उपयोग करना शानदार था! 🌵


पेज का अनुवाद AI द्वारा स्वतः किया गया है