import{S as C,e as F,s as G,F as o,G as h,w as d,u as g,H as w,al as H,Z as U,ae as V,o as W,h as Z,V as y,W as z,k as E}from"./index-ae752670.js";import{B as I}from"./Button-03dddead.js";import{T as K}from"./Table-bd7cb767.js";import"./utils-c3e3db58.js";import"./Upload-eff8f902.js";import"./StaticMarkdown-5aa31f1d.js";import"./dsv-576afacd.js";function L(n){let a,l,i,f;const _=[n[15],{border:!0}];let m={};for(let e=0;e<_.length;e+=1)m=U(m,_[e]);return a=new V({props:m}),i=new K({props:{label:n[7],row_count:n[6],col_count:n[5],values:n[0],headers:n[1],wrap:n[8],datatype:n[9],latex_delimiters:n[13],editable:!1,height:n[14]}}),i.$on("change",n[18]),i.$on("select",n[19]),{c(){o(a.$$.fragment),l=W(),o(i.$$.fragment)},m(e,s){h(a,e,s),Z(e,l,s),h(i,e,s),f=!0},p(e,s){const r=s&32768?y(_,[z(e[15]),_[1]]):{};a.$set(r);const u={};s&128&&(u.label=e[7]),s&64&&(u.row_count=e[6]),s&32&&(u.col_count=e[5]),s&1&&(u.values=e[0]),s&2&&(u.headers=e[1]),s&256&&(u.wrap=e[8]),s&512&&(u.datatype=e[9]),s&8192&&(u.latex_delimiters=e[13]),s&16384&&(u.height=e[14]),i.$set(u)},i(e){f||(d(a.$$.fragment,e),d(i.$$.fragment,e),f=!0)},o(e){g(a.$$.fragment,e),g(i.$$.fragment,e),f=!1},d(e){e&&E(l),w(a,e),w(i,e)}}}function M(n){let a,l;return a=new I({props:{visible:n[4],padding:!1,elem_id:n[2],elem_classes:n[3],container:!1,scale:n[10],min_width:n[11],allow_overflow:!1,$$slots:{default:[L]},$$scope:{ctx:n}}}),{c(){o(a.$$.fragment)},m(i,f){h(a,i,f),l=!0},p(i,[f]){const _={};f&16&&(_.visible=i[4]),f&4&&(_.elem_id=i[2]),f&8&&(_.elem_classes=i[3]),f&1024&&(_.scale=i[10]),f&2048&&(_.min_width=i[11]),f&2159587&&(_.$$scope={dirty:f,ctx:i}),a.$set(_)},i(i){l||(d(a.$$.fragment,i),l=!0)},o(i){g(a.$$.fragment,i),l=!1},d(i){w(a,i)}}}function P(n,a,l){let{headers:i=[]}=a,{elem_id:f=""}=a,{elem_classes:_=[]}=a,{visible:m=!0}=a,{value:e={data:[["","",""]],headers:["1","2","3"]}}=a,s=JSON.stringify(e),{value_is_output:r=!1}=a,{col_count:u}=a,{row_count:b}=a,{label:k=null}=a,{wrap:S}=a,{datatype:A}=a,{scale:J=null}=a,{min_width:N=void 0}=a,{gradio:c}=a,{latex_delimiters:O}=a,{height:B=void 0}=a,{loading_status:D}=a;function T(){c.dispatch("change"),r||c.dispatch("input")}H(()=>{l(16,r=!1)}),(Array.isArray(e)&&e?.[0]?.length===0||e.data?.[0]?.length===0)&&(e={data:[Array(u?.[0]||3).fill("")],headers:Array(u?.[0]||3).fill("").map((t,v)=>`${v+1}`)});const j=({detail:t})=>{l(0,e=t)},q=t=>c.dispatch("select",t.detail);return n.$$set=t=>{"headers"in t&&l(1,i=t.headers),"elem_id"in t&&l(2,f=t.elem_id),"elem_classes"in t&&l(3,_=t.elem_classes),"visible"in t&&l(4,m=t.visible),"value"in t&&l(0,e=t.value),"value_is_output"in t&&l(16,r=t.value_is_output),"col_count"in t&&l(5,u=t.col_count),"row_count"in t&&l(6,b=t.row_count),"label"in t&&l(7,k=t.label),"wrap"in t&&l(8,S=t.wrap),"datatype"in t&&l(9,A=t.datatype),"scale"in t&&l(10,J=t.scale),"min_width"in t&&l(11,N=t.min_width),"gradio"in t&&l(12,c=t.gradio),"latex_delimiters"in t&&l(13,O=t.latex_delimiters),"height"in t&&l(14,B=t.height),"loading_status"in t&&l(15,D=t.loading_status)},n.$$.update=()=>{n.$$.dirty&131073&&JSON.stringify(e)!==s&&(l(17,s=JSON.stringify(e)),T())},[e,i,f,_,m,u,b,k,S,A,J,N,c,O,B,D,r,s,j,q]}class Q extends C{constructor(a){super(),F(this,a,P,M,G,{headers:1,elem_id:2,elem_classes:3,visible:4,value:0,value_is_output:16,col_count:5,row_count:6,label:7,wrap:8,datatype:9,scale:10,min_width:11,gradio:12,latex_delimiters:13,height:14,loading_status:15})}}const te=Q;export{te as default};
//# sourceMappingURL=index-c0a14205.js.map
