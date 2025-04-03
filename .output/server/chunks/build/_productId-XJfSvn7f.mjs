import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { M as Me, Q, a as _, w as wo, A as Aa, G } from '../../index.mjs';
import { Heart, Share2, Flag, ExternalLink, Loader, Loader2, XIcon, Star } from 'lucide-react';
import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import { Link, useParams } from '@tanstack/react-router';
import { useInView } from 'react-intersection-observer';
import * as $ from '@radix-ui/react-dialog';
import { H as He, D as De$1 } from './index-CmPS2ZF8.mjs';
import { toast } from 'sonner';
import { createServerFn } from '@tanstack/start-client-core';
import 'node:events';
import 'node:buffer';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import 'node:fs';
import '@tanstack/router-core';
import 'tiny-invariant';
import '@tanstack/start-server-core';
import 'react';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-tooltip';
import 'motion/react';
import '@radix-ui/react-avatar';
import '@radix-ui/react-dropdown-menu';
import 'next-themes';
import '@tanstack/react-query-devtools';
import '@tanstack/react-router-with-query';
import 'node:stream';
import 'isbot';
import 'react-dom/server';
import 'node:path';
import 'node:crypto';
import 'node:async_hooks';
import '@tanstack/react-form';
import './label-y2IlTGIT.mjs';
import '@radix-ui/react-select';
import '@radix-ui/react-label';
import '../_/index.module.mjs';
import 'cmdk';
import 'arktype';

