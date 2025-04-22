---
title: Needle Engine for Blender
editLink: true
---
<br/>
<div class="centered" style="display: flex;
    align-items: center;
    gap: 20px;
    font-size: 2em;
    font-weight: 100;">
    <img src="/logo.png" style="max-height:70px;" title="Needle Logo" alt="Needle Logo"/> +
    <img src="/blender/logo.png" style="max-height:70px;" />
</div>

# Blender के लिए Needle Engine

Blender के लिए Needle Engine आपको Blender के अंदर ही अत्यधिक इंटरैक्टिव, लचीले और हल्के वेब एप्लिकेशन बनाने की अनुमति देता है। अपने 3D सीन को विज़ुअली सेट करने, एनिमेशन और डिज़ाइन बनाने के लिए Blender के शक्तिशाली टूल का उपयोग करें।

## Blender ऐड-ऑन इंस्टॉल करें

<ClientOnly>

सुनिश्चित करें कि आपने <a target="_blank" href="https://www.blender.org/download/"><strong>Blender</strong> 4.1 या 4.2</a> और <os-link windows_url="https://nodejs.org/dist/v20.9.0/node-v20.9.0-x64.msi" osx_url="https://nodejs.org/dist/v20.9.0/node-v20.9.0.pkg"><strong>node.js</strong></os-link> इंस्टॉल कर लिया है।
</ClientOnly>

<NoDownloadYet>
    <needle-button
        event_goal="download_blender"
        event_position="getting_started"
        large
        href="https://engine.needle.tools/downloads/blender?utm_source=needle_docs&utm_content=getting_started"
        same_tab
        next_url="/docs/blender/"
        >
        <strong>Blender के लिए Needle Engine डाउनलोड करें</strong>
    </needle-button>
</NoDownloadYet>

1. Blender में, `Edit > Preferences > Add-ons` पर जाएं और `Install from Disk` बटन खोजने के लिए ड्रॉप डाउन तीर पर क्लिक करें।

2. इसे इंस्टॉल करने के लिए डाउनलोड की गई zip फ़ाइल (`needle-blender-plugin-*.zip` नाम से) चुनें।

3. Add-ons सर्च बार में "Needle" खोजें और सुनिश्चित करें कि `Needle Engine Exporter for Blender` सक्षम है।


![Settings](/blender/settings.webp)

## शुरुआत करना

Blender के लिए Needle Engine का उपयोग करने के लिए धन्यवाद।

इस ऐड-ऑन के साथ आप Blender के अंदर अत्यधिक इंटरैक्टिव और अनुकूलित WebGL और WebXR अनुभव बना सकते हैं, जो Needle Engine और three.js का उपयोग करके चलते हैं।

आप एनिमेशन को अनुक्रमित करने, अपने सीन को आसानी से लाइटमैप करने, इंटरैक्टिविटी जोड़ने या अपनी खुद की स्क्रिप्ट बनाने में सक्षम होंगे जो Typescript या Javascript में लिखी गई हैं और वेब पर चलती हैं।

<video-embed src="/docs/blender/environment-light.mp4" />
*Blender और Needle Engine के बीच लाइटिंग और एनवायरनमेंट सेटिंग्स का मिलान। HDRI एनवायरनमेंट लाइट Blender से सीधे स्वचालित रूप से एक्सपोर्ट की जाती हैं। एक बार सेव करने के बाद, पेज स्वचालित रूप से रीलोड हो जाता है।*

:::tip फीडबैक देना

