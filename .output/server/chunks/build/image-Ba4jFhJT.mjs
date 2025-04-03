import { jsx, jsxs } from 'react/jsx-runtime';
import { c as c$1 } from 'react/compiler-runtime';
import { type } from 'arktype';
import { createServerFn } from '@tanstack/start-client-core';
import { G } from '../../index.mjs';
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

const s = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"], l = type({ file: type("File").narrow((e, t) => (e.size === 0 && t.reject({ message: "File cannot be empty" }), e.size > 5 * 1024 * 1024 && t.reject({ message: "File size must be less than 5MB" }), (!e.type || !s.includes(e.type)) && t.reject({ message: "Invalid file type, please provide a valid image file" }), true)) }), c = G("app_services_uploadthing_ts--uploadImage_createServerFn_handler", "/_server"), f = createServerFn({ method: "POST" }).validator((e) => {
  if (!(e instanceof FormData)) throw new Error("Invalid form data");
  const t = e.get("file"), { file: r } = l.assert({ file: t });
  return { file: r };
}).handler(c), $ = function() {
  const t = c$1(1);
  let r;
  return t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = jsx("div", { children: jsxs("form", { encType: "multipart/form-data", onSubmit: g, children: [jsx("input", { type: "file", name: "file" }), jsx("button", { type: "submit", children: "Upload" })] }) }), t[0] = r) : r = t[0], r;
};
async function g(e) {
  e.preventDefault();
  const t = new FormData(e.currentTarget), r = await f({ data: t });
  console.log(r);
}

export { $ as component };
//# sourceMappingURL=image-Ba4jFhJT.mjs.map
