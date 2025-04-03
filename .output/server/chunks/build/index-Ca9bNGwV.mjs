import { jsxs, jsx } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { Link } from '@tanstack/react-router';

const z = function() {
  const o = c(1);
  let t;
  return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = jsxs("section", { className: "flex	 md:flex-nowrap flex-wrap", children: ["This page will list the latest trading and etc", jsx(Link, { to: "/adoptme/product", children: "Products page" })] }), o[0] = t) : t = o[0], t;
};

export { z as component };
//# sourceMappingURL=index-Ca9bNGwV.mjs.map