**आपका फीडबैक अनमोल है** जब यह तय करने की बात आती है कि हमें किन फीचर्स और वर्कफ़्लोज़ को प्राथमिकता देनी चाहिए। यदि आपके पास हमारे लिए फीडबैक है (अच्छा या बुरा), तो कृपया [हमें फोरम में बताएं](https://forum.needle.tools/?utm_source=needle_docs&utm_content=content)!
:::

## Blender के लिए सैंपल

- [Blender सैंपल डाउनलोड करें](https://engine.needle.tools/downloads/blender/download-samples?utm_source=needle_docs&utm_content=blender)

सबसे पहले एक नई ब्लेंड फ़ाइल बनाएं या खोलें जिसे आप वेब पर एक्सपोर्ट करना चाहते हैं। प्रॉपर्टीज़ विंडो खोलें, सीन श्रेणी खोलें। Needle Engine पैनल में `Project Path` चुनें। फिर `Generate Project` पर क्लिक करें। यह स्वचालित रूप से सर्वर इंस्टॉल और स्टार्ट करेगा - एक बार पूरा होने के बाद आपका ब्राउज़र खुल जाएगा और threejs सीन लोड हो जाएगा।

![Project panel](/blender/project-panel.webp)

डिफ़ॉल्ट रूप से आपकी सीन स्वचालित रूप से री-एक्सपोर्ट हो जाएगी जब आप ब्लेंड फ़ाइल को सेव करेंगे। यदि स्थानीय सर्वर चल रहा है (जैसे `Run Project` पर क्लिक करके) तो वेबसाइट स्वचालित रूप से आपके बदले हुए मॉडल के साथ रीफ्रेश हो जाएगी।


जब आपका वेब प्रोजेक्ट पहले से मौजूद है और आप सिर्फ वेबसाइट पर काम करना जारी रखना चाहते हैं, स्थानीय सर्वर शुरू करने के लिए नीले `Run Project` बटन पर क्लिक करें:
![Project panel](/blender/project-panel-2.webp)

### प्रोजेक्ट पैनल अवलोकन
![Project panel](/blender/project-panel-3.webp)

1) आपके वेब प्रोजेक्ट का पाथ। आप एक अलग पाथ चुनने के लिए दाईं ओर छोटे फ़ोल्डर बटन का उपयोग कर सकते हैं।
2) `Run Project` बटन तब दिखाई देता है जब प्रोजेक्ट पाथ किसी मान्य वेब प्रोजेक्ट को दिखाता है। एक वेब प्रोजेक्ट मान्य होता है जब उसमें `package.json` होता है।
3) `Directory` आपके वेब प्रोजेक्ट की डायरेक्टरी खोलें (`Project Path`)।
4) यह बटन वर्तमान सीन को आपके स्थानीय वेब प्रोजेक्ट में एक glb के रूप में री-एक्सपोर्ट करता है। जब आप अपनी ब्लेंड फ़ाइल सेव करते हैं तो यह डिफ़ॉल्ट रूप से भी होता है।
5) `Code Editor` आपके वेब प्रोजेक्ट में vscode वर्कस्पेस खोलने का प्रयास करता है।
6) यदि आप एक ब्लेंड फ़ाइल में कई सीन्स के साथ काम करते हैं, तो आप कॉन्फ़िगर कर सकते हैं कि कौन सा सीन आपका Main सीन है और इसे वेब पर एक्सपोर्ट किया जाना चाहिए। यदि आपके कोई कंपोनेंट किसी अन्य सीन को संदर्भित करते हैं, तो उन्हें भी अलग glb फ़ाइलों के रूप में एक्सपोर्ट किया जाएगा। "Export" बटन पर क्लिक करने पर, आपका Main सीन वह होगा जो ब्राउज़र में लोड होगा।
7) जब आप अपने वेब प्रोजेक्ट को किसी सर्वर पर अपलोड करना चाहते हैं तो `Build: Development` या `Build: Production` बटन का उपयोग करें। यह आपके वेब प्रोजेक्ट को बंडल करेगा और उन फ़ाइलों को उत्पन्न करेगा जिन्हें आप अपलोड कर सकते हैं। `Build: Production` पर क्लिक करने पर यह आपके टेक्सचर पर ऑप्टिमाइज़ेशन भी लागू करेगा (उन्हें वेब के लिए कंप्रेस किया जाएगा)।
8) दस्तावेज़ खोलें।



## Blender सेटिंग्स

### कलर मैनेजमेंट

डिफ़ॉल्ट रूप से Blender Viewport `Filmic` पर सेट होता है - इस सेटिंग के साथ Blender और three.js में आपके रंग मेल नहीं खाएंगे।
इसे ठीक करने के लिए Blender Render श्रेणी पर जाएं और ColorManagement पैनल में `View Transform`: `Standard` चुनें।

