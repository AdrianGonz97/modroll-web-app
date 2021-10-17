import{P as pe,C as K,S as $,i as x,s as ee,e as w,t as R,k as L,E as ae,c as N,a as q,g as O,d as v,n as P,F as re,b as c,Q as ce,f as A,I as u,R as J,T as S,h as Q,U as de,J as z,V as _e,W as qe,X as Ie,K as U,Y as he,G as De,Z as Ce,_ as ge,z as Te,l as be,j as te,m as se,o as ne,p as Ve,q as Be,x as X,u as Y,v as le,r as Le,$ as Pe,w as Re,a0 as Oe,B as Ue,a1 as Se,a2 as je}from"../chunks/vendor-ded167ac.js";const ye=K(new Map);let oe=K({name:"None",num:0}),fe=K("None"),ve=K(["None","None"]),me=K(0),ue=K(1),ie=K(50),Ae=pe([ue,ie],([t,s])=>s-t+1);const ze=pe([ue,ie],([t,s])=>{const e=[];for(let a=t;a<=s;a++){const d={num:a,name:""};e.push(d)}return e});function We(t){let s,e,a,d,n,r,o,f,l,_,M,h,V,p,B,I,k,i,b,y,D;return{c(){s=w("div"),e=w("div"),a=R(t[1]),d=L(),n=w("div"),r=w("button"),o=ae("svg"),f=ae("path"),l=L(),_=w("div"),M=w("div"),h=w("input"),p=L(),B=w("input"),I=L(),k=w("button"),i=ae("svg"),b=ae("path"),this.h()},l(C){s=N(C,"DIV",{class:!0});var T=q(s);e=N(T,"DIV",{});var m=q(e);a=O(m,t[1]),m.forEach(v),d=P(T),n=N(T,"DIV",{class:!0});var g=q(n);r=N(g,"BUTTON",{"aria-label":!0,class:!0});var E=q(r);o=re(E,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var j=q(o);f=re(j,"path",{d:!0,class:!0}),q(f).forEach(v),j.forEach(v),E.forEach(v),l=P(g),_=N(g,"DIV",{class:!0});var F=q(_);M=N(F,"DIV",{class:!0,style:!0});var W=q(M);h=N(W,"INPUT",{style:!0,"aria-hidden":!0,class:!0}),p=P(W),B=N(W,"INPUT",{type:!0,class:!0}),W.forEach(v),F.forEach(v),I=P(g),k=N(g,"BUTTON",{"aria-label":!0,class:!0});var G=q(k);i=re(G,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var Z=q(i);b=re(Z,"path",{d:!0,class:!0}),q(b).forEach(v),Z.forEach(v),G.forEach(v),g.forEach(v),T.forEach(v),this.h()},h(){c(f,"d","M0,0.5 L1,0.5"),c(f,"class","svelte-1dkq6vb"),c(o,"aria-hidden","true"),c(o,"viewBox","0 0 1 1"),c(o,"class","svelte-1dkq6vb"),c(r,"aria-label","Decrease the counter by one"),c(r,"class","svelte-1dkq6vb"),ce(h,"top","-100%"),c(h,"aria-hidden","true"),h.value=V=Math.floor(t[2]+1),c(h,"class","svelte-1dkq6vb"),c(B,"type","number"),c(B,"class","svelte-1dkq6vb"),c(M,"class","counter-digits svelte-1dkq6vb"),ce(M,"transform","translate(0, "+100*t[4]+"%)"),c(_,"class","counter-viewport svelte-1dkq6vb"),c(b,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),c(b,"class","svelte-1dkq6vb"),c(i,"aria-hidden","true"),c(i,"viewBox","0 0 1 1"),c(i,"class","svelte-1dkq6vb"),c(k,"aria-label","Increase the counter by one"),c(k,"class","svelte-1dkq6vb"),c(n,"class","counter svelte-1dkq6vb"),c(s,"class","container svelte-1dkq6vb")},m(C,T){A(C,s,T),u(s,e),u(e,a),u(s,d),u(s,n),u(n,r),u(r,o),u(o,f),u(n,l),u(n,_),u(_,M),u(M,h),u(M,p),u(M,B),J(B,t[3]),u(n,I),u(n,k),u(k,i),u(i,b),y||(D=[S(r,"click",t[6]),S(B,"input",t[7]),S(k,"click",t[8])],y=!0)},p(C,[T]){T&2&&Q(a,C[1]),T&4&&V!==(V=Math.floor(C[2]+1))&&h.value!==V&&(h.value=V),T&8&&de(B.value)!==C[3]&&J(B,C[3]),T&16&&ce(M,"transform","translate(0, "+100*C[4]+"%)")},i:z,o:z,d(C){C&&v(s),y=!1,_e(D)}}}function Ge(t,s){return t%s}function He(t){return t-1<1?1:--t}function Ke(t){return t+1>999?999:++t}function Fe(t,s,e){let a,d,n,r=z,o=()=>(r(),r=qe(f,p=>e(3,n=p)),f);t.$$.on_destroy.push(()=>r());let{count:f}=s;o();let{label:l}=s;const _=Ie();U(t,_,p=>e(2,d=p));const M=()=>he(f,n=He(n),n);function h(){n=de(this.value),f.set(n)}const V=()=>he(f,n=Ke(n),n);return t.$$set=p=>{"count"in p&&o(e(0,f=p.count)),"label"in p&&e(1,l=p.label)},t.$$.update=()=>{t.$$.dirty&8&&_.set(n),t.$$.dirty&4&&e(4,a=Ge(d,1))},[f,l,d,n,a,_,M,h,V]}class ke extends ${constructor(s){super();x(this,s,Fe,We,ee,{count:0,label:1})}}function Je(t){let s,e,a,d,n,r,o,f,l,_,M,h,V,p,B,I=!0,k,i;return{c(){s=w("div"),e=w("button"),a=R("CLICK ME TO ROLL"),n=L(),r=w("div"),o=w("span"),f=R("Drum Volume: "),l=R(t[1]),_=R("%"),M=L(),h=w("input"),V=L(),p=w("audio"),this.h()},l(b){s=N(b,"DIV",{class:!0});var y=q(s);e=N(y,"BUTTON",{class:!0});var D=q(e);a=O(D,"CLICK ME TO ROLL"),D.forEach(v),n=P(y),r=N(y,"DIV",{class:!0});var C=q(r);o=N(C,"SPAN",{});var T=q(o);f=O(T,"Drum Volume: "),l=O(T,t[1]),_=O(T,"%"),T.forEach(v),M=P(C),h=N(C,"INPUT",{type:!0,min:!0,max:!0,class:!0}),C.forEach(v),V=P(y),p=N(y,"AUDIO",{src:!0}),q(p).forEach(v),y.forEach(v),this.h()},h(){e.disabled=d=!t[2],c(e,"class","svelte-kvjbd"),c(h,"type","range"),c(h,"min","0"),c(h,"max","100"),c(h,"class","svelte-kvjbd"),c(r,"class","volume-container svelte-kvjbd"),De(p.src,B="drumroll.mp3")||c(p,"src",B),c(s,"class","roll-container svelte-kvjbd")},m(b,y){A(b,s,y),u(s,e),u(e,a),u(s,n),u(s,r),u(r,o),u(o,f),u(o,l),u(o,_),u(r,M),u(r,h),J(h,t[1]),u(s,V),u(s,p),t[7](p),k||(i=[S(e,"click",t[3]),S(h,"change",t[5]),S(h,"input",t[5]),S(h,"change",t[4]),S(p,"play",t[6]),S(p,"pause",t[6])],k=!0)},p(b,[y]){y&4&&d!==(d=!b[2])&&(e.disabled=d),y&2&&Q(l,b[1]),y&2&&J(h,b[1]),y&4&&I!==(I=b[2])&&p[I?"pause":"play"]()},i:z,o:z,d(b){b&&v(s),t[7](null),k=!1,_e(i)}}}function Qe(t,s,e){let a,d,n,r,o,f;U(t,ve,i=>e(8,a=i)),U(t,fe,i=>e(9,d=i)),U(t,ye,i=>e(10,n=i)),U(t,ue,i=>e(11,r=i)),U(t,ie,i=>e(12,o=i)),U(t,me,i=>e(13,f=i));let l,_=50,M=!0;function h(){M&&(V(),l.play(),p(),he(me,f++,f),oe.set({name:"None",num:0}))}function V(){e(0,l.volume=_/100,l)}function p(){setTimeout(()=>{const i=Math.floor(Math.random()*(o-r+1)+r);console.log(i);const b=n.get(i);b?(d!=b&&ve.set([d,a[0]]),oe.set({name:b,num:i}),fe.set(b)):oe.set({name:"None",num:i}),console.log("Winner: ",b)},3200)}function B(){_=de(this.value),e(1,_)}function I(){M=this.paused,e(2,M)}function k(i){Ce[i?"unshift":"push"](()=>{l=i,e(0,l)})}return[l,_,M,h,V,B,I,k]}class Xe extends ${constructor(s){super();x(this,s,Qe,Je,ee,{})}}function Ye(t){let s,e,a,d,n,r,o,f;return{c(){s=w("div"),e=w("span"),a=R(t[1]),d=L(),n=w("input"),this.h()},l(l){s=N(l,"DIV",{class:!0});var _=q(s);e=N(_,"SPAN",{class:!0});var M=q(e);a=O(M,t[1]),M.forEach(v),d=P(_),n=N(_,"INPUT",{"aria-label":!0,placeholder:!0,class:!0}),_.forEach(v),this.h()},h(){c(e,"class","svelte-1ytalfs"),c(n,"aria-label","Username"),c(n,"placeholder",""),c(n,"class","svelte-1ytalfs"),c(s,"class",r=""+(ge(t[2].num===t[1]?"winner":"name-container")+" svelte-1ytalfs"))},m(l,_){A(l,s,_),u(s,e),u(e,a),u(s,d),u(s,n),J(n,t[0]),o||(f=[S(n,"input",t[5]),S(n,"keydown",t[3])],o=!0)},p(l,[_]){_&2&&Q(a,l[1]),_&1&&n.value!==l[0]&&J(n,l[0]),_&6&&r!==(r=""+(ge(l[2].num===l[1]?"winner":"name-container")+" svelte-1ytalfs"))&&c(s,"class",r)},i:z,o:z,d(l){l&&v(s),o=!1,_e(f)}}}function Ze(t,s,e){let a,d;U(t,ye,l=>e(4,a=l)),U(t,oe,l=>e(2,d=l));let{num:n}=s,{name:r}=s;function o(l){(l.key==="Delete"||l.key==="Backspace")&&a.set(n,"")}Te(()=>{const l=a.get(n);l?e(0,r=l):a.set(n,"")});function f(){r=this.value,e(0,r)}return t.$$set=l=>{"num"in l&&e(1,n=l.num),"name"in l&&e(0,r=l.name)},t.$$.update=()=>{t.$$.dirty&19&&r&&a.set(n,r)},[r,n,d,o,a,f]}class $e extends ${constructor(s){super();x(this,s,Ze,Ye,ee,{num:1,name:0})}}function Ee(t,s,e){const a=t.slice();return a[6]=s[e],a}function Me(t,s,e){const a=t.slice();return a[9]=s[e],a}function we(t){let s,e=t[9]+"",a,d;return{c(){s=w("strong"),a=R(e),d=R("\xA0")},l(n){s=N(n,"STRONG",{});var r=q(s);a=O(r,e),r.forEach(v),d=O(n,"\xA0")},m(n,r){A(n,s,r),u(s,a),A(n,d,r)},p(n,r){r&8&&e!==(e=n[9]+"")&&Q(a,e)},d(n){n&&v(s),n&&v(d)}}}function Ne(t,s){let e,a,d;const n=[s[6]];let r={};for(let o=0;o<n.length;o+=1)r=Ue(r,n[o]);return a=new $e({props:r}),{key:t,first:null,c(){e=be(),te(a.$$.fragment),this.h()},l(o){e=be(),se(a.$$.fragment,o),this.h()},h(){this.first=e},m(o,f){A(o,e,f),ne(a,o,f),d=!0},p(o,f){s=o;const l=f&16?Ve(n,[Be(s[6])]):{};a.$set(l)},i(o){d||(X(a.$$.fragment,o),d=!0)},o(o){Y(a.$$.fragment,o),d=!1},d(o){o&&v(e),le(a,o)}}}function xe(t){let s,e,a,d,n,r,o,f,l,_,M,h,V,p,B,I,k=[],i=new Map,b,y=t[3],D=[];for(let m=0;m<y.length;m+=1)D[m]=we(Me(t,y,m));let C=t[4];const T=m=>m[6].num;for(let m=0;m<C.length;m+=1){let g=Ee(t,C,m),E=T(g);i.set(E,k[m]=Ne(E,g))}return{c(){s=w("div"),e=w("div"),a=w("span"),d=R("Roll #"),n=R(t[1]),r=L(),o=w("span"),f=R("Current Mod: "),l=w("strong"),_=R(t[2]),M=L(),h=w("span"),V=R(`Past Winners: [
			`);for(let m=0;m<D.length;m+=1)D[m].c();p=R(`
			]`),B=L(),I=w("div");for(let m=0;m<k.length;m+=1)k[m].c();this.h()},l(m){s=N(m,"DIV",{class:!0});var g=q(s);e=N(g,"DIV",{class:!0});var E=q(e);a=N(E,"SPAN",{class:!0});var j=q(a);d=O(j,"Roll #"),n=O(j,t[1]),j.forEach(v),r=P(E),o=N(E,"SPAN",{class:!0});var F=q(o);f=O(F,"Current Mod: "),l=N(F,"STRONG",{});var W=q(l);_=O(W,t[2]),W.forEach(v),F.forEach(v),M=P(E),h=N(E,"SPAN",{class:!0});var G=q(h);V=O(G,`Past Winners: [
			`);for(let H=0;H<D.length;H+=1)D[H].l(G);p=O(G,`
			]`),G.forEach(v),E.forEach(v),B=P(g),I=N(g,"DIV",{style:!0,class:!0});var Z=q(I);for(let H=0;H<k.length;H+=1)k[H].l(Z);Z.forEach(v),g.forEach(v),this.h()},h(){c(a,"class","svelte-ndqtur"),c(o,"class","svelte-ndqtur"),c(h,"class","svelte-ndqtur"),c(e,"class","stats svelte-ndqtur"),c(I,"style",t[0]),c(I,"class","svelte-ndqtur"),c(s,"class","container svelte-ndqtur")},m(m,g){A(m,s,g),u(s,e),u(e,a),u(a,d),u(a,n),u(e,r),u(e,o),u(o,f),u(o,l),u(l,_),u(e,M),u(e,h),u(h,V);for(let E=0;E<D.length;E+=1)D[E].m(h,null);u(h,p),u(s,B),u(s,I);for(let E=0;E<k.length;E+=1)k[E].m(I,null);b=!0},p(m,[g]){if((!b||g&2)&&Q(n,m[1]),(!b||g&4)&&Q(_,m[2]),g&8){y=m[3];let E;for(E=0;E<y.length;E+=1){const j=Me(m,y,E);D[E]?D[E].p(j,g):(D[E]=we(j),D[E].c(),D[E].m(h,p))}for(;E<D.length;E+=1)D[E].d(1);D.length=y.length}g&16&&(C=m[4],Le(),k=Pe(k,g,T,1,m,C,i,I,Se,Ne,null,Ee),Re()),(!b||g&1)&&c(I,"style",m[0])},i(m){if(!b){for(let g=0;g<C.length;g+=1)X(k[g]);b=!0}},o(m){for(let g=0;g<k.length;g+=1)Y(k[g]);b=!1},d(m){m&&v(s),Oe(D,m);for(let g=0;g<k.length;g+=1)k[g].d()}}}function et(t,s,e){let a,d,n,r,o;U(t,Ae,l=>e(5,a=l)),U(t,me,l=>e(1,d=l)),U(t,fe,l=>e(2,n=l)),U(t,ve,l=>e(3,r=l)),U(t,ze,l=>e(4,o=l));let f="";return t.$$.update=()=>{if(t.$$.dirty&32){const l=Math.ceil(a/5),_=Math.ceil(a/3);e(0,f=`--rows-lg: ${l}; --rows-md: ${_};`)}},[f,d,n,r,o,a]}class tt extends ${constructor(s){super();x(this,s,et,xe,ee,{})}}function st(t){let s,e,a,d,n,r,o,f,l,_,M,h,V,p,B,I,k;return _=new ke({props:{count:ue,label:"Min Number"}}),h=new ke({props:{count:ie,label:"Max Number"}}),p=new Xe({}),I=new tt({}),{c(){s=L(),e=w("section"),a=w("h1"),d=R("Rolly for Le Mod"),n=L(),r=w("h2"),o=R("Edit the numbers below to adjust the quantity"),f=L(),l=w("div"),te(_.$$.fragment),M=L(),te(h.$$.fragment),V=L(),te(p.$$.fragment),B=L(),te(I.$$.fragment),this.h()},l(i){je('[data-svelte="svelte-1anpopb"]',document.head).forEach(v),s=P(i),e=N(i,"SECTION",{class:!0});var y=q(e);a=N(y,"H1",{class:!0});var D=q(a);d=O(D,"Rolly for Le Mod"),D.forEach(v),n=P(y),r=N(y,"H2",{});var C=q(r);o=O(C,"Edit the numbers below to adjust the quantity"),C.forEach(v),f=P(y),l=N(y,"DIV",{class:!0});var T=q(l);se(_.$$.fragment,T),M=P(T),se(h.$$.fragment,T),T.forEach(v),V=P(y),se(p.$$.fragment,y),B=P(y),se(I.$$.fragment,y),y.forEach(v),this.h()},h(){document.title="Home",c(a,"class","svelte-5gdv5z"),c(l,"class","counters svelte-5gdv5z"),c(e,"class","svelte-5gdv5z")},m(i,b){A(i,s,b),A(i,e,b),u(e,a),u(a,d),u(e,n),u(e,r),u(r,o),u(e,f),u(e,l),ne(_,l,null),u(l,M),ne(h,l,null),u(e,V),ne(p,e,null),u(e,B),ne(I,e,null),k=!0},p:z,i(i){k||(X(_.$$.fragment,i),X(h.$$.fragment,i),X(p.$$.fragment,i),X(I.$$.fragment,i),k=!0)},o(i){Y(_.$$.fragment,i),Y(h.$$.fragment,i),Y(p.$$.fragment,i),Y(I.$$.fragment,i),k=!1},d(i){i&&v(s),i&&v(e),le(_),le(h),le(p),le(I)}}}const lt=!0;class at extends ${constructor(s){super();x(this,s,null,st,ee,{})}}export{at as default,lt as prerender};
