import{S as Ke,i as Qe,s as Ze,e as p,t as v,k as N,c as h,a as _,g as b,d,n as q,b as f,_ as Ne,f as B,H as s,I as ce,T as K,a4 as qe,h as be,R as ae,U as Ce,r as ht,u as me,w as _t,x as ue,V as At,J as vt,j as bt,m as mt,o as wt,p as Nt,q as qt,v as gt,l as Et,a0 as Ct,B as jt,A as Pt}from"../../chunks/vendor-52449c46.js";import{b as $e,d as Tt,u as yt}from"../../chunks/userstore-84659ed4.js";async function It({fetch:i,session:e}){const{jwt:t,validUntil:l}=e,a=Date.now()<l;if(t&&a){console.log("User is already validated");let c,n=[];const o=[i("api/reward/get"),i("api/user")],r=await Promise.all(o);if(r.every(u=>u.ok)){const u=r.map(E=>E.json()),m=await Promise.all(u);n=m[0].rewards,c=m[1]}else if(r[1].ok){const u=await r[1].json();return{props:{isConnected:!0,rewards:null,userInfo:u}}}else return{props:{isConnected:!0,rewards:null,userInfo:null}};return{props:{isConnected:!0,rewards:n,userInfo:c}}}return console.log("Invalid jwt token"),{props:{isConnected:!1}}}function Bt(i){let e,t,l,a,c,n,o,r,u,m,E,y,A,P,U,j,S,T,D,z,C;return{c(){e=p("div"),t=p("span"),l=p("b"),a=v("Inactive:"),c=N(),n=p("span"),o=p("b"),r=v("Title: "),u=v(i[0]),m=N(),E=p("span"),y=p("b"),A=v("Cost: "),P=v(i[2]),U=v(" channel points"),j=N(),S=p("div"),T=p("button"),D=v("Delete Reward"),this.h()},l(w){e=h(w,"DIV",{class:!0});var k=_(e);t=h(k,"SPAN",{class:!0});var Q=_(t);l=h(Q,"B",{class:!0});var R=_(l);a=b(R,"Inactive:"),R.forEach(d),Q.forEach(d),c=q(k),n=h(k,"SPAN",{class:!0});var V=_(n);o=h(V,"B",{});var O=_(o);r=b(O,"Title: "),O.forEach(d),u=b(V,i[0]),V.forEach(d),m=q(k),E=h(k,"SPAN",{class:!0});var W=_(E);y=h(W,"B",{});var Z=_(y);A=b(Z,"Cost: "),Z.forEach(d),P=b(W,i[2]),U=b(W," channel points"),W.forEach(d),k.forEach(d),j=q(w),S=h(w,"DIV",{class:!0});var de=_(S);T=h(de,"BUTTON",{class:!0});var L=_(T);D=b(L,"Delete Reward"),L.forEach(d),de.forEach(d),this.h()},h(){f(l,"class","inactive svelte-1mpo6sc"),f(t,"class","watching-text svelte-1mpo6sc"),f(n,"class","watching-text svelte-1mpo6sc"),f(E,"class","watching-text svelte-1mpo6sc"),f(e,"class","details svelte-1mpo6sc"),f(T,"class","svelte-1mpo6sc"),f(S,"class","btn-grp svelte-1mpo6sc")},m(w,k){B(w,e,k),s(e,t),s(t,l),s(l,a),s(e,c),s(e,n),s(n,o),s(o,r),s(n,u),s(e,m),s(e,E),s(E,y),s(y,A),s(E,P),s(E,U),B(w,j,k),B(w,S,k),s(S,T),s(T,D),z||(C=K(T,"click",qe(i[3])),z=!0)},p(w,k){k&1&&be(u,w[0]),k&4&&be(P,w[2])},d(w){w&&d(e),w&&d(j),w&&d(S),z=!1,C()}}}function Rt(i){let e,t,l,a,c,n,o,r,u,m,E,y,A,P,U,j,S,T,D,z;return{c(){e=p("div"),t=p("span"),l=p("b"),a=v("Active:"),c=N(),n=p("span"),o=p("b"),r=v("Title: "),u=v(i[0]),m=N(),E=p("span"),y=p("b"),A=v("Cost: "),P=v(i[2]),U=v(" channel points"),j=N(),S=p("button"),T=v("Stop Watching"),this.h()},l(C){e=h(C,"DIV",{class:!0});var w=_(e);t=h(w,"SPAN",{class:!0});var k=_(t);l=h(k,"B",{class:!0});var Q=_(l);a=b(Q,"Active:"),Q.forEach(d),k.forEach(d),c=q(w),n=h(w,"SPAN",{class:!0});var R=_(n);o=h(R,"B",{});var V=_(o);r=b(V,"Title: "),V.forEach(d),u=b(R,i[0]),R.forEach(d),m=q(w),E=h(w,"SPAN",{class:!0});var O=_(E);y=h(O,"B",{});var W=_(y);A=b(W,"Cost: "),W.forEach(d),P=b(O,i[2]),U=b(O," channel points"),O.forEach(d),w.forEach(d),j=q(C),S=h(C,"BUTTON",{class:!0});var Z=_(S);T=b(Z,"Stop Watching"),Z.forEach(d),this.h()},h(){f(l,"class","active svelte-1mpo6sc"),f(t,"class","watching-text svelte-1mpo6sc"),f(n,"class","watching-text svelte-1mpo6sc"),f(E,"class","watching-text svelte-1mpo6sc"),f(e,"class","details svelte-1mpo6sc"),f(S,"class","svelte-1mpo6sc")},m(C,w){B(C,e,w),s(e,t),s(t,l),s(l,a),s(e,c),s(e,n),s(n,o),s(o,r),s(n,u),s(e,m),s(e,E),s(E,y),s(y,A),s(E,P),s(E,U),B(C,j,w),B(C,S,w),s(S,T),D||(z=K(S,"click",qe(i[4])),D=!0)},p(C,w){w&1&&be(u,C[0]),w&4&&be(P,C[2])},d(C){C&&d(e),C&&d(j),C&&d(S),D=!1,z()}}}function Dt(i){let e,t,l,a,c;function n(u,m){return u[1]?Rt:Bt}let o=n(i),r=o(i);return{c(){e=p("div"),t=p("span"),l=v("Channel Reward:"),a=N(),r.c(),this.h()},l(u){e=h(u,"DIV",{class:!0});var m=_(e);t=h(m,"SPAN",{class:!0});var E=_(t);l=b(E,"Channel Reward:"),E.forEach(d),a=q(m),r.l(m),m.forEach(d),this.h()},h(){f(t,"class","group-name svelte-1mpo6sc"),f(e,"class",c=""+(Ne(`form-group ${i[1]?"active-group":""}`)+" svelte-1mpo6sc"))},m(u,m){B(u,e,m),s(e,t),s(t,l),s(e,a),r.m(e,null)},p(u,[m]){o===(o=n(u))&&r?r.p(u,m):(r.d(1),r=o(u),r&&(r.c(),r.m(e,null))),m&2&&c!==(c=""+(Ne(`form-group ${u[1]?"active-group":""}`)+" svelte-1mpo6sc"))&&f(e,"class",c)},i:ce,o:ce,d(u){u&&d(e),r.d()}}}function Ot(i,e,t){let{title:l}=e,{isActive:a}=e,{id:c}=e,{cost:n}=e;async function o(){confirm("Are you sure you want to delete this reward?")&&(console.log("Deleting reward"),await fetch("/api/reward/delete",{method:"POST",body:JSON.stringify({id:c})}),window.location.reload())}async function r(){console.log(`Deactivating reward ${l}`);const u={isActive:!1,rewardId:c};await fetch("/api/reward/update",{method:"POST",body:JSON.stringify(u)}),window.location.reload()}return i.$$set=u=>{"title"in u&&t(0,l=u.title),"isActive"in u&&t(1,a=u.isActive),"id"in u&&t(5,c=u.id),"cost"in u&&t(2,n=u.cost)},[l,a,n,o,r,c]}class Ut extends Ke{constructor(e){super();Qe(this,e,Ot,Dt,Ze,{title:0,isActive:1,id:5,cost:2})}}function kt(i,e,t){const l=i.slice();return l[13]=e[t],l}function Vt(i){let e,t,l;return{c(){e=p("div"),t=p("span"),l=v(`You are not able to use any channel point rewards. Only
						affiliates and partners are able to use this feature.`),this.h()},l(a){e=h(a,"DIV",{class:!0});var c=_(e);t=h(c,"SPAN",{class:!0});var n=_(t);l=b(n,`You are not able to use any channel point rewards. Only
						affiliates and partners are able to use this feature.`),n.forEach(d),c.forEach(d),this.h()},h(){f(t,"class","watching-text svelte-bujqr"),f(e,"class","form-group svelte-bujqr")},m(a,c){B(a,e,c),s(e,t),s(t,l)},p:ce,i:ce,o:ce,d(a){a&&d(e)}}}function Lt(i){let e,t,l=i[0],a=[];for(let n=0;n<l.length;n+=1)a[n]=St(kt(i,l,n));const c=n=>me(a[n],1,1,()=>{a[n]=null});return{c(){for(let n=0;n<a.length;n+=1)a[n].c();e=Et()},l(n){for(let o=0;o<a.length;o+=1)a[o].l(n);e=Et()},m(n,o){for(let r=0;r<a.length;r+=1)a[r].m(n,o);B(n,e,o),t=!0},p(n,o){if(o&1){l=n[0];let r;for(r=0;r<l.length;r+=1){const u=kt(n,l,r);a[r]?(a[r].p(u,o),ue(a[r],1)):(a[r]=St(u),a[r].c(),ue(a[r],1),a[r].m(e.parentNode,e))}for(ht(),r=l.length;r<a.length;r+=1)c(r);_t()}},i(n){if(!t){for(let o=0;o<l.length;o+=1)ue(a[o]);t=!0}},o(n){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)me(a[o]);t=!1},d(n){Ct(a,n),n&&d(e)}}}function St(i){let e,t;const l=[i[13]];let a={};for(let c=0;c<l.length;c+=1)a=jt(a,l[c]);return e=new Ut({props:a}),{c(){bt(e.$$.fragment)},l(c){mt(e.$$.fragment,c)},m(c,n){wt(e,c,n),t=!0},p(c,n){const o=n&1?Nt(l,[qt(c[13])]):{};e.$set(o)},i(c){t||(ue(e.$$.fragment,c),t=!0)},o(c){me(e.$$.fragment,c),t=!1},d(c){gt(e,c)}}}function Ft(i){let e,t;return{c(){e=p("span"),t=v("Not listening for bits"),this.h()},l(l){e=h(l,"SPAN",{class:!0});var a=_(e);t=b(a,"Not listening for bits"),a.forEach(d),this.h()},h(){f(e,"class","watching-text svelte-bujqr")},m(l,a){B(l,e,a),s(e,t)},p:ce,d(l){l&&d(e)}}}function Mt(i){let e,t,l;return{c(){e=p("span"),t=v(i[5]),l=v(" bits"),this.h()},l(a){e=h(a,"SPAN",{class:!0});var c=_(e);t=b(c,i[5]),l=b(c," bits"),c.forEach(d),this.h()},h(){f(e,"class","watching-text svelte-bujqr")},m(a,c){B(a,e,c),s(e,t),s(e,l)},p(a,c){c&32&&be(t,a[5])},d(a){a&&d(e)}}}function Jt(i){let e,t,l,a,c,n,o,r,u,m,E,y,A,P,U,j,S,T,D,z,C,w,k,Q,R,V,O,W,Z,de,L,je,le,Pe,H,Te,ne,Ie,Be,re,F,M,Re,X,fe,De,Oe,oe,Ue,$,Ve,ie,Le,Fe,J,pe,Me,Je,we,x,We,ge,Ee,he,Ye,xe;const et=[Lt,Vt],ee=[];function tt(g,I){return g[0]?0:1}F=tt(i),M=ee[F]=et[F](i);function st(g,I){return g[5]&&g[5]>-1?Mt:Ft}let ye=st(i),Y=ye(i);return{c(){e=p("div"),t=p("div"),l=p("span"),a=v("Fields labeled with "),c=p("span"),n=v("*"),o=v(" are required."),r=N(),u=p("span"),m=v("Created Rewards and Saved Settings"),E=N(),y=p("form"),A=p("div"),P=p("span"),U=v("Channel Point Reward:"),j=N(),S=p("label"),T=p("span"),D=p("span"),z=v("*"),C=v(" Reward Name:"),w=N(),k=p("input"),Q=N(),R=p("label"),V=p("span"),O=p("span"),W=v("*"),Z=v(" Point Cost:"),de=N(),L=p("input"),je=N(),le=p("label"),Pe=v(`Description
				`),H=p("textarea"),Te=N(),ne=p("button"),Ie=v("Create Reward"),Be=N(),re=p("div"),M.c(),Re=N(),X=p("div"),fe=p("span"),De=v("Bits:"),Oe=N(),oe=p("label"),Ue=v(`Minimum Cost:
				`),$=p("input"),Ve=N(),ie=p("button"),Le=v("Save Amount"),Fe=N(),J=p("div"),pe=p("span"),Me=v("Currently Watching Bits:"),Je=N(),Y.c(),we=N(),x=p("button"),We=v("Stop Listening"),this.h()},l(g){e=h(g,"DIV",{class:!0});var I=_(e);t=h(I,"DIV",{class:!0});var te=_(t);l=h(te,"SPAN",{class:!0});var ke=_(l);a=b(ke,"Fields labeled with "),c=h(ke,"SPAN",{class:!0});var at=_(c);n=b(at,"*"),at.forEach(d),o=b(ke," are required."),ke.forEach(d),r=q(te),u=h(te,"SPAN",{class:!0});var lt=_(u);m=b(lt,"Created Rewards and Saved Settings"),lt.forEach(d),te.forEach(d),E=q(I),y=h(I,"FORM",{class:!0});var se=_(y);A=h(se,"DIV",{class:!0});var G=_(A);P=h(G,"SPAN",{class:!0});var nt=_(P);U=b(nt,"Channel Point Reward:"),nt.forEach(d),j=q(G),S=h(G,"LABEL",{class:!0});var Se=_(S);T=h(Se,"SPAN",{});var ze=_(T);D=h(ze,"SPAN",{class:!0});var rt=_(D);z=b(rt,"*"),rt.forEach(d),C=b(ze," Reward Name:"),ze.forEach(d),w=q(Se),k=h(Se,"INPUT",{type:!0,placeholder:!0}),Se.forEach(d),Q=q(G),R=h(G,"LABEL",{class:!0});var Ae=_(R);V=h(Ae,"SPAN",{});var He=_(V);O=h(He,"SPAN",{class:!0});var ot=_(O);W=b(ot,"*"),ot.forEach(d),Z=b(He," Point Cost:"),He.forEach(d),de=q(Ae),L=h(Ae,"INPUT",{type:!0,placeholder:!0}),Ae.forEach(d),je=q(G),le=h(G,"LABEL",{class:!0});var Xe=_(le);Pe=b(Xe,`Description
				`),H=h(Xe,"TEXTAREA",{type:!0,placeholder:!0,class:!0}),_(H).forEach(d),Xe.forEach(d),Te=q(G),ne=h(G,"BUTTON",{class:!0});var it=_(ne);Ie=b(it,"Create Reward"),it.forEach(d),G.forEach(d),Be=q(se),re=h(se,"DIV",{class:!0});var ct=_(re);M.l(ct),ct.forEach(d),Re=q(se),X=h(se,"DIV",{class:!0});var _e=_(X);fe=h(_e,"SPAN",{class:!0});var ut=_(fe);De=b(ut,"Bits:"),ut.forEach(d),Oe=q(_e),oe=h(_e,"LABEL",{class:!0});var Ge=_(oe);Ue=b(Ge,`Minimum Cost:
				`),$=h(Ge,"INPUT",{type:!0,placeholder:!0}),Ge.forEach(d),Ve=q(_e),ie=h(_e,"BUTTON",{class:!0});var dt=_(ie);Le=b(dt,"Save Amount"),dt.forEach(d),_e.forEach(d),Fe=q(se),J=h(se,"DIV",{class:!0});var ve=_(J);pe=h(ve,"SPAN",{class:!0});var ft=_(pe);Me=b(ft,"Currently Watching Bits:"),ft.forEach(d),Je=q(ve),Y.l(ve),we=q(ve),x=h(ve,"BUTTON",{class:!0});var pt=_(x);We=b(pt,"Stop Listening"),pt.forEach(d),ve.forEach(d),se.forEach(d),I.forEach(d),this.h()},h(){f(c,"class","required svelte-bujqr"),f(l,"class","warning svelte-bujqr"),f(u,"class","warning svelte-bujqr"),f(t,"class","title-container svelte-bujqr"),f(P,"class","group-name svelte-bujqr"),f(D,"class","required svelte-bujqr"),f(k,"type","text"),f(k,"placeholder","ex. Modroll"),f(S,"class","svelte-bujqr"),f(O,"class","required svelte-bujqr"),f(L,"type","number"),f(L,"placeholder","ex. 50000"),f(R,"class","svelte-bujqr"),f(H,"type","text"),f(H,"placeholder","ex. Pick a number between 1-50 for a chance of mod"),f(H,"class","svelte-bujqr"),f(le,"class","svelte-bujqr"),f(ne,"class","svelte-bujqr"),f(A,"class","form-group svelte-bujqr"),f(re,"class","rewards svelte-bujqr"),f(fe,"class","group-name svelte-bujqr"),f($,"type","number"),f($,"placeholder","ex. 500"),f(oe,"class","svelte-bujqr"),f(ie,"class","svelte-bujqr"),f(X,"class","form-group svelte-bujqr"),f(pe,"class","group-name svelte-bujqr"),x.disabled=ge=i[5]===-1||i[5]===null,f(x,"class","svelte-bujqr"),f(J,"class",Ee=""+(Ne(`form-group ${i[5]===-1||i[5]===null?"inactive":"active"}`)+" svelte-bujqr")),f(y,"class","svelte-bujqr"),f(e,"class","settings-container svelte-bujqr")},m(g,I){B(g,e,I),s(e,t),s(t,l),s(l,a),s(l,c),s(c,n),s(l,o),s(t,r),s(t,u),s(u,m),s(e,E),s(e,y),s(y,A),s(A,P),s(P,U),s(A,j),s(A,S),s(S,T),s(T,D),s(D,z),s(T,C),s(S,w),s(S,k),ae(k,i[1]),s(A,Q),s(A,R),s(R,V),s(V,O),s(O,W),s(V,Z),s(R,de),s(R,L),ae(L,i[2]),s(A,je),s(A,le),s(le,Pe),s(le,H),ae(H,i[3]),s(A,Te),s(A,ne),s(ne,Ie),s(y,Be),s(y,re),ee[F].m(re,null),s(y,Re),s(y,X),s(X,fe),s(fe,De),s(X,Oe),s(X,oe),s(oe,Ue),s(oe,$),ae($,i[4]),s(X,Ve),s(X,ie),s(ie,Le),s(y,Fe),s(y,J),s(J,pe),s(pe,Me),s(J,Je),Y.m(J,null),s(J,we),s(J,x),s(x,We),he=!0,Ye||(xe=[K(k,"input",i[9]),K(L,"input",i[10]),K(H,"input",i[11]),K(ne,"click",qe(i[6])),K($,"input",i[12]),K(ie,"click",qe(i[7])),K(x,"click",i[8])],Ye=!0)},p(g,[I]){I&2&&k.value!==g[1]&&ae(k,g[1]),I&4&&Ce(L.value)!==g[2]&&ae(L,g[2]),I&8&&ae(H,g[3]);let te=F;F=tt(g),F===te?ee[F].p(g,I):(ht(),me(ee[te],1,1,()=>{ee[te]=null}),_t(),M=ee[F],M?M.p(g,I):(M=ee[F]=et[F](g),M.c()),ue(M,1),M.m(re,null)),I&16&&Ce($.value)!==g[4]&&ae($,g[4]),ye===(ye=st(g))&&Y?Y.p(g,I):(Y.d(1),Y=ye(g),Y&&(Y.c(),Y.m(J,we))),(!he||I&32&&ge!==(ge=g[5]===-1||g[5]===null))&&(x.disabled=ge),(!he||I&32&&Ee!==(Ee=""+(Ne(`form-group ${g[5]===-1||g[5]===null?"inactive":"active"}`)+" svelte-bujqr")))&&f(J,"class",Ee)},i(g){he||(ue(M),he=!0)},o(g){me(M),he=!1},d(g){g&&d(e),ee[F].d(),Y.d(),Ye=!1,At(xe)}}}function Wt(i,e,t){let l;vt(i,$e,j=>t(5,l=j));let{rewards:a}=e,c,n,o,r;async function u(){c&&n?(await fetch("/api/reward/create",{method:"POST",body:JSON.stringify({title:c,cost:n,prompt:o})}),window.location.reload()):alert("Fields 'Reward Name' and 'Point Cost' are required!")}function m(){$e.set(r),localStorage.set("bitAmount",l)}function E(){$e.set(-1)}function y(){c=this.value,t(1,c)}function A(){n=Ce(this.value),t(2,n)}function P(){o=this.value,t(3,o)}function U(){r=Ce(this.value),t(4,r)}return i.$$set=j=>{"rewards"in j&&t(0,a=j.rewards)},i.$$.update=()=>{i.$$.dirty&1&&a&&Tt.set(a.filter(j=>j.isActive))},[a,c,n,o,r,l,u,m,E,y,A,P,U]}class Yt extends Ke{constructor(e){super();Qe(this,e,Wt,Jt,Ze,{rewards:0})}}function zt(){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e=new Uint8Array(40);return window.crypto.getRandomValues(e),e=e.map(l=>i.charCodeAt(l%i.length)),String.fromCharCode.apply(null,e)}function Ht(i){let e,t;return{c(){e=p("a"),t=v("Connect to Twitch"),this.h()},l(l){e=h(l,"A",{class:!0,href:!0});var a=_(e);t=b(a,"Connect to Twitch"),a.forEach(d),this.h()},h(){f(e,"class","connection svelte-lk3pac"),f(e,"href",i[2])},m(l,a){B(l,e,a),s(e,t)},p(l,a){a&4&&f(e,"href",l[2])},d(l){l&&d(e)}}}function Xt(i){let e,t,l,a,c;function n(u,m){return u[3].displayName?Kt:Gt}let o=n(i),r=o(i);return{c(){r.c(),e=N(),t=p("button"),l=v("Disconnect from Twitch"),this.h()},l(u){r.l(u),e=q(u),t=h(u,"BUTTON",{class:!0});var m=_(t);l=b(m,"Disconnect from Twitch"),m.forEach(d),this.h()},h(){f(t,"class","svelte-lk3pac")},m(u,m){r.m(u,m),B(u,e,m),B(u,t,m),s(t,l),a||(c=K(t,"click",Zt),a=!0)},p(u,m){o===(o=n(u))&&r?r.p(u,m):(r.d(1),r=o(u),r&&(r.c(),r.m(e.parentNode,e)))},d(u){r.d(u),u&&d(e),u&&d(t),a=!1,c()}}}function Gt(i){let e,t;return{c(){e=p("span"),t=v("..."),this.h()},l(l){e=h(l,"SPAN",{class:!0});var a=_(e);t=b(a,"..."),a.forEach(d),this.h()},h(){f(e,"class","connection svelte-lk3pac")},m(l,a){B(l,e,a),s(e,t)},p:ce,d(l){l&&d(e)}}}function Kt(i){let e,t,l,a=i[3].displayName+"",c;return{c(){e=p("span"),t=v("Connected as: "),l=p("b"),c=v(a),this.h()},l(n){e=h(n,"SPAN",{class:!0});var o=_(e);t=b(o,"Connected as: "),l=h(o,"B",{class:!0});var r=_(l);c=b(r,a),r.forEach(d),o.forEach(d),this.h()},h(){f(l,"class","svelte-lk3pac"),f(e,"class","connection svelte-lk3pac")},m(n,o){B(n,e,o),s(e,t),s(e,l),s(l,c)},p(n,o){o&8&&a!==(a=n[3].displayName+"")&&be(c,a)},d(n){n&&d(e)}}}function Qt(i){let e,t,l;function a(o,r){return o[0]?Xt:Ht}let c=a(i),n=c(i);return t=new Yt({props:{rewards:i[1]}}),{c(){n.c(),e=N(),bt(t.$$.fragment)},l(o){n.l(o),e=q(o),mt(t.$$.fragment,o)},m(o,r){n.m(o,r),B(o,e,r),wt(t,o,r),l=!0},p(o,[r]){c===(c=a(o))&&n?n.p(o,r):(n.d(1),n=c(o),n&&(n.c(),n.m(e.parentNode,e)));const u={};r&2&&(u.rewards=o[1]),t.$set(u)},i(o){l||(ue(t.$$.fragment,o),l=!0)},o(o){me(t.$$.fragment,o),l=!1},d(o){n.d(o),o&&d(e),gt(t,o)}}}const ts=It;async function Zt(){const i=await fetch("/api/oauth/revoke",{method:"POST"});i.ok&&console.log(await i.json()),localStorage.clear(),window.location.reload()}function $t(i,e,t){let l;vt(i,yt,r=>t(3,l=r));let{userInfo:a}=e,{isConnected:c}=e,{rewards:n=[]}=e,o;return Pt(()=>{const r=window.location.host;let u=zt();localStorage.setItem("state",u),t(2,o=`https://id.twitch.tv/oauth2/authorize?client_id=63qvaq2ihoklqle1qc96gqa8290su5&redirect_uri=https://${r}/login&response_type=code&scope=bits:read+channel:manage:redemptions+channel:read:redemptions+user:read:email&force_verify=true&state=${u}`),yt.set(a)}),i.$$set=r=>{"userInfo"in r&&t(4,a=r.userInfo),"isConnected"in r&&t(0,c=r.isConnected),"rewards"in r&&t(1,n=r.rewards)},[c,n,o,l,a]}class ss extends Ke{constructor(e){super();Qe(this,e,$t,Qt,Ze,{userInfo:4,isConnected:0,rewards:1})}}export{ss as default,ts as load};