![Correct color management settings](/blender/settings-color-management.webp)


## एनवायरनमेंट लाइटिंग

आप Viewport शेडिंग विकल्पों का उपयोग करके एनवायरनमेंट लाइटिंग और स्काईबॉक्स को बदल सकते हैं। लाइटिंग या बैकग्राउंड स्काईबॉक्स के लिए उपयोग करने के लिए एक cubemap असाइन करें। आप उपस्थिति को अपनी पसंद के अनुसार संशोधित करने के लिए स्ट्रेंथ या ब्लर समायोजित कर सकते हैं।

नोट: ब्राउज़र में स्काईबॉक्स cubemap भी देखने के लिए `World Opacity` को 1 तक बढ़ाएं।

नोट: वैकल्पिक रूप से आप blender वर्ल्ड सेटिंग्स में असाइन किए गए एनवायरनमेंट टेक्सचर का उपयोग करने के लिए Viewport शेडिंग टैब में `Scene World` सेटिंग सक्षम कर सकते हैं।

![Environment](/blender/environment.webp)

<video-embed limit_height max_height="300px" src="/docs/blender/environment.mp4" />

वैकल्पिक रूप से यदि आप पृष्ठभूमि के रूप में cubemap नहीं देखना चाहते हैं तो अपने Blender Camera में एक Camera कंपोनेंट जोड़ें और `clearFlags: SolidColor` बदलें - ध्यान दें कि Camera `backgroundBlurriness` और `backgroundIntensity` सेटिंग्स Viewport शेडिंग सेटिंग्स को ओवरराइड करती हैं।

![Environment Camera](/blender/environment-camera.webp)

### अपनी कस्टम HDRI / EXR एनवायरनमेंट लाइटिंग और स्काईबॉक्स जोड़ें

<video-embed limit_height src="/docs/blender/custom_hdri.mp4" />


## एक्सपोर्ट करें

किसी ऑब्जेक्ट को एक्सपोर्ट से बाहर करने के लिए आप Viewport और Render डिस्प्ले को अक्षम कर सकते हैं (नीचे दी गई छवि देखें)

![Exclude from export](/blender/dont-export.webp)


## एनिमेशन 🏇

सरल उपयोग के मामलों के लिए आप एक या कई animationclips के प्लेबैक के लिए Animation कंपोनेंट का उपयोग कर सकते हैं। बस अपने ऑब्जेक्ट का चयन करें, एक Animation कंपोनेंट जोड़ें और क्लिप असाइन करें (आप क्लिप्स array में एक्सपोर्ट करने के लिए अतिरिक्त क्लिप्स जोड़ सकते हैं)। डिफ़ॉल्ट रूप से यह केवल पहले क्लिप को प्लेबैक करेगा जब `playAutomatically` सक्षम होगा। आप एक सरल कस्टम typescript कंपोनेंट का उपयोग करके अन्य क्लिप्स को ट्रिगर कर सकते हैं।
<video-embed limit_height src="/docs/blender/animation.mp4" />

### AnimatorController

AnimatorController अधिक जटिल परिदृश्यों के लिए बनाया जा सकता है। यह एक statemachine के रूप में काम करता है जो आपको ग्राफ में कई एनीमेशन स्टेट्स बनाने और उनके बीच ट्रांज़िशन के लिए कंडीशन्स और interpolation सेटिंग्स को कॉन्फ़िगर करने की अनुमति देता है।

