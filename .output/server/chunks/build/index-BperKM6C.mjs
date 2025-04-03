import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import { i as ie } from './db-Dk0lmzCx.mjs';
import { o } from './index-ujMS-7Qz.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import 'drizzle-orm/node-postgres';
import 'drizzle-orm/pg-core';
import 'drizzle-orm';
import 'tiny-invariant';

const c = () => import('./index-Cx60pwQq.mjs'), i = o("app_routes_adoptme_product_index_tsx--getGameItems_createServerFn_handler", "/_server", (e, t) => r.__executeServer(e, t)), r = createServerFn({ method: "GET" }).handler(i, async () => await ie.query.items.findMany({ where: (t, { eq: o }) => o(t.gameId, 1) })), d = createFileRoute("/adoptme/product/")({ component: lazyRouteComponent(c, "component", () => d.ssr), loader: async () => ({ items: await r() }) });

export { i as getGameItems_createServerFn_handler };
//# sourceMappingURL=index-BperKM6C.mjs.map
