import { jsxs, jsx } from 'react/jsx-runtime';
import { h as h$1, u } from './button-BfHo8OYZ.mjs';
import { useState } from 'react';
import { S, x as x$1, h, y, w, z as z$1, N } from './label-VW7FWnBR.mjs';
import * as n from '@radix-ui/react-checkbox';
import { Heart, CheckIcon } from 'lucide-react';
import { createFileRoute, Outlet, lazyRouteComponent, Link } from '@tanstack/react-router';
import { i as ie } from './db-Dk0lmzCx.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import { o } from './index-ujMS-7Qz.mjs';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-select';
import '@radix-ui/react-label';
import 'drizzle-orm/node-postgres';
import 'drizzle-orm/pg-core';
import 'drizzle-orm';
import 'tiny-invariant';

function f({ className: t, ...a }) {
  return jsx("div", { "data-slot": "card", className: u("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", t), ...a });
}
function z({ className: t, ...a }) {
  return jsx("div", { "data-slot": "card-header", className: u("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", t), ...a });
}
function j({ className: t, ...a }) {
  return jsx("div", { "data-slot": "card-title", className: u("leading-none font-semibold", t), ...a });
}
function b({ className: t, ...a }) {
  return jsx("div", { "data-slot": "card-content", className: u("px-6", t), ...a });
}
function s({ className: t, ...a }) {
  return jsx(n.Root, { "data-slot": "checkbox", className: u("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", t), ...a, children: jsx(n.Indicator, { "data-slot": "checkbox-indicator", className: "flex items-center justify-center text-current transition-none", children: jsx(CheckIcon, { className: "size-3.5" }) }) });
}
function G() {
  return jsxs("div", { className: " mx-auto py-6 size-fit top-0 transition-all sticky ", children: [jsx("h1", { className: "text-3xl font-bold mb-6 text-center", children: "Adopt Me Item Search" }), jsx("div", { className: "grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6", children: jsx(f, { children: jsxs(b, { className: "space-y-6", children: [jsxs("div", { children: [jsx(S, { htmlFor: "search", className: "block text-sm font-medium", children: "Search" }), jsx(x$1, { type: "text", id: "search", placeholder: "Neon Unicorn..." })] }), jsxs("div", { children: [jsx(S, { className: "block text-sm font-medium", children: "Price Range" }), jsxs("div", { className: "grid grid-cols-2 gap-4", children: [jsx(x$1, { type: "number", placeholder: "Min" }), jsx(x$1, { type: "number", placeholder: "Max" })] })] }), jsxs("div", { className: "grid grid-cols-2 gap-4", children: [jsxs("div", { children: [jsx(S, { htmlFor: "category", className: "block text-sm font-medium", children: "Category" }), jsxs(h, { children: [jsx(y, { children: jsx(w, { placeholder: "Select category" }) }), jsxs(z$1, { children: [jsx(N, { value: "all", children: "All Categories" }), jsx(N, { value: "pets", children: "Pets" }), jsx(N, { value: "vehicles", children: "Vehicles" })] })] })] }), jsxs("div", { children: [jsx(S, { htmlFor: "rarity", className: "block text-sm font-medium", children: "Rarity" }), jsxs(h, { children: [jsx(y, { children: jsx(w, { placeholder: "Select rarity" }) }), jsxs(z$1, { children: [jsx(N, { value: "all", children: "All Rarities" }), jsx(N, { value: "common", children: "Common" }), jsx(N, { value: "uncommon", children: "Uncommon" })] })] })] })] }), jsxs("div", { children: [jsx(S, { className: "block text-sm font-medium", children: "Glow Effect" }), jsxs("div", { className: "grid grid-cols-2 gap-4", children: [jsxs("div", { className: "flex items-center space-x-2", children: [jsx(s, { id: "neon" }), jsx(S, { htmlFor: "neon", children: "Neon" })] }), jsxs("div", { className: "flex items-center space-x-2", children: [jsx(s, { id: "mega-neon" }), jsx(S, { htmlFor: "mega-neon", children: "Mega Neon" })] })] })] }), jsxs("div", { children: [jsx(S, { className: "block text-sm font-medium", children: "Special Attributes" }), jsxs("div", { className: "grid grid-cols-2 gap-4", children: [jsxs("div", { className: "flex items-center space-x-2", children: [jsx(s, { id: "flyable" }), jsx(S, { htmlFor: "flyable", children: "Flyable" })] }), jsxs("div", { className: "flex items-center space-x-2", children: [jsx(s, { id: "rideable" }), jsx(S, { htmlFor: "rideable", children: "Rideable" })] })] })] }), jsx(h$1, { className: "w-full", children: "Search" })] }) }) })] });
}
function M({ game: t }) {
  const [a, l] = useState(false);
  return jsxs(f, { className: "w-full max-w-sm overflow-hidden group  p-2 relative isolate  border-zinc-700 ", children: [jsx("div", { className: "absolute top-2 right-2 z-10", children: jsx(h$1, { variant: "ghost", size: "icon", className: "rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors", onClick: () => l(!a), "aria-label": a ? "Remove from wishlist" : "Add to wishlist", children: jsx(Heart, { className: `h-5 w-5 ${a ? "fill-red-500 text-red-500" : "text-gray-600"}` }) }) }), jsx(z, { className: "p-0  ", children: jsx(j, { className: "text-left p-0  ", children: jsxs(Link, { to: "/adoptme/product/$productId", params: { productId: t.slug }, children: [jsx("span", { className: "  absolute inset-0 z-20" }), t.name] }) }) }), jsx(b, { className: "p-0", children: jsx("div", { className: " relative h-40 overflow-hidden ", children: jsx("img", { src: t.imageUrl, alt: `${t.name}`, className: "object-contain w-full h-full transition-transform group-hover:scale-105" }) }) })] });
}
const A = () => Promise.resolve().then(() => L), P = o("app_routes_adoptme_product_index_tsx--getGameItems_createServerFn_handler", "/_server", (t, a) => v.__executeServer(t, a)), v = createServerFn({ method: "GET" }).handler(P, async () => await ie.query.items.findMany({ where: (a, { eq: l }) => l(a.gameId, 1) })), x = createFileRoute("/adoptme/product/")({ component: lazyRouteComponent(A, "component", () => x.ssr), loader: async () => ({ items: await v() }) }), $ = function() {
  const { items: a } = x.useLoaderData();
  return console.log("items"), jsxs("section", { className: "flex md:flex-nowrap flex-wrap", children: [jsx(G, {}), jsx("div", { className: "grid grid-cols-1 bg-black md:grid-cols-4 gap-4 grow", children: a.map((l) => jsx(M, { game: l }, l.id)) }), jsx(Outlet, {})] });
}, L = Object.freeze(Object.defineProperty({ __proto__: null, component: $ }, Symbol.toStringTag, { value: "Module" }));

export { $ as component };
//# sourceMappingURL=index-Cx60pwQq.mjs.map