<video-embed src="/docs/blender/animatorcontroller-web.mp4" />
*जटिल कैरेक्टर एनिमेशन को नियंत्रित करने के लिए [Animator statemachines](#animatorcontroller) बनाएं और एक्सपोर्ट करें*


#### AnimatorController बनाना

AnimatorController संपादक को प्रत्येक पैनल के ऊपर बाईं ओर EditorType ड्रॉपडाउन का उपयोग करके खोला जा सकता है:

![AnimatorController open window](/blender/animatorcontroller-open.webp)

<video-embed limit_height max_height="188px" src="/blender/animatorcontroller-create.mp4" />
*एक नई animator-controller एसेट बनाना ☝ या अपनी पहले बनाई गई एसेट्स में से एक का चयन करना*

##### ग्राफ अवलोकन
![AnimatorController overview](/blender/animatorcontroller-overview.webp)
1) एक नया AnimatorState बनाने के लिए `Shift+A` का उपयोग करें।
2) एक बार जब आप पहला नोड जोड़ते हैं, तो `Parameters` नोड बनाया जाएगा। ट्रांज़िशन में उपयोग किए जाने वाले पैरामीटर (दाहिनी सीमा पर नोड पैनल के माध्यम से) सेट करने के लिए इसे चुनें।
3) यह एक AnimatorState है। नारंगी स्टेट स्टार्ट स्टेट है (इसे Node/Properties पैनल में `Set default state` बटन का उपयोग करके बदला जा सकता है)।
4) AnimatorState की Properties का उपयोग अन्य स्टेट्स में एक या कई ट्रांज़िशन सेट करने के लिए किया जा सकता है। ट्रांज़िशन करने के लिए कंडीशन्स का मिलान करने वाले पैरामीटर चुनने के लिए `Conditions` array का उपयोग करें।

#### AnimatorController का उपयोग करना

AnimatorController का उपयोग करने के लिए अपनी एनिमेशन के रूट ऑब्जेक्ट में एक Animator कंपोनेंट जोड़ें और उस AnimatorController एसेट का चयन करें जिसे आप इस ऑब्जेक्ट के लिए उपयोग करना चाहते हैं।

![AnimatorController assign to animator](/blender/animatorcontroller-assigning.webp)

आप typescript से या e.g. एक Button कंपोनेंट की घटना का उपयोग करके Animator पैरामीटर सेट कर सकते हैं।


### टाइमलाइन — NLA ट्रैक्स एक्सपोर्ट 🎬

आप Blender NLA ट्रैक्स को सीधे वेब पर एक्सपोर्ट कर सकते हैं। किसी भी blender ऑब्जेक्ट में PlayableDirector कंपोनेंट (`Add Component` के माध्यम से) जोड़ें। कंपोनेंट में ``animation tracks`` सूची में उन ऑब्जेक्ट्स को असाइन करें जिनके NLA ट्रैक्स आप एक्सपोर्ट करना चाहते हैं।

![](/blender/timeline_setup.webp)
![](/blender/timeline.webp)

::: details इंटरैक्टिव टाइमलाइन प्लेबैक के लिए कोड उदाहरण
इस स्क्रिप्ट को `src/scripts` में जोड़ें (कस्टम कंपोनेंट सेक्शन देखें) और ब्राउज़र में स्क्रॉल करके टाइमलाइन के समय को नियंत्रित करने के लिए इसे Blender में किसी भी ऑब्जेक्ट में जोड़ें।

```ts twoslash
import { Behaviour, PlayableDirector, serializable, Mathf } from "@needle-tools/engine";

export class ScrollTimeline extends Behaviour {

    @serializable(PlayableDirector)
    timeline?: PlayableDirector;

    @serializable()
    sensitivity: number = .5;

    @serializable()
    clamp: boolean = false;

    private _targetTime: number = 0;

    awake() {
        this.context.domElement.addEventListener("wheel", this.onWheel);
        if (this.timeline) this.timeline.pause();
    }

    private onWheel = (e: WheelEvent) => {
        if (this.timeline) {
            this._targetTime = this.timeline.time + e.deltaY * 0.01 * this.sensitivity;
            if (this.clamp) this._targetTime = Mathf.clamp(this._targetTime, 0, this.timeline.duration);
        }
    }

    update(): void {
        if (!this.timeline) return;
        const time = Mathf.lerp(this.timeline.time, this._targetTime, this.context.time.deltaTime / .3);
        this.timeline.time = time;
        this.timeline.pause();
        this.timeline.evaluate();
    }
}
```
:::

## इंटरैक्टिविटी 😎

आप Needle Components पैनल का उपयोग करके अपनी हायरार्की में ऑब्जेक्ट्स में कंपोनेंट्स जोड़ या हटा सकते हैं:

![Component panel](/blender/components-panel.webp)

