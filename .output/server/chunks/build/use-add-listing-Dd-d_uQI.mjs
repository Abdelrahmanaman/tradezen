import { s } from './add-list-CNuhmZ-z.mjs';
import { n } from './auth-BQLVW3eF.mjs';
import { a } from './try-catch-D16SHkYg.mjs';
import { i as ie, p } from './db-Dk0lmzCx.mjs';
import { o } from './index-ujMS-7Qz.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import { getWebRequest } from '@tanstack/start-server-core';
import 'arktype';
import 'better-auth';
import 'better-auth/adapters/drizzle';
import 'drizzle-orm/node-postgres';
import 'drizzle-orm/pg-core';
import 'drizzle-orm';
import 'tiny-invariant';

const l = o("app_hooks_use-add-listing_tsx--addListing_createServerFn_handler", "/_server", (r, e) => u.__executeServer(r, e)), u = createServerFn({ method: "POST" }).validator((r) => s.assert(r)).handler(l, async ({ data: r }) => {
  const e = getWebRequest();
  if (!e) throw new Error("Request not found");
  const { data: i, error: t } = await a(n.api.getSession({ headers: e.headers }));
  if (t) throw new Error(t.message || "Unauthorized ");
  const o = i == null ? void 0 : i.user.id;
  if (!o) throw new Error("Unauthorized ");
  const a$1 = await ie.insert(p).values({ sellerId: o, age: r.age, itemId: r.itemId, price: r.amount, quantity: r.amount, lookingFor: r.lookingFor, metadata: { isFlyable: r.isFlyable, isRideable: r.isRideable, isNeon: r.isNeon, isMegaNeon: r.isMegaNeon }, slug: r.slug }).returning();
  console.log("Insertion Result:", a$1);
});

export { l as addListing_createServerFn_handler };
//# sourceMappingURL=use-add-listing-Dd-d_uQI.mjs.map
