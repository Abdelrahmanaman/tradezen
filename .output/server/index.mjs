import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { EventEmitter } from 'node:events';
import { Buffer as Buffer$1 } from 'node:buffer';
import invariant from 'vinxi/lib/invariant';
import { virtualId, handlerModule, join } from 'vinxi/lib/path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { promises, existsSync } from 'node:fs';
import { isRedirect, isNotFound, isPlainObject as isPlainObject$1, encode as encode$1 } from '@tanstack/router-core';
import E$1 from 'tiny-invariant';
import { eventHandler as eventHandler$1, toWebRequest, getResponseStatus, getEvent, createStartHandler, defineHandlerCallback, transformReadableStreamWithRouter, transformPipeableStreamWithRouter, getHeaders } from '@tanstack/start-server-core';
import { startSerializer, createServerFn, mergeHeaders as mergeHeaders$2 } from '@tanstack/start-client-core';
import { createRouter as createRouter$2, createRootRouteWithContext, Link, useRouter, useMatch, ErrorComponent, createFileRoute, RouterProvider, lazyRouteComponent, redirect, Outlet, HeadContent, Scripts, rootRouteId } from '@tanstack/react-router';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c as c$2 } from 'react/compiler-runtime';
import * as N from 'react';
import { forwardRef, useRef, useImperativeHandle } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as $$1 from '@radix-ui/react-dialog';
import { Binoculars, SquarePlus, ShoppingCart, HandCoins, ChevronsUpDown, Sparkles, BadgeCheck, CreditCard, Bell, LogOut, XIcon } from 'lucide-react';
import * as B from '@radix-ui/react-tooltip';
import { useAnimation, motion } from 'motion/react';
import * as oe from '@radix-ui/react-avatar';
import * as A$2 from '@radix-ui/react-dropdown-menu';
import { QueryClient, queryOptions } from '@tanstack/react-query';
import { useTheme } from 'next-themes';
import { Toaster } from 'sonner';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { routerWithQueryClient } from '@tanstack/react-router-with-query';
import { PassThrough } from 'node:stream';
import { isbot } from 'isbot';
import q from 'react-dom/server';
import { resolve as resolve$1, dirname as dirname$1, join as join$1 } from 'node:path';
import { createHash } from 'node:crypto';
import { AsyncLocalStorage } from 'node:async_hooks';

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function o(n){throw new Error(`${n} is not implemented yet!`)}class i extends EventEmitter{__unenv__={};readableEncoding=null;readableEnded=true;readableFlowing=false;readableHighWaterMark=0;readableLength=0;readableObjectMode=false;readableAborted=false;readableDidRead=false;closed=false;errored=null;readable=false;destroyed=false;static from(e,t){return new i(t)}constructor(e){super();}_read(e){}read(e){}setEncoding(e){return this}pause(){return this}resume(){return this}isPaused(){return  true}unpipe(e){return this}unshift(e,t){}wrap(e){return this}push(e,t){return  false}_destroy(e,t){this.removeAllListeners();}destroy(e){return this.destroyed=true,this._destroy(e),this}pipe(e,t){return {}}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return this.destroy(),Promise.resolve()}async*[Symbol.asyncIterator](){throw o("Readable.asyncIterator")}iterator(e){throw o("Readable.iterator")}map(e,t){throw o("Readable.map")}filter(e,t){throw o("Readable.filter")}forEach(e,t){throw o("Readable.forEach")}reduce(e,t,r){throw o("Readable.reduce")}find(e,t){throw o("Readable.find")}findIndex(e,t){throw o("Readable.findIndex")}some(e,t){throw o("Readable.some")}toArray(e){throw o("Readable.toArray")}every(e,t){throw o("Readable.every")}flatMap(e,t){throw o("Readable.flatMap")}drop(e,t){throw o("Readable.drop")}take(e,t){throw o("Readable.take")}asIndexedPairs(e){throw o("Readable.asIndexedPairs")}}class l extends EventEmitter{__unenv__={};writable=true;writableEnded=false;writableFinished=false;writableHighWaterMark=0;writableLength=0;writableObjectMode=false;writableCorked=0;closed=false;errored=null;writableNeedDrain=false;destroyed=false;_data;_encoding="utf8";constructor(e){super();}pipe(e,t){return {}}_write(e,t,r){if(this.writableEnded){r&&r();return}if(this._data===void 0)this._data=e;else {const s=typeof this._data=="string"?Buffer$1.from(this._data,this._encoding||t||"utf8"):this._data,a=typeof e=="string"?Buffer$1.from(e,t||this._encoding||"utf8"):e;this._data=Buffer$1.concat([s,a]);}this._encoding=t,r&&r();}_writev(e,t){}_destroy(e,t){}_final(e){}write(e,t,r){const s=typeof t=="string"?this._encoding:"utf8",a=typeof t=="function"?t:typeof r=="function"?r:void 0;return this._write(e,s,a),true}setDefaultEncoding(e){return this}end(e,t,r){const s=typeof e=="function"?e:typeof t=="function"?t:typeof r=="function"?r:void 0;if(this.writableEnded)return s&&s(),this;const a=e===s?void 0:e;if(a){const u=t===s?void 0:t;this.write(a,u,s);}return this.writableEnded=true,this.writableFinished=true,this.emit("close"),this.emit("finish"),this}cork(){}uncork(){}destroy(e){return this.destroyed=true,delete this._data,this.removeAllListeners(),this}compose(e,t){throw new Error("Method not implemented.")}}const c$1=class c{allowHalfOpen=true;_destroy;constructor(e=new i,t=new l){Object.assign(this,e),Object.assign(this,t),this._destroy=g$1(e._destroy,t._destroy);}};function _$1(){return Object.assign(c$1.prototype,i.prototype),Object.assign(c$1.prototype,l.prototype),c$1}function g$1(...n){return function(...e){for(const t of n)t(...e);}}const m$1=_$1();let A$1 = class A extends m$1{__unenv__={};bufferSize=0;bytesRead=0;bytesWritten=0;connecting=false;destroyed=false;pending=false;localAddress="";localPort=0;remoteAddress="";remoteFamily="";remotePort=0;autoSelectFamilyAttemptedAddresses=[];readyState="readOnly";constructor(e){super();}write(e,t,r){return  false}connect(e,t,r){return this}end(e,t,r){return this}setEncoding(e){return this}pause(){return this}resume(){return this}setTimeout(e,t){return this}setNoDelay(e){return this}setKeepAlive(e,t){return this}address(){return {}}unref(){return this}ref(){return this}destroySoon(){this.destroy();}resetAndDestroy(){const e=new Error("ERR_SOCKET_CLOSED");return e.code="ERR_SOCKET_CLOSED",this.destroy(e),this}};class y extends i{aborted=false;httpVersion="1.1";httpVersionMajor=1;httpVersionMinor=1;complete=true;connection;socket;headers={};trailers={};method="GET";url="/";statusCode=200;statusMessage="";closed=false;errored=null;readable=false;constructor(e){super(),this.socket=this.connection=e||new A$1;}get rawHeaders(){const e=this.headers,t=[];for(const r in e)if(Array.isArray(e[r]))for(const s of e[r])t.push(r,s);else t.push(r,e[r]);return t}get rawTrailers(){return []}setTimeout(e,t){return this}get headersDistinct(){return p(this.headers)}get trailersDistinct(){return p(this.trailers)}}function p(n){const e={};for(const[t,r]of Object.entries(n))t&&(e[t]=(Array.isArray(r)?r:[r]).filter(Boolean));return e}class w extends l{statusCode=200;statusMessage="";upgrading=false;chunkedEncoding=false;shouldKeepAlive=false;useChunkedEncodingByDefault=false;sendDate=false;finished=false;headersSent=false;strictContentLength=false;connection=null;socket=null;req;_headers={};constructor(e){super(),this.req=e;}assignSocket(e){e._httpMessage=this,this.socket=e,this.connection=e,this.emit("socket",e),this._flush();}_flush(){this.flushHeaders();}detachSocket(e){}writeContinue(e){}writeHead(e,t,r){e&&(this.statusCode=e),typeof t=="string"&&(this.statusMessage=t,t=void 0);const s=r||t;if(s&&!Array.isArray(s))for(const a in s)this.setHeader(a,s[a]);return this.headersSent=true,this}writeProcessing(){}setTimeout(e,t){return this}appendHeader(e,t){e=e.toLowerCase();const r=this._headers[e],s=[...Array.isArray(r)?r:[r],...Array.isArray(t)?t:[t]].filter(Boolean);return this._headers[e]=s.length>1?s:s[0],this}setHeader(e,t){return this._headers[e.toLowerCase()]=t,this}setHeaders(e){for(const[t,r]of Object.entries(e))this.setHeader(t,r);return this}getHeader(e){return this._headers[e.toLowerCase()]}getHeaders(){return this._headers}getHeaderNames(){return Object.keys(this._headers)}hasHeader(e){return e.toLowerCase()in this._headers}removeHeader(e){delete this._headers[e.toLowerCase()];}addTrailers(e){}flushHeaders(){}writeEarlyHints(e,t){typeof t=="function"&&t();}}const E=(()=>{const n=function(){};return n.prototype=Object.create(null),n})();function R$1(n={}){const e=new E,t=Array.isArray(n)||H(n)?n:Object.entries(n);for(const[r,s]of t)if(s){if(e[r]===void 0){e[r]=s;continue}e[r]=[...Array.isArray(e[r])?e[r]:[e[r]],...Array.isArray(s)?s:[s]];}return e}function H(n){return typeof n?.entries=="function"}function S(n={}){if(n instanceof Headers)return n;const e=new Headers;for(const[t,r]of Object.entries(n))if(r!==void 0){if(Array.isArray(r)){for(const s of r)e.append(t,String(s));continue}e.set(t,String(r));}return e}const C=new Set([101,204,205,304]);async function b$1(n,e){const t=new y,r=new w(t);t.url=e.url?.toString()||"/";let s;if(!t.url.startsWith("/")){const d=new URL(t.url);s=d.host,t.url=d.pathname+d.search+d.hash;}t.method=e.method||"GET",t.headers=R$1(e.headers||{}),t.headers.host||(t.headers.host=e.host||s||"localhost"),t.connection.encrypted=t.connection.encrypted||e.protocol==="https",t.body=e.body||null,t.__unenv__=e.context,await n(t,r);let a=r._data;(C.has(r.statusCode)||t.method.toUpperCase()==="HEAD")&&(a=null,delete r._headers["content-length"]);const u={status:r.statusCode,statusText:r.statusMessage,headers:r._headers,body:a};return t.destroy(),r.destroy(),u}async function O(n,e,t={}){try{const r=await b$1(n,{url:e,...t});return new Response(r.body,{status:r.status,statusText:r.statusText,headers:S(r.headers)})}catch(r){return new Response(r.toString(),{status:Number.parseInt(r.statusCode||r.code)||500,statusText:r.statusText})}}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== undefined) {
      obj.data = this.data;
    }
    return obj;
  }
}
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== undefined) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== undefined) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, undefined, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(undefined);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== undefined) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => undefined);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== undefined) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== undefined) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : undefined;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : undefined;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === undefined ? undefined : await val;
      if (_body !== undefined) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, undefined);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, undefined);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, undefined)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, undefined, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, undefined, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, undefined, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === undefined && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

