---
title: Blender के लिए Needle Engine
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


![सेटिंग्स](/blender/settings.webp)

## शुरुआत करना

Blender के लिए Needle Engine का उपयोग करने के लिए धन्यवाद।

इस ऐड-ऑन के साथ आप Blender के अंदर अत्यधिक इंटरैक्टिव और अनुकूलित WebGL और WebXR अनुभव बना सकते हैं, जो Needle Engine और three.js का उपयोग करके चलते हैं।

आप एनिमेशन को अनुक्रमित करने, अपने सीन को आसानी से लाइटमैप करने, इंटरैक्टिविटी जोड़ने या अपनी खुद की स्क्रिप्ट बनाने में सक्षम होंगे जो Typescript या Javascript में लिखी गई हैं और वेब पर चलती हैं।

<video-embed src="/docs/blender/environment-light.mp4" />
*Blender और Needle Engine के बीच लाइटिंग और एनवायरनमेंट सेटिंग्स का मिलान। HDRI एनवायरनमेंट लाइट Blender से सीधे स्वचालित रूप से एक्सपोर्ट की जाती हैं। एक बार सेव करने के बाद, पेज स्वचालित रूप से रीलोड हो जाता है।*

:::tip फीडबैक देना

**आपका फीडबैक अनमोल है** जब यह तय करने की बात आती है कि हमें किन फीचर्स और वर्कफ़्लो को प्राथमिकता देनी चाहिए। यदि आपके पास हमारे लिए फीडबैक है (अच्छा या बुरा), तो कृपया [हमें फोरम में बताएं](https://forum.needle.tools/?utm_source=needle_docs&utm_content=content)!
:::

## Blender के लिए सैंपल

- [Blender सैंपल डाउनलोड करें](https://engine.needle.tools/downloads/blender/download-samples?utm_source=needle_docs&utm_content=blender)

सबसे पहले एक नई blend file बनाएं या खोलें जिसे आप वेब पर एक्सपोर्ट करना चाहते हैं। प्रॉपर्टीज़ विंडो खोलें, सीन श्रेणी खोलें। Needle Engine पैनल में `Project Path` चुनें। फिर `Generate Project` पर क्लिक करें। यह स्वचालित रूप से सर्वर इंस्टॉल और स्टार्ट करेगा - एक बार पूरा होने के बाद आपका ब्राउज़र खुल जाएगा और threejs सीन लोड हो जाएगा।

![प्रोजेक्ट पैनल](/blender/project-panel.webp)

डिफ़ॉल्ट रूप से आपकी सीन स्वचालित रूप से री-एक्सपोर्ट हो जाएगी जब आप blend file को सेव करेंगे। यदि स्थानीय सर्वर चल रहा है (जैसे `Run Project` पर क्लिक करके) तो वेबसाइट स्वचालित रूप से आपके बदले हुए मॉडल के साथ रीफ्रेश हो जाएगी।


जब आपका वेब प्रोजेक्ट पहले से मौजूद है और आप सिर्फ वेबसाइट पर काम करना जारी रखना चाहते हैं, स्थानीय सर्वर शुरू करने के लिए नीले `Run Project` बटन पर क्लिक करें:
![प्रोजेक्ट पैनल](/blender/project-panel-2.webp)

### प्रोजेक्ट पैनल अवलोकन
![प्रोजेक्ट पैनल](/blender/project-panel-3.webp)

1) आपके वेब प्रोजेक्ट का पाथ। आप एक अलग पाथ चुनने के लिए दाईं ओर छोटे फ़ोल्डर बटन का उपयोग कर सकते हैं।
2) `Run Project` बटन तब दिखाई देता है जब प्रोजेक्ट पाथ किसी मान्य वेब प्रोजेक्ट को दिखाता है। एक वेब प्रोजेक्ट मान्य होता है जब उसमें `package.json` होता है।
3) `Directory` आपके वेब प्रोजेक्ट की डायरेक्टरी खोलें (`Project Path`)।
4) यह बटन वर्तमान सीन को आपके स्थानीय वेब प्रोजेक्ट में एक glb के रूप में री-एक्सपोर्ट करता है। जब आप अपनी blend file सेव करते हैं तो यह डिफ़ॉल्ट रूप से भी होता है।
5) `Code Editor` आपके वेब प्रोजेक्ट में vscode वर्कस्पेस खोलने का प्रयास करता है।
6) यदि आप एक blend file में कई सीन्स के साथ काम करते हैं, तो आप कॉन्फ़िगर कर सकते हैं कि कौन सा सीन आपका Main scene है और इसे वेब पर एक्सपोर्ट किया जाना चाहिए। यदि आपके कोई components किसी अन्य सीन को संदर्भित करते हैं, तो उन्हें भी अलग glb फ़ाइलों के रूप में एक्सपोर्ट किया जाएगा। "Export" बटन पर क्लिक करने पर, आपका Main scene वह होगा जो ब्राउज़र में लोड होगा।
7) जब आप अपने वेब प्रोजेक्ट को किसी सर्वर पर अपलोड करना चाहते हैं तो `Build: Development` या `Build: Production` बटन का उपयोग करें। यह आपके वेब प्रोजेक्ट को बंडल करेगा और उन फ़ाइलों को उत्पन्न करेगा जिन्हें आप अपलोड कर सकते हैं। `Build: Production` पर क्लिक करने पर यह आपके textures पर Optimization भी लागू करेगा (उन्हें वेब के लिए compress किया जाएगा)।
8) documentation खोलें।



