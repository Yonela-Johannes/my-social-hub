import{r as i}from"./react.6bac1629.js";import{h as m,j as f,m as O,u as P}from"./goober.2053c3e8.js";var C=t=>typeof t=="function",$=(t,e)=>C(t)?t(e):t,N=(()=>{let t=0;return()=>(++t).toString()})(),A=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),T=20,v=new Map,M=1e3,D=t=>{if(v.has(t))return;let e=setTimeout(()=>{v.delete(t),x({type:4,toastId:t})},M);v.set(t,e)},j=t=>{let e=v.get(t);e&&clearTimeout(e)},z=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,T)};case 1:return e.toast.id&&j(e.toast.id),{...t,toasts:t.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:r}=e;return t.toasts.find(a=>a.id===r.id)?z(t,{type:1,toast:r}):z(t,{type:0,toast:r});case 3:let{toastId:o}=e;return o?D(o):t.toasts.forEach(a=>{D(a.id)}),{...t,toasts:t.toasts.map(a=>a.id===o||o===void 0?{...a,visible:!1}:a)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+s}))}}},w=[],E={toasts:[],pausedAt:void 0},x=t=>{E=z(E,t),w.forEach(e=>{e(E)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},H=(t={})=>{let[e,r]=i.exports.useState(E);i.exports.useEffect(()=>(w.push(r),()=>{let s=w.indexOf(r);s>-1&&w.splice(s,1)}),[e]);let o=e.toasts.map(s=>{var a,l;return{...t,...t[s.type],...s,duration:s.duration||((a=t[s.type])==null?void 0:a.duration)||(t==null?void 0:t.duration)||S[s.type],style:{...t.style,...(l=t[s.type])==null?void 0:l.style,...s.style}}});return{...e,toasts:o}},U=(t,e="blank",r)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||N()}),h=t=>(e,r)=>{let o=U(e,t,r);return x({type:2,toast:o}),o.id},c=(t,e)=>h("blank")(t,e);c.error=h("error");c.success=h("success");c.loading=h("loading");c.custom=h("custom");c.dismiss=t=>{x({type:3,toastId:t})};c.remove=t=>x({type:4,toastId:t});c.promise=(t,e,r)=>{let o=c.loading(e.loading,{...r,...r==null?void 0:r.loading});return t.then(s=>(c.success($(e.success,s),{id:o,...r,...r==null?void 0:r.success}),s)).catch(s=>{c.error($(e.error,s),{id:o,...r,...r==null?void 0:r.error})}),t};var _=(t,e)=>{x({type:1,toast:{id:t,height:e}})},F=()=>{x({type:5,time:Date.now()})},L=t=>{let{toasts:e,pausedAt:r}=H(t);i.exports.useEffect(()=>{if(r)return;let a=Date.now(),l=e.map(n=>{if(n.duration===1/0)return;let p=(n.duration||0)+n.pauseDuration-(a-n.createdAt);if(p<0){n.visible&&c.dismiss(n.id);return}return setTimeout(()=>c.dismiss(n.id),p)});return()=>{l.forEach(n=>n&&clearTimeout(n))}},[e,r]);let o=i.exports.useCallback(()=>{r&&x({type:6,time:Date.now()})},[r]),s=i.exports.useCallback((a,l)=>{let{reverseOrder:n=!1,gutter:p=8,defaultPosition:d}=l||{},y=e.filter(u=>(u.position||d)===(a.position||d)&&u.height),k=y.findIndex(u=>u.id===a.id),g=y.filter((u,I)=>I<k&&u.visible).length;return y.filter(u=>u.visible).slice(...n?[g+1]:[0,g]).reduce((u,I)=>u+(I.height||0)+p,0)},[e]);return{toasts:e,handlers:{updateHeight:_,startPause:F,endPause:o,calculateOffset:s}}},R=m`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Y=m`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,B=m`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,G=f("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Y} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${B} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,J=m`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Q=f("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${J} 1s linear infinite;
`,V=m`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,W=m`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,X=f("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${W} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Z=f("div")`
  position: absolute;
`,q=f("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=m`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,tt=f("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:t})=>{let{icon:e,type:r,iconTheme:o}=t;return e!==void 0?typeof e=="string"?i.exports.createElement(tt,null,e):e:r==="blank"?null:i.exports.createElement(q,null,i.exports.createElement(Q,{...o}),r!=="loading"&&i.exports.createElement(Z,null,r==="error"?i.exports.createElement(G,{...o}):i.exports.createElement(X,{...o})))},rt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,at=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,ot="0%{opacity:0;} 100%{opacity:1;}",st="0%{opacity:1;} 100%{opacity:0;}",it=f("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,nt=f("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,lt=(t,e)=>{let r=t.includes("top")?1:-1,[o,s]=A()?[ot,st]:[rt(r),at(r)];return{animation:e?`${m(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${m(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},dt=i.exports.memo(({toast:t,position:e,style:r,children:o})=>{let s=t.height?lt(t.position||e||"top-center",t.visible):{opacity:0},a=i.exports.createElement(et,{toast:t}),l=i.exports.createElement(nt,{...t.ariaProps},$(t.message,t));return i.exports.createElement(it,{className:t.className,style:{...s,...r,...t.style}},typeof o=="function"?o({icon:a,message:l}):i.exports.createElement(i.exports.Fragment,null,a,l))});O(i.exports.createElement);var ct=({id:t,className:e,style:r,onHeightUpdate:o,children:s})=>{let a=i.exports.useCallback(l=>{if(l){let n=()=>{let p=l.getBoundingClientRect().height;o(t,p)};n(),new MutationObserver(n).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[t,o]);return i.exports.createElement("div",{ref:a,className:e,style:r},s)},pt=(t,e)=>{let r=t.includes("top"),o=r?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:A()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(r?1:-1)}px)`,...o,...s}},ut=P`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,b=16,xt=({reverseOrder:t,position:e="top-center",toastOptions:r,gutter:o,children:s,containerStyle:a,containerClassName:l})=>{let{toasts:n,handlers:p}=L(r);return i.exports.createElement("div",{style:{position:"fixed",zIndex:9999,top:b,left:b,right:b,bottom:b,pointerEvents:"none",...a},className:l,onMouseEnter:p.startPause,onMouseLeave:p.endPause},n.map(d=>{let y=d.position||e,k=p.calculateOffset(d,{reverseOrder:t,gutter:o,defaultPosition:e}),g=pt(y,k);return i.exports.createElement(ct,{id:d.id,key:d.id,onHeightUpdate:p.updateHeight,className:d.visible?ut:"",style:g},d.type==="custom"?$(d.message,d):s?s(d):i.exports.createElement(dt,{toast:d,position:y}))}))},yt=c;export{xt as I,yt as _};
