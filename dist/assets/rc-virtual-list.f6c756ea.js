import{e as he,b as N,g as Je,c as H,_ as xt,a as mt,d as Ce,h as Rt}from"./@babel.3a8c2b99.js";import{r as t}from"./react.6bac1629.js";import{r as Ae}from"./react-dom.743d3922.js";import{c as Re}from"./classnames.894b94fb.js";import{R as Qe}from"./rc-resize-observer.5e4ec66b.js";import{j as F,G as Mt,a as Te,f as Ge}from"./rc-util.48716302.js";import"./react-is.484b48b3.js";var et=t.exports.forwardRef(function(e,s){var r=e.height,i=e.offsetY,S=e.offsetX,n=e.children,l=e.prefixCls,h=e.onInnerResize,p=e.innerProps,g=e.rtl,f=e.extra,u={},v={display:"flex",flexDirection:"column"};if(i!==void 0){var d;u={height:r,position:"relative",overflow:"hidden"},v=he(he({},v),{},(d={transform:"translateY(".concat(i,"px)")},N(d,g?"marginRight":"marginLeft",-S),N(d,"position","absolute"),N(d,"left",0),N(d,"right",0),N(d,"top",0),d))}return t.exports.createElement("div",{style:u},t.exports.createElement(Qe,{onResize:function(c){var x=c.offsetHeight;x&&h&&h()}},t.exports.createElement("div",Je({style:v,className:Re(N({},"".concat(l,"-holder-inner"),l)),ref:s},p),n,f)))});et.displayName="Filler";function je(e,s){var r="touches"in e?e.touches[0]:e;return r[s?"pageX":"pageY"]}var Ue=t.exports.forwardRef(function(e,s){var r,i=e.prefixCls,S=e.rtl,n=e.scrollOffset,l=e.scrollRange,h=e.onStartMove,p=e.onStopMove,g=e.onScroll,f=e.horizontal,u=e.spinSize,v=e.containerSize,d=t.exports.useState(!1),R=H(d,2),c=R[0],x=R[1],w=t.exports.useState(null),b=H(w,2),I=b[0],X=b[1],re=t.exports.useState(null),W=H(re,2),V=W[0],L=W[1],k=!S,z=t.exports.useRef(),U=t.exports.useRef(),M=t.exports.useState(!1),T=H(M,2),B=T[0],Z=T[1],ne=t.exports.useRef(),P=function(){clearTimeout(ne.current),Z(!0),ne.current=setTimeout(function(){Z(!1)},3e3)},G=l-v||0,ae=v-u||0,pe=G>0,Y=t.exports.useMemo(function(){if(n===0||G===0)return 0;var D=n/G;return D*ae},[n,G,ae]),oe=function(E){E.stopPropagation(),E.preventDefault()},ie=t.exports.useRef({top:Y,dragging:c,pageY:I,startTop:V});ie.current={top:Y,dragging:c,pageY:I,startTop:V};var q=function(E){x(!0),X(je(E,f)),L(ie.current.top),h(),E.stopPropagation(),E.preventDefault()};t.exports.useEffect(function(){var D=function(ue){ue.preventDefault()},E=z.current,$=U.current;return E.addEventListener("touchstart",D),$.addEventListener("touchstart",q),function(){E.removeEventListener("touchstart",D),$.removeEventListener("touchstart",q)}},[]);var ge=t.exports.useRef();ge.current=G;var le=t.exports.useRef();le.current=ae,t.exports.useEffect(function(){if(c){var D,E=function(ue){var se=ie.current,Me=se.dragging,be=se.pageY,J=se.startTop;if(F.cancel(D),Me){var xe=je(ue,f)-be,Q=J;!k&&f?Q-=xe:Q+=xe;var ee=ge.current,me=le.current,te=me?Q/me:0,O=Math.ceil(te*ee);O=Math.max(O,0),O=Math.min(O,ee),D=F(function(){g(O,f)})}},$=function(){x(!1),p()};return window.addEventListener("mousemove",E),window.addEventListener("touchmove",E),window.addEventListener("mouseup",$),window.addEventListener("touchend",$),function(){window.removeEventListener("mousemove",E),window.removeEventListener("touchmove",E),window.removeEventListener("mouseup",$),window.removeEventListener("touchend",$),F.cancel(D)}}},[c]),t.exports.useEffect(function(){P()},[n]),t.exports.useImperativeHandle(s,function(){return{delayHidden:P}});var K="".concat(i,"-scrollbar"),C={position:"absolute",visibility:B&&pe?null:"hidden"},_={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return f?(C.height=8,C.left=0,C.right=0,C.bottom=0,_.height="100%",_.width=u,k?_.left=Y:_.right=Y):(C.width=8,C.top=0,C.bottom=0,k?C.right=0:C.left=0,_.width="100%",_.height=u,_.top=Y),t.exports.createElement("div",{ref:z,className:Re(K,(r={},N(r,"".concat(K,"-horizontal"),f),N(r,"".concat(K,"-vertical"),!f),N(r,"".concat(K,"-visible"),B),r)),style:C,onMouseDown:oe,onMouseMove:P},t.exports.createElement("div",{ref:U,className:Re("".concat(K,"-thumb"),N({},"".concat(K,"-thumb-moving"),c)),style:_,onMouseDown:q}))});function bt(e){var s=e.children,r=e.setRef,i=t.exports.useCallback(function(S){r(S)},[]);return t.exports.cloneElement(s,{ref:i})}function Et(e,s,r,i,S,n,l){var h=l.getKey;return e.slice(s,r+1).map(function(p,g){var f=s+g,u=n(p,f,{style:{width:i}}),v=h(p);return t.exports.createElement(bt,{key:v,setRef:function(R){return S(p,R)}},u)})}var yt=function(){function e(){mt(this,e),this.maps=void 0,this.id=0,this.maps=Object.create(null)}return xt(e,[{key:"set",value:function(r,i){this.maps[r]=i,this.id+=1}},{key:"get",value:function(r){return this.maps[r]}}]),e}();function wt(e,s,r){var i=t.exports.useState(0),S=H(i,2),n=S[0],l=S[1],h=t.exports.useRef(new Map),p=t.exports.useRef(new yt),g=t.exports.useRef();function f(){F.cancel(g.current)}function u(){f(),g.current=F(function(){h.current.forEach(function(d,R){if(d&&d.offsetParent){var c=Mt(d),x=c.offsetHeight;p.current.get(R)!==x&&p.current.set(R,c.offsetHeight)}}),l(function(d){return d+1})})}function v(d,R){var c=e(d),x=h.current.get(c);R?(h.current.set(c,R),u()):h.current.delete(c),!x!=!R&&(R?s==null||s(d):r==null||r(d))}return t.exports.useEffect(function(){return f},[]),[v,u,p.current,n]}function zt(e,s,r,i,S,n,l,h){var p=t.exports.useRef();return function(g){if(g==null){h();return}if(F.cancel(p.current),typeof g=="number")l(g);else if(g&&Ce(g)==="object"){var f,u=g.align;"index"in g?f=g.index:f=s.findIndex(function(c){return S(c)===g.key});var v=g.offset,d=v===void 0?0:v,R=function c(x,w){if(!(x<0||!e.current)){var b=e.current.clientHeight,I=!1,X=w;if(b){for(var re=w||u,W=0,V=0,L=0,k=Math.min(s.length,f),z=0;z<=k;z+=1){var U=S(s[z]);V=W;var M=r.get(U);L=V+(M===void 0?i:M),W=L,z===f&&M===void 0&&(I=!0)}var T=null;switch(re){case"top":T=V-d;break;case"bottom":T=L-b+d;break;default:{var B=e.current.scrollTop,Z=B+b;V<B?X="top":L>Z&&(X="bottom")}}T!==null&&T!==e.current.scrollTop&&l(T)}p.current=F(function(){I&&n(),c(x-1,X)},2)}};R(3)}}}function Lt(e,s,r){var i=e.length,S=s.length,n,l;if(i===0&&S===0)return null;i<S?(n=e,l=s):(n=s,l=e);var h={__EMPTY_ITEM__:!0};function p(R){return R!==void 0?r(R):h}for(var g=null,f=Math.abs(i-S)!==1,u=0;u<l.length;u+=1){var v=p(n[u]),d=p(l[u]);if(v!==d){g=u,f=f||v!==p(l[u+1]);break}}return g===null?null:{index:g,multiple:f}}function _t(e,s,r){var i=t.exports.useState(e),S=H(i,2),n=S[0],l=S[1],h=t.exports.useState(null),p=H(h,2),g=p[0],f=p[1];return t.exports.useEffect(function(){var u=Lt(n||[],e||[],s);(u==null?void 0:u.index)!==void 0&&(r==null||r(u.index),f(e[u.index])),l(e)},[e]),[g]}var Ze=(typeof navigator=="undefined"?"undefined":Ce(navigator))==="object"&&/Firefox/i.test(navigator.userAgent),tt=function(e,s){var r=t.exports.useRef(!1),i=t.exports.useRef(null);function S(){clearTimeout(i.current),r.current=!0,i.current=setTimeout(function(){r.current=!1},50)}var n=t.exports.useRef({top:e,bottom:s});return n.current.top=e,n.current.bottom=s,function(l){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=l<0&&n.current.top||l>0&&n.current.bottom;return h&&p?(clearTimeout(i.current),r.current=!1):(!p||r.current)&&S(),!r.current&&p}};function Ht(e,s,r,i,S){var n=t.exports.useRef(0),l=t.exports.useRef(null),h=t.exports.useRef(null),p=t.exports.useRef(!1),g=tt(s,r);function f(x){F.cancel(l.current);var w=x.deltaY;n.current+=w,h.current=w,!g(w)&&(Ze||x.preventDefault(),l.current=F(function(){var b=p.current?10:1;S(n.current*b),n.current=0}))}function u(x){var w=x.deltaX;S(w,!0),Ze||x.preventDefault()}var v=t.exports.useRef(null),d=t.exports.useRef(null);function R(x){if(!!e){F.cancel(d.current),d.current=F(function(){v.current=null},2);var w=x.deltaX,b=x.deltaY,I=Math.abs(w),X=Math.abs(b);v.current===null&&(v.current=i&&I>X?"x":"y"),v.current==="x"?u(x):f(x)}}function c(x){!e||(p.current=x.detail===h.current)}return[R,c]}var Tt=14/15;function Ct(e,s,r){var i=t.exports.useRef(!1),S=t.exports.useRef(0),n=t.exports.useRef(null),l=t.exports.useRef(null),h,p=function(v){if(i.current){var d=Math.ceil(v.touches[0].pageY),R=S.current-d;S.current=d,r(R)&&v.preventDefault(),clearInterval(l.current),l.current=setInterval(function(){R*=Tt,(!r(R,!0)||Math.abs(R)<=.1)&&clearInterval(l.current)},16)}},g=function(){i.current=!1,h()},f=function(v){h(),v.touches.length===1&&!i.current&&(i.current=!0,S.current=Math.ceil(v.touches[0].pageY),n.current=v.target,n.current.addEventListener("touchmove",p),n.current.addEventListener("touchend",g))};h=function(){n.current&&(n.current.removeEventListener("touchmove",p),n.current.removeEventListener("touchend",g))},Te(function(){return e&&s.current.addEventListener("touchstart",f),function(){var u;(u=s.current)===null||u===void 0||u.removeEventListener("touchstart",f),h(),clearInterval(l.current)}},[e])}var Dt=20;function qe(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=e/s*100;return isNaN(r)&&(r=0),r=Math.max(r,Dt),r=Math.min(r,e/2),Math.floor(r)}function It(e,s,r,i){var S=t.exports.useMemo(function(){return[new Map,[]]},[e,r.id,i]),n=H(S,2),l=n[0],h=n[1],p=function(f){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:f,v=l.get(f),d=l.get(u);if(v===void 0||d===void 0)for(var R=e.length,c=h.length;c<R;c+=1){var x,w=e[c],b=s(w);l.set(b,c);var I=(x=r.get(b))!==null&&x!==void 0?x:i;if(h[c]=(h[c-1]||0)+I,b===f&&(v=c),b===u&&(d=c),v!==void 0&&d!==void 0)break}return{top:h[v-1]||0,bottom:h[d]}};return p}var Pt=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender"],Ot=[],Nt={overflowY:"auto",overflowAnchor:"none"};function kt(e,s){var r=e.prefixCls,i=r===void 0?"rc-virtual-list":r,S=e.className,n=e.height,l=e.itemHeight,h=e.fullHeight,p=h===void 0?!0:h,g=e.style,f=e.data,u=e.children,v=e.itemKey,d=e.virtual,R=e.direction,c=e.scrollWidth,x=e.component,w=x===void 0?"div":x,b=e.onScroll,I=e.onVirtualScroll,X=e.onVisibleChange,re=e.innerProps,W=e.extraRender,V=Rt(e,Pt),L=!!(d!==!1&&n&&l),k=L&&f&&l*f.length>n,z=R==="rtl",U=Re(i,N({},"".concat(i,"-rtl"),z),S),M=f||Ot,T=t.exports.useRef(),B=t.exports.useRef(),Z=t.exports.useState(0),ne=H(Z,2),P=ne[0],G=ne[1],ae=t.exports.useState(0),pe=H(ae,2),Y=pe[0],oe=pe[1],ie=t.exports.useState(!1),q=H(ie,2),ge=q[0],le=q[1],K=function(){le(!0)},C=function(){le(!1)},_=t.exports.useCallback(function(a){return typeof v=="function"?v(a):a==null?void 0:a[v]},[v]),D={getKey:_};function E(a){G(function(o){var m;typeof a=="function"?m=a(o):m=a;var y=lt(m);return T.current.scrollTop=y,y})}var $=t.exports.useRef({start:0,end:M.length}),Se=t.exports.useRef(),ue=_t(M,_),se=H(ue,1),Me=se[0];Se.current=Me;var be=wt(_,null,null),J=H(be,4),xe=J[0],Q=J[1],ee=J[2],me=J[3],te=t.exports.useMemo(function(){if(!L)return{scrollHeight:void 0,start:0,end:M.length-1,offset:void 0};if(!k){var a;return{scrollHeight:((a=B.current)===null||a===void 0?void 0:a.offsetHeight)||0,start:0,end:M.length-1,offset:void 0}}for(var o=0,m,y,A,pt=M.length,de=0;de<pt;de+=1){var gt=M[de],St=_(gt),Be=ee.get(St),He=o+(Be===void 0?l:Be);He>=P&&m===void 0&&(m=de,y=o),He>P+n&&A===void 0&&(A=de),o=He}return m===void 0&&(m=0,y=0,A=Math.ceil(n/l)),A===void 0&&(A=M.length-1),A=Math.min(A+1,M.length-1),{scrollHeight:o,start:m,end:A,offset:y}},[k,L,P,M,me,n]),O=te.scrollHeight,ce=te.start,fe=te.end,De=te.offset;$.current.start=ce,$.current.end=fe;var rt=t.exports.useState({width:0,height:n}),Ie=H(rt,2),j=Ie[0],nt=Ie[1],at=function(o){nt(o)},Pe=t.exports.useRef(),Oe=t.exports.useRef(),ot=t.exports.useMemo(function(){return qe(j.width,c)},[j.width,c]),it=t.exports.useMemo(function(){return qe(j.height,O)},[j.height,O]),Ee=O-n,ye=t.exports.useRef(Ee);ye.current=Ee;function lt(a){var o=a;return Number.isNaN(ye.current)||(o=Math.min(o,ye.current)),o=Math.max(o,0),o}var Ne=P<=0,ke=P>=Ee,ut=tt(Ne,ke),we=function(){return{x:z?-Y:Y,y:P}},ze=t.exports.useRef(we()),Le=Ge(function(){if(I){var a=we();(ze.current.x!==a.x||ze.current.y!==a.y)&&(I(a),ze.current=a)}});function Ye(a,o){var m=a;o?(Ae.exports.flushSync(function(){oe(m)}),Le()):E(m)}function st(a){var o=a.currentTarget.scrollTop;o!==P&&E(o),b==null||b(a),Le()}var Fe=function(o){var m=o,y=c-j.width;return m=Math.max(m,0),m=Math.min(m,y),m},ct=Ge(function(a,o){o?(Ae.exports.flushSync(function(){oe(function(m){var y=m+(z?-a:a);return Fe(y)})}),Le()):E(function(m){var y=m+a;return y})}),ft=Ht(L,Ne,ke,!!c,ct),Xe=H(ft,2),_e=Xe[0],$e=Xe[1];Ct(L,T,function(a,o){return ut(a,o)?!1:(_e({preventDefault:function(){},deltaY:a}),!0)}),Te(function(){function a(m){L&&m.preventDefault()}var o=T.current;return o.addEventListener("wheel",_e),o.addEventListener("DOMMouseScroll",$e),o.addEventListener("MozMousePixelScroll",a),function(){o.removeEventListener("wheel",_e),o.removeEventListener("DOMMouseScroll",$e),o.removeEventListener("MozMousePixelScroll",a)}},[L]);var We=function(){var o,m;(o=Pe.current)===null||o===void 0||o.delayHidden(),(m=Oe.current)===null||m===void 0||m.delayHidden()},Ve=zt(T,M,ee,l,_,Q,E,We);t.exports.useImperativeHandle(s,function(){return{getScrollInfo:we,scrollTo:function(o){function m(y){return y&&Ce(y)==="object"&&("left"in y||"top"in y)}m(o)?(o.left!==void 0&&oe(Fe(o.left)),Ve(o.top)):Ve(o)}}}),Te(function(){if(X){var a=M.slice(ce,fe+1);X(a,M)}},[ce,fe,M]);var vt=It(M,_,ee,l),dt=W==null?void 0:W({start:ce,end:fe,virtual:k,offsetX:Y,offsetY:De,rtl:z,getSize:vt}),ht=Et(M,ce,fe,c,xe,u,D),ve=null;n&&(ve=he(N({},p?"height":"maxHeight",n),Nt),L&&(ve.overflowY="hidden",c&&(ve.overflowX="hidden"),ge&&(ve.pointerEvents="none")));var Ke={};return z&&(Ke.dir="rtl"),t.exports.createElement("div",Je({style:he(he({},g),{},{position:"relative"}),className:U},Ke,V),t.exports.createElement(Qe,{onResize:at},t.exports.createElement(w,{className:"".concat(i,"-holder"),style:ve,ref:T,onScroll:st,onMouseEnter:We},t.exports.createElement(et,{prefixCls:i,height:O,offsetX:Y,offsetY:De,scrollWidth:c,onInnerResize:Q,ref:B,innerProps:re,rtl:z,extra:dt},ht))),k&&O>n&&t.exports.createElement(Ue,{ref:Pe,prefixCls:i,scrollOffset:P,scrollRange:O,rtl:z,onScroll:Ye,onStartMove:K,onStopMove:C,spinSize:it,containerSize:j.height}),k&&c&&t.exports.createElement(Ue,{ref:Oe,prefixCls:i,scrollOffset:Y,scrollRange:c,rtl:z,onScroll:Ye,onStartMove:K,onStopMove:C,spinSize:ot,containerSize:j.width,horizontal:!0}))}var Yt=t.exports.forwardRef(kt);Yt.displayName="List";export{Yt as L};