class s extends Error{constructor(t){super(t),this.name="ShareError"}}async function y(o,t){if(window.__gradio_space__==null)throw new s("Must be on Spaces to share.");let e,r,n;if(t==="url"){const i=await fetch(o);e=await i.blob(),r=i.headers.get("content-type")||"",n=i.headers.get("content-disposition")||""}else e=d(o),r=o.split(";")[0].split(":")[1],n="file"+r.split("/")[1];const a=new File([e],n,{type:r}),c=await fetch("https://huggingface.co/uploads",{method:"POST",body:a,headers:{"Content-Type":a.type,"X-Requested-With":"XMLHttpRequest"}});if(!c.ok){if(c.headers.get("content-type")?.includes("application/json")){const i=await c.json();throw new s(`Upload failed: ${i.error}`)}throw new s("Upload failed.")}return await c.text()}function d(o){for(var t=o.split(","),e=t[0].match(/:(.*?);/)[1],r=atob(t[1]),n=r.length,a=new Uint8Array(n);n--;)a[n]=r.charCodeAt(n);return new Blob([a],{type:e})}function f(o){o.addEventListener("click",t);async function t(e){const r=e.composedPath(),[n]=r.filter(a=>a?.tagName==="BUTTON"&&a.classList.contains("copy_code_button"));if(n){let a=function(p){p.style.opacity="1",setTimeout(()=>{p.style.opacity="0"},2e3)};e.stopImmediatePropagation();const c=n.parentElement.innerText.trim(),l=Array.from(n.children)[1];await u(c)&&a(l)}}return{destroy(){o.removeEventListener("click",t)}}}async function u(o){let t=!1;if("clipboard"in navigator)await navigator.clipboard.writeText(o),t=!0;else{const e=document.createElement("textarea");e.value=o,e.style.position="absolute",e.style.left="-999999px",document.body.prepend(e),e.select();try{document.execCommand("copy"),t=!0}catch(r){console.error(r),t=!1}finally{e.remove()}}return t}export{s as S,f as c,y as u};
//# sourceMappingURL=utils-c3e3db58.js.map