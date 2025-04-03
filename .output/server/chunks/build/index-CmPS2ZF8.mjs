import { createFormHook, createFormHookContexts, useStore } from '@tanstack/react-form';
import { jsx, jsxs } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { Q, a as _, U as Ut, q as qt, V as Vt, D as Da } from '../../index.mjs';
import { useState, useId } from 'react';
import { V, P, L, T, D as D$1, B, U } from './label-y2IlTGIT.mjs';
import { Loader2, Eye, SearchIcon, XIcon, CheckIcon } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { a } from '../_/index.module.mjs';
import { Command } from 'cmdk';
import { type } from 'arktype';

function D(t) {
  const e = c(8);
  let s, l;
  e[0] !== t ? ({ className: s, ...l } = t, e[0] = t, e[1] = s, e[2] = l) : (s = e[1], l = e[2]);
  let a;
  e[3] !== s ? (a = _("bg-accent animate-pulse rounded-md", s), e[3] = s, e[4] = a) : a = e[4];
  let n;
  return e[5] !== l || e[6] !== a ? (n = jsx("div", { "data-slot": "skeleton", className: a, ...l }), e[5] = l, e[6] = a, e[7] = n) : n = e[7], n;
}
const E = (t) => {
  const e = c(5), { meta: s } = t, l = useId();
  if (!s.isTouched) return null;
  let a;
  if (e[0] !== l || e[1] !== s.errors) {
    let n;
    e[3] !== l ? (n = (o) => {
      const { message: r } = o;
      return jsx("p", { className: "text-sm font-medium text-destructive", children: r }, l);
    }, e[3] = l, e[4] = n) : n = e[4], a = s.errors.map(n), e[0] = l, e[1] = s.errors, e[2] = a;
  } else a = e[2];
  return a;
};
function pe(t) {
  const e = c(23);
  let s, l;
  e[0] !== t ? ({ label: l, ...s } = t, e[0] = t, e[1] = s, e[2] = l) : (s = e[1], l = e[2]);
  const a = G(), n = s.type === "number" && typeof a.state.value == "number" ? String(a.state.value) : a.state.value;
  let o;
  e[3] !== a.name || e[4] !== l ? (o = jsx(V, { htmlFor: a.name, children: l }), e[3] = a.name, e[4] = l, e[5] = o) : o = e[5];
  let r;
  e[6] !== a || e[7] !== s.type ? (r = (f) => {
    s.type === "number" ? a.handleChange(Number(f.target.value)) : a.handleChange(f.target.value);
  }, e[6] = a, e[7] = s.type, e[8] = r) : r = e[8];
  let c$1;
  e[9] !== n || e[10] !== a.handleBlur || e[11] !== a.name || e[12] !== s || e[13] !== r ? (c$1 = jsx(B, { id: a.name, value: n, onChange: r, onBlur: a.handleBlur, ...s }), e[9] = n, e[10] = a.handleBlur, e[11] = a.name, e[12] = s, e[13] = r, e[14] = c$1) : c$1 = e[14];
  let m;
  e[15] !== o || e[16] !== c$1 ? (m = jsxs("div", { className: "space-y-1", children: [o, c$1] }), e[15] = o, e[16] = c$1, e[17] = m) : m = e[17];
  let d;
  e[18] !== a.state.meta ? (d = jsx(E, { meta: a.state.meta }), e[18] = a.state.meta, e[19] = d) : d = e[19];
  let u;
  return e[20] !== m || e[21] !== d ? (u = jsxs("div", { className: "space-y-2", children: [m, d] }), e[20] = m, e[21] = d, e[22] = u) : u = e[22], u;
}
function he(t) {
  const e = c(4), { children: s, className: l } = t, a = Be(), [n, o] = useStore(a.store, ge), r = `${l} ${n || !o ? "opacity-50" : ""}`, c$1 = n || !o;
  let m;
  return e[0] !== s || e[1] !== r || e[2] !== c$1 ? (m = jsx(Q, { className: r, type: "submit", disabled: c$1, children: s }), e[0] = s, e[1] = r, e[2] = c$1, e[3] = m) : m = e[3], m;
}
function ge(t) {
  return [t.isSubmitting, t.canSubmit];
}
function be() {
  const t = c(21), [e, s] = useState(false), l = G();
  let a;
  t[0] !== l.name ? (a = jsx(V, { htmlFor: l.name, children: "Password" }), t[0] = l.name, t[1] = a) : a = t[1];
  const n = e ? "text" : "password";
  let o;
  t[2] !== l ? (o = (h) => {
    l.handleChange(h.target.value);
  }, t[2] = l, t[3] = o) : o = t[3];
  let r;
  t[4] !== l.handleBlur || t[5] !== l.name || t[6] !== l.state.value || t[7] !== n || t[8] !== o ? (r = jsx(B, { id: "password", className: "", type: n, required: true, name: l.name, value: l.state.value, onChange: o, onBlur: l.handleBlur }), t[4] = l.handleBlur, t[5] = l.name, t[6] = l.state.value, t[7] = n, t[8] = o, t[9] = r) : r = t[9];
  let c$1;
  t[10] === Symbol.for("react.memo_cache_sentinel") ? (c$1 = jsx("button", { type: "button", className: "absolute   right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors", tabIndex: -1, onClick: () => s(ve), children: jsx(Eye, { className: "size-5" }) }), t[10] = c$1) : c$1 = t[10];
  let m;
  t[11] !== r ? (m = jsxs("div", { className: "relative", children: [r, c$1] }), t[11] = r, t[12] = m) : m = t[12];
  let d;
  t[13] !== a || t[14] !== m ? (d = jsxs("div", { className: "space-y-1", children: [a, m] }), t[13] = a, t[14] = m, t[15] = d) : d = t[15];
  let u;
  t[16] !== l.state.meta ? (u = jsx(E, { meta: l.state.meta }), t[16] = l.state.meta, t[17] = u) : u = t[17];
  let f;
  return t[18] !== d || t[19] !== u ? (f = jsxs("div", { className: "space-y-2", children: [d, u] }), t[18] = d, t[19] = u, t[20] = f) : f = t[20], f;
}
function ve(t) {
  return !t;
}
function Ne(t) {
  const e = c(21), { label: s, className: l, toolTip: a } = t, n = G(), o = n.name;
  let r;
  e[0] !== l ? (r = _("peer has-checked:bg-indigo-600 border text-3xl font-bold size-10 flex items-center justify-center rounded-xl border-transparent cursor-pointer", l), e[0] = l, e[1] = r) : r = e[1];
  let c$1;
  e[2] !== n ? (c$1 = (N) => n.handleChange(N.target.checked), e[2] = n, e[3] = c$1) : c$1 = e[3];
  let m;
  e[4] !== n.name || e[5] !== n.state.value || e[6] !== c$1 ? (m = jsx(B, { id: n.name, className: "sr-only", type: "checkbox", defaultChecked: n.state.value, onChange: c$1 }), e[4] = n.name, e[5] = n.state.value, e[6] = c$1, e[7] = m) : m = e[7];
  let d;
  e[8] !== n.name || e[9] !== s || e[10] !== r || e[11] !== m ? (d = jsx(Ut, { asChild: true, children: jsx("div", { className: "flex focus-within:outline-2 rounded-xl focus-within:outline-amber-600  ", children: jsxs(V, { htmlFor: o, className: r, children: [m, s] }) }) }), e[8] = n.name, e[9] = s, e[10] = r, e[11] = m, e[12] = d) : d = e[12];
  let u;
  e[13] !== a ? (u = jsx(qt, { children: a }), e[13] = a, e[14] = u) : u = e[14];
  let f;
  e[15] !== n.state.meta ? (f = jsx(E, { meta: n.state.meta }), e[15] = n.state.meta, e[16] = f) : f = e[16];
  let h;
  return e[17] !== d || e[18] !== u || e[19] !== f ? (h = jsxs(Vt, { children: [d, u, f] }), e[17] = d, e[18] = u, e[19] = f, e[20] = h) : h = e[20], h;
}
function xe(t) {
  const e = c(8);
  let s, l;
  e[0] !== t ? ({ className: s, ...l } = t, e[0] = t, e[1] = s, e[2] = l) : (s = e[1], l = e[2]);
  let a;
  e[3] !== s ? (a = _("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", s), e[3] = s, e[4] = a) : a = e[4];
  let n;
  return e[5] !== l || e[6] !== a ? (n = jsx(Command, { "data-slot": "command", className: a, ...l }), e[5] = l, e[6] = a, e[7] = n) : n = e[7], n;
}
function ye(t) {
  const e = c(9);
  let s, l;
  e[0] !== t ? ({ className: s, ...l } = t, e[0] = t, e[1] = s, e[2] = l) : (s = e[1], l = e[2]);
  let a;
  e[3] === Symbol.for("react.memo_cache_sentinel") ? (a = jsx(SearchIcon, { size: 20, className: "text-muted-foreground/80 me-3" }), e[3] = a) : a = e[3];
  let n;
  e[4] !== s ? (n = _("placeholder:text-muted-foreground/70 flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", s), e[4] = s, e[5] = n) : n = e[5];
  let o;
  return e[6] !== l || e[7] !== n ? (o = jsxs("div", { className: "border-input flex items-center border-b px-5", "cmdk-input-wrapper": "", children: [a, jsx(Command.Input, { "data-slot": "command-input-wrapper", className: n, ...l })] }), e[6] = l, e[7] = n, e[8] = o) : o = e[8], o;
}
function Ce(t) {
  const e = c(8);
  let s, l;
  e[0] !== t ? ({ className: s, ...l } = t, e[0] = t, e[1] = s, e[2] = l) : (s = e[1], l = e[2]);
  let a;
  e[3] !== s ? (a = _("max-h-80 overflow-x-hidden overflow-y-auto", s), e[3] = s, e[4] = a) : a = e[4];
  let n;
  return e[5] !== l || e[6] !== a ? (n = jsx(Command.List, { "data-slot": "command-list", className: a, ...l }), e[5] = l, e[6] = a, e[7] = n) : n = e[7], n;
}
function Se(t) {
  const e = c(4);
  let s;
  e[0] !== t ? ({ ...s } = t, e[0] = t, e[1] = s) : s = e[1];
  let l;
  return e[2] !== s ? (l = jsx(Command.Empty, { "data-slot": "command-empty", className: "py-6 text-center text-sm", ...s }), e[2] = s, e[3] = l) : l = e[3], l;
}
function we(t) {
  const e = c(8);
  let s, l;
  e[0] !== t ? ({ className: s, ...l } = t, e[0] = t, e[1] = s, e[2] = l) : (s = e[1], l = e[2]);
  let a;
  e[3] !== s ? (a = _("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-2 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium", s), e[3] = s, e[4] = a) : a = e[4];
  let n;
  return e[5] !== l || e[6] !== a ? (n = jsx(Command.Group, { "data-slot": "command-group", className: a, ...l }), e[5] = l, e[6] = a, e[7] = n) : n = e[7], n;
}
function ke(t) {
  const e = c(8);
  let s, l;
  e[0] !== t ? ({ className: s, ...l } = t, e[0] = t, e[1] = s, e[2] = l) : (s = e[1], l = e[2]);
  let a;
  e[3] !== s ? (a = _("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground relative flex cursor-default items-center gap-3 rounded-md px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", s), e[3] = s, e[4] = a) : a = e[4];
  let n;
  return e[5] !== l || e[6] !== a ? (n = jsx(Command.Item, { "data-slot": "command-item", className: a, ...l }), e[5] = l, e[6] = a, e[7] = n) : n = e[7], n;
}
function Ie() {
  const t = c(54), [e] = useState(false), [s, l] = useState(""), [a$1] = a(s, 500), n = a$1 === "" ? "a" : a$1, o = G(), r = o.state.value;
  let c$1, m;
  t[0] !== n ? (c$1 = ["adoptme-items", n], m = async () => Da({ data: n }), t[0] = n, t[1] = c$1, t[2] = m) : (c$1 = t[1], m = t[2]);
  const d = !!n || e;
  let u;
  t[3] !== c$1 || t[4] !== m || t[5] !== d ? (u = { queryKey: c$1, queryFn: m, enabled: d }, t[3] = c$1, t[4] = m, t[5] = d, t[6] = u) : u = t[6];
  const { data: f, isLoading: h, isFetching: N } = useQuery(u);
  let q;
  t[7] !== f ? (q = f === void 0 ? [] : f, t[7] = f, t[8] = q) : q = t[8];
  const C = q;
  let A;
  t[9] === Symbol.for("react.memo_cache_sentinel") ? (A = jsx(V, { children: "Looking for" }), t[9] = A) : A = t[9];
  let S;
  if (t[10] !== o || t[11] !== r) {
    let v;
    t[13] !== o ? (v = (x, O) => jsxs("div", { className: "flex border bg-zinc-900 px-1 w-fit   py-1 text-sm font-semibold rounded-md", children: [jsx("span", { children: x }), jsx(Q, { onClick: () => o.removeValue(O), className: "ml-2 focus:outline-none p-0 h-fit bg-transparent mt-0.5 hover:bg-transparent", children: jsx(XIcon, { size: 12, className: "text-white" }) })] }, x), t[13] = o, t[14] = v) : v = t[14], S = r.map(v), t[10] = o, t[11] = r, t[12] = S;
  } else S = t[12];
  let w;
  t[15] !== S ? (w = jsx("div", { className: "flex flex-wrap gap-2 mb-2", children: S }), t[15] = S, t[16] = w) : w = t[16];
  let k;
  t[17] !== o.name || t[18] !== s ? (k = jsx(ye, { placeholder: "Search Adopt Me items...", value: s, className: "text-base", onValueChange: l, id: o.name }), t[17] = o.name, t[18] = s, t[19] = k) : k = t[19];
  let I;
  t[20] !== N || t[21] !== h ? (I = (h || N) && jsx(Loader2, { className: "absolute right-2.5 top-2.5 w-4 h-4 animate-spin" }), t[20] = N, t[21] = h, t[22] = I) : I = t[22];
  let $;
  t[23] !== I || t[24] !== k ? ($ = jsxs("div", { className: "relative", children: [k, I] }), t[23] = I, t[24] = k, t[25] = $) : $ = t[25];
  let F;
  t[26] !== C.length || t[27] !== h ? (F = C.length === 0 && !h && jsx(Se, { children: "No results found." }), t[26] = C.length, t[27] = h, t[28] = F) : F = t[28];
  let _;
  t[29] !== N || t[30] !== h ? (_ = (h || N) && jsxs("div", { className: "space-y-1 p-2", children: [jsx(D, { className: "h-8" }), jsx(D, { className: "h-8" }), jsx(D, { className: "h-8" }), jsx(D, { className: "h-8" })] }), t[29] = N, t[30] = h, t[31] = _) : _ = t[31];
  let T;
  if (t[32] !== C || t[33] !== o || t[34] !== r) {
    let v;
    t[36] !== o || t[37] !== r ? (v = (x) => jsxs(ke, { value: x.name, onSelect: (O) => {
      r.includes(O) || o.pushValue(O);
    }, children: [x.name, r.includes(x.name) && jsx(CheckIcon, { size: 16, className: "ml-auto" })] }, x.id), t[36] = o, t[37] = r, t[38] = v) : v = t[38], T = C.map(v), t[32] = C, t[33] = o, t[34] = r, t[35] = T;
  } else T = t[35];
  let B;
  t[39] !== T ? (B = jsx(we, { children: T }), t[39] = T, t[40] = B) : B = t[40];
  let L;
  t[41] !== F || t[42] !== _ || t[43] !== B ? (L = jsxs(Ce, { className: "h-32", children: [F, _, B] }), t[41] = F, t[42] = _, t[43] = B, t[44] = L) : L = t[44];
  let z;
  t[45] !== $ || t[46] !== L ? (z = jsxs(xe, { children: [$, L] }), t[45] = $, t[46] = L, t[47] = z) : z = t[47];
  let V$1;
  t[48] !== o.state.meta ? (V$1 = jsx(E, { meta: o.state.meta }), t[48] = o.state.meta, t[49] = V$1) : V$1 = t[49];
  let M;
  return t[50] !== z || t[51] !== V$1 || t[52] !== w ? (M = jsxs("div", { className: "*:not(:first-child):mt-2", children: [A, w, z, V$1] }), t[50] = z, t[51] = V$1, t[52] = w, t[53] = M) : M = t[53], M;
}
const J = { newborn: "Newborn", junior: "Junior", preTeen: "Pre-Teen", teen: "Teen", postTeen: "Post-Teen", fullGrown: "Full-Grown" }, De = type({ itemId: type("number").configure({ message: "Invalid item ID" }), amount: type("number >= 1").configure({ message: "Invalid number" }), isFlyable: type("boolean").configure({ message: "isFlyable must be a boolean" }), isRideable: type("boolean").configure({ message: "isRideable must be a boolean" }), isNeon: type("boolean").configure({ message: "isNeon must be a boolean" }), isMegaNeon: type("boolean").configure({ message: "isMegaNeon must be a boolean" }), age: type.valueOf(J).configure({ message: "Invalid age" }), lookingFor: type("string[]").configure({ message: "Trade for is invalid" }), slug: type("string").configure({ message: "slug is invalid" }) });
function $e() {
  const t = c(15), e = G();
  let s;
  t[0] !== e.name ? (s = jsx(V, { htmlFor: e.name, children: "Age" }), t[0] = e.name, t[1] = s) : s = t[1];
  let l;
  t[2] !== e ? (l = (m) => e.handleChange(m), t[2] = e, t[3] = l) : l = t[3];
  let a;
  t[4] === Symbol.for("react.memo_cache_sentinel") ? (a = jsx(P, { className: "w-full", children: jsx(L, { placeholder: "Select age" }) }), t[4] = a) : a = t[4];
  let n;
  t[5] === Symbol.for("react.memo_cache_sentinel") ? (n = jsx(T, { children: Object.values(J).map(Fe) }), t[5] = n) : n = t[5];
  let o;
  t[6] !== e.state.value || t[7] !== l ? (o = jsxs(D$1, { value: e.state.value, onValueChange: l, children: [a, n] }), t[6] = e.state.value, t[7] = l, t[8] = o) : o = t[8];
  let r;
  t[9] !== e.state.meta ? (r = jsx(E, { meta: e.state.meta }), t[9] = e.state.meta, t[10] = r) : r = t[10];
  let c$1;
  return t[11] !== s || t[12] !== o || t[13] !== r ? (c$1 = jsxs("div", { className: "*:not-first:mt-2", children: [s, o, r] }), t[11] = s, t[12] = o, t[13] = r, t[14] = c$1) : c$1 = t[14], c$1;
}
function Fe(t) {
  return jsx(U, { value: t, className: "first-letter:capitalize", children: t }, t);
}
const { fieldContext: _e, useFieldContext: G, formContext: Te, useFormContext: Be } = createFormHookContexts(), { useAppForm: He } = createFormHook({ fieldComponents: { TextField: pe, PasswordField: be, CustomCheckbox: Ne, CustomSelect: $e, SelectSearch: Ie }, formComponents: { SubmitButton: he }, fieldContext: _e, formContext: Te });

export { De as D, He as H };
//# sourceMappingURL=index-CmPS2ZF8.mjs.map
