import c from 'stripe';
import { x } from '../../index.mjs';
import { json } from '@tanstack/start-client-core';
import 'node:events';
import 'node:buffer';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import 'node:fs';
import '@tanstack/router-core';
import 'tiny-invariant';
import '@tanstack/start-server-core';
import '@tanstack/react-router';
import 'react/jsx-runtime';
import 'react/compiler-runtime';
import 'react';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-dialog';
import 'lucide-react';
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

async function i(e) {
  try {
    return { data: await e, error: null };
  } catch (t) {
    return { data: null, error: t };
  }
}
const d = x("/api/create-checkout-session")({ POST: async ({ request: e, params: t }) => {
  const n = new c("sk_test_51R3oTKHlJZxCutlZnAXA1U54bvqkByAnljKVukC7fxdBEsw6Dr9FsBVKrCbkhVLMHqD6HG20R7YUEWhEJneXzztn00GgRdmuTY");
  async function a() {
    return n.checkout.sessions.create({ line_items: [{ price: "price_1R3ruaHlJZxCutlZzGsUD8Td", quantity: 1 }], mode: "payment", success_url: "http://localhost:3000", cancel_url: "http://localhost:3000" });
  }
  const r = await i(a());
  if (r.error !== null) return json({ error: r.error.message || "Server error" }, { status: 500 });
  const s = r.data;
  return s.url ? new Response(null, { status: 302, headers: { Location: s.url } }) : json({ error: "Failed to create checkout session: missing URL" }, { status: 500 });
} });

export { d as APIRoute };
//# sourceMappingURL=create-checkout-session.mjs.map
