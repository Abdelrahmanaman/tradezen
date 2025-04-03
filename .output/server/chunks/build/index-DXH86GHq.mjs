import { jsx, jsxs } from 'react/jsx-runtime';
import { createFileRoute, Link, lazyRouteComponent } from '@tanstack/react-router';
import { i as ie } from './db-Dk0lmzCx.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import { o } from './index-ujMS-7Qz.mjs';
import 'drizzle-orm/node-postgres';
import 'drizzle-orm/pg-core';
import 'drizzle-orm';
import 'tiny-invariant';

const g = () => Promise.resolve().then(() => _), u = o("app_routes_index_tsx--getGames_createServerFn_handler", "/_server", (r, t) => a.__executeServer(r, t)), a = createServerFn({ method: "GET" }).handler(u, async () => await ie.query.games.findMany()), s = createFileRoute("/")({ component: lazyRouteComponent(g, "component", () => s.ssr), loader: async () => ({ games: await a() }) }), h = function() {
  const { games: t } = s.useLoaderData();
  return jsx("section", { className: "flex	 md:flex-nowrap flex-wrap", children: jsx("div", { className: "grid grid-cols-1 bg-black md:grid-cols-4 gap-4 grow", children: t.map((o) => jsxs("div", { className: "bg-zinc-900 p-2 hover:bg-amber-700 relative isolate", children: [jsx("h2", { children: jsxs(Link, { to: "/adoptme", className: "hover:text-red-500", children: [jsx("span", { className: " absolute inset-0 " }), o.name] }) }), jsx("p", { children: o.description })] }, o.id)) }) });
}, _ = Object.freeze(Object.defineProperty({ __proto__: null, component: h }, Symbol.toStringTag, { value: "Module" }));

export { h as component };
//# sourceMappingURL=index-DXH86GHq.mjs.map
