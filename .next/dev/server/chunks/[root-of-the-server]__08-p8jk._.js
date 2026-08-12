module.exports = [
"[externals]/fs/promises [external] (fs/promises, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/[externals]_fs_promises_03norio._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/fs/promises [external] (fs/promises, cjs)");
    });
});
}),
"[externals]/path [external] (path, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[externals]/path [external] (path, cjs)");
    });
});
}),
"[project]/node_modules/@opennextjs/cloudflare/dist/api/index.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/node_modules_@opennextjs_cloudflare_dist_api_0-_dg-9._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/@opennextjs/cloudflare/dist/api/index.js [app-route] (ecmascript)");
    });
});
}),
];