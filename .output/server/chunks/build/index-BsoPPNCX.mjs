import { jsxs, jsx } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { useState } from 'react';
import { m, g as g$1, b } from './card-tRlVEYGk.mjs';
import { Q } from '../../index.mjs';
import { Sparkles, CoinsIcon, CheckCircle } from 'lucide-react';
import 'node:events';
import 'node:buffer';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import 'node:fs';
import '@tanstack/router-core';
import 'tiny-invariant';
import '@tanstack/start-server-core';
import '@tanstack/start-client-core';
import '@tanstack/react-router';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-dialog';
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

function g() {
  const r = c(3), [, s] = useState(null);
  let i;
  r[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [{ id: "basic", coins: 100, price: 3.99, popular: false }, { id: "standard", coins: 250, price: 9.99, popular: true }, { id: "premium", coins: 500, price: 19.99, popular: false }], r[0] = i) : i = r[0];
  const m$1 = i;
  let a;
  r[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (l) => {
    s(l);
  }, r[1] = a) : a = r[1];
  const p = a;
  let c$1;
  return r[2] === Symbol.for("react.memo_cache_sentinel") ? (c$1 = jsx("div", { className: "min-h-screen ", children: jsx("div", { className: "", children: jsx("div", { className: "flex w-full gap-2 justify-center flex-wrap ", children: m$1.map((l) => jsx("div", { className: "relative group  min-w-[20rem]", children: jsxs(m, { className: "p-2 hover:motion-bg-out-zinc-900 motion-bg-", children: [l.popular && jsx("div", { className: "absolute top-0 right-0 z-10", children: jsxs("div", { className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg flex items-center", children: [jsx(Sparkles, { className: "w-3 h-3 mr-1" }), "BEST VALUE"] }) }), jsx("div", { className: "absolute top-0 left-0 w-full ng h-[3px] bg-gradient-to-r from-transparent via-purple-900  to-transparent opacity-30" }), jsxs(g$1, { className: "p-2", children: [jsx("div", { className: "flex items-center justify-center mb-6", children: jsxs("div", { className: "relative", children: [jsx("div", {}), jsx("div", { className: "relative w-16 h-16 flex items-center justify-center bg-[#151525] rounded-full border border-purple-500/30", children: jsx(CoinsIcon, { className: "w-10 h-10" }) })] }) }), jsxs("div", { className: "text-center mb-6", children: [jsxs("h3", { className: "text-xl font-bold mb-1", children: [l.coins, " NG"] }), jsxs("p", { className: "text-gray-400 text-sm", children: ["~$", (l.price / l.coins).toFixed(2), "/NG"] })] }), jsxs("ul", { className: "space-y-3 text-sm text-gray-300 mb-6", children: [jsxs("li", { className: "flex items-center gap-2", children: [jsx(CheckCircle, { className: "size-4 text-green-700" }), " Instant delivery"] }), jsxs("li", { className: "flex items-center gap-2", children: [jsx(CheckCircle, { className: "size-4 text-green-700" }), "Use across all games"] }), jsxs("li", { className: "flex items-center gap-2", children: [jsx(CheckCircle, { className: "size-4 text-green-700" }), "24/7 support"] })] })] }), jsx(b, { className: "p-0", children: jsxs("form", { action: "api/create-checkout-session", method: "POST", className: "w-full", children: [jsxs(Q, { className: "w-full font-semibold h-12 ", onClick: () => p(l.id), children: ["$", l.price] }), " "] }) })] }) }, l.id)) }) }) }), r[2] = c$1) : c$1 = r[2], c$1;
}
const q = function() {
  const s = c(1);
  let i;
  return s[0] === Symbol.for("react.memo_cache_sentinel") ? (i = jsxs("section", { className: "px-4 grid place-content-center h-full ", children: [jsxs("div", { className: "text-center mb-16 ", children: [jsx("div", { className: "inline-block mb-4", children: jsx("div", { className: "relative", children: jsx("div", { className: "relative bg-secondary px-6 py-2 rounded-lg", children: jsx("span", { className: "text-sm font-medium text-gray-300", children: "NEXUS GAMING NETWORK" }) }) }) }), jsx("h1", { className: "text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400", children: "Power Up Your Game" }), jsx("p", { className: "text-gray-400 max-w-xl mx-auto text-lg", children: "Purchase Nexus Coins to unlock exclusive items and enhance your gaming experience" })] }), jsx(g, {})] }), s[0] = i) : i = s[0], i;
};

export { q as component };
//# sourceMappingURL=index-BsoPPNCX.mjs.map
