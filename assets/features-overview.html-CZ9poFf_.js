import{_ as m,c as u,a as t,e as d,b as r,d as a,w as s,r as l,o as p}from"./app-B5AKkTET.js";const h={},f={class:"table-of-contents"};function b(g,e){const i=l("router-link"),n=l("RouteLink"),o=l("sample");return p(),u("div",null,[e[59]||(e[59]=t("h1",{id:"feature-overview",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#feature-overview"},[t("span",null,"Feature Overview")])],-1)),e[60]||(e[60]=t("p",null,[a("Needle Engine is a fully fledged 3D engine that runs in the browser. It comes with all the features you'd expect from a modern 3D engine, and more. If you haven't yet, take a look at our "),t("a",{href:"https://needle.tools",target:"_blank",rel:"noopener noreferrer"},"Homepage"),a(" and our "),t("a",{href:"https://engine.needle.tools/samples",target:"_blank",rel:"noopener noreferrer"},"Samples and Showcase"),a(".")],-1)),t("nav",f,[t("ul",null,[t("li",null,[r(i,{to:"#shaders-and-materials"},{default:s(()=>e[0]||(e[0]=[a("Shaders and Materials")])),_:1})]),t("li",null,[r(i,{to:"#crossplatform-vr-ar-mobile-desktop"},{default:s(()=>e[1]||(e[1]=[a("Crossplatform: VR, AR, Mobile, Desktop")])),_:1})]),t("li",null,[r(i,{to:"#lightmaps"},{default:s(()=>e[2]||(e[2]=[a("Lightmaps")])),_:1})]),t("li",null,[r(i,{to:"#multiplayer-and-networking"},{default:s(()=>e[3]||(e[3]=[a("Multiplayer and Networking")])),_:1})]),t("li",null,[r(i,{to:"#animations-and-sequencing"},{default:s(()=>e[4]||(e[4]=[a("Animations and Sequencing")])),_:1}),t("ul",null,[t("li",null,[r(i,{to:"#animator"},{default:s(()=>e[5]||(e[5]=[a("Animator")])),_:1})]),t("li",null,[r(i,{to:"#timeline"},{default:s(()=>e[6]||(e[6]=[a("Timeline")])),_:1})])])]),t("li",null,[r(i,{to:"#physics"},{default:s(()=>e[7]||(e[7]=[a("Physics")])),_:1})]),t("li",null,[r(i,{to:"#ui"},{default:s(()=>e[8]||(e[8]=[a("UI")])),_:1})]),t("li",null,[r(i,{to:"#particles"},{default:s(()=>e[9]||(e[9]=[a("Particles")])),_:1})]),t("li",null,[r(i,{to:"#postprocessing"},{default:s(()=>e[10]||(e[10]=[a("PostProcessing")])),_:1})]),t("li",null,[r(i,{to:"#editor-integrations"},{default:s(()=>e[11]||(e[11]=[a("Editor Integrations")])),_:1})]),t("li",null,[r(i,{to:"#scripting"},{default:s(()=>e[12]||(e[12]=[a("Scripting")])),_:1})]),t("li",null,[r(i,{to:"#and-there-is-more"},{default:s(()=>e[13]||(e[13]=[a("And there is more")])),_:1})])])]),e[61]||(e[61]=t("h2",{id:"shaders-and-materials",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#shaders-and-materials"},[t("span",null,"Shaders and Materials")])],-1)),e[62]||(e[62]=t("p",null,"Both PBR Materials and Custom shaders created with Shader Graph or other systems can be exported.",-1)),e[63]||(e[63]=t("img",{src:"https://user-images.githubusercontent.com/5083203/186012027-9bbe3944-fa56-41fa-bfbb-c989fa87aebb.png"},null,-1)),e[64]||(e[64]=t("p",null,[a("Use the node based "),t("a",{href:"https://unity.com/features/shader-graph",target:"_blank",rel:"noopener noreferrer"},"ShaderGraph"),a(" to create shaders for the web. ShaderGraph makes it easy for artists to keep creating without having to worry about syntax.")],-1)),t("p",null,[e[16]||(e[16]=a("Read more about ")),r(n,{to:"/export.html#physically-based-materials-pbr"},{default:s(()=>e[14]||(e[14]=[a("PBR Materials")])),_:1}),e[17]||(e[17]=a(" • ")),r(n,{to:"/export.html#custom-shaders"},{default:s(()=>e[15]||(e[15]=[a("Custom Shaders")])),_:1})]),e[65]||(e[65]=t("h2",{id:"crossplatform-vr-ar-mobile-desktop",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#crossplatform-vr-ar-mobile-desktop"},[t("span",null,"Crossplatform: VR, AR, Mobile, Desktop")])],-1)),t("p",null,[e[19]||(e[19]=a("Needle Engine runs everywhere web technology does: run the same application on desktop, mobile, AR or VR. We build Needle Engine ")),r(n,{to:"/xr.html"},{default:s(()=>e[18]||(e[18]=[a("with XR in mind")])),_:1}),e[20]||(e[20]=a(" and consider this as and integral part of responsive webdesign!"))]),t("p",null,[e[22]||(e[22]=a("Use ")),r(n,{to:"/everywhere-actions.html"},{default:s(()=>e[21]||(e[21]=[a("Everywhere Actions")])),_:1}),e[23]||(e[23]=a(" for ")),e[24]||(e[24]=t("strong",null,"Interactive AR on both Android and iOS",-1)),e[25]||(e[25]=a("."))]),e[66]||(e[66]=d('<h2 id="lightmaps" tabindex="-1"><a class="header-anchor" href="#lightmaps"><span>Lightmaps</span></a></h2><p><img src="https://user-images.githubusercontent.com/5083203/186163693-093c7ae2-96eb-4d75-b98f-bf19f78032ff.gif" alt="lightmaps"></p><p>Lightmaps can be baked in Unity or Blender to easily add beautiful static light to your 3d content. Lightbaking for the web was never as easy. Just mark objects that you want to lightmap as static in Unity, add one or many lights to your scene (or use emissive materials) and click bake. Needle Engine will export your lightmaps per scene and automatically load and display them just as you see it in the Editor!</p><blockquote><p><strong>Note</strong>: There is no technical limitation on which lightmapper to use, as long as they end up in Unity&#39;s lightmapping data structures. Third party lightmappers such as <a href="https://assetstore.unity.com/packages/tools/level-design/bakery-gpu-lightmapper-122218" target="_blank" rel="noopener noreferrer">Bakery</a> thus are also supported.</p></blockquote><ul><li>Read more about <a href="https://fwd.needle.tools/needle-engine/docs/lightmaps" target="_blank" rel="noopener noreferrer">Exporting Lightmaps</a></li></ul><h2 id="multiplayer-and-networking" tabindex="-1"><a class="header-anchor" href="#multiplayer-and-networking"><span>Multiplayer and Networking</span></a></h2><p>Networking is built into the core runtime. Needle Engine deployments to Glitch come with a tiny server that allows you to deploy a multiplayer 3D environment in seconds. The built-in networked components make it easy to get started, and you can create your own synchronized components. Synchronizing variables and state is super easy!</p><ul><li>Read more about <a href="https://fwd.needle.tools/needle-engine/docs/networking" target="_blank" rel="noopener noreferrer">Networking</a> • <a href="https://fwd.needle.tools/needle-engine/docs/scripting" target="_blank" rel="noopener noreferrer">Scripting</a></li></ul><h2 id="animations-and-sequencing" tabindex="-1"><a class="header-anchor" href="#animations-and-sequencing"><span>Animations and Sequencing</span></a></h2><p>Needle Engine brings powerful animations, state control and sequencing to the web — from just playing a single animation to orchestrating and blending complex animations and character controllers. The Exporter can translate Unity components like Animator and Timeline into a web-ready format.<br> We even added this functionality to our Blender addon so you can craft compatible animation state machines and export nla tracks as timelines to the web from within Blender too.</p>',10)),t("ul",null,[t("li",null,[e[27]||(e[27]=a("Read more about ")),r(n,{to:"/component-reference.html#animation"},{default:s(()=>e[26]||(e[26]=[a("Animation Components")])),_:1})])]),e[67]||(e[67]=d('<h3 id="animator" tabindex="-1"><a class="header-anchor" href="#animator"><span>Animator</span></a></h3><img src="https://user-images.githubusercontent.com/5083203/186011302-176524b3-e8e5-4e6e-9b77-7faf3561bb15.png"><p>The <a href="https://docs.unity3d.com/Manual/class-AnimatorController.html" target="_blank" rel="noopener noreferrer">Animator and AnimatorController</a> components in Unity let you setup animations and define conditions for when and how to blend between them. We support exporting state machines, StateMachineBehaviours, transitions and layers. StateMachineBehaviours are also supported with <code>OnStateEnter</code>, <code>OnStateUpdate</code> and <code>OnStateExit</code> events.</p><blockquote><p><strong>Note</strong>: Sub-states and Blend Trees are not supported.</p></blockquote><h3 id="timeline" tabindex="-1"><a class="header-anchor" href="#timeline"><span>Timeline</span></a></h3><p><img src="https://user-images.githubusercontent.com/5083203/186037829-ee99340d-b19c-484d-b551-94797519c9d9.png" alt="2022-08-23-013517_Scene"></p><p>We&#39;re also translating <a href="https://unity.com/features/timeline" target="_blank" rel="noopener noreferrer">Unity&#39;s Timeline</a> setup and tracks into a web-ready format.<br> Supported tracks include: AnimationTrack, AudioTrack, ActivationTrack, ControlTrack, SignalTrack.</p><blockquote><p><strong>Note</strong>: Sub-Timelines are currently not supported.</p></blockquote><blockquote><p><strong>Note</strong>: It&#39;s possible to <a href="https://github.com/needle-tools/needle-engine-modules/tree/main/package/TimelineHtml" target="_blank" rel="noopener noreferrer">export custom timeline tracks</a>.</p></blockquote>',9)),t("ul",null,[t("li",null,[e[29]||(e[29]=a("Read more about ")),r(n,{to:"/component-reference.html#animation"},{default:s(()=>e[28]||(e[28]=[a("Animation Components")])),_:1})])]),e[68]||(e[68]=t("h2",{id:"physics",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#physics"},[t("span",null,"Physics")])],-1)),e[69]||(e[69]=t("p",null,"Use Rigidbodies, Mesh Colliders, Box Colliders and SphereColliders to add some juicy physics to your world.",-1)),t("ul",null,[t("li",null,[e[31]||(e[31]=a("Read more about ")),r(n,{to:"/component-reference.html#physics"},{default:s(()=>e[30]||(e[30]=[a("Physics Components")])),_:1})])]),r(o,{src:"https://engine.needle.tools/samples-uploads/physics-animation/"}),e[70]||(e[70]=t("h2",{id:"ui",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#ui"},[t("span",null,"UI")])],-1)),e[71]||(e[71]=t("p",null,"Building UI using Unity's UI canvas system is in development. Features currently include exporting Text (including fonts), Images, Buttons.",-1)),t("p",null,[e[33]||(e[33]=a("See the ")),r(n,{to:"/component-reference.html#ui"},{default:s(()=>e[32]||(e[32]=[a("ui component reference")])),_:1}),e[34]||(e[34]=a(" for supported component."))]),r(o,{src:"https://engine.needle.tools/samples-uploads/screenspace-ui"}),e[72]||(e[72]=t("h2",{id:"particles",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#particles"},[t("span",null,"Particles")])],-1)),e[73]||(e[73]=t("p",null,[a("Export of Unity ParticleSystem (Shuriken) is in development. Features currently include world/local space simulation, box and sphere emitter shapes, emission over time as well as burst emission, velocity- and color over time, emission by velocity, texturesheet animation, basic trails."),t("br"),a(" See a "),t("a",{href:"https://engine.needle.tools/samples/particles",target:"_blank",rel:"noopener noreferrer"},"live sample"),a(" of supported features below:")],-1)),r(o,{src:"https://engine.needle.tools/samples-uploads/particles/"}),e[74]||(e[74]=t("h2",{id:"postprocessing",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#postprocessing"},[t("span",null,"PostProcessing")])],-1)),t("p",null,[e[36]||(e[36]=a("Builtin effects include Bloom, Screenspace Ambient Occlusion, Depth of Field, Color Correction. You can also create your own custom effects. See ")),r(n,{to:"/component-reference.html#postprocessing"},{default:s(()=>e[35]||(e[35]=[a("the component reference")])),_:1}),e[37]||(e[37]=a(" for a complete list."))]),r(o,{src:"https://engine.needle.tools/samples-uploads/postprocessing/"}),e[75]||(e[75]=t("h2",{id:"editor-integrations",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#editor-integrations"},[t("span",null,"Editor Integrations")])],-1)),e[76]||(e[76]=t("p",null,[a("Needle Engine comes with powerful integrations into the Unity Editor and Blender."),t("br"),a(" It allows you to setup and export complex scenes in a visual way providing easy and flexible collaboration between artists and developers.")],-1)),e[77]||(e[77]=t("h2",{id:"scripting",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#scripting"},[t("span",null,"Scripting")])],-1)),t("p",null,[e[39]||(e[39]=a("Needle Engine uses as ")),r(n,{to:"/scripting.html#component-architecture"},{default:s(()=>e[38]||(e[38]=[a("component based workflow")])),_:1}),e[40]||(e[40]=a(". Create custom scripts in typescript or javascript. Use our ")),e[41]||(e[41]=t("a",{href:"https://fwd.needle.tools/needle-engine/docs/npmdef",target:"_blank",rel:"noopener noreferrer"},"modular npm-based package workflow",-1)),e[42]||(e[42]=a(" integrated into Unity. A ")),e[43]||(e[43]=t("a",{href:"https://fwd.needle.tools/needle-engine/docs/component-compiler",target:"_blank",rel:"noopener noreferrer"},"typescript to C# component compiler",-1)),e[44]||(e[44]=a(" produces Unity components magically on the fly."))]),e[78]||(e[78]=t("ul",null,[t("li",null,[a("Read more about "),t("a",{href:"scripting"},"Scripting Reference"),a(" • "),t("a",{href:"https://fwd.needle.tools/needle-engine/docs/npmdef",target:"_blank",rel:"noopener noreferrer"},"Npm Definition Files")])],-1)),e[79]||(e[79]=t("h2",{id:"and-there-is-more",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#and-there-is-more"},[t("span",null,"And there is more")])],-1)),t("ul",null,[e[48]||(e[48]=t("li",null,"PostProcessing → Bloom, Screenspace Ambient Occlusion, Depth of Field, Color Correction...",-1)),e[49]||(e[49]=t("li",null,"EditorSync → Live synchronize editing in Unity to the running three.js application for local development",-1)),t("li",null,[e[46]||(e[46]=a("Interactive AR on iOS and Android → Use our ")),r(n,{to:"/everywhere-actions.html"},{default:s(()=>e[45]||(e[45]=[a("Everywhere Actions")])),_:1}),e[47]||(e[47]=a(" feature set or build your own"))])]),e[80]||(e[80]=t("hr",null,null,-1)),e[81]||(e[81]=t("h1",{id:"where-to-go-next",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-go-next"},[t("span",null,"Where to go next")])],-1)),t("p",null,[e[51]||(e[51]=a("See our ")),r(n,{to:"/getting-started/"},{default:s(()=>e[50]||(e[50]=[a("Getting Started Guide")])),_:1}),e[52]||(e[52]=a(" to learn about how to download and set up Needle Engine.")),e[53]||(e[53]=t("br",null,null,-1)),e[54]||(e[54]=a(" Learn about ")),e[55]||(e[55]=t("a",{href:"vision"},"our vision",-1)),e[56]||(e[56]=a(" or dive deeper into some of the ")),e[57]||(e[57]=t("a",{href:"technical-overview"},"technical background and glTF",-1)),e[58]||(e[58]=a(" powering it all."))])])}const y=m(h,[["render",b]]),w=JSON.parse(`{"path":"/features-overview.html","title":"Feature Overview","lang":"en-US","frontmatter":{"head":[["meta",{"name":"og:image","content":"https://engine.needle.tools/docs/.preview/features overview.png"}],["meta",{"name":"og:description","content":"Needle Engine is a web-based runtime for 3D apps. It runs on your machine for development, and can be deployed anywhere. It is flexible, extensible, and collaboration and XR come naturally. Needle Exporter for Unity bridges the Unity Editor and the web runtime. It helps you to export your assets, animations, lightmaps and so on to the web. It is built around the glTF standard for 3D assets."}]],"description":"Needle Engine is a web-based runtime for 3D apps. It runs on your machine for development, and can be deployed anywhere. It is flexible, extensible, and collaboration and XR come naturally. Needle Exporter for Unity bridges the Unity Editor and the web runtime. It helps you to export your assets, animations, lightmaps and so on to the web. It is built around the glTF standard for 3D assets."},"headers":[{"level":2,"title":"Shaders and Materials","slug":"shaders-and-materials","link":"#shaders-and-materials","children":[]},{"level":2,"title":"Crossplatform: VR, AR, Mobile, Desktop","slug":"crossplatform-vr-ar-mobile-desktop","link":"#crossplatform-vr-ar-mobile-desktop","children":[]},{"level":2,"title":"Lightmaps","slug":"lightmaps","link":"#lightmaps","children":[]},{"level":2,"title":"Multiplayer and Networking","slug":"multiplayer-and-networking","link":"#multiplayer-and-networking","children":[]},{"level":2,"title":"Animations and Sequencing","slug":"animations-and-sequencing","link":"#animations-and-sequencing","children":[{"level":3,"title":"Animator","slug":"animator","link":"#animator","children":[]},{"level":3,"title":"Timeline","slug":"timeline","link":"#timeline","children":[]}]},{"level":2,"title":"Physics","slug":"physics","link":"#physics","children":[]},{"level":2,"title":"UI","slug":"ui","link":"#ui","children":[]},{"level":2,"title":"Particles","slug":"particles","link":"#particles","children":[]},{"level":2,"title":"PostProcessing","slug":"postprocessing","link":"#postprocessing","children":[]},{"level":2,"title":"Editor Integrations","slug":"editor-integrations","link":"#editor-integrations","children":[]},{"level":2,"title":"Scripting","slug":"scripting","link":"#scripting","children":[]},{"level":2,"title":"And there is more","slug":"and-there-is-more","link":"#and-there-is-more","children":[]}],"git":{"updatedTime":1738682223000,"contributors":[{"name":"Marcel Wiessler","username":"","email":"marwie@users.noreply.github.com","commits":28},{"name":"hybridherbst","username":"hybridherbst","email":"felix.herbst@gmail.com","commits":8,"url":"https://github.com/hybridherbst"},{"name":"Felix Herbst","username":"","email":"herbst@prefrontalcortex.de","commits":1},{"name":"krisrok","username":"krisrok","email":"3404365+krisrok@users.noreply.github.com","commits":1,"url":"https://github.com/krisrok"},{"name":"Krystof","username":"Krystof","email":"kipash612@gmail.com","commits":1,"url":"https://github.com/Krystof"}],"changelog":[{"hash":"c15843f607b5ae25f95038f10060834282cb078a","time":1738682223000,"email":"felix.herbst@gmail.com","author":"hybridherbst","message":"fix some link issues, internal links should have .md extension"},{"hash":"433ae7c3df91f86d859b2bf248a9d05aa361ea9b","time":1727125836000,"email":"felix.herbst@gmail.com","author":"hybridherbst","message":"adding index pages for unity, blender, three"},{"hash":"d1bb8a7520be74bd36c9a6e315b344597dbd07ea","time":1725399379000,"email":"felix.herbst@gmail.com","author":"hybridherbst","message":"start reordering header menu"},{"hash":"777836d88cccad41a890bca296be5ede16fc809d","time":1707764568000,"email":"kipash612@gmail.com","author":"Krystof","message":"fix sample embeds' url"},{"hash":"17a527f1971f00b02bff7dfbe25a4769c1f4204a","time":1691834989000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"add some postprocessing documentation"},{"hash":"d19671fc31112f8467477f71d0a4b4d2942544d1","time":1689673780000,"email":"3404365+krisrok@users.noreply.github.com","author":"krisrok","message":"Fix swapped links"},{"hash":"c3177bcd671fc87fb7645b220b2e6cd4e92201e0","time":1687627983000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"MeshColliders are supported"},{"hash":"314de15c50cf53f148b37f4e9ee096ef717cc36a","time":1687627948000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"features: screenspace UI sample + use animation physics"},{"hash":"3dd44ed9d7c667cb552c06f69608b57ab5e06a1f","time":1687627884000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"update feature text UI"},{"hash":"ffac7ddb3d34170cbfa3b40a561e4beabdfb6b9a","time":1687627846000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"update index and feature overview"},{"hash":"335c49491215f9f41d68a966578a4696a22a89ff","time":1684678095000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"Add features, update export, update everywhere actions"},{"hash":"db8176ef3590fdd3c0f348935065dd8a1f9ebfe3","time":1669763662000,"email":"herbst@prefrontalcortex.de","author":"Felix Herbst","message":"minor adjustments for text etc"},{"hash":"2de797ff5418e44d22833ce1c50ab54e2b267048","time":1668108953000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"Particles: add a bit more text"},{"hash":"5090e17f5df0a165debf5aad1c79355c427f023c","time":1668107946000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"Add particles and character controller to samples and overview"},{"hash":"c385c53b7ed16ef2704795562efe24ceaebf7e84","time":1666630994000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"update embeds with local urls"},{"hash":"faab8f506b6231e57d842a852231c21b11aa55d9","time":1666542505000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"copyright + update scripting and remove external link icons"},{"hash":"d452f6c48b81526e8f1a1607a63c5a232b60865e","time":1666540087000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"update"},{"hash":"8acc2c9ade769201ec16be04bdcc407ebd78003e","time":1666455105000,"email":"marcel@gaisterhand.de","author":"Marcel Wiessler","message":"testimonial styling and show physics sample in feature overview"},{"hash":"736cfcc244c541518dcec5530444ed2e52035cc9","time":1661274231000,"email":"felix.herbst@gmail.com","author":"hybridherbst","message":"Update features-overview.md"},{"hash":"9a378781e03bfc25a6ffad79b9b175923e83328a","time":1661259461000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update features-overview.md"},{"hash":"7a5b932be98ce586eedc00cb58ef34278a95e224","time":1661211424000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update features-overview.md"},{"hash":"905aeee792257b574a5487b7215cc5fc49af83fe","time":1661210592000,"email":"felix.herbst@gmail.com","author":"hybridherbst","message":"Update features-overview.md"},{"hash":"50b39aaf9ee19aadf42fe7083647cdcbdddf9f4b","time":1661208116000,"email":"felix.herbst@gmail.com","author":"hybridherbst","message":"Update features-overview.md"},{"hash":"15c9dc15ee4b295da1a6b3e5a1f62c4586d99958","time":1661200731000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update features-overview.md"},{"hash":"719aa31baa9be370b63b97ca310b20f7f3cbe853","time":1661199593000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update features-overview.md"},{"hash":"c7589ba8b3eb30771e350053f887223ac9c7511b","time":1661199280000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update features-overview.md"},{"hash":"184427832af98dbc8f1e72adacad7b0572448044","time":1661198704000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update features-overview.md"},{"hash":"2965aa12b11f2a121f25fb92328bf5ea4d5665e3","time":1661180136000,"email":"felix.herbst@gmail.com","author":"hybridherbst","message":"Update features-overview.md"},{"hash":"09370cea0f68992c5072d6ff5fed3ff6af1cd08c","time":1661172509000,"email":"felix.herbst@gmail.com","author":"hybridherbst","message":"Update features-overview.md"},{"hash":"86aae6b7b1790c46b3cd02695f31d9f071b13e0b","time":1661106945000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update features-overview.md"},{"hash":"8d6d262c6d83003fce5a99eba4cc8964c20429a4","time":1661106912000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update features-overview.md"},{"hash":"ce6a16abb9042900e61805daaf2ad3a0f10ae098","time":1661106588000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update features-overview.md"},{"hash":"cbff7c5dd071d9c2d55dd3e0fe36a11ecd6f875b","time":1661106569000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update features-overview.md"},{"hash":"8fe7a7274a56edafe453779ba24988c9587c9813","time":1661106119000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update features-overview.md"},{"hash":"3e99467953a4ea266c6926231b12bf3b03f4d5a5","time":1661106067000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update features-overview.md"},{"hash":"8941c5830934dbfce3fb529fe26ce54fd0c66145","time":1660917846000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update features-overview.md"},{"hash":"526d956e7854476dfe9463562170c3a1e4f60abf","time":1660917467000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update features-overview.md"},{"hash":"15ff0d7547317fd3647be24902fe5defbbc7b0bb","time":1660916493000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Update features-overview.md"},{"hash":"e6ea3193510351b18ec27c853c05608474686f88","time":1660916350000,"email":"marwie@users.noreply.github.com","author":"Marcel Wiessler","message":"Create features-overview.md"}]},"filePathRelative":"features-overview.md"}`);export{y as comp,w as data};
