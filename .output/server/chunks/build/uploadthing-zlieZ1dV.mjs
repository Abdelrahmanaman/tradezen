import { type } from 'arktype';
import { UTApi } from 'uploadthing/server';
import { a } from './try-catch-D16SHkYg.mjs';
import { o } from './index-ujMS-7Qz.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import 'tiny-invariant';

const m = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"], p = type({ file: type("File").narrow((e, r) => (e.size === 0 && r.reject({ message: "File cannot be empty" }), e.size > 5 * 1024 * 1024 && r.reject({ message: "File size must be less than 5MB" }), (!e.type || !m.includes(e.type)) && r.reject({ message: "Invalid file type, please provide a valid image file" }), true)) }), c = o("app_services_uploadthing_ts--uploadImage_createServerFn_handler", "/_server", (e, r) => g.__executeServer(e, r)), g = createServerFn({ method: "POST" }).validator((e) => {
  if (!(e instanceof FormData)) throw new Error("Invalid form data");
  const r = e.get("file"), { file: t } = p.assert({ file: r });
  return { file: t };
}).handler(c, async ({ data: { file: e } }) => {
  console.log("file is ", e);
  const r = new UTApi(), { data: t, error: a$1 } = await a(r.uploadFiles([e]));
  if (a$1) throw new Error(a$1.message);
  return console.log("data is ", t), { url: t };
});

export { c as uploadImage_createServerFn_handler };
//# sourceMappingURL=uploadthing-zlieZ1dV.mjs.map
