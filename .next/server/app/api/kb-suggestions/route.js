(()=>{var a={};a.id=429,a.ids=[429],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},41755:(a,b,c)=>{"use strict";c.r(b),c.d(b,{handler:()=>E,patchFetch:()=>D,routeModule:()=>z,serverHooks:()=>C,workAsyncStorage:()=>A,workUnitAsyncStorage:()=>B});var d={};c.r(d),c.d(d,{GET:()=>y,POST:()=>x,dynamic:()=>v});var e=c(96559),f=c(48088),g=c(37719),h=c(26191),i=c(81289),j=c(261),k=c(92603),l=c(39893),m=c(14823),n=c(47220),o=c(66946),p=c(47912),q=c(99786),r=c(46143),s=c(86439),t=c(43365),u=c(32190);let v="force-static",w=[{id:"KB-001",title:"Email Server Troubleshooting Guide",content:`
      Complete guide for diagnosing and resolving email server issues:
      
      1. Check server status and connectivity
      2. Verify DNS records (MX, A, CNAME)
      3. Test SMTP/IMAP/POP3 ports
      4. Review server logs for errors
      5. Check disk space and memory usage
      6. Verify SSL certificates
      7. Test email flow with telnet
      8. Review anti-spam and firewall settings
      
      Common solutions:
      - Restart email services
      - Clear mail queues
      - Update SSL certificates
      - Check authentication settings
    `,category:"Email",tags:["email","server","troubleshooting","exchange","smtp","imap","connectivity"],lastUpdated:new Date("2025-01-20")},{id:"KB-002",title:"VPN Configuration and Common Issues",content:`
      Comprehensive VPN troubleshooting guide:
      
      1. Verify client configuration
      2. Check network connectivity
      3. Test authentication credentials
      4. Review firewall rules
      5. Check certificate validity
      6. Verify routing tables
      7. Test DNS resolution
      8. Review bandwidth limitations
      
      Common fixes:
      - Reset network adapters
      - Update VPN client software
      - Reconfigure firewall exceptions
      - Renew certificates
      - Clear DNS cache
    `,category:"Network",tags:["vpn","network","connectivity","remote","authentication","firewall"],lastUpdated:new Date("2025-01-15")},{id:"KB-003",title:"Email Authentication Problems",content:`
      Resolving email authentication issues:
      
      1. Check user credentials
      2. Verify account permissions
      3. Test with different email clients
      4. Review multi-factor authentication
      5. Check for account lockouts
      6. Verify domain authentication
      7. Test LDAP/AD connectivity
      8. Review OAuth settings
      
      Solutions:
      - Reset user passwords
      - Clear credential cache
      - Update authentication protocols
      - Configure app passwords
      - Review security policies
    `,category:"Email",tags:["email","authentication","outlook","credentials","oauth","ldap"],lastUpdated:new Date("2025-01-10")},{id:"KB-004",title:"Network Connectivity Issues",content:`
      Network troubleshooting methodology:
      
      1. Test basic connectivity (ping)
      2. Check physical connections
      3. Verify IP configuration
      4. Test DNS resolution
      5. Check routing tables
      6. Review switch/router logs
      7. Test different protocols
      8. Monitor bandwidth usage
      
      Common fixes:
      - Restart network equipment
      - Update network drivers
      - Configure static IP
      - Flush DNS cache
      - Reset TCP/IP stack
    `,category:"Network",tags:["network","connectivity","ping","dns","routing","switch","router"],lastUpdated:new Date("2025-01-12")},{id:"KB-005",title:"Application Performance Issues",content:`
      Application performance troubleshooting:
      
      1. Monitor CPU and memory usage
      2. Check database performance
      3. Review application logs
      4. Test network latency
      5. Analyze disk I/O
      6. Check for memory leaks
      7. Review configuration settings
      8. Test under different loads
      
      Optimization techniques:
      - Update application versions
      - Optimize database queries
      - Increase memory allocation
      - Configure caching
      - Load balancing
    `,category:"Application",tags:["performance","application","cpu","memory","database","optimization"],lastUpdated:new Date("2025-01-08")}];async function x(a){try{let{ticketTitle:b,ticketDescription:c,category:d}=await a.json();if(!b||!c)return u.NextResponse.json({error:"Missing required fields"},{status:400});let e=`${b} ${c} ${d||""}`,f=w.map(a=>({...a,relevanceScore:function(a,b){let c=a.toLowerCase().split(/\s+/),d=(b.title+" "+b.content+" "+b.tags.join(" ")).toLowerCase(),e=0,f=0;c.forEach(a=>{a.length>2&&d.includes(a)&&(f++,b.title.toLowerCase().includes(a)?e+=.3:b.tags.some(b=>b.toLowerCase().includes(a))?e+=.2:e+=.1)});let g=f/Math.max(c.length,1);return Math.min(e=(e+.5*g)/2,1)}(e,a)})).filter(a=>a.relevanceScore>.1).sort((a,b)=>b.relevanceScore-a.relevanceScore).slice(0,5),g="General Support";if(f.length>0)switch(f[0].category){case"Email":g="Infrastructure";break;case"Network":g="Network";break;case"Application":g="Application Support";break;default:g="General Support"}return u.NextResponse.json({success:!0,suggestions:f,recommendedTeam:g,confidence:f.length>0?f[0].relevanceScore:0})}catch(a){return console.error("Error in KB suggestion API:",a),u.NextResponse.json({error:"Internal server error"},{status:500})}}async function y(){return u.NextResponse.json({message:"KB Suggestion API",endpoints:{POST:"Submit ticket data to get KB suggestions"},samplePayload:{ticketTitle:"Email server not responding",ticketDescription:"Users unable to access email. Server appears to be down.",category:"Email"}})}let z=new e.AppRouteRouteModule({definition:{kind:f.RouteKind.APP_ROUTE,page:"/api/kb-suggestions/route",pathname:"/api/kb-suggestions",filename:"route",bundlePath:"app/api/kb-suggestions/route"},distDir:".next",projectDir:"",resolvedPagePath:"C:\\codevibe\\Incident Managment tool kb assistance\\src\\app\\api\\kb-suggestions\\route.ts",nextConfigOutput:"export",userland:d}),{workAsyncStorage:A,workUnitAsyncStorage:B,serverHooks:C}=z;function D(){return(0,g.patchFetch)({workAsyncStorage:A,workUnitAsyncStorage:B})}async function E(a,b,c){var d;let e="/api/kb-suggestions/route";"/index"===e&&(e="/");let g=await z.prepare(a,b,{srcPage:e,multiZoneDraftMode:"false"});if(!g)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:u,params:v,nextConfig:w,isDraftMode:x,prerenderManifest:y,routerServerContext:A,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,resolvedPathname:D}=g,E=(0,j.normalizeAppPath)(e),F=!!(y.dynamicRoutes[E]||y.routes[D]);if(F&&!x){let a=!!y.routes[D],b=y.dynamicRoutes[E];if(b&&!1===b.fallback&&!a)throw new s.NoFallbackError}let G=null;!F||z.isDev||x||(G="/index"===(G=D)?"/":G);let H=!0===z.isDev||!F,I=F&&!H,J=a.method||"GET",K=(0,i.getTracer)(),L=K.getActiveScopeSpan(),M={params:v,prerenderManifest:y,renderOpts:{experimental:{dynamicIO:!!w.experimental.dynamicIO,authInterrupts:!!w.experimental.authInterrupts},supportsDynamicResponse:H,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:null==(d=w.experimental)?void 0:d.cacheLife,isRevalidate:I,waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:void 0,onInstrumentationRequestError:(b,c,d)=>z.onRequestError(a,b,d,A)},sharedContext:{buildId:u}},N=new k.NodeNextRequest(a),O=new k.NodeNextResponse(b),P=l.NextRequestAdapter.fromNodeNextRequest(N,(0,l.signalFromNodeResponse)(b));try{let d=async c=>z.handle(P,M).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=K.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${J} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${J} ${a.url}`)}),g=async g=>{var i,j;let k=async({previousCacheEntry:f})=>{try{if(!(0,h.getRequestMeta)(a,"minimalMode")&&B&&C&&!f)return b.statusCode=404,b.setHeader("x-nextjs-cache","REVALIDATED"),b.end("This page could not be found"),null;let e=await d(g);a.fetchMetrics=M.renderOpts.fetchMetrics;let i=M.renderOpts.pendingWaitUntil;i&&c.waitUntil&&(c.waitUntil(i),i=void 0);let j=M.renderOpts.collectedTags;if(!F)return await (0,o.I)(N,O,e,M.renderOpts.pendingWaitUntil),null;{let a=await e.blob(),b=(0,p.toNodeOutgoingHttpHeaders)(e.headers);j&&(b[r.NEXT_CACHE_TAGS_HEADER]=j),!b["content-type"]&&a.type&&(b["content-type"]=a.type);let c=void 0!==M.renderOpts.collectedRevalidate&&!(M.renderOpts.collectedRevalidate>=r.INFINITE_CACHE)&&M.renderOpts.collectedRevalidate,d=void 0===M.renderOpts.collectedExpire||M.renderOpts.collectedExpire>=r.INFINITE_CACHE?void 0:M.renderOpts.collectedExpire;return{value:{kind:t.CachedRouteKind.APP_ROUTE,status:e.status,body:Buffer.from(await a.arrayBuffer()),headers:b},cacheControl:{revalidate:c,expire:d}}}}catch(b){throw(null==f?void 0:f.isStale)&&await z.onRequestError(a,b,{routerKind:"App Router",routePath:e,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})},A),b}},l=await z.handleResponse({req:a,nextConfig:w,cacheKey:G,routeKind:f.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:y,isRoutePPREnabled:!1,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,responseGenerator:k,waitUntil:c.waitUntil});if(!F)return null;if((null==l||null==(i=l.value)?void 0:i.kind)!==t.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==l||null==(j=l.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});(0,h.getRequestMeta)(a,"minimalMode")||b.setHeader("x-nextjs-cache",B?"REVALIDATED":l.isMiss?"MISS":l.isStale?"STALE":"HIT"),x&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,p.fromNodeOutgoingHttpHeaders)(l.value.headers);return(0,h.getRequestMeta)(a,"minimalMode")&&F||m.delete(r.NEXT_CACHE_TAGS_HEADER),!l.cacheControl||b.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,q.getCacheControlHeader)(l.cacheControl)),await (0,o.I)(N,O,new Response(l.value.body,{headers:m,status:l.value.status||200})),null};L?await g(L):await K.withPropagatedContext(a.headers,()=>K.trace(m.BaseServerSpan.handleRequest,{spanName:`${J} ${a.url}`,kind:i.SpanKind.SERVER,attributes:{"http.method":J,"http.target":a.url}},g))}catch(b){if(L||b instanceof s.NoFallbackError||await z.onRequestError(a,b,{routerKind:"App Router",routePath:E,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})}),F)throw b;return await (0,o.I)(N,O,new Response(null,{status:500})),null}}},44870:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},96487:()=>{}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[96],()=>b(b.s=41755));module.exports=c})();