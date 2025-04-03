import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import { i as ie } from './db-Dk0lmzCx.mjs';
import { jsx } from 'react/jsx-runtime';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { u } from './button-BfHo8OYZ.mjs';
import { and } from 'drizzle-orm';
import { o } from './index-ujMS-7Qz.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import 'drizzle-orm/node-postgres';
import 'drizzle-orm/pg-core';
import 'clsx';
import 'tailwind-merge';
import 'tiny-invariant';

const b = cva("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", { variants: { variant: { default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90", secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90", destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70", outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground" } }, defaultVariants: { variant: "default" } });
function W({ className: e, variant: r, asChild: t = false, ...n }) {
  return jsx(t ? Slot : "span", { "data-slot": "badge", className: u(b({ variant: r }), e), ...n });
}
const F = () => import('./_productId-N189NAYg.mjs'), G = o("app_routes_adoptme_product_productId_tsx--getAllGames_createServerFn_handler", "/_server", (e, r) => $.__executeServer(e, r)), $ = createServerFn({ method: "GET" }).handler(G, async () => await ie.query.items.findMany({ where: (r, { eq: t }) => t(r.gameId, 1) })), E = o("app_routes_adoptme_product_productId_tsx--getGameItem_createServerFn_handler", "/_server", (e, r) => g.__executeServer(e, r)), g = createServerFn({ method: "GET" }).validator((e) => {
  if (typeof e != "string") throw new Error("Invalid slug");
  return { slug: e };
}).handler(E, async ({ data: e }) => {
  const r = await ie.query.items.findFirst({ where: (a, { eq: s }) => s(a.slug, e.slug), with: { listings: { limit: 10, orderBy: (a, { asc: s }) => s(a.id), with: { seller: { columns: { userName: true, tradeCount: true, reputationScore: true, image: true } } } }, rarityType: true } });
  if (!r || !r.listings) throw new Error("Item not found");
  const { listings: t, ...n } = r, i = t.length > 0 ? t[t.length - 1].id : null, o = t.length > 0 ? t[0].id : null;
  return { listings: t, ...n, nextId: i, previousId: o };
}), C = o("app_routes_adoptme_product_productId_tsx--searchItems_createServerFn_handler", "/_server", (e, r) => T.__executeServer(e, r)), T = createServerFn({ method: "GET" }).validator((e) => {
  if (typeof e != "string") throw new Error("Invalid data");
  return { query: e };
}).handler(C, async ({ data: { query: e } }) => await ie.query.items.findMany({ where: (t, { like: n }) => n(t.name, `%${e}%`), columns: { id: true, name: true }, limit: 5 })), z = o("app_routes_adoptme_product_productId_tsx--getPaginatedListing_createServerFn_handler", "/_server", (e, r) => L.__executeServer(e, r)), L = createServerFn({ method: "GET" }).validator(({ nextId: e, slug: r }) => {
  if (typeof e != "number" || typeof r != "string") throw new Error("Invalid nextId or slug");
  return { nextId: e, slug: r };
}).handler(z, async ({ data: { nextId: e, slug: r } }) => {
  const n = await ie.query.listings.findMany({ where: (o, { gt: a, eq: s }) => and(s(o.slug, r), a(o.id, e)), with: { seller: { columns: { userName: true, tradeCount: true, reputationScore: true, image: true } } }, orderBy: (o, { asc: a }) => a(o.id), limit: 10 }), i = n.length >= 10 ? n[n.length - 1].id : null;
  return console.log("Returning cursor:", i), { nextListings: n, nextCursor: i };
}), R = createFileRoute("/adoptme/product/$productId")({ component: lazyRouteComponent(F, "component", () => R.ssr), loader: async ({ params: { productId: e } }) => {
  const { listings: r, nextId: t, ...n } = await g({ data: e });
  return { item: n, listings: r, nextId: t };
} }), M = () => import('./_productId-N189NAYg.mjs'), _ = o("app_routes_adoptme_product_productId_tsx--getAllGames_createServerFn_handler", "/_server", (e, r) => P.__executeServer(e, r)), h = o("app_routes_adoptme_product_productId_tsx--getGameItem_createServerFn_handler", "/_server", (e, r) => v.__executeServer(e, r)), v = createServerFn({ method: "GET" }).validator((e) => {
  if (typeof e != "string") throw new Error("Invalid slug");
  return { slug: e };
}).handler(h, async ({ data: e }) => {
  const r = await ie.query.items.findFirst({ where: (a, { eq: s }) => s(a.slug, e.slug), with: { listings: { limit: 10, orderBy: (a, { asc: s }) => s(a.id), with: { seller: { columns: { userName: true, tradeCount: true, reputationScore: true, image: true } } } }, rarityType: true } });
  if (!r || !r.listings) throw new Error("Item not found");
  const { listings: t, ...n } = r, i = t.length > 0 ? t[t.length - 1].id : null, o = t.length > 0 ? t[0].id : null;
  return { listings: t, ...n, nextId: i, previousId: o };
}), f = o("app_routes_adoptme_product_productId_tsx--searchItems_createServerFn_handler", "/_server", (e, r) => q.__executeServer(e, r)), y = o("app_routes_adoptme_product_productId_tsx--getPaginatedListing_createServerFn_handler", "/_server", (e, r) => A.__executeServer(e, r)), P = createServerFn({ method: "GET" }).handler(_, async () => await ie.query.items.findMany({ where: (r, { eq: t }) => t(r.gameId, 1) })), q = createServerFn({ method: "GET" }).validator((e) => {
  if (typeof e != "string") throw new Error("Invalid data");
  return { query: e };
}).handler(f, async ({ data: { query: e } }) => await ie.query.items.findMany({ where: (t, { like: n }) => n(t.name, `%${e}%`), columns: { id: true, name: true }, limit: 5 })), A = createServerFn({ method: "GET" }).validator(({ nextId: e, slug: r }) => {
  if (typeof e != "number" || typeof r != "string") throw new Error("Invalid nextId or slug");
  return { nextId: e, slug: r };
}).handler(y, async ({ data: { nextId: e, slug: r } }) => {
  const n = await ie.query.listings.findMany({ where: (o, { gt: a, eq: s }) => and(s(o.slug, r), a(o.id, e)), with: { seller: { columns: { userName: true, tradeCount: true, reputationScore: true, image: true } } }, orderBy: (o, { asc: a }) => a(o.id), limit: 10 }), i = n.length >= 10 ? n[n.length - 1].id : null;
  return console.log("Returning cursor:", i), { nextListings: n, nextCursor: i };
}), B = createFileRoute("/adoptme/product/$productId")({ component: lazyRouteComponent(M, "component", () => B.ssr), loader: async ({ params: { productId: e } }) => {
  const { listings: r, nextId: t, ...n } = await v({ data: e });
  return { item: n, listings: r, nextId: t };
} }), X = Object.freeze(Object.defineProperty({ __proto__: null, getAllGames_createServerFn_handler: _, getGameItem_createServerFn_handler: h, getPaginatedListing_createServerFn_handler: y, searchItems_createServerFn_handler: f }, Symbol.toStringTag, { value: "Module" }));

export { X as $, W as B, R, L as g, T as s };
//# sourceMappingURL=_productId-Dq1GjOXT.mjs.map
