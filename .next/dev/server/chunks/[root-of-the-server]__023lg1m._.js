module.exports = [
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
"[project]/app/api/auth/register/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
// POST /api/auth/register
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$captcha$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/captcha.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audit.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function POST(req) {
    const { email, password, username, captcha_id, captcha_answer, captcha_sig } = await req.json();
    if (!email || !password || !username) {
        return Response.json({
            error: '请填写完整信息'
        }, {
            status: 400
        });
    }
    if (password.length < 6) {
        return Response.json({
            error: '密码至少6位'
        }, {
            status: 400
        });
    }
    // 服务端验证码校验（ENABLE_CAPTCHA 关闭时跳过）
    if (process.env.ENABLE_CAPTCHA !== 'false' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$captcha$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyCaptcha"])(captcha_id, captcha_answer, captcha_sig)) {
        return Response.json({
            error: '验证码错误，请重新计算'
        }, {
            status: 400
        });
    }
    try {
        const countResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].query('SELECT COUNT(*) FROM users');
        const isFirstUser = parseInt(countResult.rows[0].count) === 0;
        const hash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        const avatar = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username) + '&background=6366f1&color=fff&size=64';
        const role = isFirstUser ? 'admin' : 'user';
        const r = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].query(`INSERT INTO users (email, password_hash, username, avatar_url, role)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, username, avatar_url, role, created_at`, [
            email,
            hash,
            username,
            avatar,
            role
        ]);
        // 服务端审计：注册成功
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logAudit"])(req, 'register', r.rows[0].id);
        return Response.json({
            user: r.rows[0],
            message: isFirstUser ? '你是第一个用户，已自动设为管理员！' : '注册成功'
        });
    } catch (err) {
        if (err.code === '23505') {
            return Response.json({
                error: '邮箱或用户名已被注册'
            }, {
                status: 400
            });
        }
        return Response.json({
            error: '注册失败，请稍后重试'
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/audit.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "logAudit",
    ()=>logAudit
]);
// 服务端审计日志（对齐上游 PR #22：审计日志服务端拥有，不可伪造）
// 用法：await logAudit(req, action)
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
// 从请求提取客户端 IP（支持 X-Forwarded-For / CF 头）
function clientIp(req) {
    const fwd = req.headers.get('x-forwarded-for');
    if (fwd) return fwd.split(',')[0].trim().slice(0, 45);
    const cf = req.headers.get('cf-connecting-ip');
    if (cf) return cf.slice(0, 45);
    return null;
}
async function logAudit(req, action, userId = null) {
    try {
        if (userId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].query(`INSERT INTO event_logs (user_id, action, ip) VALUES ($1, $2, $3)`, [
                userId,
                String(action).slice(0, 50),
                clientIp(req)
            ]);
        } else {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].query(`INSERT INTO event_logs (action, ip) VALUES ($1, $2)`, [
                String(action).slice(0, 50),
                clientIp(req)
            ]);
        }
    } catch  {
    // 审计失败不应阻断主流程
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/captcha.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateCaptchaChallenge",
    ()=>generateCaptchaChallenge,
    "verifyCaptcha",
    ()=>verifyCaptcha
]);
// 服务端验证码：一次性算术挑战，答案签名用 HMAC（对齐上游 ac4af62）
// - GET /api/captcha 返回 { id, text, sig }；sig = HMAC(secret, `${id}:${answer}`)
// - 前端提交 captcha_id + captcha_answer + sig
// - 服务端用提交的答案重算 HMAC 与 sig 比对（防绕过/重放，防前端读答案）
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
function secret() {
    // CAPTCHA_SECRET 可单独配置；默认回退 JWT_SECRET
    return process.env.CAPTCHA_SECRET || process.env.JWT_SECRET || 'forumlify';
}
function generateCaptchaChallenge() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const id = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID();
    const answer = a + b;
    const sig = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac('sha256', secret()).update(`${id}:${answer}`).digest('hex');
    return {
        id,
        text: `${a} + ${b} = ?`,
        answer,
        sig
    };
}
function verifyCaptcha(id, answer, sig) {
    if (!id || answer === undefined || answer === null || answer === '' || !sig) return false;
    const n = typeof answer === 'number' ? answer : parseInt(answer, 10);
    if (Number.isNaN(n)) return false;
    const expected = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac('sha256', secret()).update(`${id}:${n}`).digest('hex');
    const a = Buffer.from(expected, 'hex');
    const b = Buffer.from(String(sig), 'hex');
    return a.length === b.length && __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].timingSafeEqual(a, b);
}
}),
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__023lg1m._.js.map