![Component panel](/blender/components-panel-select.webp)
*उदाहरण के लिए कैमरा ऑब्जेक्ट में एक `OrbitControls` कंपोनेंट जोड़कर*
*आपको मोबाइल और डेस्कटॉप डिवाइस के लिए मूल कैमरा नियंत्रण मिलते हैं*
*प्रत्येक कंपोनेंट के लिए उनकी संबंधित पैनल में सेटिंग्स समायोजित करें*

कंपोनेंट्स को नीचे दाईं ओर X बटन का उपयोग करके हटाया जा सकता है:

![Remove component](/blender/remove-component.webp)

### कस्टम कंपोनेंट्स
कस्टम कंपोनेंट्स को केवल Typescript क्लासेस लिखकर भी आसानी से जोड़ा जा सकता है। वे स्वचालित रूप से कंपाइल होंगे और सेव होने पर Blender में दिखाई देंगे।

कस्टम कंपोनेंट्स बनाने के लिए Needle Project पैनल के माध्यम से वर्कस्पेस खोलें और अपने वेब प्रोजेक्ट के अंदर `src/scripts` में एक `.ts` स्क्रिप्ट फ़ाइल जोड़ें। Needle Engine के लिए कस्टम कंपोनेंट्स कैसे लिखें, यह जानने के लिए कृपया [स्क्रिप्टिंग दस्तावेज़ीकरण](http://docs.needle.tools/scripting) देखें।

::: warning ध्यान दें
सुनिश्चित करें कि आपके वेब प्रोजेक्ट में (package.json devDependencies) ``@needle-tools/needle-component-compiler`` 2.x इंस्टॉल है।
:::

## लाइटमैपिंग 💡

Needle में एक लाइटमैपिंग प्लगइन शामिल है जो टेक्सचर पर सुंदर लाइटें बेक करना और उन्हें वेब पर लाना बहुत आसान बनाता है। प्लगइन स्वचालित रूप से लाइटमैप के लिए चिह्नित सभी मॉडल के लिए लाइटमैप UVs उत्पन्न करेगा, मैनुअल टेक्सचर atlas बनाने की कोई आवश्यकता नहीं है। यह अपने स्वयं के लाइटमैप डेटा के साथ कई इंस्टेंस की लाइटमैपिंग का भी समर्थन करता है। लाइटमैपिंग के काम करने के लिए, आपको कम से कम एक लाइट और Needle Object पैनल में `Lightmapped` ऑन किए गए कम से कम एक ऑब्जेक्ट की आवश्यकता है।

<video-embed limit_height max_height="800px" src="/docs/blender/lightmapping.mp4" />

::: tip
आप वीडियो से .blend फ़ाइल [यहां](https://engine.needle.tools/downloads/blender/lightmaps.blend) डाउनलोड कर सकते हैं।
:::
मेश ऑब्जेक्ट या लाइट के लिए लाइटमैपिंग सक्षम करने के लिए Needle Object पैनल का उपयोग करें:

![Lightmapping object](/blender/lightmapping-object.webp)

लाइटमैप सेटिंग्स और बेकिंग विकल्पों तक त्वरित पहुंच के लिए आप `Needle` टैब में सीन व्यू पैनल का उपयोग कर सकते हैं:

![Lightmapping scene panel](/blender/lightmapping-scene-panel.webp)

वैकल्पिक रूप से आप `Render Properties` टैब में Lightmapping पैनल का भी उपयोग कर सकते हैं:

![Lightmapping object](/blender/lightmapping-panel.webp)

::: warning प्रायोगिक फीचर
लाइटमैपिंग प्लगइन प्रायोगिक है। हम इसका उपयोग करते समय अपनी .blend फ़ाइल का बैकअप बनाने की सलाह देते हैं। कृपया हमारे [फोरम](https://forum.needle.tools/?utm_source=needle_docs&utm_content=content) में आपको आने वाली समस्याओं या त्रुटियों की रिपोर्ट करें 🙏
:::

## टेक्सचर कंप्रेशन

Needle Engine Build Pipeline स्वचालित रूप से ETC1S और UASTC (सामग्री में उनके उपयोग के आधार पर) का उपयोग करके टेक्सचर को कंप्रेस करता है जब एक प्रोडक्शन बिल्ड बनाया जाता है (**इसके लिए [toktx](../getting-started/index.md#install-these-tools-for-production-builds) इंस्टॉल होना आवश्यक है**)। लेकिन आप Material पैनल में प्रति टेक्सचर कंप्रेशन के प्रकार को ओवरराइड या बदल सकते हैं।

आप उस कंप्रेशन को संशोधित कर सकते हैं जो प्रति टेक्सचर लागू हो रहा है। डिफ़ॉल्ट कंप्रेशन सेटिंग्स को ओवरराइड करने के लिए `Material` टैब पर जाएं और `Needle Material Settings` खोलें। वहां आपको अपनी सामग्री में उपयोग किए गए प्रति टेक्सचर टेक्सचर सेटिंग्स को ओवरराइड करने के लिए एक टॉगल मिलेगा। प्रत्येक कंप्रेशन एल्गोरिथम के बीच अंतर के संक्षिप्त अवलोकन के लिए [टेक्सचर कंप्रेशन तालिका](../deployment.md#how-do-i-choose-between-etc1s-uastc-and-webp-compression) देखें।

![Texture Compression options in Blender](/blender/texture-compression.webp)

## अपडेट करना

Needle Project पैनल में लाइटबल्ब आपको सूचित करता है कि ऐड-ऑन का एक नया संस्करण उपलब्ध है। नया संस्करण डाउनलोड करने के लिए बस आइकन पर क्लिक करें।
![Update notification](/blender/updates.webp)

## किसी समस्या की रिपोर्ट करना

यदि आपको कोई समस्या आती है तो हमें मदद करके बहुत खुशी होगी! त्वरित सहायता के लिए कृपया [हमारे फोरम](https://forum.needle.tools/?utm_source=needle_docs&utm_content=content) में शामिल हों।

कृपया Blender में लॉग्स भी जांचें। आप Blender में `Help/Needle` के माध्यम से Needle Engine Addon के विशिष्ट लॉग्स पा सकते हैं।

### इंटीग्रेटेड बग रिपोर्टर
![Needle Blender Bug Reporter panel](/blender/bugreporter.webp)
आप Blender से सीधे एक बग रिपोर्ट स्वचालित रूप से बना और अपलोड भी कर सकते हैं। अपलोड की गई बग रिपोर्ट का उपयोग केवल डीबगिंग के लिए किया जाएगा। वे हमारे बैकएंड पर एन्क्रिप्टेड हैं और 30 दिनों के बाद हटा दी जाएंगी।

यदि आवश्यक हो, कुछ मामलों में हम आपके प्रोजेक्ट के लिए कस्टम एनडीए भी सेट अप कर सकते हैं। अधिक जानकारी के लिए कृपया हमसे संपर्क करें।

:::tip बग रिपोर्टर का उपयोग करने के लिए वेब प्रोजेक्ट आवश्यक है
सुनिश्चित करें कि बग रिपोर्ट भेजने से पहले आपने एक वेब प्रोजेक्ट सेट अप कर लिया है - यह हमें आपके सिस्टम और सेटअप के बारे में अधिक समझने और समस्या को दोहराने में आसान बनाने में मदद करेगा।
:::

# अगले कदम

- [कॉन्सेप्ट: वेब प्रोजेक्ट्स](../project-structure.md)
- [कॉन्सेप्ट: एसेट्स एक्सपोर्ट करना](../export.md)
- [कॉन्सेप्ट: डिप्लॉयमेंट (अपनी वेबसाइट साझा करें)](../deployment.md)
- [कंपोनेंट्स: एवरीवेयर एक्शन्स के बारे में जानें](../everywhere-actions.md)
- [बिगिनर स्क्रिप्टिंग: Typescript की आवश्यक बातें](../getting-started/typescript-essentials.md)
- [बिगिनर स्क्रिप्टिंग: कस्टम कंपोनेंट्स कैसे लिखें](../scripting.md)

---
पेज AI का उपयोग करके स्वचालित रूप से अनुवादित है