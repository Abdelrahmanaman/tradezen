import { jsx, jsxs } from 'react/jsx-runtime';
import { u } from './button-BfHo8OYZ.mjs';
import * as d from '@radix-ui/react-select';
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from 'lucide-react';
import * as _ from '@radix-ui/react-label';

function x({ className: t, type: a, ...s }) {
  return jsx("input", { type: a, "data-slot": "input", className: u("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", t), ...s });
}
function h({ ...t }) {
  return jsx(d.Root, { "data-slot": "select", ...t });
}
function w({ ...t }) {
  return jsx(d.Value, { "data-slot": "select-value", ...t });
}
function y({ className: t, size: a = "default", children: s, ...i }) {
  return jsxs(d.Trigger, { "data-slot": "select-trigger", "data-size": a, className: u("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t), ...i, children: [s, jsx(d.Icon, { asChild: true, children: jsx(ChevronDownIcon, { className: "size-4 opacity-50" }) })] });
}
function z({ className: t, children: a, position: s = "popper", ...i }) {
  return jsx(d.Portal, { children: jsxs(d.Content, { "data-slot": "select-content", className: u("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", s === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", t), position: s, ...i, children: [jsx(p, {}), jsx(d.Viewport, { className: u("p-1", s === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"), children: a }), jsx(m, {})] }) });
}
function N({ className: t, children: a, ...s }) {
  return jsxs(d.Item, { "data-slot": "select-item", className: u("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", t), ...s, children: [jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: jsx(d.ItemIndicator, { children: jsx(CheckIcon, { className: "size-4" }) }) }), jsx(d.ItemText, { children: a })] });
}
function p({ className: t, ...a }) {
  return jsx(d.ScrollUpButton, { "data-slot": "select-scroll-up-button", className: u("flex cursor-default items-center justify-center py-1", t), ...a, children: jsx(ChevronUpIcon, { className: "size-4" }) });
}
function m({ className: t, ...a }) {
  return jsx(d.ScrollDownButton, { "data-slot": "select-scroll-down-button", className: u("flex cursor-default items-center justify-center py-1", t), ...a, children: jsx(ChevronDownIcon, { className: "size-4" }) });
}
function S({ className: t, ...a }) {
  return jsx(_.Root, { "data-slot": "label", className: u("text-foreground text-sm leading-4 font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", t), ...a });
}

export { N, S, h, w, x, y, z };
//# sourceMappingURL=label-VW7FWnBR.mjs.map
