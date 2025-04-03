import{c as L,j as s,B,L as A}from"./client-BbWzF__1.js";import{e as P,c as D,d as T,a as z,b as E,C as k}from"./card-DjpNtxYb.js";import{S as R}from"./separator-DAAjRxWH.js";import{C as U}from"./checkbox-BJyijGEJ.js";import{u as $,L as H}from"./index-DdWgE4YF.js";import{u as O,r as V}from"./use-auth-Duu0b3vJ.js";import"./label-B8V1LF47.js";function q(){const e=L.c(37),{mutateAsync:l,isPending:a,error:r,data:i}=O();let h;e[0]===Symbol.for("react.memo_cache_sentinel")?(h={userName:"",email:"",password:""},e[0]=h):h=e[0];let o;e[1]!==i||e[2]!==r||e[3]!==l?(o=F=>{const{value:w}=F;console.log(w),l({value:w}),console.log("data",i),console.log("error",r)},e[1]=i,e[2]=r,e[3]=l,e[4]=o):o=e[4];let j;e[5]===Symbol.for("react.memo_cache_sentinel")?(j={onChange:V},e[5]=j):j=e[5];let b;e[6]!==o?(b={defaultValues:h,onSubmit:o,validators:j},e[6]=o,e[7]=b):b=e[7];const t=$(b);let g;e[8]===Symbol.for("react.memo_cache_sentinel")?(g=s.jsxs(P,{className:"space-y-1 pb-2",children:[s.jsx(D,{className:"text-2xl font-bold",children:"Sign in"}),s.jsx(T,{children:"Choose your preferred sign in method"})]}),e[8]=g):g=e[8];let y;e[9]===Symbol.for("react.memo_cache_sentinel")?(y=s.jsxs(B,{variant:"outline",className:"flex items-center gap-2  transition-colors",children:[s.jsx("img",{src:"/discord.svg",className:"size-6 ",alt:"discord"}),s.jsx("span",{className:"sr-only",children:"Discord"})]}),e[9]=y):y=e[9];let N;e[10]===Symbol.for("react.memo_cache_sentinel")?(N=s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y,s.jsxs(B,{variant:"outline",className:"flex items-center gap-2  transition-colors",children:[s.jsx("img",{src:"/roblox_light.svg",className:"size-20 invert",alt:"roblox"}),s.jsx("span",{className:" sr-only",children:"Roblox"})]})]}),e[10]=N):N=e[10];let S;e[11]===Symbol.for("react.memo_cache_sentinel")?(S=s.jsxs("div",{className:"flex items-center py-2",children:[s.jsx(R,{className:"flex-1"}),s.jsx("span",{className:"mx-2 text-xs text-muted-foreground font-medium",children:"OR"}),s.jsx(R,{className:"flex-1"})]}),e[11]=S):S=e[11];let n;e[12]!==t?(n=F=>{F.preventDefault(),t.handleSubmit(F)},e[12]=t,e[13]=n):n=e[13];let c;e[14]!==t.AppField?(c=s.jsxs("div",{className:"space-y-4",children:[s.jsx(t.AppField,{name:"userName",children:J}),s.jsx(t.AppField,{name:"email",children:I}),s.jsx(t.AppField,{name:"password",children:G})]}),e[14]=t.AppField,e[15]=c):c=e[15];let _;e[16]===Symbol.for("react.memo_cache_sentinel")?(_=s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(U,{id:"remember"}),s.jsx("label",{htmlFor:"remember",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Remember me"})]}),e[16]=_):_=e[16];let m;e[17]!==a?(m=a?s.jsx(H,{className:"size-5 animate-spin"}):"Sign up",e[17]=a,e[18]=m):m=e[18];let d;e[19]!==t.SubmitButton||e[20]!==m?(d=s.jsx(t.SubmitButton,{className:"w-full",children:m}),e[19]=t.SubmitButton,e[20]=m,e[21]=d):d=e[21];let x;e[22]!==t.AppForm||e[23]!==d?(x=s.jsx(t.AppForm,{children:d}),e[22]=t.AppForm,e[23]=d,e[24]=x):x=e[24];let p;e[25]!==x||e[26]!==n||e[27]!==c?(p=s.jsxs("form",{className:"space-y-4",onSubmit:n,children:[c,_,x]}),e[25]=x,e[26]=n,e[27]=c,e[28]=p):p=e[28];let f;e[29]!==r?(f=r&&s.jsx("p",{className:"text-sm text-red-500",children:r.message}),e[29]=r,e[30]=f):f=e[30];let u;e[31]!==p||e[32]!==f?(u=s.jsxs(z,{className:"space-y-4 pt-0",children:[N,S,p,f]}),e[31]=p,e[32]=f,e[33]=u):u=e[33];let v;e[34]===Symbol.for("react.memo_cache_sentinel")?(v=s.jsx(E,{className:"flex justify-center border-t pt-6",children:s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Don't have an account?"," ",s.jsx(A,{to:"/",className:"text-primary font-medium hover:underline transition-colors",children:"Sign up"})]})}),e[34]=v):v=e[34];let C;return e[35]!==u?(C=s.jsxs(k,{className:"border shadow-lg ",children:[g,u,v]}),e[35]=u,e[36]=C):C=e[36],C}function G(e){return s.jsx(e.PasswordField,{})}function I(e){return s.jsx(e.TextField,{label:"Email"})}function J(e){return s.jsx(e.TextField,{label:"Username"})}const ee=function(){const l=L.c(3);let a;l[0]===Symbol.for("react.memo_cache_sentinel")?(a=s.jsx("div",{children:s.jsx(q,{})}),l[0]=a):a=l[0];let r;l[1]===Symbol.for("react.memo_cache_sentinel")?(r=s.jsx(A,{to:"/",className:"text-primary hover:underline",children:"Terms of Service"}),l[1]=r):r=l[1];let i;return l[2]===Symbol.for("react.memo_cache_sentinel")?(i=s.jsxs("section",{className:"grid place-content-center h-full",children:[a,s.jsxs("p",{className:"mt-8 text-center text-xs text-gray-500",children:["By continuing, you agree to our"," ",r," ","and"," ",s.jsx(A,{to:"/",className:"text-primary hover:underline",children:"Privacy Policy"})]})]}),l[2]=i):i=l[2],i};export{ee as component};
