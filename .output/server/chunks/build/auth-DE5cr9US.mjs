import { n as n$1 } from './auth-BQLVW3eF.mjs';
import { o } from './index-ujMS-7Qz.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import { getWebRequest } from '@tanstack/start-server-core';
import 'better-auth';
import 'better-auth/adapters/drizzle';
import './db-Dk0lmzCx.mjs';
import 'drizzle-orm/node-postgres';
import 'drizzle-orm/pg-core';
import 'drizzle-orm';
import 'tiny-invariant';

const i = o("app_services_auth_ts--getUser_createServerFn_handler", "/_server", (e, r) => n.__executeServer(e, r)), n = createServerFn({ method: "GET" }).handler(i, async () => {
  const e = getWebRequest();
  if (!e) throw new Error("No request found");
  const r = await n$1.api.getSession({ headers: e.headers });
  return (r == null ? void 0 : r.user) ? r.user : null;
});

export { i as getUser_createServerFn_handler };
//# sourceMappingURL=auth-DE5cr9US.mjs.map
