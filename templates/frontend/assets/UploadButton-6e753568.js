import{S as R,e as V,s as W,m as J,o as K,F as L,g as m,h as U,G as M,p as B,w as E,u as S,k as C,H as N,B as O,C as P,a9 as Q,ab as T,ac as X,ad as Y,R as Z}from"./index-06f53ef9.js";import{a as p}from"./Button-d395c8c7.js";function x(t){let e;const n=t[16].default,u=Q(n,t,t[18],null);return{c(){u&&u.c()},m(s,d){u&&u.m(s,d),e=!0},p(s,d){u&&u.p&&(!e||d&262144)&&T(u,n,s,s[18],e?Y(n,s[18],d,null):X(s[18]),null)},i(s){e||(E(u,s),e=!0)},o(s){S(u,s),e=!1},d(s){u&&u.d(s)}}}function $(t){let e,n,u,s,d,r,o,f,c,b;return o=new p({props:{size:t[4],variant:t[7],elem_id:t[0],elem_classes:t[1],visible:t[2],scale:t[5],min_width:t[6],disabled:t[9],$$slots:{default:[x]},$$scope:{ctx:t}}}),o.$on("click",t[12]),{c(){e=J("input"),r=K(),L(o.$$.fragment),m(e,"class","hide svelte-ydeks8"),m(e,"accept",t[11]),m(e,"type","file"),e.multiple=n=t[3]==="multiple"||void 0,m(e,"webkitdirectory",u=t[3]==="directory"||void 0),m(e,"mozdirectory",s=t[3]==="directory"||void 0),m(e,"data-testid",d=t[8]+"-upload-button")},m(i,a){U(i,e,a),t[17](e),U(i,r,a),M(o,i,a),f=!0,c||(b=[B(e,"change",t[13]),B(e,"click",ee)],c=!0)},p(i,[a]){(!f||a&2048)&&m(e,"accept",i[11]),(!f||a&8&&n!==(n=i[3]==="multiple"||void 0))&&(e.multiple=n),(!f||a&8&&u!==(u=i[3]==="directory"||void 0))&&m(e,"webkitdirectory",u),(!f||a&8&&s!==(s=i[3]==="directory"||void 0))&&m(e,"mozdirectory",s),(!f||a&256&&d!==(d=i[8]+"-upload-button"))&&m(e,"data-testid",d);const _={};a&16&&(_.size=i[4]),a&128&&(_.variant=i[7]),a&1&&(_.elem_id=i[0]),a&2&&(_.elem_classes=i[1]),a&4&&(_.visible=i[2]),a&32&&(_.scale=i[5]),a&64&&(_.min_width=i[6]),a&512&&(_.disabled=i[9]),a&262144&&(_.$$scope={dirty:a,ctx:i}),o.$set(_)},i(i){f||(E(o.$$.fragment,i),f=!0)},o(i){S(o.$$.fragment,i),f=!1},d(i){i&&(C(e),C(r)),t[17](null),N(o,i),c=!1,O(b)}}}function ee(t){const e=t.target;e.value&&(e.value="")}function le(t,e,n){let{$$slots:u={},$$scope:s}=e,{elem_id:d=""}=e,{elem_classes:r=[]}=e,{visible:o=!0}=e,{file_count:f}=e,{file_types:c=[]}=e,{include_file_metadata:b=!0}=e,{size:i="lg"}=e,{scale:a=null}=e,{min_width:_=void 0}=e,{variant:k="secondary"}=e,{label:y}=e,{disabled:F=!1}=e,h;const j=P();let v;c==null?v=null:(c=c.map(l=>l.startsWith(".")?l:l+"/*"),v=c.join(", "));function q(){h.click()}function A(l){let g=Array.from(l);if(l.length){f==="single"&&(g=[l[0]]);var w=[];g.forEach((z,H)=>{w[H]=b?{name:z.name,size:z.size,data:"",blob:z}:z,w.filter(I=>I!==void 0).length===l.length&&j("load",f=="single"?w[0]:w)})}}function D(l){const g=l.target;g.files&&A(g.files)}function G(l){Z[l?"unshift":"push"](()=>{h=l,n(10,h)})}return t.$$set=l=>{"elem_id"in l&&n(0,d=l.elem_id),"elem_classes"in l&&n(1,r=l.elem_classes),"visible"in l&&n(2,o=l.visible),"file_count"in l&&n(3,f=l.file_count),"file_types"in l&&n(14,c=l.file_types),"include_file_metadata"in l&&n(15,b=l.include_file_metadata),"size"in l&&n(4,i=l.size),"scale"in l&&n(5,a=l.scale),"min_width"in l&&n(6,_=l.min_width),"variant"in l&&n(7,k=l.variant),"label"in l&&n(8,y=l.label),"disabled"in l&&n(9,F=l.disabled),"$$scope"in l&&n(18,s=l.$$scope)},[d,r,o,f,i,a,_,k,y,F,h,v,q,D,c,b,u,G,s]}class ne extends R{constructor(e){super(),V(this,e,le,$,W,{elem_id:0,elem_classes:1,visible:2,file_count:3,file_types:14,include_file_metadata:15,size:4,scale:5,min_width:6,variant:7,label:8,disabled:9})}}export{ne as U};
//# sourceMappingURL=UploadButton-6e753568.js.map
