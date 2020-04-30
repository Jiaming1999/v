(this.webpackJsonpScribeAR=this.webpackJsonpScribeAR||[]).push([[0],{18:function(e,t,n){},24:function(e,t,n){e.exports=n(47)},29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(12),o=n.n(r),c=(n(29),n(1)),s=n(2),l=n(3),u=n(6),h=n(5),d=n(4);n(36),n(37);function p(e){var t=Object(c.b)();return i.a.createElement("div",null,e.item,i.a.createElement("label",{className:"switch"},i.a.createElement("input",{type:"checkbox",onChange:function(){return t(e.action())}}),i.a.createElement("span",{className:"slider"})))}n(38);n(39);var m=function(){return{type:"INCREMENT_TEXTSIZE"}},v=function(){return{type:"DECREMENT_TEXTSIZE"}},f=function(){return{type:"INCREMENT_LINEWIDTH"}},E=function(){return{type:"DECREMENT_LINEWIDTH"}},g=function(){return{type:"FLIP_INVERTCOLORS"}};function y(e){var t=Object(c.c)((function(e){return e.recording})),n=Object(c.b)();return document.body.onkeyup=function(e){32===e.keyCode&&n({type:"FLIP_RECORDING"})},i.a.createElement("div",null,t?"Recording":"Record",i.a.createElement("div",{className:"record-btn-wrapper"},i.a.createElement("div",{className:t?"record-btn hidden":"record-btn shown",onClick:function(){return n({type:"FLIP_RECORDING"})}}),i.a.createElement("div",{className:t?"stop-btn shown":"stop-btn hidden",onClick:function(){return n({type:"FLIP_RECORDING"})}})))}n(40);function b(e){var t=Object(c.c)(e.setting),n=Object(c.b)();return i.a.createElement("div",null,e.item,i.a.createElement("div",{className:"setting-wrapper"},i.a.createElement("button",{className:"minus",onClick:function(){return n(e.decrement())}},"-"),i.a.createElement("div",{className:"setting"},t),i.a.createElement("button",{className:"plus",onClick:function(){return n(e.increment())}},"+")))}n(41);function w(e){var t=Object(c.c)((function(e){return e.mic})),n=Object(c.b)(),a="",r="";return 0==t?(a="No Visualization",r="None"):1==t?(a="Line Visualization",r="Line"):2==t?(a="Spectrum Visualization",r="Spectrum"):(a="Circular Visualization",r="Circular"),i.a.createElement("div",null,a,i.a.createElement("div",{className:"audio_visual"},i.a.createElement("button",{className:"audio_plus",onClick:function(){return n({type:"FLIP_MICVISUAL"})}},r)))}n(42);function O(){return i.a.createElement("div",{className:"Options",id:"options-space"},i.a.createElement("h1",null,"Options"),i.a.createElement("div",{className:"item-wrapper"},i.a.createElement(b,{item:"Text size",setting:function(e){return e.textSize},increment:m,decrement:v})),i.a.createElement("div",{className:"item-wrapper"},i.a.createElement(b,{item:"Line width",setting:function(e){return e.lineWidth},increment:f,decrement:E})),i.a.createElement("div",{className:"item-wrapper"},i.a.createElement(p,{item:"Invert colors",setting:function(e){return e.invertColors},action:g})),i.a.createElement("div",{className:"item-wrapper"},i.a.createElement(w,null)),i.a.createElement("div",{className:"item-wrapper"},i.a.createElement(y,null)))}var k=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={shown:!0,timeoutId:setTimeout(a.hide.bind(Object(u.a)(a)),15e3)},a.hide=a.hide.bind(Object(u.a)(a)),a.show=a.show.bind(Object(u.a)(a)),a.resetTimeout=a.resetTimeout.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"hide",value:function(){this.setState({shown:!1}),document.getElementById("outer").addEventListener("click",this.show)}},{key:"show",value:function(){this.setState({shown:!0}),document.getElementById("outer").removeEventListener("click",this.show),this.resetTimeout()}},{key:"resetTimeout",value:function(){clearTimeout(this.state.timeoutId);var e=setTimeout(this.hide,15e3);this.setState({timeoutId:e})}},{key:"componentDidMount",value:function(){document.getElementById("optionsSpace").addEventListener("click",this.show)}},{key:"render",value:function(){return i.a.createElement("div",{className:"TopSpace",id:"outer",style:{height:"32vh"}},i.a.createElement("div",{className:"Container "+(this.state.shown?"shown":"hidden")},i.a.createElement("div",{id:"optionsSpace"},i.a.createElement(O,{resetTimeout:this.resetTimeout})),i.a.createElement("div",{id:"hideSpace",onClick:this.hide},"Hide")))}}]),n}(i.a.Component),j=(n(43),new(window.SpeechRecognition||window.webkitSpeechRecognition));j.lang="en-US",j.continuous=!1,j.interimResults=!0;var I=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={line:""},e.appendLine=e.appendLine.bind(Object(u.a)(e)),e.start=e.start.bind(Object(u.a)(e)),e.stop=e.stop.bind(Object(u.a)(e)),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.start()}},{key:"componentDidUpdate",value:function(e,t){e.isRecording!==this.props.isRecording&&(this.props.isRecording?this.start():this.stop())}},{key:"start",value:function(){var e=this;j.start(),j.onresult=function(t){var n=Array.from(t.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");n=n.charAt(0).toUpperCase()+n.slice(1),t.results[0].isFinal?e.appendLine(n+"."):e.updateCurrentLine(n)},j.onend=j.start}},{key:"stop",value:function(){j.onresult=function(){},j.onend=function(){},j.stop()}},{key:"updateCurrentLine",value:function(e){var t=document.getElementById("captionsSpace"),n=t.scrollHeight-t.clientHeight<=t.scrollTop+1;this.setState({line:e}),n&&(t.scrollTop=t.scrollHeight-t.clientHeight)}},{key:"appendLine",value:function(e){var t=document.getElementById("captionsSpace"),n=document.getElementById("out"),a=t.scrollHeight-t.clientHeight<=t.scrollTop+1,i=document.createElement("div");i.textContent=e,n.appendChild(i),this.setState({line:""}),a&&(t.scrollTop=t.scrollHeight-t.clientHeight)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{id:"out"}),i.a.createElement("div",{id:"curr"},this.state.line))}}]),n}(i.a.PureComponent);function N(e){var t=Object(c.c)((function(e){return e.lineWidth})),n=Object(c.c)((function(e){return e.recording})),a=3*(11-t)+"vw",r=e.height,o=e.textSize;return i.a.createElement("div",{className:"captionsSpace",id:"captionsSpace",style:{fontSize:o,height:r,width:"90vw",overflow:"auto",paddingLeft:a,paddingRight:a}},i.a.createElement(I,{isRecording:n}))}var C=n(10),S=n(14),M=n.n(S),T=n(20),D=n(15),R=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).canvas=i.a.createRef(),a}return Object(l.a)(n,[{key:"draw",value:function(){var e=this.props.audioData,t=this.canvas.current,n=t.height,a=t.width,i=t.getContext("2d");i.clearRect(0,0,a,n),1==this.props.mic?this.drawLine(e,i,n,a):2==this.props.mic?this.drawSpectrum(e,i,n,a):3==this.props.mic&&this.drawCircular(e,i,n,a)}},{key:"drawLine",value:function(e,t,n,a){var i=0,r=1*a/e.length;t.lineWidth=2,t.beginPath(),t.moveTo(0,n/2);var o,c=Object(D.a)(e);try{for(c.s();!(o=c.n()).done;){var s=o.value/255*n;t.lineTo(i,s),i+=r}}catch(l){c.e(l)}finally{c.f()}t.lineTo(i,n/2),t.strokeStyle=this.props.iscolor?"#000000":"#F8F8FF",t.stroke()}},{key:"drawSpectrum",value:function(e,t,n,a){var i,r,o=0,c=a/e.length*2.5,s=Object(D.a)(e);try{for(s.s();!(r=s.n()).done;){i=r.value/2,t.fillStyle=this.props.iscolor?"#000000":"#F8F8FF",t.fillRect(o,n/2-i/2,c,i),o+=c+1}}catch(l){s.e(l)}finally{s.f()}}},{key:"drawCircular",value:function(e,t,n,a){for(var i=e.reduce((function(e,t){return t+e}))/e.length,r=0;r<360;r++){var o=~~(r*(360/e.length)),c=a/2+80*Math.cos(2*r*Math.PI/360),s=n/2+80*-Math.sin(2*r*Math.PI/360),l=c+e[o]/4*Math.cos(2*r*Math.PI/360),u=s+e[o]/4*-Math.sin(2*r*Math.PI/360),h=a/2+1*i*Math.cos(2*r*Math.PI/360),d=n/2+1*i*-Math.sin(2*r*Math.PI/360),p=h-.5*i*Math.cos(2*r*Math.PI/360),m=d-.5*i*-Math.sin(2*r*Math.PI/360),v=c-.3*Math.cos(2*r*Math.PI/360),f=s-.3*-Math.sin(2*r*Math.PI/360);t.beginPath(),t.moveTo(c,s),t.lineTo(l,u),t.strokeStyle=this.props.iscolor?"#000000":"#F8F8FF",t.stroke(),t.beginPath(),t.moveTo(c,s),t.lineTo(v,f),t.stroke(),t.beginPath(),t.moveTo(p,m),t.lineTo(h,d),m-d>10&&(t.strokeStyle="#ff0000"),t.stroke()}}},{key:"componentDidUpdate",value:function(){this.draw()}},{key:"render",value:function(){var e="1700vw";return 1==this.props.mic?e="1800vw":2==this.props.mic?e="1600vw":3==this.props.mic&&(e="800vw"),i.a.createElement("canvas",{width:e,height:"300vh",ref:this.canvas})}}]),n}(a.Component),L=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={audioData:new Uint8Array(0)},a.tick=a.tick.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.audioContext.createAnalyser(),this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.source=this.audioContext.createMediaStreamSource(this.props.audio),this.source.connect(this.analyser),this.rafId=requestAnimationFrame(this.tick)}},{key:"tick",value:function(){1==this.props.mic?this.analyser.getByteTimeDomainData(this.dataArray):(2==this.props.mic||3==this.props.mic)&&this.analyser.getByteFrequencyData(this.dataArray),this.setState({audioData:this.dataArray}),this.rafId=requestAnimationFrame(this.tick)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.rafId),this.analyser.disconnect(),this.source.disconnect()}},{key:"render",value:function(){return i.a.createElement(R,{audioData:this.state.audioData,iscolor:this.props.iscolor,mic:this.props.mic})}}]),n}(a.Component),x=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={audio:null},e.stopMicrophone=e.stopMicrophone.bind(Object(u.a)(e)),e.getMicrophone=e.getMicrophone.bind(Object(u.a)(e)),e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.ismic!==this.props.ismic&&(this.props.ismic>0?this.getMicrophone():this.stopMicrophone())}},{key:"getMicrophone",value:function(){var e=Object(T.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0,video:!1});case 2:t=e.sent,this.setState({audio:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"stopMicrophone",value:function(){this.state.audio.getTracks().forEach((function(e){return e.stop()})),this.setState({audio:null})}},{key:"render",value:function(){return i.a.createElement("div",{className:"controls"},this.state.audio?i.a.createElement(L,{audio:this.state.audio,iscolor:this.props.iscolor,mic:this.props.ismic}):"")}}]),n}(i.a.PureComponent),P=(n(18),n(11)),F=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).drag=function(e){e.dataTransfer.setData("transfer",e.target.id)},e.noAllowDrop=function(e){e.stopPropagation()},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:this.props.id,draggable:"true",onDragStart:this.drag,onDragOver:this.noAllowDrop,style:this.props.style},this.props.children)}}]),n}(i.a.Component),A=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).drop=function(e){e.preventDefault();var t=e.dataTransfer.getData("transfer");e.target.appendChild(document.getElementById(t))},e.allowDrop=function(e){e.preventDefault()},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:this.props.id,onDrop:this.drop,onDragOver:this.allowDrop,style:this.props.style},this.props.children)}}]),n}(i.a.Component);function _(){var e=Object(C.a)(["\n    width:100%;\n    padding:32px;\n    display:flex;\n    justify-content: center;\n"]);return _=function(){return e},e}var H=P.a.div(_());function U(e){e.height;var t=Object(c.c)((function(e){return e.mic})),n=Object(c.c)((function(e){return e.invertColors}));return"black"==e.color?i.a.createElement("div",{className:"MiddleSpace"},i.a.createElement(H,null,i.a.createElement(A,{className:"d1",id:"dr1",style:{width:"50vw",height:"34vh",margin:"1px"}},i.a.createElement("div",{className:"show1"},i.a.createElement(F,{id:"item1",style:{margin:"8px"}},i.a.createElement(x,{ismic:t,iscolor:n,style:{position:"relative"}})))),i.a.createElement(A,{className:"d1",id:"dr2",style:{width:"50vw",height:"34vh",margin:"1px"}},i.a.createElement("div",{className:"show1"})))):i.a.createElement("div",{className:"MiddleSpace"},i.a.createElement(H,null,i.a.createElement(A,{className:"d2",id:"dr1",style:{width:"50vw",height:"34vh",margin:"1px"}},i.a.createElement(F,{id:"item1",style:{margin:"8px"}},i.a.createElement(x,{ismic:t,iscolor:n,style:{position:"relative"}}))),i.a.createElement(A,{className:"d2",id:"dr2",style:{width:"50vw",height:"34vh",margin:"1px"}})))}function z(){var e=Object(C.a)(["\n    padding:8px;\n    color:#555;\n    background-color: white;\n    border-radius:3px;\n"]);return z=function(){return e},e}function B(){var e=Object(C.a)(["\n    width:100%;\n    padding:32px;\n    display:flex;\n    justify-content: center;\n"]);return B=function(){return e},e}var W=P.a.div(B()),V=P.a.div(z()),q={backgroundColor:"#555",width:"250px",height:"400px",margin:"32px"};i.a.Component,n(46);function G(){getComputedStyle(document.documentElement).getPropertyValue("--primary");var e=Object(c.c)((function(e){return e.textSize})),t=(Object(c.c)((function(e){return e.numLines})),Object(c.c)((function(e){return e.invertColors}))),n=e+"vh",a=36,r=100-a+"vh";a+="vh";var o=t?"white":"black";return"black"==o?i.a.createElement("div",{className:"App-1",style:{backgroundColor:"black",color:"white"}},i.a.createElement(k,{height:r}),i.a.createElement(U,{height:"32vh",color:o}),i.a.createElement(N,{height:a,textSize:n})):i.a.createElement("div",{className:"App-2",style:{backgroundColor:"white",color:"black"}},i.a.createElement(k,{height:r}),i.a.createElement(U,{height:"32vh",color:o}),i.a.createElement(N,{height:a,textSize:n}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=n(8),Z=Object(X.b)({textSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_TEXTSIZE":return e+1;case"DECREMENT_TEXTSIZE":return Math.max(1,e-1);default:return e}},lineWidth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_LINEWIDTH":return Math.min(10,e+1);case"DECREMENT_LINEWIDTH":return Math.max(1,e-1);default:return e}},numLines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_NUMLINES":return e+1;case"DECREMENT_NUMLINES":return Math.max(1,e-1);default:return e}},lockScreen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"FLIP_LOCKSCREEN"===t.type?!e:e},invertColors:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"FLIP_INVERTCOLORS"===t.type?!e:e},recording:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"FLIP_RECORDING"===t.type?!e:e},mic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return"FLIP_MICVISUAL"===t.type&&4==(e+=1)&&(e=0),e}}),J=Object(X.c)(Z);o.a.render(i.a.createElement(c.a,{store:J},i.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.6865ca29.chunk.js.map