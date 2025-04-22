# नेटवर्किंग

Needle Engine में मल्टीप्लेयर अनुभव के लिए एक पूर्ण नेटवर्किंग समाधान शामिल है। हमारे नेटवर्किंग कंपोनेंट और API के साथ साझा वर्ल्ड स्टेट, वॉयस चैट, सेशन पर्सिस्टेंस और बहुत कुछ प्राप्त किया जा सकता है। आप ऑटोमैटिक या मैनुअल नेटवर्किंग के विकल्प के साथ अपने स्वयं के कंपोनेंट को नेटवर्क कर सकते हैं।

Needle Engine में नेटवर्किंग [Websockets](https://github.com/jjxxs/websocket-ts) पर आधारित है। उपयोग में आसानी के लिए ऑटोमैटिक नेटवर्किंग JSON डेटा का उपयोग करती है। जटिल उपयोग के मामलों और उच्च-प्रदर्शन आवश्यकताओं के लिए, हम [Flatbuffers](https://google.github.io/flatbuffers/) का उपयोग करते हैं।

कोर नेटवर्किंग कार्यक्षमता तक पहुंच कंपोनेंट से ``this.context.connection`` का उपयोग करके प्राप्त की जा सकती है। डिफ़ॉल्ट बैकएंड सर्वर उपयोगकर्ताओं को रूम्स से कनेक्ट करता है। एक ही रूम में उपयोगकर्ता स्टेट साझा करेंगे और एक-दूसरे से मैसेज प्राप्त करेंगे।

## नेटवर्किंग कॉन्सेप्ट्स

### रूम्स और स्टेट

Needle Engine में नेटवर्किंग के केंद्र में सिंक्रोनाइज़्ड रूम्स की अवधारणा है। प्रत्येक रूम की एक ID होती है, और उपयोगकर्ता इस ID प्रदान करके एक रूम से कनेक्ट होते हैं। रूम्स सर्वर पर संग्रहीत होते हैं, और उपयोगकर्ता किसी भी समय रूम्स में शामिल हो सकते हैं और छोड़ सकते हैं। जब कोई उपयोगकर्ता किसी रूम में शामिल होता है, तो उसे रूम की वर्तमान स्टेट प्राप्त होती है, उस वर्तमान स्टेट को अपने सीन में लागू करता है, और फिर रूम स्टेट में बदलाव सुनता है। जब कोई उपयोगकर्ता किसी रूम को छोड़ता है, तो वह रूम स्टेट में बदलाव सुनना बंद कर देता है।

रूम स्टेट सर्वर पर JSON डेटा के रूप में संग्रहीत होती है, इसलिए सभी बदलाव पर्सिस्टेंट होते हैं। इसका मतलब है कि रूम स्टेट न केवल नेटवर्किंग के लिए उपयोगी है, बल्कि एक ही उपयोगकर्ता की गतिविधियों को पर्सिस्टेंट करने के लिए भी उपयोगी है।

नीडल रूम्स के लिए _केवल-देखने योग्य ID_ प्रदान कर सकता है। केवल-देखने योग्य ID के साथ एक रूम का उपयोग करते समय, उपयोगकर्ता रूम के साथ इंटरैक्ट नहीं कर पाएगा, लेकिन वर्तमान स्टेट को देख पाएगा और लाइव अपडेट प्राप्त कर पाएगा। यह प्रेजेंटेशन या डेमोंस्ट्रेशन के लिए उपयोगी है।

### ओनरशिप

एक रूम में ऑब्जेक्ट _ओन्ड_ हो सकते हैं। इसका मतलब है कि केवल ऑब्जेक्ट का मालिक ही उसकी स्टेट बदल सकता है। डिफ़ॉल्ट रूप से, ऑब्जेक्ट का कोई मालिक नहीं होता है। DragControls जैसे कंपोनेंट किसी ऑब्जेक्ट को वास्तव में ले जाने से पहले उसकी ओनरशिप का अनुरोध करेंगे। कस्टम कंपोनेंट में, आप नियंत्रित कर सकते हैं कि ओनरशिप को कैसे संभाला जाता है। किसी ओनरशिप की आवश्यकता नहीं हो सकती है, ओनरशिप को किसी अन्य उपयोगकर्ता को स्वचालित रूप से स्थानांतरित करने की अनुमति दी जा सकती है, या ओनरशिप को केवल किसी विशिष्ट गतिविधि द्वारा स्थानांतरित किया जा सकता है।

जब कोई उपयोगकर्ता किसी रूम को छोड़ता है, तो उस उपयोगकर्ता के स्वामित्व वाले ऑब्जेक्ट्स को हटा दिया जाएगा या उनकी ओनरशिप रीसेट कर दी जाएगी, यह इस बात पर निर्भर करता है कि ऑब्जेक्ट कैसे बनाया गया था।

## अपने प्रोजेक्ट के लिए नेटवर्किंग सक्षम करें

1.  अपने सीन में `SyncedRoom` कंपोनेंट जोड़ें। डिफ़ॉल्ट रूप से, यह Needle द्वारा प्रदान किए गए नेटवर्किंग इन्फ्रास्ट्रक्चर का उपयोग करेगा।
2.  किसी ऐसे ऑब्जेक्ट में `SyncedTransform` कंपोनेंट जोड़ें जिसके मूवमेंट को आप नेटवर्क पर सिंक्रोनाइज़ करना चाहते हैं।
3.  उसी ऑब्जेक्ट में `DragControls` कंपोनेंट जोड़ें।
4.  प्रोजेक्ट चलाएँ। ब्राउज़र में, "Join Room" पर क्लिक करें और URL कॉपी करें।
5.  एक नई ब्राउज़र विंडो खोलें और URL पेस्ट करें। अब आपको दोनों विंडो में वही ऑब्जेक्ट दिखाई देना चाहिए। एक विंडो में ऑब्जेक्ट को खींचने का प्रयास करें और उसे दूसरी विंडो में चलते हुए देखें।

`DragControls` कंपोनेंट, Needle के कई अन्य कंपोनेंट की तरह, बिल्ट-इन नेटवर्किंग सपोर्ट प्रदान करता है। जो भी ऑब्जेक्ट को खींचना शुरू करेगा, ओनरशिप उसे स्थानांतरित कर दी जाएगी।

## नेटवर्किंग सपोर्ट के साथ बिल्ट-इन कंपोनेंट

| कंपोनेंट           | विवरण                                                                                                   |
| :----------------- | :------------------------------------------------------------------------------------------------------ |
| `SyncedRoom`       | नेटवर्किंग कनेक्शन और रूम से कनेक्शन को संभालता है।                                                     |
| `SyncedTransform`  | ट्रांसफ़ॉर्म को सिंक्रोनाइज़ करना संभालता है।                                                               |
| `SyncedCamera`     | रूम से कनेक्टेड किसी भी उपयोगकर्ता के लिए एक prefab तैयार करता है जो उनकी स्थिति का अनुसरण करेगा।           |
| `VoIP`             | उपयोगकर्ताओं के बीच वॉयस-ओवर-IP ऑडियो कनेक्शन, माइक्रोफोन एक्सेस आदि को संभालता है।                         |
| `ScreenCapture`    | वेब API के माध्यम से स्क्रीनशेयरिंग को संभालता है।                                                        |
| `Networking`       | सर्वर बैकएंड URL को कस्टमाइज़ करने के लिए उपयोग किया जाता है। डेवलपमेंट के लिए लोकल सर्वर सेट करने की भी अनुमति देता है। |
| `DragControls`     | ऑब्जेक्ट को खींचना संभालता है। ओनरशिप स्वचालित रूप से ऑब्जेक्ट को खींचने वाले अंतिम उपयोगकर्ता को पास कर दी जाएगी। |
| `Duplicatable`     | ऑब्जेक्ट को डुप्लीकेट करना संभालता है। डुप्लीकेट ऑब्जेक्ट रूम में सभी के लिए इंस्टेंशिएट किए जाते हैं।        |
| `Deletable`        | ऑब्जेक्ट को डिलीट करना संभालता है। डिलीट नेटवर्क पर सिंक्रोनाइज़ किए जाते हैं।                                 |
| `DeleteBox`        | उन ऑब्जेक्ट को डिलीट करना संभालता है जिनमें एक "Deletable" कंपोनेंट होता है जब उन्हें एक बॉक्स वॉल्यूम में खींचा जाता है। |
| `PlayerSync`       | शक्तिशाली कंपोनेंट जो प्रत्येक कनेक्टेड प्लेयर के लिए एक विशिष्ट ऑब्जेक्ट इंस्टेंशिएट करता है।                   |
| `PlayerState`      | इस कंपोनेंट को उन ऑब्जेक्ट में जोड़ें जो `PlayerSync` को असाइन किए गए हैं।                               |
| `PlayerColor`      | प्लेयर-विशिष्ट रंगों के लिए सरल कंपोनेंट। प्रत्येक उपयोगकर्ता को रूम में शामिल होने पर एक रैंडम रंग असाइन किया जाता है। यह कंपोनेंट उस ऑब्जेक्ट के मुख्य मैटेरियल को वह रंग असाइन करता है। |
| `WebXR`            | उपयोगकर्ता अवतार (हाथ और सिर) को सिंक्रोनाइज़ करना संभालता है।                                              |

## कस्टम कंपोनेंट के लिए ऑटोमैटिक नेटवर्किंग

आपके अपने कंपोनेंट के फील्ड्स को बहुत आसानी से नेटवर्क किया जा सकता है। फील्ड में बदलाव स्वचालित रूप से डिटेक्ट किए जाएंगे और रूम में सभी उपयोगकर्ताओं को भेजे जाएंगे। बदलाव रूम स्टेट के हिस्से के रूप में भी पर्सिस्ट किए जाते हैं, इसलिए जो उपयोगकर्ता बाद में रूम में शामिल होते हैं, उन्हें भी फील्ड की वर्तमान स्टेट प्राप्त होगी, यह सुनिश्चित करते हुए कि सभी को समान डेटा दिखाई दे।

किसी कंपोनेंट में किसी फील्ड को स्वचालित रूप से नेटवर्क करने के लिए, इसे `@syncField()` डेकोरेटर से सजाएँ:

::::code-group
:::code-group-item Sync a number
```ts twoslash
import { Behaviour, syncField, IPointerClickHandler } from "@needle-tools/engine"

export class SyncedNumber extends Behaviour implements IPointerClickHandler {

    // Use `@syncField` to automatically network a field. 
    // You can optionally assign a method or method name to be called when the value changes.
    @syncField("myValueChanged")
    mySyncedValue?: number = 1;
    
    private myValueChanged() {
       console.log("My value changed", this.mySyncedValue);
    }
    
    onPointerClick() {
       this.mySyncedValue = Math.random();
    }
}
```
:::
:::code-group-item Sync an object's color
<!-- SAMPLE network color change -->
:::
::::

ध्यान दें कि syncField में एक वैकल्पिक पैरामीटर होता है जो उस मेथड को निर्दिष्ट करता है जिसे वैल्यू बदलने पर कॉल किया जाना चाहिए। इस मेथड को उसी क्लास में परिभाषित किया जाना चाहिए।

::: tip Custom Project Setup
यदि आप एक कस्टम प्रोजेक्ट सेटअप का उपयोग कर रहे हैं, तो syncField डेकोरेटर के काम करने के लिए आपको अपनी ``tsconfig.json`` फ़ाइल में ``experimentalDecorators: true`` होना आवश्यक है। Needle Starters के साथ बनाए गए प्रोजेक्ट में यह डिफ़ॉल्ट रूप से सक्षम होता है।
:::

## ऑब्जेक्ट बनाना और नष्ट करना

अक्सर, आप रनटाइम पर ऑब्जेक्ट बनाना और नष्ट करना चाहते हैं, और निश्चित रूप से ये बदलाव नेटवर्क पर सिंक्रोनाइज़ किए जाने चाहिए।

`PlayerSync` कंपोनेंट प्रत्येक कनेक्टेड प्लेयर के लिए एक विशिष्ट ऑब्जेक्ट को स्वचालित रूप से इंस्टेंशिएट करके इस प्रक्रिया को सरल बनाता है। जब कोई प्लेयर रूम छोड़ता है, तो सभी उपयोगकर्ताओं के लिए ऑब्जेक्ट नष्ट हो जाता है।

इसके अतिरिक्त, Needle Engine दो उच्च-स्तरीय मेथड प्रदान करता है:
- [`syncInstantiate()`](https://engine.needle.tools/docs/api/latest/syncInstantiate) नेटवर्क पर ऑब्जेक्ट को डुप्लीकेट करने के लिए।
- [`syncDestroy()`](https://engine.needle.tools/docs/api/latest/syncDestroy) नेटवर्क पर ऑब्जेक्ट को नष्ट करने के लिए।

> 🏗️ कोड सैंपल निर्माणाधीन हैं

## मैनुअल नेटवर्किंग

Needle Engine मैसेज भेजने और प्राप्त करने के लिए एक लो-लेवल API भी प्रदान करता है। हम इसे "मैनुअल नेटवर्किंग" कहते हैं। सिद्धांत समान हैं, लेकिन आप मैसेज भेजने और प्राप्त करने और उन्हें कैसे संभालना है, इस पर पूर्ण नियंत्रण रखते हैं।

### मैसेज भेजना

एक ही रूम में सभी उपयोगकर्ताओं को एक मैसेज भेजें:
```ts
this.context.connection.send(key: string, data: IModel | object | boolean | string | number | null);
```

### मैसेज प्राप्त करना

आप किसी विशिष्ट कुंजी का उपयोग करके रूम में इवेंट्स की सदस्यता ले सकते हैं। आमतौर पर, आप इसे अनसब्सक्राइब करने के साथ मैच करना चाहेंगे:

- `onEnable` में सदस्यता लें और `onDisable` में सदस्यता रद्द करें
  इस दृष्टिकोण के साथ, ऑब्जेक्ट अक्षम होने पर कोई मैसेज प्राप्त नहीं होगा।

- या `start` में सदस्यता लें और `onDestroy` में सदस्यता रद्द करें
  इस दृष्टिकोण के साथ, ऑब्जेक्ट अक्षम होने पर भी मैसेज प्राप्त होंगे।

```ts
this.context.connection.beginListen(key:string, callback:(data) => void)
```

इवेंट्स से सदस्यता रद्द करें:
```ts
this.context.connection.stopListen(key:string)
```

### मैसेज पर्सिस्टेंस को नियंत्रित करना

नेटवर्क मैसेज भेजते समय, लो-लेवल API आपको यह तय करने की अनुमति देता है कि मैसेज को पर्सिस्ट किया जाना चाहिए (रूम स्टेट में सहेजा जाना चाहिए) या नहीं (केवल वर्तमान में रूम में उपयोगकर्ताओं को भेजा जाना चाहिए)। किसी मैसेज को पर्सिस्ट करने के लिए, सुनिश्चित करें कि उसमें `guid` फ़ील्ड है। इस फ़ील्ड का उपयोग आमतौर पर मैसेज डेटा को किसी विशिष्ट ऑब्जेक्ट पर लागू करने के लिए किया जाता है, उस ऑब्जेक्ट का guid प्रदान करके। यदि आप किसी विशिष्ट ऑब्जेक्ट को लक्षित करना चाहते हैं (और इस प्रकार, एक `guid` फ़ील्ड शामिल करें) लेकिन डेटा को पर्सिस्ट नहीं करना चाहते हैं, तो अपने मैसेज में `dontSave` फ़ील्ड को `true` पर सेट करें।

सभी पर्सिस्टेंट मैसेज रूम स्टेट में सहेजे जाते हैं और बाद में कनेक्ट होने वाले उपयोगकर्ताओं को भेजे जाएंगे। गैर-पर्सिस्टेंट मैसेज केवल वर्तमान में रूम में उपयोगकर्ताओं को भेजे जाते हैं, जो उन इफ़ेक्ट्स (जैसे साउंड इफ़ेक्ट चलाना) के लिए उपयोगी है जो वर्तमान में रूम में नहीं हैं, उन उपयोगकर्ताओं के लिए चलाना समझ में नहीं आता है। वैकल्पिक रूप से, आप डिस्कनेक्ट होने पर इस विशेष मैसेज को हटाने के लिए अपने मैसेज में `deleteOnDisconnect` फ़ील्ड शामिल कर सकते हैं।

```ts
// यह मैसेज वर्तमान में रूम में सभी उपयोगकर्ताओं को भेजा जाएगा,
// और उन उपयोगकर्ताओं को जो बाद में रूम में शामिल होते हैं।
this.context.connection.send("my-message", { guid: this.guid, myData: "myValue" });

// यह मैसेज वर्तमान में रूम में सभी उपयोगकर्ताओं को भेजा जाएगा,
// लेकिन उन उपयोगकर्ताओं को नहीं भेजा जाएगा जो बाद में रूम में शामिल होते हैं।
this.context.connection.send("my-message", { guid: this.guid, myData: "myValue", dontSave: true });

// यह मैसेज वर्तमान में रूम में सभी उपयोगकर्ताओं को भेजा जाएगा,
// लेकिन उन उपयोगकर्ताओं को नहीं भेजा जाएगा जो बाद में रूम में शामिल होते हैं।
this.context.connection.send("my-message", { myData: "myValue" });

// यह मैसेज वर्तमान में रूम में सभी उपयोगकर्ताओं को भेजा जाएगा,
// और उन उपयोगकर्ताओं को जो बाद में रूम में शामिल होते हैं,
// लेकिन उपयोगकर्ता के डिस्कनेक्ट होने पर इसे रूम स्टेट से हटा दिया जाएगा।
this.context.connection.send("my-message", { guid: this.guid, myData: "myValue", deleteOnDisconnect: true });
```

बैकएंड स्टोरेज से किसी विशिष्ट guid के लिए स्टेट को हटाने के लिए, मैसेज कुंजी को `delete-state` पर सेट करें और उसके guid के साथ किसी विशिष्ट ऑब्जेक्ट को लक्षित करें: `{ guid: "guid_to_delete" } `।

```ts
this.context.connection.send("delete-state", { guid: "guid_to_delete" });
```

### नेटवर्क मैसेज को समझने के लिए डिबग फ़्लैग का उपयोग करना

नेटवर्क मैसेज में गहराई से जाने के लिए कई डिबग फ़्लैग का उपयोग किया जा सकता है। इन्हें पेज URL में जोड़ा जा सकता है, जैसे `https://localhost:3000/?debugnet`।

| फ़्लैग         | विवरण                                          |
| :----------- | :--------------------------------------------- |
| `?debugnet`  | सभी इनकमिंग और आउटगोइंग नेटवर्क मैसेज को कंसोल में लॉग करें |
| `?debugowner` | सभी ओनरशिप रिक्वेस्ट और बदलाव को कंसोल में लॉग करें      |
| `?debugnetbin` | इनकमिंग और आउटगोइंग बाइनरी मैसेज के लिए अतिरिक्त जानकारी लॉग करें |

## नेटवर्किंग लाइफ़साइकल इवेंट्स

आपके कंपोनेंट में सुनने के लिए निम्नलिखित इवेंट उपलब्ध हैं। वे सामान्य नेटवर्क इवेंट्स का वर्णन करते हैं जिन पर आप अपने कंपोनेंट में प्रतिक्रिया देना चाहते हैं, जैसे कि आप स्वयं या कोई अन्य उपयोगकर्ता रूम में शामिल होना या छोड़ना।

```ts
// Listen to the event when *you* have joined a networked room
this.context.beginListen(RoomEvents.JoinedRoom, ({room, viewId, allowEditing, inRoom}) => { ... });

// Listen to the event when *you* have left a networked room
this.context.beginListen(RoomEvents.LeftRoom, ({room}) => { ... });

// Listen to the event when *another user* has joined your networked room
this.context.beginListen(RoomEvents.UserJoinedRoom, ({userId}) => { ... });

// Listen to the event when *another user* has left your networked room
this.context.beginListen(RoomEvents.UserLeftRoom, ({userId}) => { ... });

// This event is received after all current room state has been sent to the client
this.context.beginListen(RoomEvents.RoomStateSent, () => { ... });
```

- [API डॉक्स में सभी Room Events देखें](https://engine.needle.tools/docs/api/latest/RoomEvents)
- [API डॉक्स में सभी Ownership Events देखें](https://engine.needle.tools/docs/api/latest/OwnershipEvent)
- [API डॉक्स में सभी Connection Events देखें](https://engine.needle.tools/docs/api/latest/ConnectionEvents)

## Needle नेटवर्किंग सर्वर का उपयोग करना

डिफ़ॉल्ट रूप से, नेटवर्क वाले Needle सीन Needle द्वारा प्रबंधित और प्रदान किए गए क्लाउड इन्फ्रास्ट्रक्चर से कनेक्ट होते हैं। इस सेवा का उपयोग करने के लिए कोई अतिरिक्त सेटअप की आवश्यकता नहीं है, और वर्तमान में कोई अतिरिक्त लागत भी नहीं है।

आमतौर पर, यह एक ही रूम में लगभग 15-20 उपयोगकर्ताओं के लिए ठीक काम करेगा। एक बार जब आपका प्रोजेक्ट परिपक्व हो जाता है, तो आप अपना स्वयं का नेटवर्किंग सर्वर होस्ट करके एक बड़े/बेहतर/मजबूत नेटवर्किंग समाधान में अपग्रेड कर सकते हैं।

## अपना खुद का नेटवर्किंग सर्वर होस्ट करना

आप बड़े डिप्लॉयमेंट के लिए या नेटवर्किंग इन्फ्रास्ट्रक्चर और इम्प्लीमेंटेशन पर अधिक नियंत्रण रखने के लिए अपना स्वयं का नेटवर्किंग सर्वर होस्ट करना चाह सकते हैं।

हमारा नेटवर्किंग सर्वर [own networking package](https://fwd.needle.tools/needle-engine/packages/needle-engine-networking) के रूप में NPM पर Node.js पैकेज के रूप में उपलब्ध है। पैकेज में लोकप्रिय वेब फ्रेमवर्क [Fastify](https://www.npmjs.com/package/fastify) और [Express](https://www.npmjs.com/package/express) के लिए प्री-कॉन्फ़िगर किए गए इंटीग्रेशन शामिल हैं, और इसे अन्य Node.js सर्वर फ्रेमवर्क में भी इंटीग्रेट किया जा सकता है।

::: tip For quick experiments: Remix on Glitch
आप इस पेज से Glitch पर चल रहे एक साधारण नेटवर्किंग सर्वर को रीमिक्स कर सकते हैं: [needle-networking.glitch.me](https://needle-networking.glitch.me/) बॉटम राइट कॉर्नर में बटन पर क्लिक करके।

डिफ़ॉल्ट Glitch सर्वर इंस्टेंस छोटा है और केवल सीमित संख्या में उपयोगकर्ताओं को संभाल सकता है। यदि आप अपनी सीन में एक ही समय में 15-20 से अधिक लोगों की उम्मीद करते हैं, तो आपको अपना नेटवर्किंग सर्वर कहीं और होस्ट करने पर विचार करना चाहिए (जैसे कि Google Cloud या AWS पर)।
:::

::::code-group
:::code-group-item Fastify
```js
import networking from "@needle-tools/needle-networking";
networking.startServerFastify(fastifyApp, { endpoint: "/socket" });
```
:::
:::code-group-item Express
```js
import networking from "@needle-tools/needle-networking";
networking.startServerExpress(expressApp, { endpoint: "/socket" });
```
:::
:::code-group-item Custom Integration
```js
import { init, onConnection } from "@needle-tools/networking";

// Add your framework-specific websocket implementation here. 
// You can view the fastify and express implementations in server.js for reference.
class WebsocketConnector {
    constructor(frameworkWebsocket) {
        // Your implementation.
    }
    on(event, callback) {
        // Your implementation. When receiving a message in the websocket connection, call the callback.
        // 'event' can be 'message' or 'close'.
    }
    send(key, value) {
        // Your implementation. Pass the message along to the websocket connection.
    }
}
const options = { endpoint: "/socket" };
init(options);
yourFramework.createWebsocketRoute(options.endpoint, frameworkWebsocket => {
    onConnection(new WebsocketConnector(frameworkWebsocket));
});
```
:::
::::

::: tip Example on Glitch.com
देखें [glitch.com/edit/#!/needle-networking](https://glitch.com/edit/#!/needle-networking?path=server.js) पर कोड एक उदाहरण के लिए कि Needle Networking को Express सर्वर के साथ कैसे इंटीग्रेट किया जाए।
:::

### कॉन्फ़िगरेशन

निम्नलिखित विकल्प उपलब्ध हैं:

| विकल्प                      | विवरण                                                                                                 |
| :-------------------------- | :---------------------------------------------------------------------------------------------------- |
| `options.endpoint` *string* | वैकल्पिक। रिलेटिव सर्वर एंडपॉइंट। उदाहरण के लिए, `/socket` `yourserver/socket` पर वेबसॉकेट एंडपॉइंट शुरू करेगा। डिफ़ॉल्ट `/` है। |
| `options.maxUsers` *number* | सर्वर पर समवर्ती उपयोगकर्ताओं की अधिकतम संख्या। डिफ़ॉल्ट `50` है।                                            |
| `options.defaultUserTimeout` *number* | सेकंड में समय जिसके बाद एक उपयोगकर्ता डिस्कनेक्ट माना जाता है। डिफ़ॉल्ट `30` है।                        |
| `process.env.VIEW_ONLY_SALT` *string* | रेगुलर रूम ID से केवल-देखने योग्य रूम ID जनरेट करने के लिए उपयोग की जाने वाली सॉल्ट वैल्यू। डिफ़ॉल्ट एक पूर्वनिर्धारित सॉल्ट वैल्यू है। |
| `process.env.NEEDLE_NETWORKING_S3_*` *string* | S3 स्टोरेज सक्षम करें। इसके लिए आपको सेट करने के लिए एनवायरनमेंट वेरिएबल की पूरी सूची नीचे देखें। जब सेट नहीं किया जाता है, तो डिफ़ॉल्ट स्टोरेज का उपयोग किया जाता है (डिस्क पर JSON फ़ाइलें)। |

नेटवर्किंग सर्वर स्वचालित रूप से उपयोगकर्ताओं को कनेक्ट और डिस्कनेक्ट करना, मैसेज प्राप्त करना और भेजना, और रूम स्टेट को पर्सिस्ट करना प्रबंधित करेगा।

कस्टम नेटवर्किंग सर्वर को कहीं भी डिप्लॉय किया जा सकता है, उदाहरण के लिए Google Cloud पर। आगे के निर्देशों के लिए कृपया इस रिपॉजिटरी को देखें: [Local Needle Networking Server](https://fwd.needle.tools/needle-engine/local-networking-repository)

::: tip Different server locations for local and hosted development
यदि आप कस्टम नेटवर्किंग कोड पर काम कर रहे हैं, तो आप लोकल डेवलपमेंट और होस्टेड ऐप के लिए अलग-अलग सर्वर स्थानों का उपयोग करना चाह सकते हैं। आप `Networking` कंपोनेंट में अलग-अलग सर्वर URL सेट कर सकते हैं:

![Needle Engine Networking component with networking server hosted elswhere](/imgs/networking_absolute.webp)
:::

#### स्टेट स्टोरेज

नेटवर्क स्टेट डिफ़ॉल्ट रूप से सर्वर पर `/ .data` डायरेक्टरी में JSON फ़ाइलों के रूप में डिस्क पर संग्रहीत होती है। प्रत्येक रूम की अपनी फ़ाइल होती है, और स्टेट को कनेक्टिंग क्लाइंट्स को भेजा जाता है जब वे किसी रूम में शामिल होते हैं।

वैकल्पिक रूप से, नेटवर्किंग स्टेट को S3 कम्पैटिबल स्टोरेज प्रोवाइडर के साथ संग्रहीत किया जा सकता है। S3 स्टोरेज सक्षम करने के लिए निम्नलिखित एनवायरनमेंट वेरिएबल का उपयोग करें:

```bash
NEEDLE_NETWORKING_S3_ENDPOINT=
NEEDLE_NETWORKING_S3_REGION=
NEEDLE_NETWORKING_S3_BUCKET=
NEEDLE_NETWORKING_S3_ACCESS_KEY_ID=
NEEDLE_NETWORKING_S3_ACCESS_KEY=
NEEDLE_NETWORKING_S3_PREFIX= # bucket में सहेजे गए सभी स्टेट इस स्ट्रिंग के साथ प्रीफ़िक्स किए जाएंगे। यह एक पाथ हो सकता है जैसे `my_state/` या एक अद्वितीय आईडी `server_123_`
```

## लोकल नेटवर्किंग सर्वर

परीक्षण और डेवलपमेंट उद्देश्यों के लिए, आप Needle Engine नेटवर्किंग पैकेज को लोकल सर्वर पर चला सकते हैं। हमने एक रिपॉजिटरी तैयार की है जो वेबसॉकेट पैकेज को होस्ट करने और आपके लिए इसे आसान बनाने के लिए सेट की गई है।

1.  [github.com/needle-tools/networking-local](https://fwd.needle.tools/needle-engine/local-networking-repository) से लोकल सर्वर सैंपल डाउनलोड करें
2.  सर्वर सेट करने के लिए README में दिए गए निर्देशों का पालन करें। सर्वर डिफ़ॉल्ट रूप से `wss://localhost:9001/socket` पर चलेगा।
3.  अपनी सीन में `Networking` कंपोनेंट जोड़ें।
4.  `Networking` कंपोनेंट पर `Localhost` फ़ील्ड में लोकल सर्वर एड्रेस पेस्ट करें।

## उन्नत: peer.js के लिए WebRTC सेटिंग्स को कस्टमाइज़ करना

Needle Engine `Screencapture` (स्क्रीनशेयरिंग) और `VoIP` (वॉयस कम्युनिकेशन) कंपोनेंट ऑडियो और वीडियो नेटवर्किंग के लिए [peer.js](https://peerjs.com/) का उपयोग करते हैं। Peer.js बैकग्राउंड में WebRTC का उपयोग करता है।

Needle Engine peerjs के लिए उचित डिफ़ॉल्ट का उपयोग करता है। यदि आप उन डिफ़ॉल्ट को संशोधित करना चाहते हैं, तो आप
```ts
setPeerOptions(opts: PeerjsOptions);
```
अपने कस्टम सेटिंग्स के साथ कॉल कर सकते हैं। इसका उपयोग ICE/STUN/TURN सर्वर के लिए होस्टिंग प्रोवाइडर को संशोधित करने के लिए किया जा सकता है, उदाहरण के लिए जब आप अपने स्वयं के WebRTC सर्वर का उपयोग करते हैं।

## उन्नत: सर्वर और क्लाइंट मैसेज फॉर्मेट

::: warning केवल सूचनात्मक उद्देश्यों के लिए। इसके बजाय Needle Engine द्वारा प्रदान किए गए API का उपयोग करें।
आमतौर पर, आपको इन मैसेज फॉर्मेट के साथ सीधे इंटरैक्ट करने की आवश्यकता नहीं होती है, क्योंकि लो-लेवल नेटवर्किंग API पहले से ही मैसेज को पार्स करने और आपको सही प्रकार देने को संभालता है। यहां दी गई जानकारी उन्नत उपयोगकर्ताओं के लिए है जो अंतर्निहित मैसेज फॉर्मेट को समझना चाहते हैं या अपने स्वयं के नेटवर्किंग समाधानों को लागू करना चाहते हैं।
:::

मैसेज JSON फॉर्मेट में भेजे जाते हैं। उनके पास हमेशा एक `key` फ़ील्ड होता है जो मैसेज के प्रकार का वर्णन करता है, और एक `data` फ़ील्ड होता है जिसमें मैसेज पेलोड होता है। `data` फ़ील्ड कोई भी JSON-सीरीलाइज़ेबल ऑब्जेक्ट हो सकता है।

### बिल्ट-इन रूम इवेंट्स

::::code-group
:::code-group-item Join
```json
// Sent to the server to attempt joining a room.
{
    "key": "join-room",
    "data": {
        "room": string,
        "viewOnly": boolean,
    }
}
```
:::
:::code-group-item Leave
```json
// Sent to the server to leave a room.
{
    "key": "leave-room",
    "data": {
        "room": string
    }
}
```
:::
:::code-group-item JoinedRoom
```json
// Sent to the client when the local user has joined a room.
// Type: JoinedRoomResponse
{
    "key": "joined-room",
    "room": string,
    "viewId": string,
    "allowEditing": boolean,
    "inRoom": string[] // connection IDs
}
```
:::
:::code-group-item LeftRoom
```json
// Sent to the client when the local user has left a room.
// Type: LeftRoomResponse
{
    "key": "left-room",
    "room": string
}
```
:::
:::code-group-item UserJoinedRoom
```json
// Sent to the client when any user has joined a room.
// Type: UserJoinedOrLeftRoomModel
{
    "key": "user-joined-room",
    "data": {
        "userId": string // connection ID
    }
}
```
:::
:::code-group-item UserLeftRoom
```json
// Sent to the client when any user has left a room.
// Type: UserJoinedOrLeftRoomModel
{
    "key": "user-left-room",
    "data": {
        "userId": string // connection ID
    }
}
````
:::
:::code-group-item RoomStateSent
```json
// Sent to the client after the complete room state has been sent.
{
    "key": "room-state-sent",
    "room": string // room name 
}
```
:::
::::

### बिल्ट-इन यूटिलिटी इवेंट्स

::::code-group
:::code-group-item ConnectionInfo
```json
// Sent to the client when the connection is established.
{
    "key": "connection-start-info",
    "data": {
        "id": string // connection ID
    }
}
```
:::
:::code-group-item syncInstantiate
```json
// Used by the syncInstantiate() API to create a new instance of an asset.
// Type: NewInstanceModel
{
    "key": "new-instance-created",
    "data": {
        "guid": string,
        "originalGuid": string,
        "seed": number | undefined,
        "visible": boolean | undefined,
        "dontSave": boolean | undefined,

        "parent": string | undefined,
        "position": { x: number, y: number, z: number } | undefined,
        "rotation": { x: number, y: number, z: number, w: number } | undefined,
        "scale": { x: number, y: number, z: number } | undefined,

        "deleteStateOnDisconnect": boolean | undefined
    }
```
:::
:::code-group-item syncDestroy
```json
// Used by the syncDestroy() API to destroy an instance of an asset.
// Type: DestroyInstanceModel
{
    "key": "instance-destroyed",
    "data": {
        "guid": string,
        "dontSave": boolean | undefined
    }
}
```
:::
:::code-group-item Ping
```json
// Sent to the server every few seconds to keep the connection alive.
{
    "key": "ping",
    "data": {}
}
```
:::
:::code-group-item Pong
```json
// Sent by the server in response to a ping.
{
    "key": "pong",
    "data": {}
}
```
:::
:::code-group-item DeleteState
```json
// Sent to the server to delete state for a specific guid.
{
    "key": "delete-state",
    "data": {
        "guid": <string>
    }
}
```
:::
:::code-group-item DeleteAllState
```json
// Sent to the server to delete ALL current room state.
{
    "key": "delete-all-state",
    "data": {}
}
```
::::

### बिल्ट-इन ओनरशिप इवेंट्स

::::code-group
:::code-group-item OwnershipRequest
```json
{
    "key":
      "request-has-owner" |
      "request-ownership" |
      "remove-ownership",
    "data": {
        "guid": string
    }
}
```
:::
:::code-group-item OwnershipResponse
// Type: OwnershipResponse
```json
{
    "key":
      "response-has-owner",
    "data": {
        "guid": string,
        "value": boolean
    }
}
```
:::
::: code-group-item OwnershipBroadcastResponse
```json
{
    "key":
      "gained-ownership" |
      "lost-ownership" |
      "gained-ownership-broadcast" |
      "lost-ownership-broadcast",
    "data": {
        "guid": string,
        "owner": string
    }
}
```
:::
::::

### बिल्ट-इन फ्लैटबफ़र स्कीमा

फ्लैटबफ़र मैसेज सीधे बाइनरी मैसेज के रूप में भेजे जाते हैं।

::::code-group
:::code-group-item SyncedTransform ('STRS')
```cs
<!-- SAMPLE node_modules/@needle-tools/engine/src/engine-schemes/transforms.fbs -->
```
:::
:::code-group-item SyncedCamera ('SCAM')
```cs
<!-- SAMPLE node_modules/@needle-tools/engine/src/engine-schemes/syncedCamera.fbs -->
```
:::
:::code-group-item Vec2|3|4
```cs
<!-- SAMPLE node_modules/@needle-tools/engine/src/engine-schemes/vec.fbs -->
```
:::
::::

## उन्नत: फ्लैटबफ़र फॉर्मेट में बाइनरी मैसेज

JSON मैसेज उपयोग करने और समझने में आसान होते हैं, लेकिन आमतौर पर मेमोरी और बैंडविड्थ में बड़े होते हैं। बड़ी मात्रा में डेटा के लिए, या तेज़ अपडेट भेजते समय, बाइनरी मैसेज तेज़ और अधिक कुशल होते हैं। जहां इसकी आवश्यकता हो, आप Needle Engine में फ्लैटबफ़र मैसेज का उपयोग कर सकते हैं। फ्लैटबफ़र का उपयोग करने के लिए अतिरिक्त सेटअप चरणों की आवश्यकता होती है जैसे मैसेज स्कीमा को परिभाषित करना और कम्पाइल करना, और डीबग करना कठिन होता है क्योंकि आप बाइनरी मैसेज के साथ काम कर रहे होते हैं।

ध्यान दें कि फ्लैटबफ़र मैसेज भेजते और प्राप्त करते समय, कोई `key` फ़ील्ड नहीं होती है - मैसेज प्रकार फ्लैटबफ़र स्कीमा का हिस्सा होता है। आप वेबसॉकेट कनेक्शन पर जो भेजते और प्राप्त करते हैं, वह एक सिंगल बाइनरी बफ़र होता है।

एक ही रूम में सभी उपयोगकर्ताओं को एक बाइनरी मैसेज भेजें:
```ts
this.context.connection.sendBinary(byteArray: Uint8Array);
```

फ्लैटबफ़र फॉर्मेट में बाइनरी मैसेज की सदस्यता लें:
```ts
this.context.connection.beginListenBinary(identifier:string, callback:(data : ByteBuffer) => void);
```

बाइनरी मैसेज से सदस्यता रद्द करें:
```ts
this.context.connection.stopListenBinary(identifier:string);
```

#### फ्लैटबफ़र सैंपल कोड

फ्लैटबफ़र मैसेज भेजने और प्राप्त करने से पहले, आपको एक स्कीमा परिभाषित करने और उसे TypeScript में कम्पाइल करने की आवश्यकता है। फिर, नेटवर्किंग सिस्टम के साथ स्कीमा रजिस्टर करें और मैसेज बनाने और पार्स करने के लिए जनरेट किए गए स्कीमा मेथड का उपयोग करें।

- [Needle Engine में बिल्ट-इन फ्लैटबफ़र स्कीमा](#built-in-flatbuffer-schemas)
- [एक स्कीमा जनरेट करना](https://google.github.io/flatbuffers/flatbuffers_guide_writing_schema.html)
- [स्कीमा कम्पाइलर का उपयोग करना](https://google.github.io/flatbuffers/flatbuffers_guide_using_schema_compiler.html)
- [Typescript में फ्लैटबफ़र](https://google.github.io/flatbuffers/flatbuffers_guide_use_typescript.html)

::::code-group
:::code-group-item Register a schema
```ts
// Register a new Flatbuffer schema with the networking system
import { registerBinaryType } from '@needle-tools/engine';
import { MyDataModel } from 'my-data-model.js';

const MySchemaIdentifier = "MYSC";

registerBinaryType(MySchemaIdentifier, MyDataModel.getRootAsSyncedTransformModel);
```
:::
:::code-group-item Send Messages
```ts
// Prepare data for sending by creating a Flatbuffer message:
import { MyDataModel } from 'my-data-model.js';

const MySchemaIdentifier = "MYSC";
const builder = new flatbuffers.Builder();

// Construct a Flatbuffer message
function createMyCustomModel(somePayload: string): Uint8Array {
    builder.clear();
    MyDataModel.startMyDataModel(builder);    
    const guidObj = builder.createString(guid);
    MyDataModel.addSomePayload(builder, guidObj);
    const res = MyDataModel.endMyDataModel(builder);
    builder.finish(res, MySchemaIdentifier);
    return builder.asUint8Array();
}

// Send the data
function sendData() {
    const data = createMyCustomModel("your-payload", this, true);
    this.context.connection.sendBinary(data);
}
```
:::
:::code-group-item Receive Messages
```ts
// Subscribe to receive this specific message type:
import { MyDataModel } from 'my-data-model.js';

const MySchemaIdentifier = "MYSC";

this.context.connection.beginListenBinary(MySchemaIdentifier, (data) => {
    const model = MyDataModel.getRootAsMyDataModel(data);
    console.log("Received binary message", model, model.somePayload());
});
```
:::
::::

::: tip Custom Flatbuffer messages and persistence
वर्तमान में, कस्टम बाइनरी मैसेज को नेटवर्किंग सर्वर पर पर्सिस्ट नहीं किया जा सकता है। नेटवर्किंग सर्वर को संशोधित करें और सुनिश्चित करने के लिए अपने कस्टम फ्लैटबफ़र स्कीमा जोड़ें कि guid प्रॉपर्टी को प्रोसेस किया जा सके।
:::

## सारांश

Needle Engine नेटवर्किंग के जटिल विषय को सुलभ और उपयोग में आसान बनाता है। आप अपने कंपोनेंट के लिए कुछ ही लाइनों के कोड के साथ ऑटोमैटिक नेटवर्किंग शुरू कर सकते हैं, और जब आपको अधिक नियंत्रण की आवश्यकता हो तो आप मैनुअल नेटवर्किंग में गहराई से उतर सकते हैं।

---
पेज का अनुवाद AI का उपयोग करके स्वचालित रूप से किया गया है।