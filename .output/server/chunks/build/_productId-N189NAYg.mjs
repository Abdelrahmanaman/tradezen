import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { R, g as L, B as W, s as T } from './_productId-Dq1GjOXT.mjs';
import { h, u } from './button-BfHo8OYZ.mjs';
import { Heart, Share2, Flag, ExternalLink, Loader, Loader2, Star, XIcon, CheckIcon, Eye, SearchIcon } from 'lucide-react';
import { useState, useId } from 'react';
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { Link, useParams } from '@tanstack/react-router';
import { useInView } from 'react-intersection-observer';
import * as $ from '@radix-ui/react-dialog';
import { createFormHook, createFormHookContexts, useStore } from '@tanstack/react-form';
import { S, h as h$1, y, w as w$1, z, N as N$1, x } from './label-VW7FWnBR.mjs';
import * as B from '@radix-ui/react-tooltip';
import { a as a$1 } from '../_/index.module.mjs';
import { Command } from 'cmdk';
import { s, n as n$1 } from './add-list-CNuhmZ-z.mjs';
import { toast } from 'sonner';
import { n } from './auth-BQLVW3eF.mjs';
import { a } from './try-catch-D16SHkYg.mjs';
import { i as ie, p } from './db-Dk0lmzCx.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import { o } from './index-ujMS-7Qz.mjs';
import { getWebRequest } from '@tanstack/start-server-core';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'drizzle-orm';
import 'drizzle-orm/node-postgres';
import 'drizzle-orm/pg-core';
import 'clsx';
import 'tailwind-merge';
import 'tiny-invariant';
import '@radix-ui/react-select';
import '@radix-ui/react-label';
import 'arktype';
import 'better-auth';
import 'better-auth/adapters/drizzle';

