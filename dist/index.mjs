import d from"fs";import m from"path";const n=d,e=m;async function u(r,s){if(s!==void 0){const o=e.dirname(r),t=await n.promises.readdir(o),a=e.basename(r);if(s)return t.includes(a);const c=a.toLowerCase(),i=t.find(f=>f.toLowerCase()===c);return i?e.join(o,i):!1}return await n.promises.access(r).then(()=>!0,()=>!1)}var p=u;export{p as default};
