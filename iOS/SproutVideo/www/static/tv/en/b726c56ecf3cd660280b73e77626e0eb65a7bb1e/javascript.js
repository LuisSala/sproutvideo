Tv=SC.Application.create({NAMESPACE:"Tv",VERSION:"0.1.0",store:SC.Store.create().from(SC.Record.fixtures)});
if(typeof CHANCE_SLICES==="undefined"){var CHANCE_SLICES=[]}CHANCE_SLICES=CHANCE_SLICES.concat([]);
Tv.scheduleController=SC.ArrayController.create({});Tv.videosController=SC.ArrayController.create({});
Tv.Schedule=SC.Record.extend({time:SC.Record.attr(String),title:SC.Record.attr(String),blurb:SC.Record.attr(String),url:SC.Record.attr(String)});
sc_require("models/schedule");Tv.Schedule.FIXTURES=[{guid:1,time:"8/7c",title:"BUDDY COPS",blurb:"ALL NEW",url:"http://www.example.com"},{guid:2,time:"9/8c",title:"THESPIANS",blurb:"",url:"http://www.example.com"},{guid:3,time:"10/9c",title:"EMO VAMPIRES",blurb:"ALL NEW",url:"http://www.example.com"},{guid:4,time:"11/10c",title:"SOME REALITY!",blurb:"ALL NEW",url:"http://www.example.com"},{guid:5,time:"12/11c",title:"LATE AT NITE",blurb:"ALL NEW",url:"http://www.example.com"},];
Tv.VideoRecord=SC.Record.extend({title:SC.Record.attr(String),url:SC.Record.attr(String),previewUrl:SC.Record.attr(String),description:SC.Record.attr(String),bookmarked:SC.Record.attr(Boolean)});
sc_require("models/video_record");Tv.VideoRecord.FIXTURES=[{guid:1,title:"Superman: Eleventh Hour (1942)",url:"http://www.archive.org/download/superman_eleventh_hour/superman_eleventh_hour_512kb.mp4",previewUrl:"http://www.archive.org/download/superman_eleventh_hour/superman_eleventh_hour.thumbs/superman_eleventh_hour_000030.jpg",description:"Superman is responsible for several acts of sabotage at the Yokohama Navy Yard in Japan. Lois Lane is held hostage but Superman saves the day. Animation by William Bowsky and William Henning. Music by Sammy Timberg. Produced in 1942.",bookmarked:NO},{guid:2,title:"Superman: Electric Earthquake (1942)",url:"http://www.archive.org/download/superman_electric_earthquake/superman_electric_earthquake_512kb.mp4",previewUrl:"http://www.archive.org/download/superman_electric_earthquake/superman_electric_earthquake.thumbs/superman_electric_earthquake_000030.jpg",description:"A mad scientist attempts to blow up Manhattan. Lois Lane investigates and Superman saves the day. Animation by Steve Muffati and Arnold Gillespie, story by Seymour Kneitel and Isadore Sparber, music by Sammy Timberg. Produced in 1942.",bookmarked:NO},{guid:3,title:"Superman: The Mechanical Monsters (1941)",url:"http://www.archive.org/download/superman_the_mechanical_monsters/superman_the_mechanical_monsters_512kb.mp4",previewUrl:"http://www.archive.org/download/superman_the_mechanical_monsters/superman_the_mechanical_monsters.thumbs/superman_the_mechanical_monsters_000030.jpg",description:"A mad scientist unleashes robots to rob banks and loot museums. Superman saves the day. Animation by Steve Muffati and George Germanetti. Music by Sammy Timberg. Produced in 1941.",bookmarked:NO},{guid:4,title:"The Mummy Strikes (1943)",url:"http://www.archive.org/download/mummy_strikes/mummy_strikes_512kb.mp4",previewUrl:"http://www.archive.org/download/mummy_strikes/mummy_strikes.thumbs/mummy_strikes_000030.jpg",description:"While investigating an egyptologist's mysterious death, Superman must battle dangerous mummies.",bookmarked:NO},{guid:5,title:"The Arctic Giant (1942)",url:"http://www.archive.org/download/secret_agent/secret_agent_512kb.mp4",previewUrl:"http://www.archive.org/download/secret_agent/secret_agent.thumbs/secret_agent_000030.jpg",description:"Superman versus a thawed-out Tyrannosaurus.",bookmarked:NO},];
(function(){function g(o){console.log("$f.fireEvent",[].slice.call(o))}function k(q){if(!q||typeof q!="object"){return q
}var o=new q.constructor();for(var p in q){if(q.hasOwnProperty(p)){o[p]=k(q[p])}}return o
}function m(t,q){if(!t){return}var o,p=0,r=t.length;if(r===undefined){for(o in t){if(q.call(t[o],o,t[o])===false){break
}}}else{for(var s=t[0];p<r&&q.call(s,p,s)!==false;s=t[++p]){}}return t}function c(o){return document.getElementById(o)
}function i(q,p,o){if(typeof p!="object"){return q}if(q&&p){m(p,function(r,s){if(!o||typeof s!="function"){q[r]=s
}})}return q}function n(s){var q=s.indexOf(".");if(q!=-1){var p=s.slice(0,q)||"*";
var o=s.slice(q+1,s.length);var r=[];m(document.getElementsByTagName(p),function(){if(this.className&&this.className.indexOf(o)!=-1){r.push(this)
}});return r}}function f(o){o=o||window.event;if(o.preventDefault){o.stopPropagation();
o.preventDefault()}else{o.returnValue=false;o.cancelBubble=true}return false}function j(q,o,p){q[o]=q[o]||[];
q[o].push(p)}function e(){return"_"+(""+Math.random()).slice(2,10)}var h=function(t,r,s){var q=this,p={},u={};
q.index=r;if(typeof t=="string"){t={url:t}}i(this,t,true);m(("Begin*,Start,Pause*,Resume*,Seek*,Stop*,Finish*,LastSecond,Update,BufferFull,BufferEmpty,BufferStop").split(","),function(){var v="on"+this;
if(v.indexOf("*")!=-1){v=v.slice(0,v.length-1);var w="onBefore"+v.slice(2);q[w]=function(x){j(u,w,x);
return q}}q[v]=function(x){j(u,v,x);return q};if(r==-1){if(q[w]){s[w]=q[w]}if(q[v]){s[v]=q[v]
}}});i(this,{onCuepoint:function(x,w){if(arguments.length==1){p.embedded=[null,x];
return q}if(typeof x=="number"){x=[x]}var v=e();p[v]=[x,w];if(s.isLoaded()){s._api().fp_addCuepoints(x,r,v)
}return q},update:function(w){i(q,w);if(s.isLoaded()){s._api().fp_updateClip(w,r)
}var v=s.getConfig();var x=(r==-1)?v.clip:v.playlist[r];i(x,w,true)},_fireEvent:function(v,y,w,A){if(v=="onLoad"){m(p,function(B,C){if(C[0]){s._api().fp_addCuepoints(C[0],r,B)
}});return false}A=A||q;if(v=="onCuepoint"){var z=p[y];if(z){return z[1].call(s,A,w)
}}if(y&&"onBeforeBegin,onMetaData,onStart,onUpdate,onResume".indexOf(v)!=-1){i(A,y);
if(y.metaData){if(!A.duration){A.duration=y.metaData.duration}else{A.fullDuration=y.metaData.duration
}}}var x=true;m(u[v],function(){x=this.call(s,A,y,w)});return x}});if(t.onCuepoint){var o=t.onCuepoint;
q.onCuepoint.apply(q,typeof o=="function"?[o]:o);delete t.onCuepoint}m(t,function(v,w){if(typeof w=="function"){j(u,v,w);
delete t[v]}});if(r==-1){s.onCuepoint=this.onCuepoint}};var l=function(p,r,q,t){var o=this,s={},u=false;
if(t){i(s,t)}m(r,function(v,w){if(typeof w=="function"){s[v]=w;delete r[v]}});i(this,{animate:function(y,z,x){if(!y){return o
}if(typeof z=="function"){x=z;z=500}if(typeof y=="string"){var w=y;y={};y[w]=z;z=500
}if(x){var v=e();s[v]=x}if(z===undefined){z=500}r=q._api().fp_animate(p,y,z,v);return o
},css:function(w,x){if(x!==undefined){var v={};v[w]=x;w=v}r=q._api().fp_css(p,w);
i(o,r);return o},show:function(){this.display="block";q._api().fp_showPlugin(p);return o
},hide:function(){this.display="none";q._api().fp_hidePlugin(p);return o},toggle:function(){this.display=q._api().fp_togglePlugin(p);
return o},fadeTo:function(y,x,w){if(typeof x=="function"){w=x;x=500}if(w){var v=e();
s[v]=w}this.display=q._api().fp_fadeTo(p,y,x,v);this.opacity=y;return o},fadeIn:function(w,v){return o.fadeTo(1,w,v)
},fadeOut:function(w,v){return o.fadeTo(0,w,v)},getName:function(){return p},getPlayer:function(){return q
},_fireEvent:function(w,v,x){if(w=="onUpdate"){var z=q._api().fp_getPlugin(p);if(!z){return
}i(o,z);delete o.methods;if(!u){m(z.methods,function(){var B=""+this;o[B]=function(){var C=[].slice.call(arguments);
var D=q._api().fp_invoke(p,B,C);return D==="undefined"||D===undefined?o:D}});u=true
}}var A=s[w];if(A){var y=A.apply(o,v);if(w.slice(0,1)=="_"){delete s[w]}return y}return o
}})};function b(q,G,t){var w=this,v=null,D=false,u,s,F=[],y={},x={},E,r,p,C,o,A;i(w,{id:function(){return E
},isLoaded:function(){return(v!==null&&v.fp_play!==undefined&&!D)},getParent:function(){return q
},hide:function(H){if(H){q.style.height="0px"}if(w.isLoaded()){v.style.height="0px"
}return w},show:function(){q.style.height=A+"px";if(w.isLoaded()){v.style.height=o+"px"
}return w},isHidden:function(){return w.isLoaded()&&parseInt(v.style.height,10)===0
},load:function(J){if(!w.isLoaded()&&w._fireEvent("onBeforeLoad")!==false){var H=function(){u=q.innerHTML;
if(u&&!flashembed.isSupported(G.version)){q.innerHTML=""}if(J){J.cached=true;j(x,"onLoad",J)
}flashembed(q,G,{config:t})};var I=0;m(a,function(){this.unload(function(K){if(++I==a.length){H()
}})})}return w},unload:function(J){if(this.isFullscreen()&&/WebKit/i.test(navigator.userAgent)){if(J){J(false)
}return w}if(u.replace(/\s/g,"")!==""){if(w._fireEvent("onBeforeUnload")===false){if(J){J(false)
}return w}D=true;try{if(v){v.fp_close();w._fireEvent("onUnload")}}catch(H){}var I=function(){v=null;
q.innerHTML=u;D=false;if(J){J(true)}};setTimeout(I,50)}else{if(J){J(false)}}return w
},getClip:function(H){if(H===undefined){H=C}return F[H]},getCommonClip:function(){return s
},getPlaylist:function(){return F},getPlugin:function(H){var J=y[H];if(!J&&w.isLoaded()){var I=w._api().fp_getPlugin(H);
if(I){J=new l(H,I,w);y[H]=J}}return J},getScreen:function(){return w.getPlugin("screen")
},getControls:function(){return w.getPlugin("controls")._fireEvent("onUpdate")},getLogo:function(){try{return w.getPlugin("logo")._fireEvent("onUpdate")
}catch(H){}},getPlay:function(){return w.getPlugin("play")._fireEvent("onUpdate")
},getConfig:function(H){return H?k(t):t},getFlashParams:function(){return G},loadPlugin:function(K,J,M,L){if(typeof M=="function"){L=M;
M={}}var I=L?e():"_";w._api().fp_loadPlugin(K,J,M,I);var H={};H[I]=L;var N=new l(K,null,w,H);
y[K]=N;return N},getState:function(){return w.isLoaded()?v.fp_getState():-1},play:function(I,H){var J=function(){if(I!==undefined){w._api().fp_play(I,H)
}else{w._api().fp_play()}};if(w.isLoaded()){J()}else{if(D){setTimeout(function(){w.play(I,H)
},50)}else{w.load(function(){J()})}}return w},getVersion:function(){var I="flowplayer.js 3.2.6";
if(w.isLoaded()){var H=v.fp_getVersion();H.push(I);return H}return I},_api:function(){if(!w.isLoaded()){throw"Flowplayer "+w.id()+" not loaded when calling an API method"
}return v},setClip:function(H){w.setPlaylist([H]);return w},getIndex:function(){return p
},_swfHeight:function(){return v.clientHeight}});m(("Click*,Load*,Unload*,Keypress*,Volume*,Mute*,Unmute*,PlaylistReplace,ClipAdd,Fullscreen*,FullscreenExit,Error,MouseOver,MouseOut").split(","),function(){var H="on"+this;
if(H.indexOf("*")!=-1){H=H.slice(0,H.length-1);var I="onBefore"+H.slice(2);w[I]=function(J){j(x,I,J);
return w}}w[H]=function(J){j(x,H,J);return w}});m(("pause,resume,mute,unmute,stop,toggle,seek,getStatus,getVolume,setVolume,getTime,isPaused,isPlaying,startBuffering,stopBuffering,isFullscreen,toggleFullscreen,reset,close,setPlaylist,addClip,playFeed,setKeyboardShortcutsEnabled,isKeyboardShortcutsEnabled").split(","),function(){var H=this;
w[H]=function(J,I){if(!w.isLoaded()){return w}var K=null;if(J!==undefined&&I!==undefined){K=v["fp_"+H](J,I)
}else{K=(J===undefined)?v["fp_"+H]():v["fp_"+H](J)}return K==="undefined"||K===undefined?w:K
}});w._fireEvent=function(Q){if(typeof Q=="string"){Q=[Q]}var R=Q[0],O=Q[1],M=Q[2],L=Q[3],K=0;
if(t.debug){g(Q)}if(!w.isLoaded()&&R=="onLoad"&&O=="player"){v=v||c(r);o=w._swfHeight();
m(F,function(){this._fireEvent("onLoad")});m(y,function(S,T){T._fireEvent("onUpdate")
});s._fireEvent("onLoad")}if(R=="onLoad"&&O!="player"){return}if(R=="onError"){if(typeof O=="string"||(typeof O=="number"&&typeof M=="number")){O=M;
M=L}}if(R=="onContextMenu"){m(t.contextMenu[O],function(S,T){T.call(w)});return}if(R=="onPluginEvent"||R=="onBeforePluginEvent"){var H=O.name||O;
var I=y[H];if(I){I._fireEvent("onUpdate",O);return I._fireEvent(M,Q.slice(3))}return
}if(R=="onPlaylistReplace"){F=[];var N=0;m(O,function(){F.push(new h(this,N++,w))
})}if(R=="onClipAdd"){if(O.isInStream){return}O=new h(O,M,w);F.splice(M,0,O);for(K=M+1;
K<F.length;K++){F[K].index++}}var P=true;if(typeof O=="number"&&O<F.length){C=O;var J=F[O];
if(J){P=J._fireEvent(R,M,L)}if(!J||P!==false){P=s._fireEvent(R,M,L,J)}}m(x[R],function(){P=this.call(w,O,M);
if(this.cached){x[R].splice(K,1)}if(P===false){return false}K++});return P};function B(){if($f(q)){$f(q).getParent().innerHTML="";
p=$f(q).getIndex();a[p]=w}else{a.push(w);p=a.length-1}A=parseInt(q.style.height,10)||q.clientHeight;
E=q.id||"fp"+e();r=G.id||E+"_api";G.id=r;t.playerId=E;if(typeof t=="string"){t={clip:{url:t}}
}if(typeof t.clip=="string"){t.clip={url:t.clip}}t.clip=t.clip||{};if(q.getAttribute("href",2)&&!t.clip.url){t.clip.url=q.getAttribute("href",2)
}s=new h(t.clip,-1,w);t.playlist=t.playlist||[t.clip];var I=0;m(t.playlist,function(){var K=this;
if(typeof K=="object"&&K.length){K={url:""+K}}m(t.clip,function(L,M){if(M!==undefined&&K[L]===undefined&&typeof M!="function"){K[L]=M
}});t.playlist[I]=K;K=new h(K,I,w);F.push(K);I++});m(t,function(K,L){if(typeof L=="function"){if(s[K]){s[K](L)
}else{j(x,K,L)}delete t[K]}});m(t.plugins,function(K,L){if(L){y[K]=new l(K,L,w)}});
if(!t.plugins||t.plugins.controls===undefined){y.controls=new l("controls",null,w)
}y.canvas=new l("canvas",null,w);u=q.innerHTML;function J(L){var K=w.hasiPadSupport&&w.hasiPadSupport();
if(/iPad|iPhone|iPod/i.test(navigator.userAgent)&&!/.flv$/i.test(F[0].url)&&!K){return true
}if(!w.isLoaded()&&w._fireEvent("onBeforeClick")!==false){w.load()}return f(L)}function H(){if(u.replace(/\s/g,"")!==""){if(q.addEventListener){q.addEventListener("click",J,false)
}else{if(q.attachEvent){q.attachEvent("onclick",J)}}}else{if(q.addEventListener){q.addEventListener("click",f,false)
}w.load()}}setTimeout(H,0)}if(typeof q=="string"){var z=c(q);if(!z){throw"Flowplayer cannot access element: "+q
}q=z;B()}else{B()}}var a=[];function d(o){this.length=o.length;this.each=function(p){m(o,p)
};this.size=function(){return o.length}}window.flowplayer=window.$f=function(){var p=null;
var o=arguments[0];if(!arguments.length){m(a,function(){if(this.isLoaded()){p=this;
return false}});return p||a[0]}if(arguments.length==1){if(typeof o=="number"){return a[o]
}else{if(o=="*"){return new d(a)}m(a,function(){if(this.id()==o.id||this.id()==o||this.getParent()==o){p=this;
return false}});return p}}if(arguments.length>1){var t=arguments[1],q=(arguments.length==3)?arguments[2]:{};
if(typeof t=="string"){t={src:t}}t=i({bgcolor:"#000000",version:[9,0],expressInstall:"http://static.flowplayer.org/swf/expressinstall.swf",cachebusting:false},t);
if(typeof o=="string"){if(o.indexOf(".")!=-1){var s=[];m(n(o),function(){s.push(new b(this,k(t),k(q)))
});return new d(s)}else{var r=c(o);return new b(r!==null?r:o,t,q)}}else{if(o){return new b(o,t,q)
}}}return null};i(window.$f,{fireEvent:function(){var o=[].slice.call(arguments);
var q=$f(o[0]);return q?q._fireEvent(o.slice(1)):null},addPlugin:function(o,p){b.prototype[o]=p;
return $f},each:m,extend:i});if(typeof jQuery=="function"){jQuery.fn.flowplayer=function(q,p){if(!arguments.length||typeof arguments[0]=="number"){var o=[];
this.each(function(){var r=$f(this);if(r){o.push(r)}});return arguments.length?o[arguments[0]]:new d(o)
}return this.each(function(){$f(this,k(q),p?k(p):{})})}}})();(function(){var e=typeof jQuery=="function";
var i={width:"100%",height:"100%",allowfullscreen:true,allowscriptaccess:"always",quality:"high",version:null,onFail:null,expressInstall:null,w3c:false,cachebusting:false};
if(e){jQuery.tools=jQuery.tools||{};jQuery.tools.flashembed={version:"1.0.4",conf:i}
}function j(){if(c.done){return false}var l=document;if(l&&l.getElementsByTagName&&l.getElementById&&l.body){clearInterval(c.timer);
c.timer=null;for(var k=0;k<c.ready.length;k++){c.ready[k].call()}c.ready=null;c.done=true
}}var c=e?jQuery:function(k){if(c.done){return k()}if(c.timer){c.ready.push(k)}else{c.ready=[k];
c.timer=setInterval(j,13)}};function f(l,k){if(k){for(key in k){if(k.hasOwnProperty(key)){l[key]=k[key]
}}}return l}function g(k){switch(h(k)){case"string":k=k.replace(new RegExp('(["\\\\])',"g"),"\\$1");
k=k.replace(/^\s?(\d+)%/,"$1pct");return'"'+k+'"';case"array":return"["+b(k,function(n){return g(n)
}).join(",")+"]";case"function":return'"function()"';case"object":var l=[];for(var m in k){if(k.hasOwnProperty(m)){l.push('"'+m+'":'+g(k[m]))
}}return"{"+l.join(",")+"}"}return String(k).replace(/\s/g," ").replace(/\'/g,'"')
}function h(l){if(l===null||l===undefined){return false}var k=typeof l;return(k=="object"&&l.push)?"array":k
}if(window.attachEvent){window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};
__flash_savedUnloadHandler=function(){}})}function b(k,n){var m=[];for(var l in k){if(k.hasOwnProperty(l)){m[l]=n(k[l])
}}return m}function a(r,t){var q=f({},r);var s=document.all;var n='<object width="'+q.width+'" height="'+q.height+'"';
if(s&&!q.id){q.id="_"+(""+Math.random()).substring(9)}if(q.id){n+=' id="'+q.id+'"'
}if(q.cachebusting){q.src+=((q.src.indexOf("?")!=-1?"&":"?")+Math.random())}if(q.w3c||!s){n+=' data="'+q.src+'" type="application/x-shockwave-flash"'
}else{n+=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'}n+=">";if(q.w3c||s){n+='<param name="movie" value="'+q.src+'" />'
}q.width=q.height=q.id=q.w3c=q.src=null;for(var l in q){if(q[l]!==null){n+='<param name="'+l+'" value="'+q[l]+'" />'
}}var o="";if(t){for(var m in t){if(t[m]!==null){o+=m+"="+(typeof t[m]=="object"?g(t[m]):t[m])+"&"
}}o=o.substring(0,o.length-1);n+='<param name="flashvars" value=\''+o+"' />"}n+="</object>";
return n}function d(m,p,l){var k=flashembed.getVersion();f(this,{getContainer:function(){return m
},getConf:function(){return p},getVersion:function(){return k},getFlashvars:function(){return l
},getApi:function(){return m.firstChild},getHTML:function(){return a(p,l)}});var q=p.version;
var r=p.expressInstall;var o=!q||flashembed.isSupported(q);if(o){p.onFail=p.version=p.expressInstall=null;
m.innerHTML=a(p,l)}else{if(q&&r&&flashembed.isSupported([6,65])){f(p,{src:r});l={MMredirectURL:location.href,MMplayerType:"PlugIn",MMdoctitle:document.title};
m.innerHTML=a(p,l)}else{if(m.innerHTML.replace(/\s/g,"")!==""){}else{m.innerHTML="<h2>Flash version "+q+" or greater is required</h2><h3>"+(k[0]>0?"Your version is "+k:"You have no flash plugin installed")+"</h3>"+(m.tagName=="A"?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='http://www.adobe.com/go/getflashplayer'>here</a></p>");
if(m.tagName=="A"){m.onclick=function(){location.href="http://www.adobe.com/go/getflashplayer"
}}}}}if(!o&&p.onFail){var n=p.onFail.call(this);if(typeof n=="string"){m.innerHTML=n
}}if(document.all){window[p.id]=document.getElementById(p.id)}}window.flashembed=function(l,m,k){if(typeof l=="string"){var n=document.getElementById(l);
if(n){l=n}else{c(function(){flashembed(l,m,k)});return}}if(!l){return}if(typeof m=="string"){m={src:m}
}var o=f({},i);f(o,m);return new d(l,o,k)};f(window.flashembed,{getVersion:function(){var m=[0,0];
if(navigator.plugins&&typeof navigator.plugins["Shockwave Flash"]=="object"){var l=navigator.plugins["Shockwave Flash"].description;
if(typeof l!="undefined"){l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1");var n=parseInt(l.replace(/^(.*)\..*$/,"$1"),10);
var r=/r/.test(l)?parseInt(l.replace(/^.*r(.*)$/,"$1"),10):0;m=[n,r]}}else{if(window.ActiveXObject){try{var p=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
}catch(q){try{p=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");m=[6,0];p.AllowScriptAccess="always"
}catch(k){if(m[0]==6){return m}}try{p=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
}catch(o){}}if(typeof p=="object"){l=p.GetVariable("$version");if(typeof l!="undefined"){l=l.replace(/^\S+\s+(.*)$/,"$1").split(",");
m=[parseInt(l[0],10),parseInt(l[2],10)]}}}}return m},isSupported:function(k){var m=flashembed.getVersion();
var l=(m[0]>k[0])||(m[0]==k[0]&&m[1]>=k[1]);return l},domReady:c,asString:g,getHTML:a});
if(e){jQuery.fn.flashembed=function(l,k){var m=null;this.each(function(){m=flashembed(this,l,k)
});return l.api===false?this:m}}})();$f.addPlugin("ipad",function(t){var L=-1;var u=0;
var v=1;var J=2;var z=3;var F=4;var g=5;var f=this;var N=1;var M=false;var C=false;
var q=false;var o=0;var K=[];var c={accelerated:false,autoBuffering:false,autoPlay:true,baseUrl:null,bufferLength:3,connectionProvider:null,cuepointMultiplier:1000,cuepoints:[],controls:{},duration:0,extension:"",fadeInSpeed:1000,fadeOutSpeed:1000,image:false,linkUrl:null,linkWindow:"_self",live:false,metaData:{},originalUrl:null,position:0,playlist:[],provider:"http",scaling:"scale",seekableOnBegin:false,start:0,url:null,urlResolvers:[]};
var s=L;var m=L;var p=/iPad|iPhone|iPod/i.test(navigator.userAgent);var b=null;function j(R,Q,O){if(Q){for(key in Q){if(key){if(Q[key]&&typeof Q[key]=="function"&&!O){continue
}if(Q[key]&&typeof Q[key]=="object"&&Q[key].length==undefined){var P={};j(P,Q[key]);
R[key]=P}else{R[key]=Q[key]}}}}return R}var w={simulateiDevice:false,controlsSizeRatio:1.5,controls:true,debug:false,validExtensions:/mov|m4v|mp4|avi/gi};
j(w,t);function e(){if(w.debug){if(p){var O=[].splice.call(arguments,0).join(", ");
console.log.apply(console,[O])}else{console.log.apply(console,arguments)}}}function i(O){switch(O){case -1:return"UNLOADED";
case 0:return"LOADED";case 1:return"UNSTARTED";case 2:return"BUFFERING";case 3:return"PLAYING";
case 4:return"PAUSED";case 5:return"ENDED"}return"UNKOWN"}function D(O){var P=$f.fireEvent(f.id(),"onBefore"+O,o);
return P!==false}function H(O){O.stopPropagation();O.preventDefault();return false
}function G(P,O){if(s==L&&!O){return}m=s;s=P;y();if(P==z){l()}e(i(P))}function x(){b.fp_stop();
M=false;C=false;q=false;G(v);G(v)}var d=null;function l(){if(d){return}console.log("starting tracker");
d=setInterval(A,100);A()}function y(){clearInterval(d);d=null}function A(){var P=Math.floor(b.fp_getTime()*10)*100;
var Q=Math.floor(b.duration*10)*100;var R=(new Date()).time;function O(U,S){U=U>=0?U:Q-Math.abs(U);
for(var T=0;T<S.length;T++){if(S[T].lastTimeFired>R){S[T].lastTimeFired=-1}else{if(S[T].lastTimeFired+500>R){continue
}else{if(U==P||(P-500<U&&P>U)){S[T].lastTimeFired=R;$f.fireEvent(f.id(),"onCuepoint",o,S[T].fnId,S[T].parameters)
}}}}}$f.each(f.getCommonClip()._cuepoints,O);$f.each(K[o]._cuepoints,O)}function B(){x();
q=true;b.fp_seek(0)}function I(O){}function n(){function O(Q){var P={};j(P,c);j(P,f.getCommonClip());
j(P,Q);if(P.ipadUrl){url=decodeURIComponent(P.ipadUrl)}else{if(P.url){url=P.url}}if(url&&url.indexOf("://")==-1&&P.baseUrl){url=P.baseUrl+"/"+url
}P.originalUrl=P.url;P.completeUrl=url;P.extension=P.completeUrl.substr(P.completeUrl.lastIndexOf("."));
P.type="video";delete P.index;e("fixed clip",P);return P}b.fp_play=function(S,Q,U){var P=null;
var T=true;var R=true;e("Calling play() "+S,S);if(Q){e("ERROR: inStream clips not yet supported");
return}if(S!==undefined){if(typeof S=="number"){if(o>=K.length){return}o=S;S=K[o]
}else{if(typeof S=="string"){S={url:S}}b.fp_setPlaylist(S.length!==undefined?S:[S])
}if(!w.validExtensions.test(K[o].extension)){if(K.length>1&&o<(K.length-1)){e("Not last clip in the playlist, moving to next one");
b.fp_play(++o,false,true)}return}S=K[o];P=S.completeUrl;if(S.autoBuffering!==undefined&&S.autoBuffering===false){T=false
}if(S.autoPlay===undefined||S.autoPlay===true||U===true){T=true;R=true}else{R=false
}}else{e("clip was not given, simply calling video.play, if not already buffering");
if(s!=J){b.play()}return}e("about to play "+P,T,R);x();if(P){e("Changing SRC attribute"+P);
b.setAttribute("src",P)}if(T){if(!D("Begin")){return false}$f.fireEvent(f.id(),"onBegin",o);
e("calling video.load()");b.load()}if(R){e("calling video.play()");b.play()}};b.fp_pause=function(){e("pause called");
if(!D("Pause")){return false}b.pause()};b.fp_resume=function(){e("resume called");
if(!D("Resume")){return false}b.play()};b.fp_stop=function(){e("stop called");if(!D("Stop")){return false
}C=true;b.pause();try{b.currentTime=0}catch(P){}};b.fp_seek=function(P){e("seek called "+P);
if(!D("Seek")){return false}var T=0;var P=P+"";if(P.charAt(P.length-1)=="%"){var Q=parseInt(P.substr(0,P.length-1))/100;
var S=b.duration;T=S*Q}else{T=P}try{b.currentTime=T}catch(R){e("Wrong seek time")
}};b.fp_getTime=function(){return b.currentTime};b.fp_mute=function(){e("mute called");
if(!D("Mute")){return false}N=b.volume;b.volume=0};b.fp_unmute=function(){if(!D("Unmute")){return false
}b.volume=N};b.fp_getVolume=function(){return b.volume*100};b.fp_setVolume=function(P){if(!D("Volume")){return false
}b.volume=P/100};b.fp_toggle=function(){e("toggle called");if(f.getState()==g){B();
return}if(b.paused){b.fp_play()}else{b.fp_pause()}};b.fp_isPaused=function(){return b.paused
};b.fp_isPlaying=function(){return !b.paused};b.fp_getPlugin=function(Q){if(Q=="canvas"||Q=="controls"){var P=f.getConfig();
return P.plugins&&P.plugins[Q]?P.plugins[Q]:null}e("ERROR: no support for "+Q+" plugin on iDevices");
return null};b.fp_close=function(){G(L);b.parentNode.removeChild(b);b=null};b.fp_getStatus=function(){var Q=0;
var R=0;try{Q=b.buffered.start();R=b.buffered.end()}catch(P){}return{bufferStart:Q,bufferEnd:R,state:s,time:b.fp_getTime(),muted:b.muted,volume:b.fp_getVolume()}
};b.fp_getState=function(){return s};b.fp_startBuffering=function(){if(s==v){b.load()
}};b.fp_setPlaylist=function(Q){e("Setting playlist");o=0;for(var P=0;P<Q.length;
P++){Q[P]=O(Q[P])}K=Q;$f.fireEvent(f.id(),"onPlaylistReplace",Q)};b.fp_addClip=function(Q,P){Q=O(Q);
K.splice(P,0,Q);$f.fireEvent(f.id(),"onClipAdd",Q,P)};b.fp_updateClip=function(Q,P){j(K[P],Q);
return K[P]};b.fp_getVersion=function(){return"3.2.3"};b.fp_isFullscreen=function(){return false
};b.fp_toggleFullscreen=function(){if(b.fp_isFullscreen()){b.webkitExitFullscreen()
}else{b.webkitEnterFullscreen()}};b.fp_addCuepoints=function(S,Q,P){var U=Q==-1?f.getCommonClip():K[Q];
U._cuepoints=U._cuepoints||{};S=S instanceof Array?S:[S];for(var R=0;R<S.length;R++){var V=typeof S[R]=="object"?(S[R]["time"]||null):S[R];
if(V==null){continue}V=Math.floor(V/100)*100;var T=V;if(typeof S[R]=="object"){T=j({},S[R],false);
if(T.time!=undefined){delete T.time}if(T.parameters!=undefined){j(T,T.parameters,false);
delete T.parameters}}U._cuepoints[V]=U._cuepoints[V]||[];U._cuepoints[V].push({fnId:P,lastTimeFired:-1,parameters:T})
}};$f.each(("toggleFullscreen,stopBuffering,reset,playFeed,setKeyboardShortcutsEnabled,isKeyboardShortcutsEnabled,css,animate,showPlugin,hidePlugin,togglePlugin,fadeTo,invoke,loadPlugin").split(","),function(){var P=this;
b["fp_"+P]=function(){e("ERROR: unsupported API on iDevices "+P);return false}})}function E(){var Z=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","volumechange","waiting"];
var R=function(ab){e("Got event "+ab.type,ab)};for(var T=0;T<Z.length;T++){b.addEventListener(Z[T],R,false)
}var O=function(ab){e("got onBufferEmpty event "+ab.type);G(J);$f.fireEvent(f.id(),"onBufferEmpty",o)
};b.addEventListener("emptied",O,false);b.addEventListener("waiting",O,false);var Q=function(ab){if(m==v||m==J){}else{e("Restoring old state "+i(m));
G(m)}$f.fireEvent(f.id(),"onBufferFull",o)};b.addEventListener("canplay",Q,false);
b.addEventListener("canplaythrough",Q,false);var P=function(ab){b.fp_updateClip({duration:b.duration,metaData:{duration:b.duration}},o);
K[o].duration=b.duration;$f.fireEvent(f.id(),"onMetaData",o,K[o])};b.addEventListener("loadedmetadata",P,false);
b.addEventListener("durationchange",P,false);var Y=function(ab){if(s==F){if(!D("Resume")){e("Resume disallowed, pausing");
b.fp_pause();return H(ab)}$f.fireEvent(f.id(),"onResume",o)}G(z);if(!M){M=true;$f.fireEvent(f.id(),"onStart",o)
}};b.addEventListener("playing",Y,false);var V=function(ab){if(!D("Finish")){if(K.length==1){e("Active playlist only has one clip, onBeforeFinish returned false. Replaying");
B()}else{if(o!=(K.length-1)){e("Not the last clip in the playlist, but onBeforeFinish returned false. Returning to the beginning of current clip");
b.fp_seek(0)}else{e("Last clip in playlist, but onBeforeFinish returned false, start again from the beginning");
b.fp_play(0)}}return H(ab)}G(g);$f.fireEvent(f.id(),"onFinish",o);if(K.length>1&&o<(K.length-1)){e("Not last clip in the playlist, moving to next one");
b.fp_play(++o,false,true)}};b.addEventListener("ended",V,false);var U=function(ab){G(u,true);
$f.fireEvent(f.id(),"onError",o,201);if(w.onFail&&w.onFail instanceof Function){w.onFail.apply(f,[])
}};b.addEventListener("error",U,false);var X=function(ab){e("got pause event from player"+f.id());
if(C){return}if(s==J&&m==v){e("forcing play");setTimeout(function(){b.play()},0);
return}if(!D("Pause")){b.fp_resume();return H(ab)}G(F);$f.fireEvent(f.id(),"onPause",o)
};b.addEventListener("pause",X,false);var aa=function(ab){$f.fireEvent(f.id(),"onBeforeSeek",o)
};b.addEventListener("seeking",aa,false);var S=function(ab){if(C){C=false;$f.fireEvent(f.id(),"onStop",o)
}else{$f.fireEvent(f.id(),"onSeek",o)}e("seek done, currentState",i(s));if(q){q=false;
b.fp_play()}else{if(s!=z){b.fp_pause()}}};b.addEventListener("seeked",S,false);var W=function(ab){$f.fireEvent(f.id(),"onVolume",b.fp_getVolume())
};b.addEventListener("volumechange",W,false)}function k(){b.fp_play(0)}function r(){}if(p||w.simulateiDevice){if(!window.flashembed.__replaced){var h=window.flashembed;
window.flashembed=function(Q,V,R){if(typeof Q=="string"){Q=document.getElementById(Q.replace("#",""))
}if(!Q){return}var U=window.getComputedStyle(Q,null);var T=parseInt(U.width);var O=parseInt(U.height);
while(Q.firstChild){Q.removeChild(Q.firstChild)}var P=document.createElement("div");
var S=document.createElement("video");P.appendChild(S);Q.appendChild(P);P.style.height=O+"px";
P.style.width=T+"px";P.style.display="block";P.style.position="relative";P.style.background="-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.7)))";
P.style.cursor="default";P.style.webkitUserDrag="none";S.style.height="100%";S.style.width="100%";
S.style.display="block";S.id=V.id;S.name=V.id;S.style.cursor="pointer";S.style.webkitUserDrag="none";
S.type="video/mp4";S.playerConfig=R.config;$f.fireEvent(R.config.playerId,"onLoad","player")
};flashembed.getVersion=h.getVersion;flashembed.asString=h.asString;flashembed.isSupported=function(){return true
};flashembed.__replaced=true}var a=f._fireEvent;f._fireEvent=function(O){if(O[0]=="onLoad"&&O[1]=="player"){b=f.getParent().querySelector("video");
if(w.controls){b.controls="controls"}n();E();G(u,true);b.fp_setPlaylist(b.playerConfig.playlist);
k();a.apply(f,[O])}var P=s!=L;if(s==L&&typeof O=="string"){P=true}if(P){return a.apply(f,[O])
}};f._swfHeight=function(){return parseInt(b.style.height)};f.hasiPadSupport=function(){return true
}}return f});(function(a){$f.addPlugin("playlist",function(d,q){var o=this;var b={playingClass:"playing",pausedClass:"paused",progressClass:"progress",template:'<a href="${url}">${title}</a>',loop:false,playOnClick:true,manual:false};
a.extend(b,q);d=a(d);var j=o.getPlaylist().length<=1||b.manual;var k=null;function e(s){var r=n;
a.each(s,function(t,u){if(!a.isFunction(u)){r=r.replace("${"+t+"}",u).replace("$%7B"+t+"%7D",u)
}});return r}function i(){k=p().unbind("click.playlist").bind("click.playlist",function(){return h(a(this),k.index(this))
})}function c(){d.empty();a.each(o.getPlaylist(),function(){d.append(e(this))});i()
}function h(r,s){if(r.hasClass(b.playingClass)||r.hasClass(b.pausedClass)){o.toggle()
}else{r.addClass(b.progressClass);o.play(s)}return false}function m(){if(j){k=p()
}k.removeClass(b.playingClass);k.removeClass(b.pausedClass);k.removeClass(b.progressClass)
}function f(r){return(j)?k.filter("[href="+r.originalUrl+"]"):k.eq(r.index)}function p(){var r=d.find("a");
return r.length?r:d.children()}if(!j){var n=d.is(":empty")?b.template:d.html();c()
}else{k=p();if(a.isFunction(k.live)){var l=a(d.selector+" a");if(!l.length){l=a(d.selector+" > *")
}l.live("click",function(){var r=a(this);return h(r,r.attr("href"))})}else{k.click(function(){var r=a(this);
return h(r,r.attr("href"))})}var g=o.getClip(0);if(!g.url&&b.playOnClick){g.update({url:k.eq(0).attr("href")})
}}o.onBegin(function(r){m();f(r).addClass(b.playingClass)});o.onPause(function(r){f(r).removeClass(b.playingClass).addClass(b.pausedClass)
});o.onResume(function(r){f(r).removeClass(b.pausedClass).addClass(b.playingClass)
});if(!b.loop&&!j){o.onBeforeFinish(function(r){if(!r.isInStream&&r.index<k.length-1){return false
}})}if(j&&b.loop){o.onBeforeFinish(function(s){var r=f(s);if(r.next().length){r.next().click()
}else{k.eq(0).click()}return false})}o.onUnload(function(){m()});if(!j){o.onPlaylistReplace(function(){c()
})}o.onClipAdd(function(s,r){k.eq(r).before(e(s));i()});return o})})(jQuery);SC.TEMPLATES.tv=SC.Handlebars.compile('<div class="container container_5">\n\n<div class="grid_2">\n\n<h1 class="logo">SproutTV</h1>\n<h2 class="schedule-header">On Tonight</h2>\n{{#collection "Tv.ScheduleView" class="schedule" itemClass="schedule-item"}}\n    <span class="schedule-time">{{content.time}}</span>\n    <div class="schedule-info">\n        <h3 class="schedule-title">{{content.title}}</h3>\n        <p class="schedule-blurb">{{content.blurb}}</p>\n    </div>\n{{/collection}}\n</div>\n<div class="grid_3 featured">\n    <h1 class="feature-header">Featured Video</h1>\n    {{view "Tv.VideoPlayer" videoUrl="http://www.archive.org/download/superman_the_mechanical_monsters/superman_the_mechanical_monsters_512kb.mp4" previewUrl="http://www.archive.org/download/superman_the_mechanical_monsters/superman_the_mechanical_monsters.gif"}}\n</div>\n<div class=\'clear\'>&nbsp;</div>\n\n<div class=\'grid_5 separator\'><h2>LATEST VIDEOS</h2></div>\n\n<div class=\'clear\'>&nbsp;</div>\n\n<div id="playlist">\n{{#collection "Tv.VideoListView" class="video-list" itemClass="video-item"}}\n    <div class=\'grid_2 centered\'>\n        {{view "Tv.VideoPlayer" videoUrl=content.url previewUrl=content.previewUrl}}\n    </div>\n    <div class=\'grid_3\'>\n        <h2 class="video-title">{{content.title}}</h2>\n        <p class="video-description">{{content.description}}</p>\n    </div>\n    <div class=\'clear\'>&nbsp;</div>\n{{/collection}}\n</div>\n</div>\n');
SC.ready(function(){Tv.videosController.set("content",Tv.store.find(Tv.VideoRecord));
Tv.scheduleController.set("content",Tv.store.find(Tv.Schedule));Tv.mainPane=SC.MainPane.design({childViews:"videoPage".w(),videoPage:SC.ScrollView.extend({layout:{top:0,bottom:0,left:0,right:0},hasHorizontalScroller:NO,contentView:Tv.VideoTemplateView})});
Tv.mainPane.create().append()});Tv.VideoTemplateView=SC.TemplateView.extend({layerId:"tv",templateName:"tv"});
Tv.VideoListView=SC.TemplateCollectionView.extend({contentBinding:"Tv.videosController"});
Tv.ScheduleView=SC.TemplateCollectionView.extend({contentBinding:"Tv.scheduleController"});
Tv.VideoPlayer=SC.View.extend({uri:null,tagName:"a",classNames:["video-player"],displayProperties:["videoUrl","previewUrl"],didCreateLayer:function(){var id=this.get("layerId");
this.invokeLater(function(){$f(id,"http://sala.us/flowplayer/flowplayer-3.2.7.swf",{clip:{autoPlay:true,autoBuffering:true}}).ipad({simulateiDevice:true})
},0)},render:function(context){arguments.callee.base.apply(this,arguments);context.attr("href",this.get("videoUrl"));
context.attr("style","background-image:url("+this.get("previewUrl")+")");context.begin("img").attr("src","/static/tv/en/b726c56ecf3cd660280b73e77626e0eb65a7bb1e/source/resources/images/play_large.png").end()
},update:function(context){arguments.callee.base.apply(this,arguments);this.$().attr("href",this.get("videoUrl"))
},captureTouch:function(){return YES},touchStart:function(evt){return YES},touchEnd:function(evt){$f(this.get("layerId")).play();
return YES}});