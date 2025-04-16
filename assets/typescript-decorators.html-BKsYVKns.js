import{_ as s,c as a,e as t,o as e}from"./app-B5AKkTET.js";const l={};function n(h,i){return e(),a("div",null,i[0]||(i[0]=[t(`<p>The following table contains available Typescript decorators that Needle Engine provides.</p><p>You can think of them as Attributes on steroids (if you are familiar with C#) - they can be added to classes, fields or methods in Typescript to provide additional functionality.</p><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td><strong>Field &amp; Property Decorators</strong></td><td></td></tr><tr><td><code>@serializable()</code></td><td>Add to exposed / serialized fields. Is used when loading glTF files that have been exported with components from Unity or Blender.</td></tr><tr><td><code>@syncField()</code></td><td>Add to a field to network the value when it changes. You can pass in a method to be called when the field changes</td></tr><tr><td><code>@validate()</code></td><td>Add to receive callbacks in the component event method <code>onValidate</code> whenever the value changes. This behaves similar to Unity&#39;s onValidate.</td></tr><tr><td><strong>Method Decorators</strong></td><td></td></tr><tr><td><code>@prefix(&lt;type&gt;)</code> (experimental)</td><td>Can be used to easily inject custom code into other components. Optionally return <code>false</code> to prevent the original method from being executed. See the <a href="#prefix">example below</a></td></tr><tr><td><strong>Class Decorators</strong></td><td></td></tr><tr><td><code>@registerType</code></td><td>No argument. Can be added to a custom component class to be registered to the Needle Engine types and to enable hot reloading support.</td></tr></tbody></table><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h2><h3 id="serializable" tabindex="-1"><a class="header-anchor" href="#serializable"><span>Serializable</span></a></h3><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#4c4f69;--shiki-dark:#c6d0f5;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#303446;"><pre class="shiki shiki-themes catppuccin-latte catppuccin-frappe vp-code"><code><span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">import</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> Behaviour</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> serializable</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> EventList </span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;@needle-tools/engine&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">import</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> Object3D </span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;three&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">export</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> class</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;"> SomeComponentType</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> extends</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;"> Behaviour</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">export</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> class</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;"> ButtonObject</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> extends</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;"> Behaviour</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-light-font-style:italic;--shiki-dark:#949CBB;--shiki-dark-font-style:italic;">    // you can omit the type if it&#39;s a primitive </span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-light-font-style:italic;--shiki-dark:#949CBB;--shiki-dark-font-style:italic;">    // e.g. Number, String or Bool</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">    @serializable</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">()</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">    myNumber</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">:</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> number</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;"> =</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;"> 42</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-light-font-style:italic;--shiki-dark:#949CBB;--shiki-dark-font-style:italic;">    // otherwise add the concrete type that you want to serialize to</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">    @serializable</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">(</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">EventList</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">)</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">    onClick</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">?:</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;"> EventList</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">    @serializable</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">(</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">SomeComponentType</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">)</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">    myComponent</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">?:</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;"> SomeComponentType</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-light-font-style:italic;--shiki-dark:#949CBB;--shiki-dark-font-style:italic;">    // Note that for arrays you still add the concrete type (not the array)</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">    @serializable</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">(</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">Object3D</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">)</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">    myObjects</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">?:</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;"> Object3D[]</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span></span></code></pre></div><h3 id="syncfield" tabindex="-1"><a class="header-anchor" href="#syncfield"><span>SyncField</span></a></h3><p>The <code>@syncField</code> decorator can be used to automatically network properties of your components for all users (visitors of your website) connected to the same networking room. It can optionally take a callback function that will be invoked whenever the value changes.</p><ul><li>To notify the system that a reference value (like an object or an array) has changed you need to re-assign the field. E.g. like this: <code>myField = myField</code></li><li>The callback function can <em>not</em> be an arrow function (e.g. <code>MyScript.prototype.onNumberChanged</code> works for <code>onNumberChanged() { ... }</code> but it does not for <code>myNumberChanged = () =&gt; { ... }</code>)</li></ul><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#4c4f69;--shiki-dark:#c6d0f5;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#303446;"><pre class="shiki shiki-themes catppuccin-latte catppuccin-frappe vp-code"><code><span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">import</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> Behaviour</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> serializable</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> syncField </span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;@needle-tools/engine&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">export</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> class</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;"> MyScript</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> extends</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;"> Behaviour</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">    @syncField</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">(</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;">MyScript</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">prototype</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">onNumberChanged</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">)</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">    @serializable</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">()</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">    myNumber</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">:</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> number</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;"> =</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;"> 42</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">    private</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;"> onNumberChanged</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">(</span><span style="--shiki-light:#E64553;--shiki-light-font-style:italic;--shiki-dark:#EA999C;--shiki-dark-font-style:italic;">newValue</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">:</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> number</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#E64553;--shiki-light-font-style:italic;--shiki-dark:#EA999C;--shiki-dark-font-style:italic;"> oldValue</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">:</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> number</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">){</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">        console</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">log</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;">&quot;Number changed from &quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> oldValue</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;to&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> newValue)</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">    }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span></span></code></pre></div><h3 id="validate" tabindex="-1"><a class="header-anchor" href="#validate"><span>Validate</span></a></h3><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#4c4f69;--shiki-dark:#c6d0f5;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#303446;"><pre class="shiki shiki-themes catppuccin-latte catppuccin-frappe vp-code"><code><span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">import</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> Behaviour</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> serializable</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> validate </span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;@needle-tools/engine&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">export</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> class</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;"> MyScript</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> extends</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;"> Behaviour</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">    @validate</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">()</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">    @serializable</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">()</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">    myNumber</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">?:</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> number</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">    start</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">()</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;"> setInterval</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">()</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;"> =&gt;</span><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;"> this</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">myNumber </span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">=</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> Math</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">random</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">()</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;"> 1000</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">) </span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">    onValidate</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">(</span><span style="--shiki-light:#E64553;--shiki-light-font-style:italic;--shiki-dark:#EA999C;--shiki-dark-font-style:italic;">fieldName</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">:</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> string</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">        console</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">log</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;">&quot;Validate&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> fieldName</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;"> this</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">myNumber)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">    }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span></span></code></pre></div><h3 id="prefix" tabindex="-1"><a class="header-anchor" href="#prefix"><span>Prefix</span></a></h3><p><a href="https://stackblitz.com/edit/needle-engine-prefix-example?file=src%2Fmain.ts" target="_blank" rel="noopener noreferrer">Live example</a></p><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#4c4f69;--shiki-dark:#c6d0f5;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#303446;"><pre class="shiki shiki-themes catppuccin-latte catppuccin-frappe vp-code"><code><span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">import</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> Camera</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> prefix </span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;@needle-tools/engine&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">class</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;"> YourClass</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">    @prefix</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">(</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">Camera</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">)</span><span style="--shiki-light:#7C7F93;--shiki-light-font-style:italic;--shiki-dark:#949CBB;--shiki-dark-font-style:italic;"> // &lt; this is type that has the method you want to change</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">    awake</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">()</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span><span style="--shiki-light:#7C7F93;--shiki-light-font-style:italic;--shiki-dark:#949CBB;--shiki-dark-font-style:italic;"> // &lt; this is the method name you want to change</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-light-font-style:italic;--shiki-dark:#949CBB;--shiki-dark-font-style:italic;">        // this is now called before the Camera.awake method runs</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-light-font-style:italic;--shiki-dark:#949CBB;--shiki-dark-font-style:italic;">        // NOTE: \`this\` does now refer to the Camera instance and NOT \`YourClass\` anymore. This allows you to access internal state of the component as well</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">        console</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">log</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;">&quot;Hello camera:&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;"> this</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">)</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-light-font-style:italic;--shiki-dark:#949CBB;--shiki-dark-font-style:italic;">        // optionally return false if you want to prevent the default behaviour</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">    }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span></span></code></pre></div>`,15)]))}const p=s(l,[["render",n]]),r=JSON.parse('{"path":"/reference/typescript-decorators.html","title":"@serializable and other decorators","lang":"en-US","frontmatter":{"title":"@serializable and other decorators","head":[["meta",{"name":"og:image","content":"https://engine.needle.tools/docs/.preview/@serializable and other decorators.png"}],["meta",{"name":"og:description","content":"---\\nThe following table contains available Typescript decorators that Needle Engine provides.\\nYou can think of them as Attributes on steroids (if you are familiar with C#)"}]],"description":"---\\nThe following table contains available Typescript decorators that Needle Engine provides.\\nYou can think of them as Attributes on steroids (if you are familiar with C#)"},"headers":[{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[{"level":3,"title":"Serializable","slug":"serializable","link":"#serializable","children":[]},{"level":3,"title":"SyncField","slug":"syncfield","link":"#syncfield","children":[]},{"level":3,"title":"Validate","slug":"validate","link":"#validate","children":[]},{"level":3,"title":"Prefix","slug":"prefix","link":"#prefix","children":[]}]}],"git":{"updatedTime":1726585195000,"contributors":[{"name":"Marcel Wiessler","username":"","email":"marcel@gaisterhand.de","commits":4},{"name":"hybridherbst","username":"hybridherbst","email":"felix.herbst@gmail.com","commits":2,"url":"https://github.com/hybridherbst"},{"name":"Felix Herbst","username":"","email":"felix.herbst@gmail.com","commits":2}],"changelog":[{"hash":"0c64faf1313d420ba4c8c47435cd9876833c6805","time":1726585195000,"email":"felix.herbst@gmail.com","author":"Felix Herbst","message":"explicitly set twoslash on the scripts that work"},{"hash":"08657b85eb9143a8f91a214c83181f02d628ef4b","time":1726584301000,"email":"felix.herbst@gmail.com","author":"Felix Herbst","message":"sample scripts cleanup, adjust code, add imports so they compile, adjust twoslash config"},{"hash":"d1bb872fae1a84b899a009d83548e1161c50244f","time":1726559358000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update typescript-decorators.md"},{"hash":"0232e7a6ac7c84f8fcc471195d1c41e01c17c364","time":1726559329000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update typescript-decorators.md"},{"hash":"c01a70ade9f5dbd112d9a0793b1aaad7886b917f","time":1726514637000,"email":"felix.herbst@gmail.com","author":"hybridherbst","message":"fixing some types"},{"hash":"d1bb8a7520be74bd36c9a6e315b344597dbd07ea","time":1725399379000,"email":"felix.herbst@gmail.com","author":"hybridherbst","message":"start reordering header menu"},{"hash":"0e83fcfacb243e5026f2e7441b133cb8a7fa87f5","time":1687345392000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"Improve prefix docs"},{"hash":"ca0ba8333b0ff8cd62e54e8886ed136502ad9c6a","time":1685288050000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"Add some documentation  for typescript decorators"}]},"filePathRelative":"reference/typescript-decorators.md"}');export{p as comp,r as data};
