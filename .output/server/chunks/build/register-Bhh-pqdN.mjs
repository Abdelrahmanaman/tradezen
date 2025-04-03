import { jsx, jsxs } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { Q } from '../../index.mjs';
import { u, x, N, g, b, m } from './card-tRlVEYGk.mjs';
import { x as x$1 } from './separator-t18pzJr7.mjs';
import { h } from './checkbox-aRDEe1GE.mjs';
import { Link } from '@tanstack/react-router';
import { H as He } from './index-CmPS2ZF8.mjs';
import { M, L } from './use-auth-BKNcJz6y.mjs';
import { Loader2 } from 'lucide-react';
import 'node:events';
import 'node:buffer';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import 'node:fs';
import '@tanstack/router-core';
import 'tiny-invariant';
import '@tanstack/start-server-core';
import '@tanstack/start-client-core';
import 'react';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-dialog';
import '@radix-ui/react-tooltip';
import 'motion/react';
import '@radix-ui/react-avatar';
import '@radix-ui/react-dropdown-menu';
import '@tanstack/react-query';
import 'next-themes';
import 'sonner';
import '@tanstack/react-query-devtools';
import '@tanstack/react-router-with-query';
import 'node:stream';
import 'isbot';
import 'react-dom/server';
import 'node:path';
import 'node:crypto';
import 'node:async_hooks';
import '@radix-ui/react-separator';
import '@radix-ui/react-checkbox';
import '@tanstack/react-form';
import './label-y2IlTGIT.mjs';
import '@radix-ui/react-select';
import '@radix-ui/react-label';
import '../_/index.module.mjs';
import 'cmdk';
import 'arktype';
import 'better-auth/client/plugins';
import 'better-auth/react';

