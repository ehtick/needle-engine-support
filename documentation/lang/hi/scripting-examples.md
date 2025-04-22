---
title: Scripting Examples
description: उपयोगी स्क्रिप्ट स्निपेट्स और उदाहरणों का संग्रह।
---

# स्क्रिप्टिंग उदाहरण

यदि आप स्क्रिप्टिंग के लिए नए हैं तो हम सबसे पहले निम्नलिखित गाइड पढ़ने की **अत्यधिक अनुशंसा** करते हैं:

- [Beginner Guide: Typescript Essentials](./getting-started/typescript-essentials.md) (शुरुआती गाइड: Typescript की अनिवार्य बातें)
- [Beginner Guide: Needle Engine for Unity Developers](./getting-started/for-unity-developers.md) (शुरुआती गाइड: Unity डेवलपर्स के लिए Needle Engine)
- [Video tutorial: How to write custom components](https://youtu.be/uf5UK0bLHlY?si=82U_2L4n2V7XL7RJ) (वीडियो ट्यूटोरियल: कस्टम कंपोनेंट्स कैसे लिखें)

नीचे आपको त्वरित संदर्भ के रूप में कुछ बुनियादी स्क्रिप्ट मिलेंगी।

हम बहुत सारे सैंपल सीन और पूर्ण प्रोजेक्ट भी प्रदान करते हैं जिन्हें आप डाउनलोड कर सकते हैं और शुरुआती बिंदु के रूप में उपयोग कर सकते हैं:
- [Visit Samples Website](https://engine.needle.tools/samples?utm_source=needle_docs&utm_content=scripting_examples) (सैंपल वेबसाइट पर जाएँ)
- [Download Samples Package](https://engine.needle.tools/downloads/unity/samples) (सैंपल पैकेज डाउनलोड करें)
- [Needle Engine Stackblitz Collection](https://stackblitz.com/@marwie/collections/needle-engine) (Needle Engine Stackblitz संग्रह)
- [Needle Engine API](https://engine.needle.tools/api) (Needle Engine API)

## Basic component
<stackblitz file="@code/basic-component.ts"></stackblitz>
@[code ts twoslash](@code/basic-component.ts)

सभी कंपोनेंट इवेंट्स के लिए [scripting](scripting#lifecycle-methods) देखें।

## Reference an Object from Unity
@[code ts twoslash](@code/component-object-reference.ts)

## Reference and load an asset from Unity (Prefab or SceneAsset)
@[code ts twoslash](@code/component-prefab.ts)

## Reference and load scenes from Unity
::: tip
डाउनलोड करने और आज़माने के लिए [हमारे सैंपल में एक कार्यरत उदाहरण](https://engine.needle.tools/samples/multi-scenes-(dynamic-loading)) ढूंढें।
:::

@[code ts twoslash](@code/component-scene.ts)

## Receive Clicks on Objects
इस स्क्रिप्ट को अपनी सीन में किसी भी ऑब्जेक्ट में जोड़ें जिसे आप क्लिक करने योग्य बनाना चाहते हैं। यह सुनिश्चित करें कि उस ऑब्जेक्ट के पैरेंट हैरार्की में एक `ObjectRaycaster` कंपोनेंट भी हो।

<stackblitz file="@code/component-click.ts">
test
</stackblitz>

@[code ts twoslash](@code/component-click.ts)

## Networking Clicks on Objects

इस स्क्रिप्ट को अपनी सीन में किसी भी ऑब्जेक्ट में जोड़ें जिसे आप क्लिक करने योग्य बनाना चाहते हैं। यह सुनिश्चित करें कि उस ऑब्जेक्ट के पैरेंट हैरार्की में एक `ObjectRaycaster` कंपोनेंट भी हो।
यह कंपोनेंट प्राप्त क्लिक को सभी कनेक्टेड क्लाइंट्स को भेजेगा और एक इवेंट ट्रिगर करेगा जिस पर आप फिर अपने ऐप में प्रतिक्रिया कर सकते हैं। यदि आप Unity या Blender का उपयोग कर रहे हैं तो आप e.g. एनीमेशन चलाने या ऑब्जेक्ट्स को छिपाने के लिए `onClick` इवेंट को कॉल करने के लिए फ़ंक्शंस असाइन कर सकते हैं।

@[code ts twoslash](@code/component-click-networking.ts)

### Play Animation on click
@[code ts twoslash](@code/component-animation-onclick.ts)

## Reference an Animation Clip
यह तब उपयोगी हो सकता है जब आप अपना कस्टम एनीमेशन लॉजिक चलाना चाहते हैं।
आप क्लिप्स का एक ऐरे भी निर्यात कर सकते हैं।
@[code ts twoslash](@code/component-animationclip.ts)

## Create and invoke a UnityEvent

@[code ts twoslash](@code/component-unityevent.ts)
::: tip
EventList इवेंट्स कंपोनेंट लेवल पर भी ट्रिगर होते हैं। इसका मतलब है कि आप ``myComponent.addEventListener("my-event", evt => {...})`` का उपयोग करके ऊपर घोषित इवेंट की सदस्यता भी ले सकते हैं।
यह एक प्रायोगिक सुविधा है। कृपया हमारे [forum](https://forum.needle.tools/?utm_source=needle_docs&utm_content=content) में फीडबैक प्रदान करें।
:::

### Declare a custom event type
यह तब उपयोगी होता है जब आप Unity या Blender में कुछ कस्टम आर्गुमेंट्स (जैसे एक स्ट्रिंग) के साथ एक इवेंट उजागर करना चाहते हैं।
@[code ts twoslash](@code/component-customevent.ts)

_उदाहरण उपयोग:_
![20221128-210735_Unity-needle](https://user-images.githubusercontent.com/2693840/204370950-4c89b877-90d7-4e6f-8266-3352e6da16f4.png)

## Use nested objects and serialization

आप ऑब्जेक्ट्स और उनके डेटा को नेस्ट कर सकते हैं। ठीक से मेल खाने वाले `@serializable(SomeType)` डेकोरेटर्स के साथ, डेटा स्वचालित रूप से सही प्रकारों में सीरियलाइज़ और डीसीरियलाइज़ हो जाएगा।

अपने Typescript कंपोनेंट में:
@[code ts twoslash](@code/component-nested-serialization.ts)

C# में किसी भी स्क्रिप्ट में:
@[code](@code/component-nested-serialization-cs.cs)

::: tip
सही प्रकार के डेकोरेटर्स के बिना, आपको डेटा तो मिलेगा, लेकिन केवल एक प्लेन ऑब्जेक्ट के रूप में। यह तब उपयोगी होता है जब आप कंपोनेंट्स को पोर्ट कर रहे हों, क्योंकि आपके पास सभी डेटा तक पहुंच होगी और आप आवश्यकतानुसार प्रकार जोड़ सकते हैं।
:::

## Use Web APIs
::: tip
ध्यान रखें कि आपके पास अभी भी सभी web apis और [npm](https://npmjs.org) पैकेजों तक पहुंच है!
अगर हमें यहां यह कहने की अनुमति है तो Needle Engine की यही खूबसूरती है 😊
:::

### Display current location
@[code ts twoslash](@code/component-location.ts)

### Display current time using a Coroutine
@[code ts twoslash](@code/component-time.ts)

<video-embed src="./videos/component-time.mp4" limit_height />

## Change custom shader property

यह मानते हुए कि आपके पास `_Speed` नामक एक प्रॉपर्टी के साथ एक कस्टम शेडर है जो एक फ्लोट वैल्यू है, आप इसे एक स्क्रिप्ट से इस तरह बदल सकते हैं।
आप हमारे [सैंपल में डाउनलोड करने के लिए एक लाइव उदाहरण](https://engine.needle.tools/samples/shaders/) ढूंढ सकते हैं।

<!-- SAMPLE modify custom shader material property -->

## Switching src attribute

StackBlitz पर [लाइव उदाहरण](https://stackblitz.com/edit/needle-engine-cycle-src?file=index.html) देखें।

## Adding new postprocessing effects

यह सुनिश्चित करें कि आप अपनी वेब प्रोजेक्ट में [`npm i postprocessing`](https://github.com/pmndrs/postprocessing) इंस्टॉल करें। फिर आप `PostProcessingEffect` से व्युत्पन्न करके नए प्रभाव जोड़ सकते हैं।

प्रभाव का उपयोग करने के लिए इसे अपने `Volume` कंपोनेंट के समान ऑब्जेक्ट में जोड़ें।

यहाँ एक उदाहरण है जो [Outline postprocessing effect](https://pmndrs.github.io/postprocessing/public/demo/#outline) को रैप करता है। आप चर और सेटिंग्स को हमेशा की तरह उजागर कर सकते हैं क्योंकि कोई भी प्रभाव आपकी three.js सीन में एक कंपोनेंट भी है।

@[code](@code/custom-post-effect.ts)

## Custom ParticleSystem Behaviour

@[code ts twoslash](@code/custom-particle-system-behaviour.ts)

## Custom 2D Audio Component

यह एक उदाहरण है कि आप अपना खुद का ऑडियो कंपोनेंट कैसे बना सकते हैं।
हालांकि अधिकांश उपयोगों के लिए आप कोर AudioSource कंपोनेंट का उपयोग कर सकते हैं और कोड लिखने की आवश्यकता नहीं है।

@[code ts twoslash](@code/component-2d-audio.ts)

## Arbitrary external files

बाहरी फ़ाइलों (जैसे एक json फ़ाइल) को लोड करने के लिए FileReference प्रकार का उपयोग करें।
@[code ts twoslash](@code/component-filereference.ts)

<!-- SAMPLE receive click from HTML button
## Receiving html element click in component
-->

<!-- SAMPLE disable environment light
## Disable environment light
-->

<!-- SAMPLE using mediapipe with hands
## Use mediapipe package to control the 3D scene with hands
Make sure to install the mediapipe package. Visit the github link below to see the complete project setup.
Try it [live here](https://engine.needle.tools/samples/mediapipe-hands/) - requires a webcam/camera
-->

<!-- SAMPLE Change Color On Collision
## Change Color On Collision
-->

<!-- SAMPLE Physics Trigger Relay
## Physics Trigger Relay
Invoke events using an objects physics trigger methods
-->

<!-- SAMPLE Auto Reset
## Auto Reset
Reset an object's position automatically when it's leaving a physics trigger
-->

<!-- SAMPLE Play Audio On Collision
## Play Audio On Collision
-->

<!-- SAMPLE Set Random Color
## Set Random Color
Randomize the color of an object on start. Note that the materials are cloned in the `start` method
-->

<!-- SAMPLE Timed Spawn
## Spawn Objects Over Time
-->

पेज AI का उपयोग करके स्वचालित रूप से अनुवादित किया गया है
