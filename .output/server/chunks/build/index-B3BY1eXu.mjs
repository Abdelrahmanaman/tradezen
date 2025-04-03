import { jsx, jsxs } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { Link } from '@tanstack/react-router';
import { _ as _e } from '../../index.mjs';
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

const F = function() {
  const o = c(4), { games: e } = _e.useLoaderData();
  let r;
  o[0] !== e ? (r = e.map(l), o[0] = e, o[1] = r) : r = o[1];
  let m;
  return o[2] !== r ? (m = jsx("section", { className: "flex	 md:flex-nowrap flex-wrap", children: jsx("div", { className: "grid grid-cols-1 bg-black md:grid-cols-4 gap-4 grow", children: r }) }), o[2] = r, o[3] = m) : m = o[3], m;
};
function l(i) {
  return jsxs("div", { className: "bg-zinc-900 p-2 hover:bg-amber-700 relative isolate", children: [jsx("h2", { children: jsxs(Link, { to: "/adoptme", className: "hover:text-red-500", children: [jsx("span", { className: " absolute inset-0 " }), i.name] }) }), jsx("p", { children: i.description })] }, i.id);
}

export { F as component };
//# sourceMappingURL=index-B3BY1eXu.mjs.map
