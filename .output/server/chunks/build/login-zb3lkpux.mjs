import { jsx, jsxs } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { Q } from '../../index.mjs';
import { u, x, N, g, b, m } from './card-tRlVEYGk.mjs';
import { x as x$1 } from './separator-t18pzJr7.mjs';
import { h } from './checkbox-aRDEe1GE.mjs';
import { Link } from '@tanstack/react-router';
import { H as He } from './index-CmPS2ZF8.mjs';
import { z, D } from './use-auth-BKNcJz6y.mjs';
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
  const e = c(36), { mutateAsync: r, isPending: s, isError: m$1, error: l } = z();
  let b$1;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (b$1 = { email: "", password: "" }, e[0] = b$1) : b$1 = e[0];
  let a;
  e[1] !== r ? (a = (w) => {
    const { value: P } = w;
    console.log(P), r({ value: P });
  }, e[1] = r, e[2] = a) : a = e[2];
  let g$1;
  e[3] === Symbol.for("react.memo_cache_sentinel") ? (g$1 = { onChange: D }, e[3] = g$1) : g$1 = e[3];
  let y;
  e[4] !== a ? (y = { defaultValues: b$1, onSubmit: a, validators: g$1 }, e[4] = a, e[5] = y) : y = e[5];
  const o = He(y);
  l && console.log("error");
  let N$1;
  e[6] === Symbol.for("react.memo_cache_sentinel") ? (N$1 = jsxs(u, { className: "space-y-1 pb-2", children: [jsx(x, { className: "text-2xl font-bold", children: "Sign in" }), jsx(N, { children: "Choose your preferred sign in method" })] }), e[6] = N$1) : N$1 = e[6];
  let S;
  e[7] === Symbol.for("react.memo_cache_sentinel") ? (S = jsxs(Q, { variant: "outline", className: "flex items-center gap-2  transition-colors", children: [jsx("img", { src: "/discord.svg", className: "size-6 ", alt: "discord" }), jsx("span", { className: "sr-only", children: "Discord" })] }), e[7] = S) : S = e[7];
  let _;
  e[8] === Symbol.for("react.memo_cache_sentinel") ? (_ = jsxs("div", { className: "grid grid-cols-2 gap-4", children: [S, jsxs(Q, { variant: "outline", className: "flex items-center gap-2  transition-colors", children: [jsx("img", { src: "/roblox_light.svg", className: "size-20 invert", alt: "roblox" }), jsx("span", { className: " sr-only", children: "Roblox" })] })] }), e[8] = _) : _ = e[8];
  let v;
  e[9] === Symbol.for("react.memo_cache_sentinel") ? (v = jsxs("div", { className: "flex items-center py-2", children: [jsx(x$1, { className: "flex-1" }), jsx("span", { className: "mx-2 text-xs text-muted-foreground font-medium", children: "OR" }), jsx(x$1, { className: "flex-1" })] }), e[9] = v) : v = e[9];
  let n;
  e[10] !== o ? (n = (w) => {
    w.preventDefault(), o.handleSubmit(w);
  }, e[10] = o, e[11] = n) : n = e[11];
  let c$1;
  e[12] !== o.AppField ? (c$1 = jsxs("div", { className: "space-y-4", children: [jsx(o.AppField, { name: "email", children: K }), jsx(o.AppField, { name: "password", children: J })] }), e[12] = o.AppField, e[13] = c$1) : c$1 = e[13];
  let C;
  e[14] === Symbol.for("react.memo_cache_sentinel") ? (C = jsxs("div", { className: "flex items-center space-x-2", children: [jsx(h, { id: "remember" }), jsx("label", { htmlFor: "remember", className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Remember me" })] }), e[14] = C) : C = e[14];
  let p;
  e[15] !== s ? (p = s ? jsx(Loader2, { className: "size-5 animate-spin" }) : "Sign in", e[15] = s, e[16] = p) : p = e[16];
  let d;
  e[17] !== o.SubmitButton || e[18] !== p ? (d = jsx(o.SubmitButton, { className: "w-full", children: p }), e[17] = o.SubmitButton, e[18] = p, e[19] = d) : d = e[19];
  let f;
  e[20] !== o.AppForm || e[21] !== d ? (f = jsx(o.AppForm, { children: d }), e[20] = o.AppForm, e[21] = d, e[22] = f) : f = e[22];
  let h$1;
  e[23] !== f || e[24] !== n || e[25] !== c$1 ? (h$1 = jsxs("form", { className: "space-y-4", onSubmit: n, children: [c$1, C, f] }), e[23] = f, e[24] = n, e[25] = c$1, e[26] = h$1) : h$1 = e[26];
  let u$1;
  e[27] !== (l == null ? void 0 : l.message) || e[28] !== m$1 ? (u$1 = m$1 && jsx("p", { className: "text-sm text-red-500", children: l == null ? void 0 : l.message }), e[27] = l == null ? void 0 : l.message, e[28] = m$1, e[29] = u$1) : u$1 = e[29];
  let x$2;
  e[30] !== h$1 || e[31] !== u$1 ? (x$2 = jsxs(g, { className: "space-y-4 pt-0", children: [_, v, h$1, u$1] }), e[30] = h$1, e[31] = u$1, e[32] = x$2) : x$2 = e[32];
  let F;
  e[33] === Symbol.for("react.memo_cache_sentinel") ? (F = jsx(b, { className: "flex justify-center border-t pt-6", children: jsxs("p", { className: "text-sm text-muted-foreground", children: ["Don't have an account?", " ", jsx(Link, { to: "/", className: "text-primary font-medium hover:underline transition-colors", children: "Sign up" })] }) }), e[33] = F) : F = e[33];
  let A;
  return e[34] !== x$2 ? (A = jsxs(m, { className: "border shadow-lg ", children: [N$1, x$2, F] }), e[34] = x$2, e[35] = A) : A = e[35], A;
}
function J(e) {
  return jsx(e.PasswordField, {});
}
function K(e) {
  return jsx(e.TextField, { label: "Email" });
}
const ke = function() {
  const r = c(3);
  let s;
  r[0] === Symbol.for("react.memo_cache_sentinel") ? (s = jsx("div", { children: jsx(G, {}) }), r[0] = s) : s = r[0];
  let m;
  r[1] === Symbol.for("react.memo_cache_sentinel") ? (m = jsx(Link, { to: "/", className: "text-primary hover:underline", children: "Terms of Service" }), r[1] = m) : m = r[1];
  let l;
  return r[2] === Symbol.for("react.memo_cache_sentinel") ? (l = jsxs("section", { className: "grid place-content-center h-full", children: [s, jsxs("p", { className: "mt-8 text-center text-xs text-gray-500", children: ["By continuing, you agree to our", " ", m, " ", "and", " ", jsx(Link, { to: "/", className: "text-primary hover:underline", children: "Privacy Policy" })] })] }), r[2] = l) : l = r[2], l;
};

export { ke as component };
//# sourceMappingURL=login-zb3lkpux.mjs.map
