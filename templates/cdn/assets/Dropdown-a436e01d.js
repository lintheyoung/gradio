import{S as Y,e as Z,s as x,f as V,g as h,h as J,j as y,n as q,k as R,y as he,m as E,o as H,Q as me,p as U,w as j,r as $,u as T,v as ee,B as ge,C as we,I as P,K as L,ah as be,am as ie,O as pe,t as ne,N as A,x as te,R as W,U as Ne,F as X,G as F,an as se,X as Se,H as G,a0 as Ee,a1 as Te,al as ze}from"./index-ae752670.js";import{b as oe}from"./Button-03dddead.js";import{B as Je}from"./BlockTitle-4659fad9.js";function Re(t){let e,l;return{c(){e=V("svg"),l=V("path"),h(l,"d","M5 8l4 4 4-4z"),h(e,"class","dropdown-arrow svelte-p5edak"),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"width","18"),h(e,"height","18"),h(e,"viewBox","0 0 18 18")},m(r,s){J(r,e,s),y(e,l)},p:q,i:q,o:q,d(r){r&&R(e)}}}class Ue extends Y{constructor(e){super(),Z(this,e,null,Re,x,{})}}function He(t){let e,l;return{c(){e=V("svg"),l=V("path"),h(l,"d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"width","16"),h(e,"height","16"),h(e,"viewBox","0 0 24 24")},m(r,s){J(r,e,s),y(e,l)},p:q,i:q,o:q,d(r){r&&R(e)}}}class ve extends Y{constructor(e){super(),Z(this,e,null,He,x,{})}}function fe(t,e,l){const r=t.slice();return r[24]=e[l],r}function ue(t){let e,l,r,s,_,n=P(t[0]),o=[];for(let i=0;i<n.length;i+=1)o[i]=re(fe(t,n,i));return{c(){e=E("ul");for(let i=0;i<o.length;i+=1)o[i].c();h(e,"class","options svelte-1aonegi"),L(e,"top",t[7]),L(e,"bottom",t[8]),L(e,"max-height",`calc(${t[9]}px - var(--window-padding))`),L(e,"width",t[6]+"px")},m(i,f){J(i,e,f);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(e,null);t[21](e),r=!0,s||(_=U(e,"mousedown",be(t[20])),s=!0)},p(i,f){if(f&2053){n=P(i[0]);let u;for(u=0;u<n.length;u+=1){const g=fe(i,n,u);o[u]?o[u].p(g,f):(o[u]=re(g),o[u].c(),o[u].m(e,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=n.length}f&128&&L(e,"top",i[7]),f&256&&L(e,"bottom",i[8]),f&512&&L(e,"max-height",`calc(${i[9]}px - var(--window-padding))`),f&64&&L(e,"width",i[6]+"px")},i(i){r||(i&&he(()=>{r&&(l||(l=ie(e,oe,{duration:200,y:5},!0)),l.run(1))}),r=!0)},o(i){i&&(l||(l=ie(e,oe,{duration:200,y:5},!1)),l.run(0)),r=!1},d(i){i&&R(e),pe(o,i),t[21](null),i&&l&&l.end(),s=!1,_()}}}function re(t){let e,l,r,s=t[24]+"",_,n,o,i;return{c(){e=E("li"),l=E("span"),l.textContent="✓",r=H(),_=ne(s),n=H(),h(l,"class","inner-item svelte-1aonegi"),A(l,"hide",!t[11].includes(t[24])),h(e,"class","item svelte-1aonegi"),h(e,"role","button"),h(e,"data-value",o=t[24]),h(e,"aria-label",i=t[24]),h(e,"data-testid","dropdown-option"),A(e,"selected",t[11].includes(t[24])),A(e,"active",t[2]===t[24]),A(e,"bg-gray-100",t[2]===t[24]),A(e,"dark:bg-gray-600",t[2]===t[24])},m(f,u){J(f,e,u),y(e,l),y(e,r),y(e,_),y(e,n)},p(f,u){u&2049&&A(l,"hide",!f[11].includes(f[24])),u&1&&s!==(s=f[24]+"")&&te(_,s),u&1&&o!==(o=f[24])&&h(e,"data-value",o),u&1&&i!==(i=f[24])&&h(e,"aria-label",i),u&2049&&A(e,"selected",f[11].includes(f[24])),u&5&&A(e,"active",f[2]===f[24]),u&5&&A(e,"bg-gray-100",f[2]===f[24]),u&5&&A(e,"dark:bg-gray-600",f[2]===f[24])},d(f){f&&R(e)}}}function Ie(t){let e,l,r,s,_;he(t[18]);let n=t[1]&&!t[3]&&ue(t);return{c(){e=E("div"),l=H(),n&&n.c(),r=me(),h(e,"class","reference")},m(o,i){J(o,e,i),t[19](e),J(o,l,i),n&&n.m(o,i),J(o,r,i),s||(_=[U(window,"scroll",t[12]),U(window,"resize",t[18])],s=!0)},p(o,[i]){o[1]&&!o[3]?n?(n.p(o,i),i&10&&j(n,1)):(n=ue(o),n.c(),j(n,1),n.m(r.parentNode,r)):n&&($(),T(n,1,1,()=>{n=null}),ee())},i(o){j(n)},o(o){T(n)},d(o){o&&(R(e),R(l),R(r)),t[19](null),n&&n.d(o),s=!1,ge(_)}}}function Le(t,e,l){let r,{value:s=void 0}=e,{filtered:_}=e,{showOptions:n=!1}=e,{activeOption:o}=e,{disabled:i=!1}=e,f,u,g,k,O,z,D,B,m,p;function v(){const{top:b,bottom:C}=O.getBoundingClientRect();l(15,f=b),l(16,u=p-C)}let N=null;function I(){n&&(N!==null&&clearTimeout(N),N=setTimeout(()=>{v(),N=null},10))}const d=we();function K(){l(10,p=window.innerHeight)}function M(b){W[b?"unshift":"push"](()=>{O=b,l(4,O)})}const c=b=>d("change",b);function w(b){W[b?"unshift":"push"](()=>{z=b,l(5,z)})}return t.$$set=b=>{"value"in b&&l(14,s=b.value),"filtered"in b&&l(0,_=b.filtered),"showOptions"in b&&l(1,n=b.showOptions),"activeOption"in b&&l(2,o=b.activeOption),"disabled"in b&&l(3,i=b.disabled)},t.$$.update=()=>{if(t.$$.dirty&245810){if(n&&O){if(z&&typeof s=="string"){let C=z.querySelectorAll("li");for(const Q of Array.from(C))if(Q.getAttribute("data-value")===s){z?.scrollTo?.(0,Q.offsetTop);break}}v();const b=O.parentElement?.getBoundingClientRect();l(17,g=b?.height||0),l(6,k=b?.width||0)}u>f?(l(7,D=`${f}px`),l(9,m=u),l(8,B=null)):(l(8,B=`${u+g}px`),l(9,m=f-g),l(7,D=null))}t.$$.dirty&16384&&l(11,r=Array.isArray(s)?s:[s])},[_,n,o,i,O,z,k,D,B,m,p,r,I,d,s,f,u,g,K,M,c,w]}class Me extends Y{constructor(e){super(),Z(this,e,Le,Ie,x,{value:14,filtered:0,showOptions:1,activeOption:2,disabled:3})}}function ae(t,e,l){const r=t.slice();return r[35]=e[l],r}function qe(t){let e;return{c(){e=ne(t[1])},m(l,r){J(l,e,r)},p(l,r){r[0]&2&&te(e,l[1])},d(l){l&&R(e)}}}function ce(t){let e,l,r=P(t[0]),s=[];for(let n=0;n<r.length;n+=1)s[n]=de(ae(t,r,n));const _=n=>T(s[n],1,1,()=>{s[n]=null});return{c(){for(let n=0;n<s.length;n+=1)s[n].c();e=me()},m(n,o){for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(n,o);J(n,e,o),l=!0},p(n,o){if(o[0]&24593){r=P(n[0]);let i;for(i=0;i<r.length;i+=1){const f=ae(n,r,i);s[i]?(s[i].p(f,o),j(s[i],1)):(s[i]=de(f),s[i].c(),j(s[i],1),s[i].m(e.parentNode,e))}for($(),i=r.length;i<s.length;i+=1)_(i);ee()}},i(n){if(!l){for(let o=0;o<r.length;o+=1)j(s[o]);l=!0}},o(n){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)T(s[o]);l=!1},d(n){n&&R(e),pe(s,n)}}}function _e(t){let e,l,r,s;return l=new ve({}),{c(){e=E("div"),X(l.$$.fragment),h(e,"class","token-remove svelte-1xsj8nn"),h(e,"title",r=t[13]("common.remove")+" "+t[35]),A(e,"hidden",t[4])},m(_,n){J(_,e,n),F(l,e,null),s=!0},p(_,n){(!s||n[0]&8193&&r!==(r=_[13]("common.remove")+" "+_[35]))&&h(e,"title",r),(!s||n[0]&16)&&A(e,"hidden",_[4])},i(_){s||(j(l.$$.fragment,_),s=!0)},o(_){T(l.$$.fragment,_),s=!1},d(_){_&&R(e),G(l)}}}function de(t){let e,l,r=t[35]+"",s,_,n,o,i,f,u=!t[4]&&_e(t);function g(){return t[25](t[35])}return{c(){e=E("div"),l=E("span"),s=ne(r),_=H(),u&&u.c(),n=H(),h(l,"class","svelte-1xsj8nn"),h(e,"class","token svelte-1xsj8nn")},m(k,O){J(k,e,O),y(e,l),y(l,s),y(e,_),u&&u.m(e,null),y(e,n),o=!0,i||(f=U(e,"click",be(g)),i=!0)},p(k,O){t=k,(!o||O[0]&1)&&r!==(r=t[35]+"")&&te(s,r),t[4]?u&&($(),T(u,1,1,()=>{u=null}),ee()):u?(u.p(t,O),O[0]&16&&j(u,1)):(u=_e(t),u.c(),j(u,1),u.m(e,n))},i(k){o||(j(u),o=!0)},o(k){T(u),o=!1},d(k){k&&R(e),u&&u.d(),i=!1,f()}}}function Ke(t){let e,l,r,s,_,n=t[3]&&Array.isArray(t[0]),o,i,f,u,g,k,O,z,D,B,m,p,v,N,I;l=new Je({props:{show_label:t[5],info:t[2],$$slots:{default:[qe]},$$scope:{ctx:t}}});let d=n&&ce(t);k=new ve({}),D=new Ue({});function K(c){t[29](c)}let M={showOptions:t[11],filtered:t[10],activeOption:t[9],disabled:t[4]};return t[0]!==void 0&&(M.value=t[0]),m=new Me({props:M}),W.push(()=>Ne(m,"value",K)),m.$on("change",t[18]),{c(){e=E("label"),X(l.$$.fragment),r=H(),s=E("div"),_=E("div"),d&&d.c(),o=H(),i=E("div"),f=E("input"),u=H(),g=E("div"),X(k.$$.fragment),z=H(),X(D.$$.fragment),B=H(),X(m.$$.fragment),h(f,"class","border-none svelte-1xsj8nn"),f.disabled=t[4],h(f,"autocomplete","off"),A(f,"subdued",t[0]!==t[8]&&!t[7]),h(g,"class","token-remove remove-all svelte-1xsj8nn"),h(g,"title",O=t[13]("common.clear")),A(g,"hide",!t[3]||!t[0]?.length||t[4]),h(i,"class","secondary-wrap svelte-1xsj8nn"),h(_,"class","wrap-inner svelte-1xsj8nn"),A(_,"showOptions",t[11]),h(s,"class","wrap svelte-1xsj8nn"),h(e,"class","svelte-1xsj8nn"),A(e,"container",t[6])},m(c,w){J(c,e,w),F(l,e,null),y(e,r),y(e,s),y(s,_),d&&d.m(_,null),y(_,o),y(_,i),y(i,f),se(f,t[8]),t[27](f),y(i,u),y(i,g),F(k,g,null),y(i,z),F(D,i,null),y(s,B),F(m,s,null),v=!0,N||(I=[U(f,"input",t[26]),U(f,"keydown",t[19]),U(f,"keyup",t[28]),U(f,"blur",t[16]),U(f,"focus",t[17]),U(g,"click",t[15])],N=!0)},p(c,w){const b={};w[0]&32&&(b.show_label=c[5]),w[0]&4&&(b.info=c[2]),w[0]&2|w[1]&128&&(b.$$scope={dirty:w,ctx:c}),l.$set(b),w[0]&9&&(n=c[3]&&Array.isArray(c[0])),n?d?(d.p(c,w),w[0]&9&&j(d,1)):(d=ce(c),d.c(),j(d,1),d.m(_,o)):d&&($(),T(d,1,1,()=>{d=null}),ee()),(!v||w[0]&16)&&(f.disabled=c[4]),w[0]&256&&f.value!==c[8]&&se(f,c[8]),(!v||w[0]&385)&&A(f,"subdued",c[0]!==c[8]&&!c[7]),(!v||w[0]&8192&&O!==(O=c[13]("common.clear")))&&h(g,"title",O),(!v||w[0]&25)&&A(g,"hide",!c[3]||!c[0]?.length||c[4]),(!v||w[0]&2048)&&A(_,"showOptions",c[11]);const C={};w[0]&2048&&(C.showOptions=c[11]),w[0]&1024&&(C.filtered=c[10]),w[0]&512&&(C.activeOption=c[9]),w[0]&16&&(C.disabled=c[4]),!p&&w[0]&1&&(p=!0,C.value=c[0],Se(()=>p=!1)),m.$set(C),(!v||w[0]&64)&&A(e,"container",c[6])},i(c){v||(j(l.$$.fragment,c),j(d),j(k.$$.fragment,c),j(D.$$.fragment,c),j(m.$$.fragment,c),v=!0)},o(c){T(l.$$.fragment,c),T(d),T(k.$$.fragment,c),T(D.$$.fragment,c),T(m.$$.fragment,c),v=!1},d(c){c&&R(e),G(l),d&&d.d(),t[27](null),G(k),G(D),G(m),N=!1,ge(I)}}}function Xe(t,e,l){let r;Ee(t,Te,a=>l(13,r=a));let{label:s}=e,{info:_=void 0}=e,{value:n}=e,o=Array.isArray(n)?n.slice():n,{value_is_output:i=!1}=e,{multiselect:f=!1}=e,{max_choices:u}=e,{choices:g}=e,{disabled:k=!1}=e,{show_label:O}=e,{container:z=!0}=e,{allow_custom_value:D=!1}=e;const B=we();let m,p,v=!1,N,I=[],d=[];function K(){(g!==I||typeof m=="string")&&(l(24,I=g),l(10,d=g.filter(a=>m?a.toLowerCase().includes(m.toLowerCase()):a)))}function M(){B("change",n),i||B("input")}ze(()=>{l(20,i=!1)});function c(a){l(0,n),(!u||n.length<u)&&(n.push(a),B("select",{index:g.indexOf(a),value:a,selected:!0})),l(0,n)}function w(a){k||(l(0,n),l(0,n=n.filter(S=>S!==a))),B("select",{index:g.indexOf(a),value:a,selected:!1})}function b(a){l(0,n=[]),l(8,m=""),a.preventDefault()}let C=!1;function Q(a){C||(C=!0,f?l(8,m=""):D||l(8,m=n),l(11,v=!1),B("blur"),setTimeout(()=>{C=!1},100))}function ke(a){if(C)return a.target.blur();B("focus"),l(11,v=!0),l(10,d=g)}function Oe(a){const S=a.detail.target.dataset.value;D&&l(8,m=S),S!==void 0&&(f?(n?.includes(S)?w(S):c(S),l(8,m="")):(l(0,n=S),l(8,m=S),l(11,v=!1),B("select",{index:g.indexOf(S),value:S,selected:!0}),N.blur()))}function ye(a){if(a.key==="Enter"&&p!=null)f?f&&Array.isArray(n)&&(n.includes(p)?w(p):c(p),l(8,m="")):(n!==p&&(l(0,n=p),B("select",{index:g.indexOf(n),value:n,selected:!0})),l(8,m=p),l(11,v=!1),N.blur());else if(l(11,v=!0),a.key==="ArrowUp"||a.key==="ArrowDown"){p===null&&l(9,p=d[0]);const S=a.key==="ArrowUp"?-1:1,le=d.indexOf(p)+S;l(9,p=le<0?d[d.length-1]:le===d.length?d[0]:d[le]),a.preventDefault()}else a.key==="Escape"?l(11,v=!1):a.key==="Backspace"?f&&(!m||m==="")&&Array.isArray(n)&&n.length>0&&(w(n[n.length-1]),l(8,m="")):l(11,v=!0)}const Ae=a=>w(a);function je(){m=this.value,l(8,m),l(0,n)}function De(a){W[a?"unshift":"push"](()=>{N=a,l(12,N)})}const Be=()=>{D&&l(0,n=m)};function Ce(a){n=a,l(0,n)}return t.$$set=a=>{"label"in a&&l(1,s=a.label),"info"in a&&l(2,_=a.info),"value"in a&&l(0,n=a.value),"value_is_output"in a&&l(20,i=a.value_is_output),"multiselect"in a&&l(3,f=a.multiselect),"max_choices"in a&&l(21,u=a.max_choices),"choices"in a&&l(22,g=a.choices),"disabled"in a&&l(4,k=a.disabled),"show_label"in a&&l(5,O=a.show_label),"container"in a&&l(6,z=a.container),"allow_custom_value"in a&&l(7,D=a.allow_custom_value)},t.$$.update=()=>{t.$$.dirty[0]&1&&(typeof n=="string"||n===null)&&l(8,m=n),t.$$.dirty[0]&16777472&&K(),t.$$.dirty[0]&1536&&(!p||!d.includes(p))&&l(9,p=d.length?d[0]:null),t.$$.dirty[0]&8388609&&JSON.stringify(n)!=JSON.stringify(o)&&(l(23,o=Array.isArray(n)?n.slice():n),M()),t.$$.dirty[0]&8388609&&JSON.stringify(n)!=JSON.stringify(o)&&(B("change",n),l(23,o=Array.isArray(n)?n.slice():n))},[n,s,_,f,k,O,z,D,m,p,d,v,N,r,w,b,Q,ke,Oe,ye,i,u,g,o,I,Ae,je,De,Be,Ce]}class Ve extends Y{constructor(e){super(),Z(this,e,Xe,Ke,x,{label:1,info:2,value:0,value_is_output:20,multiselect:3,max_choices:21,choices:22,disabled:4,show_label:5,container:6,allow_custom_value:7},null,[-1,-1])}}export{Ve as D};
//# sourceMappingURL=Dropdown-a436e01d.js.map