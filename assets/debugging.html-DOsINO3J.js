import{_ as n,r as l,o,c as r,e as s,a,d as i,b as h,w as d}from"./app-yVS-QTec.js";const p="/docs/debugging/vscode-start-debugging.webp",g={};function u(c,e){const t=l("RouteLink");return o(),r("div",null,[e[5]||(e[5]=s('<h2 id="useful-resources-for-working-with-gltf" tabindex="-1"><a class="header-anchor" href="#useful-resources-for-working-with-gltf"><span>Useful resources for working with glTF</span></a></h2><p>To inspect glTF or glb files online:</p><ul><li><a href="https://gltf.report/" target="_blank" rel="noopener noreferrer">gltf.report</a> - three.js based</li><li><a href="https://modelviewer.dev/editor" target="_blank" rel="noopener noreferrer">modelviewer.dev/editor</a> - three.js based</li><li><a href="https://github.khronos.org/glTF-Sample-Viewer-Release/" target="_blank" rel="noopener noreferrer">Khronos glTF Sample Viewer</a></li><li><a href="https://sandbox.babylonjs.com/" target="_blank" rel="noopener noreferrer">Babylon Sandbox</a></li><li><a href="https://github.khronos.org/glTF-Validator/" target="_blank" rel="noopener noreferrer">glTF Validator</a></li></ul><p>To inspect them locally:</p><ul><li>use the <a href="https://apps.microsoft.com/store/detail/gltf-shell-extensions/9NPGVJ9N57MV?hl=en-us&amp;gl=US" target="_blank" rel="noopener noreferrer">glTF Shell Extension for Windows</a> to convert between glTF and glb</li><li>use the <a href="https://marketplace.visualstudio.com/items?itemName=cesium.gltf-vscode" target="_blank" rel="noopener noreferrer">glTF Tools VS Code Extension</a> to see validation errors and in-engine previews locally</li></ul><h2 id="built-in-url-parameters" tabindex="-1"><a class="header-anchor" href="#built-in-url-parameters"><span>Built-in URL parameters</span></a></h2><p>Debug Flags can be appended as URL query parameters.<br> Use <code>?help</code> to get a list of ALL parameters available.</p><p>Here are some of the most commonly used:</p><ul><li><code>help</code> print all available url parameter in the console</li><li><code>console</code> opens an on-screen dev console, useful for mobile debugging</li><li><code>printGltf</code> logs loaded gltf files to the console</li><li><code>stats</code> shows FPS module and logs threejs renderer stats every few seconds</li><li><code>showcolliders</code> visualizes physics colliders</li><li><code>gizmos</code> enables gizmo rendering (e.g. when using BoxCollider or AxesHelper components)</li><li>and a lot more: please use <code>help</code> to see them all</li></ul><h2 id="debug-methods" tabindex="-1"><a class="header-anchor" href="#debug-methods"><span>Debug Methods</span></a></h2>',10)),a("p",null,[e[1]||(e[1]=i("Needle Engine also has some very powerful and useful debugging methods that are part of the static ")),e[2]||(e[2]=a("code",null,"Gizmos",-1)),e[3]||(e[3]=i(" class. See the ")),h(t,{to:"/scripting.html#gizmos"},{default:d(()=>e[0]||(e[0]=[i("scripting documentation")])),_:1}),e[4]||(e[4]=i(" for more information."))]),e[6]||(e[6]=s(`<h2 id="local-testing-of-release-builds" tabindex="-1"><a class="header-anchor" href="#local-testing-of-release-builds"><span>Local Testing of release builds</span></a></h2><ul><li>First, install http-server: <code>npm install -g http-server</code></li><li>make a build (development or production)</li><li>open the <em>dist</em> directory with a commandline tool</li><li>run <code>http-server -g</code> | <em><code>-g</code> enables gzip support</em></li><li>optional: if you want to test WebXR, generate a <a href="https://stackoverflow.com/a/35231213" target="_blank" rel="noopener noreferrer">self-signed SSL certificate</a>, then run <code>http-server -g -S</code> to enable https (required for WebXR).</li></ul><h2 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode"><span>VSCode</span></a></h2><p>You can attach VSCode to the running local server to set breakpoints and debug your code. You can read more about <a href="https://code.visualstudio.com/docs/editor/debugging" target="_blank" rel="noopener noreferrer">debugging with VSCode</a> here.</p><p>Create a launch.json file at <code>.vscode/launch.json</code> in your web project with the following content:</p><div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#4c4f69;--shiki-dark:#c6d0f5;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#303446;"><pre class="shiki shiki-themes catppuccin-latte catppuccin-frappe vp-code"><code><span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">{</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">    &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">version</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;0.2.0&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">    &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">configurations</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> [</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">        {</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">            &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">type</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;chrome&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">            &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">request</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;launch&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">            &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">name</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;Attach Chrome&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">            &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">url</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;https://localhost:3000&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">            &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">webRoot</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;\${workspaceFolder}&quot;</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">        }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">    ]</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span></span></code></pre></div><p>If you have changed the port on which your server starts make sure to update the <code>url</code> field accordingly.<br> You can then start your local server from within VSCode:</p><p><img src="`+p+'" alt=""></p><h2 id="mobile" tabindex="-1"><a class="header-anchor" href="#mobile"><span>Mobile</span></a></h2><h3 id="android-debugging" tabindex="-1"><a class="header-anchor" href="#android-debugging"><span>Android Debugging</span></a></h3><p>For <strong>Android</strong> debugging, you can attach Chrome Dev Tools to your device and see logs right from your PC. You have to switch your device into development mode and connect it via USB.</p><p>See the official chrome documentation <a href="https://developer.chrome.com/docs/devtools/remote-debugging/" target="_blank" rel="noopener noreferrer">here</a></p><ul><li>Make sure <a href="https://developer.android.com/studio/debug/dev-options" target="_blank" rel="noopener noreferrer">Developer Mode</a> is enabled on your phone</li><li>Connect your phone to your computer via USB</li><li>Open this url in your browser <code>chrome://inspect/#devices</code></li><li>On your mobile device allow the USB connection to your computer</li><li>On your computer in chrome you should see a list of open tabs after a while (on <code>chrome://inspect/#devices</code>)</li><li>Click <code>Inspect</code> on the tab you want to debug</li></ul><h3 id="ios-debugging" tabindex="-1"><a class="header-anchor" href="#ios-debugging"><span>iOS Debugging</span></a></h3><p>For easy iOS debugging add the <code>?console</code> URL parameter to get a useful on-screen JavaScript console.</p><p>If you have a Mac, you can also attach to Safari (similar to the Android workflow above).</p><p>WebXR usage and debugging on iOS requires using a third-party browser: <a href="https://labs.mozilla.org/projects/webxr-viewer/" target="_blank" rel="noopener noreferrer">Mozilla WebXR Viewer</a>.</p><h3 id="quest-debugging" tabindex="-1"><a class="header-anchor" href="#quest-debugging"><span>Quest Debugging</span></a></h3><p>Quest is just an Android device - see the <a href="#android-debugging">Android Debugging</a> section for steps.</p>',19))])}const b=n(g,[["render",u],["__file","debugging.html.vue"]]),f=JSON.parse('{"path":"/debugging.html","title":"How To Debug","lang":"en-US","frontmatter":{"title":"How To Debug","head":[["meta",{"name":"og:image","content":"https://engine.needle.tools/docs/.preview/how to debug.png"}],["meta",{"name":"og:description","content":"---\\nTo inspect glTF or glb files online:"}]],"description":"---\\nTo inspect glTF or glb files online:"},"headers":[{"level":2,"title":"Useful resources for working with glTF","slug":"useful-resources-for-working-with-gltf","link":"#useful-resources-for-working-with-gltf","children":[]},{"level":2,"title":"Built-in URL parameters","slug":"built-in-url-parameters","link":"#built-in-url-parameters","children":[]},{"level":2,"title":"Debug Methods","slug":"debug-methods","link":"#debug-methods","children":[]},{"level":2,"title":"Local Testing of release builds","slug":"local-testing-of-release-builds","link":"#local-testing-of-release-builds","children":[]},{"level":2,"title":"VSCode","slug":"vscode","link":"#vscode","children":[]},{"level":2,"title":"Mobile","slug":"mobile","link":"#mobile","children":[{"level":3,"title":"Android Debugging","slug":"android-debugging","link":"#android-debugging","children":[]},{"level":3,"title":"iOS Debugging","slug":"ios-debugging","link":"#ios-debugging","children":[]},{"level":3,"title":"Quest Debugging","slug":"quest-debugging","link":"#quest-debugging","children":[]}]}],"git":{"updatedTime":1700724672000},"filePathRelative":"debugging.md"}');export{b as comp,f as data};