import{S as V,e as W,s as Z,F as k,G as w,w as v,u as C,H as S,a0 as z,a1 as A,Z as D,ae as E,R as X,U as j,o as I,h as J,V as K,W as L,X as q,k as M}from"./index-ae752670.js";import{C as N}from"./Checkboxgroup-1875b96e.js";import{B as O}from"./Button-03dddead.js";import"./BlockTitle-4659fad9.js";import"./Info-c8893115.js";function P(l){let n,a,t,s,u,h;const c=[l[13]];let f={};for(let i=0;i<c.length;i+=1)f=D(f,c[i]);n=new E({props:f});function g(i){l[14](i)}function r(i){l[15](i)}let b={choices:l[5],label:l[9],info:l[10],show_label:l[11],disabled:!0};return l[0]!==void 0&&(b.value=l[0]),l[1]!==void 0&&(b.value_is_output=l[1]),t=new N({props:b}),X.push(()=>j(t,"value",g)),X.push(()=>j(t,"value_is_output",r)),t.$on("select",l[16]),t.$on("change",l[17]),t.$on("input",l[18]),{c(){k(n.$$.fragment),a=I(),k(t.$$.fragment)},m(i,_){w(n,i,_),J(i,a,_),w(t,i,_),h=!0},p(i,_){const d=_&8192?K(c,[L(i[13])]):{};n.$set(d);const o={};_&32&&(o.choices=i[5]),_&512&&(o.label=i[9]),_&1024&&(o.info=i[10]),_&2048&&(o.show_label=i[11]),!s&&_&1&&(s=!0,o.value=i[0],q(()=>s=!1)),!u&&_&2&&(u=!0,o.value_is_output=i[1],q(()=>u=!1)),t.$set(o)},i(i){h||(v(n.$$.fragment,i),v(t.$$.fragment,i),h=!0)},o(i){C(n.$$.fragment,i),C(t.$$.fragment,i),h=!1},d(i){i&&M(a),S(n,i),S(t,i)}}}function Q(l){let n,a;return n=new O({props:{visible:l[4],elem_id:l[2],elem_classes:l[3],type:"fieldset",container:l[6],scale:l[7],min_width:l[8],$$slots:{default:[P]},$$scope:{ctx:l}}}),{c(){k(n.$$.fragment)},m(t,s){w(n,t,s),a=!0},p(t,[s]){const u={};s&16&&(u.visible=t[4]),s&4&&(u.elem_id=t[2]),s&8&&(u.elem_classes=t[3]),s&64&&(u.container=t[6]),s&128&&(u.scale=t[7]),s&256&&(u.min_width=t[8]),s&1064483&&(u.$$scope={dirty:s,ctx:t}),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){C(n.$$.fragment,t),a=!1},d(t){S(n,t)}}}function T(l,n,a){let t;z(l,A,e=>a(19,t=e));let{elem_id:s=""}=n,{elem_classes:u=[]}=n,{visible:h=!0}=n,{value:c=[]}=n,{value_is_output:f=!1}=n,{choices:g}=n,{container:r=!0}=n,{scale:b=null}=n,{min_width:i=void 0}=n,{label:_=t("checkbox.checkbox_group")}=n,{info:d=void 0}=n,{show_label:o}=n,{gradio:m}=n,{loading_status:B}=n;function F(e){c=e,a(0,c)}function G(e){f=e,a(1,f)}const H=e=>m.dispatch("select",e.detail),R=()=>m.dispatch("change"),U=()=>m.dispatch("input");return l.$$set=e=>{"elem_id"in e&&a(2,s=e.elem_id),"elem_classes"in e&&a(3,u=e.elem_classes),"visible"in e&&a(4,h=e.visible),"value"in e&&a(0,c=e.value),"value_is_output"in e&&a(1,f=e.value_is_output),"choices"in e&&a(5,g=e.choices),"container"in e&&a(6,r=e.container),"scale"in e&&a(7,b=e.scale),"min_width"in e&&a(8,i=e.min_width),"label"in e&&a(9,_=e.label),"info"in e&&a(10,d=e.info),"show_label"in e&&a(11,o=e.show_label),"gradio"in e&&a(12,m=e.gradio),"loading_status"in e&&a(13,B=e.loading_status)},[c,f,s,u,h,g,r,b,i,_,d,o,m,B,F,G,H,R,U]}class Y extends V{constructor(n){super(),W(this,n,T,Q,Z,{elem_id:2,elem_classes:3,visible:4,value:0,value_is_output:1,choices:5,container:6,scale:7,min_width:8,label:9,info:10,show_label:11,gradio:12,loading_status:13})}}const ne=Y;export{ne as default};
//# sourceMappingURL=index-71ca34d4.js.map
