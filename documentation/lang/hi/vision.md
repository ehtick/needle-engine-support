---
next: features-overview
---

# हमारा दृष्टिकोण 🔮

## 3D वेब का भविष्य

हमारा मानना है कि अगले कुछ वर्षों में वेब पर 3D का उपयोग काफी बढ़ेगा। जहाँ आज नेटिव ऐप सामान्य हैं, वहीं अधिक से अधिक कंटेंट वेब ऐप या [PWA](https://web.dev/progressive-web-apps/) के रूप में उपलब्ध कराया जा रहा है। नए VR और AR डिवाइस [वेब में विस्तार करेंगे](https://immersive-web.github.io/webxr-samples/), जिससे एक दिलचस्प समस्या पैदा होगी: responsive का मतलब अचानक सिर्फ "छोटी स्क्रीन" या "बड़ी स्क्रीन" नहीं रह जाएगा, आपको spaces, 3D, spatial placement और संभावित रूप से glasses और controllers से भी निपटना होगा!

इसमें अधिक interactivity और collaboration की ओर जोर दें, और आपके पास चुनौतियों का एक दिलचस्प मिश्रण है।

Needle में, हम मानते हैं कि इस space में ideating और creating करना आसान होना चाहिए। हमने चीजों को गति देने का लक्ष्य रखा है – इन लक्ष्यों तक पहुंचने के लिए अपना खुद का runtime बनाया है। इसीलिए हम AR और VR में deploy करने की क्षमता को अपने core components में शामिल कर रहे हैं, और लगातार यह परीक्षण कर रहे हैं कि नए ideas सभी platforms पर काम करते हैं।

## वेब पर 3D के लिए एक और platform क्यों? क्या पहले से ही पर्याप्त options नहीं हैं?

कई options हैं, यह सच है! हमने पाया कि वर्तमान systems<sup>1</sup> को मोटे तौर पर दो श्रेणियों में बांटा जा सकता है: कुछ में उत्कृष्ट asset handling, tools, और artist-friendly workflows हैं लेकिन वे किसी प्रकार का binary blob output करते हैं, और अन्य अधिक code-focussed, developer-friendly हैं और आधुनिक web workflows<sup>2</sup> में उत्कृष्ट integration की अनुमति देते हैं।

हम इन दुनियाओं को जोड़ना चाहते हैं और दोनों का सर्वोत्तम संयोजन करना चाहते हैं: artist-friendly workflows और आधुनिक web technologies। आधुनिक formats और एक snappy workflow के साथ मिलकर, हमारा मानना है कि यह बहुत सारे creators को अपनी सामग्री वेब पर लाने की अनुमति देगा। हमने शुरुआत से ही AR, VR और collaboration को सही करने का भी अवसर देखा।

<sup>1</sup>: _उदाहरणों में Unity, PlayCanvas, three.js, react-three-fiber, Babylon, A-Frame, Godot और कई अन्य शामिल हैं।_
<sup>2</sup>: _इसकी बारीकियां एक शुरुआती paragraph में फिट होने से कहीं ज़्यादा हैं! सभी engines और frameworks की अपनी ताकत और कमजोरियां होती हैं, और वे लगातार विकसित हो रहे हैं।_

## एक Workflow बनाना, एक Editor नहीं

हमारा मानना है कि वेब पर 3D apps की अगली लहर बेहतर _workflows_ के साथ आएगी: हर किसी को वेब पर 3D scene, एक art gallery, एक product या 3D scan प्रस्तुत करने या simple games बनाने में सक्षम होना चाहिए। इस लक्ष्य तक पहुँचने के लिए केवल एक विशेष system का समर्थन करने और वहां से वेब पर exporting करने से कहीं अधिक की आवश्यकता होगी।

हमारा लक्ष्य लोगों को _उनके_ creative tools से data वेब पर लाने की अनुमति देना है: चाहे वह Unity, Blender, Photoshop या कुछ और हो। हम जानते हैं कि यह एक बड़ा लक्ष्य है – लेकिन एक साथ सब कुछ करने के बजाय, हम iterate करना चाहते हैं और साथ मिलकर इसके करीब पहुंचना चाहते हैं।

## Open Standards मालिकाना Containers के बजाय

Needle Engine के मूल में [glTF](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html) format और custom extensions के साथ इसका विस्तार करने की क्षमता है। लक्ष्य यह है: एक एकल `.glb` file में आपके पूरे application का data शामिल हो सकता है।

यह ध्यान देने योग्य है कि glTF के अंदर वास्तविक code ship करना लक्ष्य नहीं है; code ship करना और running करना आधुनिक web runtimes और bundling का काम है। हम निश्चित रूप से कल्पना कर सकते हैं कि logic के abstract representations (जैसे graphs, state machines, और इसी तरह) को एक निश्चित सीमा तक standardized किया जा सकता है और interoperable worlds की अनुमति दी जा सकती है, लेकिन हम अभी वहां नहीं हैं।

[glTF और extensions के हमारे उपयोग के बारे में और पढ़ें](./technical-overview.md)

# Goals और Non-Goals

## Goals
- Iteration तेज होना चाहिए और deployment तेज होना चाहिए।
- 3D web projects पर काम करना 2D web projects पर काम करने जितना आसान होना चाहिए।
- Developers और artists सीधे collaborate करने में सक्षम होने चाहिए।
- Responsive web screens से परे तक फैला हुआ है – AR और VR को afterthoughts के बजाय इसमें built in किया जाना चाहिए।
- हम open-source projects में योगदान देना चाहते हैं।
- 3D और web standards के संबंध में Open discussion।
- open formats में अपना data लाने और लेने की Ability।
- आप किस web framework का उपयोग करते हैं, यह choose करने की Ability, किसी particular frameworks और vendors में lock-in नहीं।
- Common usecases limited coding experience के साथ या बिना work करते हैं।

## Non-Goals
- सभी Editor versions, feature sets, render pipelines के सभी combinations का 100% coverage होना goal नहीं है।
- full no-code environment provide करना goal नहीं है।
- other engines की feature set, capabilities, या runtime performance से match करना goal नहीं है।

# other engines और frameworks से Relation

## Needle Engine और Unity WebGL

Unity के साथ कई वर्षों तक work करने से हमने पाया है कि जबकि engine और editor एक great pace से progress कर रहे हैं, WebGL output somewhat lacked behind हुआ है। Unity players का web-based systems में Integration काफी hard है, surrounding website से "बातचीत" करने के लिए a number of workarounds की आवश्यकता होती है, और most of all, iteration times बहुत slow हैं क्योंकि जिस तरह से Unity IL2CPP के माध्यम से सभी code को WebAssembly में packs करती है। ये technologies awesome हैं, और great runtime performance और a lot of flexibility में result करती हैं। लेकिन modern web development workflows की तुलना में वे so much slower और walled off हैं कि हमने decided किया कि matters को अपने own hands में लिया जाए।

## Needle Engine और three.js

Needle Engine three.js पर builds करती है। सभी rendering इसके माध्यम से goes through होती है, glTF files three के extension interfaces के माध्यम से loaded होती हैं, और हमारा component system three के Object3D और scene graph के around revolves करता है। हम अपने कुछ changes और improvements को upstreaming करने के लिए committed हैं, pull requests creating और issues reporting along the way।


पेज AI का उपयोग करके स्वतः अनुवादित किया गया है।