function ie(s) {
  const e = c(8), { children: t, className: l, onBottomReached: a } = s;
  let n;
  e[0] !== a ? (n = { rootMargin: "10px", onChange: (p) => {
    p && a();
  } }, e[0] = a, e[1] = n) : n = e[1];
  const { ref: o } = useInView(n);
  let r;
  e[2] !== o ? (r = jsx("div", { ref: o }), e[2] = o, e[3] = r) : r = e[3];
  let d;
  return e[4] !== t || e[5] !== l || e[6] !== r ? (d = jsxs("div", { className: l, children: [t, r] }), e[4] = t, e[5] = l, e[6] = r, e[7] = d) : d = e[7], d;
}
function se(s) {
  const e = c(35), { listings: t, nextId: l } = s;
  let a;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { from: "/adoptme/product/$productId" }, e[0] = a) : a = e[0];
  const { productId: n } = useParams(a);
  let o, r;
  e[1] !== n ? (o = ["listings", n], r = async (L) => {
    const { pageParam: z } = L;
    return await Aa({ data: { nextId: z, slug: n } });
  }, e[1] = n, e[2] = o, e[3] = r) : (o = e[2], r = e[3]);
  let d;
  e[4] !== t || e[5] !== l ? (d = [{ nextListings: t, nextCursor: l }], e[4] = t, e[5] = l, e[6] = d) : d = e[6];
  let p;
  e[7] !== l ? (p = [l], e[7] = l, e[8] = p) : p = e[8];
  let f;
  e[9] !== d || e[10] !== p ? (f = { pages: d, pageParams: p }, e[9] = d, e[10] = p, e[11] = f) : f = e[11];
  let _;
  e[12] !== l || e[13] !== o || e[14] !== r || e[15] !== f ? (_ = { queryKey: o, queryFn: r, getNextPageParam: re, initialPageParam: l, initialData: f }, e[12] = l, e[13] = o, e[14] = r, e[15] = f, e[16] = _) : _ = e[16];
  const { data: y, fetchNextPage: m, hasNextPage: x, isFetchingNextPage: S, isFetching: F, isError: v } = useInfiniteQuery(_);
  console.log(y);
  let u, h;
  e[17] === Symbol.for("react.memo_cache_sentinel") ? (u = jsx("h1", { className: "text-xl font-semibold mb-2", children: "Available Listings" }), h = jsx("div", { className: "flex items-center justify-between mb-4" }), e[17] = u, e[18] = h) : (u = e[17], h = e[18]);
  let g;
  e[19] !== m || e[20] !== x || e[21] !== F ? (g = () => x && !F && m(), e[19] = m, e[20] = x, e[21] = F, e[22] = g) : g = e[22];
  let b;
  e[23] !== (y == null ? void 0 : y.pages) ? (b = y == null ? void 0 : y.pages.flatMap(ne).map(ae), e[23] = y == null ? void 0 : y.pages, e[24] = b) : b = e[24];
  let N;
  e[25] !== x || e[26] !== S ? (N = S && x && jsx("div", { className: "w-full col-span-full", children: jsx(Loader, { className: "animate-spin mx-auto size-8" }) }), e[25] = x, e[26] = S, e[27] = N) : N = e[27];
  let k;
  e[28] !== v ? (k = v && jsx("div", { className: "w-full col-span-full", children: "Error loading listings" }), e[28] = v, e[29] = k) : k = e[29];
  let A;
  return e[30] !== g || e[31] !== b || e[32] !== N || e[33] !== k ? (A = jsx("div", { className: "border rounded-lg p-4 bg-zinc-800 text-white", children: jsxs("div", { className: "mb-6", children: [u, h, jsxs(ie, { onBottomReached: g, className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [b, N, k] })] }) }), e[30] = g, e[31] = b, e[32] = N, e[33] = k, e[34] = A) : A = e[34], A;
}
function ae(s) {
  return jsx(ce, { listing: s }, s.id);
}
function ne(s) {
  return s.nextListings;
}
function re(s) {
  return s.nextCursor;
}
const oe = (s) => {
  const e = c(2), { metadata: t } = s;
  if (!t) return null;
  let l;
  if (e[0] !== t) {
    const a = [];
    for (const n in t) if (t[n]) {
      const o = n.split("is").filter(me);
      for (const r of o) a.push(jsx(wo, { className: "bg-blue-500 hover:bg-blue-600 text-white text-[10px] px-1 py-0 mr-1", children: r }, r));
    }
    l = jsx(Fragment, { children: a }), e[0] = t, e[1] = l;
  } else l = e[1];
  return l;
}, ce = (s) => {
  const e = c(41), { listing: t } = s, l = t.id;
  let a;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = jsx("div", { className: "w-10 h-10 bg-gray-700 rounded-md overflow-hidden", children: jsx("img", { src: "/placeholder.svg?height=40&width=40", alt: "user", width: 40, height: 40, className: "w-full h-full object-cover" }) }), e[0] = a) : a = e[0];
  let n;
  e[1] !== t.age ? (n = jsxs("h3", { className: "font-medium text-sm", children: ["Item name + (", t.age, ")"] }), e[1] = t.age, e[2] = n) : n = e[2];
  let o;
  e[3] !== t.metadata ? (o = jsx("div", { className: "flex items-center gap-1 mt-0.5", children: jsx(oe, { metadata: t.metadata }) }), e[3] = t.metadata, e[4] = o) : o = e[4];
  let r;
  e[5] !== n || e[6] !== o ? (r = jsxs("div", { className: "flex items-center gap-2", children: [a, jsxs("div", { children: [n, o] })] }), e[5] = n, e[6] = o, e[7] = r) : r = e[7];
  let d;
  e[8] === Symbol.for("react.memo_cache_sentinel") ? (d = jsx(Q, { size: "sm", className: "bg-pink-500 hover:bg-pink-600 text-white text-xs h-7", children: "Make Offer" }), e[8] = d) : d = e[8];
  let p;
  e[9] !== r ? (p = jsxs("div", { className: "flex items-center justify-between mb-2", children: [r, d] }), e[9] = r, e[10] = p) : p = e[10];
  let f;
  e[11] !== t.seller.userName ? (f = jsx("span", { className: "font-medium text-zinc-300", children: t.seller.userName }), e[11] = t.seller.userName, e[12] = f) : f = e[12];
  let _;
  e[13] !== t.status ? (_ = t.status === "Online" ? jsx("span", { className: "text-green-500", children: "\u2022 Online" }) : jsxs("span", { children: ["\u2022 Last seen ", t.status.replace("Last seen ", "")] }), e[13] = t.status, e[14] = _) : _ = e[14];
  let y;
  e[15] !== f || e[16] !== _ ? (y = jsxs("div", { className: "mb-2 text-xs text-zinc-400 flex items-center gap-1", children: [f, _] }), e[15] = f, e[16] = _, e[17] = y) : y = e[17];
  let m, x;
  e[18] === Symbol.for("react.memo_cache_sentinel") ? (m = jsx(Star, { className: "w-3 h-3 text-yellow-400" }), x = jsx("span", { children: "user review " }), e[18] = m, e[19] = x) : (m = e[18], x = e[19]);
  let S;
  e[20] !== t.seller.reputationScore ? (S = jsxs("span", { className: "text-zinc-400", children: ["(", t.seller.reputationScore, ")"] }), e[20] = t.seller.reputationScore, e[21] = S) : S = e[21];
  let F;
  e[22] === Symbol.for("react.memo_cache_sentinel") ? (F = jsx("span", { className: "ml-2", children: "Trades:" }), e[22] = F) : F = e[22];
  let v;
  e[23] !== t.seller.tradeCount ? (v = jsx("span", { className: "font-medium text-zinc-300", children: t.seller.tradeCount }), e[23] = t.seller.tradeCount, e[24] = v) : v = e[24];
  let u;
  e[25] !== S || e[26] !== v ? (u = jsxs("div", { className: "mb-1 text-xs text-zinc-500 flex items-center gap-1", children: [m, x, S, F, v] }), e[25] = S, e[26] = v, e[27] = u) : u = e[27];
  let h;
  e[28] !== t.lookingFor ? (h = t.lookingFor && t.lookingFor.length > 0 && jsxs("div", { className: "mt-1", children: [jsx("span", { className: "text-xs text-zinc-400 block mb-1", children: "Looking For:" }), jsx("div", { className: "flex flex-wrap gap-1", children: t.lookingFor.map(de) })] }), e[28] = t.lookingFor, e[29] = h) : h = e[29];
  let g;
  e[30] !== t.createdAt ? (g = t.createdAt.toLocaleDateString(), e[30] = t.createdAt, e[31] = g) : g = e[31];
  let b;
  e[32] !== g ? (b = jsxs("div", { className: "text-xs text-zinc-500 mt-2", children: ["Listed ", g] }), e[32] = g, e[33] = b) : b = e[33];
  let N;
  return e[34] !== t.id || e[35] !== y || e[36] !== u || e[37] !== h || e[38] !== b || e[39] !== p ? (N = jsxs("div", { className: "border rounded-lg p-3 hover:border-pink-500 transition-colors bg-zinc-900", children: [p, y, u, h, b] }, l), e[34] = t.id, e[35] = y, e[36] = u, e[37] = h, e[38] = b, e[39] = p, e[40] = N) : N = e[40], N;
};
function me(s) {
  return s !== "";
}
function de(s) {
  return jsx(wo, { variant: "outline", className: "border-zinc-600 text-zinc-400 text-[10px] px-1 py-0", children: s }, s);
}
function fe(s) {
  const e = c(4);
  let t;
  e[0] !== s ? ({ ...t } = s, e[0] = s, e[1] = t) : t = e[1];
  let l;
  return e[2] !== t ? (l = jsx($.Root, { "data-slot": "dialog", ...t }), e[2] = t, e[3] = l) : l = e[3], l;
}
function pe(s) {
  const e = c(4);
  let t;
  e[0] !== s ? ({ ...t } = s, e[0] = s, e[1] = t) : t = e[1];
  let l;
  return e[2] !== t ? (l = jsx($.Trigger, { "data-slot": "dialog-trigger", ...t }), e[2] = t, e[3] = l) : l = e[3], l;
}
function ue(s) {
  const e = c(4);
  let t;
  e[0] !== s ? ({ ...t } = s, e[0] = s, e[1] = t) : t = e[1];
  let l;
  return e[2] !== t ? (l = jsx($.Portal, { "data-slot": "dialog-portal", ...t }), e[2] = t, e[3] = l) : l = e[3], l;
}
function he(s) {
  const e = c(8);
  let t, l;
  e[0] !== s ? ({ className: t, ...l } = s, e[0] = s, e[1] = t, e[2] = l) : (t = e[1], l = e[2]);
  let a;
  e[3] !== t ? (a = _("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", t), e[3] = t, e[4] = a) : a = e[4];
  let n;
  return e[5] !== l || e[6] !== a ? (n = jsx($.Overlay, { "data-slot": "dialog-overlay", className: a, ...l }), e[5] = l, e[6] = a, e[7] = n) : n = e[7], n;
}
function ge(s) {
  const e = c(12);
  let t, l, a;
  e[0] !== s ? ({ className: l, children: t, ...a } = s, e[0] = s, e[1] = t, e[2] = l, e[3] = a) : (t = e[1], l = e[2], a = e[3]);
  let n;
  e[4] === Symbol.for("react.memo_cache_sentinel") ? (n = jsx(he, {}), e[4] = n) : n = e[4];
  let o;
  e[5] !== l ? (o = _("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border  px-6 p shadow-lg duration-200 sm:max-w-lg", l), e[5] = l, e[6] = o) : o = e[6];
  let r;
  e[7] === Symbol.for("react.memo_cache_sentinel") ? (r = jsx("div", { className: "sticky flex justify-end h-fit  top-4 right-4 z-20", children: jsxs($.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground  rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4  bg-yellow-900", children: [jsx(XIcon, {}), jsx("span", { className: "sr-only", children: "Close" })] }) }), e[7] = r) : r = e[7];
  let d;
  return e[8] !== t || e[9] !== a || e[10] !== o ? (d = jsxs(ue, { "data-slot": "dialog-portal", children: [n, jsxs($.Content, { "data-slot": "dialog-content", className: o, ...a, children: [r, t] })] }), e[8] = t, e[9] = a, e[10] = o, e[11] = d) : d = e[11], d;
}
function be(s) {
  const e = c(8);
  let t, l;
  e[0] !== s ? ({ className: t, ...l } = s, e[0] = s, e[1] = t, e[2] = l) : (t = e[1], l = e[2]);
  let a;
  e[3] !== t ? (a = _("flex flex-col gap-2 text-center sm:text-left", t), e[3] = t, e[4] = a) : a = e[4];
  let n;
  return e[5] !== l || e[6] !== a ? (n = jsx("div", { "data-slot": "dialog-header", className: a, ...l }), e[5] = l, e[6] = a, e[7] = n) : n = e[7], n;
}
function xe(s) {
  const e = c(8);
  let t, l;
  e[0] !== s ? ({ className: t, ...l } = s, e[0] = s, e[1] = t, e[2] = l) : (t = e[1], l = e[2]);
  let a;
  e[3] !== t ? (a = _("text-lg leading-none font-semibold", t), e[3] = t, e[4] = a) : a = e[4];
  let n;
  return e[5] !== l || e[6] !== a ? (n = jsx($.Title, { "data-slot": "dialog-title", className: a, ...l }), e[5] = l, e[6] = a, e[7] = n) : n = e[7], n;
}
function Ne(s) {
  const e = c(8);
  let t, l;
  e[0] !== s ? ({ className: t, ...l } = s, e[0] = s, e[1] = t, e[2] = l) : (t = e[1], l = e[2]);
  let a;
  e[3] !== t ? (a = _("text-muted-foreground text-sm", t), e[3] = t, e[4] = a) : a = e[4];
  let n;
  return e[5] !== l || e[6] !== a ? (n = jsx($.Description, { "data-slot": "dialog-description", className: a, ...l }), e[5] = l, e[6] = a, e[7] = n) : n = e[7], n;
}
const ve = G("app_hooks_use-add-listing_tsx--addListing_createServerFn_handler", "/_server"), _e = createServerFn({ method: "POST" }).validator((s) => De$1.assert(s)).handler(ve);
function ye() {
  const s = c(1);
  let e;
  return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = { mutationFn: we, onSuccess: Fe, onError: Se }, s[0] = e) : e = s[0], useMutation(e);
}
function Se(s) {
  toast.error(s.message);
}
function Fe() {
  toast.success("Listing added successfully");
}
function we(s) {
  return _e({ data: s });
}
function ke(s) {
  const e = c(43), { itemId: t } = s;
  let l;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (l = { from: "/adoptme/product/$productId" }, e[0] = l) : l = e[0];
  const { productId: a } = useParams(l), { mutateAsync: n, isPending: o } = ye();
  let r;
  e[1] === Symbol.for("react.memo_cache_sentinel") ? (r = [], e[1] = r) : r = e[1];
  let d;
  e[2] !== t || e[3] !== a ? (d = { itemId: t, amount: 1, isFlyable: false, isRideable: false, isNeon: false, isMegaNeon: false, age: "Full-Grown", lookingFor: r, slug: a }, e[2] = t, e[3] = a, e[4] = d) : d = e[4];
  const p = d;
  let f;
  e[5] !== n ? (f = (C) => {
    const { value: D } = C;
    console.log("HERE YOU GO", D), n(D);
  }, e[5] = n, e[6] = f) : f = e[6];
  let _;
  e[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = { onSubmit: De$1 }, e[7] = _) : _ = e[7];
  let y;
  e[8] !== p || e[9] !== f ? (y = { defaultValues: p, onSubmit: f, validators: _ }, e[8] = p, e[9] = f, e[10] = y) : y = e[10];
  const m = He(y);
  let x;
  e[11] === Symbol.for("react.memo_cache_sentinel") ? (x = jsx(pe, { asChild: true, children: jsx(Q, { variant: "outline", children: "List Trade" }) }), e[11] = x) : x = e[11];
  let S;
  e[12] === Symbol.for("react.memo_cache_sentinel") ? (S = jsx("div", { className: "flex flex-col items-center gap-2", children: jsxs(be, { children: [jsx(xe, { className: "sm:text-center", children: "List Your Adopt Me Trade" }), jsx(Ne, { className: "sm:text-center", children: "Provide details about the Adopt Me pet or item you are offering." })] }) }), e[12] = S) : S = e[12];
  let F;
  e[13] !== m ? (F = (C) => {
    C.preventDefault(), C.stopPropagation(), m.handleSubmit();
  }, e[13] = m, e[14] = F) : F = e[14];
  let v;
  e[15] !== m.AppField ? (v = jsx("div", { className: "*:not-first:mt-2", children: jsx(m.AppField, { name: "amount", children: Ie }) }), e[15] = m.AppField, e[16] = v) : v = e[16];
  let u;
  e[17] !== m.AppField ? (u = jsx("div", { className: "*:not-first:mt-2", children: jsx(m.AppField, { name: "age", children: Pe }) }), e[17] = m.AppField, e[18] = u) : u = e[18];
  let h;
  e[19] !== m.AppField ? (h = jsxs("div", { className: "flex items-center gap-4", children: [jsx(m.AppField, { name: "isFlyable", children: Ce }), jsx(m.AppField, { name: "isRideable", children: ze })] }), e[19] = m.AppField, e[20] = h) : h = e[20];
  let g;
  e[21] !== m.AppField ? (g = jsxs("div", { className: "flex items-center gap-4", children: [jsx(m.AppField, { name: "isNeon", children: $e }), jsx(m.AppField, { name: "isMegaNeon", children: Le })] }), e[21] = m.AppField, e[22] = g) : g = e[22];
  let b;
  e[23] !== m.AppField ? (b = jsx("div", { className: "*:not-first:mt-2", children: jsx(m.AppField, { name: "lookingFor", children: Ae }) }), e[23] = m.AppField, e[24] = b) : b = e[24];
  let N;
  e[25] !== v || e[26] !== u || e[27] !== h || e[28] !== g || e[29] !== b ? (N = jsxs("div", { className: "space-y-4", children: [v, u, h, g, b] }), e[25] = v, e[26] = u, e[27] = h, e[28] = g, e[29] = b, e[30] = N) : N = e[30];
  let k;
  e[31] !== o ? (k = o ? jsx(Loader2, { className: "animate-spin" }) : "List Trade", e[31] = o, e[32] = k) : k = e[32];
  let A;
  e[33] !== m.SubmitButton || e[34] !== k ? (A = jsx(m.SubmitButton, { className: "w-full mb-6", children: k }), e[33] = m.SubmitButton, e[34] = k, e[35] = A) : A = e[35];
  let L;
  e[36] !== m.AppForm || e[37] !== A ? (L = jsx(m.AppForm, { children: A }), e[36] = m.AppForm, e[37] = A, e[38] = L) : L = e[38];
  let z;
  return e[39] !== F || e[40] !== N || e[41] !== L ? (z = jsxs(fe, { children: [x, jsxs(ge, { className: "lg:w-96 max-h-[40rem] lg:max-h-[47rem] lg:h-full overflow-x-auto ", children: [S, jsxs("form", { className: "space-y-5", onSubmit: F, children: [N, L] })] })] }), e[39] = F, e[40] = N, e[41] = L, e[42] = z) : z = e[42], z;
}
function Ae(s) {
  return jsx(s.SelectSearch, {});
}
function Le(s) {
  return jsx(s.CustomCheckbox, { label: "M", className: "has-checked:bg-indigo-800 hover:bg-indigo-800", toolTip: "Mega Neon" });
}
function $e(s) {
  return jsx(s.CustomCheckbox, { label: "N", className: "has-checked:bg-green-500 hover:bg-green-500", toolTip: "Neon" });
}
function ze(s) {
  return jsx(s.CustomCheckbox, { label: "R", className: "has-checked:bg-pink-500 hover:bg-pink-500", toolTip: "Rideable" });
}
function Ce(s) {
  return jsx(s.CustomCheckbox, { label: "F", className: "has-checked:bg-blue-500 hover:bg-blue-500", toolTip: "Flying" });
}
function Pe(s) {
  return jsx(s.CustomSelect, {});
}
function Ie(s) {
  return jsx(s.TextField, { label: "Amount", placeholder: "Enter the amount", type: "number", inputMode: "numeric" });
}
function De(s) {
  var _a;
  const e = c(34), { item: t } = s;
  let l;
  e[0] !== t.imageUrl || e[1] !== t.name ? (l = jsx("div", { className: "aspect-square bg-zinc-800 rounded-md mb-4 relative overflow-hidden", children: jsx("img", { src: t.imageUrl, alt: t.name, width: 400, height: 400, className: "w-full h-full object-contain" }) }), e[0] = t.imageUrl, e[1] = t.name, e[2] = l) : l = e[2];
  let a;
  e[3] === Symbol.for("react.memo_cache_sentinel") ? (a = jsxs(Q, { variant: "outline", size: "sm", className: "text-xs", children: [jsx(Heart, { className: "w-3 h-3 mr-1" }), "Favorite"] }), e[3] = a) : a = e[3];
  let n;
  e[4] === Symbol.for("react.memo_cache_sentinel") ? (n = jsxs(Q, { variant: "outline", size: "sm", className: "text-xs", children: [jsx(Share2, { className: "w-3 h-3 mr-1" }), "Share"] }), e[4] = n) : n = e[4];
  let o;
  e[5] === Symbol.for("react.memo_cache_sentinel") ? (o = jsxs(Q, { variant: "outline", size: "sm", className: "text-xs", children: [jsx(Flag, { className: "w-3 h-3 mr-1" }), "Report"] }), e[5] = o) : o = e[5];
  let r;
  e[6] !== t.id ? (r = jsxs("div", { className: "flex items-center justify-between mb-4", children: [a, n, o, jsx(ke, { itemId: t.id })] }), e[6] = t.id, e[7] = r) : r = e[7];
  let d;
  e[8] !== t.id ? (d = jsxs("span", { children: ["Product ID: ", t.id] }), e[8] = t.id, e[9] = d) : d = e[9];
  let p;
  e[10] !== t.description ? (p = jsx("p", { children: t.description }), e[10] = t.description, e[11] = p) : p = e[11];
  let f;
  e[12] !== d || e[13] !== p ? (f = jsxs("div", { className: "text-xs text-gray-500 mb-4 text-left", children: [d, p] }), e[12] = d, e[13] = p, e[14] = f) : f = e[14];
  let _;
  e[15] === Symbol.for("react.memo_cache_sentinel") ? (_ = jsx("h3", { className: "font-medium mb-2", children: "Quick Stats" }), e[15] = _) : _ = e[15];
  let y;
  e[16] === Symbol.for("react.memo_cache_sentinel") ? (y = jsx("span", { className: "text-gray-500", children: "Rarity:" }), e[16] = y) : y = e[16];
  const m = (_a = t.rarityType) == null ? void 0 : _a.name;
  let x;
  e[17] !== m ? (x = jsxs("div", { className: "flex justify-between", children: [y, jsx("span", { className: "font-medium", children: m })] }), e[17] = m, e[18] = x) : x = e[18];
  let S;
  e[19] === Symbol.for("react.memo_cache_sentinel") ? (S = jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-gray-500", children: "Origin:" }), jsx("span", { className: "font-medium", children: "Winter 2019" })] }), e[19] = S) : S = e[19];
  let F;
  e[20] === Symbol.for("react.memo_cache_sentinel") ? (F = jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-gray-500", children: "Tradable:" }), jsx("span", { className: "font-medium", children: "Yes" })] }), e[20] = F) : F = e[20];
  let v;
  e[21] === Symbol.for("react.memo_cache_sentinel") ? (v = jsx("span", { className: "text-gray-500", children: "Value:" }), e[21] = v) : v = e[21];
  let u;
  e[22] !== t.suggestedPrice ? (u = jsxs("div", { className: "flex justify-between", children: [v, jsx("span", { className: "font-medium text-green-600", children: t.suggestedPrice })] }), e[22] = t.suggestedPrice, e[23] = u) : u = e[23];
  let h;
  e[24] !== x || e[25] !== u ? (h = jsxs("div", { className: "border rounded-md p-3 mb-4", children: [_, jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [x, S, F, u] })] }), e[24] = x, e[25] = u, e[26] = h) : h = e[26];
  let g;
  e[27] === Symbol.for("react.memo_cache_sentinel") ? (g = jsx("h3", { className: "font-medium", children: "Value Trend" }), e[27] = g) : g = e[27];
  let b;
  e[28] === Symbol.for("react.memo_cache_sentinel") ? (b = jsxs("div", { className: "border rounded-md p-3", children: [jsxs("div", { className: "flex items-center justify-between mb-2", children: [g, jsxs(Link, { to: "/", className: "text-xs text-blue-600 hover:underline flex items-center", children: [jsx("span", { children: "View Full Chart" }), jsx(ExternalLink, { className: "w-3 h-3 ml-1" })] })] }), jsx("div", { className: "h-24 bg-zinc-800 rounded-md" })] }), e[28] = b) : b = e[28];
  let N;
  return e[29] !== l || e[30] !== h || e[31] !== r || e[32] !== f ? (N = jsxs("div", { className: "border rounded-lg p-4 sticky top-4 h-fit", children: [l, r, f, h, b] }), e[29] = l, e[30] = h, e[31] = r, e[32] = f, e[33] = N) : N = e[33], N;
}
const gt = function() {
  const e = c(8), { item: t, listings: l, nextId: a } = Me.useLoaderData();
  let n;
  e[0] !== t ? (n = jsx("div", { className: "md:col-span-1", children: jsx(De, { item: t }) }), e[0] = t, e[1] = n) : n = e[1];
  let o;
  e[2] !== l || e[3] !== a ? (o = jsx("div", { className: "md:col-span-2", children: jsx(se, { listings: l, nextId: a }) }), e[2] = l, e[3] = a, e[4] = o) : o = e[4];
  let r;
  return e[5] !== n || e[6] !== o ? (r = jsx("section", { className: "container px-4 mb-6", children: jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [n, o] }) }), e[5] = n, e[6] = o, e[7] = r) : r = e[7], r;
};

export { gt as component };
//# sourceMappingURL=_productId-XJfSvn7f.mjs.map