function G() {
  const e = c(37), { mutateAsync: o, isPending: s, error: l, data: m$1 } = M();
  let b$1;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (b$1 = { userName: "", email: "", password: "" }, e[0] = b$1) : b$1 = e[0];
  let a;
  e[1] !== m$1 || e[2] !== l || e[3] !== o ? (a = (w) => {
    const { value: P } = w;
    console.log(P), o({ value: P }), console.log("data", m$1), console.log("error", l);
  }, e[1] = m$1, e[2] = l, e[3] = o, e[4] = a) : a = e[4];
  let g$1;
  e[5] === Symbol.for("react.memo_cache_sentinel") ? (g$1 = { onChange: L }, e[5] = g$1) : g$1 = e[5];
  let y;
  e[6] !== a ? (y = { defaultValues: b$1, onSubmit: a, validators: g$1 }, e[6] = a, e[7] = y) : y = e[7];
  const r = He(y);
  let N$1;
  e[8] === Symbol.for("react.memo_cache_sentinel") ? (N$1 = jsxs(u, { className: "space-y-1 pb-2", children: [jsx(x, { className: "text-2xl font-bold", children: "Sign in" }), jsx(N, { children: "Choose your preferred sign in method" })] }), e[8] = N$1) : N$1 = e[8];
  let S;
  e[9] === Symbol.for("react.memo_cache_sentinel") ? (S = jsxs(Q, { variant: "outline", className: "flex items-center gap-2  transition-colors", children: [jsx("img", { src: "/discord.svg", className: "size-6 ", alt: "discord" }), jsx("span", { className: "sr-only", children: "Discord" })] }), e[9] = S) : S = e[9];
  let _;
  e[10] === Symbol.for("react.memo_cache_sentinel") ? (_ = jsxs("div", { className: "grid grid-cols-2 gap-4", children: [S, jsxs(Q, { variant: "outline", className: "flex items-center gap-2  transition-colors", children: [jsx("img", { src: "/roblox_light.svg", className: "size-20 invert", alt: "roblox" }), jsx("span", { className: " sr-only", children: "Roblox" })] })] }), e[10] = _) : _ = e[10];
  let v;
  e[11] === Symbol.for("react.memo_cache_sentinel") ? (v = jsxs("div", { className: "flex items-center py-2", children: [jsx(x$1, { className: "flex-1" }), jsx("span", { className: "mx-2 text-xs text-muted-foreground font-medium", children: "OR" }), jsx(x$1, { className: "flex-1" })] }), e[11] = v) : v = e[11];
  let n;
  e[12] !== r ? (n = (w) => {
    w.preventDefault(), r.handleSubmit(w);
  }, e[12] = r, e[13] = n) : n = e[13];
  let c$1;
  e[14] !== r.AppField ? (c$1 = jsxs("div", { className: "space-y-4", children: [jsx(r.AppField, { name: "userName", children: K }), jsx(r.AppField, { name: "email", children: J }), jsx(r.AppField, { name: "password", children: I })] }), e[14] = r.AppField, e[15] = c$1) : c$1 = e[15];
  let F;
  e[16] === Symbol.for("react.memo_cache_sentinel") ? (F = jsxs("div", { className: "flex items-center space-x-2", children: [jsx(h, { id: "remember" }), jsx("label", { htmlFor: "remember", className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Remember me" })] }), e[16] = F) : F = e[16];
  let p;
  e[17] !== s ? (p = s ? jsx(Loader2, { className: "size-5 animate-spin" }) : "Sign up", e[17] = s, e[18] = p) : p = e[18];
  let d;
  e[19] !== r.SubmitButton || e[20] !== p ? (d = jsx(r.SubmitButton, { className: "w-full", children: p }), e[19] = r.SubmitButton, e[20] = p, e[21] = d) : d = e[21];
  let f;
  e[22] !== r.AppForm || e[23] !== d ? (f = jsx(r.AppForm, { children: d }), e[22] = r.AppForm, e[23] = d, e[24] = f) : f = e[24];
  let h$1;
  e[25] !== f || e[26] !== n || e[27] !== c$1 ? (h$1 = jsxs("form", { className: "space-y-4", onSubmit: n, children: [c$1, F, f] }), e[25] = f, e[26] = n, e[27] = c$1, e[28] = h$1) : h$1 = e[28];
  let u$1;
  e[29] !== l ? (u$1 = l && jsx("p", { className: "text-sm text-red-500", children: l.message }), e[29] = l, e[30] = u$1) : u$1 = e[30];
  let x$2;
  e[31] !== h$1 || e[32] !== u$1 ? (x$2 = jsxs(g, { className: "space-y-4 pt-0", children: [_, v, h$1, u$1] }), e[31] = h$1, e[32] = u$1, e[33] = x$2) : x$2 = e[33];
  let C;
  e[34] === Symbol.for("react.memo_cache_sentinel") ? (C = jsx(b, { className: "flex justify-center border-t pt-6", children: jsxs("p", { className: "text-sm text-muted-foreground", children: ["Don't have an account?", " ", jsx(Link, { to: "/", className: "text-primary font-medium hover:underline transition-colors", children: "Sign up" })] }) }), e[34] = C) : C = e[34];
  let A;
  return e[35] !== x$2 ? (A = jsxs(m, { className: "border shadow-lg ", children: [N$1, x$2, C] }), e[35] = x$2, e[36] = A) : A = e[36], A;
}
function I(e) {
  return jsx(e.PasswordField, {});
}
function J(e) {
  return jsx(e.TextField, { label: "Email" });
}
function K(e) {
  return jsx(e.TextField, { label: "Username" });
}
const Ue = function() {
  const o = c(3);
  let s;
  o[0] === Symbol.for("react.memo_cache_sentinel") ? (s = jsx("div", { children: jsx(G, {}) }), o[0] = s) : s = o[0];
  let l;
  o[1] === Symbol.for("react.memo_cache_sentinel") ? (l = jsx(Link, { to: "/", className: "text-primary hover:underline", children: "Terms of Service" }), o[1] = l) : l = o[1];
  let m;
  return o[2] === Symbol.for("react.memo_cache_sentinel") ? (m = jsxs("section", { className: "grid place-content-center h-full", children: [s, jsxs("p", { className: "mt-8 text-center text-xs text-gray-500", children: ["By continuing, you agree to our", " ", l, " ", "and", " ", jsx(Link, { to: "/", className: "text-primary hover:underline", children: "Privacy Policy" })] })] }), o[2] = m) : m = o[2], m;
};

export { Ue as component };
//# sourceMappingURL=register-Bhh-pqdN.mjs.map