## Blender सेटिंग्स

### कलर मैनेजमेंट

डिफ़ॉल्ट रूप से Blender Viewport `Filmic` पर सेट होता है - इस सेटिंग के साथ Blender और three.js में आपके रंग मेल नहीं खाएंगे।
इसे ठीक करने के लिए Blender Render श्रेणी पर जाएं और ColorManagement पैनल में `View Transform`: `Standard` चुनें।

![सही कलर मैनेजमेंट सेटिंग्स](/blender/settings-color-management.webp)


## एनवायरनमेंट लाइटिंग

आप Viewport शेडिंग विकल्पों का उपयोग करके एनवायरनमेंट लाइटिंग और स्काईबॉक्स को बदल सकते हैं। लाइटिंग या बैकग्राउंड स्काईबॉक्स के लिए उपयोग करने के लिए एक cubemap असाइन करें। आप उपस्थिति को अपनी पसंद के अनुसार संशोधित करने के लिए strength या blur समायोजित कर सकते हैं।

नोट: ब्राउज़र में स्काईबॉक्स cubemap भी देखने के लिए `World Opacity` को 1 तक बढ़ाएं।

नोट: वैकल्पिक रूप से आप blender वर्ल्ड सेटिंग्स में असाइन किए गए environment texture का उपयोग करने के लिए Viewport शेडिंग टैब में `Scene World` सेटिंग सक्षम कर सकते हैं।

![एनवायरनमेंट](/blender/environment.webp)

<video-embed limit_height max_height="300px" src="/docs/blender/environment.mp4" />

वैकल्पिक रूप से यदि आप पृष्ठभूमि के रूप में cubemap नहीं देखना चाहते हैं तो अपने Blender Camera में एक Camera component जोड़ें और `clearFlags: SolidColor` बदलें - ध्यान दें कि Camera `backgroundBlurriness` और `backgroundIntensity` सेटिंग्स Viewport शेडिंग सेटिंग्स को ओवरराइड करती हैं।

![एनवायरनमेंट कैमरा](/blender/environment-camera.webp)

### अपनी कस्टम HDRI / EXR एनवायरनमेंट लाइटिंग और स्काईबॉक्स जोड़ें

<video-embed limit_height src="/docs/blender/custom_hdri.mp4" />


## एक्सपोर्ट करें

किसी ऑब्जेक्ट को एक्सपोर्ट से बाहर करने के लिए आप Viewport और Render display को अक्षम कर सकते हैं (नीचे दी गई छवि देखें)

![एक्सपोर्ट से बाहर करें](/blender/dont-export.webp)


## एनिमेशन 🏇

सरल उपयोग के मामलों के लिए आप एक या कई animationclips के प्लेबैक के लिए Animation component का उपयोग कर सकते हैं। बस अपने ऑब्जेक्ट का चयन करें, एक Animation component जोड़ें और क्लिप असाइन करें (आप clips array में एक्सपोर्ट करने के लिए अतिरिक्त क्लिप्स जोड़ सकते हैं)। डिफ़ॉल्ट रूप से यह केवल पहले क्लिप को प्लेबैक करेगा जब `playAutomatically` सक्षम होगा। आप एक सरल कस्टम typescript component का उपयोग करके अन्य क्लिप्स को ट्रिगर कर सकते हैं।
<video-embed limit_height src="/docs/blender/animation.mp4" />

### AnimatorController

AnimatorController अधिक जटिल परिदृश्यों के लिए बनाया जा सकता है। यह एक statemachine के रूप में काम करता है जो आपको graph में कई एनिमेशन स्टेट्स बनाने और उनके बीच transitions के लिए conditions और interpolation सेटिंग्स को कॉन्फ़िगर करने की अनुमति देता है।

