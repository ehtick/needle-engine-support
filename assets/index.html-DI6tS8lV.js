import{_ as t,c as n,a as i,b as h,e as k,r as l,o as p}from"./app-B5AKkTET.js";const e={};function r(d,s){const a=l("contribution-header");return p(),n("div",null,[s[0]||(s[0]=i("p",null,[i("a",{href:"/docs/community/contributions"},"Overview")],-1)),h(a,{url:"https://github.com/Web3Kev",author:"Web3Kev",page:"/docs/community/contributions/web3kev/",profileImage:"https://avatars.githubusercontent.com/u/106066970?s=100&u=54715d32540d85af49d8d02101ce9b0479d6deba&v=4",githubUrl:"https://github.com/needle-tools/needle-engine-support/discussions/158",title:"Vertical Move in VR using the right joystick (Quest)",gradient:"True"}),s[1]||(s[1]=k(`<p>The following code will enable Quest users (haven&#39;t tested with other devices) to move up and down with the right-joystick\`s y axis. (the x axis being used for snap-turns).</p><p>This code will interfere with the teleport script when accidentally pointing towards an object and trying to move up. It is recommended to remove the teleport script for that matter.</p><p>You can place this script anywhere.</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#4c4f69;--shiki-dark:#c6d0f5;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#303446;"><pre class="shiki shiki-themes catppuccin-latte catppuccin-frappe vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">import</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> Behaviour</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> WebXR</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> GameObject</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;@needle-tools/engine&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">import</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> Vector3</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">Quaternion</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;three&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">import</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> Mathf </span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;@needle-tools/engine&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">export</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> class</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;"> VerticalMove</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> extends</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;"> Behaviour</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">    private</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> webXR</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">?:</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;"> WebXR</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">    private</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> joystickY</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">?:</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">number</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">    private</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> worldRot</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">:</span><span style="--shiki-light:#DF8E1D;--shiki-light-font-style:italic;--shiki-dark:#E5C890;--shiki-dark-font-style:italic;"> Quaternion </span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">=</span><span style="--shiki-light:#8839EF;--shiki-light-font-weight:bold;--shiki-dark:#CA9EE6;--shiki-dark-font-weight:bold;"> new</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;"> Quaternion</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">()</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">    start</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">()</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">:</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;"> void</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">        let</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> _webxr</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">=</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">GameObject</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">findObjectOfType</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(WebXR)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">        if</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(_webxr)</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">        {</span></span>
<span class="line"><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;">            this</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">webXR</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">=</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">_webxr</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">            console</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">log</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;">&quot;webxr found&quot;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">        }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">    update</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">()</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">    {</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">        if</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(</span><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;">this</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">context</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">isInVR)</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">        {</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-light-font-style:italic;--shiki-dark:#949CBB;--shiki-dark-font-style:italic;">            //get y value from right joystick</span></span>
<span class="line"><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;">            this</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">verticalMove</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">()</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">        }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">    verticalMove</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">()</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">:</span><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">void</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">    {</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">        if</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(</span><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;">this</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">webXR</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">?.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">RightController</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">?.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">input</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">?.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">gamepad</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">?.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">axes[</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">3</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">]) </span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">        {</span></span>
<span class="line"><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;">            this</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">joystickY</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">=</span><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;">this</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">webXR</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">RightController</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">input</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">gamepad</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">axes[</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">3</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">]</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">            const</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> speedFactor </span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">=</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;"> 3</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">            const</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> powFactor </span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">=</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;"> 2</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">            const</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> speed </span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">=</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> Mathf</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">clamp01</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">2</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;"> *</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;"> 2</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">            </span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">            const</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> verticalDir </span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">=</span><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;"> this</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">joystickY </span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">&lt;</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;"> 0</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;"> ?</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;"> 1</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;"> :</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;"> -</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">1</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">            let</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> vertical </span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">=</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> Math</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">pow</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(</span><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;">this</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">joystickY</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> powFactor)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">            vertical </span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">*=</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> verticalDir</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">            vertical </span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">*=</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> speed</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;">            this</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">webXR</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">Rig</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">getWorldQuaternion</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(</span><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;">this</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">worldRot)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">            </span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#CA9EE6;">            let</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> movementVector</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">=</span><span style="--shiki-light:#8839EF;--shiki-light-font-weight:bold;--shiki-dark:#CA9EE6;--shiki-dark-font-weight:bold;">new</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;"> Vector3</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">()</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">            movementVector</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">set</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;">0</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;"> vertical</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;"> 0</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">            movementVector</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">applyQuaternion</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(</span><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;">this</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">webXR</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">TransformOrientation)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">            movementVector</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">x </span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">=</span><span style="--shiki-light:#FE640B;--shiki-dark:#EF9F76;"> 0</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">            movementVector</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">applyQuaternion</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(</span><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;">this</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">worldRot)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">            movementVector</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">multiplyScalar</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(speedFactor </span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">*</span><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;"> this</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">context</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">time</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">deltaTime)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D20F39;--shiki-dark:#E78284;">            this</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">webXR</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">Rig</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">position</span><span style="--shiki-light:#179299;--shiki-dark:#81C8BE;">.</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#8CAAEE;--shiki-dark-font-style:italic;">add</span><span style="--shiki-light:#4C4F69;--shiki-dark:#C6D0F5;">(movementVector)</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">;</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">        }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">    }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span></span></code></pre></div>`,4))])}const g=t(e,[["render",r]]),y=JSON.parse('{"path":"/community/contributions/web3kev/vertical-move-in-vr-using-the-right-joystick-quest/","title":"","lang":"en-US","frontmatter":{"head":[["meta",{"name":"og:image","content":"https://engine.needle.tools/docs/.preview/web3kev: vertical move in vr using the right joystick quest.png"}],["meta",{"name":"og:description","content":"Needle Engine is a web-based runtime for 3D apps. It runs on your machine for development, and can be deployed anywhere. It is flexible, extensible, and collaboration and XR come naturally. Needle Exporter for Unity bridges the Unity Editor and the web runtime. It helps you to export your assets, animations, lightmaps and so on to the web. It is built around the glTF standard for 3D assets."}]],"description":"Needle Engine is a web-based runtime for 3D apps. It runs on your machine for development, and can be deployed anywhere. It is flexible, extensible, and collaboration and XR come naturally. Needle Exporter for Unity bridges the Unity Editor and the web runtime. It helps you to export your assets, animations, lightmaps and so on to the web. It is built around the glTF standard for 3D assets."},"headers":[],"git":{},"filePathRelative":null}');export{g as comp,y as data};
