import { type } from 'arktype';
import { c } from 'react/compiler-runtime';
import { inferAdditionalFields } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';
import { E as Eo } from '../../index.mjs';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';
import { toast } from 'sonner';

const u = type(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-/]).{8,}$/).configure({ message: "Invalid password" }), l = type("string.email").configure({ message: "Invalid email" }), y = type("string > 5").configure({ message: "Username must be at least 5 characters long" }), D = type({ email: l, password: u }), L = type({ userName: y, email: l, password: u }), v = createAuthClient({ plugins: [inferAdditionalFields()], baseURL: "http://localhost:3000" }), { signIn: S, signOut: R, useSession: j, signUp: A, getSession: q } = v;
async function m(e) {
  try {
    return { data: await e, error: null };
  } catch (r) {
    return { data: null, error: r };
  }
}
const p = (e) => {
  const r = c(4), t = useRouter(), a = useQueryClient();
  let s;
  return r[0] !== e || r[1] !== a || r[2] !== t ? (s = async () => {
    await a.invalidateQueries(Eo()), await t.invalidate(), t.navigate({ to: e });
  }, r[0] = e, r[1] = a, r[2] = t, r[3] = s) : s = r[3], s;
};
function z() {
  const e = c(2), r = p("/profile");
  let t;
  return e[0] !== r ? (t = { mutationFn: U, onSuccess: () => {
    r();
  }, onError: E }, e[0] = r, e[1] = t) : t = e[1], useMutation(t);
}
function E(e) {
  toast.error(e.message || "An unexpected error occurred");
}
async function U(e) {
  const { value: r } = e, t = await m(S.email({ email: r.email, password: r.password }));
  if (t.error) throw t.error;
  const { error: a, data: s } = t.data;
  if (a) throw new Error(a.message || "Login failed");
  return s;
}
function M() {
  const e = c(2), r = p("/profile");
  let t;
  return e[0] !== r ? (t = { mutationFn: I, onSuccess: (a) => {
    toast.success("User created successfully"), r();
  }, onError: C }, e[0] = r, e[1] = t) : t = e[1], useMutation(t);
}
function C(e) {
  toast.error(e.message || "An unexpected error occurred");
}
async function I(e) {
  const { value: r } = e, t = await m(A.email({ email: r.email, password: r.password, userName: r.userName, name: "" }));
  if (t.error) throw t.error;
  const { error: a, data: s } = t.data;
  if (a) throw new Error(a.message || "Signup failed");
  return s;
}

export { D, L, M, z };
//# sourceMappingURL=use-auth-BKNcJz6y.mjs.map
