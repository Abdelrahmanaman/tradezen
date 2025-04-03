import { jsxs, jsx } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { N as Ne$1, c as ce, d as de$1, u as ue$1, Q, a as _, w as wo, U as Ut, g as ge$1, V as Vt, q as qt } from '../../index.mjs';
import { x, N, u, g, m, b } from './card-tRlVEYGk.mjs';
import { UserPlusIcon, FlagIcon, Disc, Twitch, StarIcon, ExternalLink, Crown, Clock } from 'lucide-react';
import { useState } from 'react';
import * as z from '@radix-ui/react-tabs';
import { x as x$1 } from './separator-t18pzJr7.mjs';
import { Link } from '@tanstack/react-router';
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

function de(t) {
  const e = c(43), { user: s } = t, [a, r] = useState(false);
  let n;
  e[0] !== a ? (n = () => r(!a), e[0] = a, e[1] = n) : n = e[1];
  const o = n;
  let d;
  e[2] === Symbol.for("react.memo_cache_sentinel") ? (d = jsxs(ce, { className: "w-20 h-20", children: [jsx(de$1, { src: "/placeholder.svg?height=80&width=80", alt: "User avatar" }), jsx(ue$1, { children: "UN" })] }), e[2] = d) : d = e[2];
  const p = a ? "secondary" : "default";
  let f;
  e[3] === Symbol.for("react.memo_cache_sentinel") ? (f = jsx(UserPlusIcon, { className: "mr-2 h-4 w-4" }), e[3] = f) : f = e[3];
  const u$1 = a ? "Unfollow" : "Follow";
  let c$1;
  e[4] !== p || e[5] !== u$1 || e[6] !== o ? (c$1 = jsxs(Q, { onClick: o, size: "sm", variant: p, className: "w-24", children: [f, u$1] }), e[4] = p, e[5] = u$1, e[6] = o, e[7] = c$1) : c$1 = e[7];
  let h;
  e[8] === Symbol.for("react.memo_cache_sentinel") ? (h = jsxs(Q, { size: "sm", className: "w-24", variant: "outline", children: [jsx(FlagIcon, { className: "mr-2 h-4 w-4" }), "Report"] }), e[8] = h) : h = e[8];
  let m$1;
  e[9] !== c$1 ? (m$1 = jsxs("div", { className: "flex justify-between items-center", children: [d, jsxs("div", { className: "flex  flex-col sm:flex-row gap-2 ", children: [c$1, h] })] }), e[9] = c$1, e[10] = m$1) : m$1 = e[10];
  let k;
  e[11] === Symbol.for("react.memo_cache_sentinel") ? (k = jsx(x, { className: "text-2xl", children: "UserName123" }), e[11] = k) : k = e[11];
  let A;
  e[12] === Symbol.for("react.memo_cache_sentinel") ? (A = jsx(N, { children: jsx("span", { children: "Legendary Trader | Member since 2021" }) }), e[12] = A) : A = e[12];
  let b;
  e[13] !== s.followersCount ? (b = jsx("div", { children: jsxs("span", { className: "flex items-center gap-1", children: [jsx("strong", { children: s.followersCount }), "Followers"] }) }), e[13] = s.followersCount, e[14] = b) : b = e[14];
  let x$1;
  e[15] !== s.followingCount ? (x$1 = jsx("div", { children: jsxs("span", { className: "flex items-center gap-1", children: [jsx("strong", { children: s.followingCount }), "Following"] }) }), e[15] = s.followingCount, e[16] = x$1) : x$1 = e[16];
  let N$1;
  e[17] !== s.tradeCount ? (N$1 = jsx("div", { children: jsxs("span", { className: "flex items-center gap-1", children: [jsx("strong", { children: s.tradeCount }), "Trades"] }) }), e[17] = s.tradeCount, e[18] = N$1) : N$1 = e[18];
  let w;
  e[19] !== b || e[20] !== x$1 || e[21] !== N$1 ? (w = jsxs("div", { className: "flex gap-2 text-sm", children: [b, x$1, N$1] }), e[19] = b, e[20] = x$1, e[21] = N$1, e[22] = w) : w = e[22];
  let R;
  e[23] === Symbol.for("react.memo_cache_sentinel") ? (R = jsx("div", { className: "flex items-center", children: [...Array(5)].map(fe) }), e[23] = R) : R = e[23];
  let v;
  e[24] !== s.reputationScore ? (v = jsxs("div", { className: "flex items-center gap-1", children: [R, jsxs("span", { className: "text-sm", children: [s.reputationScore, " reviews"] })] }), e[24] = s.reputationScore, e[25] = v) : v = e[25];
  let $;
  e[26] === Symbol.for("react.memo_cache_sentinel") ? ($ = jsx(Disc, { className: "w-4 h-4" }), e[26] = $) : $ = e[26];
  let y;
  e[27] !== s.userName ? (y = jsxs("div", { className: "flex items-center gap-2 mt-2", children: [$, jsxs("span", { children: ["Discord: ", s.userName] })] }), e[27] = s.userName, e[28] = y) : y = e[28];
  let j;
  e[29] === Symbol.for("react.memo_cache_sentinel") ? (j = jsx(Twitch, { className: "w-4 h-4" }), e[29] = j) : j = e[29];
  let _;
  e[30] !== s.userName ? (_ = jsxs("div", { className: "flex items-center gap-2 mt-1", children: [j, jsxs("span", { children: ["Steam: ", s.userName] })] }), e[30] = s.userName, e[31] = _) : _ = e[31];
  let S;
  e[32] !== w || e[33] !== v || e[34] !== y || e[35] !== _ ? (S = jsxs("div", { children: [k, A, w, v, y, _] }), e[32] = w, e[33] = v, e[34] = y, e[35] = _, e[36] = S) : S = e[36];
  let C;
  e[37] !== S || e[38] !== m$1 ? (C = jsx(u, { children: jsxs("div", { className: "flex flex-col space-y-4", children: [m$1, S] }) }), e[37] = S, e[38] = m$1, e[39] = C) : C = e[39];
  let F;
  e[40] === Symbol.for("react.memo_cache_sentinel") ? (F = jsx(g, { children: jsx("p", { className: "  max-w-[50ch] font-thin  rounded-3xl ", children: "Avid gamer and collector. Specializing in rare Diablo 2 items and WoW mounts. Always looking for fair trades and new gaming buddies!" }) }), e[40] = F) : F = e[40];
  let I;
  return e[41] !== C ? (I = jsxs(m, { className: "border max-w-3xl  shadow-none", children: [C, F] }), e[41] = C, e[42] = I) : I = e[42], I;
}
function fe(t, e) {
  return jsx(StarIcon, { className: "size-4 fill-yellow-500 text-yellow-500" }, `${e + 1}`);
}
function he(t) {
  const e = c(8);
  let s, a;
  e[0] !== t ? ({ className: s, ...a } = t, e[0] = t, e[1] = s, e[2] = a) : (s = e[1], a = e[2]);
  let r;
  e[3] !== s ? (r = _("flex flex-col gap-2", s), e[3] = s, e[4] = r) : r = e[4];
  let n;
  return e[5] !== a || e[6] !== r ? (n = jsx(z.Root, { "data-slot": "tabs", className: r, ...a }), e[5] = a, e[6] = r, e[7] = n) : n = e[7], n;
}
function pe(t) {
  const e = c(8);
  let s, a;
  e[0] !== t ? ({ className: s, ...a } = t, e[0] = t, e[1] = s, e[2] = a) : (s = e[1], a = e[2]);
  let r;
  e[3] !== s ? (r = _("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", s), e[3] = s, e[4] = r) : r = e[4];
  let n;
  return e[5] !== a || e[6] !== r ? (n = jsx(z.List, { "data-slot": "tabs-list", className: r, ...a }), e[5] = a, e[6] = r, e[7] = n) : n = e[7], n;
}
function B(t) {
  const e = c(8);
  let s, a;
  e[0] !== t ? ({ className: s, ...a } = t, e[0] = t, e[1] = s, e[2] = a) : (s = e[1], a = e[2]);
  let r;
  e[3] !== s ? (r = _("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", s), e[3] = s, e[4] = r) : r = e[4];
  let n;
  return e[5] !== a || e[6] !== r ? (n = jsx(z.Trigger, { "data-slot": "tabs-trigger", className: r, ...a }), e[5] = a, e[6] = r, e[7] = n) : n = e[7], n;
}
function E(t) {
  const e = c(8);
  let s, a;
  e[0] !== t ? ({ className: s, ...a } = t, e[0] = t, e[1] = s, e[2] = a) : (s = e[1], a = e[2]);
  let r;
  e[3] !== s ? (r = _("flex-1 outline-none", s), e[3] = s, e[4] = r) : r = e[4];
  let n;
  return e[5] !== a || e[6] !== r ? (n = jsx(z.Content, { "data-slot": "tabs-content", className: r, ...a }), e[5] = a, e[6] = r, e[7] = n) : n = e[7], n;
}
function T() {
  const t = c(13);
  let e;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = jsxs("div", { className: "flex items-center justify-between", children: [jsx(x, { className: "text-xl font-bold text-purple-900", children: "Trading" }), jsx(wo, { variant: "outline", className: "bg-green-100 text-green-700", children: "Active" })] }), t[0] = e) : e = t[0];
  let s;
  t[1] === Symbol.for("react.memo_cache_sentinel") ? (s = jsxs(u, { className: "space-y-2 pb-4", children: [e, jsx(N, { className: "text-base font-medium text-purple-700 hover:text-purple-900", children: jsxs(Link, { to: "/", className: "group flex items-center gap-2 hover:underline", children: ["Kang the Decapitator and 2x Runed Orbs", jsx(ExternalLink, { className: "h-4 w-4 transition-transform group-hover:scale-110" })] }) })] }), t[1] = s) : s = t[1];
  let a;
  t[2] === Symbol.for("react.memo_cache_sentinel") ? (a = jsx("span", { className: "text-sm font-medium text-purple-600", children: "Seeking" }), t[2] = a) : a = t[2];
  let r;
  t[3] === Symbol.for("react.memo_cache_sentinel") ? (r = jsxs("p", { className: "flex items-center gap-2 font-semibold text-purple-900", children: [jsx(Crown, { className: "h-6 w-6 text-yellow-500" }), jsx("span", { className: "text-2xl", children: "85" })] }), t[3] = r) : r = t[3];
  let n;
  t[4] === Symbol.for("react.memo_cache_sentinel") ? (n = jsx(Ut, { asChild: true, children: jsx(wo, { variant: "secondary", className: " bg-purple-200 text-purple-700", children: "OR DIABLO IV ITEMS" }) }), t[4] = n) : n = t[4];
  let o, d, p;
  t[5] === Symbol.for("react.memo_cache_sentinel") ? (o = jsxs("div", { children: [a, jsxs("div", { className: "mt-2 flex-wrap flex items-center justify-between rounded-md bg-purple-100 p-3", children: [r, jsx(ge$1, { children: jsxs(Vt, { children: [n, jsx(qt, { children: jsx("p", { children: "Equivalent value in Diablo IV items" }) })] }) })] })] }), d = jsx(x$1, { className: "bg-purple-200" }), p = jsx("span", { className: "text-sm font-medium text-purple-600", children: "Highest Bid" }), t[5] = o, t[6] = d, t[7] = p) : (o = t[5], d = t[6], p = t[7]);
  let f;
  t[8] === Symbol.for("react.memo_cache_sentinel") ? (f = jsxs(g, { className: "space-y-6 pb-6", children: [o, d, jsxs("div", { children: [p, jsx("div", { className: "mt-2 flex items-center justify-between", children: jsxs("p", { className: "flex items-center gap-2 font-semibold text-purple-900", children: [jsx(Crown, { className: "h-6 w-6 text-yellow-500" }), jsx("span", { className: "text-2xl", children: "52.00" })] }) })] })] }), t[8] = f) : f = t[8];
  let u$1;
  t[9] === Symbol.for("react.memo_cache_sentinel") ? (u$1 = jsx("div", { className: "flex flex-wrap items-center justify-between gap-2", children: jsxs("div", { className: "flex flex-wrap gap-2", children: [jsx(wo, { variant: "secondary", className: "bg-white/10 text-white hover:bg-white/20", children: "WORLD OF WARCRAFT" }), jsx(wo, { variant: "secondary", className: "bg-white/10 text-white hover:bg-white/20", children: "DIABLO IV" })] }) }), t[9] = u$1) : u$1 = t[9];
  let c$1;
  t[10] === Symbol.for("react.memo_cache_sentinel") ? (c$1 = jsxs(ce, { className: "h-10 w-10 border-2 border-white", children: [jsx(de$1, { src: "/placeholder.svg?height=40&width=40", alt: "Vinnie" }), jsx(ue$1, { children: "V" })] }), t[10] = c$1) : c$1 = t[10];
  let h;
  t[11] === Symbol.for("react.memo_cache_sentinel") ? (h = jsx("span", { className: "text-sm font-medium text-white", children: "Vinnie" }), t[11] = h) : h = t[11];
  let m$1;
  return t[12] === Symbol.for("react.memo_cache_sentinel") ? (m$1 = jsxs(m, { className: "w-full max-w-sm overflow-hidden rounded-lg border-none bg-gradient-to-br from-purple-50 to-indigo-50 shadow-lg transition-all duration-300 hover:shadow-xl", children: [s, f, jsxs(b, { className: "flex flex-col items-stretch gap-4 bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4", children: [u$1, jsx("div", { className: "flex items-center justify-between", children: jsxs("div", { className: "flex items-center gap-3 w-full", children: [c$1, jsxs("div", { className: "flex  justify-between w-full", children: [h, jsxs("span", { className: "flex items-center gap-1 text-xs text-purple-200", children: [jsx(Clock, { className: "h-3 w-3" }), "2 hours ago"] })] })] }) })] })] }), t[12] = m$1) : m$1 = t[12], m$1;
}
const ue = [{ id: 1, user: "EpicGamer99", avatar: "/placeholder.svg?height=40&width=40", rating: 5, comment: "Excellent trader! Fast and reliable. Got my rare Diablo 2 items exactly as described.", date: "2 days ago", helpful: 12 }, { id: 2, user: "WoWCollector", avatar: "/placeholder.svg?height=40&width=40", rating: 5, comment: "Great communication and fair prices. Would definitely trade again!", date: "1 week ago", helpful: 8 }, { id: 3, user: "GamerPro42", avatar: "/placeholder.svg?height=40&width=40", rating: 4, comment: "Good trader overall. Slight delay in delivery but items were as promised.", date: "2 weeks ago", helpful: 5 }], ge = [{ id: 1, user: "Trader1", rating: 5, comment: "Great trader, fast and reliable!" }, { id: 2, user: "Gamer2", rating: 4, comment: "Good communication, smooth trade." }, { id: 3, user: "ItemCollector", rating: 5, comment: "Excellent experience, highly recommended!" }];
function be() {
  const t = c(6);
  let e;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = jsxs(pe, { className: "grid w-fit grid-cols-4 max-w-2xl bg-transparent", children: [jsx(B, { className: "sm:p-4 font-semibold pb-2 ", value: "listings", children: "Active Listings" }), jsx(B, { className: "sm:p-4 font-semibold pb-2 ", value: "past-trades", children: "Wishlists" }), jsx(B, { className: "sm:p-4 font-semibold pb-2 ", value: "reviews", children: "Reviews" })] }), t[0] = e) : e = t[0];
  let s;
  t[1] === Symbol.for("react.memo_cache_sentinel") ? (s = jsxs(E, { className: "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 grid-cols-1", value: "listings", children: [jsx(T, {}), jsx(T, {}), jsx(T, {}), jsx(T, {}), jsx(T, {})] }), t[1] = s) : s = t[1];
  let a;
  t[2] === Symbol.for("react.memo_cache_sentinel") ? (a = jsx(u, { children: jsx(x, { children: "Past Trades Reviews" }) }), t[2] = a) : a = t[2];
  let r;
  t[3] === Symbol.for("react.memo_cache_sentinel") ? (r = jsx(E, { value: "past-trades", children: jsxs(m, { children: [a, jsx(g, { children: jsx("ul", { className: "space-y-4", children: ge.map(Ne) }) })] }) }), t[3] = r) : r = t[3];
  let n;
  t[4] === Symbol.for("react.memo_cache_sentinel") ? (n = jsx(u, { children: jsx(x, { children: "Recent Reviews" }) }), t[4] = n) : n = t[4];
  let o;
  return t[5] === Symbol.for("react.memo_cache_sentinel") ? (o = jsxs(he, { defaultValue: "listings", className: "space-y-10  ", children: [e, s, r, jsx(E, { value: "reviews", children: jsxs(m, { children: [n, jsx(g, { children: jsx("ul", { className: "space-y-4", children: ue.map(xe) }) })] }) })] }), t[5] = o) : o = t[5], o;
}
function xe(t) {
  return jsxs("li", { className: "border-b pb-2 last:border-b-0", children: [jsxs("div", { className: "flex justify-between items-center", children: [jsx("span", { className: "font-semibold", children: t.user }), jsx("div", { className: "flex", children: [...Array(t.rating)].map((e, s) => jsx(StarIcon, { className: "w-4 h-4 text-yellow-400" }, `${t.id}-${s}`)) })] }), jsx("p", { className: "text-sm text-muted-foreground", children: t.comment })] }, t.id);
}
function Ne(t) {
  return jsxs("li", { className: "border-b pb-2 last:border-b-0", children: [jsxs("div", { className: "flex justify-between items-center", children: [jsx("span", { className: "font-semibold", children: t.user }), jsx("div", { className: "flex", children: [...Array(t.rating)].map((e, s) => jsx(StarIcon, { className: "w-4 h-4 text-yellow-400" }, `${t.id}-${s}`)) })] }), jsx("p", { className: "text-sm text-muted-foreground", children: t.comment })] }, t.id);
}
const Qe = function() {
  const e = c(8), { user: s } = Ne$1.useRouteContext();
  let a;
  e[0] !== s.userName ? (a = jsxs("h1", { children: ["Hello ", s.userName] }), e[0] = s.userName, e[1] = a) : a = e[1];
  let r;
  e[2] !== s ? (r = jsx(de, { user: s }), e[2] = s, e[3] = r) : r = e[3];
  let n;
  e[4] === Symbol.for("react.memo_cache_sentinel") ? (n = jsx(be, {}), e[4] = n) : n = e[4];
  let o;
  return e[5] !== a || e[6] !== r ? (o = jsxs("section", { children: [a, r, n] }), e[5] = a, e[6] = r, e[7] = o) : o = e[7], o;
};

export { Qe as component };
//# sourceMappingURL=profile-CD4F1pNk.mjs.map
