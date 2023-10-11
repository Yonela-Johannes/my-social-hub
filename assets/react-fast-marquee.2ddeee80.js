import{r as T}from"./react.6bac1629.js";var j={};function Z(a){if(!a||typeof window=="undefined")return;const l=document.createElement("style");return l.setAttribute("type","text/css"),l.innerHTML=a,document.head.appendChild(l),a}Object.defineProperty(j,"__esModule",{value:!0});var e=T.exports;function J(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var r=J(e);Z(`.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
}

.child {
  transform: var(--transform);
}`);const K=e.forwardRef(function({style:l={},className:z="",autoFill:u=!1,play:c=!0,pauseOnHover:g=!1,pauseOnClick:w=!1,direction:t="left",speed:m=50,delay:$=0,loop:b=0,gradient:A=!1,gradientColor:q=[255,255,255],gradientWidth:v=200,onFinish:W,onCycleComplete:B,children:h},I){const[x,L]=e.useState(0),[y,X]=e.useState(0),[p,S]=e.useState(1),[M,D]=e.useState(!1),G=e.useRef(null),i=I||G,d=e.useRef(null),f=e.useCallback(()=>{if(d.current&&i.current){const n=i.current.getBoundingClientRect(),_=d.current.getBoundingClientRect();let o=n.width,s=_.width;(t==="up"||t==="down")&&(o=n.height,s=_.height),S(u&&o&&s&&s<o?Math.ceil(o/s):1),L(o),X(s)}},[u,i,t]);e.useEffect(()=>{if(!!M&&(f(),d.current&&i.current)){const n=new ResizeObserver(()=>f());return n.observe(i.current),n.observe(d.current),()=>{!n||n.disconnect()}}},[f,i,M]),e.useEffect(()=>{f()},[f,h]),e.useEffect(()=>{D(!0)},[]);const N=e.useMemo(()=>u?y*p/m:y<x?x/m:y/m,[u,x,y,p,m]),E=`rgba(${q[0]}, ${q[1]}, ${q[2]}`,O=e.useMemo(()=>Object.assign(Object.assign({},l),{["--pause-on-hover"]:!c||g?"paused":"running",["--pause-on-click"]:!c||g&&!w||w?"paused":"running",["--width"]:t==="up"||t==="down"?"100vh":"100%",["--transform"]:t==="up"?"rotate(-90deg)":t==="down"?"rotate(90deg)":"none"}),[l,c,g,w,t]),P=e.useMemo(()=>({["--gradient-color"]:`${E}, 1), ${E}, 0)`,["--gradient-width"]:typeof v=="number"?`${v}px`:v}),[E,v]),C=e.useMemo(()=>({["--play"]:c?"running":"paused",["--direction"]:t==="left"?"normal":"reverse",["--duration"]:`${N}s`,["--delay"]:`${$}s`,["--iteration-count"]:b?`${b}`:"infinite",["--min-width"]:u?"auto":"100%"}),[c,t,N,$,b,u]),R=e.useMemo(()=>({["--transform"]:t==="up"?"rotate(90deg)":t==="down"?"rotate(-90deg)":"none"}),[t]),k=e.useCallback(n=>[...Array(Number.isFinite(n)&&n>=0?n:0)].map((_,o)=>r.default.createElement(e.Fragment,{key:o},e.Children.map(h,s=>r.default.createElement("div",{style:R,className:"child"},s)))),[R,h]);return M?r.default.createElement("div",{ref:i,style:O,className:"marquee-container "+z},A&&r.default.createElement("div",{style:P,className:"overlay"}),r.default.createElement("div",{className:"marquee",style:C,onAnimationIteration:B,onAnimationEnd:W},r.default.createElement("div",{className:"initial-child-container",ref:d},e.Children.map(h,n=>r.default.createElement("div",{style:R,className:"child"},n))),k(p-1)),r.default.createElement("div",{className:"marquee",style:C},k(p))):null});var U=j.default=K;export{U as _};
