import { jsx } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import * as d from '@radix-ui/react-separator';
import { a as _ } from '../../index.mjs';

function x(l) {
  const t = c(12);
  let o, r, e, i;
  t[0] !== l ? ({ className: o, orientation: e, decorative: i, ...r } = l, t[0] = l, t[1] = o, t[2] = r, t[3] = e, t[4] = i) : (o = t[1], r = t[2], e = t[3], i = t[4]);
  const s = e === void 0 ? "horizontal" : e, c$1 = i === void 0 ? true : i;
  let a;
  t[5] !== o ? (a = _("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", o), t[5] = o, t[6] = a) : a = t[6];
  let n;
  return t[7] !== c$1 || t[8] !== s || t[9] !== r || t[10] !== a ? (n = jsx(d.Root, { "data-slot": "separator-root", decorative: c$1, orientation: s, className: a, ...r }), t[7] = c$1, t[8] = s, t[9] = r, t[10] = a, t[11] = n) : n = t[11], n;
}

export { x };
//# sourceMappingURL=separator-t18pzJr7.mjs.map