<video-embed src="/docs/blender/animatorcontroller-web.mp4" />
*जटिल कैरेक्टर एनिमेशन को नियंत्रित करने के लिए [Animator statemachines](#animatorcontroller) बनाएं और एक्सपोर्ट करें*


#### AnimatorController बनाना

AnimatorController संपादक को प्रत्येक पैनल के ऊपर बाईं ओर EditorType ड्रॉपडाउन का उपयोग करके खोला जा सकता है:

![AnimatorController विंडो खोलें](/blender/animatorcontroller-open.webp)

<video-embed limit_height max_height="188px" src="/blender/animatorcontroller-create.mp4" />
*एक नई animator-controller asset बनाना ☝ या अपनी पहले बनाई गई assets में से एक का चयन करना*

##### ग्राफ अवलोकन
![AnimatorController अवलोकन](/blender/animatorcontroller-overview.webp)
1) एक नया AnimatorState बनाने के लिए `Shift+A` का उपयोग करें।
2) एक बार जब आप पहला node जोड़ते हैं, तो `Parameters` node बनाया जाएगा। transitions में उपयोग किए जाने वाले parameters (दाहिनी सीमा पर Node panel के माध्यम से) सेट करने के लिए इसे चुनें।
3) यह एक AnimatorState है। नारंगी state स्टार्ट state है (इसे Node/Properties panel में `Set default state` बटन का उपयोग करके बदला जा सकता है)।
4) AnimatorState की Properties का उपयोग अन्य states में एक या कई transitions सेट करने के लिए किया जा सकता है। transition करने के लिए conditions का मिलान करने वाले parameters चुनने के लिए `Conditions` array का उपयोग करें।

#### AnimatorController का उपयोग करना

AnimatorController का उपयोग करने के लिए अपनी एनिमेशन के root object में एक Animator component जोड़ें और उस AnimatorController asset का चयन करें जिसे आप इस object के लिए उपयोग करना चाहते हैं।

![AnimatorController को Animator को असाइन करना](/blender/animatorcontroller-assigning.webp)

आप typescript से या e.g. एक Button component की event का उपयोग करके Animator parameters सेट कर सकते हैं।


### टाइमलाइन — NLA Tracks एक्सपोर्ट 🎬

आप Blender NLA tracks को सीधे वेब पर एक्सपोर्ट कर सकते हैं। किसी भी blender object में PlayableDirector component (`Add Component` के माध्यम से) जोड़ें। component में ``animation tracks`` सूची में उन objects को असाइन करें जिनके NLA tracks आप एक्सपोर्ट करना चाहते हैं।

![](/blender/timeline_setup.webp)
![](/blender/timeline.webp)

::: details इंटरैक्टिव टाइमलाइन प्लेबैक के लिए कोड उदाहरण
इस script को `src/scripts` में जोड़ें (custom components section देखें) और ब्राउज़र में scroll करके timeline के समय को नियंत्रित करने के लिए इसे Blender में किसी भी object में जोड़ें।

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

आप Needle Components पैनल का उपयोग करके अपनी hierarchy में objects में components जोड़ या हटा सकते हैं:

![कंपोनेंट पैनल](/blender/components-panel.webp)

![कंपोनेंट पैनल चयन](/blender/components-panel-select.webp)
*उदाहरण के लिए Camera object में एक `OrbitControls` component जोड़कर*
*आपको mobile और desktop devices के लिए basic camera controls मिलते हैं*
*प्रत्येक component के लिए उनकी संबंधित panels में settings समायोजित करें*

Components को नीचे दाईं ओर X बटन का उपयोग करके हटाया जा सकता है:

![कंपोनेंट हटाएं](/blender/remove-component.webp)

### Custom Components
Custom components को केवल Typescript classes लिखकर भी आसानी से जोड़ा जा सकता है। वे स्वचालित रूप से compile होंगे और save होने पर Blender में दिखाई देंगे।

