module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/app/api/uploads/[name]/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "runtime",
    ()=>runtime
]);
// GET /api/uploads/[name] — 提供上传的图片文件（本地存储模式）
// (next.config.js 中 rewrites 把 /uploads/* 指向这里，URL 保持 /uploads/... 不变)
// S3 模式下走 S3_PUBLIC_URL 直接访问，此路由不生效（rewrite 仍指向但返回 404 前可跳过）
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.js [app-route] (ecmascript)");
;
;
const runtime = 'nodejs';
const MIME = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp'
};
async function GET(req, { params }) {
    const name = (await params).name;
    // 防止路径穿越
    if (!/^[\w-]+\.\w+$/.test(name)) {
        return new Response('Not Found', {
            status: 404
        });
    }
    // S3 模式下文件不在本地，由 S3_PUBLIC_URL 提供
    if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["STORAGE_TYPE"] === 's3') {
        return new Response('Not Found', {
            status: 404
        });
    }
    try {
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getObject"])(name);
        if (!data) return new Response('Not Found', {
            status: 404
        });
        const ext = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].extname(name).toLowerCase();
        return new Response(new Uint8Array(data), {
            headers: {
                'Content-Type': MIME[ext] || 'application/octet-stream'
            }
        });
    } catch  {
        return new Response('Not Found', {
            status: 404
        });
    }
}
}),
"[project]/lib/storage.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STORAGE_TYPE",
    ()=>STORAGE_TYPE,
    "deleteObject",
    ()=>deleteObject,
    "getObject",
    ()=>getObject,
    "saveObject",
    ()=>saveObject
]);
// 存储抽象层：Cloudflare R2 binding（Workers）→ S3 兼容对象存储 → 本地磁盘
// - Cloudflare Workers：优先用 R2 binding（wrangler.jsonc 声明 FORUMLIFY_BUCKET），无需 S3 密钥
// - 其他平台（Vercel / 裸机）：S3_* 环境变量走 S3 兼容 API；无 S3 配置则本地磁盘 uploads/
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aws4fetch$2f$dist$2f$aws4fetch$2e$esm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aws4fetch/dist/aws4fetch.esm.mjs [app-route] (ecmascript)");
;
const S3_ENDPOINT = process.env.S3_ENDPOINT;
const S3_BUCKET = process.env.S3_BUCKET;
const S3_REGION = process.env.S3_REGION || 'auto';
const S3_ACCESS_KEY = process.env.S3_ACCESS_KEY_ID || process.env.S3_ACCESS_KEY;
const S3_SECRET_KEY = process.env.S3_SECRET_ACCESS_KEY || process.env.S3_SECRET_KEY;
const S3_PUBLIC_URL = process.env.S3_PUBLIC_URL; // 公开访问前缀，如 https://cdn.example.com
const STORAGE_TYPE = isR2BindingAvailable() ? 'r2' : S3_ENDPOINT && S3_BUCKET && S3_ACCESS_KEY ? 's3' : 'local';
const aws = STORAGE_TYPE === 's3' ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aws4fetch$2f$dist$2f$aws4fetch$2e$esm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AwsClient"]({
    accessKeyId: S3_ACCESS_KEY,
    secretAccessKey: S3_SECRET_KEY,
    region: S3_REGION,
    service: 's3'
}) : null;
function isR2BindingAvailable() {
    // 仅在 Cloudflare Workers 运行时（OpenNext 注入 globalThis.__OPENNEXT_CLOUDFLARE__）检查 binding
    try {
        const ctx = globalThis.__OPENNEXT_CLOUDFLARE__;
        return !!(ctx && ctx.env && ctx.env.FORUMLIFY_BUCKET);
    } catch  {
        return false;
    }
}
// 获取 R2 binding（Workers 上通过 getCloudflareContext 读取 env）
async function getR2Bucket() {
    const { getCloudflareContext } = await __turbopack_context__.A("[project]/node_modules/@opennextjs/cloudflare/dist/api/index.js [app-route] (ecmascript, async loader)");
    const ctx = await getCloudflareContext({
        async: true
    });
    return ctx.env.FORUMLIFY_BUCKET;
}
function objectUrl(name) {
    return `${S3_ENDPOINT}/${S3_BUCKET}/${name}`;
}
async function saveObject(name, buffer, contentType) {
    if (STORAGE_TYPE === 'r2') {
        const bucket = await getR2Bucket();
        await bucket.put(name, new Uint8Array(buffer), {
            httpMetadata: {
                contentType: contentType || 'application/octet-stream'
            }
        });
        return {
            url: publicUrl(name)
        };
    }
    if (STORAGE_TYPE === 'local') {
        const { writeFile, mkdir } = await __turbopack_context__.A("[externals]/fs/promises [external] (fs/promises, cjs, async loader)");
        const path = await __turbopack_context__.A("[externals]/path [external] (path, cjs, async loader)");
        const dir = path.join(process.cwd(), 'uploads');
        await mkdir(dir, {
            recursive: true
        });
        await writeFile(path.join(dir, name), buffer);
        return {
            url: '/uploads/' + name
        };
    }
    await aws.fetch(objectUrl(name), {
        method: 'PUT',
        headers: {
            'Content-Type': contentType || 'application/octet-stream'
        },
        body: new Uint8Array(buffer)
    });
    return {
        url: publicUrl(name)
    };
}
// 生成公开 URL：优先 S3_PUBLIC_URL（自定义公开域名），否则 S3 endpoint 路径式
function publicUrl(name) {
    if (S3_PUBLIC_URL) {
        const base = S3_PUBLIC_URL.replace(/\/$/, '');
        return `${base}/${name}`;
    }
    if (S3_ENDPOINT) {
        const base = S3_ENDPOINT.replace(/\/$/, '');
        return `${base}/${S3_BUCKET}/${name}`;
    }
    return '/uploads/' + name;
}
async function getObject(name) {
    if (STORAGE_TYPE === 'r2') {
        const bucket = await getR2Bucket();
        const obj = await bucket.get(name);
        if (!obj) return null;
        return Buffer.from(await obj.arrayBuffer());
    }
    if (STORAGE_TYPE === 'local') {
        const { readFile } = await __turbopack_context__.A("[externals]/fs/promises [external] (fs/promises, cjs, async loader)");
        const path = await __turbopack_context__.A("[externals]/path [external] (path, cjs, async loader)");
        try {
            return await readFile(path.join(process.cwd(), 'uploads', name));
        } catch  {
            return null;
        }
    }
    const res = await aws.fetch(objectUrl(name));
    if (!res.ok) return null;
    return Buffer.from(await res.arrayBuffer());
}
async function deleteObject(name) {
    if (STORAGE_TYPE === 'r2') {
        const bucket = await getR2Bucket();
        await bucket.delete(name);
        return;
    }
    if (STORAGE_TYPE === 'local') {
        const { unlink } = await __turbopack_context__.A("[externals]/fs/promises [external] (fs/promises, cjs, async loader)");
        const path = await __turbopack_context__.A("[externals]/path [external] (path, cjs, async loader)");
        try {
            await unlink(path.join(process.cwd(), 'uploads', name));
        } catch  {}
        return;
    }
    await aws.fetch(objectUrl(name), {
        method: 'DELETE'
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1pf70jz._.js.map