const _globalThis$1 = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
}();
const fetch = _globalThis$1.fetch ? (...args) => _globalThis$1.fetch(...args) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"));
const Headers$1 = _globalThis$1.Headers;
const AbortController$1 = _globalThis$1.AbortController;
createFetch({ fetch, Headers: Headers$1, AbortController: AbortController$1 });

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$0 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const appConfig$1 = {"name":"vinxi","routers":[{"name":"public","type":"static","dir":"./public","base":"/","root":"/home/abdelrahman/Desktop/Projects/tradezen","order":0,"outDir":"/home/abdelrahman/Desktop/Projects/tradezen/.vinxi/build/public"},{"name":"client","type":"client","target":"browser","handler":"app/client.tsx","base":"/_build","build":{"sourcemap":true},"root":"/home/abdelrahman/Desktop/Projects/tradezen","outDir":"/home/abdelrahman/Desktop/Projects/tradezen/.vinxi/build/client","order":1},{"name":"ssr","type":"http","target":"server","handler":"app/ssr.tsx","link":{"client":"client"},"root":"/home/abdelrahman/Desktop/Projects/tradezen","base":"/","outDir":"/home/abdelrahman/Desktop/Projects/tradezen/.vinxi/build/ssr","order":2},{"name":"server","type":"http","target":"server","base":"/_server","handler":"node_modules/@tanstack/start-server-functions-handler/dist/esm/index.js","root":"/home/abdelrahman/Desktop/Projects/tradezen","outDir":"/home/abdelrahman/Desktop/Projects/tradezen/.vinxi/build/server","order":3},{"name":"api","base":"/api","type":"http","handler":"app/api.ts","target":"server","root":"/home/abdelrahman/Desktop/Projects/tradezen","outDir":"/home/abdelrahman/Desktop/Projects/tradezen/.vinxi/build/api","order":4}],"server":{"preset":"bun","experimental":{"asyncContext":true}},"root":"/home/abdelrahman/Desktop/Projects/tradezen"};
				const buildManifest = {"client":{"/home/abdelrahman/Desktop/Projects/tradezen/app/styles/globals.css":{"file":"assets/globals-rVquqrgn.css","src":"/home/abdelrahman/Desktop/Projects/tradezen/app/styles/globals.css"},"__vite-browser-external":{"file":"assets/__vite-browser-external-BIHI7g3E.js","name":"__vite-browser-external","src":"__vite-browser-external","isDynamicEntry":true},"_card-DjpNtxYb.js":{"file":"assets/card-DjpNtxYb.js","name":"card","imports":["_client-BbWzF__1.js"]},"_checkbox-BJyijGEJ.js":{"file":"assets/checkbox-BJyijGEJ.js","name":"checkbox","imports":["_client-BbWzF__1.js","_label-B8V1LF47.js"]},"_client-BbWzF__1.js":{"file":"assets/client-BbWzF__1.js","name":"client","dynamicImports":["__vite-browser-external","__vite-browser-external","__vite-browser-external","__vite-browser-external","app/routes/index.tsx?tsr-split=component","app/routes/purchase/index.tsx?tsr-split=component","app/routes/adoptme/index.tsx?tsr-split=component","app/routes/(profile)/profile.tsx?tsr-split=component","app/routes/(image)/image.tsx?tsr-split=component","app/routes/(auth)/register.tsx?tsr-split=component","app/routes/(auth)/login.tsx?tsr-split=component","app/routes/adoptme/product/index.tsx?tsr-split=component","app/routes/adoptme/product/$productId.tsx?tsr-split=component"],"assets":["assets/globals-rVquqrgn.css"]},"_heart-8OFFQff5.js":{"file":"assets/heart-8OFFQff5.js","name":"heart","imports":["_client-BbWzF__1.js"]},"_index-DdWgE4YF.js":{"file":"assets/index-DdWgE4YF.js","name":"index","imports":["_client-BbWzF__1.js","_label-B8V1LF47.js"]},"_label-B8V1LF47.js":{"file":"assets/label-B8V1LF47.js","name":"label","imports":["_client-BbWzF__1.js"]},"_separator-DAAjRxWH.js":{"file":"assets/separator-DAAjRxWH.js","name":"separator","imports":["_client-BbWzF__1.js"]},"_star-BtUBRYAl.js":{"file":"assets/star-BtUBRYAl.js","name":"star","imports":["_client-BbWzF__1.js"]},"_use-auth-Duu0b3vJ.js":{"file":"assets/use-auth-Duu0b3vJ.js","name":"use-auth","imports":["_index-DdWgE4YF.js","_client-BbWzF__1.js"]},"app/routes/(auth)/login.tsx?tsr-split=component":{"file":"assets/login-93SKPPT2.js","name":"login","src":"app/routes/(auth)/login.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-BbWzF__1.js","_card-DjpNtxYb.js","_separator-DAAjRxWH.js","_checkbox-BJyijGEJ.js","_index-DdWgE4YF.js","_use-auth-Duu0b3vJ.js","_label-B8V1LF47.js"]},"app/routes/(auth)/register.tsx?tsr-split=component":{"file":"assets/register-Czwb_8hM.js","name":"register","src":"app/routes/(auth)/register.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-BbWzF__1.js","_card-DjpNtxYb.js","_separator-DAAjRxWH.js","_checkbox-BJyijGEJ.js","_index-DdWgE4YF.js","_use-auth-Duu0b3vJ.js","_label-B8V1LF47.js"]},"app/routes/(image)/image.tsx?tsr-split=component":{"file":"assets/image-CT16qQ_J.js","name":"image","src":"app/routes/(image)/image.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-BbWzF__1.js"]},"app/routes/(profile)/profile.tsx?tsr-split=component":{"file":"assets/profile-jSPaK__n.js","name":"profile","src":"app/routes/(profile)/profile.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-BbWzF__1.js","_card-DjpNtxYb.js","_star-BtUBRYAl.js","_separator-DAAjRxWH.js"]},"app/routes/adoptme/index.tsx?tsr-split=component":{"file":"assets/index-BCR7mHbl.js","name":"index","src":"app/routes/adoptme/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-BbWzF__1.js"]},"app/routes/adoptme/product/$productId.tsx?tsr-split=component":{"file":"assets/_productId-DSwcuO6b.js","name":"_productId","src":"app/routes/adoptme/product/$productId.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-BbWzF__1.js","_index-DdWgE4YF.js","_star-BtUBRYAl.js","_heart-8OFFQff5.js","_label-B8V1LF47.js"]},"app/routes/adoptme/product/index.tsx?tsr-split=component":{"file":"assets/index-cG2WfIEi.js","name":"index","src":"app/routes/adoptme/product/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-BbWzF__1.js","_card-DjpNtxYb.js","_label-B8V1LF47.js","_checkbox-BJyijGEJ.js","_heart-8OFFQff5.js"]},"app/routes/index.tsx?tsr-split=component":{"file":"assets/index-Bhd87MuP.js","name":"index","src":"app/routes/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-BbWzF__1.js"]},"app/routes/purchase/index.tsx?tsr-split=component":{"file":"assets/index-DQSsSD1Q.js","name":"index","src":"app/routes/purchase/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-BbWzF__1.js","_card-DjpNtxYb.js"]},"virtual:$vinxi/handler/client":{"file":"assets/client-CEnd6UcF.js","name":"client","src":"virtual:$vinxi/handler/client","isEntry":true,"imports":["_client-BbWzF__1.js"]}},"ssr":{"/home/abdelrahman/Desktop/Projects/tradezen/app/styles/globals.css":{"file":"assets/globals-rVquqrgn.css","src":"/home/abdelrahman/Desktop/Projects/tradezen/app/styles/globals.css"},"_card-tRlVEYGk.js":{"file":"assets/card-tRlVEYGk.js","name":"card","imports":["_ssr-BPb_PC5K.js"]},"_checkbox-aRDEe1GE.js":{"file":"assets/checkbox-aRDEe1GE.js","name":"checkbox","imports":["_ssr-BPb_PC5K.js"]},"_index-CmPS2ZF8.js":{"file":"assets/index-CmPS2ZF8.js","name":"index","imports":["_ssr-BPb_PC5K.js","_label-y2IlTGIT.js"]},"_label-y2IlTGIT.js":{"file":"assets/label-y2IlTGIT.js","name":"label","imports":["_ssr-BPb_PC5K.js"]},"_separator-t18pzJr7.js":{"file":"assets/separator-t18pzJr7.js","name":"separator","imports":["_ssr-BPb_PC5K.js"]},"_ssr-BPb_PC5K.js":{"file":"assets/ssr-BPb_PC5K.js","name":"ssr","dynamicImports":["app/routes/index.tsx?tsr-split=component","app/routes/purchase/index.tsx?tsr-split=component","app/routes/adoptme/index.tsx?tsr-split=component","app/routes/(profile)/profile.tsx?tsr-split=component","app/routes/(image)/image.tsx?tsr-split=component","app/routes/(auth)/register.tsx?tsr-split=component","app/routes/(auth)/login.tsx?tsr-split=component","app/routes/adoptme/product/index.tsx?tsr-split=component","app/routes/adoptme/product/$productId.tsx?tsr-split=component"],"assets":["assets/globals-rVquqrgn.css"]},"_use-auth-BKNcJz6y.js":{"file":"assets/use-auth-BKNcJz6y.js","name":"use-auth","imports":["_ssr-BPb_PC5K.js"]},"app/routes/(auth)/login.tsx?tsr-split=component":{"file":"assets/login-zb3lkpux.js","name":"login","src":"app/routes/(auth)/login.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-BPb_PC5K.js","_card-tRlVEYGk.js","_separator-t18pzJr7.js","_checkbox-aRDEe1GE.js","_index-CmPS2ZF8.js","_use-auth-BKNcJz6y.js","_label-y2IlTGIT.js"]},"app/routes/(auth)/register.tsx?tsr-split=component":{"file":"assets/register-Bhh-pqdN.js","name":"register","src":"app/routes/(auth)/register.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-BPb_PC5K.js","_card-tRlVEYGk.js","_separator-t18pzJr7.js","_checkbox-aRDEe1GE.js","_index-CmPS2ZF8.js","_use-auth-BKNcJz6y.js","_label-y2IlTGIT.js"]},"app/routes/(image)/image.tsx?tsr-split=component":{"file":"assets/image-Ba4jFhJT.js","name":"image","src":"app/routes/(image)/image.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-BPb_PC5K.js"]},"app/routes/(profile)/profile.tsx?tsr-split=component":{"file":"assets/profile-CD4F1pNk.js","name":"profile","src":"app/routes/(profile)/profile.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-BPb_PC5K.js","_card-tRlVEYGk.js","_separator-t18pzJr7.js"]},"app/routes/adoptme/index.tsx?tsr-split=component":{"file":"assets/index-Ca9bNGwV.js","name":"index","src":"app/routes/adoptme/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-BPb_PC5K.js"]},"app/routes/adoptme/product/$productId.tsx?tsr-split=component":{"file":"assets/_productId-XJfSvn7f.js","name":"_productId","src":"app/routes/adoptme/product/$productId.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-BPb_PC5K.js","_index-CmPS2ZF8.js","_label-y2IlTGIT.js"]},"app/routes/adoptme/product/index.tsx?tsr-split=component":{"file":"assets/index-QkHsVuCT.js","name":"index","src":"app/routes/adoptme/product/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-BPb_PC5K.js","_card-tRlVEYGk.js","_label-y2IlTGIT.js","_checkbox-aRDEe1GE.js"]},"app/routes/index.tsx?tsr-split=component":{"file":"assets/index-B3BY1eXu.js","name":"index","src":"app/routes/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-BPb_PC5K.js"]},"app/routes/purchase/index.tsx?tsr-split=component":{"file":"assets/index-BsoPPNCX.js","name":"index","src":"app/routes/purchase/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_card-tRlVEYGk.js","_ssr-BPb_PC5K.js"]},"virtual:$vinxi/handler/ssr":{"file":"ssr.js","name":"ssr","src":"virtual:$vinxi/handler/ssr","isEntry":true,"imports":["_ssr-BPb_PC5K.js"]}},"server":{"__productId-Dq1GjOXT.js":{"file":"assets/_productId-Dq1GjOXT.js","name":"_productId","isDynamicEntry":true,"imports":["_db-Dk0lmzCx.js","_button-BfHo8OYZ.js","_index-ujMS-7Qz.js"],"dynamicImports":["app/routes/adoptme/product/$productId.tsx?tsr-split=component","app/routes/adoptme/product/$productId.tsx?tsr-split=component"]},"_add-list-CNuhmZ-z.js":{"file":"assets/add-list-CNuhmZ-z.js","name":"add-list"},"_auth-BQLVW3eF.js":{"file":"assets/auth-BQLVW3eF.js","name":"auth","imports":["_db-Dk0lmzCx.js"]},"_button-BfHo8OYZ.js":{"file":"assets/button-BfHo8OYZ.js","name":"button"},"_db-Dk0lmzCx.js":{"file":"assets/db-Dk0lmzCx.js","name":"db"},"_index-ujMS-7Qz.js":{"file":"assets/index-ujMS-7Qz.js","name":"index"},"_label-VW7FWnBR.js":{"file":"assets/label-VW7FWnBR.js","name":"label","imports":["_button-BfHo8OYZ.js"]},"_try-catch-D16SHkYg.js":{"file":"assets/try-catch-D16SHkYg.js","name":"try-catch"},"app/hooks/use-add-listing.tsx?tsr-directive-use-server=":{"file":"assets/use-add-listing-Dd-d_uQI.js","name":"use-add-listing","src":"app/hooks/use-add-listing.tsx?tsr-directive-use-server=","isDynamicEntry":true,"imports":["_add-list-CNuhmZ-z.js","_auth-BQLVW3eF.js","_try-catch-D16SHkYg.js","_db-Dk0lmzCx.js","_index-ujMS-7Qz.js"]},"app/routes/adoptme/product/$productId.tsx?tsr-split=component":{"file":"assets/_productId-N189NAYg.js","name":"_productId","src":"app/routes/adoptme/product/$productId.tsx?tsr-split=component","isDynamicEntry":true,"imports":["__productId-Dq1GjOXT.js","_button-BfHo8OYZ.js","_label-VW7FWnBR.js","_add-list-CNuhmZ-z.js","_auth-BQLVW3eF.js","_try-catch-D16SHkYg.js","_db-Dk0lmzCx.js","_index-ujMS-7Qz.js"]},"app/routes/adoptme/product/index.tsx?tsr-directive-use-server=":{"file":"assets/index-BperKM6C.js","name":"index","src":"app/routes/adoptme/product/index.tsx?tsr-directive-use-server=","isDynamicEntry":true,"imports":["_db-Dk0lmzCx.js","_index-ujMS-7Qz.js"],"dynamicImports":["app/routes/adoptme/product/index.tsx?tsr-split=component"]},"app/routes/adoptme/product/index.tsx?tsr-split=component":{"file":"assets/index-Cx60pwQq.js","name":"index","src":"app/routes/adoptme/product/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_button-BfHo8OYZ.js","_label-VW7FWnBR.js","_db-Dk0lmzCx.js","_index-ujMS-7Qz.js"]},"app/routes/index.tsx?tsr-directive-use-server=":{"file":"assets/index-DRiyjAYv.js","name":"index","src":"app/routes/index.tsx?tsr-directive-use-server=","isDynamicEntry":true,"imports":["_db-Dk0lmzCx.js","_index-ujMS-7Qz.js"],"dynamicImports":["app/routes/index.tsx?tsr-split=component"]},"app/routes/index.tsx?tsr-split=component":{"file":"assets/index-DXH86GHq.js","name":"index","src":"app/routes/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_db-Dk0lmzCx.js","_index-ujMS-7Qz.js"]},"app/services/auth.ts?tsr-directive-use-server=":{"file":"assets/auth-DE5cr9US.js","name":"auth","src":"app/services/auth.ts?tsr-directive-use-server=","isDynamicEntry":true,"imports":["_auth-BQLVW3eF.js","_index-ujMS-7Qz.js","_db-Dk0lmzCx.js"]},"app/services/uploadthing.ts?tsr-directive-use-server=":{"file":"assets/uploadthing-zlieZ1dV.js","name":"uploadthing","src":"app/services/uploadthing.ts?tsr-directive-use-server=","isDynamicEntry":true,"imports":["_try-catch-D16SHkYg.js","_index-ujMS-7Qz.js"]},"virtual:$vinxi/handler/server":{"file":"server.js","name":"server","src":"virtual:$vinxi/handler/server","isEntry":true,"dynamicImports":["app/routes/index.tsx?tsr-directive-use-server=","app/routes/adoptme/product/index.tsx?tsr-directive-use-server=","__productId-Dq1GjOXT.js","__productId-Dq1GjOXT.js","__productId-Dq1GjOXT.js","__productId-Dq1GjOXT.js","app/services/auth.ts?tsr-directive-use-server=","app/services/uploadthing.ts?tsr-directive-use-server=","app/hooks/use-add-listing.tsx?tsr-directive-use-server="]}},"api":{"_index-DrUH9HST.js":{"file":"assets/index-DrUH9HST.js","name":"index","dynamicImports":["app/routes/api/create-checkout-session.ts?pick=APIRoute","app/routes/api/create-checkout-session.ts?pick=APIRoute","app/routes/api/auth/$.ts?pick=APIRoute","app/routes/api/auth/$.ts?pick=APIRoute"]},"app/routes/api/auth/$.ts?pick=APIRoute":{"file":"_.js","name":"_","src":"app/routes/api/auth/$.ts?pick=APIRoute","isEntry":true,"isDynamicEntry":true,"imports":["_index-DrUH9HST.js"]},"app/routes/api/create-checkout-session.ts?pick=APIRoute":{"file":"create-checkout-session.js","name":"create-checkout-session","src":"app/routes/api/create-checkout-session.ts?pick=APIRoute","isEntry":true,"isDynamicEntry":true,"imports":["_index-DrUH9HST.js"]},"virtual:$vinxi/handler/api":{"file":"api.js","name":"api","src":"virtual:$vinxi/handler/api","isEntry":true,"imports":["_index-DrUH9HST.js"]}}};

				const routeManifest = {"api":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin$2(app) {
          const prodApp = createProdApp(appConfig$1);
          globalThis.app = prodApp;
        }

function plugin$1(app) {
	globalThis.$handle = (event) => app.h3App.handler(event);
}

/**
 * Traverses the module graph and collects assets for a given chunk
 *
 * @param {any} manifest Client manifest
 * @param {string} id Chunk id
 * @param {Map<string, string[]>} assetMap Cache of assets
 * @param {string[]} stack Stack of chunk ids to prevent circular dependencies
 * @returns Array of asset URLs
 */
function findAssetsInViteManifest(manifest, id, assetMap = new Map(), stack = []) {
	if (stack.includes(id)) {
		return [];
	}

	const cached = assetMap.get(id);
	if (cached) {
		return cached;
	}
	const chunk = manifest[id];
	if (!chunk) {
		return [];
	}

	const assets = [
		...(chunk.assets?.filter(Boolean) || []),
		...(chunk.css?.filter(Boolean) || [])
	];
	if (chunk.imports) {
		stack.push(id);
		for (let i = 0, l = chunk.imports.length; i < l; i++) {
			assets.push(...findAssetsInViteManifest(manifest, chunk.imports[i], assetMap, stack));
		}
		stack.pop();
	}
	assets.push(chunk.file);
	const all = Array.from(new Set(assets));
	assetMap.set(id, all);

	return all;
}

/** @typedef {import("../app.js").App & { config: { buildManifest: { [key:string]: any } }}} ProdApp */

function createHtmlTagsForAssets(router, app, assets) {
	return assets
		.filter(
			(asset) =>
				asset.endsWith(".css") ||
				asset.endsWith(".js") ||
				asset.endsWith(".mjs"),
		)
		.map((asset) => ({
			tag: "link",
			attrs: {
				href: joinURL(app.config.server.baseURL ?? "/", router.base, asset),
				key: join(app.config.server.baseURL ?? "", router.base, asset),
				...(asset.endsWith(".css")
					? { rel: "stylesheet", fetchPriority: "high" }
					: { rel: "modulepreload" }),
			},
		}));
}

/**
 *
 * @param {ProdApp} app
 * @returns
 */
function createProdManifest(app) {
	const manifest = new Proxy(
		{},
		{
			get(target, routerName) {
				invariant(typeof routerName === "string", "Bundler name expected");
				const router = app.getRouter(routerName);
				const bundlerManifest = app.config.buildManifest[routerName];

				invariant(
					router.type !== "static",
					"manifest not available for static router",
				);
				return {
					handler: router.handler,
					async assets() {
						/** @type {{ [key: string]: string[] }} */
						let assets = {};
						assets[router.handler] = await this.inputs[router.handler].assets();
						for (const route of (await router.internals.routes?.getRoutes()) ??
							[]) {
							assets[route.filePath] = await this.inputs[
								route.filePath
							].assets();
						}
						return assets;
					},
					async routes() {
						return (await router.internals.routes?.getRoutes()) ?? [];
					},
					async json() {
						/** @type {{ [key: string]: { output: string; assets: string[]} }} */
						let json = {};
						for (const input of Object.keys(this.inputs)) {
							json[input] = {
								output: this.inputs[input].output.path,
								assets: await this.inputs[input].assets(),
							};
						}
						return json;
					},
					chunks: new Proxy(
						{},
						{
							get(target, chunk) {
								invariant(typeof chunk === "string", "Chunk expected");
								const chunkPath = join(
									router.outDir,
									router.base,
									chunk + ".mjs",
								);
								return {
									import() {
										if (globalThis.$$chunks[chunk + ".mjs"]) {
											return globalThis.$$chunks[chunk + ".mjs"];
										}
										return import(
											/* @vite-ignore */ pathToFileURL(chunkPath).href
										);
									},
									output: {
										path: chunkPath,
									},
								};
							},
						},
					),
					inputs: new Proxy(
						{},
						{
							ownKeys(target) {
								const keys = Object.keys(bundlerManifest)
									.filter((id) => bundlerManifest[id].isEntry)
									.map((id) => id);
								return keys;
							},
							getOwnPropertyDescriptor(k) {
								return {
									enumerable: true,
									configurable: true,
								};
							},
							get(target, input) {
								invariant(typeof input === "string", "Input expected");
								if (router.target === "server") {
									const id =
										input === router.handler
											? virtualId(handlerModule(router))
											: input;
									return {
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: join(
												router.outDir,
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								} else if (router.target === "browser") {
									const id =
										input === router.handler && !input.endsWith(".html")
											? virtualId(handlerModule(router))
											: input;
									return {
										import() {
											return import(
												/* @vite-ignore */ joinURL(
													app.config.server.baseURL ?? "",
													router.base,
													bundlerManifest[id].file,
												)
											);
										},
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: joinURL(
												app.config.server.baseURL ?? "",
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								}
							},
						},
					),
				};
			},
		},
	);

	return manifest;
}

function plugin() {
	globalThis.MANIFEST =
		createProdManifest(globalThis.app)
			;
}

const chunks = {};
			 




			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin$2,
plugin$1,
plugin,
app
];

const assets$1 = {
  "/banking-coin-svgrepo-com.svg": {
    "type": "image/svg+xml",
    "etag": "\"136e-UCZPn5NFFuls3eBDr9qt/MkGb1I\"",
    "mtime": "2025-04-03T00:15:39.938Z",
    "size": 4974,
    "path": "../public/banking-coin-svgrepo-com.svg"
  },
  "/discord.svg": {
    "type": "image/svg+xml",
    "etag": "\"40b-C7SyCPUife9RH7v6h5VicdbTIcQ\"",
    "mtime": "2025-04-03T00:15:39.938Z",
    "size": 1035,
    "path": "../public/discord.svg"
  },
  "/roblox_light.svg": {
    "type": "image/svg+xml",
    "etag": "\"57c-u5FAvV1d5DjzTwCKhIlxeXYUSCw\"",
    "mtime": "2025-04-03T00:15:39.938Z",
    "size": 1404,
    "path": "../public/roblox_light.svg"
  },
  "/test.png": {
    "type": "image/png",
    "etag": "\"7faa-HTZT5v1TqpAKKMmvklMYkMENmng\"",
    "mtime": "2025-04-03T00:15:39.944Z",
    "size": 32682,
    "path": "../public/test.png"
  },
  "/assets/globals-rVquqrgn.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"16261-nZFUB49fB8FGIFRKIZ0m41Q+324\"",
    "mtime": "2025-04-03T00:15:39.956Z",
    "size": 90721,
    "path": "../public/assets/globals-rVquqrgn.css"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "etag": "\"16e1-BUiJJFd2AGeSYK2RyVS/VbHNF7E\"",
    "mtime": "2025-04-03T00:15:39.951Z",
    "size": 5857,
    "path": "../public/_build/.vite/manifest.json"
  },
  "/_build/assets/__vite-browser-external-BIHI7g3E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"21-TnSDqNzuAbz1l2Zfx/fW4jY7tlk\"",
    "mtime": "2025-04-03T00:15:39.951Z",
    "size": 33,
    "path": "../public/_build/assets/__vite-browser-external-BIHI7g3E.js"
  },
  "/_build/assets/_productId-DSwcuO6b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5764-twpZbjYedY9hbfsgAA8O7bZ7xh0\"",
    "mtime": "2025-04-03T00:15:39.951Z",
    "size": 22372,
    "path": "../public/_build/assets/_productId-DSwcuO6b.js"
  },
  "/_build/assets/card-DjpNtxYb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"839-/HkDZOETfsp3lWhTHNumUCel6lg\"",
    "mtime": "2025-04-03T00:15:39.951Z",
    "size": 2105,
    "path": "../public/_build/assets/card-DjpNtxYb.js"
  },
  "/_build/assets/checkbox-BJyijGEJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ca7-bNu68SleLz1XZ13nbvtfX/U4aYY\"",
    "mtime": "2025-04-03T00:15:39.952Z",
    "size": 3239,
    "path": "../public/_build/assets/checkbox-BJyijGEJ.js"
  },
  "/_build/assets/client-BbWzF__1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"94899-MwEzRryGteZTpnoXr+dMnrIrb3g\"",
    "mtime": "2025-04-03T00:15:39.952Z",
    "size": 608409,
    "path": "../public/_build/assets/client-BbWzF__1.js"
  },
  "/_build/assets/client-CEnd6UcF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"40-PXOACz91x/gbF/ijKJykTOo6dDg\"",
    "mtime": "2025-04-03T00:15:39.952Z",
    "size": 64,
    "path": "../public/_build/assets/client-CEnd6UcF.js"
  },
  "/_build/assets/globals-rVquqrgn.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"16261-nZFUB49fB8FGIFRKIZ0m41Q+324\"",
    "mtime": "2025-04-03T00:15:39.951Z",
    "size": 90721,
    "path": "../public/_build/assets/globals-rVquqrgn.css"
  },
  "/_build/assets/heart-8OFFQff5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a3-+ary++Dz9917JLIN1lI5sqn53Us\"",
    "mtime": "2025-04-03T00:15:39.951Z",
    "size": 419,
    "path": "../public/_build/assets/heart-8OFFQff5.js"
  },
  "/_build/assets/image-CT16qQ_J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"263-lnD+hd6ItEuQDlxJKBDsEl3zIFo\"",
    "mtime": "2025-04-03T00:15:39.951Z",
    "size": 611,
    "path": "../public/_build/assets/image-CT16qQ_J.js"
  },
  "/_build/assets/index-BCR7mHbl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"177-ZhigSzeGWVVsyYJG7xT6M1QDwOc\"",
    "mtime": "2025-04-03T00:15:39.952Z",
    "size": 375,
    "path": "../public/_build/assets/index-BCR7mHbl.js"
  },
  "/_build/assets/index-Bhd87MuP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2c2-Gek29LAke2jOlg1a87JET8wHBec\"",
    "mtime": "2025-04-03T00:15:39.952Z",
    "size": 706,
    "path": "../public/_build/assets/index-Bhd87MuP.js"
  },
  "/_build/assets/index-DQSsSD1Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1058-XkIDeCArv53miLTO2+a9+NPiJ8g\"",
    "mtime": "2025-04-03T00:15:39.951Z",
    "size": 4184,
    "path": "../public/_build/assets/index-DQSsSD1Q.js"
  },
  "/_build/assets/index-DdWgE4YF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"38693-2UOH+/P/CwWiyz2HSV4UPWZtbGI\"",
    "mtime": "2025-04-03T00:15:39.952Z",
    "size": 231059,
    "path": "../public/_build/assets/index-DdWgE4YF.js"
  },
  "/_build/assets/index-cG2WfIEi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1750-sj0HqKR8OpQkEHPv7ufHi7s3N8s\"",
    "mtime": "2025-04-03T00:15:39.951Z",
    "size": 5968,
    "path": "../public/_build/assets/index-cG2WfIEi.js"
  },
  "/_build/assets/label-B8V1LF47.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"646f-cMJxQJauvcf84Af88+lUhFK9LB8\"",
    "mtime": "2025-04-03T00:15:39.951Z",
    "size": 25711,
    "path": "../public/_build/assets/label-B8V1LF47.js"
  },
  "/_build/assets/login-93SKPPT2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1216-6tN0pazFZL/EheurWCq9ouLl9gs\"",
    "mtime": "2025-04-03T00:15:39.952Z",
    "size": 4630,
    "path": "../public/_build/assets/login-93SKPPT2.js"
  },
  "/_build/assets/profile-jSPaK__n.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4495-ESygj41CX2tvuPq8YMXf2+1lV1s\"",
    "mtime": "2025-04-03T00:15:39.952Z",
    "size": 17557,
    "path": "../public/_build/assets/profile-jSPaK__n.js"
  },
  "/_build/assets/register-Czwb_8hM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12a2-xKRF8pS2DXsLfk4Jz8WMD+x+M6I\"",
    "mtime": "2025-04-03T00:15:39.952Z",
    "size": 4770,
    "path": "../public/_build/assets/register-Czwb_8hM.js"
  },
  "/_build/assets/separator-DAAjRxWH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"40b-P1xPLhwTZLXiTRh3eaZ5kO4O0XI\"",
    "mtime": "2025-04-03T00:15:39.952Z",
    "size": 1035,
    "path": "../public/_build/assets/separator-DAAjRxWH.js"
  },
  "/_build/assets/star-BtUBRYAl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"54e-9NkV1cj2lrJSCJqCR624cEQ/uiM\"",
    "mtime": "2025-04-03T00:15:39.952Z",
    "size": 1358,
    "path": "../public/_build/assets/star-BtUBRYAl.js"
  },
  "/_build/assets/use-auth-Duu0b3vJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"462c-c4GHwjx1JaiomT+bBRAJEJOXsOQ\"",
    "mtime": "2025-04-03T00:15:39.952Z",
    "size": 17964,
    "path": "../public/_build/assets/use-auth-Duu0b3vJ.js"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets$1[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets$1[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets$1[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _AlCogW = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const $ = { "app_routes_index_tsx--getGames_createServerFn_handler": { functionName: "getGames_createServerFn_handler", importer: () => import('./chunks/build/index-DRiyjAYv.mjs') }, "app_routes_adoptme_product_index_tsx--getGameItems_createServerFn_handler": { functionName: "getGameItems_createServerFn_handler", importer: () => import('./chunks/build/index-BperKM6C.mjs') }, "app_routes_adoptme_product_productId_tsx--getAllGames_createServerFn_handler": { functionName: "getAllGames_createServerFn_handler", importer: () => import('./chunks/build/_productId-Dq1GjOXT.mjs').then((e) => e.$) }, "app_routes_adoptme_product_productId_tsx--getGameItem_createServerFn_handler": { functionName: "getGameItem_createServerFn_handler", importer: () => import('./chunks/build/_productId-Dq1GjOXT.mjs').then((e) => e.$) }, "app_routes_adoptme_product_productId_tsx--searchItems_createServerFn_handler": { functionName: "searchItems_createServerFn_handler", importer: () => import('./chunks/build/_productId-Dq1GjOXT.mjs').then((e) => e.$) }, "app_routes_adoptme_product_productId_tsx--getPaginatedListing_createServerFn_handler": { functionName: "getPaginatedListing_createServerFn_handler", importer: () => import('./chunks/build/_productId-Dq1GjOXT.mjs').then((e) => e.$) }, "app_services_auth_ts--getUser_createServerFn_handler": { functionName: "getUser_createServerFn_handler", importer: () => import('./chunks/build/auth-DE5cr9US.mjs') }, "app_services_uploadthing_ts--uploadImage_createServerFn_handler": { functionName: "uploadImage_createServerFn_handler", importer: () => import('./chunks/build/uploadthing-zlieZ1dV.mjs') }, "app_hooks_use-add-listing_tsx--addListing_createServerFn_handler": { functionName: "addListing_createServerFn_handler", importer: () => import('./chunks/build/use-add-listing-Dd-d_uQI.mjs') } }, U = eventHandler$1(j), m = $;
async function j(e) {
  const n = toWebRequest(e);
  return await A({ request: n, event: e });
}
function b(e) {
  return e.replace(/^\/|\/$/g, "");
}
async function A({ request: e, event: n }) {
  const a = new AbortController(), i = a.signal, h = () => a.abort();
  n.node.req.on("close", h);
  const v = e.method, g = new URL(e.url, "http://localhost:3000"), N = new RegExp(`${b("/_server")}/([^/?#]+)`), w = g.pathname.match(N), o = w ? w[1] : null, c = Object.fromEntries(g.searchParams.entries()), _ = "createServerFn" in c, R = "raw" in c;
  if (typeof o != "string") throw new Error("Invalid server action param for serverFnId: " + o);
  const f = m[o];
  if (!f) throw console.log("serverFnManifest", m), new Error("Server function info not found for " + o);
  let p;
  if (p = await f.importer(), !p) throw console.log("serverFnManifest", m), new Error("Server function module not resolved for " + o);
  const s = p[f.functionName];
  if (!s) throw console.log("serverFnManifest", m), console.log("fnModule", p), new Error(`Server function module export not resolved for serverFn ID: ${o}`);
  const C = ["multipart/form-data", "application/x-www-form-urlencoded"], d = await (async () => {
    try {
      let r = await (async () => {
        if (e.headers.get("Content-Type") && C.some((t) => {
          var S;
          return (S = e.headers.get("Content-Type")) == null ? void 0 : S.includes(t);
        })) return E$1(v.toLowerCase() !== "get", "GET requests with FormData payloads are not supported"), await s(await e.formData(), i);
        if (v.toLowerCase() === "get") {
          let t = c;
          return _ && (t = c.payload), t = t && startSerializer.parse(t), await s(t, i);
        }
        const l = await e.text(), F = startSerializer.parse(l);
        return _ ? await s(F, i) : await s(...F, i);
      })();
      return r.result instanceof Response ? r.result : !_ && (r = r.result, r instanceof Response) ? r : isRedirect(r) || isNotFound(r) ? I$2(r) : new Response(r !== void 0 ? startSerializer.stringify(r) : void 0, { status: getResponseStatus(getEvent()), headers: { "Content-Type": "application/json" } });
    } catch (r) {
      return r instanceof Response ? r : isRedirect(r) || isNotFound(r) ? I$2(r) : (console.info(), console.info("Server Fn Error!"), console.info(), console.error(r), console.info(), new Response(startSerializer.stringify(r), { status: 500, headers: { "Content-Type": "application/json" } }));
    }
  })();
  if (n.node.req.removeListener("close", h), R) return d;
  if (d.headers.get("Content-Type") === "application/json") {
    const l = await d.clone().text();
    l && JSON.stringify(JSON.parse(l));
  }
  return d;
}
function I$2(e) {
  const { headers: n, ...a } = e;
  return new Response(JSON.stringify(a), { status: 200, headers: { "Content-Type": "application/json", ...n || {} } });
}

const f = [{ path: "/__root", filePath: "/home/abdelrahman/Desktop/Projects/tradezen/app/routes/__root.tsx" }, { path: "/", filePath: "/home/abdelrahman/Desktop/Projects/tradezen/app/routes/index.tsx" }, { path: "/(auth)/login", filePath: "/home/abdelrahman/Desktop/Projects/tradezen/app/routes/(auth)/login.tsx" }, { path: "/(auth)/register", filePath: "/home/abdelrahman/Desktop/Projects/tradezen/app/routes/(auth)/register.tsx" }, { path: "/(image)/image", filePath: "/home/abdelrahman/Desktop/Projects/tradezen/app/routes/(image)/image.tsx" }, { path: "/(profile)/profile", filePath: "/home/abdelrahman/Desktop/Projects/tradezen/app/routes/(profile)/profile.tsx" }, { path: "/adoptme", filePath: "/home/abdelrahman/Desktop/Projects/tradezen/app/routes/adoptme/index.tsx" }, { path: "/api/create-checkout-session", filePath: "/home/abdelrahman/Desktop/Projects/tradezen/app/routes/api/create-checkout-session.ts", $APIRoute: { src: "app/routes/api/create-checkout-session.ts?pick=APIRoute", build: () => import('./chunks/build/create-checkout-session.mjs'), import: () => import('./chunks/build/create-checkout-session.mjs') } }, { path: "/purchase", filePath: "/home/abdelrahman/Desktop/Projects/tradezen/app/routes/purchase/index.tsx" }, { path: "/adoptme/product/:$productId?", filePath: "/home/abdelrahman/Desktop/Projects/tradezen/app/routes/adoptme/product/$productId.tsx" }, { path: "/adoptme/product", filePath: "/home/abdelrahman/Desktop/Projects/tradezen/app/routes/adoptme/product/index.tsx" }, { path: "/api/auth/*splat", filePath: "/home/abdelrahman/Desktop/Projects/tradezen/app/routes/api/auth/$.ts", $APIRoute: { src: "app/routes/api/auth/$.ts?pick=APIRoute", build: () => import('./chunks/build/_.mjs'), import: () => import('./chunks/build/_.mjs') } }], P = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
function k(t) {
  return eventHandler$1(async (a) => {
    const r = toWebRequest(a);
    return await t({ request: r });
  });
}
const x = (t) => (a) => ({ path: t, methods: a });
function R(t, a) {
  const r = t.pathname.split("/").filter(Boolean), p = a.sort((o, e) => {
    const s = o.routePath.split("/").filter(Boolean);
    return e.routePath.split("/").filter(Boolean).length - s.length;
  }).filter((o) => {
    const e = o.routePath.split("/").filter(Boolean);
    return r.length >= e.length;
  });
  for (const o of p) {
    const e = o.routePath.split("/").filter(Boolean), s = {};
    let n = true;
    for (let i = 0; i < e.length; i++) {
      const u = e[i], h = r[i];
      if (u.startsWith("$")) if (u === "$") {
        const l = r.slice(i).join("/");
        if (l !== "") s["*"] = l, s._splat = l;
        else {
          n = false;
          break;
        }
      } else {
        const l = u.slice(1);
        s[l] = h;
      }
      else if (u !== h) {
        n = false;
        break;
      }
    }
    if (n) return { routePath: o.routePath, params: s, payload: o.payload };
  }
}
const c = f.filter((t) => t.$APIRoute);
function g(t) {
  const a = [];
  return t.forEach((r) => {
    const o = r.path.split("/").filter(Boolean).map((e) => e === "*splat" ? "$" : e.startsWith(":$") && e.endsWith("?") ? e.slice(1, -1) : e).join("/");
    a.push({ routePath: `/${o}`, payload: r });
  }), a;
}
const I$1 = async ({ request: t }) => {
  if (!c.length) return new Response("No routes found", { status: 404 });
  if (!P.includes(t.method)) return new Response("Method not allowed", { status: 405 });
  const a = g(c), r = new URL(t.url, "http://localhost:3000"), p = R(r, a);
  if (!p) return new Response("Not found", { status: 404 });
  let o;
  try {
    o = await p.payload.$APIRoute.import().then((n) => n.APIRoute);
  } catch (n) {
    return console.error("Error importing route file:", n), new Response("Internal server error", { status: 500 });
  }
  if (!o) return new Response("Internal server error", { status: 500 });
  const e = t.method, s = o.methods[e];
  return s ? await s({ request: t, params: p.params }) : new Response("Method not allowed", { status: 405 });
};

const d = k(I$1);

function re(a) {
  return jsx(RouterProvider, { router: a.router });
}
const St = defineHandlerCallback(async ({ request: a, router: e, responseHeaders: t }) => {
  if (typeof q.renderToReadableStream == "function") {
    const o = await q.renderToReadableStream(jsx(re, { router: e }), { signal: a.signal });
    isbot(a.headers.get("User-Agent")) && await o.allReady;
    const s = transformReadableStreamWithRouter(e, o);
    return new Response(s, { status: e.state.statusCode, headers: t });
  }
  if (typeof q.renderToPipeableStream == "function") {
    const o = new PassThrough();
    try {
      const r = q.renderToPipeableStream(jsx(re, { router: e }), { ...isbot(a.headers.get("User-Agent")) ? { onAllReady() {
        r.pipe(o);
      } } : { onShellReady() {
        r.pipe(o);
      } }, onError: (l, i) => {
        console.error("Error in renderToPipeableStream:", l, i);
      } });
    } catch (r) {
      console.error("Error in renderToPipeableStream:", r);
    }
    const s = transformPipeableStreamWithRouter(e, o);
    return new Response(s, { status: e.state.statusCode, headers: t });
  }
  throw new Error("No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.");
}), Ct = () => ({ routes: { __root__: { filePath: "__root.tsx", children: ["/", "/(auth)/login", "/(auth)/register", "/(image)/image", "/(profile)/profile", "/adoptme/", "/purchase/", "/adoptme/product/$productId", "/adoptme/product/"], preloads: ["/_build/assets/client-CEnd6UcF.js", "/_build/assets/client-BbWzF__1.js"] }, "/": { filePath: "index.tsx" }, "/(auth)/login": { filePath: "(auth)/login.tsx" }, "/(auth)/register": { filePath: "(auth)/register.tsx" }, "/(image)/image": { filePath: "(image)/image.tsx" }, "/(profile)/profile": { filePath: "(profile)/profile.tsx" }, "/adoptme/": { filePath: "adoptme/index.tsx" }, "/purchase/": { filePath: "purchase/index.tsx" }, "/adoptme/product/$productId": { filePath: "adoptme/product/$productId.tsx" }, "/adoptme/product/": { filePath: "adoptme/product/index.tsx" } } });
function Nt(a) {
  return globalThis.MANIFEST[a];
}
function $t() {
  var _a;
  const a = Ct(), e = a.routes.__root__ = a.routes.__root__ || {};
  e.assets = e.assets || [];
  let t = "";
  const o = Nt("client"), s = (_a = o.inputs[o.handler]) == null ? void 0 : _a.output.path;
  return s || E$1(s, "Could not find client entry in vinxi manifest"), e.assets.push({ tag: "script", attrs: { type: "module", suppressHydrationWarning: true, async: true }, children: `${t}import("${s}")` }), a;
}
function Rt() {
  const a = $t();
  return { ...a, routes: Object.fromEntries(Object.entries(a.routes).map(([e, t]) => {
    const { preloads: o, assets: s } = t;
    return [e, { preloads: o, assets: s }];
  })) };
}
const Tt = "/_build/assets/globals-rVquqrgn.css", Et = (a, e, t, o, s, r, l, i) => {
  const c = document.documentElement, d = ["light", "dark"], f = a === "class", h = f && r ? s.map((b) => r[b] || b) : s;
  function u(b) {
    f ? (c.classList.remove(...h), c.classList.add(b)) : c.setAttribute(a, b), y(b);
  }
  function y(b) {
    i && d.includes(b) && (c.style.colorScheme = b);
  }
  function x() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (o) u(o);
  else try {
    const b = localStorage.getItem(e) || t, g = l && b === "system" ? x() : b;
    u(g);
  } catch {
  }
}, ne = ["light", "dark"], pe = "(prefers-color-scheme: dark)", he = N.createContext(void 0), kt = (a) => {
  const e = c$2(2);
  if (N.useContext(he)) return a.children;
  let o;
  return e[0] !== a ? (o = jsx(It, { ...a }), e[0] = a, e[1] = o) : o = e[1], o;
}, Ft = ["light", "dark"], It = ({ forcedTheme: a, disableTransitionOnChange: e = false, enableSystem: t = true, enableColorScheme: o = true, storageKey: s = "theme", themes: r = Ft, defaultTheme: l = t ? "system" : "light", attribute: i = "data-theme", value: c, children: d, nonce: f }) => {
  const [h, u] = N.useState(() => ie()), [y, x] = N.useState(() => ie()), b = c ? Object.values(c) : r, C = N.useCallback((v) => {
    let w = v;
    if (!w) return;
    v === "system" && t && (w = le());
    const F = c ? c[w] : w, M = e ? Pt() : null, E = document.documentElement, z = (k) => {
      k === "class" ? (E.classList.remove(...b), F && E.classList.add(F)) : k.startsWith("data-") && (F ? E.setAttribute(k, F) : E.removeAttribute(k));
    };
    if (Array.isArray(i) ? i.forEach(z) : z(i), o) {
      const k = ne.includes(l) ? l : null, j = ne.includes(w) ? w : k;
      E.style.colorScheme = j;
    }
    M == null ? void 0 : M();
  }, []), g = N.useCallback((v) => {
    const w = typeof v == "function" ? v(h) : v;
    u(w);
    try {
      localStorage.setItem(s, w);
    } catch {
    }
  }, [h]), [S, R] = N.useTransition(), T = N.useCallback((v) => {
    const w = le(v);
    R(() => {
      x(w);
    }), h === "system" && t && !a && C("system");
  }, [h, a]);
  N.useEffect(() => {
    const v = window.matchMedia(pe);
    return v.addListener(T), T(v), () => v.removeListener(T);
  }, [T]), N.useEffect(() => {
    const v = (w) => {
      if (w.key !== s) return;
      const F = w.newValue || l;
      g(F);
    };
    return window.addEventListener("storage", v), () => window.removeEventListener("storage", v);
  }, [g]), N.useEffect(() => {
    C(a != null ? a : h);
  }, [a, h]);
  const $ = N.useMemo(() => ({ theme: h, setTheme: g, forcedTheme: a, resolvedTheme: h === "system" ? y : h, themes: t ? [...r, "system"] : r, systemTheme: t ? y : void 0 }), [h, g, a, y, t, r]);
  return jsxs(he.Provider, { value: $, children: [jsx(zt, { forcedTheme: a, storageKey: s, attribute: i, enableSystem: t, enableColorScheme: o, defaultTheme: l, value: c, themes: r, nonce: f }), d] });
}, zt = N.memo((a) => {
  const e = c$2(5), { forcedTheme: t, storageKey: o, attribute: s, enableSystem: r, enableColorScheme: l, defaultTheme: i, value: c, themes: d, nonce: f } = a, h = JSON.stringify([s, o, i, t, d, c, r, l]).slice(1, -1), u = f , y = `(${Et.toString()})(${h})`;
  let x;
  e[0] !== y ? (x = { __html: y }, e[0] = y, e[1] = x) : x = e[1];
  let b;
  return e[2] !== u || e[3] !== x ? (b = jsx("script", { suppressHydrationWarning: true, nonce: u, dangerouslySetInnerHTML: x }), e[2] = u, e[3] = x, e[4] = b) : b = e[4], b;
}), ie = (a, e) => {
  return;
}, Pt = () => {
  const a = document.createElement("style");
  return a.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(a), () => {
    window.getComputedStyle(document.body), setTimeout(() => {
      document.head.removeChild(a);
    }, 1);
  };
}, le = (a) => (a != null ? a : window.matchMedia(pe)).matches ? "dark" : "light", Z = 768;
function Dt() {
  const a = c$2(2), [e, t] = N.useState(void 0);
  let o, s;
  return a[0] === Symbol.for("react.memo_cache_sentinel") ? (o = () => {
    const r = window.matchMedia(`(max-width: ${Z - 1}px)`), l = () => {
      t(window.innerWidth < Z);
    };
    return r.addEventListener("change", l), t(window.innerWidth < Z), () => r.removeEventListener("change", l);
  }, s = [], a[0] = o, a[1] = s) : (o = a[0], s = a[1]), N.useEffect(o, s), !!e;
}
function _(...a) {
  return twMerge(clsx(a));
}
const At = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", { variants: { variant: { default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90", destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40", outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 px-4 py-2", sm: "h-8 rounded-md px-3 text-xs", lg: "h-10 rounded-md px-8", icon: "size-9" } }, defaultVariants: { variant: "default", size: "default" } });
function Q(a) {
  const e = c$2(14);
  let t, o, s, r, l;
  e[0] !== a ? ({ className: t, variant: l, size: s, asChild: r, ...o } = a, e[0] = a, e[1] = t, e[2] = o, e[3] = s, e[4] = r, e[5] = l) : (t = e[1], o = e[2], s = e[3], r = e[4], l = e[5]);
  const c = (r === void 0 ? false : r) ? Slot : "button";
  let d;
  e[6] !== t || e[7] !== s || e[8] !== l ? (d = _(At({ variant: l, size: s, className: t })), e[6] = t, e[7] = s, e[8] = l, e[9] = d) : d = e[9];
  let f;
  return e[10] !== c || e[11] !== o || e[12] !== d ? (f = jsx(c, { "data-slot": "button", className: d, ...o }), e[10] = c, e[11] = o, e[12] = d, e[13] = f) : f = e[13], f;
}
function Ot(a) {
  const e = c$2(4);
  let t;
  e[0] !== a ? ({ ...t } = a, e[0] = a, e[1] = t) : t = e[1];
  let o;
  return e[2] !== t ? (o = jsx($$1.Root, { "data-slot": "sheet", ...t }), e[2] = t, e[3] = o) : o = e[3], o;
}
function Lt(a) {
  const e = c$2(4);
  let t;
  e[0] !== a ? ({ ...t } = a, e[0] = a, e[1] = t) : t = e[1];
  let o;
  return e[2] !== t ? (o = jsx($$1.Portal, { "data-slot": "sheet-portal", ...t }), e[2] = t, e[3] = o) : o = e[3], o;
}
function Gt(a) {
  const e = c$2(8);
  let t, o;
  e[0] !== a ? ({ className: t, ...o } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  let s;
  e[3] !== t ? (s = _("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", t), e[3] = t, e[4] = s) : s = e[4];
  let r;
  return e[5] !== o || e[6] !== s ? (r = jsx($$1.Overlay, { "data-slot": "sheet-overlay", className: s, ...o }), e[5] = o, e[6] = s, e[7] = r) : r = e[7], r;
}
function jt(a) {
  const e = c$2(17);
  let t, o, s, r;
  e[0] !== a ? ({ className: o, children: t, side: r, ...s } = a, e[0] = a, e[1] = t, e[2] = o, e[3] = s, e[4] = r) : (t = e[1], o = e[2], s = e[3], r = e[4]);
  const l = r === void 0 ? "right" : r;
  let i;
  e[5] === Symbol.for("react.memo_cache_sentinel") ? (i = jsx(Gt, {}), e[5] = i) : i = e[5];
  const c = l === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", d = l === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", f = l === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", h = l === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t";
  let u;
  e[6] !== o || e[7] !== c || e[8] !== d || e[9] !== f || e[10] !== h ? (u = _("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", c, d, f, h, o), e[6] = o, e[7] = c, e[8] = d, e[9] = f, e[10] = h, e[11] = u) : u = e[11];
  let y;
  e[12] === Symbol.for("react.memo_cache_sentinel") ? (y = jsxs($$1.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [jsx(XIcon, { className: "size-4" }), jsx("span", { className: "sr-only", children: "Close" })] }), e[12] = y) : y = e[12];
  let x;
  return e[13] !== t || e[14] !== s || e[15] !== u ? (x = jsxs(Lt, { children: [i, jsxs($$1.Content, { "data-slot": "sheet-content", className: u, ...s, children: [t, y] })] }), e[13] = t, e[14] = s, e[15] = u, e[16] = x) : x = e[16], x;
}
function Bt(a) {
  const e = c$2(8);
  let t, o;
  e[0] !== a ? ({ className: t, ...o } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  let s;
  e[3] !== t ? (s = _("flex flex-col gap-1.5 p-4", t), e[3] = t, e[4] = s) : s = e[4];
  let r;
  return e[5] !== o || e[6] !== s ? (r = jsx("div", { "data-slot": "sheet-header", className: s, ...o }), e[5] = o, e[6] = s, e[7] = r) : r = e[7], r;
}
function Ht(a) {
  const e = c$2(8);
  let t, o;
  e[0] !== a ? ({ className: t, ...o } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  let s;
  e[3] !== t ? (s = _("text-foreground font-semibold", t), e[3] = t, e[4] = s) : s = e[4];
  let r;
  return e[5] !== o || e[6] !== s ? (r = jsx($$1.Title, { "data-slot": "sheet-title", className: s, ...o }), e[5] = o, e[6] = s, e[7] = r) : r = e[7], r;
}
function Wt(a) {
  const e = c$2(8);
  let t, o;
  e[0] !== a ? ({ className: t, ...o } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  let s;
  e[3] !== t ? (s = _("text-muted-foreground text-sm", t), e[3] = t, e[4] = s) : s = e[4];
  let r;
  return e[5] !== o || e[6] !== s ? (r = jsx($$1.Description, { "data-slot": "sheet-description", className: s, ...o }), e[5] = o, e[6] = s, e[7] = r) : r = e[7], r;
}
function ge(a) {
  const e = c$2(6);
  let t, o;
  e[0] !== a ? ({ delayDuration: o, ...t } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  const s = o === void 0 ? 0 : o;
  let r;
  return e[3] !== s || e[4] !== t ? (r = jsx(B.Provider, { "data-slot": "tooltip-provider", delayDuration: s, ...t }), e[3] = s, e[4] = t, e[5] = r) : r = e[5], r;
}
function Vt(a) {
  const e = c$2(4);
  let t;
  e[0] !== a ? ({ ...t } = a, e[0] = a, e[1] = t) : t = e[1];
  let o;
  return e[2] !== t ? (o = jsx(ge, { children: jsx(B.Root, { "data-slot": "tooltip", ...t }) }), e[2] = t, e[3] = o) : o = e[3], o;
}
function Ut(a) {
  const e = c$2(4);
  let t;
  e[0] !== a ? ({ ...t } = a, e[0] = a, e[1] = t) : t = e[1];
  let o;
  return e[2] !== t ? (o = jsx(B.Trigger, { "data-slot": "tooltip-trigger", ...t }), e[2] = t, e[3] = o) : o = e[3], o;
}
function qt(a) {
  const e = c$2(13);
  let t, o, s, r;
  e[0] !== a ? ({ className: o, sideOffset: r, children: t, ...s } = a, e[0] = a, e[1] = t, e[2] = o, e[3] = s, e[4] = r) : (t = e[1], o = e[2], s = e[3], r = e[4]);
  const l = r === void 0 ? 0 : r;
  let i;
  e[5] !== o ? (i = _("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", o), e[5] = o, e[6] = i) : i = e[6];
  let c;
  e[7] === Symbol.for("react.memo_cache_sentinel") ? (c = jsx(B.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" }), e[7] = c) : c = e[7];
  let d;
  return e[8] !== t || e[9] !== s || e[10] !== l || e[11] !== i ? (d = jsx(B.Portal, { children: jsxs(B.Content, { "data-slot": "tooltip-content", sideOffset: l, className: i, ...s, children: [t, c] }) }), e[8] = t, e[9] = s, e[10] = l, e[11] = i, e[12] = d) : d = e[12], d;
}
const Y = { normal: { rotate: 0, y: 0, opacity: 1 }, animate: (a) => ({ rotate: a === 1 ? 45 : a === 3 ? -45 : 0, y: a === 1 ? 6 : a === 3 ? -6 : 0, opacity: a === 2 ? 0 : 1, transition: { type: "spring", stiffness: 260, damping: 20 } }) }, be = forwardRef((a, e) => {
  const t = c$2(32);
  let o, s, r, l, i;
  t[0] !== a ? ({ onMouseEnter: s, onMouseLeave: r, className: o, size: i, ...l } = a, t[0] = a, t[1] = o, t[2] = s, t[3] = r, t[4] = l, t[5] = i) : (o = t[1], s = t[2], r = t[3], l = t[4], i = t[5]);
  const c = i === void 0 ? 28 : i, d = useAnimation(), f = useRef(false);
  let h;
  t[6] !== d ? (h = () => (f.current = true, { startAnimation: () => d.start("animate"), stopAnimation: () => d.start("normal") }), t[6] = d, t[7] = h) : h = t[7], useImperativeHandle(e, h);
  let u;
  t[8] !== d || t[9] !== s ? (u = (w) => {
    f.current ? s == null ? void 0 : s(w) : d.start("animate");
  }, t[8] = d, t[9] = s, t[10] = u) : u = t[10];
  const y = u;
  let x;
  t[11] !== d || t[12] !== r ? (x = (w) => {
    f.current ? r == null ? void 0 : r(w) : d.start("normal");
  }, t[11] = d, t[12] = r, t[13] = x) : x = t[13];
  const b = x;
  let C;
  t[14] !== o ? (C = _("cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center", o), t[14] = o, t[15] = C) : C = t[15];
  let g;
  t[16] === Symbol.for("react.memo_cache_sentinel") ? (g = jsx("title", { children: "Menu Icon" }), t[16] = g) : g = t[16];
  let S, R, T;
  t[17] !== d ? (S = jsx(motion.line, { x1: "4", y1: "6", x2: "20", y2: "6", variants: Y, animate: d, custom: 1 }), R = jsx(motion.line, { x1: "4", y1: "12", x2: "20", y2: "12", variants: Y, animate: d, custom: 2 }), T = jsx(motion.line, { x1: "4", y1: "18", x2: "20", y2: "18", variants: Y, animate: d, custom: 3 }), t[17] = d, t[18] = S, t[19] = R, t[20] = T) : (S = t[18], R = t[19], T = t[20]);
  let $;
  t[21] !== c || t[22] !== S || t[23] !== R || t[24] !== T ? ($ = jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: c, height: c, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [g, S, R, T] }), t[21] = c, t[22] = S, t[23] = R, t[24] = T, t[25] = $) : $ = t[25];
  let v;
  return t[26] !== y || t[27] !== b || t[28] !== l || t[29] !== $ || t[30] !== C ? (v = jsx("div", { className: C, onMouseEnter: y, onMouseLeave: b, ...l, children: $ }), t[26] = y, t[27] = b, t[28] = l, t[29] = $, t[30] = C, t[31] = v) : v = t[31], v;
});
be.displayName = "MenuIcon";
const Qt = "sidebar_state", Kt = 60 * 60 * 24 * 7, Jt = "16rem", Xt = "18rem", Zt = "3rem", Yt = "b", ve = N.createContext(null);
function J() {
  const a = N.useContext(ve);
  if (!a) throw new Error("useSidebar must be used within a SidebarProvider.");
  return a;
}
function eo({ defaultOpen: a = true, open: e, onOpenChange: t, className: o, style: s, children: r, ...l }) {
  const i = Dt(), [c, d] = N.useState(false), [f, h] = N.useState(a), u = e != null ? e : f, y = N.useCallback((g) => {
    const S = typeof g == "function" ? g(u) : g;
    t ? t(S) : h(S), document.cookie = `${Qt}=${S}; path=/; max-age=${Kt}; SameSite=Lax`;
  }, [t, u]), x = N.useCallback(() => i ? d((g) => !g) : y((g) => !g), [i, y]);
  N.useEffect(() => {
    const g = (S) => {
      S.key === Yt && (S.metaKey || S.ctrlKey) && (S.preventDefault(), x());
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [x]);
  const b = u ? "expanded" : "collapsed", C = N.useMemo(() => ({ state: b, open: u, setOpen: y, isMobile: i, openMobile: c, setOpenMobile: d, toggleSidebar: x }), [b, u, y, i, c, x]);
  return jsx(ve.Provider, { value: C, children: jsx(ge, { delayDuration: 0, children: jsx("div", { "data-slot": "sidebar-wrapper", style: { "--sidebar-width": Jt, "--sidebar-width-icon": Zt, ...s }, className: _("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", o), ...l, children: r }) }) });
}
function to(a) {
  const e = c$2(46);
  let t, o, s, r, l, i;
  e[0] !== a ? ({ side: r, variant: l, collapsible: i, className: o, children: t, ...s } = a, e[0] = a, e[1] = t, e[2] = o, e[3] = s, e[4] = r, e[5] = l, e[6] = i) : (t = e[1], o = e[2], s = e[3], r = e[4], l = e[5], i = e[6]);
  const c = r === void 0 ? "left" : r, d = l === void 0 ? "sidebar" : l, f = i === void 0 ? "offcanvas" : i, { isMobile: h, state: u, openMobile: y, setOpenMobile: x } = J();
  if (f === "none") {
    let M;
    e[7] !== o ? (M = _("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", o), e[7] = o, e[8] = M) : M = e[8];
    let E;
    return e[9] !== t || e[10] !== s || e[11] !== M ? (E = jsx("div", { "data-slot": "sidebar", className: M, ...s, children: t }), e[9] = t, e[10] = s, e[11] = M, e[12] = E) : E = e[12], E;
  }
  if (h) {
    let M;
    e[13] === Symbol.for("react.memo_cache_sentinel") ? (M = { "--sidebar-width": Xt }, e[13] = M) : M = e[13];
    let E;
    e[14] === Symbol.for("react.memo_cache_sentinel") ? (E = jsxs(Bt, { className: "sr-only", children: [jsx(Ht, { children: "Sidebar" }), jsx(Wt, { children: "Displays the mobile sidebar." })] }), e[14] = E) : E = e[14];
    let z;
    e[15] !== t ? (z = jsx("div", { className: "flex h-full w-full flex-col", children: t }), e[15] = t, e[16] = z) : z = e[16];
    let k;
    e[17] !== c || e[18] !== z ? (k = jsxs(jt, { "data-sidebar": "sidebar", "data-slot": "sidebar", "data-mobile": "true", className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden", style: M, side: c, children: [E, z] }), e[17] = c, e[18] = z, e[19] = k) : k = e[19];
    let j;
    return e[20] !== y || e[21] !== s || e[22] !== x || e[23] !== k ? (j = jsx(Ot, { open: y, onOpenChange: x, ...s, children: k }), e[20] = y, e[21] = s, e[22] = x, e[23] = k, e[24] = j) : j = e[24], j;
  }
  const b = u === "collapsed" ? f : "", C = d === "floating" || d === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)";
  let g;
  e[25] !== C ? (g = _("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", C), e[25] = C, e[26] = g) : g = e[26];
  let S;
  e[27] !== g ? (S = jsx("div", { "data-slot": "sidebar-gap", className: g }), e[27] = g, e[28] = S) : S = e[28];
  const R = c === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", T = d === "floating" || d === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l";
  let $;
  e[29] !== o || e[30] !== R || e[31] !== T ? ($ = _("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", R, T, o), e[29] = o, e[30] = R, e[31] = T, e[32] = $) : $ = e[32];
  let v;
  e[33] !== t ? (v = jsx("div", { "data-sidebar": "sidebar", "data-slot": "sidebar-inner", className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm", children: t }), e[33] = t, e[34] = v) : v = e[34];
  let w;
  e[35] !== s || e[36] !== $ || e[37] !== v ? (w = jsx("div", { "data-slot": "sidebar-container", className: $, ...s, children: v }), e[35] = s, e[36] = $, e[37] = v, e[38] = w) : w = e[38];
  let F;
  return e[39] !== c || e[40] !== u || e[41] !== w || e[42] !== b || e[43] !== S || e[44] !== d ? (F = jsxs("div", { className: "group peer text-sidebar-foreground hidden md:block", "data-state": u, "data-collapsible": b, "data-variant": d, "data-side": c, "data-slot": "sidebar", children: [S, w] }), e[39] = c, e[40] = u, e[41] = w, e[42] = b, e[43] = S, e[44] = d, e[45] = F) : F = e[45], F;
}
function oo(a) {
  const e = c$2(15);
  let t, o, s;
  e[0] !== a ? ({ className: t, onClick: o, ...s } = a, e[0] = a, e[1] = t, e[2] = o, e[3] = s) : (t = e[1], o = e[2], s = e[3]);
  const { toggleSidebar: r } = J();
  let l;
  e[4] !== t ? (l = _("size-7", t), e[4] = t, e[5] = l) : l = e[5];
  let i;
  e[6] !== o || e[7] !== r ? (i = (h) => {
    o == null ? void 0 : o(h), r();
  }, e[6] = o, e[7] = r, e[8] = i) : i = e[8];
  let c, d;
  e[9] === Symbol.for("react.memo_cache_sentinel") ? (c = jsx(be, { size: 48 }), d = jsx("span", { className: "sr-only", children: "Toggle Sidebar" }), e[9] = c, e[10] = d) : (c = e[9], d = e[10]);
  let f;
  return e[11] !== s || e[12] !== l || e[13] !== i ? (f = jsxs(Q, { "data-sidebar": "trigger", "data-slot": "sidebar-trigger", variant: "ghost", size: "icon", className: l, onClick: i, ...s, children: [c, d] }), e[11] = s, e[12] = l, e[13] = i, e[14] = f) : f = e[14], f;
}
function ao(a) {
  const e = c$2(8);
  let t, o;
  e[0] !== a ? ({ className: t, ...o } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  let s;
  e[3] !== t ? (s = _("flex flex-col gap-2 p-2", t), e[3] = t, e[4] = s) : s = e[4];
  let r;
  return e[5] !== o || e[6] !== s ? (r = jsx("div", { "data-slot": "sidebar-header", "data-sidebar": "header", className: s, ...o }), e[5] = o, e[6] = s, e[7] = r) : r = e[7], r;
}
function so(a) {
  const e = c$2(8);
  let t, o;
  e[0] !== a ? ({ className: t, ...o } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  let s;
  e[3] !== t ? (s = _("flex flex-col gap-2 p-2", t), e[3] = t, e[4] = s) : s = e[4];
  let r;
  return e[5] !== o || e[6] !== s ? (r = jsx("div", { "data-slot": "sidebar-footer", "data-sidebar": "footer", className: s, ...o }), e[5] = o, e[6] = s, e[7] = r) : r = e[7], r;
}
function ro(a) {
  const e = c$2(8);
  let t, o;
  e[0] !== a ? ({ className: t, ...o } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  let s;
  e[3] !== t ? (s = _("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t), e[3] = t, e[4] = s) : s = e[4];
  let r;
  return e[5] !== o || e[6] !== s ? (r = jsx("div", { "data-slot": "sidebar-content", "data-sidebar": "content", className: s, ...o }), e[5] = o, e[6] = s, e[7] = r) : r = e[7], r;
}
function no(a) {
  const e = c$2(8);
  let t, o;
  e[0] !== a ? ({ className: t, ...o } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  let s;
  e[3] !== t ? (s = _("relative flex w-full min-w-0 flex-col p-2", t), e[3] = t, e[4] = s) : s = e[4];
  let r;
  return e[5] !== o || e[6] !== s ? (r = jsx("div", { "data-slot": "sidebar-group", "data-sidebar": "group", className: s, ...o }), e[5] = o, e[6] = s, e[7] = r) : r = e[7], r;
}
function io(a) {
  const e = c$2(10);
  let t, o, s;
  e[0] !== a ? ({ className: t, asChild: s, ...o } = a, e[0] = a, e[1] = t, e[2] = o, e[3] = s) : (t = e[1], o = e[2], s = e[3]);
  const l = (s === void 0 ? false : s) ? Slot : "div";
  let i;
  e[4] !== t ? (i = _("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", t), e[4] = t, e[5] = i) : i = e[5];
  let c;
  return e[6] !== l || e[7] !== o || e[8] !== i ? (c = jsx(l, { "data-slot": "sidebar-group-label", "data-sidebar": "group-label", className: i, ...o }), e[6] = l, e[7] = o, e[8] = i, e[9] = c) : c = e[9], c;
}
function lo(a) {
  const e = c$2(8);
  let t, o;
  e[0] !== a ? ({ className: t, ...o } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  let s;
  e[3] !== t ? (s = _("w-full text-sm", t), e[3] = t, e[4] = s) : s = e[4];
  let r;
  return e[5] !== o || e[6] !== s ? (r = jsx("div", { "data-slot": "sidebar-group-content", "data-sidebar": "group-content", className: s, ...o }), e[5] = o, e[6] = s, e[7] = r) : r = e[7], r;
}
function ye(a) {
  const e = c$2(8);
  let t, o;
  e[0] !== a ? ({ className: t, ...o } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  let s;
  e[3] !== t ? (s = _("flex w-full min-w-0 flex-col gap-1", t), e[3] = t, e[4] = s) : s = e[4];
  let r;
  return e[5] !== o || e[6] !== s ? (r = jsx("ul", { "data-slot": "sidebar-menu", "data-sidebar": "menu", className: s, ...o }), e[5] = o, e[6] = s, e[7] = r) : r = e[7], r;
}
function xe(a) {
  const e = c$2(8);
  let t, o;
  e[0] !== a ? ({ className: t, ...o } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  let s;
  e[3] !== t ? (s = _("group/menu-item relative", t), e[3] = t, e[4] = s) : s = e[4];
  let r;
  return e[5] !== o || e[6] !== s ? (r = jsx("li", { "data-slot": "sidebar-menu-item", "data-sidebar": "menu-item", className: s, ...o }), e[5] = o, e[6] = s, e[7] = r) : r = e[7], r;
}
const co = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", { variants: { variant: { default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground", outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]" }, size: { default: "h-8 text-sm", sm: "h-7 text-xs", lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!" } }, defaultVariants: { variant: "default", size: "default" } });
function we(a) {
  const e = c$2(28);
  let t, o, s, r, l, i, c;
  e[0] !== a ? ({ asChild: s, isActive: r, variant: l, size: i, tooltip: c, className: t, ...o } = a, e[0] = a, e[1] = t, e[2] = o, e[3] = s, e[4] = r, e[5] = l, e[6] = i, e[7] = c) : (t = e[1], o = e[2], s = e[3], r = e[4], l = e[5], i = e[6], c = e[7]);
  const d = s === void 0 ? false : s, f = r === void 0 ? false : r, h = l === void 0 ? "default" : l, u = i === void 0 ? "default" : i, y = d ? Slot : "button", { isMobile: x, state: b } = J();
  let C;
  e[8] !== t || e[9] !== u || e[10] !== h ? (C = _(co({ variant: h, size: u }), t), e[8] = t, e[9] = u, e[10] = h, e[11] = C) : C = e[11];
  let g;
  e[12] !== y || e[13] !== f || e[14] !== o || e[15] !== u || e[16] !== C ? (g = jsx(y, { "data-slot": "sidebar-menu-button", "data-sidebar": "menu-button", "data-size": u, "data-active": f, className: C, ...o }), e[12] = y, e[13] = f, e[14] = o, e[15] = u, e[16] = C, e[17] = g) : g = e[17];
  const S = g;
  if (!c) return S;
  if (typeof c == "string") {
    let w;
    e[18] !== c ? (w = { children: c }, e[18] = c, e[19] = w) : w = e[19], c = w;
  }
  let R;
  e[20] !== S ? (R = jsx(Ut, { asChild: true, children: S }), e[20] = S, e[21] = R) : R = e[21];
  const T = b !== "collapsed" || x;
  let $;
  e[22] !== T || e[23] !== c ? ($ = jsx(qt, { side: "right", align: "center", hidden: T, ...c }), e[22] = T, e[23] = c, e[24] = $) : $ = e[24];
  let v;
  return e[25] !== R || e[26] !== $ ? (v = jsxs(Vt, { children: [R, $] }), e[25] = R, e[26] = $, e[27] = v) : v = e[27], v;
}
function ce(a) {
  const e = c$2(8);
  let t, o;
  e[0] !== a ? ({ className: t, ...o } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  let s;
  e[3] !== t ? (s = _("relative flex size-8 shrink-0 overflow-hidden rounded-full", t), e[3] = t, e[4] = s) : s = e[4];
  let r;
  return e[5] !== o || e[6] !== s ? (r = jsx(oe.Root, { "data-slot": "avatar", className: s, ...o }), e[5] = o, e[6] = s, e[7] = r) : r = e[7], r;
}
function de(a) {
  const e = c$2(8);
  let t, o;
  e[0] !== a ? ({ className: t, ...o } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  let s;
  e[3] !== t ? (s = _("aspect-square size-full", t), e[3] = t, e[4] = s) : s = e[4];
  let r;
  return e[5] !== o || e[6] !== s ? (r = jsx(oe.Image, { "data-slot": "avatar-image", className: s, ...o }), e[5] = o, e[6] = s, e[7] = r) : r = e[7], r;
}
function ue(a) {
  const e = c$2(8);
  let t, o;
  e[0] !== a ? ({ className: t, ...o } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  let s;
  e[3] !== t ? (s = _("bg-muted flex size-full items-center justify-center rounded-full", t), e[3] = t, e[4] = s) : s = e[4];
  let r;
  return e[5] !== o || e[6] !== s ? (r = jsx(oe.Fallback, { "data-slot": "avatar-fallback", className: s, ...o }), e[5] = o, e[6] = s, e[7] = r) : r = e[7], r;
}
function uo(a) {
  const e = c$2(4);
  let t;
  e[0] !== a ? ({ ...t } = a, e[0] = a, e[1] = t) : t = e[1];
  let o;
  return e[2] !== t ? (o = jsx(A$2.Root, { "data-slot": "dropdown-menu", ...t }), e[2] = t, e[3] = o) : o = e[3], o;
}
function mo(a) {
  const e = c$2(4);
  let t;
  e[0] !== a ? ({ ...t } = a, e[0] = a, e[1] = t) : t = e[1];
  let o;
  return e[2] !== t ? (o = jsx(A$2.Trigger, { "data-slot": "dropdown-menu-trigger", ...t }), e[2] = t, e[3] = o) : o = e[3], o;
}
function fo(a) {
  const e = c$2(10);
  let t, o, s;
  e[0] !== a ? ({ className: t, sideOffset: s, ...o } = a, e[0] = a, e[1] = t, e[2] = o, e[3] = s) : (t = e[1], o = e[2], s = e[3]);
  const r = s === void 0 ? 4 : s;
  let l;
  e[4] !== t ? (l = _("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", t), e[4] = t, e[5] = l) : l = e[5];
  let i;
  return e[6] !== o || e[7] !== r || e[8] !== l ? (i = jsx(A$2.Portal, { children: jsx(A$2.Content, { "data-slot": "dropdown-menu-content", sideOffset: r, className: l, ...o }) }), e[6] = o, e[7] = r, e[8] = l, e[9] = i) : i = e[9], i;
}
function me(a) {
  const e = c$2(4);
  let t;
  e[0] !== a ? ({ ...t } = a, e[0] = a, e[1] = t) : t = e[1];
  let o;
  return e[2] !== t ? (o = jsx(A$2.Group, { "data-slot": "dropdown-menu-group", ...t }), e[2] = t, e[3] = o) : o = e[3], o;
}
function V(a) {
  const e = c$2(12);
  let t, o, s, r;
  e[0] !== a ? ({ className: t, inset: o, variant: r, ...s } = a, e[0] = a, e[1] = t, e[2] = o, e[3] = s, e[4] = r) : (t = e[1], o = e[2], s = e[3], r = e[4]);
  const l = r === void 0 ? "default" : r;
  let i;
  e[5] !== t ? (i = _("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t), e[5] = t, e[6] = i) : i = e[6];
  let c;
  return e[7] !== o || e[8] !== s || e[9] !== i || e[10] !== l ? (c = jsx(A$2.Item, { "data-slot": "dropdown-menu-item", "data-inset": o, "data-variant": l, className: i, ...s }), e[7] = o, e[8] = s, e[9] = i, e[10] = l, e[11] = c) : c = e[11], c;
}
function po(a) {
  const e = c$2(10);
  let t, o, s;
  e[0] !== a ? ({ className: t, inset: o, ...s } = a, e[0] = a, e[1] = t, e[2] = o, e[3] = s) : (t = e[1], o = e[2], s = e[3]);
  let r;
  e[4] !== t ? (r = _("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", t), e[4] = t, e[5] = r) : r = e[5];
  let l;
  return e[6] !== o || e[7] !== s || e[8] !== r ? (l = jsx(A$2.Label, { "data-slot": "dropdown-menu-label", "data-inset": o, className: r, ...s }), e[6] = o, e[7] = s, e[8] = r, e[9] = l) : l = e[9], l;
}
function ee(a) {
  const e = c$2(8);
  let t, o;
  e[0] !== a ? ({ className: t, ...o } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  let s;
  e[3] !== t ? (s = _("bg-border -mx-1 my-1 h-px", t), e[3] = t, e[4] = s) : s = e[4];
  let r;
  return e[5] !== o || e[6] !== s ? (r = jsx(A$2.Separator, { "data-slot": "dropdown-menu-separator", className: s, ...o }), e[5] = o, e[6] = s, e[7] = r) : r = e[7], r;
}
function ho(a) {
  const e = c$2(5), { user: t } = a, { isMobile: o } = J();
  let s;
  e[0] !== o || e[1] !== t ? (s = t && jsx(ye, { children: jsx(xe, { children: jsxs(uo, { children: [jsx(mo, { asChild: true, children: jsxs(we, { size: "lg", className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground", children: [jsxs(ce, { className: "h-8 w-8 rounded-lg", children: [jsx(de, { src: (t == null ? void 0 : t.image) || "", alt: (t == null ? void 0 : t.name) || "" }), jsx(ue, { className: "rounded-lg", children: "CN" })] }), jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [jsx("span", { className: "truncate font-semibold", children: t == null ? void 0 : t.name }), jsx("span", { className: "truncate text-xs", children: t == null ? void 0 : t.email })] }), jsx(ChevronsUpDown, { className: "ml-auto size-4" })] }) }), jsxs(fo, { className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg", side: o ? "bottom" : "right", align: "end", sideOffset: 4, children: [jsx(po, { className: "p-0 font-normal", children: jsxs("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: [jsxs(ce, { className: "h-8 w-8 rounded-lg", children: [jsx(de, { src: (t == null ? void 0 : t.image) || "", alt: (t == null ? void 0 : t.name) || "" }), jsx(ue, { className: "rounded-lg", children: "CN" })] }), jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [jsx("span", { className: "truncate font-semibold", children: t == null ? void 0 : t.name }), jsx("span", { className: "truncate text-xs", children: t == null ? void 0 : t.email })] })] }) }), jsx(ee, {}), jsx(me, { children: jsxs(V, { children: [jsx(Sparkles, {}), "Upgrade to Pro"] }) }), jsx(ee, {}), jsxs(me, { children: [jsxs(V, { children: [jsx(BadgeCheck, {}), "Account"] }), jsxs(V, { children: [jsx(CreditCard, {}), "Billing"] }), jsxs(V, { children: [jsx(Bell, {}), "Notifications"] })] }), jsx(ee, {}), jsxs(V, { children: [jsx(LogOut, {}), "Log out"] })] })] }) }) }), e[0] = o, e[1] = t, e[2] = s) : s = e[2];
  let r;
  return e[3] !== s ? (r = jsx(Fragment, { children: s }), e[3] = s, e[4] = r) : r = e[4], r;
}
const go = [{ title: "Trade Hub", items: [{ title: "Browse Trades", href: "/", icon: Binoculars }, { title: "List Item", href: "/", icon: SquarePlus }] }, { title: "Nexus Gold", items: [{ title: "Buy NG", href: "/purchase", icon: ShoppingCart }, { title: "Cash Out", href: "/", icon: HandCoins }] }, { title: "Profile", items: [{ title: "My Trades", href: "/", icon: HandCoins }, { title: "Settings", href: "/", icon: HandCoins }, { title: "login", href: "/login", icon: HandCoins }, { title: "register", href: "/register", icon: HandCoins }] }];
function bo(a) {
  const e = c$2(10);
  let t, o;
  e[0] !== a ? ({ user: o, ...t } = a, e[0] = a, e[1] = t, e[2] = o) : (t = e[1], o = e[2]);
  let s;
  e[3] === Symbol.for("react.memo_cache_sentinel") ? (s = jsx(ao, { children: jsx("span", { className: "text-2xl font-bold ml-1", children: "TradeZen" }) }), e[3] = s) : s = e[3];
  let r;
  e[4] === Symbol.for("react.memo_cache_sentinel") ? (r = jsx(ro, { children: go.map(vo) }), e[4] = r) : r = e[4];
  let l;
  e[5] !== o ? (l = jsx(so, { children: jsx(ho, { user: o }) }), e[5] = o, e[6] = l) : l = e[6];
  let i;
  return e[7] !== t || e[8] !== l ? (i = jsxs(to, { ...t, children: [s, r, l] }), e[7] = t, e[8] = l, e[9] = i) : i = e[9], i;
}
function vo(a) {
  return jsxs(no, { children: [jsx(io, { children: a.title }), jsx(lo, { children: jsx(ye, { children: a.items.map(yo) }) })] }, a.title);
}
function yo(a) {
  return jsx(xe, { children: jsx(we, { asChild: true, children: jsxs("div", { className: "flex items-center 0", children: [jsx(a.icon, { className: "size-5" }), " ", a.href && jsx(Link, { className: " w-full", to: a.href, children: a.title })] }) }) }, a.title);
}
const xo = cva("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", { variants: { variant: { default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90", secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90", destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70", outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground" } }, defaultVariants: { variant: "default" } });
function wo(a) {
  const e = c$2(12);
  let t, o, s, r;
  e[0] !== a ? ({ className: t, variant: r, asChild: s, ...o } = a, e[0] = a, e[1] = t, e[2] = o, e[3] = s, e[4] = r) : (t = e[1], o = e[2], s = e[3], r = e[4]);
  const i = (s === void 0 ? false : s) ? Slot : "span";
  let c;
  e[5] !== t || e[6] !== r ? (c = _(xo({ variant: r }), t), e[5] = t, e[6] = r, e[7] = c) : c = e[7];
  let d;
  return e[8] !== i || e[9] !== o || e[10] !== c ? (d = jsx(i, { "data-slot": "badge", className: c, ...o }), e[8] = i, e[9] = o, e[10] = c, e[11] = d) : d = e[11], d;
}
const _o = () => {
  const a = c$2(1);
  let e;
  return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = jsxs("svg", { height: "18", width: "18", version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 512 512", xmlSpace: "preserve", children: [jsx("title", { children: "Lotus Coin" }), jsx("circle", { style: { fill: "#FFE991" }, cx: "256", cy: "256", r: "256" }), jsx("polygon", { style: { fill: "#FBCD18" }, points: `85.755,426.245 256,496.763 426.245,426.245 496.763,256 426.245,85.755 256,15.237
	85.755,85.755 15.237,256 ` }), jsx("path", { style: { fill: "#FCDE65" }, d: `M194.785,128.887c-3.385,13.1-3.882,29.679-1.554,48.408l40.377,42.865v-62.3
	C220.414,144.36,207.14,134.409,194.785,128.887z` }), jsx("path", { style: { fill: "#FEF7D8" }, d: `M145.696,168.035c2.634,13.271,9.38,28.424,19.603,44.289l59.623,21.489v-42.352
	C195.033,175.702,166.965,167.43,145.696,168.035z` }), jsxs("g", { children: [jsx("path", { style: { fill: "#FCDE65" }, d: `M118.453,224.605c10.398,13.829,28.188,27.513,51.117,39.423l52.049,0.389v-51.536
		C178.655,208.361,141.279,212.802,118.453,224.605z` }), jsx("path", { style: { fill: "#FCDE65" }, d: `M317.215,128.887c3.385,13.1,3.882,29.679,1.554,48.408l-40.377,42.865v-62.3
		C291.586,144.36,304.86,134.409,317.215,128.887z` })] }), jsx("path", { style: { fill: "#FEF7D8" }, d: `M366.304,168.035c-2.634,13.271-9.38,28.424-19.603,44.289l-59.623,21.489v-42.352
	C316.967,175.702,345.035,167.43,366.304,168.035z` }), jsx("path", { style: { fill: "#FCDE65" }, d: `M393.547,224.605c-10.398,13.829-28.188,27.513-51.117,39.423l-52.049,0.389v-51.536
	C333.345,208.361,370.721,212.802,393.547,224.605z` }), jsx("path", { style: { fill: "#FFE991" }, d: `M256,114.916C234.115,140.813,219.088,194.26,219.088,256c0,2.264,0.02,20.515,0.06,22.756h73.703
	c0.04-2.237,0.06-20.496,0.06-22.756C292.912,194.26,277.885,140.813,256,114.916z` }), jsx("path", { style: { fill: "#FCDE65" }, d: `M255.991,174.649c-4.714,0-8.533,3.821-8.533,8.533v106.951h17.067V183.182
	C264.524,178.47,260.705,174.649,255.991,174.649z` }), jsxs("g", { children: [jsx("path", { style: { fill: "#FEF7D8" }, d: `M353.212,367.388c-26.01,22.733-60.029,36.523-97.212,36.523s-71.202-13.79-97.223-36.534
		c0,0,5.04-32.87,97.212-32.87S353.212,367.388,353.212,367.388z` }), jsx("path", { style: { fill: "#FEF7D8" }, d: `M377.355,278.756c12.197,0,19.49-3.675,25.828-8.078c-1.946,19.763-7.805,38.389-16.782,55.091
		c0,0-41.108,23.529-130.412,23.529s-130.389-23.529-130.389-23.529c-8.977-16.703-14.837-35.328-16.782-55.091
		c6.326,4.403,13.619,8.078,25.816,8.078c30.333,0,30.333-22.756,60.678-22.756s30.345,22.756,60.678,22.756
		c30.345,0,30.345-22.756,60.678-22.756C347.011,256,347.011,278.756,377.355,278.756z` })] }), jsx("path", { style: { fill: "#FFE991" }, d: `M377.355,326.542c3.356,0,6.349-0.284,9.045-0.774c-8.499,15.804-19.775,29.901-33.189,41.62
	c-10.286-6.69-17.34-15.815-36.545-15.815c-30.333,0-30.333,22.756-60.678,22.756c-30.333,0-30.333-22.756-60.678-22.756
	c-19.206,0-26.249,9.114-36.534,15.804c-13.403-11.719-24.678-25.805-33.178-41.609c2.697,0.489,5.678,0.774,9.034,0.774
	c30.333,0,30.333-22.756,60.678-22.756s30.345,22.756,60.678,22.756c30.345,0,30.345-22.756,60.678-22.756
	C347.011,303.787,347.011,326.542,377.355,326.542z` }), jsxs("g", { children: [jsx("path", { style: { fill: "#FEF7D8" }, d: `M256,88.519c-2.562,0-4.989-1.151-6.609-3.136l-16.208-19.846c-2.981-3.65-2.439-9.026,1.211-12.007
		c3.651-2.982,9.027-2.437,12.007,1.212L256,66.494l9.599-11.753c2.98-3.65,8.357-4.193,12.007-1.212
		c3.65,2.981,4.193,8.357,1.211,12.007l-16.208,19.846C260.989,87.368,258.562,88.519,256,88.519z` }), jsx("path", { style: { fill: "#FEF7D8" }, d: `M171.459,103.289c-3.07,0-6.036-1.66-7.562-4.566c-2.193-4.172-0.587-9.331,3.585-11.523
		c15.38-8.082,31.778-14.008,48.739-17.613c4.607-0.98,9.142,1.963,10.122,6.572s-1.963,9.141-6.572,10.122
		c-15.432,3.281-30.354,8.673-44.349,16.028C174.154,102.973,172.795,103.289,171.459,103.289z` }), jsx("path", { style: { fill: "#FEF7D8" }, d: `M340.543,103.289c-1.339,0-2.695-0.315-3.962-0.981c-13.998-7.355-28.921-12.748-44.353-16.028
		c-4.61-0.98-7.553-5.511-6.572-10.122c0.978-4.61,5.517-7.551,10.122-6.572c16.961,3.606,33.361,9.531,48.742,17.614
		c4.172,2.192,5.778,7.351,3.585,11.523C346.576,101.629,343.611,103.289,340.543,103.289z` })] }), jsxs("g", { children: [jsx("path", { style: { fill: "#FFE991" }, d: `M284.434,444.361c-4.13,0-7.76-3.004-8.42-7.211c-0.732-4.656,2.451-9.023,7.107-9.753
		c84.825-13.311,146.39-85.394,146.39-171.397c0-45.53-17.516-88.557-49.32-121.153c-3.292-3.374-3.224-8.776,0.149-12.067
		c3.374-3.293,8.776-3.223,12.066,0.148C427.339,158.73,446.578,205.99,446.578,256c0,45.695-16.422,89.89-46.237,124.441
		c-29.504,34.188-70.193,56.852-114.573,63.816C285.319,444.327,284.873,444.361,284.434,444.361z` }), jsx("path", { style: { fill: "#FFE991" }, d: `M227.566,444.361c-0.44,0-0.884-0.034-1.333-0.105c-44.38-6.964-85.071-29.628-114.573-63.816
		C81.844,345.89,65.422,301.695,65.422,256c0-50.01,19.239-97.27,54.171-133.072c3.289-3.372,8.694-3.441,12.066-0.148
		c3.374,3.292,3.439,8.694,0.149,12.067C100.005,167.443,82.489,210.47,82.489,256c0,86.003,61.565,158.086,146.39,171.397
		c4.656,0.73,7.838,5.097,7.107,9.753C235.325,441.358,231.696,444.361,227.566,444.361z` })] })] }), a[0] = e) : e = a[0], e;
};
function So() {
  const a = c$2(3);
  let e;
  a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = jsx(Link, { to: "/", className: "text-2xl font-bold lg:hidden", children: "TradeZen" }), a[0] = e) : e = a[0];
  let t;
  a[1] === Symbol.for("react.memo_cache_sentinel") ? (t = jsx("li", { children: jsxs(wo, { className: "gap-1", children: [jsx(_o, {}), jsx("span", { className: "font-semibold", children: "500 NG" })] }) }), a[1] = t) : t = a[1];
  let o;
  return a[2] === Symbol.for("react.memo_cache_sentinel") ? (o = jsxs("header", { className: "flex items-center justify-between ", children: [e, jsx("nav", { className: "ml-auto", children: jsxs("ul", { className: "flex items-center gap-4", children: [t, jsx("li", { className: "lg:hidden", children: jsx(oo, {}) })] }) })] }), a[2] = o) : o = a[2], o;
}
async function Co(a, e, t) {
  var o;
  const s = e[0];
  if (isPlainObject$1(s) && s.method) {
    const i = s, c = i.data instanceof FormData ? "formData" : "payload", d = new Headers({ ...c === "payload" ? { "content-type": "application/json", accept: "application/json" } : {}, ...i.headers instanceof Headers ? Object.fromEntries(i.headers.entries()) : i.headers });
    if (i.method === "GET") {
      const u = encode$1({ payload: startSerializer.stringify({ data: i.data, context: i.context }) });
      u && (a.includes("?") ? a += `&${u}` : a += `?${u}`);
    }
    a.includes("?") ? a += "&createServerFn" : a += "?createServerFn", i.response === "raw" && (a += "&raw");
    const f = await t(a, { method: i.method, headers: d, signal: i.signal, ...No(i) }), h = await fe(f);
    if ((o = h.headers.get("content-type")) != null && o.includes("application/json")) {
      const u = startSerializer.decode(await h.json());
      if (isRedirect(u) || isNotFound(u) || u instanceof Error) throw u;
      return u;
    }
    return h;
  }
  const r = await fe(await t(a, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(e) })), l = r.headers.get("content-type");
  return l && l.includes("application/json") ? startSerializer.decode(await r.json()) : r.text();
}
function No(a) {
  var _a;
  return a.method === "POST" ? a.data instanceof FormData ? (a.data.set("__TSR_CONTEXT", startSerializer.stringify(a.context)), { body: a.data }) : { body: startSerializer.stringify({ data: (_a = a.data) != null ? _a : null, context: a.context }) } : {};
}
async function fe(a) {
  if (!a.ok) {
    const e = a.headers.get("content-type");
    throw e && e.includes("application/json") ? startSerializer.decode(await a.json()) : new Error(await a.text());
  }
  return a;
}
function $o(a) {
  return a.replace(/^\/|\/$/g, "");
}
const G = (a, e) => {
  const t = `/${$o(e)}/${a}`;
  return Object.assign((...s) => Co(t, s, async (r, l) => {
    l.headers = mergeHeaders$2(getHeaders(), l.headers);
    const i = await $fetch.native(r, l), c = getEvent(), d = mergeHeaders$2(i.headers, c.___ssrRpcResponseHeaders);
    return c.___ssrRpcResponseHeaders = d, i;
  }), { url: t, functionId: a });
}, Ro = G("app_services_auth_ts--getUser_createServerFn_handler", "/_server"), To = createServerFn({ method: "GET" }).handler(Ro), Eo = () => queryOptions({ queryKey: ["user"], queryFn: async () => await To(), staleTime: 2 * 60 * 1e3, gcTime: 30 * 60 * 1e3 }), Mo = (a) => {
  const e = c$2(6);
  let t;
  e[0] !== a ? ({ ...t } = a, e[0] = a, e[1] = t) : t = e[1];
  const { theme: o } = useTheme(), s = o === void 0 ? "system" : o, r = s === void 0 ? "system" : s;
  let l;
  e[2] === Symbol.for("react.memo_cache_sentinel") ? (l = { "--normal-bg": "var(--popover)", "--normal-text": "var(--popover-foreground)", "--normal-border": "var(--border)" }, e[2] = l) : l = e[2];
  let i;
  return e[3] !== t || e[4] !== r ? (i = jsx(Toaster, { theme: r, className: "toaster group", style: l, ...t }), e[3] = t, e[4] = r, e[5] = i) : i = e[5], i;
}, I = createRootRouteWithContext()({ head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: "TanStack Start Starter" }], links: [{ rel: "stylesheet", href: Tt }] }), component: ko, beforeLoad: async ({ context: a }) => {
  const e = await a.queryClient.fetchQuery(Eo());
  return console.log(e), { user: e };
} });
function ko() {
  const a = c$2(1);
  let e;
  return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = jsx(Fo, { children: jsx(Outlet, {}) }), a[0] = e) : e = a[0], e;
}
function Fo(a) {
  const e = c$2(14), { children: t } = a;
  console.log("hello from document");
  const { user: o } = I.useRouteContext();
  let s;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (s = jsx("head", { children: jsx(HeadContent, {}) }), e[0] = s) : s = e[0];
  let r;
  e[1] !== o ? (r = jsx("aside", { children: jsx(bo, { user: o }) }), e[1] = o, e[2] = r) : r = e[2];
  let l;
  e[3] === Symbol.for("react.memo_cache_sentinel") ? (l = jsx(So, {}), e[3] = l) : l = e[3];
  let i;
  e[4] === Symbol.for("react.memo_cache_sentinel") ? (i = jsx(Mo, { richColors: true }), e[4] = i) : i = e[4];
  let c;
  e[5] !== t ? (c = jsxs("main", { className: "min-h-dvh w-full", children: [l, t, i] }), e[5] = t, e[6] = c) : c = e[6];
  let d;
  e[7] !== r || e[8] !== c ? (d = jsxs(eo, { children: [r, c] }), e[7] = r, e[8] = c, e[9] = d) : d = e[9];
  let f, h;
  e[10] === Symbol.for("react.memo_cache_sentinel") ? (f = jsx(ReactQueryDevtools, {}), h = jsx(Scripts, {}), e[10] = f, e[11] = h) : (f = e[10], h = e[11]);
  let u;
  return e[12] !== d ? (u = jsxs("html", { suppressHydrationWarning: true, lang: "en", children: [s, jsx("body", { children: jsxs(kt, { attribute: "class", defaultTheme: "system", enableSystem: true, children: [d, f, h] }) })] }), e[12] = d, e[13] = u) : u = e[13], u;
}
const Io = () => import('./chunks/build/index-B3BY1eXu.mjs'), zo = G("app_routes_index_tsx--getGames_createServerFn_handler", "/_server"), Po = createServerFn({ method: "GET" }).handler(zo), _e = createFileRoute("/")({ component: lazyRouteComponent(Io, "component", () => _e.ssr), loader: async () => ({ games: await Po() }) }), Do = () => import('./chunks/build/index-BsoPPNCX.mjs'), Se = createFileRoute("/purchase/")({ component: lazyRouteComponent(Do, "component", () => Se.ssr) }), Ao = () => import('./chunks/build/index-Ca9bNGwV.mjs'), Ce = createFileRoute("/adoptme/")({ component: lazyRouteComponent(Ao, "component", () => Ce.ssr) }), Oo = () => import('./chunks/build/profile-CD4F1pNk.mjs'), Ne = createFileRoute("/(profile)/profile")({ component: lazyRouteComponent(Oo, "component", () => Ne.ssr), beforeLoad: async ({ context: a }) => {
  if (!a.user) return redirect({ to: "/login" });
} }), Lo = () => import('./chunks/build/image-Ba4jFhJT.mjs'), $e = createFileRoute("/(image)/image")({ component: lazyRouteComponent(Lo, "component", () => $e.ssr) }), Go = () => import('./chunks/build/register-Bhh-pqdN.mjs'), Re = createFileRoute("/(auth)/register")({ component: lazyRouteComponent(Go, "component", () => Re.ssr) }), jo = () => import('./chunks/build/login-zb3lkpux.mjs'), Te = createFileRoute("/(auth)/login")({ component: lazyRouteComponent(jo, "component", () => Te.ssr) }), Bo = () => import('./chunks/build/index-QkHsVuCT.mjs'), Ho = G("app_routes_adoptme_product_index_tsx--getGameItems_createServerFn_handler", "/_server"), Wo = createServerFn({ method: "GET" }).handler(Ho), Ee = createFileRoute("/adoptme/product/")({ component: lazyRouteComponent(Bo, "component", () => Ee.ssr), loader: async () => ({ items: await Wo() }) }), Vo = () => import('./chunks/build/_productId-XJfSvn7f.mjs'), Uo = G("app_routes_adoptme_product_productId_tsx--getAllGames_createServerFn_handler", "/_server");
createServerFn({ method: "GET" }).handler(Uo);
const qo = G("app_routes_adoptme_product_productId_tsx--getGameItem_createServerFn_handler", "/_server"), Qo = createServerFn({ method: "GET" }).validator((a) => {
  if (typeof a != "string") throw new Error("Invalid slug");
  return { slug: a };
}).handler(qo), Ko = G("app_routes_adoptme_product_productId_tsx--searchItems_createServerFn_handler", "/_server"), Da = createServerFn({ method: "GET" }).validator((a) => {
  if (typeof a != "string") throw new Error("Invalid data");
  return { query: a };
}).handler(Ko), Jo = G("app_routes_adoptme_product_productId_tsx--getPaginatedListing_createServerFn_handler", "/_server"), Aa = createServerFn({ method: "GET" }).validator(({ nextId: a, slug: e }) => {
  if (typeof a != "number" || typeof e != "string") throw new Error("Invalid nextId or slug");
  return { nextId: a, slug: e };
}).handler(Jo), Me = createFileRoute("/adoptme/product/$productId")({ component: lazyRouteComponent(Vo, "component", () => Me.ssr), loader: async ({ params: { productId: a } }) => {
  const { listings: e, nextId: t, ...o } = await Qo({ data: a });
  return { item: o, listings: e, nextId: t };
} }), Xo = _e.update({ id: "/", path: "/", getParentRoute: () => I }), Zo = Se.update({ id: "/purchase/", path: "/purchase/", getParentRoute: () => I }), Yo = Ce.update({ id: "/adoptme/", path: "/adoptme/", getParentRoute: () => I }), ea = Ne.update({ id: "/(profile)/profile", path: "/profile", getParentRoute: () => I }), ta = $e.update({ id: "/(image)/image", path: "/image", getParentRoute: () => I }), oa = Re.update({ id: "/(auth)/register", path: "/register", getParentRoute: () => I }), aa = Te.update({ id: "/(auth)/login", path: "/login", getParentRoute: () => I }), sa = Ee.update({ id: "/adoptme/product/", path: "/adoptme/product/", getParentRoute: () => I }), ra = Me.update({ id: "/adoptme/product/$productId", path: "/adoptme/product/$productId", getParentRoute: () => I }), na = { IndexRoute: Xo, authLoginRoute: aa, authRegisterRoute: oa, imageImageRoute: ta, profileProfileRoute: ea, AdoptmeIndexRoute: Yo, PurchaseIndexRoute: Zo, AdoptmeProductProductIdRoute: ra, AdoptmeProductIndexRoute: sa }, ia = I._addFileChildren(na)._addFileTypes();
function la() {
  const a = c$2(3);
  let e;
  a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = jsx("p", { children: "The page you are looking for does not exist." }), a[0] = e) : e = a[0];
  let t;
  a[1] === Symbol.for("react.memo_cache_sentinel") ? (t = jsx(Q, { type: "button", onClick: ca, children: "Go back" }), a[1] = t) : t = a[1];
  let o;
  return a[2] === Symbol.for("react.memo_cache_sentinel") ? (o = jsxs("div", { className: "space-y-2 p-2", children: [e, jsxs("p", { className: "flex flex-wrap items-center gap-2", children: [t, jsx(Q, { asChild: true, variant: "secondary", children: jsx(Link, { to: "/", children: "Home" }) })] })] }), a[2] = o) : o = a[2], o;
}
function ca() {
  return window.history.back();
}
function da(a) {
  const e = c$2(13), { error: t } = a, o = useRouter();
  let s;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (s = { strict: false, select: ma }, e[0] = s) : s = e[0];
  const r = useMatch(s);
  console.error("DefaultCatchBoundary Error:", t);
  let l;
  e[1] !== t ? (l = jsx(ErrorComponent, { error: t }), e[1] = t, e[2] = l) : l = e[2];
  let i;
  e[3] !== o ? (i = jsx(Q, { onClick: () => {
    o.invalidate();
  }, className: "rounded bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-gray-700", children: "Try Again" }), e[3] = o, e[4] = i) : i = e[4];
  let c;
  e[5] !== r ? (c = r ? jsx(Link, { to: "/", className: "rounded bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-gray-700", children: "Home" }) : jsx(Link, { to: "/", className: "rounded bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-gray-700", onClick: ua, children: "Go Back" }), e[5] = r, e[6] = c) : c = e[6];
  let d;
  e[7] !== i || e[8] !== c ? (d = jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [i, c] }), e[7] = i, e[8] = c, e[9] = d) : d = e[9];
  let f;
  return e[10] !== l || e[11] !== d ? (f = jsxs("div", { className: "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 p-4", children: [l, d] }), e[10] = l, e[11] = d, e[12] = f) : f = e[12], f;
}
function ua(a) {
  a.preventDefault(), window.history.back();
}
function ma(a) {
  return a.id === rootRouteId;
}
function fa(a) {
  const e = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false, staleTime: 6e4 } } });
  return routerWithQueryClient(createRouter$2({ routeTree: ia, context: { queryClient: e, user: a }, defaultPreload: "intent", defaultPreloadStaleTime: 0, defaultErrorComponent: da, defaultNotFoundComponent: la, scrollRestoration: true }), e);
}
const Oa = createStartHandler({ createRouter: fa, getRouterManifest: Rt })(St);

const handlers = [
  { route: '', handler: _AlCogW, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: U, lazy: false, middleware: true, method: undefined },
  { route: '/api', handler: d, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: Oa, lazy: false, middleware: true, method: undefined }
];

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
          );
          files.push(...dirFiles.map((f) => entry.name + "/" + f));
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join$1(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys(_base, topts) {
      return readdirRecursive(r("."), opts.ignore, topts?.maxDepth);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const e=globalThis.process?.getBuiltinModule?.("crypto")?.hash,r="sha256",s="base64url";function digest(t){if(e)return e(r,t,s);const o=createHash(r).update(t);return globalThis.process?.versions?.webcontainer?o.digest().toString(s):o.digest(s)}

function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
class Hasher {
  buff = "";
  #context = /* @__PURE__ */ new Map();
  write(str) {
    this.buff += str;
  }
  dispatch(value) {
    const type = value === null ? "null" : typeof value;
    return this[type](value);
  }
  object(object) {
    if (object && typeof object.toJSON === "function") {
      return this.object(object.toJSON());
    }
    const objString = Object.prototype.toString.call(object);
    let objType = "";
    const objectLength = objString.length;
    objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
    objType = objType.toLowerCase();
    let objectNumber = null;
    if ((objectNumber = this.#context.get(object)) === void 0) {
      this.#context.set(object, this.#context.size);
    } else {
      return this.dispatch("[CIRCULAR:" + objectNumber + "]");
    }
    if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
      this.write("buffer:");
      return this.write(object.toString("utf8"));
    }
    if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
      if (this[objType]) {
        this[objType](object);
      } else {
        this.unknown(object, objType);
      }
    } else {
      const keys = Object.keys(object).sort();
      const extraKeys = [];
      this.write("object:" + (keys.length + extraKeys.length) + ":");
      const dispatchForKey = (key) => {
        this.dispatch(key);
        this.write(":");
        this.dispatch(object[key]);
        this.write(",");
      };
      for (const key of keys) {
        dispatchForKey(key);
      }
      for (const key of extraKeys) {
        dispatchForKey(key);
      }
    }
  }
  array(arr, unordered) {
    unordered = unordered === void 0 ? false : unordered;
    this.write("array:" + arr.length + ":");
    if (!unordered || arr.length <= 1) {
      for (const entry of arr) {
        this.dispatch(entry);
      }
      return;
    }
    const contextAdditions = /* @__PURE__ */ new Map();
    const entries = arr.map((entry) => {
      const hasher = new Hasher();
      hasher.dispatch(entry);
      for (const [key, value] of hasher.#context) {
        contextAdditions.set(key, value);
      }
      return hasher.toString();
    });
    this.#context = contextAdditions;
    entries.sort();
    return this.array(entries, false);
  }
  date(date) {
    return this.write("date:" + date.toJSON());
  }
  symbol(sym) {
    return this.write("symbol:" + sym.toString());
  }
  unknown(value, type) {
    this.write(type);
    if (!value) {
      return;
    }
    this.write(":");
    if (value && typeof value.entries === "function") {
      return this.array(
        [...value.entries()],
        true
        /* ordered */
      );
    }
  }
  error(err) {
    return this.write("error:" + err.toString());
  }
  boolean(bool) {
    return this.write("bool:" + bool);
  }
  string(string) {
    this.write("string:" + string.length + ":");
    this.write(string);
  }
  function(fn) {
    this.write("fn:");
    if (isNativeFunction(fn)) {
      this.dispatch("[native]");
    } else {
      this.dispatch(fn.toString());
    }
  }
  number(number) {
    return this.write("number:" + number);
  }
  null() {
    return this.write("Null");
  }
  undefined() {
    return this.write("Undefined");
  }
  regexp(regex) {
    return this.write("regex:" + regex.toString());
  }
  arraybuffer(arr) {
    this.write("arraybuffer:");
    return this.dispatch(new Uint8Array(arr));
  }
  url(url) {
    return this.write("url:" + url.toString());
  }
  map(map) {
    this.write("map:");
    const arr = [...map];
    return this.array(arr, false);
  }
  set(set) {
    this.write("set:");
    const arr = [...set];
    return this.array(arr, false);
  }
  bigint(number) {
    return this.write("bigint:" + number.toString());
  }
}
for (const type of [
  "uint8array",
  "uint8clampedarray",
  "unt8array",
  "uint16array",
  "unt16array",
  "uint32array",
  "unt32array",
  "float32array",
  "float64array"
]) {
  Hasher.prototype[type] = function(arr) {
    this.write(type + ":");
    return this.array([...arr], false);
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => b$1(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return O(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const nitroApp = useNitroApp();
const server = Bun.serve({
  port: process.env.NITRO_PORT || process.env.PORT || 3e3,
  websocket: void 0,
  async fetch(req, server2) {
    const url = new URL(req.url);
    let body;
    if (req.body) {
      body = await req.arrayBuffer();
    }
    return nitroApp.localFetch(url.pathname + url.search, {
      host: url.hostname,
      protocol: url.protocol,
      headers: req.headers,
      method: req.method,
      redirect: req.redirect,
      body
    });
  }
});
console.log(`Listening on http://localhost:${server.port}...`);

export { Aa as A, Da as D, Eo as E, G, Me as M, Ne as N, Q, Ut as U, Vt as V, _e as _, _ as a, Ee as b, ce as c, de as d, ge as g, qt as q, ue as u, wo as w, x };
//# sourceMappingURL=index.mjs.map
