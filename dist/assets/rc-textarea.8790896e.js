import{h as he,c as E,d as xe,e as j,g as Pe,b as ce,f as q}from"./@babel.3a8c2b99.js";import{c as fe}from"./classnames.894b94fb.js";import{B as Fe,r as oe,f as _e}from"./rc-input.155bb75f.js";import{z as Se,a as ge,j as pe}from"./rc-util.48716302.js";import{r as v,a as $}from"./react.6bac1629.js";import{a as Me,F as $e,j as ie}from"./@rc-component.1251c77a.js";import{R as je}from"./rc-resize-observer.5e4ec66b.js";var Be=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,He=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],se={},h;function Le(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(c&&se[a])return se[a];var r=window.getComputedStyle(e),s=r.getPropertyValue("box-sizing")||r.getPropertyValue("-moz-box-sizing")||r.getPropertyValue("-webkit-box-sizing"),f=parseFloat(r.getPropertyValue("padding-bottom"))+parseFloat(r.getPropertyValue("padding-top")),i=parseFloat(r.getPropertyValue("border-bottom-width"))+parseFloat(r.getPropertyValue("border-top-width")),l=He.map(function(o){return"".concat(o,":").concat(r.getPropertyValue(o))}).join(";"),R={sizingStyle:l,paddingSize:f,borderSize:i,boxSizing:s};return c&&a&&(se[a]=R),R}function De(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;h||(h=document.createElement("textarea"),h.setAttribute("tab-index","-1"),h.setAttribute("aria-hidden","true"),document.body.appendChild(h)),e.getAttribute("wrap")?h.setAttribute("wrap",e.getAttribute("wrap")):h.removeAttribute("wrap");var s=Le(e,c),f=s.paddingSize,i=s.borderSize,l=s.boxSizing,R=s.sizingStyle;h.setAttribute("style","".concat(R,";").concat(Be)),h.value=e.value||e.placeholder||"";var o=void 0,u=void 0,z,g=h.scrollHeight;if(l==="border-box"?g+=i:l==="content-box"&&(g-=f),a!==null||r!==null){h.value=" ";var T=h.scrollHeight-f;a!==null&&(o=T*a,l==="border-box"&&(o=o+f+i),g=Math.max(o,g)),r!==null&&(u=T*r,l==="border-box"&&(u=u+f+i),z=g>u?"":"hidden",g=Math.min(u,g))}var p={height:g,overflowY:z,resize:"none"};return o&&(p.minHeight=o),u&&(p.maxHeight=u),p}var Ke=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],le=0,ue=1,de=2,Ye=v.exports.forwardRef(function(e,c){var a=e,r=a.prefixCls;a.onPressEnter;var s=a.defaultValue,f=a.value,i=a.autoSize,l=a.onResize,R=a.className,o=a.style,u=a.disabled,z=a.onChange;a.onInternalAutoSize;var g=he(a,Ke),T=Se(s,{value:f,postState:function(d){return d!=null?d:""}}),p=E(T,2),B=p[0],I=p[1],J=function(d){I(d.target.value),z==null||z(d)},m=v.exports.useRef();v.exports.useImperativeHandle(c,function(){return{textArea:m.current}});var F=v.exports.useMemo(function(){return i&&xe(i)==="object"?[i.minRows,i.maxRows]:[]},[i]),Y=E(F,2),y=Y[0],C=Y[1],V=!!i,_=function(){try{if(document.activeElement===m.current){var d=m.current,X=d.selectionStart,te=d.selectionEnd,ae=d.scrollTop;m.current.setSelectionRange(X,te),m.current.scrollTop=ae}}catch{}},Q=v.exports.useState(de),H=E(Q,2),x=H[0],N=H[1],A=v.exports.useState(),W=E(A,2),Z=W[0],ee=W[1],M=function(){N(le)};ge(function(){V&&M()},[f,y,C,V]),ge(function(){if(x===le)N(ue);else if(x===ue){var S=De(m.current,!1,y,C);N(de),ee(S)}else _()},[x]);var k=v.exports.useRef(),L=function(){pe.cancel(k.current)},G=function(d){x===de&&(l==null||l(d),i&&(L(),k.current=pe(function(){M()})))};v.exports.useEffect(function(){return L},[]);var O=V?Z:null,P=j(j({},o),O);return(x===le||x===ue)&&(P.overflowY="hidden",P.overflowX="hidden"),v.exports.createElement(je,{onResize:G,disabled:!(i||l)},v.exports.createElement("textarea",Pe({},g,{ref:m,style:P,className:fe(r,R,ce({},"".concat(r,"-disabled"),u)),disabled:u,value:B,onChange:J})))}),We=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","classes","showCount","className","style","disabled","hidden","classNames","styles","onResize"];function be(e,c){return q(e||"").slice(0,c).join("")}function me(e,c,a,r){var s=a;return e?s=be(a,r):q(c||"").length<a.length&&q(a||"").length>r&&(s=c),s}var Je=$.forwardRef(function(e,c){var a,r=e.defaultValue,s=e.value,f=e.onFocus,i=e.onBlur,l=e.onChange,R=e.allowClear,o=e.maxLength,u=e.onCompositionStart,z=e.onCompositionEnd,g=e.suffix,T=e.prefixCls,p=T===void 0?"rc-textarea":T,B=e.classes,I=e.showCount,J=e.className,m=e.style,F=e.disabled,Y=e.hidden,y=e.classNames,C=e.styles,V=e.onResize,_=he(e,We),Q=Se(r,{value:s,defaultValue:r}),H=E(Q,2),x=H[0],N=H[1],A=v.exports.useRef(null),W=$.useState(!1),Z=E(W,2),ee=Z[0],M=Z[1],k=$.useState(!1),L=E(k,2),G=L[0],O=L[1],P=$.useRef(),S=$.useRef(0),d=$.useState(null),X=E(d,2),te=X[0],ae=X[1],ne=function(){var t;(t=A.current)===null||t===void 0||t.textArea.focus()};v.exports.useImperativeHandle(c,function(){return{resizableTextArea:A.current,focus:ne,blur:function(){var t;(t=A.current)===null||t===void 0||t.textArea.blur()}}}),v.exports.useEffect(function(){M(function(b){return!F&&b})},[F]);var U=Number(o)>0,Re=function(t){O(!0),P.current=x,S.current=t.currentTarget.selectionStart,u==null||u(t)},ze=function(t){O(!1);var n=t.currentTarget.value;if(U){var w,Ne=S.current>=o+1||S.current===((w=P.current)===null||w===void 0?void 0:w.length);n=me(Ne,P.current,n,o)}n!==x&&(N(n),oe(t.currentTarget,t,l,n)),z==null||z(t)},ye=function(t){var n=t.target.value;if(!G&&U){var w=t.target.selectionStart>=o+1||t.target.selectionStart===n.length||!t.target.selectionStart;n=me(w,x,n,o)}N(n),oe(t.currentTarget,t,l,n)},Ce=function(t){var n=_.onPressEnter,w=_.onKeyDown;t.key==="Enter"&&n&&n(t),w==null||w(t)},we=function(t){M(!0),f==null||f(t)},Ae=function(t){M(!1),i==null||i(t)},Ee=function(t){var n;N(""),ne(),oe((n=A.current)===null||n===void 0?void 0:n.textArea,t,l)},D=_e(x);!G&&U&&s==null&&(D=be(D,o));var re=g,K;if(I){var ve=q(D).length;xe(I)==="object"?K=I.formatter({value:D,count:ve,maxLength:o}):K="".concat(ve).concat(U?" / ".concat(o):""),re=Me($e,{children:[re,ie("span",{className:fe("".concat(p,"-data-count"),y==null?void 0:y.count),style:C==null?void 0:C.count,children:K})]})}var Te=function(t){var n;V==null||V(t),(n=A.current)!==null&&n!==void 0&&n.textArea.style.height&&ae(!0)},Ie=!_.autoSize&&!I&&!R,Ve=ie(Fe,{value:D,allowClear:R,handleReset:Ee,suffix:re,prefixCls:p,classes:{affixWrapper:fe(B==null?void 0:B.affixWrapper,(a={},ce(a,"".concat(p,"-show-count"),I),ce(a,"".concat(p,"-textarea-allow-clear"),R),a))},disabled:F,focused:ee,className:J,style:j(j({},m),te&&!Ie?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof K=="string"?K:void 0}},hidden:Y,inputElement:ie(Ye,{..._,onKeyDown:Ce,onChange:ye,onFocus:we,onBlur:Ae,onCompositionStart:Re,onCompositionEnd:ze,className:y==null?void 0:y.textarea,style:j(j({},C==null?void 0:C.textarea),{},{resize:m==null?void 0:m.resize}),disabled:F,prefixCls:p,onResize:Te,ref:A})});return Ve});export{Je as T};