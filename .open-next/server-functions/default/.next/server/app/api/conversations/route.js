"use strict";(()=>{var e={};e.id=3,e.ids=[3],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8893:e=>{e.exports=require("buffer")},4770:e=>{e.exports=require("crypto")},6162:e=>{e.exports=require("stream")},1764:e=>{e.exports=require("util")},8678:e=>{e.exports=import("pg")},5852:(e,r,s)=>{s.a(e,async(e,t)=>{try{s.r(r),s.d(r,{originalPathname:()=>E,patchFetch:()=>c,requestAsyncStorage:()=>l,routeModule:()=>d,serverHooks:()=>R,staticGenerationAsyncStorage:()=>p});var a=s(9303),n=s(8716),o=s(670),i=s(1562),u=e([i]);i=(u.then?(await u)():u)[0];let d=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/conversations/route",pathname:"/api/conversations",filename:"route",bundlePath:"app/api/conversations/route"},resolvedPagePath:"/Users/home/Projects/forumlify/app/api/conversations/route.js",nextConfigOutput:"standalone",userland:i}),{requestAsyncStorage:l,staticGenerationAsyncStorage:p,serverHooks:R}=d,E="/api/conversations/route";function c(){return(0,o.patchFetch)({serverHooks:R,staticGenerationAsyncStorage:p})}t()}catch(e){t(e)}})},1562:(e,r,s)=>{s.a(e,async(e,t)=>{try{s.r(r),s.d(r,{GET:()=>i,POST:()=>u,dynamic:()=>c});var a=s(4191),n=s(7999),o=e([a,n]);[a,n]=o.then?(await o)():o;let c="force-dynamic";async function i(e){let r=(0,n.PR)(e);if(!r)return Response.json({error:"请先登录"},{status:401});try{let e=await a.Z.query(`
      SELECT
        c.id,
        c.user1_id,
        c.user2_id,
        c.last_message_at,
        c.created_at,
        u.id as other_user_id,
        u.username as other_username,
        u.avatar_url as other_avatar_url,
        (SELECT COUNT(*) FROM messages WHERE conversation_id = c.id AND sender_id != $1 AND is_read = false) as unread_count,
        (SELECT content FROM messages WHERE conversation_id = c.id ORDER BY created_at DESC LIMIT 1) as last_message,
        (SELECT created_at FROM messages WHERE conversation_id = c.id ORDER BY created_at DESC LIMIT 1) as last_message_time
      FROM conversations c
      JOIN users u ON (u.id = c.user1_id OR u.id = c.user2_id) AND u.id != $1
      WHERE c.user1_id = $1 OR c.user2_id = $1
      ORDER BY c.last_message_at DESC
    `,[r.id]);return Response.json(e.rows)}catch{return Response.json({error:"服务器错误"},{status:500})}}async function u(e){let r=(0,n.PR)(e);if(!r)return Response.json({error:"请先登录"},{status:401});let{other_user_id:s}=await e.json();if(!s)return Response.json({error:"缺少对方用户ID"},{status:400});if(s===r.id)return Response.json({error:"不能与自己私信"},{status:400});try{let e=await a.Z.query("SELECT id FROM users WHERE id = $1",[s]);if(0===e.rows.length)return Response.json({error:"用户不存在"},{status:404});let t=await a.Z.query(`
      SELECT id FROM conversations
      WHERE (user1_id = $1 AND user2_id = $2) OR (user1_id = $2 AND user2_id = $1)
    `,[r.id,s]);if(t.rows.length>0)return Response.json({id:t.rows[0].id});let n=await a.Z.query(`
      INSERT INTO conversations (user1_id, user2_id)
      VALUES ($1, $2)
      RETURNING id
    `,[r.id,s]);return Response.json({id:n.rows[0].id})}catch{return Response.json({error:"服务器错误"},{status:500})}}t()}catch(e){t(e)}})},7999:(e,r,s)=>{s.a(e,async(e,t)=>{try{s.d(r,{OB:()=>d,PR:()=>u,kF:()=>c,rf:()=>l});var a=s(1482),n=s.n(a),o=s(4191),i=e([o]);o=(i.then?(await i)():i)[0];let l=process.env.JWT_SECRET||"forumlify-secret-key-change-me-in-production";function u(e){let r=(e.headers.get("authorization")||"").split(" ")[1];if(!r)return null;try{return n().verify(r,l)}catch{return null}}async function c(e){if(!e)return Response.json({error:"请先登录"},{status:401});try{let r=await o.Z.query("SELECT role FROM users WHERE id = $1",[e.id]);if(r.rows[0]?.role!=="admin")return Response.json({error:"需要管理员权限"},{status:403});return null}catch{return Response.json({error:"服务器错误"},{status:500})}}async function d(e){try{let r=await o.Z.query("SELECT id FROM users ORDER BY created_at ASC, id ASC LIMIT 1");return r.rows.length>0&&r.rows[0].id===e}catch{return!1}}t()}catch(e){t(e)}})},4191:(e,r,s)=>{s.a(e,async(e,t)=>{try{s.d(r,{Z:()=>u});var a=s(8678),n=e([a]);a=(n.then?(await n)():n)[0];let o=!!process.env.VERCEL||!!process.env.AWS_LAMBDA_FUNCTION_NAME||!!process.env.CF_PAGES,i=new a.Pool({connectionString:process.env.DATABASE_URL||"postgresql://forumlify:123456@localhost:5432/forumlify",...o?{max:1,idleTimeoutMillis:5e3,connectionTimeoutMillis:1e4,maxUses:7500}:{}}),u=o?i:globalThis.__forumlifyPool||i;t()}catch(e){t(e)}})}};var r=require("../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[948,690],()=>s(5852));module.exports=t})();