Custom components बनाने के लिए Needle Project पैनल के माध्यम से workspace खोलें और अपने web project के अंदर `src/scripts` में एक `.ts` script file जोड़ें। Needle Engine के लिए custom components कैसे लिखें, यह जानने के लिए कृपया [scripting documentation](http://docs.needle.tools/scripting) देखें।

::: warning ध्यान दें
सुनिश्चित करें कि आपके web project में (package.json devDependencies) ``@needle-tools/needle-component-compiler`` 2.x इंस्टॉल है।
:::

## लाइटमैपिंग 💡

Needle में एक lightmapping plugin शामिल है जो textures पर सुंदर lights बेक करना और उन्हें वेब पर लाना बहुत आसान बनाता है। plugin स्वचालित रूप से lightmap के लिए चिह्नित सभी model के लिए lightmap UVs उत्पन्न करेगा, manual texture atlas बनाने की कोई आवश्यकता नहीं है। यह अपने स्वयं के lightmap data के साथ कई instances की lightmapping का भी समर्थन करता है। lightmapping के काम करने के लिए, आपको कम से कम एक light और Needle Object पैनल में `Lightmapped` ऑन किए गए कम से कम एक object की आवश्यकता है।

<video-embed limit_height max_height="800px" src="/docs/blender/lightmapping.mp4" />

::: tip
आप वीडियो से .blend file [यहां](https://engine.needle.tools/downloads/blender/lightmaps.blend) डाउनलोड कर सकते हैं।
:::
mesh object या light के लिए lightmapping सक्षम करने के लिए Needle Object पैनल का उपयोग करें:

![लाइटमैपिंग ऑब्जेक्ट](/blender/lightmapping-object.webp)

lightmap settings और baking options तक त्वरित पहुंच के लिए आप `Needle` tab में scene view panel का उपयोग कर सकते हैं:

![लाइटमैपिंग सीन पैनल](/blender/lightmapping-scene-panel.webp)

वैकल्पिक रूप से आप `Render Properties` tab में Lightmapping panel का भी उपयोग कर सकते हैं:

![लाइटमैपिंग ऑब्जेक्ट](/blender/lightmapping-panel.webp)

::: warning प्रायोगिक फीचर
lightmapping plugin प्रायोगिक है। हम इसका उपयोग करते समय अपनी .blend file का बैकअप बनाने की सलाह देते हैं। कृपया हमारे [फोरम](https://forum.needle.tools/?utm_source=needle_docs&utm_content=content) में आपको आने वाली समस्याओं या त्रुटियों की रिपोर्ट करें 🙏
:::

## टेक्सचर कंप्रेशन

Needle Engine Build Pipeline स्वचालित रूप से ETC1S और UASTC (सामग्री में उनके उपयोग के आधार पर) का उपयोग करके textures को compress करता है जब एक production build बनाया जाता है (**इसके लिए [toktx](../getting-started/index.md#install-these-tools-for-production-builds) इंस्टॉल होना आवश्यक है**)। लेकिन आप Material panel में प्रति texture compression के प्रकार को override या बदल सकते हैं।

आप उस compression को संशोधित कर सकते हैं जो प्रति texture लागू हो रहा है। डिफ़ॉल्ट compression settings को override करने के लिए `Material` tab पर जाएं और `Needle Material Settings` खोलें। वहां आपको अपनी सामग्री में उपयोग किए गए प्रति texture texture settings को override करने के लिए एक toggle मिलेगा। प्रत्येक compression algorithm के बीच अंतर के संक्षिप्त अवलोकन के लिए [texture compression table](../deployment.md#how-do-i-choose-between-etc1s-uastc-and-webp-compression) देखें।

![Blender में टेक्सचर कंप्रेशन विकल्प](/blender/texture-compression.webp)

## अपडेट करना

Needle Project panel में lightbulb आपको सूचित करता है कि add-on का एक नया संस्करण उपलब्ध है। नया संस्करण डाउनलोड करने के लिए बस icon पर क्लिक करें।
![अपडेट सूचना](/blender/updates.webp)

## किसी समस्या की रिपोर्ट करना

यदि आपको कोई समस्या आती है तो हमें मदद करके बहुत खुशी होगी! त्वरित सहायता के लिए कृपया [हमारे फोरम](https://forum.needle.tools/?utm_source=needle_docs&utm_content=content) में शामिल हों।

कृपया Blender में logs भी जांचें। आप Blender में `Help/Needle` के माध्यम से Needle Engine Addon के विशिष्ट logs पा सकते हैं।

### इंटीग्रेटेड Bug Reporter
![Needle Blender Bug Reporter panel](/blender/bugreporter.webp)
आप Blender से सीधे एक bugreport स्वचालित रूप से बना और अपलोड भी कर सकते हैं। अपलोड की गई bugreports का उपयोग केवल debugging के लिए किया जाएगा। वे हमारे backend पर encrypted हैं और 30 दिनों के बाद हटा दी जाएंगी।

यदि आवश्यक हो, कुछ मामलों में हम आपके प्रोजेक्ट के लिए custom NDAs भी सेट अप कर सकते हैं। अधिक जानकारी के लिए कृपया हमसे संपर्क करें।

:::tip Bug Reporter का उपयोग करने के लिए web project आवश्यक है
सुनिश्चित करें कि bug report भेजने से पहले आपने एक web project सेट अप कर लिया है - यह हमें आपके system और setup के बारे में अधिक समझने और समस्या को दोहराने में आसान बनाने में मदद करेगा।
:::

# अगले कदम

- [कॉन्सेप्ट: Web Projects](../project-structure.md)
- [कॉन्सेप्ट: Assets एक्सपोर्ट करना](../export.md)
- [कॉन्सेप्ट: Deployment (अपनी website साझा करें)](../deployment.md)
- [Components: Everywhere Actions के बारे में जानें](../everywhere-actions.md)
- [Beginner Scripting: Typescript essentials](../getting-started/typescript-essentials.md)
- [Beginner Scripting: Custom components कैसे लिखें](../scripting.md)

---
पेज AI का उपयोग करके स्वचालित रूप से अनुवादित है