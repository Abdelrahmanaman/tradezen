import { jsx } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import * as n from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';
import { a as _ } from '../../index.mjs';

function h(s) {
  const e = c(9);
  let r, i;
  e[0] !== s ? ({ className: r, ...i } = s, e[0] = s, e[1] = r, e[2] = i) : (r = e[1], i = e[2]);
  let t;
  e[3] !== r ? (t = _("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", r), e[3] = r, e[4] = t) : t = e[4];
  let a;
  e[5] === Symbol.for("react.memo_cache_sentinel") ? (a = jsx(n.Indicator, { "data-slot": "checkbox-indicator", className: "flex items-center justify-center text-current transition-none", children: jsx(CheckIcon, { className: "size-3.5" }) }), e[5] = a) : a = e[5];
  let o;
  return e[6] !== i || e[7] !== t ? (o = jsx(n.Root, { "data-slot": "checkbox", className: t, ...i, children: a }), e[6] = i, e[7] = t, e[8] = o) : o = e[8], o;
}

export { h };
//# sourceMappingURL=checkbox-aRDEe1GE.mjs.map
