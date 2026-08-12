(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/HomeClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 主页客户端组件：SPA 视图调度 (feed/post/new/admin/settings/messages)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sidebar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Feed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Feed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostDetail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PostDetail.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NewPost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/NewPost.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AdminPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AdminPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SettingsPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SettingsPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserProfile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/UserProfile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CustomPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MessagesPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MessagesPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/ChatManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Modals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LoadingScreen.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function HomeInner() {
    _s();
    const { view, currentPostId, currentPostPreview, currentUsername, currentPageName, ready, forumName, forumNameLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // null | login | register | report
    const [reportPostId, setReportPostId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const openModal = (m)=>setModal(m);
    const openReport = (postId)=>{
        setReportPostId(postId);
        setModal('report');
    };
    // 初始化未完成：显示全屏加载页，避免未加载完的界面闪烁
    if (!ready) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            forumName: forumName,
            forumNameLoaded: forumNameLoaded
        }, void 0, false, {
            fileName: "[project]/app/HomeClient.js",
            lineNumber: 30,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onOpenModal: openModal
            }, void 0, false, {
                fileName: "[project]/app/HomeClient.js",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/HomeClient.js",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "app",
                style: {
                    display: view === 'feed' ? undefined : 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/HomeClient.js",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Feed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onOpenModal: openModal,
                        onReport: openReport
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/HomeClient.js",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: view !== 'feed' ? 'block' : 'none'
                },
                children: [
                    view === 'post' && currentPostId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostDetail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        postId: currentPostId,
                        initialPost: currentPostPreview
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.js",
                        lineNumber: 44,
                        columnNumber: 46
                    }, this),
                    view === 'user' && currentUsername && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserProfile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        username: currentUsername
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.js",
                        lineNumber: 45,
                        columnNumber: 48
                    }, this),
                    view === 'custom' && currentPageName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        pageName: currentPageName
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.js",
                        lineNumber: 46,
                        columnNumber: 50
                    }, this),
                    view === 'new' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NewPost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/HomeClient.js",
                        lineNumber: 47,
                        columnNumber: 28
                    }, this),
                    view === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AdminPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/HomeClient.js",
                        lineNumber: 48,
                        columnNumber: 30
                    }, this),
                    view === 'settings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SettingsPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/HomeClient.js",
                        lineNumber: 49,
                        columnNumber: 33
                    }, this),
                    view === 'messages' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MessagesPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/HomeClient.js",
                        lineNumber: 50,
                        columnNumber: 33
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/HomeClient.js",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                modal: modal,
                onClose: ()=>setModal(null),
                reportPostId: reportPostId
            }, void 0, false, {
                fileName: "[project]/app/HomeClient.js",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/HomeClient.js",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(HomeInner, "BMAmqXOA9qrNWw7gOdX8h/vMx9I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = HomeInner;
function HomeClient({ cachedName = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        cachedName: cachedName,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeInner, {}, void 0, false, {
            fileName: "[project]/app/HomeClient.js",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/HomeClient.js",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c1 = HomeClient;
var _c, _c1;
__turbopack_context__.k.register(_c, "HomeInner");
__turbopack_context__.k.register(_c1, "HomeClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AccountSecurity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccountSecurity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 账户安全：修改密码 + 修改邮箱
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function AccountSecurity() {
    _s();
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [oldPassword, setOldPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newPassword, setNewPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [pwStatus, setPwStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [emailPassword, setEmailPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newEmail, setNewEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [emailStatus, setEmailStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const changePassword = async ()=>{
        if (!oldPassword || !newPassword) {
            toast(t('security.fillAll'), 'warning');
            return;
        }
        if (newPassword.length < 6) {
            toast(t('security.pwMin'), 'warning');
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].updatePassword(currentUser.id, oldPassword, newPassword);
            setPwStatus({
                ok: true,
                msg: t('security.pwChanged')
            });
            setOldPassword('');
            setNewPassword('');
        } catch (err) {
            setPwStatus({
                ok: false,
                msg: err.message
            });
        }
    };
    const changeEmail = async ()=>{
        if (!emailPassword || !newEmail) {
            toast(t('security.fillAll'), 'warning');
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].updateEmail(currentUser.id, emailPassword, newEmail);
            setEmailStatus({
                ok: true,
                msg: t('security.emailChanged')
            });
            setEmailPassword('');
            setNewEmail('');
        } catch (err) {
            setEmailStatus({
                ok: false,
                msg: err.message
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginTop: 16,
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontSize: 16,
                    marginBottom: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "lock",
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/components/AccountSecurity.js",
                        lineNumber: 49,
                        columnNumber: 54
                    }, this),
                    " ",
                    t('security.title')
                ]
            }, void 0, true, {
                fileName: "[project]/components/AccountSecurity.js",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontWeight: 600,
                            fontSize: 13,
                            display: 'block',
                            marginBottom: 4
                        },
                        children: t('security.currentPw')
                    }, void 0, false, {
                        fileName: "[project]/components/AccountSecurity.js",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        value: oldPassword,
                        style: {
                            width: '100%',
                            padding: '8px 12px',
                            border: '1px solid var(--border)',
                            borderRadius: 4,
                            fontSize: 14,
                            background: 'var(--bg)',
                            color: 'var(--text)'
                        },
                        onChange: (e)=>setOldPassword(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/AccountSecurity.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AccountSecurity.js",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontWeight: 600,
                            fontSize: 13,
                            display: 'block',
                            marginBottom: 4
                        },
                        children: t('security.newPw')
                    }, void 0, false, {
                        fileName: "[project]/components/AccountSecurity.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        value: newPassword,
                        style: {
                            width: '100%',
                            padding: '8px 12px',
                            border: '1px solid var(--border)',
                            borderRadius: 4,
                            fontSize: 14,
                            background: 'var(--bg)',
                            color: 'var(--text)'
                        },
                        onChange: (e)=>setNewPassword(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/AccountSecurity.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AccountSecurity.js",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn-secondary",
                style: {
                    padding: '8px 16px',
                    border: '1px solid var(--border)',
                    borderRadius: 4,
                    background: 'var(--surface)',
                    cursor: 'pointer',
                    color: 'var(--text)'
                },
                onClick: changePassword,
                children: t('security.changePw')
            }, void 0, false, {
                fileName: "[project]/components/AccountSecurity.js",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            pwStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 13,
                    marginTop: 6,
                    color: pwStatus.ok ? '#22c55e' : '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: pwStatus.ok ? 'success' : 'error',
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/components/AccountSecurity.js",
                        lineNumber: 60,
                        columnNumber: 155
                    }, this),
                    " ",
                    pwStatus.msg
                ]
            }, void 0, true, {
                fileName: "[project]/components/AccountSecurity.js",
                lineNumber: 60,
                columnNumber: 20
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderTop: '1px solid var(--border)',
                    margin: '16px 0'
                }
            }, void 0, false, {
                fileName: "[project]/components/AccountSecurity.js",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontWeight: 600,
                            fontSize: 13,
                            display: 'block',
                            marginBottom: 4
                        },
                        children: t('security.currentPwVerify')
                    }, void 0, false, {
                        fileName: "[project]/components/AccountSecurity.js",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        value: emailPassword,
                        style: {
                            width: '100%',
                            padding: '8px 12px',
                            border: '1px solid var(--border)',
                            borderRadius: 4,
                            fontSize: 14,
                            background: 'var(--bg)',
                            color: 'var(--text)'
                        },
                        onChange: (e)=>setEmailPassword(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/AccountSecurity.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AccountSecurity.js",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontWeight: 600,
                            fontSize: 13,
                            display: 'block',
                            marginBottom: 4
                        },
                        children: t('security.newEmail')
                    }, void 0, false, {
                        fileName: "[project]/components/AccountSecurity.js",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        value: newEmail,
                        style: {
                            width: '100%',
                            padding: '8px 12px',
                            border: '1px solid var(--border)',
                            borderRadius: 4,
                            fontSize: 14,
                            background: 'var(--bg)',
                            color: 'var(--text)'
                        },
                        onChange: (e)=>setNewEmail(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/AccountSecurity.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AccountSecurity.js",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn-secondary",
                style: {
                    padding: '8px 16px',
                    border: '1px solid var(--border)',
                    borderRadius: 4,
                    background: 'var(--surface)',
                    cursor: 'pointer',
                    color: 'var(--text)'
                },
                onClick: changeEmail,
                children: t('security.changeEmail')
            }, void 0, false, {
                fileName: "[project]/components/AccountSecurity.js",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            emailStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 13,
                    marginTop: 6,
                    color: emailStatus.ok ? '#22c55e' : '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: emailStatus.ok ? 'success' : 'error',
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/components/AccountSecurity.js",
                        lineNumber: 73,
                        columnNumber: 161
                    }, this),
                    " ",
                    emailStatus.msg
                ]
            }, void 0, true, {
                fileName: "[project]/components/AccountSecurity.js",
                lineNumber: 73,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AccountSecurity.js",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(AccountSecurity, "9o3TGTM0Wv8s6jDhV/4FqyAWhu8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = AccountSecurity;
var _c;
__turbopack_context__.k.register(_c, "AccountSecurity");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AdminPage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 管理后台：侧边栏布局（对齐上游 main 分支）
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$AdminReports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/AdminReports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$AdminUsers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/AdminUsers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$AdminLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/AdminLogs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$AdminLinks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/AdminLinks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$AdminForumSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/AdminForumSettings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$AdminCustomPages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/AdminCustomPages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$AdminCustomCss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/AdminCustomCss.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const NAV = [
    {
        key: 'reports',
        labelKey: 'admin.reports',
        icon: 'shieldAlert'
    },
    {
        key: 'users',
        labelKey: 'admin.users',
        icon: 'users'
    },
    {
        key: 'logs',
        labelKey: 'admin.logs',
        icon: 'file'
    },
    {
        key: 'links',
        labelKey: 'admin.links',
        icon: 'link'
    },
    {
        key: 'settings',
        labelKey: 'admin.forumSettings',
        icon: 'settings'
    },
    {
        key: 'custom',
        labelKey: 'admin.customPages',
        icon: 'file'
    },
    {
        key: 'css',
        labelKey: 'admin.customCss',
        icon: 'file'
    }
];
function AdminPage() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('reports');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-slide active",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-header",
                style: {
                    maxWidth: 1200,
                    margin: '0 auto',
                    width: '100%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "shieldAlert",
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/AdminPage.js",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this),
                        " ",
                        t('admin.title')
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AdminPage.js",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AdminPage.js",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-layout",
                style: {
                    maxWidth: 1200,
                    margin: '0 auto',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "admin-sidebar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "admin-nav",
                            children: NAV.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: 'admin-nav-item' + (tab === n.key ? ' active' : ''),
                                    "data-tab": n.key,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        setTab(n.key);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "nav-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: n.icon,
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/AdminPage.js",
                                                lineNumber: 45,
                                                columnNumber: 44
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminPage.js",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this),
                                        t(n.labelKey)
                                    ]
                                }, n.key, true, {
                                    fileName: "[project]/components/AdminPage.js",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/AdminPage.js",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/AdminPage.js",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "admin-content",
                        id: "adminContent",
                        children: [
                            tab === 'reports' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$AdminReports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/AdminPage.js",
                                lineNumber: 52,
                                columnNumber: 33
                            }, this),
                            tab === 'users' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$AdminUsers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/AdminPage.js",
                                lineNumber: 53,
                                columnNumber: 31
                            }, this),
                            tab === 'logs' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$AdminLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/AdminPage.js",
                                lineNumber: 54,
                                columnNumber: 30
                            }, this),
                            tab === 'links' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$AdminLinks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/AdminPage.js",
                                lineNumber: 55,
                                columnNumber: 31
                            }, this),
                            tab === 'custom' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$AdminCustomPages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/AdminPage.js",
                                lineNumber: 56,
                                columnNumber: 32
                            }, this),
                            tab === 'css' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$AdminCustomCss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/AdminPage.js",
                                lineNumber: 57,
                                columnNumber: 29
                            }, this),
                            tab === 'settings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$AdminForumSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/AdminPage.js",
                                lineNumber: 58,
                                columnNumber: 34
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AdminPage.js",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AdminPage.js",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AdminPage.js",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(AdminPage, "C3ufWfxdMU8GpapO99sk7W/OIzE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AppProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppProvider,
    "useApp",
    ()=>useApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 全局状态 Provider：用户、主题、论坛名、当前视图（feed/post/new/admin/...）
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const POST_TRANSITION_PARTS = [
    [
        '.post-avatar',
        'post-avatar'
    ],
    [
        '.post-username',
        'post-author'
    ],
    [
        '.post-title',
        'post-heading'
    ],
    [
        '.post-time',
        'post-time'
    ],
    [
        '.post-content',
        'post-body'
    ],
    [
        '.post-images',
        'post-feed-media'
    ],
    [
        '.post-pin-state',
        'post-pin-state'
    ],
    [
        '.post-edited-state',
        'post-edited-state'
    ],
    [
        '.post-actions',
        'post-feed-actions'
    ]
];
function namePostTransitionParts(card) {
    if (!card) return [];
    return POST_TRANSITION_PARTS.flatMap(([selector, name])=>{
        const element = card.querySelector(selector);
        if (!element) return [];
        element.style.viewTransitionName = name;
        return [
            element
        ];
    });
}
function clearPostTransitionParts(elements) {
    elements.forEach((element)=>{
        element.style.viewTransitionName = '';
    });
}
function waitForPostImages(container) {
    const images = Array.from(container?.querySelectorAll('img') || []);
    if (images.length === 0) return Promise.resolve();
    return new Promise((resolve)=>{
        let settled = false;
        const finish = ()=>{
            if (settled) return;
            settled = true;
            clearTimeout(timeout);
            resolve();
        };
        const timeout = setTimeout(finish, 1200);
        Promise.all(images.map((image)=>image.decode?.().catch(()=>{}) || Promise.resolve())).then(finish);
    });
}
function stageSharedGeometry(transition, { name, duration, moveOffset, moveEasing = 'cubic-bezier(0.16, 1, 0.3, 1)', resizeEasing = 'cubic-bezier(0.4, 0, 0.2, 1)', reverse = false }) {
    transition.ready.then(()=>{
        const groupAnimation = document.getAnimations().find((animation)=>animation.effect?.pseudoElement === `::view-transition-group(${name})`);
        const frames = groupAnimation?.effect?.getKeyframes();
        if (!groupAnimation || !frames || frames.length < 2) return;
        const start = frames[0];
        const end = frames[frames.length - 1];
        groupAnimation.effect.setKeyframes(reverse ? [
            {
                offset: 0,
                width: start.width,
                height: start.height,
                transform: start.transform,
                easing: resizeEasing
            },
            {
                offset: 1 - moveOffset,
                width: start.width,
                height: end.height,
                transform: start.transform,
                easing: moveEasing
            },
            {
                offset: 1,
                width: end.width,
                height: end.height,
                transform: end.transform
            }
        ] : [
            {
                offset: 0,
                width: start.width,
                height: start.height,
                transform: start.transform,
                easing: moveEasing
            },
            {
                offset: moveOffset,
                width: end.width,
                height: start.height,
                transform: end.transform,
                easing: resizeEasing
            },
            {
                offset: 1,
                width: end.width,
                height: end.height,
                transform: end.transform
            }
        ]);
        groupAnimation.effect.updateTiming({
            duration,
            easing: 'linear',
            fill: 'both'
        });
    }).catch(()=>{});
}
function useApp() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
}
_s(useApp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function AppProvider({ children, cachedName = '' }) {
    _s1();
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 论坛名初始值来自 cookie（SSR 首帧即输出，SSR/客户端一致 → 无 hydration mismatch）
    const [forumName, setForumName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cachedName || 'Forumlify');
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('feed'); // feed | post | new | admin | settings | messages | user | custom
    const [currentPostId, setCurrentPostId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPostPreview, setCurrentPostPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentUsername, setCurrentUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPageName, setCurrentPageName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('latest');
    const [refreshKey, setRefreshKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 初始加载完成标记（控制加载页/淡入）
    // 有 cookie 缓存名即视为已加载（SSR/客户端一致）
    const [forumNameLoaded, setForumNameLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!!cachedName);
    const loadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[refresh]": ()=>setRefreshKey({
                "AppProvider.useCallback[refresh]": (k)=>k + 1
            }["AppProvider.useCallback[refresh]"])
    }["AppProvider.useCallback[refresh]"], []);
    // 论坛名写 cookie（SSR 可读 → 首帧输出，无需内联脚本注入 DOM）
    const syncForumNameCookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[syncForumNameCookie]": (name)=>{
            try {
                document.cookie = 'forumlify-name=' + encodeURIComponent(name) + '; path=/; max-age=31536000';
            } catch (e) {}
        }
    }["AppProvider.useCallback[syncForumNameCookie]"], []);
    // 主题
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme"])();
            setThemeState(t);
            document.documentElement.setAttribute('data-theme', t);
            // 系统主题变化时跟随（仅当用户未手动设置过）
            const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
            if (mq && mq.addEventListener) {
                const onSysChange = {
                    "AppProvider.useEffect.onSysChange": ()=>{
                        if (!localStorage.getItem('forumlify-theme')) {
                            const next = mq.matches ? 'dark' : 'light';
                            setThemeState(next);
                            document.documentElement.setAttribute('data-theme', next);
                        }
                    }
                }["AppProvider.useEffect.onSysChange"];
                mq.addEventListener('change', onSysChange);
                return ({
                    "AppProvider.useEffect": ()=>mq.removeEventListener('change', onSysChange)
                })["AppProvider.useEffect"];
            }
        }
    }["AppProvider.useEffect"], []);
    // 论坛名变化时同步浏览器标题（覆盖初始化/数据库加载/改名三条路径）
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            document.title = forumName;
            const titleEl = document.querySelector('title');
            if (titleEl) titleEl.textContent = forumName;
        }
    }["AppProvider.useEffect"], [
        forumName
    ]);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[toggleTheme]": ()=>{
            setThemeState({
                "AppProvider.useCallback[toggleTheme]": (prev)=>{
                    const next = prev === 'light' ? 'dark' : 'light';
                    document.documentElement.setAttribute('data-theme', next);
                    localStorage.setItem('forumlify-theme', next);
                    return next;
                }
            }["AppProvider.useCallback[toggleTheme]"]);
        }
    }["AppProvider.useCallback[toggleTheme]"], []);
    // 初始化：读取缓存论坛名（立即显示），恢复登录、加载服务器论坛名
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            // 缓存论坛名（hydrate 后立即生效；SSR 首帧已由 cookie 输出）
            try {
                const cached = localStorage.getItem('forumlify-forum-name');
                if (cached) {
                    setForumName(cached);
                    setForumNameLoaded(true);
                    syncForumNameCookie(cached);
                }
            } catch (e) {}
            if (loadedRef.current) return;
            loadedRef.current = true;
            async function init() {
                const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToken"])();
                if (token) {
                    try {
                        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getMe();
                        setCurrentUser(user);
                    } catch  {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setToken"])(null);
                    }
                }
                try {
                    const s = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getSettings();
                    if (s.forum_name) {
                        setForumName(s.forum_name);
                        localStorage.setItem('forumlify-forum-name', s.forum_name);
                        syncForumNameCookie(s.forum_name);
                    }
                    // 先标记论坛名已收到（加载页原地淡入名字），稍后切换主页
                    setForumNameLoaded(true);
                    setTimeout({
                        "AppProvider.useEffect.init": ()=>setReady(true)
                    }["AppProvider.useEffect.init"], 650);
                } catch  {
                    setForumNameLoaded(true);
                    setReady(true);
                }
            }
            init();
        }
    }["AppProvider.useEffect"], []);
    // 页面标题：初始化中轮换 Loading. → Loading.. → Loading...，收到论坛名/完成后显示论坛名
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            // 尚未收到论坛名且未完成初始化：轮换 Loading.
            if (!ready && !forumNameLoaded) {
                const seq = [
                    'Loading.',
                    'Loading..',
                    'Loading...'
                ];
                let i = 0;
                document.title = seq[0];
                const t = setInterval({
                    "AppProvider.useEffect.t": ()=>{
                        i = (i + 1) % seq.length;
                        document.title = seq[i];
                    }
                }["AppProvider.useEffect.t"], 1000);
                return ({
                    "AppProvider.useEffect": ()=>{
                        clearInterval(t);
                    }
                })["AppProvider.useEffect"];
            }
            // 已收到论坛名或初始化完成：标题显示论坛名（Next 重置 metadata 时也能恢复）
            document.title = forumName;
            const titleEl = document.querySelector('title');
            if (titleEl) titleEl.textContent = forumName;
        }
    }["AppProvider.useEffect"], [
        ready,
        forumNameLoaded,
        forumName
    ]);
    // 按 URL 参数初始化视图
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            const params = new URLSearchParams(window.location.search);
            const postParam = params.get('post');
            const pageParam = params.get('page');
            const userParam = params.get('user');
            if (postParam) {
                setView('post');
                setCurrentPostId(postParam);
            } else if (userParam) {
                setView('user');
                setCurrentUsername(userParam);
            } else if (pageParam && [
                'messages',
                'settings',
                'admin',
                'new'
            ].includes(pageParam)) {
                setView(pageParam);
            } else if (pageParam) {
                // 未知 page 参数视为自定义页面
                setView('custom');
                setCurrentPageName(pageParam);
            }
        }
    }["AppProvider.useEffect"], []);
    // 视图切换：同步 URL (pushState，模拟原 SPA 行为)
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[navigate]": (page)=>{
            const url = new URL(window.location);
            if (page === 'feed') {
                url.searchParams.delete('page');
                url.searchParams.delete('post');
            } else {
                url.searchParams.set('page', page);
                url.searchParams.delete('post');
            }
            const commitNavigation = {
                "AppProvider.useCallback[navigate].commitNavigation": (refreshFeed = true)=>{
                    window.history.pushState({
                        page
                    }, '', url);
                    setView(page);
                    setCurrentPostId(null);
                    setCurrentPostPreview(null);
                    if (refreshFeed) refresh();
                }
            }["AppProvider.useCallback[navigate].commitNavigation"];
            const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
            if (page !== 'feed' || view === 'feed' || !document.startViewTransition || reduceMotion) {
                commitNavigation();
                return;
            }
            let targetCard = currentPostId ? Array.from(document.querySelectorAll('[data-post-id]')).find({
                "AppProvider.useCallback[navigate]": (element)=>element.dataset.postId === String(currentPostId)
            }["AppProvider.useCallback[navigate]"]) : null;
            let targetParts = [];
            document.documentElement.classList.add('home-view-transition');
            if (targetCard) document.documentElement.classList.add('returning-home');
            const transition = document.startViewTransition({
                "AppProvider.useCallback[navigate].transition": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])({
                        "AppProvider.useCallback[navigate].transition": ()=>commitNavigation(false)
                    }["AppProvider.useCallback[navigate].transition"]);
                    targetCard = currentPostId ? Array.from(document.querySelectorAll('[data-post-id]')).find({
                        "AppProvider.useCallback[navigate].transition": (element)=>element.dataset.postId === String(currentPostId)
                    }["AppProvider.useCallback[navigate].transition"]) : null;
                    if (targetCard) targetCard.style.viewTransitionName = 'post-expand';
                    targetParts = namePostTransitionParts(targetCard);
                }
            }["AppProvider.useCallback[navigate].transition"]);
            stageSharedGeometry(transition, {
                name: 'post-expand',
                duration: 960,
                moveOffset: 0.62,
                moveEasing: 'cubic-bezier(0.42, 0, 0.58, 1)',
                resizeEasing: 'cubic-bezier(0.42, 0, 0.58, 1)',
                reverse: true
            });
            stageSharedGeometry(transition, {
                name: 'post-body',
                duration: 960,
                moveOffset: 0.62,
                moveEasing: 'cubic-bezier(0.7, 0, 0.84, 0)',
                resizeEasing: 'cubic-bezier(0.8, 0, 0.6, 1)',
                reverse: true
            });
            const clearTargetNames = {
                "AppProvider.useCallback[navigate].clearTargetNames": ()=>{
                    if (targetCard) targetCard.style.viewTransitionName = '';
                    clearPostTransitionParts(targetParts);
                }
            }["AppProvider.useCallback[navigate].clearTargetNames"];
            transition.ready.then(clearTargetNames, clearTargetNames);
            transition.finished.finally({
                "AppProvider.useCallback[navigate]": ()=>{
                    document.documentElement.classList.remove('home-view-transition', 'returning-home');
                    refresh();
                }
            }["AppProvider.useCallback[navigate]"]);
        }
    }["AppProvider.useCallback[navigate]"], [
        currentPostId,
        refresh,
        view
    ]);
    const openPost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[openPost]": (postId, sourceElement = null, preview = null)=>{
            const url = new URL(window.location);
            url.searchParams.set('post', postId);
            url.searchParams.delete('page');
            url.searchParams.delete('user');
            const commitNavigation = {
                "AppProvider.useCallback[openPost].commitNavigation": ()=>{
                    window.history.pushState({
                        page: 'post',
                        postId
                    }, '', url);
                    setView('post');
                    setCurrentPostId(postId);
                    setCurrentPostPreview(preview);
                }
            }["AppProvider.useCallback[openPost].commitNavigation"];
            const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
            if (!sourceElement || !document.startViewTransition || reduceMotion) {
                commitNavigation();
                return;
            }
            document.documentElement.classList.remove('post-transition-settled');
            sourceElement.style.viewTransitionName = 'post-expand';
            const sourceParts = namePostTransitionParts(sourceElement);
            document.documentElement.classList.add('post-view-transition');
            const transition = document.startViewTransition({
                "AppProvider.useCallback[openPost].transition": async ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(commitNavigation);
                    await waitForPostImages(document.querySelector('#pagePost .post-detail-card'));
                }
            }["AppProvider.useCallback[openPost].transition"]);
            stageSharedGeometry(transition, {
                name: 'post-expand',
                duration: 960,
                moveOffset: 0.62,
                moveEasing: 'cubic-bezier(0.42, 0, 0.58, 1)',
                resizeEasing: 'cubic-bezier(0.42, 0, 0.58, 1)'
            });
            stageSharedGeometry(transition, {
                name: 'post-body',
                duration: 960,
                moveOffset: 0.62
            });
            const clearSourceNames = {
                "AppProvider.useCallback[openPost].clearSourceNames": ()=>{
                    sourceElement.style.viewTransitionName = '';
                    clearPostTransitionParts(sourceParts);
                }
            }["AppProvider.useCallback[openPost].clearSourceNames"];
            transition.ready.then(clearSourceNames, clearSourceNames);
            transition.finished.finally({
                "AppProvider.useCallback[openPost]": ()=>{
                    const root = document.documentElement;
                    root.classList.remove('post-view-transition');
                    root.classList.add('post-transition-settled');
                    window.setTimeout({
                        "AppProvider.useCallback[openPost]": ()=>root.classList.remove('post-transition-settled')
                    }["AppProvider.useCallback[openPost]"], 220);
                }
            }["AppProvider.useCallback[openPost]"]);
        }
    }["AppProvider.useCallback[openPost]"], []);
    const openUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[openUser]": (username)=>{
            const url = new URL(window.location);
            url.searchParams.set('user', username);
            url.searchParams.delete('page');
            url.searchParams.delete('post');
            window.history.pushState({
                page: 'user',
                username
            }, '', url);
            setView('user');
            setCurrentUsername(username);
        }
    }["AppProvider.useCallback[openUser]"], []);
    const openCustomPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[openCustomPage]": (pageName)=>{
            const url = new URL(window.location);
            url.searchParams.set('page', pageName);
            url.searchParams.delete('post');
            url.searchParams.delete('user');
            window.history.pushState({
                page: 'custom',
                pageName
            }, '', url);
            setView('custom');
            setCurrentPageName(pageName);
        }
    }["AppProvider.useCallback[openCustomPage]"], []);
    // 浏览器前进后退
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            const onPop = {
                "AppProvider.useEffect.onPop": (e)=>{
                    const state = e.state || {};
                    if (state.postId) {
                        setView('post');
                        setCurrentPostId(state.postId);
                        setCurrentPostPreview(null);
                    } else if (state.username) {
                        setView('user');
                        setCurrentUsername(state.username);
                    } else if (state.pageName) {
                        setView('custom');
                        setCurrentPageName(state.pageName);
                    } else {
                        setView(state.page || 'feed');
                        setCurrentPostId(null);
                        setCurrentPostPreview(null);
                        setCurrentUsername(null);
                        setCurrentPageName(null);
                    }
                }
            }["AppProvider.useEffect.onPop"];
            window.addEventListener('popstate', onPop);
            return ({
                "AppProvider.useEffect": ()=>window.removeEventListener('popstate', onPop)
            })["AppProvider.useEffect"];
        }
    }["AppProvider.useEffect"], []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[login]": async (email, password)=>{
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].login(email, password);
            if (result.user) {
                setCurrentUser(result.user);
            }
            return result;
        }
    }["AppProvider.useCallback[login]"], []);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[register]": async (email, password, username, captcha)=>{
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].register(email, password, username, captcha);
            const loginResult = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].login(email, password);
            if (loginResult.user) {
                setCurrentUser(loginResult.user);
            }
            return result;
        }
    }["AppProvider.useCallback[register]"], []);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[logout]": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].logout();
            setCurrentUser(null);
            navigate('feed');
        }
    }["AppProvider.useCallback[logout]"], [
        navigate
    ]);
    const updateForumName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppProvider.useCallback[updateForumName]": (name)=>{
            setForumName(name);
            localStorage.setItem('forumlify-forum-name', name);
            syncForumNameCookie(name);
        }
    }["AppProvider.useCallback[updateForumName]"], [
        syncForumNameCookie
    ]);
    const value = {
        currentUser,
        setCurrentUser,
        forumName,
        forumNameLoaded,
        updateForumName,
        theme,
        toggleTheme,
        view,
        navigate,
        currentPostId,
        currentPostPreview,
        openPost,
        currentUsername,
        openUser,
        currentPageName,
        openCustomPage,
        sort,
        setSort,
        refreshKey,
        refresh,
        ready,
        login,
        register,
        logout
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/AppProvider.js",
        lineNumber: 472,
        columnNumber: 10
    }, this);
}
_s1(AppProvider, "Mo2xOkMdltpo6yC90bQ04IsF2LI=");
_c = AppProvider;
var _c;
__turbopack_context__.k.register(_c, "AppProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CaptchaImage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaptchaImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 图片验证码：用 canvas 绘制算式（带噪点/干扰线，挡一部分人机）
// 点击图片可刷新验证码
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function CaptchaImage({ captcha, onRefresh }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CaptchaImage.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas || !captcha) return;
            const ctx = canvas.getContext('2d');
            const W = canvas.width;
            const H = canvas.height;
            // 背景（半透明玻璃感）
            ctx.clearRect(0, 0, W, H);
            ctx.fillStyle = 'rgba(91, 155, 213, 0.10)';
            ctx.fillRect(0, 0, W, H);
            // 干扰线
            for(let i = 0; i < 4; i++){
                ctx.strokeStyle = `rgba(${80 + Math.random() * 120}, ${80 + Math.random() * 120}, 200, ${0.2 + Math.random() * 0.3})`;
                ctx.lineWidth = 1 + Math.random();
                ctx.beginPath();
                ctx.moveTo(Math.random() * W, Math.random() * H);
                ctx.lineTo(Math.random() * W, Math.random() * H);
                ctx.stroke();
            }
            // 噪点
            for(let i = 0; i < 30; i++){
                ctx.fillStyle = `rgba(${Math.random() * 200}, ${Math.random() * 200}, 220, ${0.3 + Math.random() * 0.5})`;
                ctx.beginPath();
                ctx.arc(Math.random() * W, Math.random() * H, 1 + Math.random() * 1.5, 0, Math.PI * 2);
                ctx.fill();
            }
            // 算式文字（每个字符轻微旋转/位移，增加识别难度）
            const text = (captcha.text || captcha.question || '').replace(' = ?', '');
            const chars = text.split('');
            const fontSize = Math.floor(H * 0.52);
            const step = W / (chars.length + 1);
            chars.forEach({
                "CaptchaImage.useEffect": (ch, i)=>{
                    ctx.save();
                    ctx.translate(step * (i + 1) + (Math.random() - 0.5) * 6, H / 2 + (Math.random() - 0.5) * 6);
                    ctx.rotate((Math.random() - 0.5) * 0.25);
                    ctx.font = `bold ${fontSize}px -apple-system, "SF Pro Display", "Segoe UI", Roboto, sans-serif`;
                    ctx.fillStyle = `rgba(${40 + Math.random() * 60}, ${50 + Math.random() * 50}, 90, 0.9)`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(ch, 0, 0);
                    ctx.restore();
                }
            }["CaptchaImage.useEffect"]);
        }
    }["CaptchaImage.useEffect"], [
        captcha
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        width: 120,
        height: 40,
        onClick: onRefresh,
        title: "看不清？点击刷新",
        style: {
            cursor: 'pointer',
            borderRadius: 6,
            border: '1px solid var(--glass-border)',
            verticalAlign: 'middle'
        }
    }, void 0, false, {
        fileName: "[project]/components/CaptchaImage.js",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(CaptchaImage, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = CaptchaImage;
var _c;
__turbopack_context__.k.register(_c, "CaptchaImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CustomPage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 自定义页面：以 iframe srcdoc 渲染 HTML 内容（与原版一致）
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CustomPage({ pageName }) {
    _s();
    const [html, setHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomPage.useEffect": ()=>{
            setHtml(null);
            setError(null);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getCustomPage(pageName).then({
                "CustomPage.useEffect": (page)=>setHtml(page.content)
            }["CustomPage.useEffect"]).catch({
                "CustomPage.useEffect": (err)=>setError(err.message)
            }["CustomPage.useEffect"]);
        }
    }["CustomPage.useEffect"], [
        pageName
    ]);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '84px 32px',
                textAlign: 'center',
                color: '#ef4444'
            },
            children: [
                "页面加载失败：",
                error
            ]
        }, void 0, true, {
            fileName: "[project]/components/CustomPage.js",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    if (html === null) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '84px 32px',
                textAlign: 'center',
                color: '#94a3b8'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "spinner-sm"
                }, void 0, false, {
                    fileName: "[project]/components/CustomPage.js",
                    lineNumber: 27,
                    columnNumber: 89
                }, this),
                "加载中..."
            ]
        }, void 0, true, {
            fileName: "[project]/components/CustomPage.js",
            lineNumber: 27,
            columnNumber: 12
        }, this);
    }
    const srcdoc = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    padding: 24px;
    background: var(--bg, #f6f8fc);
    color: var(--text, #0a0e1a);
  }
  @media (prefers-color-scheme: dark) {
    body { background: #0f1117; color: #e8edf5; }
  }
</style>
</head>
<body>${html}</body>
</html>`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "custom-page-container",
        style: {
            padding: '84px 32px 40px',
            background: 'var(--bg)',
            minHeight: '100vh'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            style: {
                width: '100%',
                minHeight: '70vh',
                border: 'none',
                borderRadius: 8,
                background: 'var(--surface)'
            },
            sandbox: "allow-scripts allow-modals allow-same-origin",
            srcDoc: srcdoc,
            title: pageName
        }, void 0, false, {
            fileName: "[project]/components/CustomPage.js",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CustomPage.js",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(CustomPage, "/z8i9eq+eGsetR+n0pwgxR7OYVg=");
_c = CustomPage;
var _c;
__turbopack_context__.k.register(_c, "CustomPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Feed.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Feed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 信息流：帖子列表 + 排序 tab + 发布新帖按钮
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImageViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ImageViewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/markdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function avatar(username) {
    return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username || '匿名用户') + '&background=6366f1&color=fff&size=64';
}
function Feed({ onOpenModal, onReport }) {
    _s();
    const { currentUser, sort, setSort, openPost, openUser, navigate, refreshKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { toast, confirmAction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [viewerSrc, setViewerSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSort, setSelectedSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sort);
    const [drawerPhase, setDrawerPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const postListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sortTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingSortRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const PAGE_SIZE = 20;
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Feed.useCallback[load]": async (targetPage)=>{
            setError(null);
            try {
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getPosts(sort, null, targetPage, PAGE_SIZE);
                setPosts(result.data || []);
                setTotalPages(result.pagination?.totalPages || 1);
                setPage(result.pagination?.page || 1);
            } catch (err) {
                setError(err.message);
                setPosts([]);
            } finally{
                if (pendingSortRef.current === sort) {
                    requestAnimationFrame({
                        "Feed.useCallback[load]": ()=>{
                            setDrawerPhase('opening');
                            sortTimerRef.current = setTimeout({
                                "Feed.useCallback[load]": ()=>{
                                    pendingSortRef.current = null;
                                    setDrawerPhase('idle');
                                }
                            }["Feed.useCallback[load]"], 360);
                        }
                    }["Feed.useCallback[load]"]);
                }
            }
        }
    }["Feed.useCallback[load]"], [
        sort,
        refreshKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Feed.useEffect": ()=>{
            load(page);
        }
    }["Feed.useEffect"], [
        load
    ]);
    // 长帖内容：超过 3 行时加 .has-fade（底部渐变遮罩提示还有更多内容）
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Feed.useEffect": ()=>{
            if (!posts || posts.length === 0 || !postListRef.current) return;
            const els = postListRef.current.querySelectorAll('.post-content');
            els.forEach({
                "Feed.useEffect": (el)=>{
                    if (el.scrollHeight > el.clientHeight + 4) {
                        el.classList.add('has-fade');
                    } else {
                        el.classList.remove('has-fade');
                    }
                }
            }["Feed.useEffect"]);
        }
    }["Feed.useEffect"], [
        posts
    ]);
    // 排序切换时回第一页
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Feed.useEffect": ()=>{
            setPage(1);
        }
    }["Feed.useEffect"], [
        sort
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Feed.useEffect": ()=>({
                "Feed.useEffect": ()=>clearTimeout(sortTimerRef.current)
            })["Feed.useEffect"]
    }["Feed.useEffect"], []);
    const handleSortChange = (nextSort)=>{
        if (nextSort === selectedSort) return;
        setSelectedSort(nextSort);
        clearTimeout(sortTimerRef.current);
        // 快速切回当前排序时，直接重新展开尚未替换的列表。
        if (nextSort === sort) {
            pendingSortRef.current = null;
            setDrawerPhase('opening');
            sortTimerRef.current = setTimeout(()=>setDrawerPhase('idle'), 360);
            return;
        }
        setDrawerPhase('closing');
        sortTimerRef.current = setTimeout(()=>{
            pendingSortRef.current = nextSort;
            setDrawerPhase('closed');
            setSort(nextSort);
        }, 220);
    };
    const handleDelete = async (postId)=>{
        if (!await confirmAction(t('feed.confirmDelete'))) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].deletePost(postId);
            load(page);
        } catch (err) {
            toast(t('feed.deleteFailed', {
                msg: err.message
            }), 'error');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        id: "feed",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "feed-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "feed-header-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: 'tab' + (selectedSort === 'latest' ? ' active' : ''),
                                onClick: ()=>handleSortChange('latest'),
                                children: t('feed.latest')
                            }, void 0, false, {
                                fileName: "[project]/components/Feed.js",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: 'tab' + (selectedSort === 'hot' ? ' active' : ''),
                                onClick: ()=>handleSortChange('hot'),
                                children: t('feed.hot')
                            }, void 0, false, {
                                fileName: "[project]/components/Feed.js",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Feed.js",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary fab-btn",
                        onClick: ()=>{
                            if (!currentUser) {
                                toast(t('newPost.pleaseLogin'), 'warning');
                                return;
                            }
                            navigate('new');
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "plus"
                            }, void 0, false, {
                                fileName: "[project]/components/Feed.js",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            " ",
                            t('feed.newPost')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Feed.js",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Feed.js",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: 'feed-posts-drawer ' + drawerPhase,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "feed-posts-drawer-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "postList",
                        ref: postListRef,
                        children: posts === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                color: '#94a3b8',
                                padding: '40px 0'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "spinner-sm"
                                }, void 0, false, {
                                    fileName: "[project]/components/Feed.js",
                                    lineNumber: 131,
                                    columnNumber: 89
                                }, this),
                                t('feed.loading')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Feed.js",
                            lineNumber: 131,
                            columnNumber: 15
                        }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                color: '#ef4444',
                                padding: '40px 0'
                            },
                            children: t('feed.loadFailed', {
                                msg: error
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/Feed.js",
                            lineNumber: 133,
                            columnNumber: 15
                        }, this) : posts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                color: '#94a3b8',
                                padding: '60px 0'
                            },
                            children: t('feed.empty')
                        }, void 0, false, {
                            fileName: "[project]/components/Feed.js",
                            lineNumber: 135,
                            columnNumber: 15
                        }, this) : posts.map((p)=>{
                            const time = p.created_at ? new Date(p.created_at).toLocaleString('zh-CN') : '';
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "post-card",
                                "data-post-id": p.id,
                                style: {
                                    cursor: 'pointer'
                                },
                                onClick: (e)=>openPost(p.id, e.currentTarget, p),
                                children: [
                                    p.is_pinned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "post-pin-state",
                                        style: {
                                            width: 'fit-content',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 3,
                                            fontSize: 12,
                                            color: 'var(--primary)',
                                            fontWeight: 600,
                                            marginBottom: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "pin",
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/components/Feed.js",
                                                lineNumber: 143,
                                                columnNumber: 204
                                            }, this),
                                            " ",
                                            t('feed.pinned')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Feed.js",
                                        lineNumber: 143,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "post-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: p.avatar_url || avatar(p.username),
                                                className: "post-avatar",
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/components/Feed.js",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "post-username",
                                                style: {
                                                    cursor: 'pointer',
                                                    color: 'var(--primary)'
                                                },
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    openUser(p.username);
                                                },
                                                children: p.username || t('feed.anonymous')
                                            }, void 0, false, {
                                                fileName: "[project]/components/Feed.js",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "post-time",
                                                children: time
                                            }, void 0, false, {
                                                fileName: "[project]/components/Feed.js",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this),
                                            p.edited_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "post-edited-state",
                                                style: {
                                                    fontSize: 11,
                                                    color: 'var(--text-light)',
                                                    marginLeft: 6
                                                },
                                                children: t('feed.deleted')
                                            }, void 0, false, {
                                                fileName: "[project]/components/Feed.js",
                                                lineNumber: 156,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Feed.js",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "post-title",
                                        children: p.title || t('feed.noTitle')
                                    }, void 0, false, {
                                        fileName: "[project]/components/Feed.js",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "post-content",
                                        dangerouslySetInnerHTML: {
                                            __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderMarkdown"])(p.content)
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Feed.js",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this),
                                    p.images && p.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "post-images",
                                        children: p.images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: img,
                                                className: "post-image",
                                                alt: "",
                                                style: {
                                                    cursor: 'pointer'
                                                },
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    setViewerSrc(img);
                                                }
                                            }, i, false, {
                                                fileName: "[project]/components/Feed.js",
                                                lineNumber: 164,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Feed.js",
                                        lineNumber: 162,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "post-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "message",
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Feed.js",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    p.reply_count || 0
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Feed.js",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "action-report",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    if (!currentUser) {
                                                        toast(t('newPost.pleaseLogin'), 'warning');
                                                        return;
                                                    }
                                                    onReport(p.id);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "flag",
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Feed.js",
                                                        lineNumber: 177,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    t('feed.report')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Feed.js",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this),
                                            currentUser && (currentUser.id === p.user_id || currentUser.role === 'admin') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "action-delete",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    handleDelete(p.id);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "trash",
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Feed.js",
                                                        lineNumber: 184,
                                                        columnNumber: 23
                                                    }, this),
                                                    " ",
                                                    t('feed.delete')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Feed.js",
                                                lineNumber: 180,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Feed.js",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/components/Feed.js",
                                lineNumber: 140,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/Feed.js",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Feed.js",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Feed.js",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            totalPages > 1 && posts && posts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 6,
                    padding: '16px 0',
                    marginTop: 8,
                    borderTop: '1px solid var(--border)',
                    flexWrap: 'wrap'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "page-btn",
                        disabled: page <= 1,
                        onClick: ()=>load(page - 1),
                        style: {
                            padding: '6px 12px',
                            border: '1px solid var(--border)',
                            borderRadius: 4,
                            background: 'var(--surface)',
                            color: 'var(--text)',
                            cursor: page <= 1 ? 'not-allowed' : 'pointer',
                            fontSize: 13,
                            opacity: page <= 1 ? 0.4 : 1
                        },
                        children: "«"
                    }, void 0, false, {
                        fileName: "[project]/components/Feed.js",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    Array.from({
                        length: totalPages
                    }, (_, i)=>i + 1).map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "page-btn",
                            disabled: i === page,
                            onClick: ()=>load(i),
                            style: {
                                padding: '6px 10px',
                                border: '1px solid var(--border)',
                                borderRadius: 4,
                                fontSize: 13,
                                minWidth: 32,
                                textAlign: 'center',
                                background: i === page ? 'var(--primary)' : 'var(--surface)',
                                color: i === page ? '#fff' : 'var(--text)',
                                cursor: i === page ? 'default' : 'pointer',
                                borderColor: i === page ? 'var(--primary)' : 'var(--border)'
                            },
                            children: i
                        }, i, false, {
                            fileName: "[project]/components/Feed.js",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "page-btn",
                        disabled: page >= totalPages,
                        onClick: ()=>load(page + 1),
                        style: {
                            padding: '6px 12px',
                            border: '1px solid var(--border)',
                            borderRadius: 4,
                            background: 'var(--surface)',
                            color: 'var(--text)',
                            cursor: page >= totalPages ? 'not-allowed' : 'pointer',
                            fontSize: 13,
                            opacity: page >= totalPages ? 0.4 : 1
                        },
                        children: "»"
                    }, void 0, false, {
                        fileName: "[project]/components/Feed.js",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Feed.js",
                lineNumber: 196,
                columnNumber: 9
            }, this),
            viewerSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImageViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: viewerSrc,
                onClose: ()=>setViewerSrc(null)
            }, void 0, false, {
                fileName: "[project]/components/Feed.js",
                lineNumber: 232,
                columnNumber: 27
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Feed.js",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(Feed, "lY71+g62pIxdpK8aFTBxC1pAizg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Feed;
var _c;
__turbopack_context__.k.register(_c, "Feed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ImageViewer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImageViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 图片查看器（点击帖子图片放大）
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ImageViewer({ src, onClose }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageViewer.useEffect": ()=>{
            const onKey = {
                "ImageViewer.useEffect.onKey": (e)=>{
                    if (e.key === 'Escape') onClose();
                }
            }["ImageViewer.useEffect.onKey"];
            document.addEventListener('keydown', onKey);
            return ({
                "ImageViewer.useEffect": ()=>document.removeEventListener('keydown', onKey)
            })["ImageViewer.useEffect"];
        }
    }["ImageViewer.useEffect"], [
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal active",
        style: {
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            animation: 'fadeIn 0.2s ease-out'
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: "",
            style: {
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: 8,
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                cursor: 'default',
                userSelect: 'none'
            },
            onClick: (e)=>e.stopPropagation()
        }, void 0, false, {
            fileName: "[project]/components/ImageViewer.js",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ImageViewer.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(ImageViewer, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ImageViewer;
var _c;
__turbopack_context__.k.register(_c, "ImageViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LoadingScreen.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function LoadingScreen({ forumName, forumNameLoaded }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "loading-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "loading-inner",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loading-spinner"
                }, void 0, false, {
                    fileName: "[project]/components/LoadingScreen.js",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: 'loading-title' + (forumNameLoaded ? ' loading-title-appear' : ''),
                    id: "loadingTitle",
                    suppressHydrationWarning: true,
                    children: forumNameLoaded && forumName
                }, void 0, false, {
                    fileName: "[project]/components/LoadingScreen.js",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loading-sub",
                    children: "加载中..."
                }, void 0, false, {
                    fileName: "[project]/components/LoadingScreen.js",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/LoadingScreen.js",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/LoadingScreen.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = LoadingScreen;
var _c;
__turbopack_context__.k.register(_c, "LoadingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MessagesPage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessagesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 消息页：通知列表（回复/删除/举报处理/系统）
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const TYPE_MAP = {
    reply: 'message',
    post_deleted: 'trash',
    report_handled: 'shield',
    system: 'megaphone'
};
function MessagesPage() {
    _s();
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessagesPage.useEffect": ()=>{
            if (!currentUser) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getNotifications().then({
                "MessagesPage.useEffect": (data)=>{
                    setNotifications(data || []);
                    setError(null);
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].markAllNotificationsRead().catch({
                        "MessagesPage.useEffect": ()=>{}
                    }["MessagesPage.useEffect"]);
                }
            }["MessagesPage.useEffect"]).catch({
                "MessagesPage.useEffect": (e)=>{
                    setError(e.message);
                    setNotifications([]);
                }
            }["MessagesPage.useEffect"]);
        }
    }["MessagesPage.useEffect"], [
        currentUser
    ]);
    if (!currentUser) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "page-slide active",
            style: {
                textAlign: 'center',
                color: '#94a3b8',
                padding: '40px 0'
            },
            children: "请先登录"
        }, void 0, false, {
            fileName: "[project]/components/MessagesPage.js",
            lineNumber: 28,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-slide active",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-header",
                style: {
                    maxWidth: 700,
                    margin: '0 auto',
                    width: '100%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "message",
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/MessagesPage.js",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        " 消息"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/MessagesPage.js",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/MessagesPage.js",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 700,
                    margin: '0 auto',
                    width: '100%'
                },
                children: error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        color: '#ef4444',
                        padding: 20
                    },
                    children: [
                        "加载失败：",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/MessagesPage.js",
                    lineNumber: 38,
                    columnNumber: 11
                }, this) : notifications === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        color: '#94a3b8',
                        padding: '40px 0'
                    },
                    children: "加载中..."
                }, void 0, false, {
                    fileName: "[project]/components/MessagesPage.js",
                    lineNumber: 40,
                    columnNumber: 11
                }, this) : notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        color: '#94a3b8',
                        padding: '60px 0'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "message",
                            size: 48
                        }, void 0, false, {
                            fileName: "[project]/components/MessagesPage.js",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 16
                            },
                            children: "暂无消息"
                        }, void 0, false, {
                            fileName: "[project]/components/MessagesPage.js",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 13
                            },
                            children: "当有人回复你的帖子或处理你的举报时，会在这里通知你"
                        }, void 0, false, {
                            fileName: "[project]/components/MessagesPage.js",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/MessagesPage.js",
                    lineNumber: 42,
                    columnNumber: 11
                }, this) : notifications.map((n)=>{
                    const icon = TYPE_MAP[n.type] || 'pin';
                    const time = n.created_at ? new Date(n.created_at).toLocaleString('zh-CN') : '';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 12,
                            padding: '14px 16px',
                            borderBottom: '1px solid var(--border-light)',
                            background: 'var(--surface)',
                            borderRadius: 6,
                            marginBottom: 6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'var(--text-secondary)',
                                    paddingTop: 2
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: icon,
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/MessagesPage.js",
                                    lineNumber: 53,
                                    columnNumber: 81
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/MessagesPage.js",
                                lineNumber: 53,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    minWidth: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 600,
                                            fontSize: 14
                                        },
                                        children: n.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/MessagesPage.js",
                                        lineNumber: 55,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'var(--text-secondary)',
                                            fontSize: 13,
                                            marginTop: 2
                                        },
                                        children: n.content
                                    }, void 0, false, {
                                        fileName: "[project]/components/MessagesPage.js",
                                        lineNumber: 56,
                                        columnNumber: 19
                                    }, this),
                                    n.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: n.link,
                                        style: {
                                            color: 'var(--primary)',
                                            fontSize: 13,
                                            textDecoration: 'none',
                                            marginTop: 4,
                                            display: 'inline-block'
                                        },
                                        children: "查看详情 →"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MessagesPage.js",
                                        lineNumber: 57,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 12,
                                            color: 'var(--text-light)',
                                            marginTop: 4
                                        },
                                        children: time
                                    }, void 0, false, {
                                        fileName: "[project]/components/MessagesPage.js",
                                        lineNumber: 58,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MessagesPage.js",
                                lineNumber: 54,
                                columnNumber: 17
                            }, this)
                        ]
                    }, n.id, true, {
                        fileName: "[project]/components/MessagesPage.js",
                        lineNumber: 52,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/MessagesPage.js",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MessagesPage.js",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(MessagesPage, "EDkuvZyq6pqC7p12z65P8VnZk3E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = MessagesPage;
var _c;
__turbopack_context__.k.register(_c, "MessagesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Modals.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 登录/注册/举报 模态框
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CaptchaImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CaptchaImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Modals({ modal, onClose, reportPostId }) {
    _s();
    const { login, register, currentUser, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    // 登录表单
    const [loginEmail, setLoginEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loginPassword, setLoginPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // 注册表单
    const [regUsername, setRegUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [regEmail, setRegEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [regPassword, setRegPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [regCaptcha, setRegCaptcha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [regCaptchaInput, setRegCaptchaInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // 举报表单
    const [reportReason, setReportReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('spam');
    // 打开注册弹窗时从服务器获取验证码挑战（HMAC 签名）
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modals.useEffect": ()=>{
            if (modal === 'register') {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getCaptcha().then({
                    "Modals.useEffect": (c)=>setRegCaptcha(c)
                }["Modals.useEffect"]).catch({
                    "Modals.useEffect": ()=>{}
                }["Modals.useEffect"]);
            }
        }
    }["Modals.useEffect"], [
        modal
    ]);
    if (!modal) return null;
    const close = (e)=>{
        if (e && e.target !== e.currentTarget) return;
        onClose();
    };
    const handleLogin = async ()=>{
        if (!loginEmail.trim() || !loginPassword) {
            toast('请填写完整信息', 'warning');
            return;
        }
        try {
            const result = await login(loginEmail.trim(), loginPassword);
            if (result.user) {
                onClose();
                setLoginEmail('');
                setLoginPassword('');
                refresh();
            }
        } catch (err) {
            toast('登录失败：' + err.message, 'error');
        }
    };
    const handleRegister = async ()=>{
        if (!regUsername.trim() || !regEmail.trim() || !regPassword) {
            toast('请填写完整信息', 'warning');
            return;
        }
        if (regPassword.length < 6) {
            toast('密码至少6位', 'warning');
            return;
        }
        if (!regCaptcha || !regCaptchaInput.trim()) {
            toast('请填写验证码', 'warning');
            return;
        }
        try {
            // 答案由服务端 HMAC 校验，前端不对比答案
            await register(regEmail.trim(), regPassword, regUsername.trim(), {
                id: regCaptcha.id,
                answer: regCaptchaInput.trim(),
                sig: regCaptcha.sig
            });
            onClose();
            setRegUsername('');
            setRegEmail('');
            setRegPassword('');
            setRegCaptchaInput('');
            toast('注册成功！', 'success');
            refresh();
        } catch (err) {
            toast('注册失败：' + err.message, 'error');
            // 失败后刷新验证码
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getCaptcha().then((c)=>setRegCaptcha(c)).catch(()=>{});
            setRegCaptchaInput('');
        }
    };
    const handleReport = async ()=>{
        if (!reportPostId) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].createReport(reportPostId, reportReason);
            onClose();
            toast('举报已提交，管理员将尽快处理', 'success');
        } catch (err) {
            toast('举报失败：' + err.message, 'error');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            modal === 'login' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal active",
                onClick: close,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "close",
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "close",
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/Modals.js",
                                lineNumber: 101,
                                columnNumber: 55
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: 16
                            },
                            children: t('auth.login')
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            placeholder: t('auth.email'),
                            value: loginEmail,
                            onChange: (e)=>setLoginEmail(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            placeholder: t('auth.password'),
                            value: loginPassword,
                            onChange: (e)=>setLoginPassword(e.target.value),
                            onKeyDown: (e)=>{
                                if (e.key === 'Enter') handleLogin();
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-primary",
                            style: {
                                width: '100%'
                            },
                            onClick: handleLogin,
                            children: t('auth.login')
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Modals.js",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Modals.js",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            modal === 'register' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal active",
                onClick: close,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "close",
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "close",
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/Modals.js",
                                lineNumber: 114,
                                columnNumber: 55
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: 16
                            },
                            children: t('auth.register')
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: t('auth.username'),
                            value: regUsername,
                            onChange: (e)=>setRegUsername(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            placeholder: t('auth.email'),
                            value: regEmail,
                            onChange: (e)=>setRegEmail(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            placeholder: t('auth.passwordHint'),
                            value: regPassword,
                            onChange: (e)=>setRegPassword(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "captcha-row",
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                margin: '12px 0'
                            },
                            children: [
                                regCaptcha ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CaptchaImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    captcha: regCaptcha,
                                    onRefresh: ()=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getCaptcha().then((c)=>setRegCaptcha(c)).catch(()=>{});
                                        setRegCaptchaInput('');
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Modals.js",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'var(--text-light)'
                                    },
                                    children: t('newPost.captchaLoading')
                                }, void 0, false, {
                                    fileName: "[project]/components/Modals.js",
                                    lineNumber: 123,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "答案",
                                    style: {
                                        width: 80,
                                        background: 'var(--bg)',
                                        color: 'var(--text)',
                                        border: '1px solid var(--border)',
                                        padding: '8px 12px',
                                        borderRadius: 4
                                    },
                                    value: regCaptchaInput,
                                    onChange: (e)=>setRegCaptchaInput(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/Modals.js",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-primary",
                            style: {
                                width: '100%'
                            },
                            onClick: handleRegister,
                            children: t('auth.register')
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Modals.js",
                    lineNumber: 113,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Modals.js",
                lineNumber: 112,
                columnNumber: 9
            }, this),
            modal === 'report' && currentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal active",
                onClick: close,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "close",
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "close",
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/Modals.js",
                                lineNumber: 135,
                                columnNumber: 55
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: 16
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "shieldAlert",
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/Modals.js",
                                    lineNumber: 136,
                                    columnNumber: 46
                                }, this),
                                " ",
                                t('post.reportTitle')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 14,
                                color: '#64748b',
                                marginBottom: 12
                            },
                            children: t('post.reportReason')
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            style: {
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid var(--border)',
                                borderRadius: 4,
                                marginBottom: 16,
                                background: 'var(--bg)',
                                color: 'var(--text)'
                            },
                            value: reportReason,
                            onChange: (e)=>setReportReason(e.target.value),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "spam",
                                    children: t('report.spam')
                                }, void 0, false, {
                                    fileName: "[project]/components/Modals.js",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "abuse",
                                    children: t('report.abuse')
                                }, void 0, false, {
                                    fileName: "[project]/components/Modals.js",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "illegal",
                                    children: t('report.illegal')
                                }, void 0, false, {
                                    fileName: "[project]/components/Modals.js",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "nsfw",
                                    children: t('report.nsfw')
                                }, void 0, false, {
                                    fileName: "[project]/components/Modals.js",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "other",
                                    children: t('report.other')
                                }, void 0, false, {
                                    fileName: "[project]/components/Modals.js",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-primary",
                            style: {
                                width: '100%'
                            },
                            onClick: handleReport,
                            children: t('post.submitReport')
                        }, void 0, false, {
                            fileName: "[project]/components/Modals.js",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Modals.js",
                    lineNumber: 134,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Modals.js",
                lineNumber: 133,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Modals.js",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(Modals, "5YQXdBFg/a+1BPyD6bzEv3ot29w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Modals;
var _c;
__turbopack_context__.k.register(_c, "Modals");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 导航栏：论坛名、自定义页面链接、登录/注册、私信、用户菜单、主题切换
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/ChatManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Navbar({ onOpenModal }) {
    _s();
    const { currentUser, forumName, theme, toggleTheme, navigate, openCustomPage, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { toast, confirmAction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customPages, setCustomPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getCustomPages().then(setCustomPages).catch({
                "Navbar.useEffect": ()=>{}
            }["Navbar.useEffect"]);
        }
    }["Navbar.useEffect"], []);
    // 点击菜单外部关闭下拉（检查目标是否在菜单/头像内，避免 React 合成事件与原生监听冲突）
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const closeMenu = {
                "Navbar.useEffect.closeMenu": (e)=>{
                    const menu = document.getElementById('userDropdown');
                    const avatarEl = document.getElementById('userDropdown')?.querySelector('.avatar');
                    if (menu && menu.contains(e.target)) return;
                    if (avatarEl && avatarEl.contains(e.target)) return;
                    setMenuOpen(false);
                }
            }["Navbar.useEffect.closeMenu"];
            document.addEventListener('click', closeMenu);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener('click', closeMenu)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const avatarSrc = currentUser?.avatar_url || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(currentUser?.username || 'U') + '&background=6366f1&color=fff';
    const goPage = (page)=>{
        if (page === 'admin' && currentUser?.role !== 'admin') {
            toast('无权限访问', 'warning');
            return;
        }
        setMenuOpen(false);
        navigate(page);
    };
    const openMessages = (e)=>{
        e.preventDefault();
        setMenuOpen(false);
        // 消息页展示通知列表，私信使用导航栏按钮。
        navigate('messages');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        id: "navbar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "forum-name",
                        onClick: ()=>navigate('feed'),
                        style: {
                            cursor: 'pointer'
                        },
                        children: forumName
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        id: "customNavLinks",
                        style: {
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            marginLeft: 16
                        },
                        children: customPages.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "custom-page-nav-link",
                                "data-custom": p.name,
                                onClick: (e)=>{
                                    e.preventDefault();
                                    openCustomPage(p.name);
                                },
                                style: {
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: 14,
                                    padding: '4px 10px',
                                    borderRadius: 4,
                                    transition: 'color 0.15s'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.color = 'var(--text)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                },
                                children: p.title
                            }, p.id, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DMButton"], {}, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "userMenu",
                        children: !currentUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "authButtons",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-ghost",
                                    onClick: ()=>onOpenModal('login'),
                                    children: t('nav.login')
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-primary",
                                    onClick: ()=>onOpenModal('register'),
                                    children: t('nav.register')
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "userDropdown",
                            style: {
                                display: 'block'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "avatar",
                                    src: avatarSrc,
                                    alt: "avatar",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        setMenuOpen(!menuOpen);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "dropdown-menu show",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            onClick: openMessages,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "message"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.js",
                                                    lineNumber: 98,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                t('nav.messages')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 97,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                goPage('settings');
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "settings"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.js",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                t('nav.settings')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this),
                                        currentUser.role === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                goPage('admin');
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "shieldAlert"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.js",
                                                    lineNumber: 105,
                                                    columnNumber: 23
                                                }, this),
                                                " ",
                                                t('nav.admin')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 104,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                toggleTheme();
                                                setMenuOpen(false);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: theme === 'dark' ? 'sun' : 'moon'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.js",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                theme === 'dark' ? t('nav.lightMode') : t('nav.darkMode')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 119,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            onClick: async (e)=>{
                                                e.preventDefault();
                                                if (await confirmAction(t('nav.logoutConfirm'))) {
                                                    setMenuOpen(false);
                                                    logout();
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "logout"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.js",
                                                    lineNumber: 130,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                t('nav.logout')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.js",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(Navbar, "2SoU3qbkNljEI/+Kx0dkFC5R2mA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/NewPost.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 发帖页
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CaptchaImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CaptchaImage.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function NewPost() {
    _s();
    const { currentUser, navigate, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // 上传后的 URL 列表
    const [previews, setPreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // 本地预览 dataURL
    const [captcha, setCaptcha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [captchaInput, setCaptchaInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewPost.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getCaptcha().then({
                "NewPost.useEffect": (c)=>setCaptcha(c)
            }["NewPost.useEffect"]).catch({
                "NewPost.useEffect": ()=>{}
            }["NewPost.useEffect"]);
        }
    }["NewPost.useEffect"], []);
    const handleFiles = async (files)=>{
        setUploading(true);
        try {
            const newPreviews = [];
            for (const file of files){
                if (!file.type.startsWith('image/')) continue;
                if (file.size > 5 * 1024 * 1024) {
                    toast('图片 ' + file.name + ' 超过 5MB，请压缩后上传', 'warning');
                    continue;
                }
                const dataUrl = await new Promise((resolve)=>{
                    const reader = new FileReader();
                    reader.onload = (e)=>resolve(e.target.result);
                    reader.readAsDataURL(file);
                });
                newPreviews.push(dataUrl);
                const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadImage"])(file);
                setImages((prev)=>[
                        ...prev,
                        url
                    ]);
            }
            setPreviews((prev)=>[
                    ...prev,
                    ...newPreviews
                ]);
        } catch (err) {
            toast('上传失败：' + err.message, 'error');
        } finally{
            setUploading(false);
        }
    };
    // 拖拽上传
    const [dragOver, setDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropZoneStyle = {
        border: '2px dashed ' + (dragOver ? 'var(--primary)' : 'var(--border)'),
        borderRadius: 8,
        padding: 24,
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s',
        margin: '8px 0 12px',
        background: dragOver ? 'var(--primary-bg)' : 'var(--bg)'
    };
    const handleSubmit = async ()=>{
        if (!currentUser || !currentUser.id) {
            toast('请先登录', 'error');
            navigate('feed');
            return;
        }
        if (!content.trim()) {
            toast('请填写内容', 'error');
            return;
        }
        if (!captcha || !captchaInput.trim()) {
            toast('请填写验证码', 'error');
            return;
        }
        try {
            // 答案由服务端 HMAC 校验
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].createPost(title.trim() || '无标题', content.trim(), images, {
                id: captcha.id,
                answer: captchaInput.trim(),
                sig: captcha.sig
            });
            toast('发布成功', 'success');
            navigate('feed');
            refresh();
        } catch (err) {
            toast('发布失败：' + err.message, 'error');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-slide active",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-header",
                style: {
                    maxWidth: 600,
                    margin: '0 auto',
                    width: '100%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "plus",
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/NewPost.js",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this),
                        " ",
                        t('newPost.title')
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/NewPost.js",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/NewPost.js",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 600,
                    margin: '0 auto',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: t('newPost.title'),
                        style: {
                            width: '100%',
                            padding: '10px 14px',
                            border: '1.5px solid var(--border)',
                            borderRadius: 6,
                            fontSize: 15,
                            fontWeight: 600,
                            marginBottom: 12,
                            fontFamily: 'inherit',
                            background: 'var(--bg)',
                            color: 'var(--text)'
                        },
                        value: title,
                        onChange: (e)=>setTitle(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/NewPost.js",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        rows: 6,
                        placeholder: t('newPost.content'),
                        style: {
                            width: '100%',
                            padding: 12,
                            border: '1.5px solid var(--border)',
                            borderRadius: 6,
                            fontSize: 15,
                            fontFamily: 'inherit',
                            resize: 'vertical',
                            background: 'var(--bg)',
                            color: 'var(--text)'
                        },
                        value: content,
                        onChange: (e)=>setContent(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/NewPost.js",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "imagePreview",
                        style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 8,
                            margin: '8px 0'
                        },
                        children: previews.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: src,
                                alt: "",
                                style: {
                                    width: 80,
                                    height: 80,
                                    objectFit: 'cover',
                                    borderRadius: 4,
                                    border: '1px solid var(--border)'
                                }
                            }, i, false, {
                                fileName: "[project]/components/NewPost.js",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/NewPost.js",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "dropZone",
                        style: dropZoneStyle,
                        onClick: ()=>fileInputRef.current?.click(),
                        onDragOver: (e)=>{
                            e.preventDefault();
                            setDragOver(true);
                        },
                        onDragLeave: (e)=>{
                            e.preventDefault();
                            setDragOver(false);
                        },
                        onDrop: (e)=>{
                            e.preventDefault();
                            setDragOver(false);
                            if (e.dataTransfer.files) handleFiles(Array.from(e.dataTransfer.files));
                        },
                        children: [
                            !uploading && !dragOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "image",
                                size: 32,
                                style: {
                                    display: 'block',
                                    margin: '0 auto 8px',
                                    color: 'var(--text-secondary)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/NewPost.js",
                                lineNumber: 115,
                                columnNumber: 39
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 13,
                                    color: 'var(--text-secondary)'
                                },
                                children: uploading ? t('newPost.uploading') : dragOver ? t('newPost.drop') : t('newPost.dropHint')
                            }, void 0, false, {
                                fileName: "[project]/components/NewPost.js",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NewPost.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        id: "fileInput",
                        accept: "image/*",
                        multiple: true,
                        ref: fileInputRef,
                        style: {
                            display: 'none'
                        },
                        onChange: (e)=>{
                            if (e.target.files) handleFiles(Array.from(e.target.files));
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/NewPost.js",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "captcha-row",
                        style: {
                            margin: '12px 0',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10
                        },
                        children: [
                            captcha ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CaptchaImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                captcha: captcha,
                                onRefresh: ()=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getCaptcha().then((c)=>setCaptcha(c)).catch(()=>{});
                                    setCaptchaInput('');
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/NewPost.js",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'var(--text-light)'
                                },
                                children: t('newPost.captchaLoading')
                            }, void 0, false, {
                                fileName: "[project]/components/NewPost.js",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: t('newPost.answer'),
                                style: {
                                    width: 80,
                                    padding: '8px 12px',
                                    border: '1px solid var(--border)',
                                    borderRadius: 4,
                                    background: 'var(--bg)',
                                    color: 'var(--text)',
                                    outline: 'none'
                                },
                                value: captchaInput,
                                onChange: (e)=>setCaptchaInput(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/NewPost.js",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NewPost.js",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary",
                        style: {
                            padding: '10px 32px',
                            fontSize: 15
                        },
                        onClick: handleSubmit,
                        children: uploading ? t('newPost.uploading') : t('newPost.publish')
                    }, void 0, false, {
                        fileName: "[project]/components/NewPost.js",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/NewPost.js",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/NewPost.js",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(NewPost, "dDw4LiEEvMI8iaSLkonmnQP4yx0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = NewPost;
var _c;
__turbopack_context__.k.register(_c, "NewPost");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PostDetail.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 帖子详情页
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ReplyList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ReplyList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sidebar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImageViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ImageViewer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/markdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function avatar(username) {
    return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username || '匿名用户') + '&background=6366f1&color=fff&size=64';
}
function PostDetail({ postId, initialPost = null }) {
    _s();
    const { currentUser, navigate, openUser, refreshKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { toast, confirmAction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [post, setPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPost);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewerSrc, setViewerSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editTitle, setEditTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editContent, setEditContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editImages, setEditImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editUploading, setEditUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const editImageInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 评论抽屉：帖子加载完成后自动展开（动画完整播放）
    const [repliesOpen, setRepliesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostDetail.useEffect": ()=>{
            if (post && !repliesOpen) {
                // 延迟到帖子内容渲染后，让抽屉动画平滑播放
                const t = setTimeout({
                    "PostDetail.useEffect.t": ()=>setRepliesOpen(true)
                }["PostDetail.useEffect.t"], 60);
                return ({
                    "PostDetail.useEffect": ()=>clearTimeout(t)
                })["PostDetail.useEffect"];
            }
        }
    }["PostDetail.useEffect"], [
        post
    ]);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PostDetail.useCallback[load]": async ()=>{
            setError(null);
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getPost(postId);
                setPost(data);
            } catch (err) {
                setError(err.message);
            }
        }
    }["PostDetail.useCallback[load]"], [
        postId,
        refreshKey
    ]);
    const initialRefreshKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(refreshKey);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostDetail.useEffect": ()=>{
            if (initialPost?.id === postId && refreshKey === initialRefreshKey.current) return;
            load();
        }
    }["PostDetail.useEffect"], [
        initialPost?.id,
        load,
        postId,
        refreshKey
    ]);
    const renderedContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PostDetail.useMemo[renderedContent]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderMarkdown"])(post?.content)
    }["PostDetail.useMemo[renderedContent]"], [
        post?.content
    ]);
    const renderedSignature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PostDetail.useMemo[renderedSignature]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderMarkdown"])(post?.signature)
    }["PostDetail.useMemo[renderedSignature]"], [
        post?.signature
    ]);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "pagePost",
            className: "page-slide active",
            style: {
                padding: '40px 0',
                textAlign: 'center',
                color: '#ef4444'
            },
            children: [
                "加载失败：",
                error
            ]
        }, void 0, true, {
            fileName: "[project]/components/PostDetail.js",
            lineNumber: 61,
            columnNumber: 7
        }, this);
    }
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "pagePost",
            className: "page-slide active",
            style: {
                textAlign: 'center',
                color: '#94a3b8'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "spinner-sm"
                }, void 0, false, {
                    fileName: "[project]/components/PostDetail.js",
                    lineNumber: 67,
                    columnNumber: 111
                }, this),
                "加载中..."
            ]
        }, void 0, true, {
            fileName: "[project]/components/PostDetail.js",
            lineNumber: 67,
            columnNumber: 12
        }, this);
    }
    const time = post.created_at ? new Date(post.created_at).toLocaleString('zh-CN') : '';
    // 作者本人 或 管理员 可删除/编辑
    const canDelete = currentUser && (currentUser.id === post.user_id || currentUser.role === 'admin');
    const canEdit = currentUser && currentUser.id === post.user_id;
    const handleDelete = async ()=>{
        if (!await confirmAction('确定要删除这条帖子吗？')) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].deletePost(postId);
            toast('删除成功', 'success');
            navigate('feed');
        } catch (err) {
            toast('删除失败：' + err.message, 'error');
        }
    };
    const handleTogglePin = async ()=>{
        if (!await confirmAction('确定要' + (post.is_pinned ? '取消' : '') + '置顶吗？', {
            danger: false
        })) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].togglePinPost(postId);
            load();
        } catch (err) {
            toast('操作失败：' + err.message, 'error');
        }
    };
    const handleEdit = ()=>{
        setEditTitle(post.title || '');
        setEditContent(post.content || '');
        setEditImages(post.images || []);
        setEditing(true);
    };
    const handleSaveEdit = async ()=>{
        if (!editContent.trim()) {
            toast('请填写内容', 'warning');
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].updatePost(postId, editTitle.trim() || '无标题', editContent.trim(), editImages);
            setEditing(false);
            load();
        } catch (err) {
            toast('编辑失败：' + err.message, 'error');
        }
    };
    // 编辑时上传新图片
    const handleEditUpload = async (file)=>{
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            toast('请选择图片文件', 'warning');
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            toast('图片不能超过 5MB', 'warning');
            return;
        }
        setEditUploading(true);
        try {
            const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadImage"])(file);
            setEditImages((prev)=>[
                    ...prev,
                    url
                ]);
        } catch (err) {
            toast('上传失败：' + err.message, 'error');
        } finally{
            setEditUploading(false);
        }
    };
    // 编辑时删除图片
    const handleEditRemoveImage = (url)=>{
        setEditImages((prev)=>prev.filter((u)=>u !== url));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "pagePost",
        className: "page-slide active",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-header post-page-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "back-btn",
                        onClick: ()=>navigate('feed'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "back",
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/PostDetail.js",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            " 返回"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PostDetail.js",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: post.title || '帖子详情'
                    }, void 0, false, {
                        fileName: "[project]/components/PostDetail.js",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PostDetail.js",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "post-page-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: "postSidebar"
                    }, void 0, false, {
                        fileName: "[project]/components/PostDetail.js",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "postDetailContent",
                        className: "post-page-main",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "post-detail-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "post-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: post.avatar_url || avatar(post.username),
                                                className: "post-avatar",
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/components/PostDetail.js",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "post-username",
                                                style: {
                                                    cursor: 'pointer',
                                                    color: 'var(--primary)'
                                                },
                                                onClick: ()=>openUser(post.username),
                                                children: post.username || '匿名用户'
                                            }, void 0, false, {
                                                fileName: "[project]/components/PostDetail.js",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "post-time",
                                                children: time
                                            }, void 0, false, {
                                                fileName: "[project]/components/PostDetail.js",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, this),
                                            post.edited_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "post-edited-state",
                                                style: {
                                                    fontSize: 12,
                                                    color: 'var(--text-light)',
                                                    marginLeft: 8
                                                },
                                                children: [
                                                    "（已编辑 ",
                                                    new Date(post.edited_at).toLocaleString('zh-CN'),
                                                    "）"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PostDetail.js",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this),
                                            post.is_pinned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "post-pin-state",
                                                style: {
                                                    fontSize: 12,
                                                    color: 'var(--primary)',
                                                    marginLeft: 8,
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: 3
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "pin",
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PostDetail.js",
                                                        lineNumber: 163,
                                                        columnNumber: 169
                                                    }, this),
                                                    " 置顶"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PostDetail.js",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "post-detail-controls",
                                                style: {
                                                    display: 'flex',
                                                    gap: 4,
                                                    marginLeft: 'auto'
                                                },
                                                children: [
                                                    currentUser && currentUser.role === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn-sm btn-secondary",
                                                        style: {
                                                            padding: '4px 10px'
                                                        },
                                                        onClick: handleTogglePin,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                name: "pin",
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PostDetail.js",
                                                                lineNumber: 168,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            post.is_pinned ? '取消置顶' : '置顶'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/PostDetail.js",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    }, this),
                                                    canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn-sm btn-secondary",
                                                        style: {
                                                            padding: '4px 10px'
                                                        },
                                                        onClick: handleEdit,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                name: "edit",
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PostDetail.js",
                                                                lineNumber: 173,
                                                                columnNumber: 21
                                                            }, this),
                                                            " 编辑"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/PostDetail.js",
                                                        lineNumber: 172,
                                                        columnNumber: 19
                                                    }, this),
                                                    canDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn-sm btn-danger",
                                                        style: {
                                                            padding: '4px 10px'
                                                        },
                                                        onClick: handleDelete,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                name: "trash",
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PostDetail.js",
                                                                lineNumber: 178,
                                                                columnNumber: 21
                                                            }, this),
                                                            " 删除"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/PostDetail.js",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PostDetail.js",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PostDetail.js",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "post-content",
                                        dangerouslySetInnerHTML: {
                                            __html: renderedContent
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostDetail.js",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this),
                                    post.images && post.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "post-images",
                                        children: post.images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: img,
                                                className: "post-image",
                                                alt: "",
                                                style: {
                                                    cursor: 'pointer'
                                                },
                                                onClick: ()=>setViewerSrc(img)
                                            }, i, false, {
                                                fileName: "[project]/components/PostDetail.js",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostDetail.js",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this),
                                    post.signature && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "post-detail-signature",
                                        style: {
                                            marginTop: 16,
                                            paddingTop: 12,
                                            borderTop: '1px solid var(--border-light)',
                                            fontSize: 12,
                                            color: 'var(--text-secondary)'
                                        },
                                        dangerouslySetInnerHTML: {
                                            __html: renderedSignature
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostDetail.js",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PostDetail.js",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: 700,
                                    margin: '0 auto',
                                    width: '100%',
                                    marginTop: 16
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: 'replies-drawer' + (repliesOpen ? ' open' : ''),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "replies-drawer-inner",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ReplyList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            postId: postId,
                                            onRefresh: load
                                        }, void 0, false, {
                                            fileName: "[project]/components/PostDetail.js",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostDetail.js",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/PostDetail.js",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/PostDetail.js",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PostDetail.js",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PostDetail.js",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal active",
                style: {
                    display: 'flex'
                },
                onClick: (e)=>{
                    if (e.target === e.currentTarget) setEditing(false);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content",
                    style: {
                        maxWidth: 600,
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "close",
                            style: {
                                position: 'absolute',
                                top: 12,
                                right: 16,
                                cursor: 'pointer',
                                color: 'var(--text-light)'
                            },
                            onClick: ()=>setEditing(false),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "close",
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/PostDetail.js",
                                lineNumber: 210,
                                columnNumber: 171
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PostDetail.js",
                            lineNumber: 210,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: 16
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "edit",
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/PostDetail.js",
                                    lineNumber: 211,
                                    columnNumber: 46
                                }, this),
                                " 编辑帖子"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PostDetail.js",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "标题",
                            value: editTitle,
                            onChange: (e)=>setEditTitle(e.target.value),
                            style: {
                                width: '100%',
                                padding: '10px 14px',
                                border: '1px solid var(--border)',
                                borderRadius: 6,
                                fontSize: 15,
                                fontWeight: 600,
                                marginBottom: 12,
                                background: 'var(--bg)',
                                color: 'var(--text)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/PostDetail.js",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            rows: 6,
                            placeholder: "说点什么...",
                            value: editContent,
                            onChange: (e)=>setEditContent(e.target.value),
                            style: {
                                width: '100%',
                                padding: 12,
                                border: '1px solid var(--border)',
                                borderRadius: 6,
                                fontSize: 15,
                                fontFamily: 'inherit',
                                resize: 'vertical',
                                background: 'var(--bg)',
                                color: 'var(--text)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/PostDetail.js",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this),
                        editImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 8,
                                marginTop: 10
                            },
                            children: editImages.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: img,
                                            alt: "",
                                            style: {
                                                width: 72,
                                                height: 72,
                                                objectFit: 'cover',
                                                borderRadius: 6,
                                                border: '1px solid var(--border)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/PostDetail.js",
                                            lineNumber: 231,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            title: "删除图片",
                                            onClick: ()=>handleEditRemoveImage(img),
                                            style: {
                                                position: 'absolute',
                                                top: -6,
                                                right: -6,
                                                width: 20,
                                                height: 20,
                                                borderRadius: '50%',
                                                background: '#ef4444',
                                                color: '#fff',
                                                border: 'none',
                                                cursor: 'pointer',
                                                lineHeight: 1,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "close",
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/components/PostDetail.js",
                                                lineNumber: 237,
                                                columnNumber: 22
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PostDetail.js",
                                            lineNumber: 232,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, img + i, true, {
                                    fileName: "[project]/components/PostDetail.js",
                                    lineNumber: 230,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/PostDetail.js",
                            lineNumber: 228,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 8,
                                marginTop: 12
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "btn-secondary",
                                    style: {
                                        padding: '8px 16px',
                                        border: '1px solid var(--border)',
                                        borderRadius: 4,
                                        background: 'var(--surface)',
                                        cursor: 'pointer',
                                        color: 'var(--text)'
                                    },
                                    onClick: ()=>editImageInputRef.current?.click(),
                                    children: editUploading ? '上传中...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "camera",
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/components/PostDetail.js",
                                                lineNumber: 244,
                                                columnNumber: 47
                                            }, this),
                                            " 上传图片"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PostDetail.js",
                                        lineNumber: 244,
                                        columnNumber: 45
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/PostDetail.js",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    ref: editImageInputRef,
                                    accept: "image/*",
                                    multiple: true,
                                    style: {
                                        display: 'none'
                                    },
                                    onChange: (e)=>{
                                        const files = e.target.files;
                                        if (files && files.length > 0) {
                                            [
                                                ...files
                                            ].forEach((f)=>handleEditUpload(f));
                                            e.target.value = '';
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/PostDetail.js",
                                    lineNumber: 246,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PostDetail.js",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-primary",
                            style: {
                                padding: '10px 32px',
                                fontSize: 15,
                                marginTop: 12,
                                width: '100%'
                            },
                            onClick: handleSaveEdit,
                            children: "保存"
                        }, void 0, false, {
                            fileName: "[project]/components/PostDetail.js",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PostDetail.js",
                    lineNumber: 209,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PostDetail.js",
                lineNumber: 208,
                columnNumber: 9
            }, this),
            viewerSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImageViewer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: viewerSrc,
                onClose: ()=>setViewerSrc(null)
            }, void 0, false, {
                fileName: "[project]/components/PostDetail.js",
                lineNumber: 254,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PostDetail.js",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s(PostDetail, "fV5kykS7bZ4siEFK5gtKakqxuOA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = PostDetail;
var _c;
__turbopack_context__.k.register(_c, "PostDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RecoveryCodes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecoveryCodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 恢复码管理：查看 + 重新生成
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function RecoveryCodes() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { toast, confirmAction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // null | {codes, isNew}
    const [modalClosing, setModalClosing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const closeModal = ()=>{
        setModalClosing(true);
        setTimeout(()=>{
            setModal(null);
            setModalClosing(false);
        }, 340);
    };
    const loadCount = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getRecoveryCodeCount().then((d)=>setCount(d.count || 0)).catch(()=>{});
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(loadCount, []);
    const regenerate = async ()=>{
        if (!await confirmAction(t('recovery.confirmRegenerate'))) return;
        try {
            const d = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].generateRecoveryCodes();
            setModal({
                codes: d.codes || [],
                isNew: true
            });
            loadCount();
        } catch (err) {
            toast(t('recovery.genFailed', {
                msg: err.message
            }), 'error');
        }
    };
    const view = async ()=>{
        try {
            // 生成后直接展示；若已有恢复码则重新生成展示（与原版一致：查看即生成新码）
            const d = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].generateRecoveryCodes();
            setModal({
                codes: d.codes || [],
                isNew: false
            });
            loadCount();
        } catch (err) {
            toast(t('recovery.fetchFailed', {
                msg: err.message
            }), 'error');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginTop: 16,
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontSize: 16,
                    marginBottom: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "key",
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/components/RecoveryCodes.js",
                        lineNumber: 54,
                        columnNumber: 53
                    }, this),
                    " ",
                    t('recovery.title')
                ]
            }, void 0, true, {
                fileName: "[project]/components/RecoveryCodes.js",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 13,
                    color: 'var(--text-secondary)',
                    marginBottom: 12
                },
                children: t('recovery.desc')
            }, void 0, false, {
                fileName: "[project]/components/RecoveryCodes.js",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 8,
                    flexWrap: 'wrap'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-secondary",
                        style: {
                            padding: '8px 16px',
                            border: '1px solid var(--border)',
                            borderRadius: 4,
                            background: 'var(--surface)',
                            cursor: 'pointer',
                            color: 'var(--text)'
                        },
                        onClick: view,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "list",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/RecoveryCodes.js",
                                lineNumber: 57,
                                columnNumber: 213
                            }, this),
                            " ",
                            t('recovery.view')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RecoveryCodes.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-secondary",
                        style: {
                            padding: '8px 16px',
                            border: '1px solid var(--border)',
                            borderRadius: 4,
                            background: 'var(--surface)',
                            cursor: 'pointer',
                            color: 'var(--text)'
                        },
                        onClick: regenerate,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "refresh",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/RecoveryCodes.js",
                                lineNumber: 58,
                                columnNumber: 219
                            }, this),
                            " ",
                            t('recovery.regenerate')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RecoveryCodes.js",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RecoveryCodes.js",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "recoveryCodesStatus",
                style: {
                    fontSize: 13,
                    color: 'var(--text-light)',
                    marginTop: 8
                },
                children: t('recovery.remaining', {
                    count
                })
            }, void 0, false, {
                fileName: "[project]/components/RecoveryCodes.js",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            modal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: 'modal active' + (modalClosing ? ' closing' : ''),
                style: {
                    display: 'flex'
                },
                onClick: (e)=>{
                    if (e.target === e.currentTarget) closeModal();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content",
                    style: {
                        maxWidth: 480,
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "close",
                            style: {
                                position: 'absolute',
                                top: 12,
                                right: 16,
                                cursor: 'pointer',
                                color: 'var(--text-light)'
                            },
                            onClick: closeModal,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "close",
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/RecoveryCodes.js",
                                lineNumber: 65,
                                columnNumber: 158
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/RecoveryCodes.js",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: 12
                            },
                            children: modal.isNew ? t('recovery.newCodes') : t('recovery.title')
                        }, void 0, false, {
                            fileName: "[project]/components/RecoveryCodes.js",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 13,
                                color: '#ef4444',
                                marginBottom: 12,
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "warning",
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/components/RecoveryCodes.js",
                                    lineNumber: 67,
                                    columnNumber: 128
                                }, this),
                                " ",
                                t('recovery.saveWarning')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RecoveryCodes.js",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: 8
                            },
                            children: modal.codes.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    style: {
                                        background: 'var(--bg)',
                                        padding: '8px 12px',
                                        borderRadius: 6,
                                        fontSize: 13,
                                        textAlign: 'center',
                                        userSelect: 'all'
                                    },
                                    children: c
                                }, i, false, {
                                    fileName: "[project]/components/RecoveryCodes.js",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/RecoveryCodes.js",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-primary",
                            style: {
                                width: '100%',
                                padding: 10,
                                marginTop: 16
                            },
                            onClick: closeModal,
                            children: t('recovery.saved')
                        }, void 0, false, {
                            fileName: "[project]/components/RecoveryCodes.js",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RecoveryCodes.js",
                    lineNumber: 64,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/RecoveryCodes.js",
                lineNumber: 63,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RecoveryCodes.js",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(RecoveryCodes, "q16D6zC5YdvTUk0E8yUDp4uKXAM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = RecoveryCodes;
var _c;
__turbopack_context__.k.register(_c, "RecoveryCodes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ReplyList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReplyList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 回复列表 + 发表回复表单
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/markdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CaptchaImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CaptchaImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function avatar(username) {
    return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username || '匿名用户') + '&background=6366f1&color=fff&size=64';
}
function ReplyList({ postId, onRefresh }) {
    _s();
    const { currentUser, openUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { toast, confirmAction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [replies, setReplies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [captcha, setCaptcha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [captchaInput, setCaptchaInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // 正在回复的用户（hover 回复按钮 → 回填到回复框）
    const [replyTo, setReplyTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const replyAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const replyInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 点击"回复"：记录目标回复 ID，滚动到回复框并聚焦
    const startReply = (replyId)=>{
        setReplyTo(replyId);
        setTimeout(()=>{
            replyAreaRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            replyInputRef.current?.focus();
        }, 120);
    };
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReplyList.useCallback[load]": async ()=>{
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getReplies(postId);
                setReplies(data || []);
            } catch  {
                setReplies([]);
            }
        }
    }["ReplyList.useCallback[load]"], [
        postId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReplyList.useEffect": ()=>{
            load();
        }
    }["ReplyList.useEffect"], [
        load
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReplyList.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getCaptcha().then({
                "ReplyList.useEffect": (c)=>setCaptcha(c)
            }["ReplyList.useEffect"]).catch({
                "ReplyList.useEffect": ()=>{}
            }["ReplyList.useEffect"]);
        }
    }["ReplyList.useEffect"], [
        postId
    ]);
    const handleSubmit = async ()=>{
        if (!currentUser) {
            toast('请先登录', 'warning');
            return;
        }
        if (!content.trim()) {
            toast('请填写回复内容', 'warning');
            return;
        }
        if (!captcha || !captchaInput.trim()) {
            toast('请填写验证码', 'warning');
            return;
        }
        try {
            // 答案由服务端 HMAC 校验
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].createReply(postId, content.trim(), {
                id: captcha.id,
                answer: captchaInput.trim(),
                sig: captcha.sig
            }, replyTo);
            setContent('');
            setCaptchaInput('');
            setReplyTo(null);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getCaptcha().then((c)=>setCaptcha(c)).catch(()=>{});
            load();
            onRefresh();
        } catch (err) {
            toast('回复失败：' + err.message, 'error');
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getCaptcha().then((c)=>setCaptcha(c)).catch(()=>{});
            setCaptchaInput('');
        }
    };
    const handleDelete = async (replyId)=>{
        if (!await confirmAction('确定要删除这条回复吗？')) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].deleteReply(replyId);
            load();
        } catch (err) {
            toast('删除失败：' + err.message, 'error');
        }
    };
    // 计算每条回复的嵌套深度（按 reply_to_id 精确追踪回复链）
    const replyDepths = (()=>{
        const map = {};
        const getDepth = (r)=>{
            if (map[r.id] !== undefined) return map[r.id];
            if (!r.reply_to_id) {
                map[r.id] = 0;
                return 0;
            }
            const parent = replies.find((x)=>x.id === r.reply_to_id);
            const d = parent ? getDepth(parent) + 1 : 0;
            map[r.id] = d;
            return d;
        };
        replies.forEach((r)=>getDepth(r));
        return map;
    })();
    // 正在回复的目标回复对象（用于显示 @用户名）
    const replyToObj = replyTo ? replies.find((x)=>x.id === replyTo) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "post-reply-count",
                style: {
                    marginTop: 20,
                    fontSize: 14,
                    color: '#64748b'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "message",
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/components/ReplyList.js",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    " ",
                    replies.length,
                    " 条回复"
                ]
            }, void 0, true, {
                fileName: "[project]/components/ReplyList.js",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 12
                },
                children: replies.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        color: '#94a3b8',
                        padding: '20px 0',
                        textAlign: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "message",
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/ReplyList.js",
                            lineNumber: 103,
                            columnNumber: 85
                        }, this),
                        " 还没有回复，快来发表第一条回复吧"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ReplyList.js",
                    lineNumber: 103,
                    columnNumber: 11
                }, this) : replies.map((r)=>{
                    const rTime = r.created_at ? new Date(r.created_at).toLocaleString('zh-CN') : '';
                    const nestDepth = Math.min(replyDepths[r.id] || 0, 5);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "reply-item",
                        "data-username": r.username,
                        "data-reply-id": r.id,
                        style: {
                            marginLeft: nestDepth ? nestDepth * 18 : 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "reply-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: r.avatar_url || avatar(r.username),
                                        className: "reply-avatar",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/components/ReplyList.js",
                                        lineNumber: 111,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "reply-username",
                                        style: {
                                            cursor: 'pointer',
                                            color: 'var(--primary)'
                                        },
                                        onClick: ()=>openUser(r.username),
                                        children: r.username || '匿名用户'
                                    }, void 0, false, {
                                        fileName: "[project]/components/ReplyList.js",
                                        lineNumber: 112,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "reply-time",
                                        children: rTime
                                    }, void 0, false, {
                                        fileName: "[project]/components/ReplyList.js",
                                        lineNumber: 119,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "reply-btn",
                                        onClick: ()=>startReply(r.id),
                                        title: "回复",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "reply",
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/components/ReplyList.js",
                                            lineNumber: 121,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ReplyList.js",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this),
                                    currentUser && (currentUser.id === r.user_id || currentUser.role === 'admin') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn-sm btn-danger reply-delete-btn",
                                        onClick: ()=>handleDelete(r.id),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "trash",
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/components/ReplyList.js",
                                                lineNumber: 125,
                                                columnNumber: 23
                                            }, this),
                                            " 删除"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ReplyList.js",
                                        lineNumber: 124,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ReplyList.js",
                                lineNumber: 110,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "reply-content",
                                dangerouslySetInnerHTML: {
                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$markdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderMarkdown"])(r.content)
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ReplyList.js",
                                lineNumber: 129,
                                columnNumber: 17
                            }, this)
                        ]
                    }, r.id, true, {
                        fileName: "[project]/components/ReplyList.js",
                        lineNumber: 109,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/ReplyList.js",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "replyArea",
                ref: replyAreaRef,
                style: {
                    marginTop: 24,
                    borderTop: '1px solid var(--border)',
                    paddingTop: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontSize: 16,
                            marginBottom: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "message",
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/ReplyList.js",
                                lineNumber: 137,
                                columnNumber: 56
                            }, this),
                            " 发表回复"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ReplyList.js",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    replyTo && replyToObj && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "reply-preview-bar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "reply",
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/components/ReplyList.js",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "回复"
                            }, void 0, false, {
                                fileName: "[project]/components/ReplyList.js",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    "@",
                                    replyToObj.username
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ReplyList.js",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "reply-preview-cancel",
                                onClick: ()=>setReplyTo(null),
                                children: "取消"
                            }, void 0, false, {
                                fileName: "[project]/components/ReplyList.js",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ReplyList.js",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ref: replyInputRef,
                        rows: 3,
                        placeholder: "写下你的回复...",
                        style: {
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid var(--border)',
                            borderRadius: 4,
                            fontSize: 14,
                            fontFamily: 'inherit',
                            resize: 'vertical',
                            background: 'var(--bg)',
                            color: 'var(--text)'
                        },
                        value: content,
                        onChange: (e)=>setContent(e.target.value),
                        onKeyDown: (e)=>{
                            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleSubmit();
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ReplyList.js",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "captcha-row",
                        style: {
                            margin: '10px 0',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10
                        },
                        children: [
                            captcha ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CaptchaImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                captcha: captcha,
                                onRefresh: ()=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getCaptcha().then((c)=>setCaptcha(c)).catch(()=>{});
                                    setCaptchaInput('');
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ReplyList.js",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'var(--text-light)'
                                },
                                children: "验证码加载中..."
                            }, void 0, false, {
                                fileName: "[project]/components/ReplyList.js",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "答案",
                                style: {
                                    width: 80,
                                    padding: '8px 12px',
                                    border: '1px solid var(--border)',
                                    borderRadius: 4,
                                    background: 'var(--bg)',
                                    color: 'var(--text)',
                                    outline: 'none'
                                },
                                value: captchaInput,
                                onChange: (e)=>setCaptchaInput(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/ReplyList.js",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ReplyList.js",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary",
                        style: {
                            padding: '8px 24px'
                        },
                        onClick: handleSubmit,
                        children: "提交回复"
                    }, void 0, false, {
                        fileName: "[project]/components/ReplyList.js",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ReplyList.js",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ReplyList.js",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(ReplyList, "2NlgCI5nHSML6Baq8mzBECNW2Wk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = ReplyList;
var _c;
__turbopack_context__.k.register(_c, "ReplyList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SettingsPage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 个人设置页：侧边栏布局 + 上下滑动平滑切换
// - 三个面板纵向排列在滚动容器里，scroll-snap 每次滑动对齐一个面板
// - 点侧边栏导航 → 平滑滚动到对应面板；滚动结束 → 自动更新导航高亮
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SettingsProfile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SettingsProfile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccountSecurity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AccountSecurity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RecoveryCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RecoveryCodes.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const NAV = [
    {
        key: 'profile',
        labelKey: 'settings.profile',
        icon: 'user'
    },
    {
        key: 'security',
        labelKey: 'settings.security',
        icon: 'shieldAlert'
    },
    {
        key: 'recovery',
        labelKey: 'settings.recovery',
        icon: 'lock'
    }
];
function SettingsPage() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('profile');
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollTicking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // 滚动结束（或对齐后）更新高亮
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SettingsPage.useCallback[handleScroll]": ()=>{
            const el = scrollRef.current;
            if (!el || scrollTicking.current) return;
            scrollTicking.current = true;
            requestAnimationFrame({
                "SettingsPage.useCallback[handleScroll]": ()=>{
                    scrollTicking.current = false;
                    const idx = Math.round(el.scrollTop / el.clientHeight);
                    const key = NAV[Math.min(Math.max(idx, 0), NAV.length - 1)]?.key;
                    if (key) setTab(key);
                }
            }["SettingsPage.useCallback[handleScroll]"]);
        }
    }["SettingsPage.useCallback[handleScroll]"], []);
    // 点击导航 → 平滑滚动到对应面板
    const goTo = (key, e)=>{
        if (e) e.preventDefault();
        setTab(key);
        const el = scrollRef.current;
        if (!el) return;
        const idx = NAV.findIndex((n)=>n.key === key);
        el.scrollTo({
            top: idx * el.clientHeight,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-slide active",
        style: {
            overflow: 'hidden',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-header",
                style: {
                    width: '100%',
                    flexShrink: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "settings",
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/SettingsPage.js",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        " ",
                        t('settings.title')
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SettingsPage.js",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SettingsPage.js",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "settings-layout",
                style: {
                    width: '100%',
                    display: 'flex',
                    gap: 28,
                    alignItems: 'flex-start',
                    flex: 1,
                    minHeight: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "settings-sidebar",
                        style: {
                            width: 200,
                            flexShrink: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "settings-nav",
                            children: NAV.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: 'settings-nav-item' + (tab === n.key ? ' active' : ''),
                                    "data-settings-tab": n.key,
                                    onClick: (e)=>goTo(n.key, e),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "nav-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: n.icon,
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/SettingsPage.js",
                                                lineNumber: 64,
                                                columnNumber: 44
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/SettingsPage.js",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this),
                                        t(n.labelKey)
                                    ]
                                }, n.key, true, {
                                    fileName: "[project]/components/SettingsPage.js",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/SettingsPage.js",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SettingsPage.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "settings-content",
                        id: "settingsContent",
                        style: {
                            overflow: 'hidden',
                            padding: 0,
                            alignSelf: 'stretch',
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: scrollRef,
                            onScroll: handleScroll,
                            style: {
                                flex: 1,
                                minHeight: 0,
                                overflowY: 'auto',
                                scrollSnapType: 'y mandatory',
                                scrollBehavior: 'smooth',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        scrollSnapAlign: 'start',
                                        minHeight: '100%',
                                        padding: '20px 24px'
                                    },
                                    "data-panel": "profile",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SettingsProfile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/SettingsPage.js",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/SettingsPage.js",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        scrollSnapAlign: 'start',
                                        minHeight: '100%',
                                        padding: '20px 24px',
                                        borderTop: '1px solid var(--glass-border)'
                                    },
                                    "data-panel": "security",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AccountSecurity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/SettingsPage.js",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/SettingsPage.js",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        scrollSnapAlign: 'start',
                                        minHeight: '100%',
                                        padding: '20px 24px',
                                        borderTop: '1px solid var(--glass-border)'
                                    },
                                    "data-panel": "recovery",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RecoveryCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/SettingsPage.js",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/SettingsPage.js",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SettingsPage.js",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SettingsPage.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SettingsPage.js",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SettingsPage.js",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(SettingsPage, "OYZinRErGKybN9eikd2DubzbTjI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = SettingsPage;
var _c;
__turbopack_context__.k.register(_c, "SettingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SettingsProfile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 设置 - 个人资料（头像 + 用户名/简介/签名 + 语言）
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function SettingsProfile() {
    _s();
    const { currentUser, setCurrentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { t, i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentUser?.username || '');
    const [bio, setBio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentUser?.bio || '');
    const [signature, setSignature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentUser?.signature || '');
    const [avatarUrl, setAvatarUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentUser?.avatar_url || '');
    const [avatarStatus, setAvatarStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const avatarInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleAvatar = async (file)=>{
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            setAvatarStatus({
                ok: false,
                msg: t('settings.avatarFileRequired')
            });
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            setAvatarStatus({
                ok: false,
                msg: t('settings.avatarTooLarge')
            });
            return;
        }
        try {
            const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadImage"])(file);
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].updateAvatar(currentUser.id, url);
            setAvatarUrl(url);
            setCurrentUser({
                ...currentUser,
                avatar_url: url
            });
            setAvatarStatus({
                ok: true,
                msg: t('settings.avatarUpdated')
            });
        } catch (err) {
            setAvatarStatus({
                ok: false,
                msg: err.message
            });
        }
    };
    const handleSave = async ()=>{
        if (!currentUser) {
            toast(t('settings.pleaseLogin'), 'warning');
            return;
        }
        if (!username.trim()) {
            toast(t('settings.usernameRequired'), 'warning');
            return;
        }
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].updateProfile(currentUser.id, username.trim(), bio.trim(), signature.trim());
            if (data.error) throw new Error(data.error);
            setCurrentUser({
                ...currentUser,
                username: username.trim(),
                bio: bio.trim(),
                signature: signature.trim()
            });
            toast(t('settings.saved'), 'success');
        } catch (err) {
            toast(t('settings.saveFailed', {
                msg: err.message
            }), 'error');
        }
    };
    const avatarSrc = avatarUrl || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(currentUser?.username || 'U') + '&background=6366f1&color=fff&size=128';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    marginBottom: 24
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            display: 'inline-block'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: avatarSrc,
                                style: {
                                    width: 100,
                                    height: 100,
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: '3px solid var(--primary)'
                                },
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/components/SettingsProfile.js",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    background: 'var(--primary)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: 32,
                                    height: 32,
                                    cursor: 'pointer',
                                    fontSize: 16,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 2px 8px rgba(99,102,241,0.4)'
                                },
                                onClick: ()=>avatarInputRef.current?.click(),
                                "aria-label": t('settings.changeAvatar'),
                                title: t('settings.changeAvatar'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "camera",
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/SettingsProfile.js",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/SettingsProfile.js",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SettingsProfile.js",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        ref: avatarInputRef,
                        accept: "image/*",
                        style: {
                            display: 'none'
                        },
                        onChange: (e)=>{
                            if (e.target.files?.[0]) handleAvatar(e.target.files[0]);
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/SettingsProfile.js",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            margin: '12px 0 4px'
                        },
                        children: currentUser?.username
                    }, void 0, false, {
                        fileName: "[project]/components/SettingsProfile.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'var(--text-secondary)',
                            fontSize: 14
                        },
                        children: bio || t('user.bioEmpty')
                    }, void 0, false, {
                        fileName: "[project]/components/SettingsProfile.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    avatarStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 13,
                            marginTop: 8,
                            color: avatarStatus.ok ? '#22c55e' : '#ef4444',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 5
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: avatarStatus.ok ? 'success' : 'error',
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/SettingsProfile.js",
                                lineNumber: 73,
                                columnNumber: 176
                            }, this),
                            " ",
                            avatarStatus.msg
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SettingsProfile.js",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SettingsProfile.js",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 8,
                    padding: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    fontWeight: 600,
                                    fontSize: 14,
                                    display: 'block',
                                    marginBottom: 4
                                },
                                children: t('settings.username')
                            }, void 0, false, {
                                fileName: "[project]/components/SettingsProfile.js",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: username,
                                style: {
                                    width: '100%',
                                    padding: '8px 12px',
                                    border: '1px solid var(--border)',
                                    borderRadius: 4,
                                    fontSize: 14,
                                    background: 'var(--bg)',
                                    color: 'var(--text)'
                                },
                                onChange: (e)=>setUsername(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/SettingsProfile.js",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SettingsProfile.js",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    fontWeight: 600,
                                    fontSize: 14,
                                    display: 'block',
                                    marginBottom: 4
                                },
                                children: t('settings.bio')
                            }, void 0, false, {
                                fileName: "[project]/components/SettingsProfile.js",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                rows: 3,
                                value: bio,
                                style: {
                                    width: '100%',
                                    padding: '8px 12px',
                                    border: '1px solid var(--border)',
                                    borderRadius: 4,
                                    fontSize: 14,
                                    background: 'var(--bg)',
                                    color: 'var(--text)',
                                    resize: 'vertical'
                                },
                                onChange: (e)=>setBio(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/SettingsProfile.js",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SettingsProfile.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    fontWeight: 600,
                                    fontSize: 14,
                                    display: 'block',
                                    marginBottom: 4
                                },
                                children: [
                                    t('settings.signature'),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--text-light)',
                                            fontWeight: 400
                                        },
                                        children: [
                                            "(",
                                            t('settings.signatureHint'),
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SettingsProfile.js",
                                        lineNumber: 88,
                                        columnNumber: 121
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SettingsProfile.js",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                rows: 2,
                                value: signature,
                                placeholder: t('settings.signaturePlaceholder'),
                                style: {
                                    width: '100%',
                                    padding: '8px 12px',
                                    border: '1px solid var(--border)',
                                    borderRadius: 4,
                                    fontSize: 14,
                                    background: 'var(--bg)',
                                    color: 'var(--text)',
                                    resize: 'vertical',
                                    fontFamily: 'inherit'
                                },
                                onChange: (e)=>setSignature(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/SettingsProfile.js",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SettingsProfile.js",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary",
                        style: {
                            width: '100%',
                            padding: 10
                        },
                        onClick: handleSave,
                        children: t('settings.save')
                    }, void 0, false, {
                        fileName: "[project]/components/SettingsProfile.js",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SettingsProfile.js",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 8,
                    padding: 20,
                    marginTop: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontWeight: 600,
                            fontSize: 14,
                            display: 'block',
                            marginBottom: 8
                        },
                        children: t('settings.language')
                    }, void 0, false, {
                        fileName: "[project]/components/SettingsProfile.js",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "feed-header-left language-toggle",
                        style: {
                            display: 'inline-flex'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: 'tab' + (i18n.language.startsWith('zh') ? ' active' : ''),
                                "aria-pressed": i18n.language.startsWith('zh'),
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAppLanguage"])('zh'),
                                children: t('settings.languageZh')
                            }, void 0, false, {
                                fileName: "[project]/components/SettingsProfile.js",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: 'tab' + (i18n.language.startsWith('en') ? ' active' : ''),
                                "aria-pressed": i18n.language.startsWith('en'),
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAppLanguage"])('en'),
                                children: t('settings.languageEn')
                            }, void 0, false, {
                                fileName: "[project]/components/SettingsProfile.js",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SettingsProfile.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SettingsProfile.js",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SettingsProfile.js",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(SettingsProfile, "Zr7xfDCaCmih+hgTjCMPNgodggI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = SettingsProfile;
var _c;
__turbopack_context__.k.register(_c, "SettingsProfile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Sidebar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 侧边栏：社区统计 + 友情链接
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const emptyStats = {
    posts: 0,
    users: 0,
    topics: 0,
    online: 0
};
let cachedStats = null;
let cachedLinks = null;
function Sidebar({ id = 'sidebar' }) {
    _s();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Sidebar.useState": ()=>cachedStats || emptyStats
    }["Sidebar.useState"]);
    const [links, setLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Sidebar.useState": ()=>cachedLinks || []
    }["Sidebar.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            if (!cachedStats) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getStats().then({
                    "Sidebar.useEffect": (nextStats)=>{
                        cachedStats = nextStats;
                        setStats(nextStats);
                    }
                }["Sidebar.useEffect"]).catch({
                    "Sidebar.useEffect": ()=>{}
                }["Sidebar.useEffect"]);
            }
            if (!cachedLinks) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getLinks().then({
                    "Sidebar.useEffect": (nextLinks)=>{
                        cachedLinks = nextLinks;
                        setLinks(nextLinks);
                    }
                }["Sidebar.useEffect"]).catch({
                    "Sidebar.useEffect": ()=>{}
                }["Sidebar.useEffect"]);
            }
        }
    }["Sidebar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        id: id,
        className: "sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stats-box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "book",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            " 社区统计"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "主题"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 37,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: stats.topics || 0
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 37,
                                columnNumber: 51
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "帖子"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 38,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: stats.posts || 0
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 38,
                                columnNumber: 51
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "用户"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 39,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: stats.users || 0
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 39,
                                columnNumber: 51
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "在线"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 40,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: stats.online || 0
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 40,
                                columnNumber: 51
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.js",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "links-box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "link",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            " 友情链接"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        id: id === 'sidebar' ? 'friendlyLinks' : undefined,
                        className: "friendly-links",
                        children: links.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                color: '#94a3b8',
                                fontSize: 13
                            },
                            children: "暂无链接"
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.js",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this) : links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: l.url,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: l.title
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 51,
                                    columnNumber: 30
                                }, this)
                            }, l.id, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.js",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sidebar.js",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "Oo0wTRJvHnC99Z9rmX0Rhcf8rBY=");
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/UserProfile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 用户主页：资料卡 + 该用户的帖子列表
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/ChatManager.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function avatar(username, size = 128) {
    return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username || 'U') + '&background=6366f1&color=fff&size=' + size;
}
function UserProfile({ username }) {
    _s();
    const { currentUser, openPost } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const openPrivateChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenPrivateChat"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UserProfile.useCallback[load]": async ()=>{
            setError(null);
            try {
                const u = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getUserProfile(username);
                if (u.error || !u.id) {
                    setError(u.error || '用户不存在');
                    return;
                }
                setUser(u);
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getPosts('latest', u.id);
                setPosts(result.data || []);
            } catch (err) {
                setError(err.message || '加载失败');
            }
        }
    }["UserProfile.useCallback[load]"], [
        username
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserProfile.useEffect": ()=>{
            load();
        }
    }["UserProfile.useEffect"], [
        load
    ]);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "page-slide active",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    color: '#ef4444',
                    padding: '40px 0'
                },
                children: [
                    "加载失败：",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/components/UserProfile.js",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/UserProfile.js",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: 'center',
                color: '#94a3b8',
                padding: '40px 0'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "spinner-sm"
                }, void 0, false, {
                    fileName: "[project]/components/UserProfile.js",
                    lineNumber: 48,
                    columnNumber: 86
                }, this),
                "加载中..."
            ]
        }, void 0, true, {
            fileName: "[project]/components/UserProfile.js",
            lineNumber: 48,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-slide active",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-header",
                style: {
                    maxWidth: 700,
                    margin: '0 auto',
                    width: '100%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "users",
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/UserProfile.js",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        " 用户主页"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/UserProfile.js",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/UserProfile.js",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 700,
                    margin: '0 auto',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            borderRadius: 8,
                            padding: 32,
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: user.avatar_url || avatar(user.username),
                                style: {
                                    width: 96,
                                    height: 96,
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: '3px solid var(--primary)'
                                },
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/components/UserProfile.js",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: '16px 0 4px',
                                    fontSize: 24
                                },
                                children: user.username
                            }, void 0, false, {
                                fileName: "[project]/components/UserProfile.js",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'var(--text-secondary)',
                                    fontSize: 14
                                },
                                children: user.bio || '这个人很懒，什么都没写'
                            }, void 0, false, {
                                fileName: "[project]/components/UserProfile.js",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            currentUser && currentUser.id !== user.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-primary",
                                style: {
                                    marginTop: 12,
                                    padding: '8px 20px'
                                },
                                onClick: ()=>openPrivateChat(user.id, user.username),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "message",
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/components/UserProfile.js",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    " 发私信"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/UserProfile.js",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: 32,
                                    marginTop: 16,
                                    fontSize: 14,
                                    color: 'var(--text-secondary)',
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "calendar",
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/components/UserProfile.js",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this),
                                            " 加入于 ",
                                            user.created_at ? new Date(user.created_at).toLocaleDateString('zh-CN') : '未知'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/UserProfile.js",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "file",
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/components/UserProfile.js",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this),
                                            " 发了 ",
                                            posts.length,
                                            " 个帖子"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/UserProfile.js",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    user.role === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--primary)',
                                            fontWeight: 600
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "shield",
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/components/UserProfile.js",
                                                lineNumber: 73,
                                                columnNumber: 98
                                            }, this),
                                            " 管理员"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/UserProfile.js",
                                        lineNumber: 73,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/UserProfile.js",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/UserProfile.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            margin: '24px 0 16px',
                            fontSize: 18
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "file",
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/UserProfile.js",
                                lineNumber: 76,
                                columnNumber: 61
                            }, this),
                            " 发布的帖子"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/UserProfile.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    posts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#94a3b8',
                            padding: '20px 0',
                            textAlign: 'center'
                        },
                        children: "还没有发帖"
                    }, void 0, false, {
                        fileName: "[project]/components/UserProfile.js",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this) : posts.map((p)=>{
                        const time = p.created_at ? new Date(p.created_at).toLocaleString('zh-CN') : '';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "post-card",
                            style: {
                                cursor: 'pointer'
                            },
                            onClick: (e)=>openPost(p.id, e.currentTarget, p),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "post-title",
                                    style: {
                                        fontSize: 16,
                                        fontWeight: 600
                                    },
                                    children: p.title || '无标题'
                                }, void 0, false, {
                                    fileName: "[project]/components/UserProfile.js",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "post-content",
                                    style: {
                                        fontSize: 14,
                                        color: 'var(--text-secondary)'
                                    },
                                    children: [
                                        (p.content || '').substring(0, 100),
                                        (p.content || '').length > 100 ? '...' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/UserProfile.js",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 12,
                                        color: 'var(--text-light)',
                                        marginTop: 8
                                    },
                                    children: time
                                }, void 0, false, {
                                    fileName: "[project]/components/UserProfile.js",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/components/UserProfile.js",
                            lineNumber: 83,
                            columnNumber: 15
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/UserProfile.js",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/UserProfile.js",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(UserProfile, "o8KVYbA3s1/m/2JiDKIJwWdPH70=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenPrivateChat"]
    ];
});
_c = UserProfile;
var _c;
__turbopack_context__.k.register(_c, "UserProfile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/AdminCustomCss.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminCustomCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 管理后台 - 自定义 CSS（上传 style.css 覆盖默认样式）
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function AdminCustomCss() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { confirmAction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragOver, setDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingFile, setPendingFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // 待确认的 CSS 文件
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleFile = async (file)=>{
        if (!file) return;
        if (file.name !== 'style.css') {
            setStatus({
                ok: false,
                msg: t('admin.css.filenameInvalid')
            });
            return;
        }
        if (file.size > 1024 * 1024) {
            setStatus({
                ok: false,
                msg: t('admin.css.sizeInvalid')
            });
            return;
        }
        // 上传前警告确认（与原版一致）
        setPendingFile(file);
    };
    const doUpload = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].uploadCustomCss(pendingFile);
            setStatus({
                ok: true,
                msg: t('admin.css.active')
            });
            const link = document.getElementById('custom-css-link');
            if (link) link.href = '/api/custom-css?t=' + Date.now();
        } catch (err) {
            setStatus({
                ok: false,
                msg: err.message
            });
        } finally{
            setPendingFile(null);
        }
    };
    const handleDelete = async ()=>{
        if (!await confirmAction(t('admin.css.confirmDelete'))) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].deleteCustomCss();
            setStatus({
                ok: true,
                msg: t('admin.css.deleted')
            });
            const link = document.getElementById('custom-css-link');
            if (link) link.remove();
        } catch (err) {
            setStatus({
                ok: false,
                msg: err.message
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    marginBottom: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "code",
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/components/admin/AdminCustomCss.js",
                        lineNumber: 59,
                        columnNumber: 40
                    }, this),
                    " ",
                    t('admin.css.title')
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/AdminCustomCss.js",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 13,
                    color: 'var(--text-secondary)',
                    marginBottom: 12
                },
                children: t('admin.css.description')
            }, void 0, false, {
                fileName: "[project]/components/admin/AdminCustomCss.js",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    border: '2px dashed ' + (dragOver ? 'var(--primary)' : 'var(--border)'),
                    borderRadius: 8,
                    padding: 32,
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    background: dragOver ? 'var(--primary-bg)' : 'var(--bg)'
                },
                onClick: ()=>fileInputRef.current?.click(),
                onDragOver: (e)=>{
                    e.preventDefault();
                    setDragOver(true);
                },
                onDragLeave: ()=>setDragOver(false),
                onDrop: (e)=>{
                    e.preventDefault();
                    setDragOver(false);
                    if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: 13,
                        color: 'var(--text-secondary)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "upload",
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/components/admin/AdminCustomCss.js",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        " ",
                        dragOver ? t('admin.css.releaseUpload') : t('admin.css.uploadHint')
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/AdminCustomCss.js",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/AdminCustomCss.js",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                ref: fileInputRef,
                accept: ".css",
                style: {
                    display: 'none'
                },
                onChange: (e)=>{
                    if (e.target.files?.[0]) handleFile(e.target.files[0]);
                }
            }, void 0, false, {
                fileName: "[project]/components/admin/AdminCustomCss.js",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 13,
                    marginTop: 8,
                    color: status.ok ? '#22c55e' : '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: status.ok ? 'success' : 'error',
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/components/admin/AdminCustomCss.js",
                        lineNumber: 86,
                        columnNumber: 142
                    }, this),
                    " ",
                    status.msg
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/AdminCustomCss.js",
                lineNumber: 86,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 8,
                    marginTop: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary",
                        style: {
                            padding: '8px 20px'
                        },
                        onClick: ()=>fileInputRef.current?.click(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "save",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/admin/AdminCustomCss.js",
                                lineNumber: 89,
                                columnNumber: 119
                            }, this),
                            " ",
                            t('admin.css.save')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/AdminCustomCss.js",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-secondary",
                        style: {
                            padding: '8px 20px',
                            border: '1px solid var(--border)',
                            borderRadius: 4,
                            background: 'var(--surface)',
                            cursor: 'pointer',
                            color: 'var(--text)'
                        },
                        onClick: handleDelete,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "trash",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/admin/AdminCustomCss.js",
                                lineNumber: 90,
                                columnNumber: 221
                            }, this),
                            " ",
                            t('admin.css.delete')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/AdminCustomCss.js",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/AdminCustomCss.js",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            pendingFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal active",
                style: {
                    display: 'flex'
                },
                onClick: ()=>setPendingFile(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content",
                    style: {
                        maxWidth: 420
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: 12
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "warning",
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/AdminCustomCss.js",
                                    lineNumber: 97,
                                    columnNumber: 46
                                }, this),
                                " ",
                                t('admin.css.warningTitle')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/AdminCustomCss.js",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 14,
                                color: 'var(--text-secondary)',
                                marginBottom: 16
                            },
                            children: t('admin.css.warningBody')
                        }, void 0, false, {
                            fileName: "[project]/components/admin/AdminCustomCss.js",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 13,
                                color: 'var(--text-light)',
                                marginBottom: 20
                            },
                            children: t('admin.css.warningHelp')
                        }, void 0, false, {
                            fileName: "[project]/components/admin/AdminCustomCss.js",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-primary",
                                    style: {
                                        padding: '8px 24px'
                                    },
                                    onClick: doUpload,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "upload",
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/AdminCustomCss.js",
                                            lineNumber: 105,
                                            columnNumber: 98
                                        }, this),
                                        " ",
                                        t('admin.css.continueUpload')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/AdminCustomCss.js",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-secondary",
                                    style: {
                                        padding: '8px 24px',
                                        border: '1px solid var(--border)',
                                        borderRadius: 4,
                                        background: 'var(--surface)',
                                        cursor: 'pointer',
                                        color: 'var(--text)'
                                    },
                                    onClick: ()=>setPendingFile(null),
                                    children: t('admin.common.cancel')
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/AdminCustomCss.js",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/AdminCustomCss.js",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/AdminCustomCss.js",
                    lineNumber: 96,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/AdminCustomCss.js",
                lineNumber: 95,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/AdminCustomCss.js",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(AdminCustomCss, "y54mhYbi265vXKW5XJFA64RlJs4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = AdminCustomCss;
var _c;
__turbopack_context__.k.register(_c, "AdminCustomCss");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/AdminCustomPages.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminCustomPages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 管理后台 - 自定义页面管理（列表）
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$CustomPageEditor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/admin/CustomPageEditor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function AdminCustomPages() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { toast, confirmAction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [pages, setPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // null | 'new' | page对象
    const load = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].adminGetCustomPages().then((data)=>{
            setPages(data || []);
            setError(null);
        }).catch((e)=>{
            setError(e.message);
            setPages([]);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(load, []);
    const handleDelete = async (p)=>{
        if (!await confirmAction(t('admin.page.confirmDelete'))) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].adminDeleteCustomPage(p.id);
            load();
        } catch (err) {
            toast(t('admin.common.deleteFailed', {
                msg: err.message
            }), 'error');
        }
    };
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: 'center',
            color: '#ef4444',
            padding: 20
        },
        children: t('admin.common.loadFailed', {
            msg: error
        })
    }, void 0, false, {
        fileName: "[project]/components/admin/AdminCustomPages.js",
        lineNumber: 36,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            margin: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "file",
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/admin/AdminCustomPages.js",
                                lineNumber: 41,
                                columnNumber: 35
                            }, this),
                            " ",
                            t('admin.page.title')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/AdminCustomPages.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary",
                        style: {
                            padding: '8px 16px'
                        },
                        onClick: ()=>setEditing('new'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "plus",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/admin/AdminCustomPages.js",
                                lineNumber: 42,
                                columnNumber: 107
                            }, this),
                            " ",
                            t('admin.page.add')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/AdminCustomPages.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/AdminCustomPages.js",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "customPageList",
                children: pages === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        color: '#94a3b8',
                        padding: 20
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "spinner-sm"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/AdminCustomPages.js",
                            lineNumber: 46,
                            columnNumber: 79
                        }, this),
                        t('admin.common.loading')
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/AdminCustomPages.js",
                    lineNumber: 46,
                    columnNumber: 11
                }, this) : pages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        color: '#94a3b8',
                        padding: 20
                    },
                    children: t('admin.page.empty')
                }, void 0, false, {
                    fileName: "[project]/components/admin/AdminCustomPages.js",
                    lineNumber: 48,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        overflowX: 'auto'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        style: {
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        textAlign: 'left',
                                        borderBottom: '2px solid var(--border)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: '8px 12px'
                                            },
                                            children: t('admin.page.name')
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/AdminCustomPages.js",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: '8px 12px'
                                            },
                                            children: t('admin.page.columnTitle')
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/AdminCustomPages.js",
                                            lineNumber: 55,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: '8px 12px'
                                            },
                                            children: t('admin.page.url')
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/AdminCustomPages.js",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: '8px 12px'
                                            },
                                            children: t('admin.common.status')
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/AdminCustomPages.js",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: '8px 12px',
                                                textAlign: 'center'
                                            },
                                            children: t('admin.common.actions')
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/AdminCustomPages.js",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/AdminCustomPages.js",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/AdminCustomPages.js",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: pages.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: '1px solid var(--border-light)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '8px 12px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    style: {
                                                        background: 'var(--bg)',
                                                        padding: '2px 6px',
                                                        borderRadius: 4,
                                                        fontSize: 12
                                                    },
                                                    children: p.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/AdminCustomPages.js",
                                                    lineNumber: 64,
                                                    columnNumber: 57
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/AdminCustomPages.js",
                                                lineNumber: 64,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '8px 12px'
                                                },
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/AdminCustomPages.js",
                                                lineNumber: 65,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '8px 12px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    style: {
                                                        background: 'var(--bg)',
                                                        padding: '2px 6px',
                                                        borderRadius: 4,
                                                        fontSize: 12
                                                    },
                                                    children: [
                                                        "?custom=",
                                                        p.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/AdminCustomPages.js",
                                                    lineNumber: 66,
                                                    columnNumber: 57
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/AdminCustomPages.js",
                                                lineNumber: 66,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '8px 12px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: p.enabled ? '#22c55e' : '#ef4444',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: 4
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: p.enabled ? 'success' : 'error',
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/AdminCustomPages.js",
                                                            lineNumber: 68,
                                                            columnNumber: 136
                                                        }, this),
                                                        " ",
                                                        p.enabled ? t('admin.common.enabled') : t('admin.common.disabled')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/AdminCustomPages.js",
                                                    lineNumber: 68,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/AdminCustomPages.js",
                                                lineNumber: 67,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '8px 12px',
                                                    textAlign: 'center',
                                                    display: 'flex',
                                                    gap: 6,
                                                    justifyContent: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn-sm btn-secondary",
                                                        title: t('admin.page.edit'),
                                                        "aria-label": t('admin.page.edit'),
                                                        onClick: ()=>setEditing(p),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "edit",
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/AdminCustomPages.js",
                                                            lineNumber: 71,
                                                            columnNumber: 157
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/AdminCustomPages.js",
                                                        lineNumber: 71,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn-sm btn-danger",
                                                        title: t('admin.page.delete'),
                                                        "aria-label": t('admin.page.delete'),
                                                        onClick: ()=>handleDelete(p),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "trash",
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/AdminCustomPages.js",
                                                            lineNumber: 72,
                                                            columnNumber: 160
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/AdminCustomPages.js",
                                                        lineNumber: 72,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/admin/AdminCustomPages.js",
                                                lineNumber: 70,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/components/admin/AdminCustomPages.js",
                                        lineNumber: 63,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/admin/AdminCustomPages.js",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/AdminCustomPages.js",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/admin/AdminCustomPages.js",
                    lineNumber: 50,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/AdminCustomPages.js",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$admin$2f$CustomPageEditor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                page: editing === 'new' ? null : editing,
                onClose: ()=>setEditing(null),
                onSaved: ()=>{
                    setEditing(null);
                    load();
                }
            }, void 0, false, {
                fileName: "[project]/components/admin/AdminCustomPages.js",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/AdminCustomPages.js",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(AdminCustomPages, "0M5cSguWS1Hejc5epls3hl2J3NA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = AdminCustomPages;
var _c;
__turbopack_context__.k.register(_c, "AdminCustomPages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/AdminForumSettings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminForumSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 管理后台 - 论坛设置
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function AdminForumSettings() {
    _s();
    const { updateForumName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    // 初始为空：收到服务器返回的论坛名后才显示，避免默认名一闪而过
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // {ok, msg}
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminForumSettings.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getSettings().then({
                "AdminForumSettings.useEffect": (data)=>{
                    if (data.forum_name) setName(data.forum_name);
                }
            }["AdminForumSettings.useEffect"]).catch({
                "AdminForumSettings.useEffect": ()=>{}
            }["AdminForumSettings.useEffect"]);
        }
    }["AdminForumSettings.useEffect"], []);
    const handleSave = async ()=>{
        if (!name.trim()) {
            toast(t('admin.forum.nameRequired'), 'warning');
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].updateSettings(name.trim());
            updateForumName(name.trim());
            setResult({
                ok: true,
                msg: t('admin.forum.saved')
            });
        } catch  {
            setResult({
                ok: false,
                msg: t('admin.forum.saveFailed')
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    marginBottom: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "settings",
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/components/admin/AdminForumSettings.js",
                        lineNumber: 38,
                        columnNumber: 40
                    }, this),
                    " ",
                    t('admin.forum.title')
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/AdminForumSettings.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 400
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        style: {
                            fontWeight: 600,
                            fontSize: 14,
                            display: 'block',
                            marginBottom: 6
                        },
                        children: t('admin.forum.nameLabel')
                    }, void 0, false, {
                        fileName: "[project]/components/admin/AdminForumSettings.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        style: {
                            width: '100%',
                            padding: '10px 14px',
                            border: '1.5px solid var(--border)',
                            borderRadius: 6,
                            fontSize: 15,
                            marginBottom: 12,
                            fontFamily: 'inherit',
                            background: 'var(--bg)',
                            color: 'var(--text)'
                        },
                        value: name,
                        onChange: (e)=>setName(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/admin/AdminForumSettings.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary",
                        style: {
                            padding: '10px 24px'
                        },
                        onClick: handleSave,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "save",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/admin/AdminForumSettings.js",
                                lineNumber: 47,
                                columnNumber: 95
                            }, this),
                            " ",
                            t('admin.forum.save')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/AdminForumSettings.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            marginLeft: 12,
                            fontSize: 14,
                            color: result.ok ? '#22c55e' : '#ef4444'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: result.ok ? 'success' : 'error',
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/admin/AdminForumSettings.js",
                                lineNumber: 49,
                                columnNumber: 100
                            }, this),
                            " ",
                            result.msg
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/AdminForumSettings.js",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/AdminForumSettings.js",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/AdminForumSettings.js",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(AdminForumSettings, "CvzMDA4LSsxwt4T2Ev/JGe02TXk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = AdminForumSettings;
var _c;
__turbopack_context__.k.register(_c, "AdminForumSettings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/AdminLinks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 管理后台 - 友情链接管理
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function AdminLinks() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { toast, confirmAction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [links, setLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const load = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getLinks().then(setLinks).catch(()=>{});
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(load, []);
    const handleAdd = async ()=>{
        if (!title.trim() || !url.trim()) {
            toast(t('admin.link.incomplete'), 'warning');
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].addLink(title.trim(), url.trim());
            setTitle('');
            setUrl('');
            load();
        } catch (err) {
            toast(t('admin.link.addFailed', {
                msg: err.message
            }), 'error');
        }
    };
    const handleDelete = async (id)=>{
        if (!await confirmAction(t('admin.link.confirmDelete'))) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].deleteLink(id);
            load();
        } catch (err) {
            toast(t('admin.common.deleteFailed', {
                msg: err.message
            }), 'error');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 16,
                    display: 'flex',
                    gap: 8,
                    flexWrap: 'wrap'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: t('admin.link.namePlaceholder'),
                        style: {
                            flex: 1,
                            minWidth: 120,
                            padding: '8px 12px',
                            border: '1px solid var(--border)',
                            borderRadius: 4,
                            background: 'var(--bg)',
                            color: 'var(--text)'
                        },
                        value: title,
                        onChange: (e)=>setTitle(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/admin/AdminLinks.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "url",
                        placeholder: t('admin.link.urlPlaceholder'),
                        style: {
                            flex: 2,
                            minWidth: 160,
                            padding: '8px 12px',
                            border: '1px solid var(--border)',
                            borderRadius: 4,
                            background: 'var(--bg)',
                            color: 'var(--text)'
                        },
                        value: url,
                        onChange: (e)=>setUrl(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/admin/AdminLinks.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary",
                        style: {
                            padding: '8px 16px'
                        },
                        onClick: handleAdd,
                        children: t('admin.link.add')
                    }, void 0, false, {
                        fileName: "[project]/components/admin/AdminLinks.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/AdminLinks.js",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "linkList",
                children: links.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        color: '#94a3b8',
                        fontSize: 13
                    },
                    children: t('admin.link.empty')
                }, void 0, false, {
                    fileName: "[project]/components/admin/AdminLinks.js",
                    lineNumber: 59,
                    columnNumber: 11
                }, this) : links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '8px 0',
                            borderBottom: '1px solid var(--border)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: l.url,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    style: {
                                        color: '#6366f1',
                                        textDecoration: 'none'
                                    },
                                    children: l.title
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/AdminLinks.js",
                                    lineNumber: 63,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/AdminLinks.js",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-sm btn-danger",
                                onClick: ()=>handleDelete(l.id),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "trash",
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/AdminLinks.js",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    t('admin.common.delete')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/AdminLinks.js",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        ]
                    }, l.id, true, {
                        fileName: "[project]/components/admin/AdminLinks.js",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/admin/AdminLinks.js",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/AdminLinks.js",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(AdminLinks, "/7mCoh61haFEhm4QIaXTnQYXyyo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = AdminLinks;
var _c;
__turbopack_context__.k.register(_c, "AdminLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/AdminLogs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 管理后台 - 事件日志
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AdminLogs() {
    _s();
    const { t, i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const load = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getEventLogs().then((data)=>{
            setLogs(data || []);
            setError(null);
        }).catch((e)=>{
            setError(e.message);
            setLogs([]);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(load, []);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: 'center',
            color: '#ef4444',
            padding: 20
        },
        children: t('admin.common.loadFailed', {
            msg: error
        })
    }, void 0, false, {
        fileName: "[project]/components/admin/AdminLogs.js",
        lineNumber: 21,
        columnNumber: 21
    }, this);
    if (!logs) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: 'center',
            color: '#94a3b8',
            padding: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "spinner-sm"
            }, void 0, false, {
                fileName: "[project]/components/admin/AdminLogs.js",
                lineNumber: 22,
                columnNumber: 89
            }, this),
            t('admin.common.loading')
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/AdminLogs.js",
        lineNumber: 22,
        columnNumber: 21
    }, this);
    if (logs.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: 'center',
            color: '#94a3b8',
            padding: 40
        },
        children: t('admin.log.empty')
    }, void 0, false, {
        fileName: "[project]/components/admin/AdminLogs.js",
        lineNumber: 23,
        columnNumber: 33
    }, this);
    const dateLocale = i18n.resolvedLanguage === 'en' ? 'en-US' : 'zh-CN';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
        style: {
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 13
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    style: {
                        textAlign: 'left',
                        borderBottom: '1px solid var(--border)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: t('admin.log.time')
                        }, void 0, false, {
                            fileName: "[project]/components/admin/AdminLogs.js",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: t('admin.log.user')
                        }, void 0, false, {
                            fileName: "[project]/components/admin/AdminLogs.js",
                            lineNumber: 31,
                            columnNumber: 41
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: t('admin.log.action')
                        }, void 0, false, {
                            fileName: "[project]/components/admin/AdminLogs.js",
                            lineNumber: 31,
                            columnNumber: 71
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/AdminLogs.js",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/AdminLogs.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                children: logs.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        style: {
                            borderBottom: '1px solid #f1f5f9'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                style: {
                                    padding: '6px 0'
                                },
                                children: new Date(l.created_at).toLocaleString(dateLocale)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/AdminLogs.js",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                style: {
                                    padding: '6px 0'
                                },
                                children: l.username || t('admin.log.system')
                            }, void 0, false, {
                                fileName: "[project]/components/admin/AdminLogs.js",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                style: {
                                    padding: '6px 0'
                                },
                                children: l.action
                            }, void 0, false, {
                                fileName: "[project]/components/admin/AdminLogs.js",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        ]
                    }, l.id, true, {
                        fileName: "[project]/components/admin/AdminLogs.js",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/admin/AdminLogs.js",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/AdminLogs.js",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(AdminLogs, "WCxz4akcgeu/IK1zNvDgt9vXHas=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = AdminLogs;
var _c;
__turbopack_context__.k.register(_c, "AdminLogs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/AdminReports.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminReports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 管理后台 - 举报处理
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function AdminReports() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { toast, confirmAction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [reports, setReports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const load = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getReports().then((data)=>{
            setReports(data || []);
            setError(null);
        }).catch((e)=>{
            setError(e.message);
            setReports([]);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(load, []);
    const handleAction = async (r, action)=>{
        const status = action === 'approve' ? 'approved' : 'rejected';
        const note = action === 'approve' ? t('admin.report.approvedNote') : t('admin.report.rejectedNote');
        if (action === 'approve' && !await confirmAction(t('admin.report.confirmApprove'))) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].updateReport(r.id, status, note);
            if (action === 'approve' && r.post_id) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].deletePost(r.post_id).catch(()=>{});
            }
            load();
        } catch (err) {
            toast(t('admin.common.operationFailed', {
                msg: err.message
            }), 'error');
        }
    };
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: 'center',
            color: '#ef4444',
            padding: 20
        },
        children: t('admin.common.loadFailed', {
            msg: error
        })
    }, void 0, false, {
        fileName: "[project]/components/admin/AdminReports.js",
        lineNumber: 39,
        columnNumber: 21
    }, this);
    if (!reports) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: 'center',
            color: '#94a3b8',
            padding: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "spinner-sm"
            }, void 0, false, {
                fileName: "[project]/components/admin/AdminReports.js",
                lineNumber: 40,
                columnNumber: 92
            }, this),
            t('admin.common.loading')
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/AdminReports.js",
        lineNumber: 40,
        columnNumber: 24
    }, this);
    if (reports.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: 'center',
            color: '#94a3b8',
            padding: 40
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                name: "success",
                size: 16
            }, void 0, false, {
                fileName: "[project]/components/admin/AdminReports.js",
                lineNumber: 41,
                columnNumber: 104
            }, this),
            " ",
            t('admin.report.empty')
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/AdminReports.js",
        lineNumber: 41,
        columnNumber: 36
    }, this);
    const statusLabels = {
        pending: t('admin.report.statusPending'),
        approved: t('admin.report.statusApproved'),
        rejected: t('admin.report.statusRejected')
    };
    const statusIcons = {
        pending: 'pending',
        approved: 'success',
        rejected: 'error'
    };
    return reports.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "report-item",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: t('admin.report.reportedPost', {
                        name: r.reporter_name || t('admin.report.anonymous')
                    })
                }, void 0, false, {
                    fileName: "[project]/components/admin/AdminReports.js",
                    lineNumber: 52,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: 13,
                        color: '#64748b',
                        margin: '4px 0'
                    },
                    children: t('admin.report.reason', {
                        reason: r.reason
                    })
                }, void 0, false, {
                    fileName: "[project]/components/admin/AdminReports.js",
                    lineNumber: 53,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: 13,
                        color: '#64748b',
                        margin: '4px 0'
                    },
                    children: t('admin.report.post', {
                        title: r.post_title || t('admin.report.untitled'),
                        content: (r.post_content || '').substring(0, 30) + ((r.post_content || '').length > 30 ? '...' : '')
                    })
                }, void 0, false, {
                    fileName: "[project]/components/admin/AdminReports.js",
                    lineNumber: 54,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: 13,
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4
                    },
                    children: [
                        statusIcons[r.status] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: statusIcons[r.status],
                            size: 13
                        }, void 0, false, {
                            fileName: "[project]/components/admin/AdminReports.js",
                            lineNumber: 61,
                            columnNumber: 35
                        }, this),
                        " ",
                        t('admin.common.status'),
                        ": ",
                        statusLabels[r.status] || r.status
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/AdminReports.js",
                    lineNumber: 60,
                    columnNumber: 7
                }, this),
                r.handler_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: 12,
                        color: '#94a3b8'
                    },
                    children: [
                        t('admin.report.handler', {
                            name: r.handler_name
                        }),
                        r.handler_note ? ' (' + r.handler_note + ')' : ''
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/AdminReports.js",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                r.status === 'pending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "report-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-sm btn-danger",
                            onClick: ()=>handleAction(r, 'approve'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "trash",
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/AdminReports.js",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                " ",
                                t('admin.report.deletePost')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/AdminReports.js",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-sm btn-secondary",
                            onClick: ()=>handleAction(r, 'reject'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "close",
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/AdminReports.js",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                " ",
                                t('admin.report.reject')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/AdminReports.js",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/AdminReports.js",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, r.id, true, {
            fileName: "[project]/components/admin/AdminReports.js",
            lineNumber: 51,
            columnNumber: 5
        }, this));
}
_s(AdminReports, "nPrtmXdmydWitM1upFRXvAZnPv4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = AdminReports;
var _c;
__turbopack_context__.k.register(_c, "AdminReports");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/AdminUsers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 管理后台 - 用户管理
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function AdminUsers() {
    _s();
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { t, i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { toast, confirmAction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const load = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getUsers().then((data)=>{
            setUsers(data || []);
            setError(null);
        }).catch((e)=>{
            setError(e.message);
            setUsers([]);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(load, []);
    const handleRole = async (u, role)=>{
        const roleName = role === 'admin' ? t('admin.user.roleAdmin') : t('admin.user.roleUser');
        if (!await confirmAction(t('admin.user.confirmRole', {
            role: roleName
        }), {
            danger: false
        })) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].updateUserRole(u.id, role);
            load();
        } catch (err) {
            toast(t('admin.common.operationFailed', {
                msg: err.message
            }), 'error');
        }
    };
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: 'center',
            color: '#ef4444',
            padding: 20
        },
        children: t('admin.common.loadFailed', {
            msg: error
        })
    }, void 0, false, {
        fileName: "[project]/components/admin/AdminUsers.js",
        lineNumber: 36,
        columnNumber: 21
    }, this);
    if (!users) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: 'center',
            color: '#94a3b8',
            padding: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "spinner-sm"
            }, void 0, false, {
                fileName: "[project]/components/admin/AdminUsers.js",
                lineNumber: 37,
                columnNumber: 90
            }, this),
            t('admin.common.loading')
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/AdminUsers.js",
        lineNumber: 37,
        columnNumber: 22
    }, this);
    const dateLocale = i18n.resolvedLanguage === 'en' ? 'en-US' : 'zh-CN';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 12,
                    fontSize: 13,
                    color: '#94a3b8'
                },
                children: t('admin.user.count', {
                    count: users.length
                })
            }, void 0, false, {
                fileName: "[project]/components/admin/AdminUsers.js",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    overflowX: 'auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: 14
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                style: {
                                    textAlign: 'left',
                                    borderBottom: '2px solid var(--border)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '10px 12px'
                                        },
                                        children: t('admin.user.user')
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/AdminUsers.js",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '10px 12px'
                                        },
                                        children: t('admin.user.role')
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/AdminUsers.js",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '10px 12px'
                                        },
                                        children: t('admin.user.registeredAt')
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/AdminUsers.js",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '10px 12px',
                                            textAlign: 'center'
                                        },
                                        children: t('admin.common.actions')
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/AdminUsers.js",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/AdminUsers.js",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/admin/AdminUsers.js",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: users.map((u)=>{
                                const isAdmin = u.role === 'admin';
                                const isCurrent = currentUser && currentUser.id === u.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        borderBottom: '1px solid #f1f5f9'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: '10px 12px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: u.avatar_url || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(u.username) + '&background=6366f1&color=fff&size=64',
                                                        style: {
                                                            width: 28,
                                                            height: 28,
                                                            borderRadius: '50%',
                                                            objectFit: 'cover'
                                                        },
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/AdminUsers.js",
                                                        lineNumber: 62,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontWeight: 500
                                                        },
                                                        children: u.username
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/AdminUsers.js",
                                                        lineNumber: 67,
                                                        columnNumber: 23
                                                    }, this),
                                                    isCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: '#94a3b8',
                                                            background: '#eef2ff',
                                                            padding: '1px 8px',
                                                            borderRadius: 4
                                                        },
                                                        children: t('admin.user.you')
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/AdminUsers.js",
                                                        lineNumber: 68,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/admin/AdminUsers.js",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/AdminUsers.js",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: '10px 12px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    display: 'inline-block',
                                                    padding: '2px 10px',
                                                    borderRadius: 4,
                                                    fontSize: 12,
                                                    fontWeight: 500,
                                                    ...isAdmin ? {
                                                        background: '#6366f1',
                                                        color: '#fff'
                                                    } : {
                                                        background: 'var(--border)',
                                                        color: 'var(--text-secondary)'
                                                    }
                                                },
                                                children: isAdmin ? u.is_super ? t('admin.user.roleSuper') : t('admin.user.roleAdmin') : t('admin.user.roleUser')
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/AdminUsers.js",
                                                lineNumber: 72,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/AdminUsers.js",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: '10px 12px',
                                                color: '#94a3b8',
                                                fontSize: 13
                                            },
                                            children: u.created_at ? new Date(u.created_at).toLocaleDateString(dateLocale) : '—'
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/AdminUsers.js",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: '10px 12px',
                                                textAlign: 'center'
                                            },
                                            children: isCurrent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 12,
                                                    color: '#94a3b8'
                                                },
                                                children: t('admin.user.cannotSelf')
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/AdminUsers.js",
                                                lineNumber: 84,
                                                columnNumber: 23
                                            }, this) : isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn-sm btn-secondary",
                                                style: {
                                                    padding: '4px 12px'
                                                },
                                                onClick: ()=>handleRole(u, 'user'),
                                                children: t('admin.user.makeUser')
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/AdminUsers.js",
                                                lineNumber: 86,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn-sm btn-primary",
                                                style: {
                                                    padding: '4px 12px',
                                                    background: '#6366f1',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: 4,
                                                    cursor: 'pointer'
                                                },
                                                onClick: ()=>handleRole(u, 'admin'),
                                                children: t('admin.user.makeAdmin')
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/AdminUsers.js",
                                                lineNumber: 88,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/AdminUsers.js",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, u.id, true, {
                                    fileName: "[project]/components/admin/AdminUsers.js",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/admin/AdminUsers.js",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/AdminUsers.js",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/AdminUsers.js",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/AdminUsers.js",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(AdminUsers, "iDrsLf/hBtydLR0H4mkhRBiDEHI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = AdminUsers;
var _c;
__turbopack_context__.k.register(_c, "AdminUsers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/CustomPageEditor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomPageEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 管理后台 - 自定义页面编辑器（modal）
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CustomPageEditor({ page, onClose, onSaved }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const isEdit = !!page;
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(page?.name || '');
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(page?.title || '');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(page?.content || '');
    const [enabled, setEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(page?.enabled !== false);
    const handleSave = async ()=>{
        if (!name.trim()) {
            toast(t('admin.page.nameRequired'), 'warning');
            return;
        }
        if (!title.trim()) {
            toast(t('admin.page.titleRequired'), 'warning');
            return;
        }
        if (!content.trim()) {
            toast(t('admin.page.contentRequired'), 'warning');
            return;
        }
        if (!/^[a-zA-Z0-9\-_]+$/.test(name.trim())) {
            toast(t('admin.page.nameInvalid'), 'warning');
            return;
        }
        try {
            if (isEdit) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].adminUpdateCustomPage(page.id, title.trim(), content.trim(), enabled);
            } else {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].adminCreateCustomPage(name.trim(), title.trim(), content.trim());
            }
            onSaved();
        } catch (err) {
            toast(t('admin.common.saveFailed', {
                msg: err.message
            }), 'error');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal active",
        style: {
            display: 'flex'
        },
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-content",
            style: {
                maxWidth: 600,
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "close",
                    style: {
                        position: 'absolute',
                        top: 12,
                        right: 16,
                        cursor: 'pointer',
                        color: 'var(--text-light)'
                    },
                    onClick: onClose,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "close",
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/components/admin/CustomPageEditor.js",
                        lineNumber: 42,
                        columnNumber: 151
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/admin/CustomPageEditor.js",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        marginBottom: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: isEdit ? 'edit' : 'file',
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/admin/CustomPageEditor.js",
                            lineNumber: 43,
                            columnNumber: 42
                        }, this),
                        " ",
                        isEdit ? t('admin.page.editTitle') : t('admin.page.addTitle')
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/CustomPageEditor.js",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 12
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                fontWeight: 600,
                                fontSize: 14,
                                display: 'block',
                                marginBottom: 4
                            },
                            children: t('admin.page.nameLabel')
                        }, void 0, false, {
                            fileName: "[project]/components/admin/CustomPageEditor.js",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: name,
                            readOnly: isEdit,
                            placeholder: t('admin.page.namePlaceholder'),
                            style: {
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid var(--border)',
                                borderRadius: 4,
                                fontSize: 14,
                                background: isEdit ? 'var(--border-light)' : 'var(--bg)',
                                color: 'var(--text)'
                            },
                            onChange: (e)=>setName(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/admin/CustomPageEditor.js",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        isEdit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 12,
                                color: 'var(--text-light)',
                                marginTop: 2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "warning",
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/CustomPageEditor.js",
                                    lineNumber: 55,
                                    columnNumber: 87
                                }, this),
                                " ",
                                t('admin.page.nameLocked')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/CustomPageEditor.js",
                            lineNumber: 55,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 12,
                                color: 'var(--text-light)',
                                marginTop: 2
                            },
                            children: t('admin.page.nameHint')
                        }, void 0, false, {
                            fileName: "[project]/components/admin/CustomPageEditor.js",
                            lineNumber: 56,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/CustomPageEditor.js",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 12
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                fontWeight: 600,
                                fontSize: 14,
                                display: 'block',
                                marginBottom: 4
                            },
                            children: t('admin.page.navTitleLabel')
                        }, void 0, false, {
                            fileName: "[project]/components/admin/CustomPageEditor.js",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: title,
                            placeholder: t('admin.page.navTitlePlaceholder'),
                            style: {
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid var(--border)',
                                borderRadius: 4,
                                fontSize: 14,
                                background: 'var(--bg)',
                                color: 'var(--text)'
                            },
                            onChange: (e)=>setTitle(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/admin/CustomPageEditor.js",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/CustomPageEditor.js",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 12
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                fontWeight: 600,
                                fontSize: 14,
                                display: 'block',
                                marginBottom: 4
                            },
                            children: t('admin.common.status')
                        }, void 0, false, {
                            fileName: "[project]/components/admin/CustomPageEditor.js",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: String(enabled),
                            style: {
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid var(--border)',
                                borderRadius: 4,
                                fontSize: 14,
                                background: 'var(--bg)',
                                color: 'var(--text)'
                            },
                            onChange: (e)=>setEnabled(e.target.value === 'true'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "true",
                                    children: t('admin.common.enabled')
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/CustomPageEditor.js",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "false",
                                    children: t('admin.common.disabled')
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/CustomPageEditor.js",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/CustomPageEditor.js",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/CustomPageEditor.js",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 12
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                fontWeight: 600,
                                fontSize: 14,
                                display: 'block',
                                marginBottom: 4
                            },
                            children: t('admin.page.contentLabel')
                        }, void 0, false, {
                            fileName: "[project]/components/admin/CustomPageEditor.js",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            rows: 12,
                            value: content,
                            style: {
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid var(--border)',
                                borderRadius: 4,
                                fontSize: 13,
                                fontFamily: 'monospace',
                                background: 'var(--bg)',
                                color: 'var(--text)',
                                resize: 'vertical'
                            },
                            onChange: (e)=>setContent(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/admin/CustomPageEditor.js",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 12,
                                color: 'var(--text-light)',
                                marginTop: 2
                            },
                            children: t('admin.page.contentHelp')
                        }, void 0, false, {
                            fileName: "[project]/components/admin/CustomPageEditor.js",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/CustomPageEditor.js",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn-primary",
                    style: {
                        padding: '10px 24px',
                        width: '100%'
                    },
                    onClick: handleSave,
                    children: t('admin.common.save')
                }, void 0, false, {
                    fileName: "[project]/components/admin/CustomPageEditor.js",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/admin/CustomPageEditor.js",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/admin/CustomPageEditor.js",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(CustomPageEditor, "3niDvyGhFYwGKOG7nxFbCGn/kOs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = CustomPageEditor;
var _c;
__turbopack_context__.k.register(_c, "CustomPageEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/ChatManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DMButton",
    ()=>DMButton,
    "default",
    ()=>ChatManager,
    "useOpenPrivateChat",
    ()=>useOpenPrivateChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 私信管理器：会话列表 modal + 聊天窗口 modal + 未读 badge
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ConversationList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/ConversationList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat/ChatWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function DMButton() {
    _s();
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const [unread, setUnread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DMButton.useEffect": ()=>{
            if (!currentUser) {
                setUnread(0);
                return;
            }
            const update = {
                "DMButton.useEffect.update": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getConversations().then({
                        "DMButton.useEffect.update": (cs)=>setUnread((cs || []).reduce({
                                "DMButton.useEffect.update": (s, c)=>s + (c.unread_count || 0)
                            }["DMButton.useEffect.update"], 0))
                    }["DMButton.useEffect.update"]).catch({
                        "DMButton.useEffect.update": ()=>{}
                    }["DMButton.useEffect.update"]);
                }
            }["DMButton.useEffect.update"];
            update();
            const t = setInterval(update, 30000);
            return ({
                "DMButton.useEffect": ()=>clearInterval(t)
            })["DMButton.useEffect"];
        }
    }["DMButton.useEffect"], [
        currentUser
    ]);
    if (!currentUser) return null; // 未登录不显示私信按钮
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "nav-icon-btn",
        title: "私信",
        style: {
            position: 'relative',
            padding: '6px 8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-secondary)',
            borderRadius: 4,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        onClick: ()=>window.dispatchEvent(new CustomEvent('forumlify-open-messages')),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                name: "message",
                size: 20
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatManager.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            unread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: 'absolute',
                    top: -2,
                    right: -2,
                    background: '#ef4444',
                    color: '#fff',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    fontSize: 10,
                    fontWeight: 600,
                    minWidth: 18,
                    textAlign: 'center',
                    lineHeight: 1.4
                },
                children: unread > 99 ? '99+' : unread
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatManager.js",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/ChatManager.js",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(DMButton, "bYwQPr6P4bQdRNxlakxlfQDtvbg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = DMButton;
function ChatManager() {
    _s1();
    const [listOpen, setListOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chat, setChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // {conversationId, otherUserId, otherUsername}
    const [refreshKey, setRefreshKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const refreshList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatManager.useCallback[refreshList]": ()=>setRefreshKey({
                "ChatManager.useCallback[refreshList]": (k)=>k + 1
            }["ChatManager.useCallback[refreshList]"])
    }["ChatManager.useCallback[refreshList]"], []);
    // 监听事件：打开会话列表 / 打开聊天
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatManager.useEffect": ()=>{
            const handler = {
                "ChatManager.useEffect.handler": (e)=>{
                    setChat(e.detail);
                    setListOpen(false);
                }
            }["ChatManager.useEffect.handler"];
            const openList = {
                "ChatManager.useEffect.openList": ()=>setListOpen(true)
            }["ChatManager.useEffect.openList"];
            window.addEventListener('forumlify-open-chat', handler);
            window.addEventListener('forumlify-open-messages', openList);
            return ({
                "ChatManager.useEffect": ()=>{
                    window.removeEventListener('forumlify-open-chat', handler);
                    window.removeEventListener('forumlify-open-messages', openList);
                }
            })["ChatManager.useEffect"];
        }
    }["ChatManager.useEffect"], []);
    const openChat = (conversationId, otherUserId, otherUsername)=>{
        setChat({
            conversationId,
            otherUserId,
            otherUsername
        });
        setListOpen(false);
    };
    const closeChat = ()=>{
        setChat(null);
        refreshList();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            listOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ConversationList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onOpenChat: openChat,
                onClose: ()=>setListOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatManager.js",
                lineNumber: 84,
                columnNumber: 9
            }, this),
            chat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2f$ChatWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                conversationId: chat.conversationId,
                otherUserId: chat.otherUserId,
                otherUsername: chat.otherUsername,
                onClose: closeChat,
                onRefreshList: refreshList
            }, void 0, false, {
                fileName: "[project]/components/chat/ChatManager.js",
                lineNumber: 90,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat/ChatManager.js",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s1(ChatManager, "+ON+Bqpi0XCgx6CUhu2keq1oKR4=");
_c1 = ChatManager;
function useOpenPrivateChat() {
    _s2();
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const open = async (otherUserId, otherUsername)=>{
        if (!currentUser) {
            toast('请先登录', 'warning');
            return;
        }
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getOrCreateConversation(otherUserId);
            window.dispatchEvent(new CustomEvent('forumlify-open-chat', {
                detail: {
                    conversationId: result.id,
                    otherUserId,
                    otherUsername
                }
            }));
        } catch (err) {
            toast('打开私信失败：' + err.message, 'error');
        }
    };
    return open;
}
_s2(useOpenPrivateChat, "MsFdCNr+mLgLJsbzxF//3vgb2sA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
var _c, _c1;
__turbopack_context__.k.register(_c, "DMButton");
__turbopack_context__.k.register(_c1, "ChatManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/ChatWindow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 私信 - 聊天窗口（3 秒轮询新消息）
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function avatar(username) {
    return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username || 'U') + '&background=6366f1&color=fff&size=64';
}
function ChatWindow({ conversationId, otherUserId, otherUsername, onClose, onRefreshList }) {
    _s();
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatWindow.useCallback[load]": async (silent = false)=>{
            if (!silent) setMessages(null);
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getMessages(conversationId);
                setMessages(data || []);
            } catch  {
                if (!silent) setMessages([]);
            }
        }
    }["ChatWindow.useCallback[load]"], [
        conversationId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWindow.useEffect": ()=>{
            load();
        }
    }["ChatWindow.useEffect"], [
        load
    ]);
    // 3 秒轮询
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWindow.useEffect": ()=>{
            const t = setInterval({
                "ChatWindow.useEffect.t": ()=>load(true)
            }["ChatWindow.useEffect.t"], 3000);
            return ({
                "ChatWindow.useEffect": ()=>clearInterval(t)
            })["ChatWindow.useEffect"];
        }
    }["ChatWindow.useEffect"], [
        load
    ]);
    // 自动滚动到底部
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWindow.useEffect": ()=>{
            if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }["ChatWindow.useEffect"], [
        messages
    ]);
    const send = async ()=>{
        if (!content.trim()) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].sendMessage(conversationId, content.trim());
            setContent('');
            load();
            onRefreshList();
        } catch (err) {
            toast('发送失败：' + err.message, 'error');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal active",
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-content",
            style: {
                display: 'flex',
                flexDirection: 'column',
                height: '70vh',
                maxHeight: '70vh',
                padding: 0,
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '16px 20px',
                        borderBottom: '1px solid var(--border)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            id: "chatTitle",
                            style: {
                                fontWeight: 600,
                                fontSize: 16
                            },
                            children: otherUsername
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatWindow.js",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "close",
                            onClick: onClose,
                            style: {
                                cursor: 'pointer',
                                color: 'var(--text-light)',
                                lineHeight: 1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "close",
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ChatWindow.js",
                                lineNumber: 62,
                                columnNumber: 126
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatWindow.js",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/ChatWindow.js",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "chatMessages",
                    ref: containerRef,
                    style: {
                        flex: 1,
                        overflowY: 'auto',
                        padding: 16,
                        minHeight: 0
                    },
                    children: messages === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            color: '#94a3b8',
                            padding: '40px 0'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "spinner-sm"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ChatWindow.js",
                                lineNumber: 66,
                                columnNumber: 87
                            }, this),
                            "加载中..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/ChatWindow.js",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this) : messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            color: '#94a3b8',
                            padding: '40px 0'
                        },
                        children: "还没有消息，打个招呼吧 👋"
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ChatWindow.js",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this) : messages.map((m)=>{
                        const isMine = m.sender_id === currentUser?.id;
                        const time = m.created_at ? new Date(m.created_at).toLocaleString('zh-CN') : '';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: isMine ? 'flex-end' : 'flex-start',
                                marginBottom: 12
                            },
                            children: [
                                !isMine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: m.sender_avatar_url || avatar(m.sender_username),
                                    style: {
                                        width: 32,
                                        height: 32,
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        marginRight: 8,
                                        flexShrink: 0
                                    },
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ChatWindow.js",
                                    lineNumber: 76,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        maxWidth: '70%'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: isMine ? 'var(--primary)' : 'var(--surface)',
                                                color: isMine ? '#fff' : 'var(--text)',
                                                padding: '10px 14px',
                                                borderRadius: 12,
                                                border: isMine ? 'none' : '1px solid var(--border)',
                                                wordBreak: 'break-word'
                                            },
                                            children: m.content
                                        }, void 0, false, {
                                            fileName: "[project]/components/chat/ChatWindow.js",
                                            lineNumber: 79,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 11,
                                                color: 'var(--text-light)',
                                                marginTop: 4,
                                                textAlign: isMine ? 'right' : 'left'
                                            },
                                            children: [
                                                time,
                                                " ",
                                                isMine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "success",
                                                    size: 10,
                                                    "aria-label": m.is_read ? '已读' : '已发送'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/ChatWindow.js",
                                                    lineNumber: 89,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/chat/ChatWindow.js",
                                            lineNumber: 88,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/chat/ChatWindow.js",
                                    lineNumber: 78,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, m.id, true, {
                            fileName: "[project]/components/chat/ChatWindow.js",
                            lineNumber: 74,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/chat/ChatWindow.js",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: 8,
                        padding: '12px 16px',
                        borderTop: '1px solid var(--border)',
                        flexShrink: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            id: "chatInput",
                            placeholder: "输入消息...",
                            style: {
                                flex: 1,
                                padding: '8px 12px',
                                border: '1px solid var(--border)',
                                borderRadius: 6,
                                fontSize: 14,
                                background: 'var(--bg)',
                                color: 'var(--text)',
                                outline: 'none'
                            },
                            value: content,
                            onChange: (e)=>setContent(e.target.value),
                            onKeyDown: (e)=>{
                                if (e.key === 'Enter') send();
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatWindow.js",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-primary",
                            style: {
                                padding: '8px 16px'
                            },
                            onClick: send,
                            children: "发送"
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ChatWindow.js",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/ChatWindow.js",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/chat/ChatWindow.js",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chat/ChatWindow.js",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(ChatWindow, "+zy1PF7H5RxTyv+lIMr1OC0PQlQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = ChatWindow;
var _c;
__turbopack_context__.k.register(_c, "ChatWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chat/ConversationList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConversationList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 私信 - 会话列表
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function avatar(username) {
    return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username || 'U') + '&background=6366f1&color=fff&size=64';
}
function ConversationList({ onOpenChat, onClose }) {
    _s();
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const load = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].getConversations().then((data)=>setConversations(data || [])).catch(()=>setConversations([]));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(load, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal active",
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-content",
            style: {
                display: 'flex',
                flexDirection: 'column',
                height: '70vh',
                maxHeight: '70vh',
                padding: 0,
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '16px 20px',
                        borderBottom: '1px solid var(--border)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: 18,
                                margin: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "message",
                                    size: 18,
                                    style: {
                                        verticalAlign: -3,
                                        marginRight: 6
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ConversationList.js",
                                    lineNumber: 28,
                                    columnNumber: 51
                                }, this),
                                " 私信"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chat/ConversationList.js",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "close",
                            onClick: onClose,
                            style: {
                                cursor: 'pointer',
                                color: 'var(--text-light)',
                                lineHeight: 1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "close",
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ConversationList.js",
                                lineNumber: 29,
                                columnNumber: 126
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chat/ConversationList.js",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat/ConversationList.js",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "messageListContent",
                    style: {
                        flex: 1,
                        overflowY: 'auto',
                        padding: 0
                    },
                    children: conversations === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            color: '#94a3b8',
                            padding: '40px 0'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "spinner-sm"
                            }, void 0, false, {
                                fileName: "[project]/components/chat/ConversationList.js",
                                lineNumber: 33,
                                columnNumber: 87
                            }, this),
                            "加载中..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/chat/ConversationList.js",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this) : conversations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            color: '#94a3b8',
                            padding: '40px 0'
                        },
                        children: "暂无私信"
                    }, void 0, false, {
                        fileName: "[project]/components/chat/ConversationList.js",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this) : conversations.map((c)=>{
                        const unread = c.unread_count || 0;
                        const lastMsg = c.last_message || '暂无消息';
                        const time = c.last_message_time ? new Date(c.last_message_time).toLocaleString('zh-CN') : '';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "message-list-item",
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                                padding: '12px 16px',
                                borderBottom: '1px solid var(--border)',
                                cursor: 'pointer',
                                transition: 'background 0.15s'
                            },
                            onClick: ()=>onOpenChat(c.id, c.other_user_id, c.other_username),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: c.other_avatar_url || avatar(c.other_username),
                                    style: {
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        objectFit: 'cover'
                                    },
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/components/chat/ConversationList.js",
                                    lineNumber: 48,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        minWidth: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 600
                                                    },
                                                    children: c.other_username
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/ConversationList.js",
                                                    lineNumber: 51,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 12,
                                                        color: 'var(--text-light)'
                                                    },
                                                    children: time
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/ConversationList.js",
                                                    lineNumber: 52,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/chat/ConversationList.js",
                                            lineNumber: 50,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 13,
                                                        color: 'var(--text-secondary)',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        whiteSpace: 'nowrap',
                                                        maxWidth: 200
                                                    },
                                                    children: lastMsg
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/ConversationList.js",
                                                    lineNumber: 55,
                                                    columnNumber: 23
                                                }, this),
                                                unread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        background: '#ef4444',
                                                        color: '#fff',
                                                        borderRadius: '50%',
                                                        padding: '2px 8px',
                                                        fontSize: 11,
                                                        fontWeight: 600
                                                    },
                                                    children: unread
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chat/ConversationList.js",
                                                    lineNumber: 57,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/chat/ConversationList.js",
                                            lineNumber: 54,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/chat/ConversationList.js",
                                    lineNumber: 49,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, c.id, true, {
                            fileName: "[project]/components/chat/ConversationList.js",
                            lineNumber: 42,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/chat/ConversationList.js",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/chat/ConversationList.js",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chat/ConversationList.js",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(ConversationList, "DbtkCwYBl9Uu7u0pQcFLtL0LERY=");
_c = ConversationList;
var _c;
__turbopack_context__.k.register(_c, "ConversationList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API",
    ()=>API,
    "generateCaptcha",
    ()=>generateCaptcha,
    "getTheme",
    ()=>getTheme,
    "getToken",
    ()=>getToken,
    "setToken",
    ()=>setToken,
    "uploadImage",
    ()=>uploadImage
]);
// 前端 API 封装 (替代原 index.html 的 apiFetch + API 对象)
// 所有调用返回 JSON；HTTP 错误时抛出带 error 消息的 Error
const API_BASE_URL = '/api';
let token = null;
if ("TURBOPACK compile-time truthy", 1) {
    token = localStorage.getItem('forumlify-token') || null;
}
function getToken() {
    return token;
}
function setToken(t) {
    token = t;
    if (t) localStorage.setItem('forumlify-token', t);
    else localStorage.removeItem('forumlify-token');
}
async function apiFetch(path, options = {}) {
    const headers = {
        ...options.headers || {}
    };
    if (options.body && typeof options.body === 'string') {
        headers['Content-Type'] = 'application/json';
    }
    if (token) headers['Authorization'] = 'Bearer ' + token;
    const res = await fetch(API_BASE_URL + path, {
        ...options,
        headers
    });
    const data = await res.json().catch(()=>({}));
    if (!res.ok || data.error) {
        const err = new Error(data.error || '请求失败');
        err.status = res.status;
        throw err;
    }
    return data;
}
const API = {
    // 认证
    async login (email, password) {
        const data = await apiFetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        });
        if (data.token) setToken(data.token);
        return data;
    },
    // 服务端验证码（HMAC 签名挑战）
    getCaptcha () {
        return apiFetch('/captcha');
    },
    register (email, password, username, captcha) {
        return apiFetch('/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                username,
                captcha_id: captcha?.id,
                captcha_answer: captcha?.answer,
                captcha_sig: captcha?.sig
            })
        });
    },
    logout () {
        setToken(null);
    },
    getMe () {
        return apiFetch('/auth/me');
    },
    // 帖子
    getPosts (sort, userId, page = 1, limit = 20) {
        let q = '/posts?sort=' + (sort || 'latest') + '&page=' + page + '&limit=' + limit;
        if (userId) q += '&user_id=' + userId;
        return apiFetch(q);
    },
    getPost (postId) {
        return apiFetch('/posts/' + postId);
    },
    createPost (title, content, images, captcha) {
        return apiFetch('/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                content,
                images: images || [],
                captcha_id: captcha?.id,
                captcha_answer: captcha?.answer,
                captcha_sig: captcha?.sig
            })
        });
    },
    updatePost (postId, title, content, images) {
        return apiFetch('/posts/' + postId, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                content,
                images
            })
        });
    },
    togglePinPost (postId) {
        return apiFetch('/posts/' + postId + '/pin', {
            method: 'PUT'
        });
    },
    deletePost (postId) {
        return apiFetch('/posts/' + postId, {
            method: 'DELETE'
        });
    },
    // 回复
    getReplies (postId) {
        return apiFetch('/posts/' + postId + '/replies');
    },
    createReply (postId, content, captcha, replyToId) {
        return apiFetch('/posts/' + postId + '/replies', {
            method: 'POST',
            body: JSON.stringify({
                content,
                captcha_id: captcha?.id,
                captcha_answer: captcha?.answer,
                captcha_sig: captcha?.sig,
                reply_to_id: replyToId || null
            })
        });
    },
    deleteReply (replyId) {
        return apiFetch('/replies/' + replyId, {
            method: 'DELETE'
        });
    },
    // 用户管理
    getUsers () {
        return apiFetch('/users');
    },
    getUsersByUsername (username) {
        return apiFetch('/users?username=' + encodeURIComponent(username));
    },
    getUserProfile (username) {
        return apiFetch('/users/profile/' + encodeURIComponent(username));
    },
    updateUserRole (userId, role) {
        return apiFetch('/users/' + userId + '/role', {
            method: 'PUT',
            body: JSON.stringify({
                role
            })
        });
    },
    updateProfile (userId, username, bio, signature) {
        return apiFetch('/users/' + userId, {
            method: 'PUT',
            body: JSON.stringify({
                username,
                bio,
                signature
            })
        });
    },
    updateAvatar (userId, avatar_url) {
        return apiFetch('/users/' + userId + '/avatar', {
            method: 'PUT',
            body: JSON.stringify({
                avatar_url
            })
        });
    },
    updatePassword (userId, oldPassword, newPassword) {
        return apiFetch('/users/' + userId + '/password', {
            method: 'PUT',
            body: JSON.stringify({
                oldPassword,
                newPassword
            })
        });
    },
    updateEmail (userId, password, newEmail) {
        return apiFetch('/users/' + userId + '/email', {
            method: 'PUT',
            body: JSON.stringify({
                password,
                newEmail
            })
        });
    },
    // 举报
    getReports () {
        return apiFetch('/reports');
    },
    createReport (postId, reason) {
        return apiFetch('/reports', {
            method: 'POST',
            body: JSON.stringify({
                post_id: postId,
                reason
            })
        });
    },
    updateReport (reportId, status, note) {
        return apiFetch('/reports/' + reportId, {
            method: 'PUT',
            body: JSON.stringify({
                status,
                note
            })
        });
    },
    // 统计 + 设置 + 友链
    getStats () {
        return apiFetch('/stats');
    },
    getSettings () {
        return apiFetch('/settings');
    },
    updateSettings (forum_name) {
        return apiFetch('/settings', {
            method: 'PUT',
            body: JSON.stringify({
                forum_name
            })
        });
    },
    getLinks () {
        return apiFetch('/links');
    },
    addLink (title, url) {
        return apiFetch('/links', {
            method: 'POST',
            body: JSON.stringify({
                title,
                url
            })
        });
    },
    deleteLink (id) {
        return apiFetch('/links/' + id, {
            method: 'DELETE'
        });
    },
    // 事件日志
    getEventLogs () {
        return apiFetch('/event-logs');
    },
    logEvent (action) {
        return apiFetch('/event-logs', {
            method: 'POST',
            body: JSON.stringify({
                action
            })
        }).catch(()=>{});
    },
    // 私信
    getConversations () {
        return apiFetch('/conversations');
    },
    getOrCreateConversation (other_user_id) {
        return apiFetch('/conversations', {
            method: 'POST',
            body: JSON.stringify({
                other_user_id
            })
        });
    },
    getMessages (conversationId) {
        return apiFetch('/conversations/' + conversationId + '/messages');
    },
    sendMessage (conversationId, content) {
        return apiFetch('/conversations/' + conversationId + '/messages', {
            method: 'POST',
            body: JSON.stringify({
                content
            })
        });
    },
    markMessageRead (messageId) {
        return apiFetch('/messages/' + messageId + '/read', {
            method: 'PUT'
        });
    },
    // 自定义页面
    getCustomPages () {
        return apiFetch('/custom-pages');
    },
    getCustomPage (name) {
        return apiFetch('/custom-pages/' + name);
    },
    adminGetCustomPages () {
        return apiFetch('/admin/custom-pages');
    },
    adminCreateCustomPage (name, title, content) {
        return apiFetch('/admin/custom-pages', {
            method: 'POST',
            body: JSON.stringify({
                name,
                title,
                content
            })
        });
    },
    adminUpdateCustomPage (id, title, content, enabled) {
        return apiFetch('/admin/custom-pages/' + id, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                content,
                enabled
            })
        });
    },
    adminDeleteCustomPage (id) {
        return apiFetch('/admin/custom-pages/' + id, {
            method: 'DELETE'
        });
    },
    // 自定义 CSS
    uploadCustomCss (file) {
        const fd = new FormData();
        fd.append('file', file);
        const headers = {};
        if (token) headers['Authorization'] = 'Bearer ' + token;
        return fetch('/api/admin/custom-css', {
            method: 'POST',
            body: fd,
            headers
        }).then(async (res)=>{
            const data = await res.json().catch(()=>({}));
            if (!res.ok || data.error) throw new Error(data.error || '上传失败');
            return data;
        });
    },
    deleteCustomCss () {
        return apiFetch('/admin/custom-css', {
            method: 'DELETE'
        });
    },
    // 通知
    getNotifications () {
        return apiFetch('/notifications');
    },
    markNotificationRead (id) {
        return apiFetch('/notifications/' + id + '/read', {
            method: 'PUT'
        });
    },
    markAllNotificationsRead () {
        return apiFetch('/notifications/read-all', {
            method: 'PUT'
        });
    },
    // 恢复码
    generateRecoveryCodes () {
        return apiFetch('/auth/recovery-codes/generate', {
            method: 'POST'
        });
    },
    getRecoveryCodeCount () {
        return apiFetch('/auth/recovery-codes/count');
    },
    resetPassword (email, recoveryCode, newPassword) {
        return apiFetch('/auth/reset-password', {
            method: 'POST',
            body: JSON.stringify({
                email,
                recoveryCode,
                newPassword
            })
        });
    }
};
async function uploadImage(file) {
    const fd = new FormData();
    fd.append('file', file);
    const headers = {};
    if (token) headers['Authorization'] = 'Bearer ' + token;
    const res = await fetch('/api/upload', {
        method: 'POST',
        body: fd,
        headers
    });
    const data = await res.json().catch(()=>({}));
    if (!res.ok || data.error) throw new Error(data.error || '上传失败');
    return data.url;
}
function generateCaptcha() {
    let a = Math.floor(Math.random() * 9) + 1;
    let b = Math.floor(Math.random() * 9) + 1;
    let op = [
        '+',
        '-'
    ][Math.floor(Math.random() * 2)];
    if (op === '-' && a < b) {
        const t = a;
        a = b;
        b = t;
    }
    return {
        question: a + ' ' + op + ' ' + b + ' = ?',
        answer: op === '+' ? a + b : a - b
    };
}
function getTheme() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const saved = localStorage.getItem('forumlify-theme');
    if (saved) return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/markdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderMarkdown",
    ()=>renderMarkdown
]);
// Markdown 渲染工具（对齐上游 marked 行为 + XSS 清理）
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/marked/lib/marked.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanitize$2d$html$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanitize-html/index.js [app-client] (ecmascript)");
;
;
// 允许的 markdown 元素/属性白名单（对齐上游安全策略：禁止 script/iframe/style/事件属性）
const SANITIZE_OPTS = {
    allowedTags: [
        'p',
        'br',
        'hr',
        'strong',
        'em',
        'b',
        'i',
        'u',
        's',
        'del',
        'ins',
        'a',
        'img',
        'code',
        'pre',
        'blockquote',
        'ul',
        'ol',
        'li',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'span',
        'div'
    ],
    allowedAttributes: {
        a: [
            'href',
            'target',
            'rel',
            'title'
        ],
        img: [
            'src',
            'alt',
            'title',
            'width',
            'height'
        ],
        code: [
            'class'
        ],
        pre: [
            'class'
        ],
        span: [
            'class'
        ],
        div: [
            'class'
        ],
        th: [
            'align',
            'colspan',
            'rowspan'
        ],
        td: [
            'align',
            'colspan',
            'rowspan'
        ],
        table: [
            'align',
            'border',
            'cellpadding',
            'cellspacing'
        ]
    },
    // URL 白名单：仅 http/https/相对路径，图片同样限制，禁止 javascript: 等
    allowedSchemes: [
        'http',
        'https',
        'mailto'
    ],
    allowedSchemesByTag: {
        img: [
            'http',
            'https'
        ]
    },
    allowedSchemesAppliedToAttributes: [
        'href',
        'src',
        'cite'
    ],
    allowProtocolRelative: false,
    // 事件属性（on*）默认被 sanitize-html 移除，无需额外配置
    disallowedTagsMode: 'discard'
};
function renderMarkdown(text) {
    if (!text) return '';
    try {
        const raw = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marked"].parse(text);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanitize$2d$html$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(raw, SANITIZE_OPTS);
    } catch  {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanitize$2d$html$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(text.replace(/\n/g, '<br>'), SANITIZE_OPTS);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_09auhxq._.js.map