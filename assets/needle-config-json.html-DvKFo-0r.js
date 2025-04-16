import{_ as t,c as a,e as n,a as i,b as h,w as l,r,o as p,d}from"./app-B5AKkTET.js";const k={};function o(c,s){const e=r("RouteLink");return p(),a("div",null,[s[1]||(s[1]=n(`<p>The <code>needle.config.json</code> is used to provide configuration for the Needle Editor integrations and for the Needle Engine build pipeline plugins.</p><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td><strong>Paths</strong></td><td></td></tr><tr><td><code>buildDirectory</code></td><td>This is where the built project files are being copied to</td></tr><tr><td><code>assetsDirectory</code></td><td>This is where the Editor integration assets will be copied to or created at (e.g. the <code>.glb</code> files exported from Unity or Blender)</td></tr><tr><td><code>scriptsDirectory</code></td><td>This is the directory the Editor integration is watching for code changes to re-generate components</td></tr><tr><td><code>codegenDirectory</code></td><td>This is where the Editor integration is outputting generated files to.</td></tr><tr><td><code>baseUrl</code></td><td>Required for e.g. next.js or SvelteKit integration. When baseUrl is set, relative paths for codegen and inside files are using baseUrl, not assetsDirectory. This is useful in cases where the assetDirectory does not match the server url.<br>For example, the path on disk could be <code>&quot;assetsDirectory&quot;: &quot;public/assets&quot;</code>, but the framework serves files from <code>&quot;baseUrl&quot;: &quot;assets&quot;</code>.</td></tr><tr><td><strong>Tools</strong></td><td></td></tr><tr><td><code>build : { copy: [&quot;myFileOrDirectory&quot;] }</code></td><td>Array of string paths for copying additional files or folders to the <code>buildDirectory</code>. These can either be absolute or relative.</td></tr></tbody></table><h4 id="basic-example" tabindex="-1"><a class="header-anchor" href="#basic-example"><span>Basic Example</span></a></h4><div class="language-json" data-highlighter="shiki" data-ext="json" style="--shiki-light:#4c4f69;--shiki-dark:#c6d0f5;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#303446;"><pre class="shiki shiki-themes catppuccin-latte catppuccin-frappe vp-code"><code><span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">{</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">  &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">buildDirectory</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;dist&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">  &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">assetsDirectory</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;assets&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">  &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">scriptsDirectory</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;src/scripts&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">  &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">codegenDirectory</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;src/generated&quot;</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span></span></code></pre></div><h4 id="copy-example" tabindex="-1"><a class="header-anchor" href="#copy-example"><span>Copy Example</span></a></h4><div class="language-json" data-highlighter="shiki" data-ext="json" style="--shiki-light:#4c4f69;--shiki-dark:#c6d0f5;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#303446;"><pre class="shiki shiki-themes catppuccin-latte catppuccin-frappe vp-code"><code><span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">{</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">  &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">buildDirectory</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;dist&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">  &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">assetsDirectory</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;assets&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">  &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">scriptsDirectory</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;src/scripts&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">  &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">codegenDirectory</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;src/generated&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">  &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">build</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> {</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">    &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">copy</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;"> [</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;">      &quot;cards&quot;</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">    ]</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">  }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span></span></code></pre></div><h4 id="example-with-different-baseurl-e.g.-sveltekit-next.js" tabindex="-1"><a class="header-anchor" href="#example-with-different-baseurl-e.g.-sveltekit-next.js"><span>Example with different baseUrl (e.g. SvelteKit, Next.js)</span></a></h4><p>Files are exported to <code>static/assets</code> but the framework serves them from <code>/assets</code>. In this case, the <code>baseUrl</code> needs to be set to <code>assets</code> so that relative paths in files are correct.</p><div class="language-json" data-highlighter="shiki" data-ext="json" style="--shiki-light:#4c4f69;--shiki-dark:#c6d0f5;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#303446;"><pre class="shiki shiki-themes catppuccin-latte catppuccin-frappe vp-code"><code><span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">{</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">  &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">baseUrl</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;assets&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">  &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">buildDirectory</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;dist&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">  &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">assetsDirectory</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;static/assets&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">  &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">scriptsDirectory</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;src/scripts&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">  &quot;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8CAAEE;">codegenDirectory</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6D189;"> &quot;src/generated&quot;</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#949CBB;">}</span></span></code></pre></div><h4 id="related-links" tabindex="-1"><a class="header-anchor" href="#related-links"><span>Related Links</span></a></h4>`,10)),i("ul",null,[i("li",null,[h(e,{to:"/project-structure.html"},{default:l(()=>s[0]||(s[0]=[d("Project Structure")])),_:1})])])])}const B=t(k,[["render",o]]),C=JSON.parse('{"path":"/reference/needle-config-json.html","title":"needle.config.json","lang":"en-US","frontmatter":{"title":"needle.config.json","head":[["meta",{"name":"og:image","content":"https://engine.needle.tools/docs/.preview/needle.png"}],["meta",{"name":"og:description","content":"---\\nThe needle.config.json is used to provide configuration for the Needle Editor integrations and for the Needle Engine build pipeline plugins."}]],"description":"---\\nThe needle.config.json is used to provide configuration for the Needle Editor integrations and for the Needle Engine build pipeline plugins."},"headers":[],"git":{"updatedTime":1725399379000,"contributors":[{"name":"Marcel Wiessler","username":"","email":"marcel@gaisterhand.de","commits":4},{"name":"hybridherbst","username":"hybridherbst","email":"felix.herbst@gmail.com","commits":2,"url":"https://github.com/hybridherbst"}],"changelog":[{"hash":"d1bb8a7520be74bd36c9a6e315b344597dbd07ea","time":1725399379000,"email":"felix.herbst@gmail.com","author":"hybridherbst","message":"start reordering header menu"},{"hash":"b9600a2c569333da3bac75ef860ce14062ada980","time":1690188877000,"email":"felix.herbst@gmail.com","author":"hybridherbst","message":"update needle.config.json docs and reference from frameworks/bundlers page"},{"hash":"d3179b558cfc114c4c40602f537b045733726370","time":1684748325000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"Fix link + update needle-config.json"},{"hash":"7b1e9ce1d282d8b310d22266d877f308368771c5","time":1684748013000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"Update getting started links, rename project structure, add some more primitive typescript docs"},{"hash":"a10e4a98f51a1775fa31e609920a45fbf7d917bc","time":1684681152000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update needle-config-json.md"},{"hash":"30069ee5ba161126775a894bed84df7ccd01b77f","time":1684611246000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"Update project structure, export, add some basic needle-config.json documentation"}]},"filePathRelative":"reference/needle-config-json.md"}');export{B as comp,C as data};