function ge({ children: t, className: a, onBottomReached: s }) {
  const { ref: i } = useInView({ rootMargin: "10px", onChange: (r) => {
    r && s();
  } });
  return jsxs("div", { className: a, children: [t, jsx("div", { ref: i })] });
}
function fe({ listings: t, nextId: a }) {
  const { productId: s } = useParams({ from: "/adoptme/product/$productId" }), { data: i, fetchNextPage: r, hasNextPage: o, isFetchingNextPage: m, isLoading: v, isFetching: y, isError: g, error: C } = useInfiniteQuery({ queryKey: ["listings", s], queryFn: async ({ pageParam: l }) => await L({ data: { nextId: l, slug: s } }), getNextPageParam: (l) => l.nextCursor, initialPageParam: a, initialData: { pages: [{ nextListings: t, nextCursor: a }], pageParams: [a] } });
  return console.log(i), jsx("div", { className: "border rounded-lg p-4 bg-zinc-800 text-white", children: jsxs("div", { className: "mb-6", children: [jsx("h1", { className: "text-xl font-semibold mb-2", children: "Available Listings" }), jsx("div", { className: "flex items-center justify-between mb-4" }), jsxs(ge, { onBottomReached: () => o && !y && r(), className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [i == null ? void 0 : i.pages.flatMap((l) => l.nextListings).map((l) => jsx(be, { listing: l }, l.id)), m && o && jsx("div", { className: "w-full col-span-full", children: jsx(Loader, { className: "animate-spin mx-auto size-8" }) }), g && jsx("div", { className: "w-full col-span-full", children: "Error loading listings" })] })] }) });
}
const xe = ({ metadata: t }) => {
  if (!t) return null;
  const a = [];
  for (const s in t) if (t[s]) {
    const i = s.split("is").filter((r) => r !== "");
    for (const r of i) a.push(jsx(W, { className: "bg-blue-500 hover:bg-blue-600 text-white text-[10px] px-1 py-0 mr-1", children: r }, r));
  }
  return jsx(Fragment, { children: a });
}, be = ({ listing: t }) => jsxs("div", { className: "border rounded-lg p-3 hover:border-pink-500 transition-colors bg-zinc-900", children: [jsxs("div", { className: "flex items-center justify-between mb-2", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx("div", { className: "w-10 h-10 bg-gray-700 rounded-md overflow-hidden", children: jsx("img", { src: "/placeholder.svg?height=40&width=40", alt: "user", width: 40, height: 40, className: "w-full h-full object-cover" }) }), jsxs("div", { children: [jsxs("h3", { className: "font-medium text-sm", children: ["Item name + (", t.age, ")"] }), jsx("div", { className: "flex items-center gap-1 mt-0.5", children: jsx(xe, { metadata: t.metadata }) })] })] }), jsx(h, { size: "sm", className: "bg-pink-500 hover:bg-pink-600 text-white text-xs h-7", children: "Make Offer" })] }), jsxs("div", { className: "mb-2 text-xs text-zinc-400 flex items-center gap-1", children: [jsx("span", { className: "font-medium text-zinc-300", children: t.seller.userName }), t.status === "Online" ? jsx("span", { className: "text-green-500", children: "\u2022 Online" }) : jsxs("span", { children: ["\u2022 Last seen ", t.status.replace("Last seen ", "")] })] }), jsxs("div", { className: "mb-1 text-xs text-zinc-500 flex items-center gap-1", children: [jsx(Star, { className: "w-3 h-3 text-yellow-400" }), jsx("span", { children: "user review " }), jsxs("span", { className: "text-zinc-400", children: ["(", t.seller.reputationScore, ")"] }), jsx("span", { className: "ml-2", children: "Trades:" }), jsx("span", { className: "font-medium text-zinc-300", children: t.seller.tradeCount })] }), t.lookingFor && t.lookingFor.length > 0 && jsxs("div", { className: "mt-1", children: [jsx("span", { className: "text-xs text-zinc-400 block mb-1", children: "Looking For:" }), jsx("div", { className: "flex flex-wrap gap-1", children: t.lookingFor.map((a) => jsx(W, { variant: "outline", className: "border-zinc-600 text-zinc-400 text-[10px] px-1 py-0", children: a }, a)) })] }), jsxs("div", { className: "text-xs text-zinc-500 mt-2", children: ["Listed ", t.createdAt.toLocaleDateString()] })] }, t.id);
function Ne({ ...t }) {
  return jsx($.Root, { "data-slot": "dialog", ...t });
}
function ve({ ...t }) {
  return jsx($.Trigger, { "data-slot": "dialog-trigger", ...t });
}
function ye({ ...t }) {
  return jsx($.Portal, { "data-slot": "dialog-portal", ...t });
}
function we({ className: t, ...a }) {
  return jsx($.Overlay, { "data-slot": "dialog-overlay", className: u("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", t), ...a });
}
function Ce({ className: t, children: a, ...s }) {
  return jsxs(ye, { "data-slot": "dialog-portal", children: [jsx(we, {}), jsxs($.Content, { "data-slot": "dialog-content", className: u("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border  px-6 p shadow-lg duration-200 sm:max-w-lg", t), ...s, children: [jsx("div", { className: "sticky flex justify-end h-fit  top-4 right-4 z-20", children: jsxs($.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground  rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4  bg-yellow-900", children: [jsx(XIcon, {}), jsx("span", { className: "sr-only", children: "Close" })] }) }), a] })] });
}
function ke({ className: t, ...a }) {
  return jsx("div", { "data-slot": "dialog-header", className: u("flex flex-col gap-2 text-center sm:text-left", t), ...a });
}
function Fe({ className: t, ...a }) {
  return jsx($.Title, { "data-slot": "dialog-title", className: u("text-lg leading-none font-semibold", t), ...a });
}
function Se({ className: t, ...a }) {
  return jsx($.Description, { "data-slot": "dialog-description", className: u("text-muted-foreground text-sm", t), ...a });
}
const b = ({ meta: t }) => {
  const a = useId();
  return t.isTouched ? t.errors.map(({ message: s }) => jsx("p", { className: "text-sm font-medium text-destructive", children: s }, a)) : null;
};
function ze({ label: t, ...a }) {
  const s = N(), i = a.type === "number" && typeof s.state.value == "number" ? String(s.state.value) : s.state.value;
  return jsxs("div", { className: "space-y-2", children: [jsxs("div", { className: "space-y-1", children: [jsx(S, { htmlFor: s.name, children: t }), jsx(x, { id: s.name, value: i, onChange: (r) => {
    a.type === "number" ? s.handleChange(Number(r.target.value)) : s.handleChange(r.target.value);
  }, onBlur: s.handleBlur, ...a })] }), jsx(b, { meta: s.state.meta })] });
}
function Le({ children: t, className: a }) {
  const s = Ge(), [i, r] = useStore(s.store, (o) => [o.isSubmitting, o.canSubmit]);
  return jsx(h, { className: `${a} ${i || !r ? "opacity-50" : ""}`, type: "submit", disabled: i || !r, children: t });
}
function Ie() {
  const [t, a] = useState(false), s = N();
  return jsxs("div", { className: "space-y-2", children: [jsxs("div", { className: "space-y-1", children: [jsx(S, { htmlFor: s.name, children: "Password" }), jsxs("div", { className: "relative", children: [jsx(x, { id: "password", className: "", type: t ? "text" : "password", required: true, name: s.name, value: s.state.value, onChange: (i) => {
    s.handleChange(i.target.value);
  }, onBlur: s.handleBlur }), jsx("button", { type: "button", className: "absolute   right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors", tabIndex: -1, onClick: () => a((i) => !i), children: jsx(Eye, { className: "size-5" }) })] })] }), jsx(b, { meta: s.state.meta })] });
}
function Te({ delayDuration: t = 0, ...a }) {
  return jsx(B.Provider, { "data-slot": "tooltip-provider", delayDuration: t, ...a });
}
function Pe({ ...t }) {
  return jsx(Te, { children: jsx(B.Root, { "data-slot": "tooltip", ...t }) });
}
function _e({ ...t }) {
  return jsx(B.Trigger, { "data-slot": "tooltip-trigger", ...t });
}
function Ae({ className: t, sideOffset: a = 0, children: s, ...i }) {
  return jsx(B.Portal, { children: jsxs(B.Content, { "data-slot": "tooltip-content", sideOffset: a, className: u("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", t), ...i, children: [s, jsx(B.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })] }) });
}
function De({ label: t, className: a, toolTip: s }) {
  const i = N();
  return jsxs(Pe, { children: [jsx(_e, { asChild: true, children: jsx("div", { className: "flex focus-within:outline-2 rounded-xl focus-within:outline-amber-600  ", children: jsxs(S, { htmlFor: i.name, className: u("peer has-checked:bg-indigo-600 border text-3xl font-bold size-10 flex items-center justify-center rounded-xl border-transparent cursor-pointer", a), children: [jsx(x, { id: i.name, className: "sr-only", type: "checkbox", defaultChecked: i.state.value, onChange: (r) => i.handleChange(r.target.checked) }), t] }) }) }), jsx(Ae, { children: s }), jsx(b, { meta: i.state.meta })] });
}
function Re({ className: t, ...a }) {
  return jsx(Command, { "data-slot": "command", className: u("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", t), ...a });
}
function je({ className: t, ...a }) {
  return jsxs("div", { className: "border-input flex items-center border-b px-5", "cmdk-input-wrapper": "", children: [jsx(SearchIcon, { size: 20, className: "text-muted-foreground/80 me-3" }), jsx(Command.Input, { "data-slot": "command-input-wrapper", className: u("placeholder:text-muted-foreground/70 flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", t), ...a })] });
}
function Me({ className: t, ...a }) {
  return jsx(Command.List, { "data-slot": "command-list", className: u("max-h-80 overflow-x-hidden overflow-y-auto", t), ...a });
}
function Ee({ ...t }) {
  return jsx(Command.Empty, { "data-slot": "command-empty", className: "py-6 text-center text-sm", ...t });
}
function Be({ className: t, ...a }) {
  return jsx(Command.Group, { "data-slot": "command-group", className: u("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-2 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium", t), ...a });
}
function Oe({ className: t, ...a }) {
  return jsx(Command.Item, { "data-slot": "command-item", className: u("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground relative flex cursor-default items-center gap-3 rounded-md px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", t), ...a });
}
function w({ className: t, ...a }) {
  return jsx("div", { "data-slot": "skeleton", className: u("bg-accent animate-pulse rounded-md", t), ...a });
}
function Ve() {
  const [t, a] = useState(false), [s, i] = useState(""), [r] = a$1(s, 500), o = r === "" ? "a" : r, m = N(), v = m.state.value, { data: y = [], isLoading: g, isFetching: C } = useQuery({ queryKey: ["adoptme-items", o], queryFn: async () => T({ data: o }), enabled: !!o || t });
  return jsxs("div", { className: "*:not(:first-child):mt-2", children: [jsx(S, { children: "Looking for" }), jsx("div", { className: "flex flex-wrap gap-2 mb-2", children: v.map((l, f) => jsxs("div", { className: "flex border bg-zinc-900 px-1 w-fit   py-1 text-sm font-semibold rounded-md", children: [jsx("span", { children: l }), jsx(h, { onClick: () => m.removeValue(f), className: "ml-2 focus:outline-none p-0 h-fit bg-transparent mt-0.5 hover:bg-transparent", children: jsx(XIcon, { size: 12, className: "text-white" }) })] }, l)) }), jsxs(Re, { children: [jsxs("div", { className: "relative", children: [jsx(je, { placeholder: "Search Adopt Me items...", value: s, className: "text-base", onValueChange: i, id: m.name }), (g || C) && jsx(Loader2, { className: "absolute right-2.5 top-2.5 w-4 h-4 animate-spin" })] }), jsxs(Me, { className: "h-32", children: [y.length === 0 && !g && jsx(Ee, { children: "No results found." }), (g || C) && jsxs("div", { className: "space-y-1 p-2", children: [jsx(w, { className: "h-8" }), jsx(w, { className: "h-8" }), jsx(w, { className: "h-8" }), jsx(w, { className: "h-8" })] }), jsx(Be, { children: y.map((l) => jsxs(Oe, { value: l.name, onSelect: (f) => {
    v.includes(f) || m.pushValue(f);
  }, children: [l.name, v.includes(l.name) && jsx(CheckIcon, { size: 16, className: "ml-auto" })] }, l.id)) })] })] }), jsx(b, { meta: m.state.meta })] });
}
function qe() {
  const t = N();
  return jsxs("div", { className: "*:not-first:mt-2", children: [jsx(S, { htmlFor: t.name, children: "Age" }), jsxs(h$1, { value: t.state.value, onValueChange: (a) => t.handleChange(a), children: [jsx(y, { className: "w-full", children: jsx(w$1, { placeholder: "Select age" }) }), jsx(z, { children: Object.values(n$1).map((a) => jsx(N$1, { value: a, className: "first-letter:capitalize", children: a }, a)) })] }), jsx(b, { meta: t.state.meta })] });
}
const { fieldContext: He, useFieldContext: N, formContext: $e, useFormContext: Ge } = createFormHookContexts(), { useAppForm: Qe } = createFormHook({ fieldComponents: { TextField: ze, PasswordField: Ie, CustomCheckbox: De, CustomSelect: qe, SelectSearch: Ve }, formComponents: { SubmitButton: Le }, fieldContext: He, formContext: $e }), Ue = o("app_hooks_use-add-listing_tsx--addListing_createServerFn_handler", "/_server", (t, a) => _.__executeServer(t, a)), _ = createServerFn({ method: "POST" }).validator((t) => s.assert(t)).handler(Ue, async ({ data: t }) => {
  const a$1 = getWebRequest();
  if (!a$1) throw new Error("Request not found");
  const { data: s, error: i } = await a(n.api.getSession({ headers: a$1.headers }));
  if (i) throw new Error(i.message || "Unauthorized ");
  const r = s == null ? void 0 : s.user.id;
  if (!r) throw new Error("Unauthorized ");
  const o = await ie.insert(p).values({ sellerId: r, age: t.age, itemId: t.itemId, price: t.amount, quantity: t.amount, lookingFor: t.lookingFor, metadata: { isFlyable: t.isFlyable, isRideable: t.isRideable, isNeon: t.isNeon, isMegaNeon: t.isMegaNeon }, slug: t.slug }).returning();
  console.log("Insertion Result:", o);
});
function Ye() {
  return useMutation({ mutationFn: (t) => _({ data: t }), onSuccess: () => {
    toast.success("Listing added successfully");
  }, onError: (t) => {
    toast.error(t.message);
  } });
}
function Ke({ itemId: t }) {
  const { productId: a } = useParams({ from: "/adoptme/product/$productId" }), { mutateAsync: s$1, isPending: i } = Ye(), r = Qe({ defaultValues: { itemId: t, amount: 1, isFlyable: false, isRideable: false, isNeon: false, isMegaNeon: false, age: "Full-Grown", lookingFor: [], slug: a }, onSubmit: ({ value: o }) => {
    console.log("HERE YOU GO", o), s$1(o);
  }, validators: { onSubmit: s } });
  return jsxs(Ne, { children: [jsx(ve, { asChild: true, children: jsx(h, { variant: "outline", children: "List Trade" }) }), jsxs(Ce, { className: "lg:w-96 max-h-[40rem] lg:max-h-[47rem] lg:h-full overflow-x-auto ", children: [jsx("div", { className: "flex flex-col items-center gap-2", children: jsxs(ke, { children: [jsx(Fe, { className: "sm:text-center", children: "List Your Adopt Me Trade" }), jsx(Se, { className: "sm:text-center", children: "Provide details about the Adopt Me pet or item you are offering." })] }) }), jsxs("form", { className: "space-y-5", onSubmit: (o) => {
    o.preventDefault(), o.stopPropagation(), r.handleSubmit();
  }, children: [jsxs("div", { className: "space-y-4", children: [jsx("div", { className: "*:not-first:mt-2", children: jsx(r.AppField, { name: "amount", children: (o) => jsx(o.TextField, { label: "Amount", placeholder: "Enter the amount", type: "number", inputMode: "numeric" }) }) }), jsx("div", { className: "*:not-first:mt-2", children: jsx(r.AppField, { name: "age", children: (o) => jsx(o.CustomSelect, {}) }) }), jsxs("div", { className: "flex items-center gap-4", children: [jsx(r.AppField, { name: "isFlyable", children: (o) => jsx(o.CustomCheckbox, { label: "F", className: "has-checked:bg-blue-500 hover:bg-blue-500", toolTip: "Flying" }) }), jsx(r.AppField, { name: "isRideable", children: (o) => jsx(o.CustomCheckbox, { label: "R", className: "has-checked:bg-pink-500 hover:bg-pink-500", toolTip: "Rideable" }) })] }), jsxs("div", { className: "flex items-center gap-4", children: [jsx(r.AppField, { name: "isNeon", children: (o) => jsx(o.CustomCheckbox, { label: "N", className: "has-checked:bg-green-500 hover:bg-green-500", toolTip: "Neon" }) }), jsx(r.AppField, { name: "isMegaNeon", children: (o) => jsx(o.CustomCheckbox, { label: "M", className: "has-checked:bg-indigo-800 hover:bg-indigo-800", toolTip: "Mega Neon" }) })] }), jsx("div", { className: "*:not-first:mt-2", children: jsx(r.AppField, { name: "lookingFor", children: (o) => jsx(o.SelectSearch, {}) }) })] }), jsx(r.AppForm, { children: jsx(r.SubmitButton, { className: "w-full mb-6", children: i ? jsx(Loader2, { className: "animate-spin" }) : "List Trade" }) })] })] })] });
}
function We({ item: t }) {
  var _a;
  return jsxs("div", { className: "border rounded-lg p-4 sticky top-4 h-fit", children: [jsx("div", { className: "aspect-square bg-zinc-800 rounded-md mb-4 relative overflow-hidden", children: jsx("img", { src: t.imageUrl, alt: t.name, width: 400, height: 400, className: "w-full h-full object-contain" }) }), jsxs("div", { className: "flex items-center justify-between mb-4", children: [jsxs(h, { variant: "outline", size: "sm", className: "text-xs", children: [jsx(Heart, { className: "w-3 h-3 mr-1" }), "Favorite"] }), jsxs(h, { variant: "outline", size: "sm", className: "text-xs", children: [jsx(Share2, { className: "w-3 h-3 mr-1" }), "Share"] }), jsxs(h, { variant: "outline", size: "sm", className: "text-xs", children: [jsx(Flag, { className: "w-3 h-3 mr-1" }), "Report"] }), jsx(Ke, { itemId: t.id })] }), jsxs("div", { className: "text-xs text-gray-500 mb-4 text-left", children: [jsxs("span", { children: ["Product ID: ", t.id] }), jsx("p", { children: t.description })] }), jsxs("div", { className: "border rounded-md p-3 mb-4", children: [jsx("h3", { className: "font-medium mb-2", children: "Quick Stats" }), jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-gray-500", children: "Rarity:" }), jsx("span", { className: "font-medium", children: (_a = t.rarityType) == null ? void 0 : _a.name })] }), jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-gray-500", children: "Origin:" }), jsx("span", { className: "font-medium", children: "Winter 2019" })] }), jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-gray-500", children: "Tradable:" }), jsx("span", { className: "font-medium", children: "Yes" })] }), jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-gray-500", children: "Value:" }), jsx("span", { className: "font-medium text-green-600", children: t.suggestedPrice })] })] })] }), jsxs("div", { className: "border rounded-md p-3", children: [jsxs("div", { className: "flex items-center justify-between mb-2", children: [jsx("h3", { className: "font-medium", children: "Value Trend" }), jsxs(Link, { to: "/", className: "text-xs text-blue-600 hover:underline flex items-center", children: [jsx("span", { children: "View Full Chart" }), jsx(ExternalLink, { className: "w-3 h-3 ml-1" })] })] }), jsx("div", { className: "h-24 bg-zinc-800 rounded-md" })] })] });
}
const Pt = function() {
  const { item: a, listings: s, nextId: i } = R.useLoaderData();
  return jsx("section", { className: "container px-4 mb-6", children: jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [jsx("div", { className: "md:col-span-1", children: jsx(We, { item: a }) }), jsx("div", { className: "md:col-span-2", children: jsx(fe, { listings: s, nextId: i }) })] }) });
};

export { Pt as component };
//# sourceMappingURL=_productId-N189NAYg.mjs.map
