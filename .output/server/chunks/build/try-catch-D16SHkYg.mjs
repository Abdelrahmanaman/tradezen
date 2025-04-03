async function a(r) {
  try {
    return { data: await r, error: null };
  } catch (t) {
    return { data: null, error: t };
  }
}

export { a };
//# sourceMappingURL=try-catch-D16SHkYg.mjs.map
