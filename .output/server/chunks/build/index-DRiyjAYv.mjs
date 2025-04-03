import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import { i as ie } from './db-Dk0lmzCx.mjs';
import { o } from './index-ujMS-7Qz.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import 'drizzle-orm/node-postgres';
import 'drizzle-orm/pg-core';
import 'drizzle-orm';
import 'tiny-invariant';

const p = () => import('./index-DXH86GHq.mjs'), c = o("app_routes_index_tsx--getGames_createServerFn_handler", "/_server", (e, t) => r.__executeServer(e, t)), r = createServerFn({ method: "GET" }).handler(c, async () => await ie.query.games.findMany()), i = createFileRoute("/")({ component: lazyRouteComponent(p, "component", () => i.ssr), loader: async () => ({ games: await r() }) });

export { c as getGames_createServerFn_handler };
//# sourceMappingURL=index-DRiyjAYv.mjs.map
