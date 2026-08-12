module.exports = [
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
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
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/app/api/posts/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic
]);
// GET /api/posts, POST /api/posts — 支持 ?sort= & ?user_id= & 分页
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/http-cache.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const dynamic = 'force-dynamic';
async function GET(req) {
    const url = new URL(req.url);
    const sort = url.searchParams.get('sort') === 'hot' ? 'updated_at' : 'created_at';
    const userId = url.searchParams.get('user_id');
    const page = Math.max(1, parseInt(url.searchParams.get('page')) || 1);
    // 分页边界：limit 封顶 50，page 封顶 10000（防深分页 DoS）
    const limit = Math.min(50, Math.max(1, parseInt(url.searchParams.get('limit')) || 20));
    const maxPage = Math.max(1, Math.ceil(200000 / limit));
    const safePage = Math.min(page, maxPage);
    const offset = (safePage - 1) * limit;
    try {
        const params = [];
        let where = '';
        if (userId) {
            where = ' WHERE p.user_id = $1';
            (await params).push(userId);
        }
        const countResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].query(`SELECT COUNT(*) as total FROM posts p${where}`, params);
        const total = parseInt(countResult.rows[0]?.total || 0);
        const r = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].query(`
      SELECT
        p.*,
        u.username,
        u.avatar_url,
        u.signature,
        (SELECT COUNT(*) FROM replies WHERE post_id = p.id) as reply_count
      FROM posts p
      JOIN users u ON p.user_id = u.id
      ${where}
      ORDER BY is_pinned DESC, pinned_at DESC NULLS LAST, ${sort} DESC
      LIMIT $${(await params).length + 1} OFFSET $${(await params).length + 2}
    `, [
            ...params,
            limit,
            offset
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonWithEtag"])(req, {
            data: r.rows,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        });
    } catch  {
        return Response.json({
            error: '服务器错误'
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUser"])(req);
    if (!user) {
        return Response.json({
            error: '请先登录'
        }, {
            status: 401
        });
    }
    const { title, content, images, captcha_id, captcha_answer } = await req.json();
    if (!content || content.trim().length === 0) {
        return Response.json({
            error: '请填写内容'
        }, {
            status: 400
        });
    }
    // 服务端验证码校验（ENABLE_CAPTCHA 关闭时跳过）
    if (process.env.ENABLE_CAPTCHA !== 'false' && !verifyCaptcha(captcha_id, captcha_answer)) {
        return Response.json({
            error: '验证码错误，请重新计算'
        }, {
            status: 400
        });
    }
    try {
        const r = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].query(`INSERT INTO posts (user_id, title, content, images)
       VALUES ($1, $2, $3, $4)
       RETURNING *`, [
            user.id,
            title || '无标题',
            content,
            images || []
        ]);
        return Response.json(r.rows[0]);
    } catch  {
        return Response.json({
            error: '发布失败，请稍后重试'
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/auth.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "JWT_SECRET",
    ()=>JWT_SECRET,
    "getUser",
    ()=>getUser,
    "isFirstUser",
    ()=>isFirstUser,
    "requireAdmin",
    ()=>requireAdmin,
    "requireAuth",
    ()=>requireAuth
]);
// JWT 认证工具 (Route Handlers 共享)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const JWT_SECRET = process.env.JWT_SECRET || 'forumlify-secret-key-change-me-in-production';
;
function getUser(req) {
    const auth = req.headers.get('authorization') || '';
    const token = auth.split(' ')[1];
    if (!token) return null;
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
    } catch  {
        return null;
    }
}
async function requireAuth(req) {
    const user = getUser(req);
    if (!user) {
        return {
            user: null,
            error: Response.json({
                error: '请先登录'
            }, {
                status: 401
            })
        };
    }
    return {
        user,
        error: null
    };
}
async function requireAdmin(user) {
    if (!user) return Response.json({
        error: '请先登录'
    }, {
        status: 401
    });
    try {
        const r = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].query('SELECT role FROM users WHERE id = $1', [
            user.id
        ]);
        if (r.rows[0]?.role !== 'admin') {
            return Response.json({
                error: '需要管理员权限'
            }, {
                status: 403
            });
        }
        return null;
    } catch  {
        return Response.json({
            error: '服务器错误'
        }, {
            status: 500
        });
    }
}
async function isFirstUser(userId) {
    try {
        const r = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].query('SELECT id FROM users ORDER BY created_at ASC, id ASC LIMIT 1');
        return r.rows.length > 0 && r.rows[0].id === userId;
    } catch  {
        return false;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/db.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// PostgreSQL 连接池单例 (Route Handlers 共享)
// - 传统部署：常规连接池
// - Serverless（Vercel 等）：每个函数实例复用全局池，限制最大连接数
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const isServerless = !!process.env.VERCEL || !!process.env.AWS_LAMBDA_FUNCTION_NAME || !!process.env.CF_PAGES;
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
    connectionString: process.env.DATABASE_URL || 'postgresql://forumlify:123456@localhost:5432/forumlify',
    ...isServerless ? {
        max: 1,
        idleTimeoutMillis: 5000,
        connectionTimeoutMillis: 10000,
        maxUses: 7500
    } : {}
});
// 开发热重载时避免连接池泄漏
if (("TURBOPACK compile-time value", "development") !== 'production' && !globalThis.__forumlifyPool) {
    globalThis.__forumlifyPool = pool;
}
const __TURBOPACK__default__export__ = isServerless ? pool : globalThis.__forumlifyPool || pool;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/http-cache.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jsonWithEtag",
    ()=>jsonWithEtag
]);
const REVALIDATE_CACHE_CONTROL = 'public, max-age=0, must-revalidate';
function matchesEtag(ifNoneMatch, etag) {
    if (!ifNoneMatch) return false;
    const normalized = etag.replace(/^W\//, '');
    return ifNoneMatch.split(',').some((candidate)=>{
        const value = candidate.trim();
        return value === '*' || value.replace(/^W\//, '') === normalized;
    });
}
async function createEtag(body) {
    const bytes = new TextEncoder().encode(body);
    const digest = await crypto.subtle.digest('SHA-256', bytes);
    const hash = Array.from(new Uint8Array(digest), (byte)=>byte.toString(16).padStart(2, '0')).join('');
    return `"${hash}"`;
}
async function jsonWithEtag(req, data, init = {}) {
    const body = JSON.stringify(data);
    const etag = await createEtag(body);
    const headers = new Headers(init.headers);
    headers.set('Cache-Control', REVALIDATE_CACHE_CONTROL);
    headers.set('ETag', etag);
    if (matchesEtag(req.headers.get('if-none-match'), etag)) {
        return new Response(null, {
            status: 304,
            headers
        });
    }
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return new Response(body, {
        ...init,
        headers
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1pmh-6_._.js.map