module.exports = [
"[externals]/postcss [external] (postcss, cjs, [project]/node_modules/postcss)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("postcss-9745a0d11e3197ae", () => require("postcss-9745a0d11e3197ae"));

module.exports = mod;
}),
"[project]/node_modules/dayjs/dayjs.min.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(t, e) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = e() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(t) {
            var e = [
                "th",
                "st",
                "nd",
                "rd"
            ], n = t % 100;
            return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
        }
    }, m = function(t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    }, v = {
        s: m,
        z: function(t) {
            var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
            return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
        },
        m: function t(e, n) {
            if (e.date() < n.date()) return -t(n, e);
            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, c), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), c);
            return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function(t) {
            return ({
                M: c,
                y: h,
                w: o,
                d: a,
                D: d,
                h: u,
                m: s,
                s: i,
                ms: r,
                Q: f
            })[t] || String(t || "").toLowerCase().replace(/s$/, "");
        },
        u: function(t) {
            return void 0 === t;
        }
    }, g = "en", D = {};
    D[g] = M;
    var p = "$isDayjsObject", S = function(t) {
        return t instanceof _ || !(!t || !t[p]);
    }, w = function t(e, n, r) {
        var i;
        if (!e) return g;
        if ("string" == typeof e) {
            var s = e.toLowerCase();
            D[s] && (i = s), n && (D[s] = n, i = s);
            var u = e.split("-");
            if (!i && u.length > 1) return t(u[0]);
        } else {
            var a = e.name;
            D[a] = e, i = a;
        }
        return !r && i && (g = i), i || !r && g;
    }, O = function(t, e) {
        if (S(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return n.date = t, n.args = arguments, new _(n);
    }, b = v;
    b.l = w, b.i = S, b.w = function(t, e) {
        return O(t, {
            locale: e.$L,
            utc: e.$u,
            x: e.$x,
            $offset: e.$offset
        });
    };
    var _ = function() {
        function M(t) {
            this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;
        }
        var m = M.prototype;
        return m.parse = function(t) {
            this.$d = function(t) {
                var e = t.date, n = t.utc;
                if (null === e) return new Date(NaN);
                if (b.u(e)) return new Date;
                if (e instanceof Date) return new Date(e);
                if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match($);
                    if (r) {
                        var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                    }
                }
                return new Date(e);
            }(t), this.init();
        }, m.init = function() {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, m.$utils = function() {
            return b;
        }, m.isValid = function() {
            return !(this.$d.toString() === l);
        }, m.isSame = function(t, e) {
            var n = O(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
        }, m.isAfter = function(t, e) {
            return O(t) < this.startOf(e);
        }, m.isBefore = function(t, e) {
            return this.endOf(e) < O(t);
        }, m.$g = function(t, e, n) {
            return b.u(t) ? this[e] : this.set(n, t);
        }, m.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
        }, m.valueOf = function() {
            return this.$d.getTime();
        }, m.startOf = function(t, e) {
            var n = this, r = !!b.u(e) || e, f = b.p(t), l = function(t, e) {
                var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                return r ? i : i.endOf(a);
            }, $ = function(t, e) {
                return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
                    0,
                    0,
                    0,
                    0
                ] : [
                    23,
                    59,
                    59,
                    999
                ]).slice(e)), n);
            }, y = this.$W, M = this.$M, m = this.$D, v = "set" + (this.$u ? "UTC" : "");
            switch(f){
                case h:
                    return r ? l(1, 0) : l(31, 11);
                case c:
                    return r ? l(1, M) : l(0, M + 1);
                case o:
                    var g = this.$locale().weekStart || 0, D = (y < g ? y + 7 : y) - g;
                    return l(r ? m - D : m + (6 - D), M);
                case a:
                case d:
                    return $(v + "Hours", 0);
                case u:
                    return $(v + "Minutes", 1);
                case s:
                    return $(v + "Seconds", 2);
                case i:
                    return $(v + "Milliseconds", 3);
                default:
                    return this.clone();
            }
        }, m.endOf = function(t) {
            return this.startOf(t, !1);
        }, m.$set = function(t, e) {
            var n, o = b.p(t), f = "set" + (this.$u ? "UTC" : ""), l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o], $ = o === a ? this.$D + (e - this.$W) : e;
            if (o === c || o === h) {
                var y = this.clone().set(d, 1);
                y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
            } else l && this.$d[l]($);
            return this.init(), this;
        }, m.set = function(t, e) {
            return this.clone().$set(t, e);
        }, m.get = function(t) {
            return this[b.p(t)]();
        }, m.add = function(r, f) {
            var d, l = this;
            r = Number(r);
            var $ = b.p(f), y = function(t) {
                var e = O(l);
                return b.w(e.date(e.date() + Math.round(t * r)), l);
            };
            if ($ === c) return this.set(c, this.$M + r);
            if ($ === h) return this.set(h, this.$y + r);
            if ($ === a) return y(1);
            if ($ === o) return y(7);
            var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1, m = this.$d.getTime() + r * M;
            return b.w(m, this);
        }, m.subtract = function(t, e) {
            return this.add(-1 * t, e);
        }, m.format = function(t) {
            var e = this, n = this.$locale();
            if (!this.isValid()) return n.invalidDate || l;
            var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = b.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, c = n.months, f = n.meridiem, h = function(t, n, i, s) {
                return t && (t[n] || t(e, r)) || i[n].slice(0, s);
            }, d = function(t) {
                return b.s(s % 12 || 12, t, "0");
            }, $ = f || function(t, e, n) {
                var r = t < 12 ? "AM" : "PM";
                return n ? r.toLowerCase() : r;
            };
            return r.replace(y, function(t, r) {
                return r || function(t) {
                    switch(t){
                        case "YY":
                            return String(e.$y).slice(-2);
                        case "YYYY":
                            return b.s(e.$y, 4, "0");
                        case "M":
                            return a + 1;
                        case "MM":
                            return b.s(a + 1, 2, "0");
                        case "MMM":
                            return h(n.monthsShort, a, c, 3);
                        case "MMMM":
                            return h(c, a);
                        case "D":
                            return e.$D;
                        case "DD":
                            return b.s(e.$D, 2, "0");
                        case "d":
                            return String(e.$W);
                        case "dd":
                            return h(n.weekdaysMin, e.$W, o, 2);
                        case "ddd":
                            return h(n.weekdaysShort, e.$W, o, 3);
                        case "dddd":
                            return o[e.$W];
                        case "H":
                            return String(s);
                        case "HH":
                            return b.s(s, 2, "0");
                        case "h":
                            return d(1);
                        case "hh":
                            return d(2);
                        case "a":
                            return $(s, u, !0);
                        case "A":
                            return $(s, u, !1);
                        case "m":
                            return String(u);
                        case "mm":
                            return b.s(u, 2, "0");
                        case "s":
                            return String(e.$s);
                        case "ss":
                            return b.s(e.$s, 2, "0");
                        case "SSS":
                            return b.s(e.$ms, 3, "0");
                        case "Z":
                            return i;
                    }
                    return null;
                }(t) || i.replace(":", "");
            });
        }, m.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m.diff = function(r, d, l) {
            var $, y = this, M = b.p(d), m = O(r), v = (m.utcOffset() - this.utcOffset()) * e, g = this - m, D = function() {
                return b.m(y, m);
            };
            switch(M){
                case h:
                    $ = D() / 12;
                    break;
                case c:
                    $ = D();
                    break;
                case f:
                    $ = D() / 3;
                    break;
                case o:
                    $ = (g - v) / 6048e5;
                    break;
                case a:
                    $ = (g - v) / 864e5;
                    break;
                case u:
                    $ = g / n;
                    break;
                case s:
                    $ = g / e;
                    break;
                case i:
                    $ = g / t;
                    break;
                default:
                    $ = g;
            }
            return l ? $ : b.a($);
        }, m.daysInMonth = function() {
            return this.endOf(c).$D;
        }, m.$locale = function() {
            return D[this.$L];
        }, m.locale = function(t, e) {
            if (!t) return this.$L;
            var n = this.clone(), r = w(t, e, !0);
            return r && (n.$L = r), n;
        }, m.clone = function() {
            return b.w(this.$d, this);
        }, m.toDate = function() {
            return new Date(this.valueOf());
        }, m.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
        }, m.toISOString = function() {
            return this.$d.toISOString();
        }, m.toString = function() {
            return this.$d.toUTCString();
        }, M;
    }(), Y = _.prototype;
    return O.prototype = Y, [
        [
            "$ms",
            r
        ],
        [
            "$s",
            i
        ],
        [
            "$m",
            s
        ],
        [
            "$H",
            u
        ],
        [
            "$W",
            a
        ],
        [
            "$M",
            c
        ],
        [
            "$y",
            h
        ],
        [
            "$D",
            d
        ]
    ].forEach(function(t) {
        Y[t[1]] = function(e) {
            return this.$g(e, t[0], t[1]);
        };
    }), O.extend = function(t, e) {
        return t.$i || (t(e, _, O), t.$i = !0), O;
    }, O.locale = w, O.isDayjs = S, O.unix = function(t) {
        return O(1e3 * t);
    }, O.en = D[g], O.Ls = D, O.p = {}, O;
});
}),
"[project]/node_modules/deepmerge/dist/cjs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === 'object';
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function getMergeFunction(key, options) {
    if (!options.customMerge) {
        return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
}
function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_) {
        return false;
    }
}
// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
     && Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
    ;
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
    }
    getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
            return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
    } else {
        return mergeObject(target, source, options);
    }
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
        throw new Error('first argument should be an array');
    }
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;
}),
"[project]/node_modules/dom-serializer/dist/foreign-names.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Mixed-case SVG and MathML element names recognized in foreign content.
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */ __turbopack_context__.s([
    "attributeNames",
    ()=>attributeNames,
    "elementNames",
    ()=>elementNames
]);
const elementNames = new Map("altGlyph altGlyphDef altGlyphItem animateColor animateMotion animateTransform clipPath feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence foreignObject glyphRef linearGradient radialGradient textPath".split(" ").map((name)=>[
        name.toLowerCase(),
        name
    ]));
const attributeNames = new Map("definitionURL attributeName attributeType baseFrequency baseProfile calcMode clipPathUnits diffuseConstant edgeMode filterUnits glyphRef gradientTransform gradientUnits kernelMatrix kernelUnitLength keyPoints keySplines keyTimes lengthAdjust limitingConeAngle markerHeight markerUnits markerWidth maskContentUnits maskUnits numOctaves pathLength patternContentUnits patternTransform patternUnits pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits refX refY repeatCount repeatDur requiredExtensions requiredFeatures specularConstant specularExponent spreadMethod startOffset stdDeviation stitchTiles surfaceScale systemLanguage tableValues targetX targetY textLength viewBox viewTarget xChannelSelector yChannelSelector zoomAndPan".split(" ").map((name)=>[
        name.toLowerCase(),
        name
    ]));
}),
"[project]/node_modules/dom-serializer/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "render",
    ()=>render
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$escape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/entities/dist/escape.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dom$2d$serializer$2f$dist$2f$foreign$2d$names$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dom-serializer/dist/foreign-names.js [app-ssr] (ecmascript)");
;
;
;
// ── Constants ────────────────────────────────────────────────────────
/** Elements whose text content is never entity-encoded. */ const unencodedElements = new Set("style script xmp iframe noembed noframes plaintext noscript".split(" "));
/** HTML void elements — they cannot have children. */ const voidElements = new Set("area base basefont br col command embed frame hr img input isindex keygen link meta param source track wbr".split(" "));
/** Elements that switch the parser into foreign (XML-like) mode. */ const foreignElements = new Set([
    "svg",
    "math"
]);
/**
 * Foreign-mode integration points: children of these elements are parsed
 * as HTML again, not as foreign content.
 */ const foreignModeIntegrationPoints = new Set("mi mo mn ms mtext annotation-xml foreignObject desc title".split(" "));
function render(node, options = {}) {
    const nodes = "length" in node ? node : [
        node
    ];
    /*
     * `xmlMode` is threaded as a separate argument through the internal
     * functions so that foreign-mode transitions (svg/mathml ↔ html) can
     * adjust it without copying the options object on every element.
     */ const xmlMode = options.xmlMode ?? false;
    let output = "";
    // eslint-disable-next-line unicorn/no-for-loop
    for(let index = 0; index < nodes.length; index++){
        output += renderNode(nodes[index], options, xmlMode);
    }
    return output;
}
const __TURBOPACK__default__export__ = render;
// ── Internal rendering ───────────────────────────────────────────────
/**
 * Render an array of child nodes (skips the single-node wrapping in `render`).
 * @param children The child nodes to render.
 * @param options The serialization options.
 * @param xmlMode The XML mode to use.
 */ function renderChildren(children, options, xmlMode) {
    let output = "";
    // eslint-disable-next-line unicorn/no-for-loop
    for(let index = 0; index < children.length; index++){
        output += renderNode(children[index], options, xmlMode);
    }
    return output;
}
function renderNode(node, options, xmlMode) {
    switch(node.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"]:
            {
                return renderChildren(node.children, options, xmlMode);
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Directive"]:
            {
                return `<${node.data}>`;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Comment"]:
            {
                return `<!--${node.data}-->`;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CDATA"]:
            {
                return `<![CDATA[${node.children[0].data}]]>`;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Script"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Style"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tag"]:
            {
                return renderTag(node, options, xmlMode);
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"]:
            {
                const element = node;
                const data = element.data || "";
                /*
             * Skip encoding when entities weren't decoded on input, or when
             * inside a raw-text element (script, style, etc.) in HTML mode.
             */ if ((options.encodeEntities ?? options.decodeEntities) !== false && !(!xmlMode && element.parent && unencodedElements.has(element.parent.name))) {
                    // `xmlMode: "foreign"` is truthy
                    return xmlMode || options.encodeEntities !== "utf8" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$escape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeXML"])(data) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$escape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeText"])(data);
                }
                return data;
            }
    }
}
function renderTag(element, options, xmlMode) {
    if (xmlMode === "foreign") {
        // Correct lowercase element names back to their canonical mixed-case form
        element.name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dom$2d$serializer$2f$dist$2f$foreign$2d$names$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["elementNames"].get(element.name) ?? element.name;
        // Integration points exit foreign mode: their children are HTML
        if (element.parent && foreignModeIntegrationPoints.has(element.parent.name)) {
            xmlMode = false;
        }
    }
    if (!xmlMode && foreignElements.has(element.name)) {
        xmlMode = "foreign";
    }
    const { name, children } = element;
    // Cache the void-element check — used for both self-closing and closing-tag logic
    const isVoid = !xmlMode && voidElements.has(name);
    let tag = `<${name}${formatAttributes(element.attribs, options, xmlMode)}`;
    if (children.length === 0 && (xmlMode ? options.selfClosingTags !== false : options.selfClosingTags && isVoid)) {
        // XML: `<br/>`, HTML: `<br />`
        tag += xmlMode ? "/>" : " />";
    } else {
        tag += ">";
        if (children.length > 0) {
            tag += renderChildren(children, options, xmlMode);
        }
        if (!isVoid) {
            tag += `</${name}>`;
        }
    }
    return tag;
}
// ── Attribute formatting ─────────────────────────────────────────────
function replaceQuotes(value) {
    return value.replaceAll('"', "&quot;");
}
/**
 * Serialize an element's attribute map to a string.
 *
 * Returns a string with a leading space before each attribute, or an
 * empty string if there are no attributes. This convention lets the
 * caller unconditionally concatenate the result onto the tag name.
 * @param attributes
 * @param options
 * @param xmlMode
 */ function formatAttributes(attributes, options, xmlMode) {
    if (!attributes) return "";
    /*
     * Pick the right encoder:
     *  - Encoding disabled → only escape double-quotes (for valid attributes)
     *  - XML / non-utf8    → full numeric entity encoding (encodeXML)
     *  - HTML + utf8       → minimal escaping (escapeAttribute)
     */ const encode = (options.encodeEntities ?? options.decodeEntities) === false ? replaceQuotes : xmlMode || options.encodeEntities !== "utf8" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$escape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeXML"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$escape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeAttribute"];
    const isForeign = xmlMode === "foreign";
    const showEmpty = !!(options.emptyAttrs ?? xmlMode);
    let result = "";
    for(const key in attributes){
        if (!Object.hasOwn(attributes, key)) continue;
        const value = attributes[key];
        const k = isForeign ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dom$2d$serializer$2f$dist$2f$foreign$2d$names$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attributeNames"].get(key) ?? key : key;
        result += !showEmpty && (value == null || value === "") ? ` ${k}` : ` ${k}="${encode(value == null ? "" : String(value))}"`;
    }
    return result;
}
}),
"[project]/node_modules/domelementtype/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Types of elements found in htmlparser2's DOM */ __turbopack_context__.s([
    "CDATA",
    ()=>CDATA,
    "Comment",
    ()=>Comment,
    "Directive",
    ()=>Directive,
    "Doctype",
    ()=>Doctype,
    "ElementType",
    ()=>ElementType,
    "Root",
    ()=>Root,
    "Script",
    ()=>Script,
    "Style",
    ()=>Style,
    "Tag",
    ()=>Tag,
    "Text",
    ()=>Text,
    "isTag",
    ()=>isTag
]);
var ElementType;
(function(ElementType) {
    /** Type for the root element of a document */ ElementType["Root"] = "root";
    /** Type for Text */ ElementType["Text"] = "text";
    /** Type for <? ... ?> */ ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */ ElementType["Comment"] = "comment";
    /** Type for <script> tags */ ElementType["Script"] = "script";
    /** Type for <style> tags */ ElementType["Style"] = "style";
    /** Type for Any tag */ ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */ ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */ ElementType["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
function isTag(element) {
    return element.type === ElementType.Tag || element.type === ElementType.Script || element.type === ElementType.Style;
}
const Root = ElementType.Root;
const Text = ElementType.Text;
const Directive = ElementType.Directive;
const Comment = ElementType.Comment;
const Script = ElementType.Script;
const Style = ElementType.Style;
const Tag = ElementType.Tag;
const CDATA = ElementType.CDATA;
const Doctype = ElementType.Doctype;
}),
"[project]/node_modules/domhandler/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DomHandler",
    ()=>DomHandler,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/dist/node.js [app-ssr] (ecmascript)");
;
;
;
// Default options
const defaultOptions = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
};
class DomHandler {
    /** The elements of the DOM */ dom = [];
    /** The root element for the DOM */ root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Document"](this.dom);
    /** Called once parsing has completed. */ callback;
    /** Settings for the handler. */ options;
    /** Callback whenever a tag is closed. */ elementCB;
    /** Indicated whether parsing has been completed. */ done = false;
    /** Stack of open tags. */ tagStack = [
        this.root
    ];
    /** A data node that is still being written to. */ lastNode = null;
    /** Reference to the parser instance. Used for location information. */ parser = null;
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */ constructor(callback, options, elementCB){
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOptions;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback ?? null;
        this.options = options ?? defaultOptions;
        this.elementCB = elementCB ?? null;
    }
    onparserinit(parser) {
        this.parser = parser;
    }
    // Resets the handler back to starting state
    onreset() {
        this.dom = [];
        this.root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Document"](this.dom);
        this.done = false;
        this.tagStack = [
            this.root
        ];
        this.lastNode = null;
        this.parser = null;
    }
    // Signals the handler that parsing is done
    onend() {
        if (this.done) return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    }
    onerror(error) {
        this.handleCallback(error);
    }
    onclosetag() {
        this.lastNode = null;
        const element = this.tagStack.pop();
        if (this.options.withEndIndices && this.parser) {
            element.endIndex = this.parser.endIndex;
        }
        if (this.elementCB) this.elementCB(element);
    }
    onopentag(name, attribs) {
        const type = this.options.xmlMode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Tag : undefined;
        const element = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Element"](name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    }
    ontext(data) {
        const { lastNode } = this;
        if (lastNode && lastNode.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Text) {
            lastNode.data += data;
            if (this.options.withEndIndices && this.parser) {
                lastNode.endIndex = this.parser.endIndex;
            }
        } else {
            const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"](data);
            this.addNode(node);
            this.lastNode = node;
        }
    }
    oncomment(data) {
        if (this.lastNode && this.lastNode.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Comment) {
            this.lastNode.data += data;
            return;
        }
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Comment"](data);
        this.addNode(node);
        this.lastNode = node;
    }
    oncommentend() {
        this.lastNode = null;
    }
    oncdatastart() {
        const text = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"]("");
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CDATA"]([
            text
        ]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    }
    oncdataend() {
        this.lastNode = null;
    }
    onprocessinginstruction(name, data) {
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProcessingInstruction"](name, data);
        this.addNode(node);
    }
    handleCallback(error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        } else if (error) {
            throw error;
        }
    }
    addNode(node) {
        const parent = this.tagStack[this.tagStack.length - 1];
        const previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices && this.parser) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices && this.parser) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    }
}
const __TURBOPACK__default__export__ = DomHandler;
}),
"[project]/node_modules/domhandler/dist/node.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CDATA",
    ()=>CDATA,
    "Comment",
    ()=>Comment,
    "DataNode",
    ()=>DataNode,
    "Document",
    ()=>Document,
    "Element",
    ()=>Element,
    "Node",
    ()=>Node,
    "NodeWithChildren",
    ()=>NodeWithChildren,
    "ProcessingInstruction",
    ()=>ProcessingInstruction,
    "Text",
    ()=>Text,
    "cloneNode",
    ()=>cloneNode,
    "hasChildren",
    ()=>hasChildren,
    "isCDATA",
    ()=>isCDATA,
    "isComment",
    ()=>isComment,
    "isDirective",
    ()=>isDirective,
    "isDocument",
    ()=>isDocument,
    "isTag",
    ()=>isTag,
    "isText",
    ()=>isText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/dist/index.js [app-ssr] (ecmascript)");
;
class Node {
    /** Parent of the node */ parent = null;
    /** Previous sibling */ prev = null;
    /** Next sibling */ next = null;
    /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */ startIndex = null;
    /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */ endIndex = null;
    // Read-write aliases for properties
    /**
     * Same as {@link parent}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get parentNode() {
        return this.parent;
    }
    set parentNode(parent) {
        this.parent = parent;
    }
    /**
     * Same as {@link prev}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get previousSibling() {
        return this.prev;
    }
    set previousSibling(previous) {
        this.prev = previous;
    }
    /**
     * Same as {@link next}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get nextSibling() {
        return this.next;
    }
    set nextSibling(next) {
        this.next = next;
    }
    /**
     * Clone this node, and optionally its children.
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */ cloneNode(recursive = false) {
        return cloneNode(this, recursive);
    }
}
class DataNode extends Node {
    data;
    /**
     * @param data The content of the data node
     */ constructor(data){
        super();
        this.data = data;
    }
    /**
     * Same as {@link data}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get nodeValue() {
        return this.data;
    }
    set nodeValue(data) {
        this.data = data;
    }
}
class Text extends DataNode {
    type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Text;
    get nodeType() {
        return 3;
    }
}
class Comment extends DataNode {
    type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Comment;
    get nodeType() {
        return 8;
    }
}
class ProcessingInstruction extends DataNode {
    type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Directive;
    name;
    constructor(name, data){
        super(data);
        this.name = name;
    }
    get nodeType() {
        return 1;
    }
    /** If this is a doctype, the document type name (parse5 only). */ "x-name";
    /** If this is a doctype, the document type public identifier (parse5 only). */ "x-publicId";
    /** If this is a doctype, the document type system identifier (parse5 only). */ "x-systemId";
}
class NodeWithChildren extends Node {
    children;
    /**
     * @param children Children of the node. Only certain node types can have children.
     */ constructor(children){
        super();
        this.children = children;
    }
    // Aliases
    /** First child of the node. */ get firstChild() {
        return this.children[0] ?? null;
    }
    /** Last child of the node. */ get lastChild() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    }
    /**
     * Same as {@link children}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get childNodes() {
        return this.children;
    }
    set childNodes(children) {
        this.children = children;
    }
}
class CDATA extends NodeWithChildren {
    type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].CDATA;
    get nodeType() {
        return 4;
    }
}
class Document extends NodeWithChildren {
    type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Root;
    get nodeType() {
        return 9;
    }
}
class Element extends NodeWithChildren {
    name;
    attribs;
    type;
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     * @param type Node type used for the new node instance.
     */ constructor(name, attribs, children = [], type = name === "script" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Script : name === "style" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Style : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Tag){
        super(children);
        this.name = name;
        this.attribs = attribs;
        this.type = type;
    }
    get nodeType() {
        return 1;
    }
    // DOM Level 1 aliases
    /**
     * Same as {@link name}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get tagName() {
        return this.name;
    }
    set tagName(name) {
        this.name = name;
    }
    get attributes() {
        return Object.keys(this.attribs).map((name)=>({
                name,
                value: this.attribs[name],
                namespace: this["x-attribsNamespace"]?.[name],
                prefix: this["x-attribsPrefix"]?.[name]
            }));
    }
    /** Element namespace (parse5 only). */ namespace;
    /** Element attribute namespaces (parse5 only). */ "x-attribsNamespace";
    /** Element attribute namespace-related prefixes (parse5 only). */ "x-attribsPrefix";
}
function isTag(node) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(node);
}
function isCDATA(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].CDATA;
}
function isText(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Text;
}
function isComment(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Comment;
}
function isDirective(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Directive;
}
function isDocument(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Root;
}
function hasChildren(node) {
    return Object.hasOwn(node, "children");
}
function cloneNode(node, recursive = false) {
    let result;
    if (isText(node)) {
        result = new Text(node.data);
    } else if (isComment(node)) {
        result = new Comment(node.data);
    } else if (isTag(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Element(node.name, {
            ...node.attribs
        }, children);
        for (const child of children){
            child.parent = clone;
        }
        if (node.namespace != null) {
            clone.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone["x-attribsNamespace"] = {
                ...node["x-attribsNamespace"]
            };
        }
        if (node["x-attribsPrefix"]) {
            clone["x-attribsPrefix"] = {
                ...node["x-attribsPrefix"]
            };
        }
        result = clone;
    } else if (isCDATA(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new CDATA(children);
        for (const child of children){
            child.parent = clone;
        }
        result = clone;
    } else if (isDocument(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Document(children);
        for (const child of children){
            child.parent = clone;
        }
        if (node["x-mode"]) {
            clone["x-mode"] = node["x-mode"];
        }
        result = clone;
    } else if (isDirective(node)) {
        const instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    } else {
        throw new Error(`Not implemented yet: ${node.type}`);
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
/**
 * Clone a list of child nodes.
 * @param childs The child nodes to clone.
 * @returns A list of cloned child nodes.
 */ function cloneChildren(childs) {
    const children = childs.map((child)=>cloneNode(child, true));
    for(let index = 1; index < children.length; index++){
        children[index].prev = children[index - 1];
        children[index - 1].next = children[index];
    }
    return children;
}
}),
"[project]/node_modules/domutils/dist/feeds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFeed",
    ()=>getFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/dist/legacy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/dist/stringify.js [app-ssr] (ecmascript)");
;
;
function getFeed(document) {
    const feedRoot = getOneElement(isValidFeed, document);
    return feedRoot ? feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot) : null;
}
/**
 * Parse an Atom feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */ function getAtomFeed(feedRoot) {
    const childs = feedRoot.children;
    const feed = {
        type: "atom",
        items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementsByTagName"])("entry", childs).map((item)=>{
            const { children } = item;
            const entry = {
                media: getMediaElements(children)
            };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            const href = getOneElement("link", children)?.attribs["href"];
            if (href) {
                entry.link = href;
            }
            const description = fetch("summary", children) || fetch("content", children);
            if (description) {
                entry.description = description;
            }
            const pubDate = fetch("updated", children);
            if (pubDate) {
                entry.pubDate = new Date(pubDate);
            }
            return entry;
        })
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    const href = getOneElement("link", childs)?.attribs["href"];
    if (href) {
        feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    const updated = fetch("updated", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
/**
 * Parse a RSS feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */ function getRssFeed(feedRoot) {
    const childs = getOneElement("channel", feedRoot.children)?.children ?? [];
    const feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementsByTagName"])("item", feedRoot.children).map((item)=>{
            const { children } = item;
            const entry = {
                media: getMediaElements(children)
            };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            const pubDate = fetch("pubDate", children) || fetch("dc:date", children);
            if (pubDate) entry.pubDate = new Date(pubDate);
            return entry;
        })
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    const updated = fetch("lastBuildDate", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
const MEDIA_KEYS_STRING = [
    "url",
    "type",
    "lang"
];
const MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width"
];
/**
 * Get all media elements of a feed item.
 *
 * @param where Nodes to search in.
 * @returns Media elements.
 */ function getMediaElements(where) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementsByTagName"])("media:content", where).map((element)=>{
        const { attribs } = element;
        const media = {
            medium: attribs["medium"],
            isDefault: !!attribs["isDefault"]
        };
        for (const attrib of MEDIA_KEYS_STRING){
            if (attribs[attrib]) {
                media[attrib] = attribs[attrib];
            }
        }
        for (const attrib of MEDIA_KEYS_INT){
            if (attribs[attrib]) {
                media[attrib] = Number.parseInt(attribs[attrib], 10);
            }
        }
        if (attribs["expression"]) {
            media.expression = attribs["expression"];
        }
        return media;
    });
}
/**
 * Get one element by tag name.
 *
 * @param tagName Tag name to look for
 * @param node Node to search in
 * @returns The element or null
 */ function getOneElement(tagName, node) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementsByTagName"])(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */ function fetch(tagName, where, recurse = false) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textContent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementsByTagName"])(tagName, where, recurse, 1)).trim();
}
/**
 * Adds a property to an object if it has a value.
 *
 * @param object Object to be extended.
 * @param property Property name.
 * @param tagName Tag name that contains the conditionally added property.
 * @param where Element to search for the property.
 * @param recurse Whether to recurse into child nodes.
 */ function addConditionally(object, property, tagName, where, recurse = false) {
    const value = fetch(tagName, where, recurse);
    if (value) object[property] = value;
}
/**
 * Checks if an element is a feed root node.
 *
 * @param value The name of the element to check.
 * @returns Whether an element is a feed root node.
 */ function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}
}),
"[project]/node_modules/domutils/dist/helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentPosition",
    ()=>DocumentPosition,
    "compareDocumentPosition",
    ()=>compareDocumentPosition,
    "removeSubsets",
    ()=>removeSubsets,
    "uniqueSort",
    ()=>uniqueSort
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/dist/node.js [app-ssr] (ecmascript)");
;
function removeSubsets(nodes) {
    let index = nodes.length;
    /*
     * Check if each node (or one of its ancestors) is already contained in the
     * array.
     */ while(--index >= 0){
        const node = nodes[index];
        /*
         * Remove the node if it is not unique.
         * We are going through the array from the end, so we only
         * have to check nodes that preceed the node under consideration in the array.
         */ if (index > 0 && nodes.lastIndexOf(node, index - 1) >= 0) {
            nodes.splice(index, 1);
            continue;
        }
        for(let ancestor = node.parent; ancestor; ancestor = ancestor.parent){
            if (nodes.includes(ancestor)) {
                nodes.splice(index, 1);
                break;
            }
        }
    }
    return nodes;
}
var DocumentPosition;
(function(DocumentPosition) {
    DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
    DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
    DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
    DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
    DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
})(DocumentPosition || (DocumentPosition = {}));
function compareDocumentPosition(nodeA, nodeB) {
    const aParents = [];
    const bParents = [];
    if (nodeA === nodeB) {
        return 0;
    }
    let current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(nodeA) ? nodeA : nodeA.parent;
    while(current){
        aParents.unshift(current);
        current = current.parent;
    }
    current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(nodeB) ? nodeB : nodeB.parent;
    while(current){
        bParents.unshift(current);
        current = current.parent;
    }
    const maxIndex = Math.min(aParents.length, bParents.length);
    let index = 0;
    while(index < maxIndex && aParents[index] === bParents[index]){
        index++;
    }
    if (index === 0) {
        return DocumentPosition.DISCONNECTED;
    }
    const sharedParent = aParents[index - 1];
    const siblings = sharedParent.children;
    const aSibling = aParents[index];
    const bSibling = bParents[index];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
            return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
        }
        return DocumentPosition.FOLLOWING;
    }
    if (sharedParent === nodeA) {
        return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
    }
    return DocumentPosition.PRECEDING;
}
function uniqueSort(nodes) {
    nodes = nodes.filter((node, index, array)=>!array.includes(node, index + 1));
    nodes.sort((a, b)=>{
        const relative = compareDocumentPosition(a, b);
        if (relative & DocumentPosition.PRECEDING) {
            return -1;
        }
        if (relative & DocumentPosition.FOLLOWING) {
            return 1;
        }
        return 0;
    });
    return nodes;
}
}),
"[project]/node_modules/domutils/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentPosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentPosition"],
    "append",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"],
    "appendChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendChild"],
    "compareDocumentPosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareDocumentPosition"],
    "existsOne",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["existsOne"],
    "filter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"],
    "find",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["find"],
    "findAll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findAll"],
    "findOne",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findOne"],
    "getAttributeValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAttributeValue"],
    "getChildren",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChildren"],
    "getElementById",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementById"],
    "getElements",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElements"],
    "getElementsByClassName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementsByClassName"],
    "getElementsByTagName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementsByTagName"],
    "getElementsByTagType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementsByTagType"],
    "getFeed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$feeds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFeed"],
    "getInnerHTML",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInnerHTML"],
    "getName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getName"],
    "getOuterHTML",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOuterHTML"],
    "getParent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParent"],
    "getSiblings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSiblings"],
    "getText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getText"],
    "hasAttrib",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasAttrib"],
    "innerText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["innerText"],
    "nextElementSibling",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nextElementSibling"],
    "prepend",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepend"],
    "prependChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prependChild"],
    "prevElementSibling",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prevElementSibling"],
    "removeElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeElement"],
    "removeSubsets",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeSubsets"],
    "replaceElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceElement"],
    "testElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testElement"],
    "textContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textContent"],
    "uniqueSort",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uniqueSort"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domutils/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$feeds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/dist/feeds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/dist/helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/dist/legacy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/dist/manipulation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/dist/querying.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/dist/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/dist/traversal.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/domutils/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
}),
"[project]/node_modules/domutils/dist/legacy.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getElementById",
    ()=>getElementById,
    "getElements",
    ()=>getElements,
    "getElementsByClassName",
    ()=>getElementsByClassName,
    "getElementsByTagName",
    ()=>getElementsByTagName,
    "getElementsByTagType",
    ()=>getElementsByTagType,
    "testElement",
    ()=>testElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/dist/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/dist/querying.js [app-ssr] (ecmascript)");
;
;
/**
 * A map of functions to check nodes against.
 */ const Checks = {
    tag_name (name) {
        if (typeof name === "function") {
            return (element)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(element) && name(element.name);
        }
        if (name === "*") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"];
        }
        return (element)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(element) && element.name === name;
    },
    tag_type (type) {
        if (typeof type === "function") {
            return (element)=>type(element.type);
        }
        return (element)=>element.type === type;
    },
    tag_contains (data) {
        if (typeof data === "function") {
            return (element)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isText"])(element) && data(element.data);
        }
        return (element)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isText"])(element) && element.data === data;
    }
};
/**
 * Returns a function to check whether a node has an attribute with a particular
 * value.
 *
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a
 *   particular value.
 */ function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
        return (element)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(element) && value(element.attribs[attrib]);
    }
    return (element)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(element) && element.attribs[attrib] === value;
}
/**
 * Returns a function that returns `true` if either of the input functions
 * returns `true` for a node.
 *
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either of the input
 *   functions returns `true` for the node.
 */ function combineFuncs(a, b) {
    return (element)=>a(element) || b(element);
}
/**
 * Returns a function that executes all checks in `options` and returns `true`
 * if any of them match a node.
 *
 * @param options An object describing nodes to look for.
 * @returns A function that executes all checks in `options` and returns `true`
 *   if any of them match a node.
 */ function compileTest(options) {
    const funcs = Object.keys(options).map((key)=>{
        const value = options[key];
        return Object.hasOwn(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
function testElement(options, node) {
    const test = compileTest(options);
    return test ? test(node) : true;
}
function getElements(options, nodes, recurse, limit = Number.POSITIVE_INFINITY) {
    const test = compileTest(options);
    return test ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"])(test, nodes, recurse, limit) : [];
}
function getElementById(id, nodes, recurse = true) {
    if (!Array.isArray(nodes)) nodes = [
        nodes
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findOne"])(getAttribCheck("id", id), nodes, recurse);
}
function getElementsByTagName(tagName, nodes, recurse = true, limit = Number.POSITIVE_INFINITY) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"])(Checks["tag_name"](tagName), nodes, recurse, limit);
}
function getElementsByClassName(className, nodes, recurse = true, limit = Number.POSITIVE_INFINITY) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"])(getAttribCheck("class", className), nodes, recurse, limit);
}
function getElementsByTagType(type, nodes, recurse = true, limit = Number.POSITIVE_INFINITY) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"])(Checks["tag_type"](type), nodes, recurse, limit);
}
}),
"[project]/node_modules/domutils/dist/manipulation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Remove an element from the dom
 *
 * @category Manipulation
 * @param element The element to be removed.
 */ __turbopack_context__.s([
    "append",
    ()=>append,
    "appendChild",
    ()=>appendChild,
    "prepend",
    ()=>prepend,
    "prependChild",
    ()=>prependChild,
    "removeElement",
    ()=>removeElement,
    "replaceElement",
    ()=>replaceElement
]);
function removeElement(element) {
    if (element.prev) element.prev.next = element.next;
    if (element.next) element.next.prev = element.prev;
    if (element.parent) {
        const childs = element.parent.children;
        const childsIndex = childs.lastIndexOf(element);
        if (childsIndex !== -1) {
            childs.splice(childsIndex, 1);
        }
    }
    element.next = null;
    element.prev = null;
    element.parent = null;
}
function replaceElement(element, replacement) {
    replacement.prev = element.prev;
    if (replacement.prev) {
        replacement.prev.next = replacement;
    }
    replacement.next = element.next;
    if (replacement.next) {
        replacement.next.prev = replacement;
    }
    replacement.parent = element.parent;
    if (replacement.parent) {
        const { children } = replacement.parent;
        const elementIndex = children.lastIndexOf(element);
        if (elementIndex === -1) {
            return;
        }
        children[elementIndex] = replacement;
        element.parent = null;
    }
}
function appendChild(parent, child) {
    removeElement(child);
    child.next = null;
    child.parent = parent;
    if (parent.children.push(child) > 1) {
        const sibling = parent.children[parent.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
    } else {
        child.prev = null;
    }
}
function append(element, next) {
    removeElement(next);
    const { parent } = element;
    const currentNext = element.next;
    next.next = currentNext;
    next.prev = element;
    element.next = next;
    next.parent = parent;
    if (currentNext) {
        currentNext.prev = next;
        if (parent) {
            const childs = parent.children;
            childs.splice(childs.lastIndexOf(currentNext), 0, next);
        }
    } else if (parent) {
        parent.children.push(next);
    }
}
function prependChild(parent, child) {
    removeElement(child);
    child.parent = parent;
    child.prev = null;
    if (parent.children.unshift(child) === 1) {
        child.next = null;
    } else {
        const sibling = parent.children[1];
        sibling.prev = child;
        child.next = sibling;
    }
}
function prepend(element, previous) {
    removeElement(previous);
    const { parent } = element;
    if (parent) {
        const childs = parent.children;
        childs.splice(childs.indexOf(element), 0, previous);
    }
    if (element.prev) {
        element.prev.next = previous;
    }
    previous.parent = parent;
    previous.prev = element.prev;
    previous.next = element;
    element.prev = previous;
}
}),
"[project]/node_modules/domutils/dist/querying.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "existsOne",
    ()=>existsOne,
    "filter",
    ()=>filter,
    "find",
    ()=>find,
    "findAll",
    ()=>findAll,
    "findOne",
    ()=>findOne
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/dist/node.js [app-ssr] (ecmascript)");
;
function filter(test, node, recurse = true, limit = Number.POSITIVE_INFINITY) {
    return find(test, Array.isArray(node) ? node : [
        node
    ], recurse, limit);
}
function find(test, nodes, recurse, limit) {
    const result = [];
    /** Stack of the arrays we are looking at. */ const nodeStack = [
        Array.isArray(nodes) ? nodes : [
            nodes
        ]
    ];
    /** Stack of the indices within the arrays. */ const indexStack = [
        0
    ];
    for(;;){
        // First, check if the current array has any more elements to look at.
        if (indexStack[0] >= nodeStack[0].length) {
            // If we have no more arrays to look at, we are done.
            if (indexStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            continue;
        }
        const element = nodeStack[0][indexStack[0]++];
        if (test(element)) {
            result.push(element);
            if (--limit <= 0) return result;
        }
        if (recurse && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(element) && element.children.length > 0) {
            /*
             * Add the children to the stack. We are depth-first, so this is
             * the next array we look at.
             */ indexStack.unshift(0);
            nodeStack.unshift(element.children);
        }
    }
}
function findOne(test, nodes, recurse = true) {
    const searchedNodes = Array.isArray(nodes) ? nodes : [
        nodes
    ];
    for (const node of searchedNodes){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(node) && test(node)) {
            return node;
        }
        if (recurse && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(node) && node.children.length > 0) {
            const found = findOne(test, node.children, true);
            if (found) return found;
        }
    }
    return null;
}
function existsOne(test, nodes) {
    return (Array.isArray(nodes) ? nodes : [
        nodes
    ]).some((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(node) && test(node) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(node) && existsOne(test, node.children));
}
function findAll(test, nodes) {
    const result = [];
    const nodeStack = [
        Array.isArray(nodes) ? nodes : [
            nodes
        ]
    ];
    const indexStack = [
        0
    ];
    for(;;){
        if (indexStack[0] >= nodeStack[0].length) {
            if (nodeStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            continue;
        }
        const element = nodeStack[0][indexStack[0]++];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(element) && test(element)) result.push(element);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(element) && element.children.length > 0) {
            indexStack.unshift(0);
            nodeStack.unshift(element.children);
        }
    }
}
}),
"[project]/node_modules/domutils/dist/stringify.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInnerHTML",
    ()=>getInnerHTML,
    "getOuterHTML",
    ()=>getOuterHTML,
    "getText",
    ()=>getText,
    "innerText",
    ()=>innerText,
    "textContent",
    ()=>textContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dom$2d$serializer$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dom-serializer/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/dist/node.js [app-ssr] (ecmascript)");
;
;
;
function getOuterHTML(node, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dom$2d$serializer$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node, options);
}
function getInnerHTML(node, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(node) ? node.children.map((node)=>getOuterHTML(node, options)).join("") : "";
}
function getText(node) {
    if (Array.isArray(node)) return node.map(getText).join("");
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(node)) return node.name === "br" ? "\n" : getText(node.children);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCDATA"])(node)) return getText(node.children);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isText"])(node)) return node.data;
    return "";
}
function textContent(node) {
    if (Array.isArray(node)) return node.map(textContent).join("");
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(node) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isComment"])(node)) {
        return textContent(node.children);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isText"])(node)) return node.data;
    return "";
}
function innerText(node) {
    if (Array.isArray(node)) return node.map(innerText).join("");
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(node) && (node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Tag || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCDATA"])(node))) {
        return innerText(node.children);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isText"])(node)) return node.data;
    return "";
}
}),
"[project]/node_modules/domutils/dist/traversal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAttributeValue",
    ()=>getAttributeValue,
    "getChildren",
    ()=>getChildren,
    "getName",
    ()=>getName,
    "getParent",
    ()=>getParent,
    "getSiblings",
    ()=>getSiblings,
    "hasAttrib",
    ()=>hasAttrib,
    "nextElementSibling",
    ()=>nextElementSibling,
    "prevElementSibling",
    ()=>prevElementSibling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/dist/node.js [app-ssr] (ecmascript)");
;
function getChildren(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(element) ? element.children : [];
}
function getParent(element) {
    return element.parent || null;
}
function getSiblings(element) {
    const parent = getParent(element);
    if (parent != null) return getChildren(parent);
    const siblings = [
        element
    ];
    let { prev, next } = element;
    while(prev != null){
        siblings.unshift(prev);
        ({ prev } = prev);
    }
    while(next != null){
        siblings.push(next);
        ({ next } = next);
    }
    return siblings;
}
function getAttributeValue(element, name) {
    const { attribs } = element;
    return attribs?.[name];
}
function hasAttrib(element, name) {
    const { attribs } = element;
    return attribs != null && Object.hasOwn(attribs, name) && attribs[name] != null;
}
function getName(element) {
    return element.name;
}
function nextElementSibling(element) {
    let { next } = element;
    while(next !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(next))({ next } = next);
    return next;
}
function prevElementSibling(element) {
    let { prev } = element;
    while(prev !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(prev))({ prev } = prev);
    return prev;
}
}),
"[project]/node_modules/entities/dist/decode-codepoint.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "replaceCodePoint",
    ()=>replaceCodePoint
]);
// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
const decodeMap = new Map([
    [
        0,
        65_533
    ],
    // C1 Unicode control character reference replacements
    [
        128,
        8364
    ],
    [
        130,
        8218
    ],
    [
        131,
        402
    ],
    [
        132,
        8222
    ],
    [
        133,
        8230
    ],
    [
        134,
        8224
    ],
    [
        135,
        8225
    ],
    [
        136,
        710
    ],
    [
        137,
        8240
    ],
    [
        138,
        352
    ],
    [
        139,
        8249
    ],
    [
        140,
        338
    ],
    [
        142,
        381
    ],
    [
        145,
        8216
    ],
    [
        146,
        8217
    ],
    [
        147,
        8220
    ],
    [
        148,
        8221
    ],
    [
        149,
        8226
    ],
    [
        150,
        8211
    ],
    [
        151,
        8212
    ],
    [
        152,
        732
    ],
    [
        153,
        8482
    ],
    [
        154,
        353
    ],
    [
        155,
        8250
    ],
    [
        156,
        339
    ],
    [
        158,
        382
    ],
    [
        159,
        376
    ]
]);
function replaceCodePoint(codePoint) {
    if (codePoint >= 0xd8_00 && codePoint <= 0xdf_ff || codePoint > 0x10_ff_ff) {
        return 0xff_fd;
    }
    return decodeMap.get(codePoint) ?? codePoint;
}
}),
"[project]/node_modules/entities/dist/decode.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecodingMode",
    ()=>DecodingMode,
    "EntityDecoder",
    ()=>EntityDecoder,
    "decodeHTML",
    ()=>decodeHTML,
    "decodeHTMLAttribute",
    ()=>decodeHTMLAttribute,
    "decodeHTMLStrict",
    ()=>decodeHTMLStrict,
    "decodeXML",
    ()=>decodeXML,
    "determineBranch",
    ()=>determineBranch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$decode$2d$codepoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/entities/dist/decode-codepoint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$generated$2f$decode$2d$data$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/entities/dist/generated/decode-data-html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$generated$2f$decode$2d$data$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/entities/dist/generated/decode-data-xml.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$bin$2d$trie$2d$flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/entities/dist/internal/bin-trie-flags.js [app-ssr] (ecmascript)");
;
;
;
;
var CharCodes;
(function(CharCodes) {
    CharCodes[CharCodes["NUM"] = 35] = "NUM";
    CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
    CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
    CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
    CharCodes[CharCodes["NINE"] = 57] = "NINE";
    CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
    CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
    CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
    CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
    CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
    CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
    CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
/** Bit that needs to be set to convert an upper case ASCII character to lower case */ const TO_LOWER_BIT = 0b10_0000;
function isNumber(code) {
    return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
    return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
    return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
}
/**
 * Checks if the given character is a valid end character for an entity in an attribute.
 *
 * Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
 * See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
 * @param code Code point to decode.
 */ function isEntityInAttributeInvalidEnd(code) {
    return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function(EntityDecoderState) {
    EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
    EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
    EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
    EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
    EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode) {
    /** Entities in text nodes that can end with any character. */ DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
    /** Only allow entities terminated with a semicolon. */ DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
    /** Entities in attributes have limitations on ending characters. */ DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
class EntityDecoder {
    decodeTree;
    emitCodePoint;
    errors;
    constructor(/** The tree used to decode entities. */ // biome-ignore lint/correctness/noUnusedPrivateClassMembers: False positive
    decodeTree, /**
     * The function that is called when a codepoint is decoded.
     *
     * For multi-byte named entities, this will be called multiple times,
     * with the second codepoint, and the same `consumed` value.
     * @param codepoint The decoded codepoint.
     * @param consumed The number of bytes consumed by the decoder.
     */ emitCodePoint, /** An object that is used to produce errors. */ errors){
        this.decodeTree = decodeTree;
        this.emitCodePoint = emitCodePoint;
        this.errors = errors;
    }
    /** The current state of the decoder. */ state = EntityDecoderState.EntityStart;
    /** Characters that were consumed while parsing an entity. */ consumed = 1;
    /**
     * The result of the entity.
     *
     * Either the result index of a numeric entity, or the codepoint of a
     * numeric entity.
     */ result = 0;
    /** The current index in the decode tree. */ treeIndex = 0;
    /** The number of characters that were consumed in excess. */ excess = 1;
    /** The mode in which the decoder is operating. */ decodeMode = DecodingMode.Strict;
    /** The number of characters that have been consumed in the current run. */ runConsumed = 0;
    /**
     * Resets the instance to make it reusable.
     * @param decodeMode Entity decoding mode to use.
     */ startEntity(decodeMode) {
        this.decodeMode = decodeMode;
        this.state = EntityDecoderState.EntityStart;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.consumed = 1;
        this.runConsumed = 0;
    }
    /**
     * Write an entity to the decoder. This can be called multiple times with partial entities.
     * If the entity is incomplete, the decoder will return -1.
     *
     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
     * entity is incomplete, and resume when the next string is written.
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ write(input, offset) {
        switch(this.state){
            case EntityDecoderState.EntityStart:
                {
                    if (input.charCodeAt(offset) === CharCodes.NUM) {
                        this.state = EntityDecoderState.NumericStart;
                        this.consumed += 1;
                        return this.stateNumericStart(input, offset + 1);
                    }
                    this.state = EntityDecoderState.NamedEntity;
                    return this.stateNamedEntity(input, offset);
                }
            case EntityDecoderState.NumericStart:
                {
                    return this.stateNumericStart(input, offset);
                }
            case EntityDecoderState.NumericDecimal:
                {
                    return this.stateNumericDecimal(input, offset);
                }
            case EntityDecoderState.NumericHex:
                {
                    return this.stateNumericHex(input, offset);
                }
            case EntityDecoderState.NamedEntity:
                {
                    return this.stateNamedEntity(input, offset);
                }
        }
    }
    /**
     * Switches between the numeric decimal and hexadecimal states.
     *
     * Equivalent to the `Numeric character reference state` in the HTML spec.
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNumericStart(input, offset) {
        if (offset >= input.length) {
            return -1;
        }
        if ((input.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
            this.state = EntityDecoderState.NumericHex;
            this.consumed += 1;
            return this.stateNumericHex(input, offset + 1);
        }
        this.state = EntityDecoderState.NumericDecimal;
        return this.stateNumericDecimal(input, offset);
    }
    /**
     * Parses a hexadecimal numeric entity.
     *
     * Equivalent to the `Hexademical character reference state` in the HTML spec.
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNumericHex(input, offset) {
        while(offset < input.length){
            const char = input.charCodeAt(offset);
            if (isNumber(char) || isHexadecimalCharacter(char)) {
                // Convert hex digit to value (0-15); 'a'/'A' -> 10.
                const digit = char <= CharCodes.NINE ? char - CharCodes.ZERO : (char | TO_LOWER_BIT) - CharCodes.LOWER_A + 10;
                this.result = this.result * 16 + digit;
                this.consumed++;
                offset++;
            } else {
                return this.emitNumericEntity(char, 3);
            }
        }
        return -1; // Incomplete entity
    }
    /**
     * Parses a decimal numeric entity.
     *
     * Equivalent to the `Decimal character reference state` in the HTML spec.
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNumericDecimal(input, offset) {
        while(offset < input.length){
            const char = input.charCodeAt(offset);
            if (isNumber(char)) {
                this.result = this.result * 10 + (char - CharCodes.ZERO);
                this.consumed++;
                offset++;
            } else {
                return this.emitNumericEntity(char, 2);
            }
        }
        return -1; // Incomplete entity
    }
    /**
     * Validate and emit a numeric entity.
     *
     * Implements the logic from the `Hexademical character reference start
     * state` and `Numeric character reference end state` in the HTML spec.
     * @param lastCp The last code point of the entity. Used to see if the
     *               entity was terminated with a semicolon.
     * @param expectedLength The minimum number of characters that should be
     *                       consumed. Used to validate that at least one digit
     *                       was consumed.
     * @returns The number of characters that were consumed.
     */ emitNumericEntity(lastCp, expectedLength) {
        // Ensure we consumed at least one digit.
        if (this.consumed <= expectedLength) {
            this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
        }
        // Figure out if this is a legit end of the entity
        if (lastCp === CharCodes.SEMI) {
            this.consumed += 1;
        } else if (this.decodeMode === DecodingMode.Strict) {
            return 0;
        }
        this.emitCodePoint((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$decode$2d$codepoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceCodePoint"])(this.result), this.consumed);
        if (this.errors) {
            if (lastCp !== CharCodes.SEMI) {
                this.errors.missingSemicolonAfterCharacterReference();
            }
            this.errors.validateNumericCharacterReference(this.result);
        }
        return this.consumed;
    }
    /**
     * Parses a named entity.
     *
     * Equivalent to the `Named character reference state` in the HTML spec.
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNamedEntity(input, offset) {
        const { decodeTree } = this;
        let current = decodeTree[this.treeIndex];
        // The length is the number of bytes of the value, including the current byte.
        let valueLength = (current & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$bin$2d$trie$2d$flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BinTrieFlags"].VALUE_LENGTH) >> 14;
        while(offset < input.length){
            // Handle compact runs (possibly inline): valueLength == 0 and SEMI_REQUIRED bit set.
            if (valueLength === 0 && (current & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$bin$2d$trie$2d$flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BinTrieFlags"].FLAG13) !== 0) {
                const runLength = (current & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$bin$2d$trie$2d$flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BinTrieFlags"].BRANCH_LENGTH) >> 7; /* 2..63 */ 
                // If we are starting a run, check the first char.
                if (this.runConsumed === 0) {
                    const firstChar = current & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$bin$2d$trie$2d$flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BinTrieFlags"].JUMP_TABLE;
                    if (input.charCodeAt(offset) !== firstChar) {
                        return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
                    }
                    offset++;
                    this.excess++;
                    this.runConsumed++;
                }
                // Check remaining characters in the run.
                while(this.runConsumed < runLength){
                    if (offset >= input.length) {
                        return -1;
                    }
                    const charIndexInPacked = this.runConsumed - 1;
                    const packedWord = decodeTree[this.treeIndex + 1 + (charIndexInPacked >> 1)];
                    const expectedChar = charIndexInPacked % 2 === 0 ? packedWord & 0xff : packedWord >> 8 & 0xff;
                    if (input.charCodeAt(offset) !== expectedChar) {
                        this.runConsumed = 0;
                        return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
                    }
                    offset++;
                    this.excess++;
                    this.runConsumed++;
                }
                this.runConsumed = 0;
                this.treeIndex += 1 + (runLength >> 1);
                current = decodeTree[this.treeIndex];
                valueLength = (current & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$bin$2d$trie$2d$flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BinTrieFlags"].VALUE_LENGTH) >> 14;
            }
            if (offset >= input.length) break;
            const char = input.charCodeAt(offset);
            /*
             * Implicit semicolon handling for nodes that require a semicolon but
             * don't have an explicit ';' branch stored in the trie. If we have
             * a value on the current node, it requires a semicolon, and the
             * current input character is a semicolon, emit the entity using the
             * current node (without descending further).
             */ if (char === CharCodes.SEMI && valueLength !== 0 && (current & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$bin$2d$trie$2d$flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BinTrieFlags"].FLAG13) !== 0) {
                return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
            }
            this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
            if (this.treeIndex < 0) {
                return this.result === 0 || this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
                (valueLength === 0 || // And there should be no invalid characters.
                isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
            }
            current = decodeTree[this.treeIndex];
            valueLength = (current & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$bin$2d$trie$2d$flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BinTrieFlags"].VALUE_LENGTH) >> 14;
            // If the branch is a value, store it and continue
            if (valueLength !== 0) {
                // If the entity is terminated by a semicolon, we are done.
                if (char === CharCodes.SEMI) {
                    return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
                }
                // If we encounter a non-terminated (legacy) entity while parsing strictly, then ignore it.
                if (this.decodeMode !== DecodingMode.Strict && (current & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$bin$2d$trie$2d$flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BinTrieFlags"].FLAG13) === 0) {
                    this.result = this.treeIndex;
                    this.consumed += this.excess;
                    this.excess = 0;
                }
            }
            // Increment offset & excess for next iteration
            offset++;
            this.excess++;
        }
        return -1;
    }
    /**
     * Emit a named entity that was not terminated with a semicolon.
     * @returns The number of characters consumed.
     */ emitNotTerminatedNamedEntity() {
        const { result, decodeTree } = this;
        const valueLength = (decodeTree[result] & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$bin$2d$trie$2d$flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BinTrieFlags"].VALUE_LENGTH) >> 14;
        this.emitNamedEntityData(result, valueLength, this.consumed);
        this.errors?.missingSemicolonAfterCharacterReference();
        return this.consumed;
    }
    /**
     * Emit a named entity.
     * @param result The index of the entity in the decode tree.
     * @param valueLength The number of bytes in the entity.
     * @param consumed The number of characters consumed.
     * @returns The number of characters consumed.
     */ emitNamedEntityData(result, valueLength, consumed) {
        const { decodeTree } = this;
        this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$bin$2d$trie$2d$flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BinTrieFlags"].VALUE_LENGTH | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$bin$2d$trie$2d$flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BinTrieFlags"].FLAG13) : decodeTree[result + 1], consumed);
        if (valueLength === 3) {
            // For multi-byte values, we need to emit the second byte.
            this.emitCodePoint(decodeTree[result + 2], consumed);
        }
        return consumed;
    }
    /**
     * Signal to the parser that the end of the input was reached.
     *
     * Remaining data will be emitted and relevant errors will be produced.
     * @returns The number of characters consumed.
     */ end() {
        switch(this.state){
            case EntityDecoderState.NamedEntity:
                {
                    // Emit a named entity if we have one.
                    return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
                }
            // Otherwise, emit a numeric entity if we have one.
            case EntityDecoderState.NumericDecimal:
                {
                    return this.emitNumericEntity(0, 2);
                }
            case EntityDecoderState.NumericHex:
                {
                    return this.emitNumericEntity(0, 3);
                }
            case EntityDecoderState.NumericStart:
                {
                    this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed);
                    return 0;
                }
            case EntityDecoderState.EntityStart:
                {
                    // Return 0 if we have no entity.
                    return 0;
                }
        }
    }
}
/**
 * Creates a function that decodes entities in a string.
 * @param decodeTree The decode tree.
 * @returns A function that decodes entities in a string.
 */ function getDecoder(decodeTree) {
    let returnValue = "";
    const decoder = new EntityDecoder(decodeTree, (data)=>returnValue += String.fromCodePoint(data));
    return function decodeWithTrie(input, decodeMode) {
        let lastIndex = 0;
        let offset = 0;
        while((offset = input.indexOf("&", offset)) >= 0){
            returnValue += input.slice(lastIndex, offset);
            decoder.startEntity(decodeMode);
            const length = decoder.write(input, // Skip the "&"
            offset + 1);
            if (length < 0) {
                lastIndex = offset + decoder.end();
                break;
            }
            lastIndex = offset + length;
            // If `length` is 0, skip the current `&` and continue.
            offset = length === 0 ? lastIndex + 1 : lastIndex;
        }
        const result = returnValue + input.slice(lastIndex);
        // Make sure we don't keep a reference to the final string.
        returnValue = "";
        return result;
    };
}
function determineBranch(decodeTree, current, nodeIndex, char) {
    const branchCount = (current & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$bin$2d$trie$2d$flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BinTrieFlags"].BRANCH_LENGTH) >> 7;
    const jumpOffset = current & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$bin$2d$trie$2d$flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BinTrieFlags"].JUMP_TABLE;
    // Case 1: Single branch encoded in jump offset
    if (branchCount === 0) {
        return jumpOffset !== 0 && char === jumpOffset ? nodeIndex : -1;
    }
    // Case 2: Multiple branches encoded in jump table
    if (jumpOffset) {
        const value = char - jumpOffset;
        return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIndex + value] - 1;
    }
    // Case 3: Multiple branches encoded in packed dictionary (two keys per uint16)
    const packedKeySlots = branchCount + 1 >> 1;
    /*
     * Treat packed keys as a virtual sorted array of length `branchCount`.
     * Key(i) = low byte for even i, high byte for odd i in slot i>>1.
     */ let lo = 0;
    let hi = branchCount - 1;
    while(lo <= hi){
        const mid = lo + hi >>> 1;
        const slot = mid >> 1;
        const packed = decodeTree[nodeIndex + slot];
        const midKey = packed >> (mid & 1) * 8 & 0xff;
        if (midKey < char) {
            lo = mid + 1;
        } else if (midKey > char) {
            hi = mid - 1;
        } else {
            return decodeTree[nodeIndex + packedKeySlots + mid];
        }
    }
    return -1;
}
const htmlDecoder = /* #__PURE__ */ getDecoder(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$generated$2f$decode$2d$data$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["htmlDecodeTree"]);
const xmlDecoder = /* #__PURE__ */ getDecoder(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$generated$2f$decode$2d$data$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xmlDecodeTree"]);
function decodeHTML(htmlString, mode = DecodingMode.Legacy) {
    return htmlDecoder(htmlString, mode);
}
function decodeHTMLAttribute(htmlAttribute) {
    return htmlDecoder(htmlAttribute, DecodingMode.Attribute);
}
function decodeHTMLStrict(htmlString) {
    return htmlDecoder(htmlString, DecodingMode.Strict);
}
function decodeXML(xmlString) {
    return xmlDecoder(xmlString, DecodingMode.Strict);
}
;
;
;
}),
"[project]/node_modules/entities/dist/escape.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XML_BITSET_VALUE",
    ()=>XML_BITSET_VALUE,
    "encodeXML",
    ()=>encodeXML,
    "escape",
    ()=>escape,
    "escapeAttribute",
    ()=>escapeAttribute,
    "escapeText",
    ()=>escapeText,
    "escapeUTF8",
    ()=>escapeUTF8,
    "getCodePoint",
    ()=>getCodePoint
]);
const xmlCodeMap = new Map([
    [
        34,
        "&quot;"
    ],
    [
        38,
        "&amp;"
    ],
    [
        39,
        "&apos;"
    ],
    [
        60,
        "&lt;"
    ],
    [
        62,
        "&gt;"
    ]
]);
const getCodePoint = typeof String.prototype.codePointAt === "function" ? (input, index)=>input.codePointAt(index) : (c, index)=>(c.charCodeAt(index) & 0xfc_00) === 0xd8_00 ? (c.charCodeAt(index) - 0xd8_00) * 0x4_00 + c.charCodeAt(index + 1) - 0xdc_00 + 0x1_00_00 : c.charCodeAt(index);
const XML_BITSET_VALUE = 0x50_00_00_c4; // 32..63 -> 34 ("),38 (&),39 ('),60 (<),62 (>)
function encodeXML(input) {
    let out;
    let last = 0;
    const { length } = input;
    for(let index = 0; index < length; index++){
        const char = input.charCodeAt(index);
        // Check for ASCII chars that don't need escaping
        if (char < 0x80 && ((XML_BITSET_VALUE >>> char & 1) === 0 || char >= 64 || char < 32)) {
            continue;
        }
        if (out === undefined) out = input.substring(0, index);
        else if (last !== index) out += input.substring(last, index);
        if (char < 64) {
            // Known replacement
            out += xmlCodeMap.get(char);
            last = index + 1;
            continue;
        }
        // Non-ASCII: encode as numeric entity (handle surrogate pair)
        const cp = getCodePoint(input, index);
        out += `&#x${cp.toString(16)};`;
        if (cp !== char) index++; // Skip trailing surrogate
        last = index + 1;
    }
    if (out === undefined) return input;
    if (last < length) out += input.substr(last);
    return out;
}
const escape = encodeXML;
/**
 * Creates a function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 * @param regex Regular expression to match characters to escape.
 * @param map Map of characters to escape to their entities.
 * @returns Function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 */ function getEscaper(regex, map) {
    return function escape(data) {
        let match;
        let lastIndex = 0;
        let result = "";
        while(match = regex.exec(data)){
            if (lastIndex !== match.index) {
                result += data.substring(lastIndex, match.index);
            }
            // We know that this character will be in the map.
            result += map.get(match[0].charCodeAt(0));
            // Every match will be of length 1
            lastIndex = match.index + 1;
        }
        return result + data.substring(lastIndex);
    };
}
const escapeUTF8 = /* #__PURE__ */ getEscaper(/["&'<>]/g, xmlCodeMap);
const escapeAttribute = /* #__PURE__ */ getEscaper(/["&\u00A0]/g, new Map([
    [
        34,
        "&quot;"
    ],
    [
        38,
        "&amp;"
    ],
    [
        160,
        "&nbsp;"
    ]
]));
const escapeText = /* #__PURE__ */ getEscaper(/[&<>\u00A0]/g, new Map([
    [
        38,
        "&amp;"
    ],
    [
        60,
        "&lt;"
    ],
    [
        62,
        "&gt;"
    ],
    [
        160,
        "&nbsp;"
    ]
]));
}),
"[project]/node_modules/entities/dist/generated/decode-data-html.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "htmlDecodeTree",
    ()=>htmlDecodeTree
]);
// Generated using scripts/write-decode-map.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$decode$2d$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/entities/dist/internal/decode-shared.js [app-ssr] (ecmascript)");
;
const htmlDecodeTree = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$decode$2d$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBase64"])("QR08ALkAAgH6AYsDNQR2BO0EPgXZBQEGLAbdBxMISQrvCmQLfQurDKQNLw4fD4YPpA+6D/IPAAAAAAAAAAAAAAAAKhBMEY8TmxUWF2EYLBkxGuAa3RsJHDscWR8YIC8jSCSIJcMl6ie3Ku8rEC0CLjoupS7kLgAIRU1hYmNmZ2xtbm9wcnN0dVQAWgBeAGUAaQBzAHcAfgCBAIQAhwCSAJoAoACsALMAbABpAGcAO4DGAMZAUAA7gCYAJkBjAHUAdABlADuAwQDBQHIiZXZlAAJhAAFpeW0AcgByAGMAO4DCAMJAEGRyAADgNdgE3XIAYQB2AGUAO4DAAMBA8CFoYZFj4SFjcgBhZAAAoFMqAAFncIsAjgBvAG4ABGFmAADgNdg43fAlbHlGdW5jdGlvbgCgYSBpAG4AZwA7gMUAxUAAAWNzpACoAHIAAOA12Jzc6SFnbgCgVCJpAGwAZABlADuAwwDDQG0AbAA7gMQAxEAABGFjZWZvcnN1xQDYANoA7QDxAPYA+QD8AAABY3LJAM8AayNzbGFzaAAAoBYidgHTANUAAKDnKmUAZAAAoAYjeQARZIABY3J0AOAA5QDrAGEidXNlAACgNSLuI291bGxpcwCgLCFhAJJjcgAA4DXYBd1wAGYAAOA12Dnd5SF2ZdhiYwDyAOoAbSJwZXEAAKBOIgAHSE9hY2RlZmhpbG9yc3UXARoBHwE6AVIBVQFiAWQBZgGCAakB6QHtAfIBYwB5ACdkUABZADuAqQCpQIABY3B5ACUBKAE1AfUhdGUGYWmg0iJ0KGFsRGlmZmVyZW50aWFsRAAAoEUhbCJleXMAAKAtIQACYWVpb0EBRAFKAU0B8iFvbgxhZABpAGwAO4DHAMdAcgBjAAhhbiJpbnQAAKAwIm8AdAAKYQABZG5ZAV0BaSJsbGEAuGB0I2VyRG90ALdg8gA5AWkAp2NyImNsZQAAAkRNUFRwAXQBeQF9AW8AdAAAoJkiaSJudXMAAKCWIuwhdXMAoJUiaSJtZXMAAKCXIm8AAAFjc4cBlAFrKndpc2VDb250b3VySW50ZWdyYWwAAKAyImUjQ3VybHkAAAFEUZwBpAFvJXVibGVRdW90ZQAAoB0gdSJvdGUAAKAZIAACbG5wdbABtgHNAdgBbwBuAGWgNyIAoHQqgAFnaXQAvAHBAcUB8iJ1ZW50AKBhIm4AdAAAoC8i7yV1ckludGVncmFsAKAuIgABZnLRAdMBAKACIe8iZHVjdACgECJuLnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbAAAoDMi7yFzcwCgLypjAHIAAOA12J7ccABDoNMiYQBwAACgTSKABURKU1phY2VmaW9zAAsCEgIVAhgCGwIsAjQCOQI9AnMCfwNvoEUh9CJyYWhkAKARKWMAeQACZGMAeQAFZGMAeQAPZIABZ3JzACECJQIoAuchZXIAoCEgcgAAoKEhaAB2AACg5CoAAWF5MAIzAvIhb24OYRRkbAB0oAciYQCUY3IAAOA12AfdAAFhZkECawIAAWNtRQJnAvIjaXRpY2FsAAJBREdUUAJUAl8CYwJjInV0ZQC0YG8AdAFZAloC2WJiJGxlQWN1dGUA3WJyImF2ZQBgYGkibGRlANxi7yFuZACgxCJmJWVyZW50aWFsRAAAoEYhcAR9AgAAAAAAAIECjgIAABoDZgAA4DXYO91EoagAhQKJAm8AdAAAoNwgcSJ1YWwAAKBQIuIhbGUAA0NETFJVVpkCqAK1Au8C/wIRA28AbgB0AG8AdQByAEkAbgB0AGUAZwByAGEA7ADEAW8AdAKvAgAAAACwAqhgbiNBcnJvdwAAoNMhAAFlb7kC0AJmAHQAgAFBUlQAwQLGAs0CciJyb3cAAKDQIekkZ2h0QXJyb3cAoNQhZQDlACsCbgBnAAABTFLWAugC5SFmdAABQVLcAuECciJyb3cAAKD4J+kkZ2h0QXJyb3cAoPon6SRnaHRBcnJvdwCg+SdpImdodAAAAUFU9gL7AnIicm93AACg0iFlAGUAAKCoInAAQQIGAwAAAAALA3Iicm93AACg0SFvJHduQXJyb3cAAKDVIWUlcnRpY2FsQmFyAACgJSJuAAADQUJMUlRhJAM2AzoDWgNxA3oDciJyb3cAAKGTIUJVLAMwA2EAcgAAoBMpcCNBcnJvdwAAoPUhciJldmUAEWPlIWZ00gJDAwAASwMAAFIDaSVnaHRWZWN0b3IAAKBQKWUkZVZlY3RvcgAAoF4p5SJjdG9yQqC9IWEAcgAAoFYpaSJnaHQA1AFiAwAAaQNlJGVWZWN0b3IAAKBfKeUiY3RvckKgwSFhAHIAAKBXKWUAZQBBoKQiciJyb3cAAKCnIXIAcgBvAPcAtAIAAWN0gwOHA3IA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YwAAoN8i4SFycnCgtiEAoD0pgKIqImJjZG9zACsVMBU6FT4VQRVyImNhcAAAoEgqAAFhdTQVNxVwAACgRipwAACgSipvAHQAAKCNInIAAKBFKgDgKiIA/gACYWxydksVURVuFXMVcgByAG2gtyEAoDwpeQCAAWV2dwBYFWUVaRVxAHACXxUAAAAAYxVyAGUA4wAXFXUA4wAZFWUAZQAAoM4iZSJkZ2UAAKDPImUAbgA7gKQApEBlI2Fycm93AAABbHJ7FX8V5SFmdACgtiFpImdodAAAoLchZQDkAG0VAAFjaYsVkRVvAG4AaQBuAPQAkwFuAHQAAKAxImwiY3R5AACgLSOACUFIYWJjZGVmaGlqbG9yc3R1d3oAuBW7Fb8V1RXgFegV+RUKFhUWHxZUFlcWZRbFFtsW7xb7FgUXChdyAPIAtAJhAHIAAKBlKQACZ2xyc8YVyhXOFdAV5yFlcgCgICDlIXRoAKA4IfIA9QxoAHagECAAoKMiawHZFd4VYSJyb3cAAKAPKWEA4wBfAgABYXnkFecV8iFvbg9hNGQAoUYhYW/tFfQVAAFnciEC8RVyAACgyiF0InNlcQAAoHcqgAFnbG0A/xUCFgUWO4CwALBAdABhALRjcCJ0eXYAAKCxKQABaXIOFhIW8yFodACgfykA4DXYId1hAHIAAAFschsWHRYAoMMhAKDCIYACYWVnc3YAKBauAjYWOhY+Fm0AAKHEIm9zLhY0Fm4AZABzoMQi9SFpdACgZiZhIm1tYQDdY2kAbgAAoPIiAKH3AGlvQxZRFmQAZQAAgfcAO29KFksW90BuI3RpbWVzAACgxyJuAPgAUBZjAHkAUmRjAG8CXhYAAAAAYhZyAG4AAKAeI28AcAAAoA0jgAJscHR1dwBuFnEWdRaSFp4W7CFhciRgZgAA4DXYVd0AotkCZW1wc30WhBaJFo0WcQBkoFAibwB0AACgUSJpIm51cwAAoDgi7CF1cwCgFCLxInVhcmUAoKEiYgBsAGUAYgBhAHIAdwBlAGQAZwDlANcAbgCAAWFkaAClFqoWtBZyAHIAbwD3APUMbwB3AG4AYQByAHIAbwB3APMA8xVhI3Jwb29uAAABbHK8FsAWZQBmAPQAHBZpAGcAaAD0AB4WYgHJFs8WawBhAHIAbwD3AJILbwLUFgAAAADYFnIAbgAAoB8jbwBwAACgDCOAAWNvdADhFukW7BYAAXJ55RboFgDgNdi53FVkbAAAoPYp8iFvaxFhAAFkcvMW9xZvAHQAAKDxImkA5qC/JVsSAAFhaP8WAhdyAPIANQNhAPIA1wvhIm5nbGUAoKYpAAFjaQ4XEBd5AF9k5yJyYXJyAKD/JwAJRGFjZGVmZ2xtbm9wcXJzdHV4MRc4F0YXWxcyBF4XaRd5F40XrBe0F78X2RcVGCEYLRg1GEAYAAFEbzUXgRZvAPQA+BUAAWNzPBdCF3UAdABlADuA6QDpQPQhZXIAoG4qAAJhaW95TRdQF1YXWhfyIW9uG2FyAGOgViI7gOoA6kDsIW9uAKBVIk1kbwB0ABdhAAFEcmIXZhdvAHQAAKBSIgDgNdgi3XKhmipuF3QXYQB2AGUAO4DoAOhAZKCWKm8AdAAAoJgqgKGZKmlscwCAF4UXhxfuInRlcnMAoOcjAKATIWSglSpvAHQAAKCXKoABYXBzAJMXlheiF2MAcgATYXQAeQBzogUinxcAAAAAoRdlAHQAAKAFInAAMaADIDMBqRerFwCgBCAAoAUgAAFnc7AXsRdLYXAAAKACIAABZ3C4F7sXbwBuABlhZgAA4DXYVt2AAWFscwDFF8sXzxdyAHOg1SJsAACg4yl1AHMAAKBxKmkAAKG1A2x21RfYF28AbgC1Y/VjAAJjc3V24BfoF/0XEBgAAWlv5BdWF3IAYwAAoFYiaQLuFwAAAADwF+0ADQThIW50AAFnbPUX+Rd0AHIAAKCWKuUhc3MAoJUqgAFhZWkAAxgGGAoYbABzAD1gcwB0AACgXyJ2AESgYSJEAACgeCrwImFyc2wAoOUpAAFEYRkYHRhvAHQAAKBTInIAcgAAoHEpgAFjZGkAJxgqGO0XcgAAoC8hbwD0AIwCAAFhaDEYMhi3YzuA8ADwQAABbXI5GD0YbAA7gOsA60BvAACgrCCAAWNpcABGGEgYSxhsACFgcwD0ACwEAAFlb08YVxhjAHQAYQB0AGkAbwDuABoEbgBlAG4AdABpAGEAbADlADME4Ql1GAAAgRgAAIMYiBgAAAAAoRilGAAAqhgAALsYvhjRGAAA1xgnGWwAbABpAG4AZwBkAG8AdABzAGUA8QBlF3kARGRtImFsZQAAoEAmgAFpbHIAjRiRGJ0Y7CFpZwCgA/tpApcYAAAAAJoYZwAAoAD7aQBnAACgBPsA4DXYI93sIWlnAKAB++whaWcA4GYAagCAAWFsdACvGLIYthh0AACgbSZpAGcAAKAC+24AcwAAoLElbwBmAJJh8AHCGAAAxhhmAADgNdhX3QABYWvJGMwYbADsAGsEdqDUIgCg2SphI3J0aW50AACgDSoAAWFv2hgiGQABY3PeGB8ZsQPnGP0YBRkSGRUZAAAdGbID7xjyGPQY9xj5GAAA+xg7gL0AvUAAoFMhO4C8ALxAAKBVIQCgWSEAoFshswEBGQAAAxkAoFQhAKBWIbQCCxkOGQAAAAAQGTuAvgC+QACgVyEAoFwhNQAAoFghtgEZGQAAGxkAoFohAKBdITgAAKBeIWwAAKBEIHcAbgAAoCIjYwByAADgNdi73IAIRWFiY2RlZmdpamxub3JzdHYARhlKGVoZXhlmGWkZkhmWGZkZnRmgGa0ZxhnLGc8Z4BkjGmygZyIAoIwqgAFjbXAAUBlTGVgZ9SF0ZfVhbQBhAOSgswM6FgCghipyImV2ZQAfYQABaXliGWUZcgBjAB1hM2RvAHQAIWGAoWUibHFzAMYEcBl6GfGhZSLOBAAAdhlsAGEAbgD0AN8EgKF+KmNkbACBGYQZjBljAACgqSpvAHQAb6CAKmyggioAoIQqZeDbIgD+cwAAoJQqcgAA4DXYJN3noGsirATtIWVsAKA3IWMAeQBTZIChdyJFYWoApxmpGasZAKCSKgCgpSoAoKQqAAJFYWVztBm2Gb0ZwhkAoGkicABwoIoq8iFveACgiipxoIgq8aCIKrUZaQBtAACg5yJwAGYAAOA12FjdYQB2AOUAYwIAAWNp0xnWGXIAAKAKIW0AAKFzImVs3BneGQCgjioAoJAqAIM+ADtjZGxxco0E6xn0GfgZ/BkBGgABY2nvGfEZAKCnKnIAAKB6Km8AdAAAoNci0CFhcgCglSl1ImVzdAAAoHwqgAJhZGVscwAKGvQZFhrVBCAa8AEPGgAAFBpwAHIAbwD4AFkZcgAAoHgpcQAAAWxxxAQbGmwAZQBzAPMASRlpAO0A5AQAAWVuJxouGnIjdG5lcXEAAOBpIgD+xQAsGgAFQWFiY2Vma29zeUAaQxpmGmoabRqDGocalhrCGtMacgDyAMwCAAJpbG1yShpOGlAaVBpyAHMA8ABxD2YAvWBpAGwA9AASBQABZHJYGlsaYwB5AEpkAKGUIWN3YBpkGmkAcgAAoEgpAKCtIWEAcgAAoA8h6SFyYyVhgAFhbHIAcxp7Gn8a8iF0c3WgZSZpAHQAAKBlJuwhaXAAoCYg4yFvbgCguSJyAADgNdgl3XMAAAFld4wakRphInJvdwAAoCUpYSJyb3cAAKAmKYACYW1vcHIAnxqjGqcauhq+GnIAcgAAoP8h9CFodACgOyJrAAABbHKsGrMaZSRmdGFycm93AACgqSHpJGdodGFycm93AKCqIWYAAOA12Fnd4iFhcgCgFSCAAWNsdADIGswa0BpyAADgNdi93GEAcwDoAGka8iFvaydhAAFicNca2xr1IWxsAKBDIOghZW4AoBAg4Qr2GgAA/RoAAAgbExsaGwAAIRs7GwAAAAA+G2IbmRuVG6sbAACyG80b0htjAHUAdABlADuA7QDtQAChYyBpeQEbBhtyAGMAO4DuAO5AOGQAAWN4CxsNG3kANWRjAGwAO4ChAKFAAAFmcssCFhsA4DXYJt1yAGEAdgBlADuA7ADsQIChSCFpbm8AJxsyGzYbAAFpbisbLxtuAHQAAKAMKnQAAKAtIuYhaW4AoNwpdABhAACgKSHsIWlnM2GAAWFvcABDG1sbXhuAAWNndABJG0sbWRtyACthgAFlbHAAcQVRG1UbaQBuAOUAyAVhAHIA9AByBWgAMWFmAACgtyJlAGQAtWEAoggiY2ZvdGkbbRt1G3kb4SFyZQCgBSFpAG4AdKAeImkAZQAAoN0pZABvAPQAWxsAoisiY2VscIEbhRuPG5QbYQBsAACguiIAAWdyiRuNG2UAcgDzACMQ4wCCG2EicmhrAACgFyryIW9kAKA8KgACY2dwdJ8boRukG6gbeQBRZG8AbgAvYWYAAOA12FrdYQC5Y3UAZQBzAHQAO4C/AL9AAAFjabUbuRtyAADgNdi+3G4AAKIIIkVkc3bCG8QbyBvQAwCg+SJvAHQAAKD1Inag9CIAoPMiaaBiIOwhZGUpYesB1hsAANkbYwB5AFZkbAA7gO8A70AAA2NmbW9zdeYb7hvyG/Ub+hsFHAABaXnqG+0bcgBjADVhOWRyAADgNdgn3eEhdGg3YnAAZgAA4DXYW93jAf8bAAADHHIAAOA12L/c8iFjeVhk6yFjeVRkAARhY2ZnaGpvcxUcGhwiHCYcKhwtHDAcNRzwIXBhdqC6A/BjAAFleR4cIRzkIWls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ZmdobG1vcHJzdHV3CiwNLBEsHSwnLDEsQCxLLFIsYix6LIQsjyzLLOgs7Sz/LAotcgDyAAkDYQByAACgYykAAWNyFSwbLHUAdABlADuA+gD6QPIACQ1yAOMBIywAACUseQBeZHYAZQBtYQABaXkrLDAscgBjADuA+wD7QENkgAFhYmgANyw6LD0scgDyANEO7CFhY3FhYQDyAOAOAAFpckQsSCzzIWh0AKB+KQDgNdgy3XIAYQB2AGUAO4D5APlAYQFWLF8scgAAAWxyWixcLACgvyEAoL4hbABrAACggCUAAWN0Zix2LG8CbCwAAAAAcyxyAG4AZaAcI3IAAKAcI28AcAAAoA8jcgBpAACg+CUAAWFsfiyBLGMAcgBrYTuAqACoQAABZ3CILIssbwBuAHNhZgAA4DXYZt0AA2FkaGxzdZksniynLLgsuyzFLHIAcgBvAPcACQ1vAHcAbgBhAHIAcgBvAPcA2A5hI3Jwb29uAAABbHKvLLMsZQBmAPQAWyxpAGcAaAD0AF0sdQDzAKYOaQAAocUDaGzBLMIs0mNvAG4AxWPwI2Fycm93cwCgyCGAAWNpdADRLOEs5CxvAtcsAAAAAN4scgBuAGWgHSNyAACgHSNvAHAAAKAOI24AZwBvYXIAaQAAoPklYwByAADgNdjK3IABZGlyAPMs9yz6LG8AdAAAoPAi7CFkZWlhaQBmoLUlAKC0JQABYW0DLQYtcgDyAMosbAA7gPwA/EDhIm5nbGUAoKcpgAdBQkRhY2RlZmxub3Byc3oAJy0qLTAtNC2bLZ0toS2/LcMtxy3TLdgt3C3gLfwtcgDyABADYQByAHag6CoAoOkqYQBzAOgA/gIAAW5yOC08LechcnQAoJwpgANla25wcnN0AJkpSC1NLVQtXi1iLYItYQBwAHAA4QAaHG8AdABoAGkAbgDnAKEXgAFoaXIAoSmzJFotbwBwAPQAdCVooJUh7wD4JgABaXVmLWotZwBtAOEAuygAAWJwbi14LXMjZXRuZXEAceCKIgD+AODLKgD+cyNldG5lcQBx4IsiAP4A4MwqAP4AAWhyhi2KLWUAdADhABIraSNhbmdsZQAAAWxyki2WLeUhZnQAoLIiaSJnaHQAAKCzInkAMmThIXNoAKCiIoABZWxyAKcttC24LWKiKCKuLQAAAACyLWEAcgAAoLsicQAAoFoi7CFpcACg7iIAAWJ0vC1eD2EA8gBfD3IAAOA12DPddAByAOkAlS1zAHUAAAFicM0t0C0A4IIi0iAA4IMi0iBwAGYAAOA12GfdcgBvAPAAWQt0AHIA6QCaLQABY3XkLegtcgAA4DXYy9wAAWJw7C30LW4AAAFFZXUt8S0A4IoiAP5uAAABRWV/LfktAOCLIgD+6SJnemFnAKCaKYADY2Vmb3BycwANLhAuJS4pLiMuLi40LukhcmN1YQABZGkULiEuAAFiZxguHC5hAHIAAKBfKmUAcaAnIgCgWSLlIXJwAKAYIXIAAOA12DTdcABmAADgNdho3WWgQCJhAHQA6ABqD2MAcgAA4DXYzNzjCuQRUC4AAFQuAABYLmIuAAAAAGMubS5wLnQuAAAAAIguki4AAJouJxIqEnQAcgDpAB0ScgAA4DXYNd0AAUFhWy5eLnIA8gDnAnIA8gCTB75jAAFBYWYuaS5yAPIA4AJyAPIAjAdhAPAAeh5pAHMAAKD7IoABZHB0APgReS6DLgABZmx9LoAuAOA12GnddQDzAP8RaQBtAOUABBIAAUFhiy6OLnIA8gDuAnIA8gCaBwABY3GVLgoScgAA4DXYzdwAAXB0nS6hLmwAdQDzACUScgDpACASAARhY2VmaW9zdbEuvC7ELsguzC7PLtQu2S5jAAABdXm2LrsudABlADuA/QD9QE9kAAFpecAuwy5yAGMAd2FLZG4AO4ClAKVAcgAA4DXYNt1jAHkAV2RwAGYAAOA12GrdYwByAADgNdjO3AABY23dLt8ueQBOZGwAO4D/AP9AAAVhY2RlZmhpb3N38y73Lv8uAi8MLxAvEy8YLx0vIi9jInV0ZQB6YQABYXn7Lv4u8iFvbn5hN2RvAHQAfGEAAWV0Bi8KL3QAcgDmAB8QYQC2Y3IAAOA12DfdYwB5ADZk5yJyYXJyAKDdIXAAZgAA4DXYa91jAHIAAOA12M/cAAFqbiYvKC8AoA0gagAAoAwg");
}),
"[project]/node_modules/entities/dist/generated/decode-data-xml.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xmlDecodeTree",
    ()=>xmlDecodeTree
]);
// Generated using scripts/write-decode-map.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$decode$2d$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/entities/dist/internal/decode-shared.js [app-ssr] (ecmascript)");
;
const xmlDecodeTree = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$internal$2f$decode$2d$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBase64"])("AAJhZ2xxBwARABMAFQBtAg0AAAAAAA8AcAAmYG8AcwAnYHQAPmB0ADxg9SFvdCJg");
}),
"[project]/node_modules/entities/dist/internal/bin-trie-flags.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Bit flags & masks for the binary trie encoding used for entity decoding.
 *
 * Bit layout (16 bits total):
 * 15..14 VALUE_LENGTH   (+1 encoding; 0 => no value)
 * 13     FLAG13.        If valueLength>0: semicolon required flag (implicit ';').
 *                       If valueLength==0: compact run flag.
 * 12..7  BRANCH_LENGTH  Branch length (0 => single branch in 6..0 if jumpOffset==char) OR run length (when compact run)
 * 6..0   JUMP_TABLE     Jump offset (jump table) OR single-branch char code OR first run char
 */ __turbopack_context__.s([
    "BinTrieFlags",
    ()=>BinTrieFlags
]);
var BinTrieFlags;
(function(BinTrieFlags) {
    BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
    BinTrieFlags[BinTrieFlags["FLAG13"] = 8192] = "FLAG13";
    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 8064] = "BRANCH_LENGTH";
    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
}),
"[project]/node_modules/entities/dist/internal/decode-shared.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Shared base64 decode helper for generated decode data.
 * Assumes global atob is available.
 * @param input Input string to encode or decode.
 */ __turbopack_context__.s([
    "decodeBase64",
    ()=>decodeBase64
]);
function decodeBase64(input) {
    const binary = atob(input);
    const evenLength = binary.length & ~1; // Round down to even length
    const out = new Uint16Array(evenLength / 2);
    for(let index = 0, outIndex = 0; index < evenLength; index += 2){
        const lo = binary.charCodeAt(index);
        const hi = binary.charCodeAt(index + 1);
        out[outIndex++] = lo | hi << 8;
    }
    return out;
}
}),
"[project]/node_modules/escape-string-regexp/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (string)=>{
    if (typeof string !== 'string') {
        throw new TypeError('Expected a string');
    }
    // Escape characters with special meaning either inside or outside character sets.
    // Use a simple backslash escape when it’s always valid, and a \unnnn escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
    return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
};
}),
"[project]/node_modules/htmlparser2/dist/Parser.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Parser",
    ()=>Parser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/dist/Tokenizer.js [app-ssr] (ecmascript)");
const { fromCodePoint } = String;
;
const formTags = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea"
]);
const pTag = new Set([
    "p"
]);
const headingTags = new Set([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p"
]);
const tableSectionTags = new Set([
    "thead",
    "tbody"
]);
const ddtTags = new Set([
    "dd",
    "dt"
]);
const rtpTags = new Set([
    "rt",
    "rp"
]);
const openImpliesClose = new Map([
    [
        "tr",
        new Set([
            "tr",
            "th",
            "td"
        ])
    ],
    [
        "th",
        new Set([
            "th"
        ])
    ],
    [
        "td",
        new Set([
            "thead",
            "th",
            "td"
        ])
    ],
    [
        "body",
        new Set([
            "head",
            "link",
            "script"
        ])
    ],
    [
        "a",
        new Set([
            "a"
        ])
    ],
    [
        "li",
        new Set([
            "li"
        ])
    ],
    [
        "p",
        pTag
    ],
    [
        "h1",
        headingTags
    ],
    [
        "h2",
        headingTags
    ],
    [
        "h3",
        headingTags
    ],
    [
        "h4",
        headingTags
    ],
    [
        "h5",
        headingTags
    ],
    [
        "h6",
        headingTags
    ],
    [
        "select",
        formTags
    ],
    [
        "input",
        formTags
    ],
    [
        "output",
        formTags
    ],
    [
        "button",
        formTags
    ],
    [
        "datalist",
        formTags
    ],
    [
        "textarea",
        formTags
    ],
    [
        "option",
        new Set([
            "option"
        ])
    ],
    [
        "optgroup",
        new Set([
            "optgroup",
            "option"
        ])
    ],
    [
        "dd",
        ddtTags
    ],
    [
        "dt",
        ddtTags
    ],
    [
        "address",
        pTag
    ],
    [
        "article",
        pTag
    ],
    [
        "aside",
        pTag
    ],
    [
        "blockquote",
        pTag
    ],
    [
        "details",
        pTag
    ],
    [
        "div",
        pTag
    ],
    [
        "dl",
        pTag
    ],
    [
        "fieldset",
        pTag
    ],
    [
        "figcaption",
        pTag
    ],
    [
        "figure",
        pTag
    ],
    [
        "footer",
        pTag
    ],
    [
        "form",
        pTag
    ],
    [
        "header",
        pTag
    ],
    [
        "hr",
        pTag
    ],
    [
        "main",
        pTag
    ],
    [
        "nav",
        pTag
    ],
    [
        "ol",
        pTag
    ],
    [
        "pre",
        pTag
    ],
    [
        "section",
        pTag
    ],
    [
        "table",
        pTag
    ],
    [
        "ul",
        pTag
    ],
    [
        "rt",
        rtpTags
    ],
    [
        "rp",
        rtpTags
    ],
    [
        "tbody",
        tableSectionTags
    ],
    [
        "tfoot",
        tableSectionTags
    ]
]);
const DOCUMENT_TYPE = "doctype";
const voidElements = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]);
const foreignContextElements = new Set([
    "math",
    "svg"
]);
/**
 * Elements that can be used to integrate HTML content within foreign namespaces (e.g., SVG or MathML).
 *
 * Entries must use the SVG-adjusted casing (e.g. "foreignObject" not
 * "foreignobject") since they are compared against adjusted tag names.
 */ const htmlIntegrationElements = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title"
]);
const svgTagNameAdjustments = new Map([
    [
        "altglyph",
        "altGlyph"
    ],
    [
        "altglyphdef",
        "altGlyphDef"
    ],
    [
        "altglyphitem",
        "altGlyphItem"
    ],
    [
        "animatecolor",
        "animateColor"
    ],
    [
        "animatemotion",
        "animateMotion"
    ],
    [
        "animatetransform",
        "animateTransform"
    ],
    [
        "clippath",
        "clipPath"
    ],
    [
        "feblend",
        "feBlend"
    ],
    [
        "fecolormatrix",
        "feColorMatrix"
    ],
    [
        "fecomponenttransfer",
        "feComponentTransfer"
    ],
    [
        "fecomposite",
        "feComposite"
    ],
    [
        "feconvolvematrix",
        "feConvolveMatrix"
    ],
    [
        "fediffuselighting",
        "feDiffuseLighting"
    ],
    [
        "fedisplacementmap",
        "feDisplacementMap"
    ],
    [
        "fedistantlight",
        "feDistantLight"
    ],
    [
        "fedropshadow",
        "feDropShadow"
    ],
    [
        "feflood",
        "feFlood"
    ],
    [
        "fefunca",
        "feFuncA"
    ],
    [
        "fefuncb",
        "feFuncB"
    ],
    [
        "fefuncg",
        "feFuncG"
    ],
    [
        "fefuncr",
        "feFuncR"
    ],
    [
        "fegaussianblur",
        "feGaussianBlur"
    ],
    [
        "feimage",
        "feImage"
    ],
    [
        "femerge",
        "feMerge"
    ],
    [
        "femergenode",
        "feMergeNode"
    ],
    [
        "femorphology",
        "feMorphology"
    ],
    [
        "feoffset",
        "feOffset"
    ],
    [
        "fepointlight",
        "fePointLight"
    ],
    [
        "fespecularlighting",
        "feSpecularLighting"
    ],
    [
        "fespotlight",
        "feSpotLight"
    ],
    [
        "fetile",
        "feTile"
    ],
    [
        "feturbulence",
        "feTurbulence"
    ],
    [
        "foreignobject",
        "foreignObject"
    ],
    [
        "glyphref",
        "glyphRef"
    ],
    [
        "lineargradient",
        "linearGradient"
    ],
    [
        "radialgradient",
        "radialGradient"
    ],
    [
        "textpath",
        "textPath"
    ]
]);
var ForeignContext;
(function(ForeignContext) {
    ForeignContext[ForeignContext["None"] = 0] = "None";
    ForeignContext[ForeignContext["Svg"] = 1] = "Svg";
    ForeignContext[ForeignContext["MathML"] = 2] = "MathML";
})(ForeignContext || (ForeignContext = {}));
const reNameEnd = /\s|\//;
class Parser {
    options;
    /** The start index of the last event. */ startIndex = 0;
    /** The end index of the last event. */ endIndex = 0;
    /**
     * Store the start index of the current open tag,
     * so we can update the start index for attributes.
     */ openTagStart = 0;
    tagname = "";
    attribname = "";
    attribvalue = "";
    attribs = null;
    stack = [];
    foreignContext;
    cbs;
    lowerCaseTagNames;
    lowerCaseAttributeNames;
    recognizeSelfClosing;
    /** We are parsing HTML. Inverse of the `xmlMode` option. */ htmlMode;
    tokenizer;
    buffers = [];
    bufferOffset = 0;
    /** The index of the last written buffer. Used when resuming after a `pause()`. */ writeIndex = 0;
    /** Indicates whether the parser has finished running / `.end` has been called. */ ended = false;
    constructor(cbs, options = {}){
        this.options = options;
        this.cbs = cbs ?? {};
        this.htmlMode = !this.options.xmlMode;
        this.lowerCaseTagNames = options.lowerCaseTags ?? this.htmlMode;
        this.lowerCaseAttributeNames = options.lowerCaseAttributeNames ?? this.htmlMode;
        this.recognizeSelfClosing = options.recognizeSelfClosing ?? !this.htmlMode;
        this.tokenizer = new (options.Tokenizer ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this.options, this);
        this.foreignContext = [
            ForeignContext.None
        ];
        this.cbs.onparserinit?.(this);
    }
    // Tokenizer event handlers
    /**
     * @param start Start index for the current parser event.
     * @param endIndex End index for the current parser event.
     * @internal
     */ ontext(start, endIndex) {
        const data = this.getSlice(start, endIndex);
        this.endIndex = endIndex - 1;
        this.cbs.ontext?.(data);
        this.startIndex = endIndex;
    }
    /**
     * @param cp Current Unicode code point.
     * @param endIndex End index for the current parser event.
     * @internal
     */ ontextentity(cp, endIndex) {
        this.endIndex = endIndex - 1;
        this.cbs.ontext?.(fromCodePoint(cp));
        this.startIndex = endIndex;
    }
    /** @internal */ isInForeignContext() {
        return this.foreignContext[0] !== ForeignContext.None;
    }
    /**
     * Checks if the current tag is a void element. Override this if you want
     * to specify your own additional void elements.
     * @param name Name of the pseudo selector.
     */ isVoidElement(name) {
        return this.htmlMode && voidElements.has(name);
    }
    /**
     * Read a tag name from the buffer.
     *
     * When `lowerCaseTagNames` is enabled (the default in HTML mode), the name
     * is lowercased and may be adjusted for SVG casing or the `image` → `img`
     * alias.
     * @param start Start index of the tag name in the buffer.
     * @param endIndex End index of the tag name in the buffer.
     */ readTagName(start, endIndex) {
        const name = this.lowerCaseTagNames ? this.getSlice(start, endIndex).toLowerCase() : this.getSlice(start, endIndex);
        if (!(this.lowerCaseTagNames && this.htmlMode)) {
            return name;
        }
        if (this.foreignContext[0] === ForeignContext.Svg) {
            return svgTagNameAdjustments.get(name) ?? name;
        }
        /*
         * Closing tags for SVG elements inside HTML integration points
         * (e.g. </foreignObject> while inside its own content) need case
         * adjustment so the name matches what was pushed to the stack.
         * `foreignContext.length > 1` means a foreign ancestor exists —
         * the base [None] entry plus at least one pushed context.
         */ if (this.foreignContext.length > 1) {
            const adjusted = svgTagNameAdjustments.get(name);
            if (adjusted !== undefined && this.stack.includes(adjusted)) {
                return adjusted;
            }
        }
        if (!this.isInForeignContext()) {
            return name === "image" ? "img" : name;
        }
        return name;
    }
    /**
     * @param start Start index for the current parser event.
     * @param endIndex End index for the current parser event.
     * @internal
     */ onopentagname(start, endIndex) {
        this.endIndex = endIndex;
        this.emitOpenTag(this.readTagName(start, endIndex));
    }
    emitOpenTag(name) {
        this.openTagStart = this.startIndex;
        this.tagname = name;
        /*
         * The spec ignores a second <form> when one is already open.
         * Setting tagname to "" suppresses all downstream effects: attribs
         * stays null so endOpenTag is a no-op, and closeCurrentTag can't
         * match "" on the stack.
         */ if (this.htmlMode && name === "form" && this.stack.includes("form")) {
            this.tagname = "";
            return;
        }
        const impliesClose = this.htmlMode && openImpliesClose.get(name);
        if (impliesClose) {
            while(this.stack.length > 0 && impliesClose.has(this.stack[0])){
                this.popElement(true);
            }
        }
        if (!this.isVoidElement(name)) {
            this.stack.unshift(name);
            if (this.htmlMode) {
                if (name === "svg") {
                    this.foreignContext.unshift(ForeignContext.Svg);
                } else if (name === "math") {
                    this.foreignContext.unshift(ForeignContext.MathML);
                } else if (htmlIntegrationElements.has(name)) {
                    this.foreignContext.unshift(ForeignContext.None);
                }
            }
        }
        this.cbs.onopentagname?.(name);
        if (this.cbs.onopentag) this.attribs = {};
    }
    endOpenTag(isImplied) {
        this.startIndex = this.openTagStart;
        if (this.attribs) {
            this.cbs.onopentag?.(this.tagname, this.attribs, isImplied);
            this.attribs = null;
        }
        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
            this.cbs.onclosetag(this.tagname, true);
        }
        this.tagname = "";
    }
    /**
     * @param endIndex End index for the current parser event.
     * @internal
     */ onopentagend(endIndex) {
        this.endIndex = endIndex;
        this.endOpenTag(false);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /**
     * @param start Start index for the current parser event.
     * @param endIndex End index for the current parser event.
     * @internal
     */ onclosetag(start, endIndex) {
        this.endIndex = endIndex;
        const name = this.readTagName(start, endIndex);
        if (!this.isVoidElement(name)) {
            const pos = this.stack.indexOf(name);
            if (pos !== -1) {
                for(let index = 0; index < pos; index++){
                    this.popElement(true);
                }
                this.popElement(false);
            } else if (this.htmlMode && name === "p") {
                // Implicit open before close
                this.emitOpenTag("p");
                this.closeCurrentTag(true);
            }
        } else if (this.htmlMode && name === "br") {
            // We can't use `emitOpenTag` for implicit open, as `br` would be implicitly closed.
            this.cbs.onopentagname?.("br");
            this.cbs.onopentag?.("br", {}, true);
            this.cbs.onclosetag?.("br", false);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /**
     * @param endIndex End index for the current parser event.
     * @internal
     */ onselfclosingtag(endIndex) {
        this.endIndex = endIndex;
        if (this.recognizeSelfClosing || this.isInForeignContext()) {
            this.closeCurrentTag(false);
            // Set `startIndex` for next node
            this.startIndex = endIndex + 1;
        } else {
            // Ignore the fact that the tag is self-closing.
            this.onopentagend(endIndex);
        }
    }
    /**
     * Pop the top element off the stack, emit a close event, and maintain
     * the foreign context stack.
     * @param implied Whether this close is implied (not from an explicit end tag).
     */ popElement(implied) {
        // biome-ignore lint/style/noNonNullAssertion: The element is guaranteed to exist.
        const element = this.stack.shift();
        if (this.htmlMode && (foreignContextElements.has(element) || htmlIntegrationElements.has(element))) {
            this.foreignContext.shift();
        }
        this.cbs.onclosetag?.(element, implied);
    }
    closeCurrentTag(isOpenImplied) {
        const name = this.tagname;
        this.endOpenTag(isOpenImplied);
        // Self-closing tags will be on the top of the stack
        if (this.stack[0] === name) {
            this.popElement(!isOpenImplied);
        }
    }
    /**
     * @param start Start index for the current parser event.
     * @param endIndex End index for the current parser event.
     * @internal
     */ onattribname(start, endIndex) {
        this.startIndex = start;
        const name = this.getSlice(start, endIndex);
        this.attribname = this.lowerCaseAttributeNames ? name.toLowerCase() : name;
    }
    /**
     * @param start Start index for the current parser event.
     * @param endIndex End index for the current parser event.
     * @internal
     */ onattribdata(start, endIndex) {
        this.attribvalue += this.getSlice(start, endIndex);
    }
    /**
     * @param cp Current Unicode code point.
     * @internal
     */ onattribentity(cp) {
        this.attribvalue += fromCodePoint(cp);
    }
    /**
     * @param quote Quote type used for the current attribute.
     * @param endIndex End index for the current parser event.
     * @internal
     */ onattribend(quote, endIndex) {
        this.endIndex = endIndex;
        this.cbs.onattribute?.(this.attribname, this.attribvalue, quote === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuoteType"].Double ? '"' : quote === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuoteType"].Single ? "'" : quote === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuoteType"].NoValue ? undefined : null);
        if (this.attribs && !Object.hasOwn(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribvalue = "";
    }
    getInstructionName(value) {
        const index = value.search(reNameEnd);
        let name = index < 0 ? value : value.substr(0, index);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        return name;
    }
    /**
     * @param start Start index for the current parser event.
     * @param endIndex End index for the current parser event.
     * @internal
     */ ondeclaration(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            /*
             * In HTML mode, ondeclaration is only reached for DOCTYPE
             * (the tokenizer routes everything else to bogus comments).
             */ const name = this.htmlMode ? this.lowerCaseTagNames ? DOCUMENT_TYPE : value.slice(0, DOCUMENT_TYPE.length) : this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`!${name}`, `!${value}`);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /**
     * @param start Start index for the current parser event.
     * @param endIndex End index for the current parser event.
     * @internal
     */ onprocessinginstruction(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`?${name}`, `?${value}`);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /**
     * @param start Start index for the current parser event.
     * @param endIndex End index for the current parser event.
     * @param offset Offset applied when computing parser indices.
     * @internal
     */ oncomment(start, endIndex, offset) {
        this.endIndex = endIndex;
        this.cbs.oncomment?.(this.getSlice(start, endIndex - offset));
        this.cbs.oncommentend?.();
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /**
     * @param start Start index for the current parser event.
     * @param endIndex End index for the current parser event.
     * @param offset Offset applied when computing parser indices.
     * @internal
     */ oncdata(start, endIndex, offset) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex - offset);
        if (!this.htmlMode || this.options.recognizeCDATA) {
            this.cbs.oncdatastart?.();
            this.cbs.ontext?.(value);
            this.cbs.oncdataend?.();
        } else if (this.isInForeignContext()) {
            this.cbs.ontext?.(value);
        } else {
            this.cbs.oncomment?.(`[CDATA[${value}]]`);
            this.cbs.oncommentend?.();
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ onend() {
        if (this.cbs.onclosetag) {
            // Set the end index for all remaining tags
            this.endIndex = this.startIndex;
            for(let index = 0; index < this.stack.length; index++){
                this.cbs.onclosetag(this.stack[index], true);
            }
        }
        this.cbs.onend?.();
    }
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */ reset() {
        this.cbs.onreset?.();
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack.length = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        this.cbs.onparserinit?.(this);
        this.buffers.length = 0;
        this.foreignContext.length = 0;
        this.foreignContext.unshift(ForeignContext.None);
        this.bufferOffset = 0;
        this.writeIndex = 0;
        this.ended = false;
    }
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     * @param data Document to parse.
     */ parseComplete(data) {
        this.reset();
        this.end(data);
    }
    getSlice(start, end) {
        if (start === end) {
            return "";
        }
        while(start - this.bufferOffset >= this.buffers[0].length){
            this.shiftBuffer();
        }
        let slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
        while(end - this.bufferOffset > this.buffers[0].length){
            this.shiftBuffer();
            slice += this.buffers[0].slice(0, end - this.bufferOffset);
        }
        return slice;
    }
    shiftBuffer() {
        this.bufferOffset += this.buffers[0].length;
        this.writeIndex--;
        this.buffers.shift();
    }
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     * @param chunk Chunk to parse.
     */ write(chunk) {
        if (this.ended) {
            this.cbs.onerror?.(new Error(".write() after done!"));
            return;
        }
        this.buffers.push(chunk);
        if (this.tokenizer.running) {
            this.tokenizer.write(chunk);
            this.writeIndex++;
        }
    }
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     * @param chunk Optional final chunk to parse.
     */ end(chunk) {
        if (this.ended) {
            this.cbs.onerror?.(new Error(".end() after done!"));
            return;
        }
        if (chunk) this.write(chunk);
        this.ended = true;
        this.tokenizer.end();
    }
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */ pause() {
        this.tokenizer.pause();
    }
    /**
     * Resumes parsing after `pause` was called.
     */ resume() {
        this.tokenizer.resume();
        while(this.tokenizer.running && this.writeIndex < this.buffers.length){
            this.tokenizer.write(this.buffers[this.writeIndex++]);
        }
        if (this.ended) this.tokenizer.end();
    }
}
}),
"[project]/node_modules/htmlparser2/dist/Tokenizer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuoteType",
    ()=>QuoteType,
    "default",
    ()=>Tokenizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/entities/dist/decode.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$generated$2f$decode$2d$data$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/entities/dist/generated/decode-data-html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$generated$2f$decode$2d$data$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/entities/dist/generated/decode-data-xml.js [app-ssr] (ecmascript)");
;
var CharCodes;
(function(CharCodes) {
    CharCodes[CharCodes["Tab"] = 9] = "Tab";
    CharCodes[CharCodes["NewLine"] = 10] = "NewLine";
    CharCodes[CharCodes["FormFeed"] = 12] = "FormFeed";
    CharCodes[CharCodes["CarriageReturn"] = 13] = "CarriageReturn";
    CharCodes[CharCodes["Space"] = 32] = "Space";
    CharCodes[CharCodes["ExclamationMark"] = 33] = "ExclamationMark";
    CharCodes[CharCodes["Number"] = 35] = "Number";
    CharCodes[CharCodes["Amp"] = 38] = "Amp";
    CharCodes[CharCodes["SingleQuote"] = 39] = "SingleQuote";
    CharCodes[CharCodes["DoubleQuote"] = 34] = "DoubleQuote";
    CharCodes[CharCodes["Dash"] = 45] = "Dash";
    CharCodes[CharCodes["Slash"] = 47] = "Slash";
    CharCodes[CharCodes["Zero"] = 48] = "Zero";
    CharCodes[CharCodes["Nine"] = 57] = "Nine";
    CharCodes[CharCodes["Semi"] = 59] = "Semi";
    CharCodes[CharCodes["Lt"] = 60] = "Lt";
    CharCodes[CharCodes["Eq"] = 61] = "Eq";
    CharCodes[CharCodes["Gt"] = 62] = "Gt";
    CharCodes[CharCodes["Questionmark"] = 63] = "Questionmark";
    CharCodes[CharCodes["UpperA"] = 65] = "UpperA";
    CharCodes[CharCodes["LowerA"] = 97] = "LowerA";
    CharCodes[CharCodes["UpperF"] = 70] = "UpperF";
    CharCodes[CharCodes["LowerF"] = 102] = "LowerF";
    CharCodes[CharCodes["UpperZ"] = 90] = "UpperZ";
    CharCodes[CharCodes["LowerZ"] = 122] = "LowerZ";
    CharCodes[CharCodes["LowerX"] = 120] = "LowerX";
    CharCodes[CharCodes["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(CharCodes || (CharCodes = {}));
/** All the states the tokenizer can be in. */ var State;
(function(State) {
    State[State["Text"] = 1] = "Text";
    State[State["BeforeTagName"] = 2] = "BeforeTagName";
    State[State["InTagName"] = 3] = "InTagName";
    State[State["InSelfClosingTag"] = 4] = "InSelfClosingTag";
    State[State["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
    State[State["InClosingTagName"] = 6] = "InClosingTagName";
    State[State["AfterClosingTagName"] = 7] = "AfterClosingTagName";
    // Attributes
    State[State["BeforeAttributeName"] = 8] = "BeforeAttributeName";
    State[State["InAttributeName"] = 9] = "InAttributeName";
    State[State["AfterAttributeName"] = 10] = "AfterAttributeName";
    State[State["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
    State[State["InAttributeValueDq"] = 12] = "InAttributeValueDq";
    State[State["InAttributeValueSq"] = 13] = "InAttributeValueSq";
    State[State["InAttributeValueNq"] = 14] = "InAttributeValueNq";
    // Declarations
    State[State["BeforeDeclaration"] = 15] = "BeforeDeclaration";
    State[State["InDeclaration"] = 16] = "InDeclaration";
    // Processing instructions
    State[State["InProcessingInstruction"] = 17] = "InProcessingInstruction";
    // Comments & CDATA
    State[State["BeforeComment"] = 18] = "BeforeComment";
    State[State["CDATASequence"] = 19] = "CDATASequence";
    State[State["DeclarationSequence"] = 20] = "DeclarationSequence";
    State[State["InSpecialComment"] = 21] = "InSpecialComment";
    State[State["InCommentLike"] = 22] = "InCommentLike";
    // Special tags
    State[State["SpecialStartSequence"] = 23] = "SpecialStartSequence";
    State[State["InSpecialTag"] = 24] = "InSpecialTag";
    State[State["InPlainText"] = 25] = "InPlainText";
    State[State["InEntity"] = 26] = "InEntity";
})(State || (State = {}));
function isWhitespace(c) {
    return c === CharCodes.Space || c === CharCodes.NewLine || c === CharCodes.Tab || c === CharCodes.FormFeed || c === CharCodes.CarriageReturn;
}
function isEndOfTagSection(c) {
    return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace(c);
}
function isASCIIAlpha(c) {
    return c >= CharCodes.LowerA && c <= CharCodes.LowerZ || c >= CharCodes.UpperA && c <= CharCodes.UpperZ;
}
var QuoteType;
(function(QuoteType) {
    QuoteType[QuoteType["NoValue"] = 0] = "NoValue";
    QuoteType[QuoteType["Unquoted"] = 1] = "Unquoted";
    QuoteType[QuoteType["Single"] = 2] = "Single";
    QuoteType[QuoteType["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
/**
 * Sequences used to match longer strings.
 *
 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
 * sequences with an increased offset.
 */ const Sequences = {
    Empty: new Uint8Array(0),
    Cdata: new Uint8Array([
        0x43,
        0x44,
        0x41,
        0x54,
        0x41,
        0x5b
    ]),
    CdataEnd: new Uint8Array([
        0x5d,
        0x5d,
        0x3e
    ]),
    CommentEnd: new Uint8Array([
        0x2d,
        0x2d,
        0x21,
        0x3e
    ]),
    Doctype: new Uint8Array([
        0x64,
        0x6f,
        0x63,
        0x74,
        0x79,
        0x70,
        0x65
    ]),
    IframeEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x69,
        0x66,
        0x72,
        0x61,
        0x6d,
        0x65
    ]),
    NoembedEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x6e,
        0x6f,
        0x65,
        0x6d,
        0x62,
        0x65,
        0x64
    ]),
    NoframesEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x6e,
        0x6f,
        0x66,
        0x72,
        0x61,
        0x6d,
        0x65,
        0x73
    ]),
    Plaintext: new Uint8Array([
        0x3c,
        0x2f,
        0x70,
        0x6c,
        0x61,
        0x69,
        0x6e,
        0x74,
        0x65,
        0x78,
        0x74
    ]),
    ScriptEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x73,
        0x63,
        0x72,
        0x69,
        0x70,
        0x74
    ]),
    StyleEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x73,
        0x74,
        0x79,
        0x6c,
        0x65
    ]),
    TitleEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x74,
        0x69,
        0x74,
        0x6c,
        0x65
    ]),
    TextareaEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x74,
        0x65,
        0x78,
        0x74,
        0x61,
        0x72,
        0x65,
        0x61
    ]),
    XmpEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x78,
        0x6d,
        0x70
    ])
};
/**
 * Maps the first lowercase character of an HTML tag name to the sequence
 * used for special-tag detection.  All sequences share a common layout
 * where index 2 is the first tag-name character, so matching always
 * continues from offset 3.
 */ const specialStartSequences = new Map([
    [
        Sequences.IframeEnd[2],
        Sequences.IframeEnd
    ],
    [
        Sequences.NoembedEnd[2],
        Sequences.NoembedEnd
    ],
    [
        Sequences.Plaintext[2],
        Sequences.Plaintext
    ],
    [
        Sequences.ScriptEnd[2],
        Sequences.ScriptEnd
    ],
    [
        Sequences.TitleEnd[2],
        Sequences.TitleEnd
    ],
    [
        Sequences.XmpEnd[2],
        Sequences.XmpEnd
    ]
]);
class Tokenizer {
    cbs;
    /** The current state the tokenizer is in. */ state = State.Text;
    /** The read buffer. */ buffer = "";
    /** The beginning of the section that is currently being read. */ sectionStart = 0;
    /** The index within the buffer that we are currently looking at. */ index = 0;
    /** The start of the last entity. */ entityStart = 0;
    /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */ baseState = State.Text;
    /** For special parsing behavior inside of script and style tags. */ isSpecial = false;
    /** Indicates whether the tokenizer has been paused. */ running = true;
    /** The offset of the current buffer. */ offset = 0;
    xmlMode;
    decodeEntities;
    recognizeSelfClosing;
    entityDecoder;
    constructor({ xmlMode = false, decodeEntities = true, recognizeSelfClosing = xmlMode }, cbs){
        this.cbs = cbs;
        this.xmlMode = xmlMode;
        this.decodeEntities = decodeEntities;
        this.recognizeSelfClosing = recognizeSelfClosing;
        this.entityDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EntityDecoder"](xmlMode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$generated$2f$decode$2d$data$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xmlDecodeTree"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$generated$2f$decode$2d$data$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["htmlDecodeTree"], (cp, consumed)=>this.emitCodePoint(cp, consumed));
    }
    reset() {
        this.state = State.Text;
        this.buffer = "";
        this.sectionStart = 0;
        this.index = 0;
        this.baseState = State.Text;
        this.isSpecial = false;
        this.currentSequence = Sequences.Empty;
        this.sequenceIndex = 0;
        this.running = true;
        this.offset = 0;
    }
    write(chunk) {
        this.offset += this.buffer.length;
        this.buffer = chunk;
        this.parse();
    }
    end() {
        if (this.running) this.finish();
    }
    pause() {
        this.running = false;
    }
    resume() {
        this.running = true;
        if (this.index < this.buffer.length + this.offset) {
            this.parse();
        }
    }
    stateText(c) {
        if (c === CharCodes.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes.Lt)) {
            if (this.index > this.sectionStart) {
                this.cbs.ontext(this.sectionStart, this.index);
            }
            this.state = State.BeforeTagName;
            this.sectionStart = this.index;
        } else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
        }
    }
    currentSequence = Sequences.Empty;
    sequenceIndex = 0;
    enterTagBody() {
        if (this.currentSequence === Sequences.Plaintext) {
            this.currentSequence = Sequences.Empty;
            this.state = State.InPlainText;
        } else if (this.isSpecial) {
            this.state = State.InSpecialTag;
            this.sequenceIndex = 0;
        } else {
            this.state = State.Text;
        }
    }
    /**
     * Match the opening tag name against an HTML text-only tag sequence.
     *
     * Some tags share an initial prefix (`script`/`style`, `title`/`textarea`,
     * `noembed`/`noframes`), so we may switch to an alternate sequence at the
     * first distinguishing byte.  On a successful full match we fall back to
     * the normal tag-name state; a later `>` will enter raw-text, RCDATA, or
     * plaintext mode based on `currentSequence` / `isSpecial`.
     * @param c Current character code point.
     */ stateSpecialStartSequence(c) {
        const lower = c | 0x20;
        // Still matching — check for an alternate sequence at branch points.
        if (this.sequenceIndex < this.currentSequence.length) {
            if (lower === this.currentSequence[this.sequenceIndex]) {
                this.sequenceIndex++;
                return;
            }
            if (this.sequenceIndex === 3) {
                if (this.currentSequence === Sequences.ScriptEnd && lower === Sequences.StyleEnd[3]) {
                    this.currentSequence = Sequences.StyleEnd;
                    this.sequenceIndex = 4;
                    return;
                }
                if (this.currentSequence === Sequences.TitleEnd && lower === Sequences.TextareaEnd[3]) {
                    this.currentSequence = Sequences.TextareaEnd;
                    this.sequenceIndex = 4;
                    return;
                }
            } else if (this.sequenceIndex === 4 && this.currentSequence === Sequences.NoembedEnd && lower === Sequences.NoframesEnd[4]) {
                this.currentSequence = Sequences.NoframesEnd;
                this.sequenceIndex = 5;
                return;
            }
        } else if (isEndOfTagSection(c)) {
            // Full match on a valid tag boundary — keep the sequence.
            this.sequenceIndex = 0;
            this.state = State.InTagName;
            this.stateInTagName(c);
            return;
        }
        // No match — abandon special-tag detection.
        this.isSpecial = false;
        this.currentSequence = Sequences.Empty;
        this.sequenceIndex = 0;
        this.state = State.InTagName;
        this.stateInTagName(c);
    }
    stateCDATASequence(c) {
        if (c === Sequences.Cdata[this.sequenceIndex]) {
            if (++this.sequenceIndex === Sequences.Cdata.length) {
                this.state = State.InCommentLike;
                this.currentSequence = Sequences.CdataEnd;
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
            }
        } else {
            this.sequenceIndex = 0;
            if (this.xmlMode) {
                this.state = State.InDeclaration;
                this.stateInDeclaration(c); // Reconsume the character
            } else {
                this.state = State.InSpecialComment;
                this.stateInSpecialComment(c); // Reconsume the character
            }
        }
    }
    /**
     * When we wait for one specific character, we can speed things up
     * by skipping through the buffer until we find it.
     * @param c Current character code point.
     * @returns Whether the character was found.
     */ fastForwardTo(c) {
        while(++this.index < this.buffer.length + this.offset){
            if (this.buffer.charCodeAt(this.index - this.offset) === c) {
                return true;
            }
        }
        /*
         * We increment the index at the end of the `parse` loop,
         * so set it to `buffer.length - 1` here.
         *
         * TODO: Refactor `parse` to increment index before calling states.
         */ this.index = this.buffer.length + this.offset - 1;
        return false;
    }
    /**
     * Emit a comment token and return to the text state.
     * @param offset Number of characters in the end sequence that have already been matched.
     */ emitComment(offset) {
        this.cbs.oncomment(this.sectionStart, this.index, offset);
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
        this.state = State.Text;
    }
    /**
     * Comments and CDATA end with `-->` and `]]>`.
     *
     * Their common qualities are:
     * - Their end sequences have a distinct character they start with.
     * - That character is then repeated, so we have to check multiple repeats.
     * - All characters but the start character of the sequence can be skipped.
     * @param c Current character code point.
     */ stateInCommentLike(c) {
        if (!this.xmlMode && this.currentSequence === Sequences.CommentEnd && this.sequenceIndex <= 1 && /*
             * We're still at the very start of the comment: the only
             * characters consumed since `<!--` are the dashes that
             * advanced sequenceIndex (0 for `<!-->`, 1 for `<!--->`).
             */ this.index === this.sectionStart + this.sequenceIndex && c === CharCodes.Gt) {
            // Abruptly closed empty HTML comment.
            this.emitComment(this.sequenceIndex);
        } else if (this.currentSequence === Sequences.CommentEnd && this.sequenceIndex === 2 && c === CharCodes.Gt) {
            // `!` is optional here, so the same sequence also accepts `-->`.
            this.emitComment(2);
        } else if (this.currentSequence === Sequences.CommentEnd && this.sequenceIndex === this.currentSequence.length - 1 && c !== CharCodes.Gt) {
            this.sequenceIndex = Number(c === CharCodes.Dash);
        } else if (c === this.currentSequence[this.sequenceIndex]) {
            if (++this.sequenceIndex === this.currentSequence.length) {
                if (this.currentSequence === Sequences.CdataEnd) {
                    this.cbs.oncdata(this.sectionStart, this.index, 2);
                } else {
                    this.cbs.oncomment(this.sectionStart, this.index, 3);
                }
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
                this.state = State.Text;
            }
        } else if (this.sequenceIndex === 0) {
            // Fast-forward to the first character of the sequence
            if (this.fastForwardTo(this.currentSequence[0])) {
                this.sequenceIndex = 1;
            }
        } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
            // Allow long sequences, eg. --->, ]]]>
            this.sequenceIndex = 0;
        }
    }
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     * @param c Current character code point.
     */ isTagStartChar(c) {
        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
    }
    /**
     * Scan raw-text / RCDATA content for the matching end tag.
     *
     * For RCDATA tags (`<title>`, `<textarea>`) entities are decoded inline.
     * For raw-text tags (`<script>`, `<style>`, etc.) we fast-forward to `<`.
     * @param c Current character code point.
     */ stateInSpecialTag(c) {
        if (this.sequenceIndex === this.currentSequence.length) {
            if (isEndOfTagSection(c)) {
                const endOfText = this.index - this.currentSequence.length;
                if (this.sectionStart < endOfText) {
                    // Spoof the index so that reported locations match up.
                    const actualIndex = this.index;
                    this.index = endOfText;
                    this.cbs.ontext(this.sectionStart, endOfText);
                    this.index = actualIndex;
                }
                this.isSpecial = false;
                this.sectionStart = endOfText + 2; // Skip over the `</`
                this.stateInClosingTagName(c);
                return; // We are done; skip the rest of the function.
            }
            this.sequenceIndex = 0;
        }
        if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
            this.sequenceIndex += 1;
        } else if (this.sequenceIndex === 0) {
            if (this.currentSequence === Sequences.TitleEnd || this.currentSequence === Sequences.TextareaEnd) {
                // RCDATA tags have to parse entities while still looking for their end tag.
                if (this.decodeEntities && c === CharCodes.Amp) {
                    this.startEntity();
                }
            } else if (this.fastForwardTo(CharCodes.Lt)) {
                // Outside of RCDATA tags, we can fast-forward.
                this.sequenceIndex = 1;
            }
        } else {
            // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
            this.sequenceIndex = Number(c === CharCodes.Lt);
        }
    }
    stateBeforeTagName(c) {
        if (c === CharCodes.ExclamationMark) {
            this.state = State.BeforeDeclaration;
            this.sectionStart = this.index + 1;
        } else if (c === CharCodes.Questionmark) {
            if (this.xmlMode) {
                this.state = State.InProcessingInstruction;
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
            } else {
                this.state = State.InSpecialComment;
                this.sectionStart = this.index;
            }
        } else if (this.isTagStartChar(c)) {
            this.sectionStart = this.index;
            const special = this.xmlMode || this.cbs.isInForeignContext?.() ? undefined : specialStartSequences.get(c | 0x20);
            if (special === undefined) {
                this.state = State.InTagName;
            } else {
                this.isSpecial = true;
                this.currentSequence = special;
                this.sequenceIndex = 3;
                this.state = State.SpecialStartSequence;
            }
        } else if (c === CharCodes.Slash) {
            this.state = State.BeforeClosingTagName;
        } else {
            this.state = State.Text;
            this.stateText(c);
        }
    }
    stateInTagName(c) {
        if (isEndOfTagSection(c)) {
            this.cbs.onopentagname(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateBeforeClosingTagName(c) {
        if (isWhitespace(c)) {
            if (this.xmlMode) {
            // Ignore
            } else {
                this.state = State.InSpecialComment;
                this.sectionStart = this.index;
            }
        } else if (c === CharCodes.Gt) {
            this.state = State.Text;
            if (!this.xmlMode) {
                this.sectionStart = this.index + 1;
            }
        } else {
            this.state = this.isTagStartChar(c) ? State.InClosingTagName : State.InSpecialComment;
            this.sectionStart = this.index;
        }
    }
    stateInClosingTagName(c) {
        if (isEndOfTagSection(c)) {
            this.cbs.onclosetag(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.AfterClosingTagName;
            this.stateAfterClosingTagName(c);
        }
    }
    stateAfterClosingTagName(c) {
        // Skip everything until ">"
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeAttributeName(c) {
        if (c === CharCodes.Gt) {
            this.cbs.onopentagend(this.index);
            this.enterTagBody();
            this.sectionStart = this.index + 1;
        } else if (c === CharCodes.Slash) {
            this.state = State.InSelfClosingTag;
        } else if (!isWhitespace(c)) {
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    /**
     * Handle `/` before `>` in an opening tag.
     *
     * In HTML mode, text-only tags ignore the self-closing flag and still enter
     * their raw-text/RCDATA/plaintext state unless self-closing tags are being
     * recognized. In XML mode, or for ordinary tags, the tokenizer returns to
     * regular text parsing after emitting the self-closing callback.
     * @param c Current character code point.
     */ stateInSelfClosingTag(c) {
        if (c === CharCodes.Gt) {
            this.cbs.onselfclosingtag(this.index);
            this.sectionStart = this.index + 1;
            if (!this.recognizeSelfClosing) {
                this.enterTagBody();
                return;
            }
            this.state = State.Text;
            this.isSpecial = false; // Reset special state, in case of self-closing special tags
            this.currentSequence = Sequences.Empty;
        } else if (!isWhitespace(c)) {
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateInAttributeName(c) {
        if (c === CharCodes.Eq || isEndOfTagSection(c)) {
            this.cbs.onattribname(this.sectionStart, this.index);
            this.sectionStart = this.index;
            this.state = State.AfterAttributeName;
            this.stateAfterAttributeName(c);
        }
    }
    stateAfterAttributeName(c) {
        if (c === CharCodes.Eq) {
            this.state = State.BeforeAttributeValue;
        } else if (c === CharCodes.Slash || c === CharCodes.Gt) {
            this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
            this.sectionStart = -1;
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        } else if (!isWhitespace(c)) {
            this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateBeforeAttributeValue(c) {
        if (c === CharCodes.DoubleQuote) {
            this.state = State.InAttributeValueDq;
            this.sectionStart = this.index + 1;
        } else if (c === CharCodes.SingleQuote) {
            this.state = State.InAttributeValueSq;
            this.sectionStart = this.index + 1;
        } else if (!isWhitespace(c)) {
            this.sectionStart = this.index;
            this.state = State.InAttributeValueNq;
            this.stateInAttributeValueNoQuotes(c); // Reconsume token
        }
    }
    handleInAttributeValue(c, quote) {
        if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(quote === CharCodes.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index + 1);
            this.state = State.BeforeAttributeName;
        } else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
        }
    }
    stateInAttributeValueDoubleQuotes(c) {
        this.handleInAttributeValue(c, CharCodes.DoubleQuote);
    }
    stateInAttributeValueSingleQuotes(c) {
        this.handleInAttributeValue(c, CharCodes.SingleQuote);
    }
    stateInAttributeValueNoQuotes(c) {
        if (isWhitespace(c) || c === CharCodes.Gt) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(QuoteType.Unquoted, this.index);
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        } else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
        }
    }
    /**
     * Distinguish between CDATA, declarations, HTML comments, and HTML bogus
     * comments after `<!`.
     *
     * In HTML mode, only real comments and doctypes stay on declaration paths;
     * everything else becomes a bogus comment terminated by the next `>`.
     * @param c Current character code point.
     */ stateBeforeDeclaration(c) {
        if (c === CharCodes.OpeningSquareBracket) {
            this.state = State.CDATASequence;
            this.sequenceIndex = 0;
        } else if (this.xmlMode) {
            this.state = c === CharCodes.Dash ? State.BeforeComment : State.InDeclaration;
        } else if ((c | 0x20) === Sequences.Doctype[0]) {
            this.state = State.DeclarationSequence;
            this.currentSequence = Sequences.Doctype;
            this.sequenceIndex = 1;
        } else if (c === CharCodes.Gt) {
            this.cbs.oncomment(this.sectionStart, this.index, 0);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        } else if (c === CharCodes.Dash) {
            this.state = State.BeforeComment;
        } else {
            this.state = State.InSpecialComment;
        }
    }
    /**
     * Continue matching `doctype` after `<!d`.
     *
     * A full `doctype` match stays on the declaration path; any other name falls
     * back to an HTML bogus comment, which matches browser behavior for
     * non-doctype `<!...>` constructs.
     * @param c Current character code point.
     */ stateDeclarationSequence(c) {
        if (this.sequenceIndex === this.currentSequence.length) {
            this.state = State.InDeclaration;
            this.stateInDeclaration(c);
        } else if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
            this.sequenceIndex += 1;
        } else if (c === CharCodes.Gt) {
            this.cbs.oncomment(this.sectionStart, this.index, 0);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        } else {
            this.state = State.InSpecialComment;
        }
    }
    stateInDeclaration(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.ondeclaration(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    /**
     * XML processing instructions (`<?...?>`).
     *
     * In HTML mode `<?` is routed to `InSpecialComment` instead, so this
     * state is only reachable in XML mode.
     * @param c Current character code point.
     */ stateInProcessingInstruction(c) {
        if (c === CharCodes.Questionmark) {
            // Remember that we just consumed `?`, so the next `>` closes the PI.
            this.sequenceIndex = 1;
        } else if (c === CharCodes.Gt && this.sequenceIndex === 1) {
            this.cbs.onprocessinginstruction(this.sectionStart, this.index - 1);
            this.sequenceIndex = 0;
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        } else {
            // Keep scanning for the next `?`, which can start a closing `?>`.
            this.sequenceIndex = Number(this.fastForwardTo(CharCodes.Questionmark));
        }
    }
    stateBeforeComment(c) {
        if (c === CharCodes.Dash) {
            this.state = State.InCommentLike;
            this.currentSequence = Sequences.CommentEnd;
            this.sequenceIndex = 0;
            this.sectionStart = this.index + 1;
        } else if (this.xmlMode) {
            this.state = State.InDeclaration;
        } else if (c === CharCodes.Gt) {
            this.cbs.oncomment(this.sectionStart, this.index, 0);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        } else {
            this.state = State.InSpecialComment;
        }
    }
    stateInSpecialComment(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.oncomment(this.sectionStart, this.index, 0);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    startEntity() {
        this.baseState = this.state;
        this.state = State.InEntity;
        this.entityStart = this.index;
        this.entityDecoder.startEntity(this.xmlMode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DecodingMode"].Strict : this.baseState === State.Text || this.baseState === State.InSpecialTag ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DecodingMode"].Legacy : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$dist$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DecodingMode"].Attribute);
    }
    stateInEntity() {
        const indexInBuffer = this.index - this.offset;
        const length = this.entityDecoder.write(this.buffer, indexInBuffer);
        // If `length` is positive, we are done with the entity.
        if (length >= 0) {
            this.state = this.baseState;
            if (length === 0) {
                this.index -= 1;
            }
        } else {
            if (indexInBuffer < this.buffer.length && this.buffer.charCodeAt(indexInBuffer) === CharCodes.Amp) {
                this.state = this.baseState;
                this.index -= 1;
                return;
            }
            // Mark buffer as consumed.
            this.index = this.offset + this.buffer.length - 1;
        }
    }
    /**
     * Remove data that has already been consumed from the buffer.
     */ cleanup() {
        // If we are inside of text or attributes, emit what we already have.
        if (this.running && this.sectionStart !== this.index) {
            if (this.state === State.Text || this.state === State.InPlainText || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
                this.cbs.ontext(this.sectionStart, this.index);
                this.sectionStart = this.index;
            } else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
                this.cbs.onattribdata(this.sectionStart, this.index);
                this.sectionStart = this.index;
            }
        }
    }
    shouldContinue() {
        return this.index < this.buffer.length + this.offset && this.running;
    }
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */ parse() {
        while(this.shouldContinue()){
            const c = this.buffer.charCodeAt(this.index - this.offset);
            switch(this.state){
                case State.Text:
                    {
                        this.stateText(c);
                        break;
                    }
                case State.InPlainText:
                    {
                        // Skip to end of buffer; cleanup() emits the text.
                        this.index = this.buffer.length + this.offset - 1;
                        break;
                    }
                case State.SpecialStartSequence:
                    {
                        this.stateSpecialStartSequence(c);
                        break;
                    }
                case State.InSpecialTag:
                    {
                        this.stateInSpecialTag(c);
                        break;
                    }
                case State.CDATASequence:
                    {
                        this.stateCDATASequence(c);
                        break;
                    }
                case State.DeclarationSequence:
                    {
                        this.stateDeclarationSequence(c);
                        break;
                    }
                case State.InAttributeValueDq:
                    {
                        this.stateInAttributeValueDoubleQuotes(c);
                        break;
                    }
                case State.InAttributeName:
                    {
                        this.stateInAttributeName(c);
                        break;
                    }
                case State.InCommentLike:
                    {
                        this.stateInCommentLike(c);
                        break;
                    }
                case State.InSpecialComment:
                    {
                        this.stateInSpecialComment(c);
                        break;
                    }
                case State.BeforeAttributeName:
                    {
                        this.stateBeforeAttributeName(c);
                        break;
                    }
                case State.InTagName:
                    {
                        this.stateInTagName(c);
                        break;
                    }
                case State.InClosingTagName:
                    {
                        this.stateInClosingTagName(c);
                        break;
                    }
                case State.BeforeTagName:
                    {
                        this.stateBeforeTagName(c);
                        break;
                    }
                case State.AfterAttributeName:
                    {
                        this.stateAfterAttributeName(c);
                        break;
                    }
                case State.InAttributeValueSq:
                    {
                        this.stateInAttributeValueSingleQuotes(c);
                        break;
                    }
                case State.BeforeAttributeValue:
                    {
                        this.stateBeforeAttributeValue(c);
                        break;
                    }
                case State.BeforeClosingTagName:
                    {
                        this.stateBeforeClosingTagName(c);
                        break;
                    }
                case State.AfterClosingTagName:
                    {
                        this.stateAfterClosingTagName(c);
                        break;
                    }
                case State.InAttributeValueNq:
                    {
                        this.stateInAttributeValueNoQuotes(c);
                        break;
                    }
                case State.InSelfClosingTag:
                    {
                        this.stateInSelfClosingTag(c);
                        break;
                    }
                case State.InDeclaration:
                    {
                        this.stateInDeclaration(c);
                        break;
                    }
                case State.BeforeDeclaration:
                    {
                        this.stateBeforeDeclaration(c);
                        break;
                    }
                case State.BeforeComment:
                    {
                        this.stateBeforeComment(c);
                        break;
                    }
                case State.InProcessingInstruction:
                    {
                        this.stateInProcessingInstruction(c);
                        break;
                    }
                case State.InEntity:
                    {
                        this.stateInEntity();
                        break;
                    }
            }
            this.index++;
        }
        this.cleanup();
    }
    finish() {
        if (this.state === State.InEntity) {
            this.entityDecoder.end();
            this.state = this.baseState;
        }
        this.handleTrailingData();
        this.cbs.onend();
    }
    handleTrailingCommentLikeData(endIndex) {
        if (this.state !== State.InCommentLike) {
            return false;
        }
        if (this.currentSequence === Sequences.CdataEnd) {
            if (this.xmlMode) {
                if (this.sectionStart < endIndex) {
                    this.cbs.oncdata(this.sectionStart, endIndex, 0);
                }
            } else {
                /* In HTML mode, unclosed CDATA is a bogus comment. */ const cdataStart = this.sectionStart - Sequences.Cdata.length - 1;
                this.cbs.oncomment(cdataStart, endIndex, 0);
            }
        } else {
            const offset = this.xmlMode ? 0 : Math.min(this.sequenceIndex, Sequences.CommentEnd.length - 1);
            this.cbs.oncomment(this.sectionStart, endIndex, offset);
        }
        return true;
    }
    handleTrailingMarkupDeclaration(endIndex) {
        if (this.xmlMode) {
            switch(this.state){
                case State.InSpecialComment:
                case State.BeforeComment:
                case State.CDATASequence:
                case State.DeclarationSequence:
                case State.InDeclaration:
                    {
                        this.cbs.ontext(this.sectionStart, endIndex);
                        return true;
                    }
                default:
                    {
                        return false;
                    }
            }
        }
        switch(this.state){
            case State.BeforeDeclaration:
            case State.InSpecialComment:
            case State.BeforeComment:
            case State.CDATASequence:
                {
                    this.cbs.oncomment(this.sectionStart, endIndex, 0);
                    return true;
                }
            case State.DeclarationSequence:
                {
                    if (this.sequenceIndex !== Sequences.Doctype.length) {
                        this.cbs.oncomment(this.sectionStart, endIndex, 0);
                    }
                    return true;
                }
            case State.InDeclaration:
                {
                    return true;
                }
            default:
                {
                    return false;
                }
        }
    }
    /** Handle any trailing data. */ handleTrailingData() {
        const endIndex = this.buffer.length + this.offset;
        if (this.handleTrailingCommentLikeData(endIndex) || this.handleTrailingMarkupDeclaration(endIndex)) {
            return;
        }
        // If there is no remaining data, we are done.
        if (this.sectionStart >= endIndex) {
            return;
        }
        switch(this.state){
            case State.InTagName:
            case State.BeforeAttributeName:
            case State.BeforeAttributeValue:
            case State.AfterAttributeName:
            case State.InAttributeName:
            case State.InAttributeValueSq:
            case State.InAttributeValueDq:
            case State.InAttributeValueNq:
            case State.InClosingTagName:
                {
                    break;
                }
            default:
                {
                    this.cbs.ontext(this.sectionStart, endIndex);
                }
        }
    }
    emitCodePoint(cp, consumed) {
        if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
            if (this.sectionStart < this.entityStart) {
                this.cbs.onattribdata(this.sectionStart, this.entityStart);
            }
            this.sectionStart = this.entityStart + consumed;
            this.index = this.sectionStart - 1;
            this.cbs.onattribentity(cp);
        } else {
            if (this.sectionStart < this.entityStart) {
                this.cbs.ontext(this.sectionStart, this.entityStart);
            }
            this.sectionStart = this.entityStart + consumed;
            this.index = this.sectionStart - 1;
            this.cbs.ontextentity(cp, this.sectionStart);
        }
    }
}
}),
"[project]/node_modules/htmlparser2/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DefaultHandler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DomHandler"],
    "DomHandler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DomHandler"],
    "DomUtils",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    "ElementType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    "Parser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$Parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Parser"],
    "QuoteType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuoteType"],
    "Tokenizer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "createDocumentStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createDocumentStream"],
    "getFeed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$feeds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFeed"],
    "parseDocument",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseDocument"],
    "parseFeed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseFeed"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$Parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/dist/Parser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/dist/Tokenizer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$feeds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/dist/feeds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/dist/index.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/htmlparser2/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDocumentStream",
    ()=>createDocumentStream,
    "parseDocument",
    ()=>parseDocument,
    "parseFeed",
    ()=>parseFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$Parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/dist/Parser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$feeds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/dist/feeds.js [app-ssr] (ecmascript)");
;
;
;
;
function parseDocument(data, options) {
    const handler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DomHandler"](undefined, options);
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$Parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Parser"](handler, options).end(data);
    return handler.root;
}
function createDocumentStream(callback, options, elementCallback) {
    const handler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DomHandler"]((error)=>callback(error, handler.root), options, elementCallback);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$Parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Parser"](handler, options);
}
;
;
;
;
const parseFeedDefaultOptions = {
    xmlMode: true
};
function parseFeed(feed, options = parseFeedDefaultOptions) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$dist$2f$feeds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFeed"])(parseDocument(feed, options).children);
}
;
}),
"[project]/node_modules/is-plain-object/dist/is-plain-object.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function isObject(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
}
function isPlainObject(o) {
    var ctor, prot;
    if (isObject(o) === false) return false;
    // If has modified constructor
    ctor = o.constructor;
    if (ctor === undefined) return true;
    // If has modified prototype
    prot = ctor.prototype;
    if (isObject(prot) === false) return false;
    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty('isPrototypeOf') === false) {
        return false;
    }
    // Most likely a plain Object
    return true;
}
exports.isPlainObject = isPlainObject;
}),
"[project]/node_modules/launder/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const dayjs = __turbopack_context__.r("[project]/node_modules/dayjs/dayjs.min.js [app-ssr] (ecmascript)");
// Strip characters browsers ignore inside URLs (control chars and
// embedded HTML comments) that are commonly used to sneak XSS
// payloads past simple scheme checks.
function cleanHref(href) {
    // Browsers ignore character codes of 32 (space) and below in a surprising
    // number of situations. Start reading here:
    // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet#Embedded_tab
    // eslint-disable-next-line no-control-regex
    href = href.replace(/[\x00-\x20]+/g, '');
    // Clobber any comments in URLs, which the browser might
    // interpret inside an XML data island, allowing
    // a javascript: URL to be snuck through
    while(true){
        const firstIndex = href.indexOf('<!--');
        if (firstIndex === -1) {
            break;
        }
        const lastIndex = href.indexOf('-->', firstIndex + 4);
        if (lastIndex === -1) {
            break;
        }
        href = href.substring(0, firstIndex) + href.substring(lastIndex + 3);
    }
    return href;
}
// Returns true if `href` should be rejected as unsafe. Used to block
// `javascript:`, `data:` and other dangerous schemes both when
// validating URL fields and when sanitizing HTML attribute values.
//
// `options.allowedSchemes` is an array of permitted URL schemes
// (defaults to the schemes long permitted by `launder().url`).
// `options.allowProtocolRelative` controls whether protocol-relative
// URLs (e.g. `//example.com`) are permitted. Defaults to true.
function naughtyHref(href, options) {
    options = options || {};
    const allowedSchemes = options.allowedSchemes || [
        'http',
        'https',
        'ftp',
        'mailto',
        'tel',
        'sms'
    ];
    const allowProtocolRelative = options.allowProtocolRelative !== false;
    if (typeof href !== 'string') {
        return false;
    }
    href = cleanHref(href);
    // Case insensitive so we don't get faked out by JAVASCRIPT #1
    // Allow more characters after the first so we don't get faked
    // out by certain schemes browsers accept
    const matches = href.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
    if (!matches) {
        // Protocol-relative URL starting with any combination of '/' and '\'
        if (href.match(/^[/\\]{2}/)) {
            return !allowProtocolRelative;
        }
        // No scheme
        return false;
    }
    const scheme = matches[1].toLowerCase();
    return allowedSchemes.indexOf(scheme) === -1;
}
module.exports = function(options) {
    const self = {};
    self.options = options || {};
    self.filterTag = self.options.filterTag || function(tag) {
        tag = tag.trim();
        return tag.toLowerCase();
    };
    self.string = function(s, def) {
        if (typeof s !== 'string') {
            if (typeof s === 'number' || typeof s === 'boolean') {
                s += '';
            } else {
                s = '';
            }
        }
        s = s.trim();
        if (def !== undefined) {
            if (s === '') {
                s = def;
            }
        }
        return s;
    };
    self.strings = function(strings) {
        if (!Array.isArray(strings)) {
            return [];
        }
        return strings.map(function(s) {
            return self.string(s);
        });
    };
    self.integer = function(i, def, min, max) {
        if (def === undefined) {
            def = 0;
        }
        if (typeof i === 'number') {
            i = Math.floor(i);
        } else {
            try {
                i = parseInt(i, 10);
                if (isNaN(i)) {
                    i = def;
                }
            } catch (e) {
                i = def;
            }
        }
        if (typeof min === 'number' && i < min) {
            i = min;
        }
        if (typeof max === 'number' && i > max) {
            i = max;
        }
        return i;
    };
    self.padInteger = function(i, places) {
        let s = i + '';
        while(s.length < places){
            s = '0' + s;
        }
        return s;
    };
    self.float = function(i, def, min, max) {
        if (def === undefined) {
            def = 0;
        }
        if (!(typeof i === 'number')) {
            try {
                i = parseFloat(i, 10);
                if (isNaN(i)) {
                    i = def;
                }
            } catch (e) {
                i = def;
            }
        }
        if (typeof min === 'number' && i < min) {
            i = min;
        }
        if (typeof max === 'number' && i > max) {
            i = max;
        }
        return i;
    };
    self.naughtyHref = naughtyHref;
    self.url = function(s, def, httpsFix) {
        s = self.string(s, def);
        // Allow the default to be undefined, null, false, etc.
        if (s === def) {
            return s;
        }
        // Strip characters browsers ignore that are commonly used to
        // smuggle dangerous schemes past validation.
        s = cleanHref(s);
        // Reject naughty URLs (e.g. `javascript:`, `data:`) before fixUrl
        // runs. Otherwise fixUrl could mask such schemes by prepending
        // `https://` to anything containing a `.`, turning
        // `javascript:alert(document.domain)` into a syntactically odd
        // but accepted `https://...` URL.
        if (naughtyHref(s)) {
            return def;
        }
        s = fixUrl(s);
        if (s === null) {
            return def;
        }
        return s;
        //TURBOPACK unreachable
        ;
        function fixUrl(href) {
            if (href.match(/^(((https?|ftp):\/\/)|((mailto|tel|sms):)|#|([^/.]+)?\/|[^/.]+$)/)) {
                // All good - no change required
                return href;
            } else if (href.match(/^[^/.]+\.[^/.]+/)) {
                // Smells like a domain name. Educated guess: they left off http://
                const protocol = httpsFix ? 'https://' : 'http://';
                return protocol + href;
            } else {
                return null;
            }
        }
    };
    self.select = function(s, choices, def) {
        s = self.string(s);
        if (!choices || !choices.length) {
            return def;
        }
        let choice;
        if (typeof choices[0] === 'object') {
            choice = choices.find(function(choice) {
                if (choice.value === null || choice.value === undefined) {
                    // Don't crash on invalid choices
                    return false;
                }
                return choice.value.toString() === s;
            });
            if (choice != null) {
                return choice.value;
            }
            return def;
        }
        choice = choices.find(function(choice) {
            if (choice === null || choice === undefined) {
                // Don't crash on invalid choices
                return false;
            }
            return choice.toString() === s;
        });
        if (choice !== undefined) {
            return choice;
        }
        return def;
    };
    self.boolean = function(b, def) {
        if (b === true) {
            return true;
        }
        if (b === false) {
            return false;
        }
        b = self.string(b, def);
        if (b === def) {
            if (b === undefined) {
                return false;
            }
            return b;
        }
        b = b.toLowerCase().charAt(0);
        if (b === '' || b === 'n' || b === '0' || b === 'f') {
            return false;
        }
        if (b === 't' || b === 'y' || b === '1') {
            return true;
        }
        return false;
    };
    // Given an `options` object in which options[name] is a string
    // set to '0', '1', or 'any', this method adds mongodb criteria
    // to the `criteria` object.
    //
    // '0' or false means "the property must be false or absent," '1' or true
    // means "the property must be true," and 'any' or null means "we don't care
    // what the property is."
    //
    // See `booleanOrNull` for additional synonyms accepted for the
    // three possible values.
    //
    // An empty string is considered equivalent to '0'.
    //
    // This is not the same as apos.sanitizeBoolean which is concerned only with
    // true or false and does not address "any."
    //
    // `def` defaults to `any`.
    //
    // This method is most often used with REST API parameters and forms.
    self.addBooleanFilterToCriteria = function(options, name, criteria, def) {
        // if any or null, we aren't changing criteria
        if (def === undefined) {
            def = null;
        }
        // allow object or boolean
        let value = typeof options === 'object' && options !== null ? options[name] : options;
        value = value === undefined ? def : value;
        value = self.booleanOrNull(value);
        if (value === null) {
        // Don't care, show all
        } else if (!value) {
            // Must be absent or false. Hooray for $ne
            criteria[name] = {
                $ne: true
            };
        } else {
            // Must be true
            criteria[name] = true;
        }
    };
    // This method is used for tristate filters, i.e. "published,"
    // "unpublished", and "show me both".
    //
    // Accepts `true`, `false`, or `null` and returns them exactly
    // as such; if the parameter is none of those or their synonyms
    // below, returns `def`.
    //
    // Also accepts the strings `'yes'` (or starting with y), `'no'` (or
    // starting with n), `'true'` (or starting with t), `'false'`
    // (or starting with f), `'1'`, `'0'` and the strings `'any'` and
    // `'null'`. The string `'null'` must be an exact match, anything
    // else starting with `n` is taken as `no` (false).
    //
    // These various synonyms are useful for string input, such as from
    // a user friendly query string.
    self.booleanOrNull = function(b, def) {
        if (b === true) {
            return b;
        }
        if (b === false) {
            return b;
        }
        if (b === null) {
            return b;
        }
        b = self.string(b, def);
        if (b === def) {
            if (def === undefined) {
                return null;
            }
            return b;
        }
        // String 'null' must match as a full string to disambiguate from string 'n' for 'no'
        if (b === 'null') {
            return null;
        }
        b = b.toLowerCase().charAt(0);
        if (b === '' || b === 'n' || b === '0' || b === 'f') {
            return false;
        }
        if (b === 't' || b === 'y' || b === '1') {
            return true;
        }
        if (b === 'a') {
            return null;
        }
        return def;
    };
    // Accept a user-entered string in YYYY-MM-DD, MM/DD, MM/DD/YY, or MM/DD/YYYY format
    // (tolerates missing leading zeroes on MM and DD). Also accepts a Date object.
    // Returns YYYY-MM-DD.
    //
    // The current year is assumed when MM/DD is used. If there is no explicit default
    // any unparseable date is returned as today's date.
    //
    // If the default is explicitly `null` (not `undefined`) then `null` is returned for
    // any unparseable date.
    //
    // The `now` argument can be passed for performance if you prefer to call
    // `new Date()` just once before many calls to this method and pass that single
    // value to all of them.
    self.date = function(date, def, now) {
        let components;
        function returnDefault() {
            if (def === undefined) {
                def = dayjs().format('YYYY-MM-DD');
            }
            return def;
        }
        if (typeof date === 'string') {
            if (date.match(/\//)) {
                components = date.split('/');
                if (components.length === 2) {
                    // Convert mm/dd to yyyy-mm-dd
                    return (now || new Date()).getFullYear() + '-' + self.padInteger(components[0], 2) + '-' + self.padInteger(components[1], 2);
                } else if (components.length === 3) {
                    // Convert mm/dd/yy to mm/dd/yyyy
                    if (components[2] < 100) {
                        // Add the current century. If the result is more than
                        // 50 years in the future, assume they meant the
                        // previous century. Thus in 2015, we find that
                        // we get the intuitive result for both 1/1/75,
                        // 1/1/99 and 1/1/25. It's a nasty habit among
                        // us imprecise humans. -Tom
                        const d = now || new Date();
                        const nowYear = d.getFullYear() % 100;
                        const nowCentury = d.getFullYear() - nowYear;
                        let theirYear = parseInt(components[2]) + nowCentury;
                        if (theirYear - d.getFullYear() > 50) {
                            theirYear -= 100;
                        }
                        components[2] = theirYear;
                    }
                    // Convert mm/dd/yyyy to yyyy-mm-dd
                    return self.padInteger(components[2], 4) + '-' + self.padInteger(components[0], 2) + '-' + self.padInteger(components[1], 2);
                } else {
                    return returnDefault();
                }
            } else if (date.match(/-/)) {
                components = date.split('-');
                if (components.length === 2) {
                    // Convert mm-dd to yyyy-mm-dd
                    return (now || new Date()).getFullYear() + '-' + self.padInteger(components[0], 2) + '-' + self.padInteger(components[1], 2);
                } else if (components.length === 3) {
                    // Convert yyyy-mm-dd (with questionable padding) to yyyy-mm-dd
                    return self.padInteger(components[0], 4) + '-' + self.padInteger(components[1], 2) + '-' + self.padInteger(components[2], 2);
                } else {
                    return returnDefault();
                }
            }
        }
        try {
            if (date === null) {
                return returnDefault();
            }
            date = now || new Date(date);
            if (isNaN(date.getTime())) {
                return returnDefault();
            }
            return date.getFullYear() + '-' + self.padInteger(date.getMonth() + 1, 2) + '-' + self.padInteger(date.getDate(), 2);
        } catch (e) {
            return returnDefault();
        }
    };
    // This is likely not relevent to you unless you're using Apostrophe
    // Given a date object, return a date string in Apostrophe's preferred sortable,
    // comparable, JSON-able format, which is YYYY-MM-DD. If `date` is undefined
    // the current date is used.
    self.formatDate = function(date) {
        return dayjs(date).format('YYYY-MM-DD');
    };
    // Accepts a user-entered string in 12-hour or 24-hour time and returns a string
    // in 24-hour time. This method is tolerant of syntax such as `4pm`; minutes and
    // seconds are optional.
    //
    // If `def` is not set the default is the current time.
    self.time = function(time, def) {
        time = self.string(time).toLowerCase();
        time = time.trim();
        const components = time.match(/^(\d+)([:|.](\d+))?([:|.](\d+))?\s*(am|pm|AM|PM|a|p|A|M)?$/);
        if (components) {
            let hours = parseInt(components[1], 10);
            const minutes = components[3] !== undefined ? parseInt(components[3], 10) : 0;
            const seconds = components[5] !== undefined ? parseInt(components[5], 10) : 0;
            let ampm = components[6] ? components[6].toLowerCase() : components[6];
            ampm = ampm && ampm.charAt(0);
            if (hours === 12 && ampm === 'a') {
                hours -= 12;
            } else if (hours === 12 && ampm === 'p') {
            // Leave it be
            } else if (ampm === 'p') {
                hours += 12;
            }
            if (hours === 24 || hours === '24') {
                hours = 0;
            }
            return self.padInteger(hours, 2) + ':' + self.padInteger(minutes, 2) + ':' + self.padInteger(seconds, 2);
        } else {
            if (def !== undefined) {
                return def;
            }
            return dayjs().format('HH:mm');
        }
    };
    // This is likely not relevent to you unless you're using Apostrophe
    // Given a JavaScript Date object, return a time string in
    // Apostrophe's preferred sortable, comparable, JSON-able format:
    // 24-hour time, with seconds.
    //
    // If `date` is missing the current time is used.
    self.formatTime = function(date) {
        return dayjs(date).format('HH:mm:ss');
    };
    // Sanitize tags. Tags should be submitted as an array of strings,
    // or a comma-separated string.
    //
    // This method ensures the input is an array or string and, if
    // an array, that the elements of the array are strings.
    //
    // If a filterTag function is passed as an option when initializing
    // Launder, then all tags are passed through it (as individual
    // strings, one per call) and the return value is used instead. You
    // may also pass a filterTag when calling this function
    self.tags = function(tags, filter) {
        if (typeof tags === 'string') {
            tags = tags.split(/,\s*/);
        }
        if (!Array.isArray(tags)) {
            return [];
        }
        const strings = tags.map((tag)=>self.string(tag));
        const rewritten = strings.map(filter || self.filterTag);
        const filtered = rewritten.filter((tag)=>tag.length > 0);
        return filtered;
    };
    // Sanitize an id. IDs must consist solely of upper and lower case
    // letters, numbers, and digits unless options.idRegExp is set.
    self.idRegExp = self.options.idRegExp || /^[A-Za-z0-9_]+$/;
    self.id = function(s, def) {
        const id = self.string(s, def);
        if (id === def) {
            return id;
        }
        if (!id.match(self.idRegExp)) {
            return def;
        }
        return id;
    };
    // Sanitize an array of IDs. IDs must consist solely of upper and lower case
    // letters and numbers, digits, and underscores. Any elements that are not
    // IDs are omitted from the final array.
    self.ids = function(ids) {
        if (!Array.isArray(ids)) {
            return [];
        }
        const result = ids.filter(function(id) {
            return self.id(id) !== undefined;
        });
        return result;
    };
    return self;
};
// Expose `naughtyHref` statically so callers (notably sanitize-html)
// can use it without instantiating a launder.
module.exports.naughtyHref = naughtyHref;
}),
"[project]/node_modules/marked/lib/marked.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hooks",
    ()=>S,
    "Lexer",
    ()=>x,
    "Marked",
    ()=>Z,
    "Parser",
    ()=>b,
    "Renderer",
    ()=>P,
    "TextRenderer",
    ()=>L,
    "Tokenizer",
    ()=>y,
    "defaults",
    ()=>R,
    "getDefaults",
    ()=>C,
    "lexer",
    ()=>pn,
    "marked",
    ()=>f,
    "options",
    ()=>nn,
    "parse",
    ()=>an,
    "parseInline",
    ()=>on,
    "parser",
    ()=>ln,
    "setOptions",
    ()=>rn,
    "use",
    ()=>kt,
    "walkTokens",
    ()=>sn
]);
/**
 * marked v18.0.9 - a markdown parser
 * Copyright (c) 2018-2026, MarkedJS. (MIT License)
 * Copyright (c) 2011-2018, Christopher Jeffrey. (MIT License)
 * https://github.com/markedjs/marked
 */ /**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */ function C() {
    return {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null
    };
}
var R = C();
function j(l) {
    R = l;
}
var z = {
    exec: ()=>null
};
function A(l) {
    let e = [];
    return (t)=>{
        let n = Math.max(0, Math.min(3, t - 1)), s = e[n];
        return s || (s = l(n), e[n] = s), s;
    };
}
function k(l, e = "") {
    let t = typeof l == "string" ? l : l.source, n = {
        replace: (s, r)=>{
            let i = typeof r == "string" ? r : r.source;
            return i = i.replace(m.caret, "$1"), t = t.replace(s, i), n;
        },
        getRegex: ()=>new RegExp(t, e)
    };
    return n;
}
var Te = ((l = "")=>{
    try {
        return !!new RegExp("(?<=1)(?<!1)" + l);
    } catch  {
        return !1;
    }
})(), m = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] +\S/,
    listReplaceTask: /^\[[ xX]\] +/,
    listTaskCheckbox: /\[[ xX]\]/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: (l)=>new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: A((l)=>new RegExp(`^ {0,${l}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),
    hrRegex: A((l)=>new RegExp(`^ {0,${l}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),
    fencesBeginRegex: A((l)=>new RegExp(`^ {0,${l}}(?:\`\`\`|~~~)`)),
    headingBeginRegex: A((l)=>new RegExp(`^ {0,${l}}#`)),
    htmlBeginRegex: A((l)=>new RegExp(`^ {0,${l}}<(?:[a-z].*>|!--)`, "i")),
    blockquoteBeginRegex: A((l)=>new RegExp(`^ {0,${l}}>`))
}, Oe = /^(?:[ \t]*(?:\n|$))+/, we = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ye = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, q = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Pe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, U = / {0,3}(?:[*+-]|\d{1,9}[.)])/, oe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, ae = k(oe).replace(/bull/g, U).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Se = k(oe).replace(/bull/g, U).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), K = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/, _e = /^[^\n]+/, W = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, $e = k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", W).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Le = k(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, U).getRegex(), Q = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", X = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Me = k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", X).replace("tag", Q).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), le = (l)=>k(K).replace("hr", q).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list", l).replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Q).getRegex(), ze = le(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/), Ee = le(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/), Ce = k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ee).getRegex(), J = {
    blockquote: Ce,
    code: we,
    def: $e,
    fences: ye,
    heading: Pe,
    hr: q,
    html: Me,
    lheading: ae,
    list: Le,
    newline: Oe,
    paragraph: ze,
    table: z,
    text: _e
}, se = k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", q).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Q).getRegex(), Ae = {
    ...J,
    lheading: Se,
    table: se,
    paragraph: k(K).replace("hr", q).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", se).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Q).getRegex()
}, Ie = {
    ...J,
    html: k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", X).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: z,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: k(K).replace("hr", q).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ae).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Be = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, De = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, pe = /^( {2,}|\\)\n(?!\s*$)/, qe = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, _ = /[\p{P}\p{S}]/u, I = /[\s\p{P}\p{S}]/u, v = /[^\s\p{P}\p{S}]/u, ve = k(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, I).getRegex(), He = /[\p{Pi}\p{Ps}"']/u, ue = /(?!~)[\p{P}\p{S}]/u, Ze = /(?!~)[\s\p{P}\p{S}]/u, Ge = /(?:[^\s\p{P}\p{S}]|~)/u, Qe = k(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Te ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), ce = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, Ne = k(ce, "u").replace(/punct/g, _).getRegex(), je = k(ce, "u").replace(/punct/g, ue).getRegex(), Fe = /^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/, Ue = k(Fe, "u").replace(/openQuote/g, He).replace(/punct/g, _).getRegex(), he = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ke = k(he, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex(), We = k(he, "gu").replace(/notPunctSpace/g, Ge).replace(/punctSpace/g, Ze).replace(/punct/g, ue).getRegex(), Xe = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)", Je = k(Xe, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex(), Ve = k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex(), Ye = "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)", et = k(Ye, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex(), tt = k(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, _).getRegex(), nt = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", rt = k(nt, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex(), st = k(/\\(punct)/, "gu").replace(/punct/g, _).getRegex(), it = k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), ot = k(X).replace("(?:-->|$)", "-->").getRegex(), at = k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", ot).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), G = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, lt = k(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", G).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), de = k(/^!?\[(label)\]\[(ref)\]/).replace("label", G).replace("ref", W).getRegex(), ke = k(/^!?\[(ref)\](?:\[\])?/).replace("ref", W).getRegex(), pt = k("reflink|nolink(?!\\()", "g").replace("reflink", de).replace("nolink", ke).getRegex(), ie = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, V = {
    _backpedal: z,
    anyPunctuation: st,
    autolink: it,
    blockSkip: Qe,
    br: pe,
    code: De,
    del: z,
    delLDelim: z,
    delRDelim: z,
    emStrongLDelim: Ne,
    emStrongRDelimAst: Ke,
    emStrongRDelimUnd: Ve,
    escape: Be,
    link: lt,
    nolink: ke,
    punctuation: ve,
    reflink: de,
    reflinkSearch: pt,
    tag: at,
    text: qe,
    url: z
}, ut = {
    ...V,
    emStrongLDelim: Ue,
    emStrongRDelimAst: Je,
    emStrongRDelimUnd: et,
    link: k(/^!?\[(label)\]\((.*?)\)/).replace("label", G).getRegex(),
    reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", G).getRegex()
}, F = {
    ...V,
    emStrongRDelimAst: We,
    emStrongLDelim: je,
    delLDelim: tt,
    delRDelim: rt,
    url: k(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ie).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
    text: k(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ie).getRegex()
}, ct = {
    ...F,
    br: k(pe).replace("{2,}", "*").getRegex(),
    text: k(F.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, H = {
    normal: J,
    gfm: Ae,
    pedantic: Ie
}, B = {
    normal: V,
    gfm: F,
    breaks: ct,
    pedantic: ut
};
var ht = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
}, ge = (l)=>ht[l];
function O(l, e) {
    if (e) {
        if (m.escapeTest.test(l)) return l.replace(m.escapeReplace, ge);
    } else if (m.escapeTestNoEncode.test(l)) return l.replace(m.escapeReplaceNoEncode, ge);
    return l;
}
function Y(l) {
    try {
        l = encodeURI(l).replace(m.percentDecode, "%");
    } catch  {
        return null;
    }
    return l;
}
function ee(l, e) {
    let t = l.replace(m.findPipe, (r, i, o)=>{
        let p = !1, a = i;
        for(; --a >= 0 && o[a] === "\\";)p = !p;
        return p ? "|" : " |";
    }), n = t.split(m.splitPipe), s = 0;
    if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
    else for(; n.length < e;)n.push("");
    for(; s < n.length; s++)n[s] = n[s].trim().replace(m.slashPipe, "|");
    return n;
}
function $(l, e, t) {
    let n = l.length;
    if (n === 0) return "";
    let s = 0;
    for(; s < n;){
        let r = l.charAt(n - s - 1);
        if (r === e && !t) s++;
        else if (r !== e && t) s++;
        else break;
    }
    return l.slice(0, n - s);
}
function te(l) {
    let e = l.split(`
`), t = e.length - 1;
    for(; t >= 0 && m.blankLine.test(e[t]);)t--;
    return e.length - t <= 2 ? l : e.slice(0, t + 1).join(`
`);
}
function fe(l, e) {
    if (l.indexOf(e[1]) === -1) return -1;
    let t = 0;
    for(let n = 0; n < l.length; n++)if (l[n] === "\\") n++;
    else if (l[n] === e[0]) t++;
    else if (l[n] === e[1] && (t--, t < 0)) return n;
    return t > 0 ? -2 : -1;
}
function me(l, e = 0) {
    let t = e, n = "";
    for (let s of l)if (s === "	") {
        let r = 4 - t % 4;
        n += " ".repeat(r), t += r;
    } else n += s, t++;
    return n;
}
function xe(l, e, t, n, s) {
    let r = e.href, i = e.title || null, o = l[1].replace(s.other.outputLinkReplace, "$1");
    n.state.inLink = !0;
    let p = {
        type: l[0].charAt(0) === "!" ? "image" : "link",
        raw: t,
        href: r,
        title: i,
        text: o,
        tokens: n.inlineTokens(o)
    };
    return n.state.inLink = !1, p;
}
function dt(l, e, t) {
    let n = l.match(t.other.indentCodeCompensation);
    if (n === null) return e;
    let s = n[1];
    return e.split(`
`).map((r)=>{
        let i = r.match(t.other.beginningSpace);
        if (i === null) return r;
        let [o] = i;
        return o.length >= s.length ? r.slice(s.length) : r;
    }).join(`
`);
}
var y = class {
    options;
    rules;
    lexer;
    constructor(e){
        this.options = e || R;
    }
    space(e) {
        let t = this.rules.block.newline.exec(e);
        if (t && t[0].length > 0) return {
            type: "space",
            raw: t[0]
        };
    }
    code(e) {
        let t = this.rules.block.code.exec(e);
        if (t) {
            let n = this.options.pedantic ? t[0] : te(t[0]), s = n.replace(this.rules.other.codeRemoveIndent, "");
            return {
                type: "code",
                raw: n,
                codeBlockStyle: "indented",
                text: s
            };
        }
    }
    fences(e) {
        let t = this.rules.block.fences.exec(e);
        if (t) {
            let n = t[0], s = dt(n, t[3] || "", this.rules);
            return {
                type: "code",
                raw: n,
                lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
                text: s
            };
        }
    }
    heading(e) {
        let t = this.rules.block.heading.exec(e);
        if (t) {
            let n = t[2].trim();
            if (this.rules.other.endingHash.test(n)) {
                let s = $(n, "#");
                (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (n = s.trim());
            }
            return {
                type: "heading",
                raw: $(t[0], `
`),
                depth: t[1].length,
                text: n,
                tokens: this.lexer.inline(n)
            };
        }
    }
    hr(e) {
        let t = this.rules.block.hr.exec(e);
        if (t) return {
            type: "hr",
            raw: $(t[0], `
`)
        };
    }
    blockquote(e) {
        let t = this.rules.block.blockquote.exec(e);
        if (t) {
            let n = $(t[0], `
`).split(`
`), s = "", r = "", i = [];
            for(; n.length > 0;){
                let o = !1, p = [], a;
                for(a = 0; a < n.length; a++)if (this.rules.other.blockquoteStart.test(n[a])) p.push(n[a]), o = !0;
                else if (!o) p.push(n[a]);
                else break;
                n = n.slice(a);
                let u = p.join(`
`), c = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
                s = s ? `${s}
${u}` : u, r = r ? `${r}
${c}` : c;
                let h = this.lexer.state.top;
                if (this.lexer.state.top = !0, this.lexer.blockTokens(c, i, !0), this.lexer.state.top = h, n.length === 0) break;
                let d = i.at(-1);
                if (d?.type === "code") break;
                if (d?.type === "blockquote") {
                    let T = d, g = n.join(`
`), w = T.raw + `
` + g.replace(this.rules.other.blockquoteSetextReplace2, ""), M = this.blockquote(w);
                    i[i.length - 1] = M, s = `${s}
${g}`, r = r.substring(0, r.length - T.text.length) + M.text;
                    break;
                } else if (d?.type === "list") {
                    let T = d, g = T.raw + `
` + n.join(`
`), w = this.list(g);
                    i[i.length - 1] = w, s = s.substring(0, s.length - d.raw.length) + w.raw, r = r.substring(0, r.length - T.raw.length) + w.raw, n = g.substring(i.at(-1).raw.length).split(`
`);
                    continue;
                }
            }
            return {
                type: "blockquote",
                raw: s,
                tokens: i,
                text: r
            };
        }
    }
    list(e) {
        let t = this.rules.block.list.exec(e);
        if (t) {
            let n = t[1].trim(), s = n.length > 1, r = {
                type: "list",
                raw: "",
                ordered: s,
                start: s ? +n.slice(0, -1) : "",
                loose: !1,
                items: []
            };
            n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = s ? n : "[*+-]");
            let i = this.rules.other.listItemRegex(n), o = !1;
            for(; e;){
                let a = !1, u = "", c = "";
                if (!(t = i.exec(e)) || this.rules.block.hr.test(e)) break;
                u = t[0], e = e.substring(u.length);
                let h = me(t[2].split(`
`, 1)[0], t[1].length), d = e.split(`
`, 1)[0], T = !h.trim(), g = 0;
                if (this.options.pedantic ? (g = 2, c = h.trimStart()) : T ? g = t[1].length + 1 : (g = h.search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, c = h.slice(g), g += t[1].length), T && this.rules.other.blankLine.test(d) && (u += d + `
`, e = e.substring(d.length + 1), a = !0), !a) {
                    let w = this.rules.other.nextBulletRegex(g), M = this.rules.other.hrRegex(g), ne = this.rules.other.fencesBeginRegex(g), re = this.rules.other.headingBeginRegex(g), be = this.rules.other.htmlBeginRegex(g), Re = this.rules.other.blockquoteBeginRegex(g);
                    for(; e;){
                        let N = e.split(`
`, 1)[0], D;
                        if (d = N, this.options.pedantic ? (d = d.replace(this.rules.other.listReplaceNesting, "  "), D = d) : D = d.replace(this.rules.other.tabCharGlobal, "    "), ne.test(d) || re.test(d) || be.test(d) || Re.test(d) || w.test(d) || M.test(d)) break;
                        if (D.search(this.rules.other.nonSpaceChar) >= g || !d.trim()) c += `
` + D.slice(g);
                        else {
                            if (T || h.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ne.test(h) || re.test(h) || M.test(h)) break;
                            c += `
` + d;
                        }
                        T = !d.trim(), u += N + `
`, e = e.substring(N.length + 1), h = D.slice(g);
                    }
                }
                r.loose || (o ? r.loose = !0 : this.rules.other.doubleBlankLine.test(u) && (o = !0)), r.items.push({
                    type: "list_item",
                    raw: u,
                    task: !!this.options.gfm && this.rules.other.listIsTask.test(c),
                    loose: !1,
                    text: c,
                    tokens: []
                }), r.raw += u;
            }
            let p = r.items.at(-1);
            if (p) p.raw = p.raw.trimEnd(), p.text = p.text.trimEnd();
            else return;
            r.raw = r.raw.trimEnd();
            for (let a of r.items){
                this.lexer.state.top = !1, a.tokens = this.lexer.blockTokens(a.text, []);
                let u = a.tokens[0];
                if (a.task && (u?.type === "text" || u?.type === "paragraph")) {
                    a.text = a.text.replace(this.rules.other.listReplaceTask, ""), u.raw = u.raw.replace(this.rules.other.listReplaceTask, ""), u.text = u.text.replace(this.rules.other.listReplaceTask, "");
                    for(let h = this.lexer.inlineQueue.length - 1; h >= 0; h--)if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)) {
                        this.lexer.inlineQueue[h].src = this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask, "");
                        break;
                    }
                    let c = this.rules.other.listTaskCheckbox.exec(a.raw);
                    if (c) {
                        let h = {
                            type: "checkbox",
                            raw: c[0] + " ",
                            checked: c[0] !== "[ ]"
                        };
                        a.checked = h.checked, r.loose ? a.tokens[0] && [
                            "paragraph",
                            "text"
                        ].includes(a.tokens[0].type) && "tokens" in a.tokens[0] && a.tokens[0].tokens ? (a.tokens[0].raw = h.raw + a.tokens[0].raw, a.tokens[0].text = h.raw + a.tokens[0].text, a.tokens[0].tokens.unshift(h)) : a.tokens.unshift({
                            type: "paragraph",
                            raw: h.raw,
                            text: h.raw,
                            tokens: [
                                h
                            ]
                        }) : a.tokens.unshift(h);
                    }
                } else a.task && (a.task = !1);
                if (!r.loose) {
                    let c = a.tokens.filter((d)=>d.type === "space"), h = c.length > 0 && c.some((d)=>this.rules.other.anyLine.test(d.raw));
                    r.loose = h;
                }
            }
            if (r.loose) for (let a of r.items){
                a.loose = !0;
                for (let u of a.tokens)u.type === "text" && (u.type = "paragraph");
            }
            return r;
        }
    }
    html(e) {
        let t = this.rules.block.html.exec(e);
        if (t) {
            let n = te(t[0]);
            return {
                type: "html",
                block: !0,
                raw: n,
                pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
                text: n
            };
        }
    }
    def(e) {
        let t = this.rules.block.def.exec(e);
        if (t) {
            let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
            return {
                type: "def",
                tag: n,
                raw: $(t[0], `
`),
                href: s,
                title: r
            };
        }
    }
    table(e) {
        let t = this.rules.block.table.exec(e);
        if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
        let n = ee(t[1]), s = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], i = {
            type: "table",
            raw: $(t[0], `
`),
            header: [],
            align: [],
            rows: []
        };
        if (n.length === s.length) {
            for (let o of s)this.rules.other.tableAlignRight.test(o) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? i.align.push("left") : i.align.push(null);
            for(let o = 0; o < n.length; o++)i.header.push({
                text: n[o],
                tokens: this.lexer.inline(n[o]),
                header: !0,
                align: i.align[o]
            });
            for (let o of r)i.rows.push(ee(o, i.header.length).map((p, a)=>({
                    text: p,
                    tokens: this.lexer.inline(p),
                    header: !1,
                    align: i.align[a]
                })));
            return i;
        }
    }
    lheading(e) {
        let t = this.rules.block.lheading.exec(e);
        if (t) {
            let n = t[1].trim();
            return {
                type: "heading",
                raw: $(t[0], `
`),
                depth: t[2].charAt(0) === "=" ? 1 : 2,
                text: n,
                tokens: this.lexer.inline(n)
            };
        }
    }
    paragraph(e) {
        let t = this.rules.block.paragraph.exec(e);
        if (t) {
            let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
            return {
                type: "paragraph",
                raw: t[0],
                text: n,
                tokens: this.lexer.inline(n)
            };
        }
    }
    text(e) {
        let t = this.rules.block.text.exec(e);
        if (t) return {
            type: "text",
            raw: t[0],
            text: t[0],
            tokens: this.lexer.inline(t[0])
        };
    }
    escape(e) {
        let t = this.rules.inline.escape.exec(e);
        if (t) return {
            type: "escape",
            raw: t[0],
            text: t[1]
        };
    }
    tag(e) {
        let t = this.rules.inline.tag.exec(e);
        if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
            type: "html",
            raw: t[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            block: !1,
            text: t[0]
        };
    }
    link(e) {
        let t = this.rules.inline.link.exec(e);
        if (t) {
            let n = t[2].trim();
            if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
                if (!this.rules.other.endAngleBracket.test(n)) return;
                let i = $(n.slice(0, -1), "\\");
                if ((n.length - i.length) % 2 === 0) return;
            } else {
                let i = fe(t[2], "()");
                if (i === -2) return;
                if (i > -1) {
                    let p = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + i;
                    t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, p).trim(), t[3] = "";
                }
            }
            let s = t[2], r = "";
            if (this.options.pedantic) {
                let i = this.rules.other.pedanticHrefTitle.exec(s);
                i && (s = i[1], r = i[3]);
            } else r = t[3] ? t[3].slice(1, -1) : "";
            return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? s = s.slice(1) : s = s.slice(1, -1)), xe(t, {
                href: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
                title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
            }, t[0], this.lexer, this.rules);
        }
    }
    reflink(e, t) {
        let n;
        if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
            let s = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r = t[s.toLowerCase()];
            if (!r) {
                let i = n[0].charAt(0);
                return {
                    type: "text",
                    raw: i,
                    text: i
                };
            }
            return xe(n, r, n[0], this.lexer, this.rules);
        }
    }
    emStrong(e, t, n = "") {
        let s = this.rules.inline.emStrongLDelim.exec(e);
        if (!s || !s[1] && !s[2] && !s[3] && !s[4] || s[4] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
        if (!(s[1] || s[3] || "") || !n || this.rules.inline.punctuation.exec(n)) {
            let i = [
                ...s[0]
            ].length - 1, o, p, a = i, u = 0, c = s[0][0], h = n === c, d = c === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
            for(d.lastIndex = 0, t = t.slice(-1 * e.length + i); (s = d.exec(t)) !== null;){
                if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o) continue;
                if (p = [
                    ...o
                ].length, s[3] || s[4]) {
                    a += p;
                    continue;
                } else if (s[5] || s[6]) {
                    if (i % 3 && !((i + p) % 3)) {
                        u += p;
                        continue;
                    }
                    if (h) break;
                }
                if (a -= p, a > 0) continue;
                p = Math.min(p, p + a + u);
                let T = [
                    ...s[0]
                ][0].length, g = e.slice(0, i + s.index + T + p);
                if (Math.min(i, p) % 2) {
                    let M = g.slice(1, -1);
                    return {
                        type: "em",
                        raw: g,
                        text: M,
                        tokens: this.lexer.inlineTokens(M)
                    };
                }
                let w = g.slice(2, -2);
                return {
                    type: "strong",
                    raw: g,
                    text: w,
                    tokens: this.lexer.inlineTokens(w)
                };
            }
        }
    }
    codespan(e) {
        let t = this.rules.inline.code.exec(e);
        if (t) {
            let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(n), r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
            return s && r && (n = n.substring(1, n.length - 1)), {
                type: "codespan",
                raw: t[0],
                text: n
            };
        }
    }
    br(e) {
        let t = this.rules.inline.br.exec(e);
        if (t) return {
            type: "br",
            raw: t[0]
        };
    }
    del(e, t, n = "") {
        let s = this.rules.inline.delLDelim.exec(e);
        if (!s) return;
        if (!(s[1] || "") || !n || this.rules.inline.punctuation.exec(n)) {
            let i = [
                ...s[0]
            ].length - 1, o, p, a = i, u = this.rules.inline.delRDelim;
            for(u.lastIndex = 0, t = t.slice(-1 * e.length + i); (s = u.exec(t)) !== null;){
                if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o || (p = [
                    ...o
                ].length, p !== i)) continue;
                if (s[3] || s[4]) {
                    a += p;
                    continue;
                }
                if (a -= p, a > 0) continue;
                p = Math.min(p, p + a);
                let c = [
                    ...s[0]
                ][0].length, h = e.slice(0, i + s.index + c + p), d = h.slice(i, -i);
                return {
                    type: "del",
                    raw: h,
                    text: d,
                    tokens: this.lexer.inlineTokens(d)
                };
            }
        }
    }
    autolink(e) {
        let t = this.rules.inline.autolink.exec(e);
        if (t) {
            let n, s;
            return t[2] === "@" ? (n = t[1], s = "mailto:" + n) : (n = t[1], s = n), {
                type: "link",
                raw: t[0],
                text: n,
                href: s,
                tokens: [
                    {
                        type: "text",
                        raw: n,
                        text: n
                    }
                ]
            };
        }
    }
    url(e) {
        let t;
        if (t = this.rules.inline.url.exec(e)) {
            let n, s;
            if (t[2] === "@") n = t[0], s = "mailto:" + n;
            else {
                let r;
                do r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
                while (r !== t[0])
                n = t[0], t[1] === "www." ? s = "http://" + t[0] : s = t[0];
            }
            return {
                type: "link",
                raw: t[0],
                text: n,
                href: s,
                tokens: [
                    {
                        type: "text",
                        raw: n,
                        text: n
                    }
                ]
            };
        }
    }
    inlineText(e) {
        let t = this.rules.inline.text.exec(e);
        if (t) {
            let n = this.lexer.state.inRawBlock;
            return {
                type: "text",
                raw: t[0],
                text: t[0],
                escaped: n
            };
        }
    }
};
var x = class l {
    tokens;
    options;
    state;
    inlineQueue;
    tokenizer;
    constructor(e){
        this.tokens = [], this.tokens.links = Object.create(null), this.options = e || R, this.options.tokenizer = this.options.tokenizer || new y, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
            inLink: !1,
            inRawBlock: !1,
            top: !0
        };
        let t = {
            other: m,
            block: H.normal,
            inline: B.normal
        };
        this.options.pedantic ? (t.block = H.pedantic, t.inline = B.pedantic) : this.options.gfm && (t.block = H.gfm, this.options.breaks ? t.inline = B.breaks : t.inline = B.gfm), this.tokenizer.rules = t;
    }
    static get rules() {
        return {
            block: H,
            inline: B
        };
    }
    static lex(e, t) {
        return new l(t).lex(e);
    }
    static lexInline(e, t) {
        return new l(t).inlineTokens(e);
    }
    lex(e) {
        e = e.replace(m.carriageReturn, `
`), this.blockTokens(e, this.tokens);
        for(let t = 0; t < this.inlineQueue.length; t++){
            let n = this.inlineQueue[t];
            this.inlineTokens(n.src, n.tokens);
        }
        return this.inlineQueue = [], this.tokens;
    }
    blockTokens(e, t = [], n = !1) {
        this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, ""));
        let s = 1 / 0;
        for(; e;){
            if (e.length < s) s = e.length;
            else {
                this.infiniteLoopError(e.charCodeAt(0));
                break;
            }
            let r;
            if (this.options.extensions?.block?.some((o)=>(r = o.call({
                    lexer: this
                }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
            if (r = this.tokenizer.space(e)) {
                e = e.substring(r.raw.length);
                let o = t.at(-1);
                r.raw.length === 1 && o !== void 0 ? o.raw += `
` : t.push(r);
                continue;
            }
            if (r = this.tokenizer.code(e)) {
                e = e.substring(r.raw.length);
                let o = t.at(-1);
                o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.at(-1).src = o.text) : t.push(r);
                continue;
            }
            if (r = this.tokenizer.fences(e)) {
                e = e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = this.tokenizer.heading(e)) {
                e = e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = this.tokenizer.hr(e)) {
                e = e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = this.tokenizer.blockquote(e)) {
                e = e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = this.tokenizer.list(e)) {
                e = e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = this.tokenizer.html(e)) {
                e = e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = this.tokenizer.def(e)) {
                e = e.substring(r.raw.length);
                let o = t.at(-1);
                o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.raw, this.inlineQueue.at(-1).src = o.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
                    href: r.href,
                    title: r.title
                }, t.push(r));
                continue;
            }
            if (r = this.tokenizer.table(e)) {
                e = e.substring(r.raw.length), t.push(r);
                continue;
            }
            if (r = this.tokenizer.lheading(e)) {
                e = e.substring(r.raw.length), t.push(r);
                continue;
            }
            let i = e;
            if (this.options.extensions?.startBlock) {
                let o = 1 / 0, p = e.slice(1), a;
                this.options.extensions.startBlock.forEach((u)=>{
                    a = u.call({
                        lexer: this
                    }, p), typeof a == "number" && a >= 0 && (o = Math.min(o, a));
                }), o < 1 / 0 && o >= 0 && (i = e.substring(0, o + 1));
            }
            if (this.state.top && (r = this.tokenizer.paragraph(i))) {
                let o = t.at(-1);
                n && o?.type === "paragraph" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
                continue;
            }
            if (r = this.tokenizer.text(e)) {
                e = e.substring(r.raw.length);
                let o = t.at(-1);
                o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(r);
                continue;
            }
            if (e) {
                this.infiniteLoopError(e.charCodeAt(0));
                break;
            }
        }
        return this.state.top = !0, t;
    }
    inline(e, t = []) {
        return this.inlineQueue.push({
            src: e,
            tokens: t
        }), t;
    }
    inlineTokens(e, t = []) {
        this.tokenizer.lexer = this;
        let n = e;
        if (this.tokens.links) {
            let o = Object.keys(this.tokens.links);
            o.length > 0 && (n = n.replace(this.tokenizer.rules.inline.reflinkSearch, (p)=>o.includes(p.slice(p.lastIndexOf("[") + 1, -1)) ? "[" + "a".repeat(p.length - 2) + "]" : p));
        }
        n = n.replace(this.tokenizer.rules.inline.anyPunctuation, "++"), n = n.replace(this.tokenizer.rules.inline.blockSkip, (o, p, a)=>{
            let u = a ? a.length : 0;
            return o.slice(0, u) + "[" + "a".repeat(o.length - u - 2) + "]";
        }), n = this.options.hooks?.emStrongMask?.call({
            lexer: this
        }, n) ?? n;
        let s = !1, r = "", i = 1 / 0;
        for(; e;){
            if (e.length < i) i = e.length;
            else {
                this.infiniteLoopError(e.charCodeAt(0));
                break;
            }
            s || (r = ""), s = !1;
            let o;
            if (this.options.extensions?.inline?.some((a)=>(o = a.call({
                    lexer: this
                }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), !0) : !1)) continue;
            if (o = this.tokenizer.escape(e)) {
                e = e.substring(o.raw.length), t.push(o);
                continue;
            }
            if (o = this.tokenizer.tag(e)) {
                e = e.substring(o.raw.length), t.push(o);
                continue;
            }
            if (o = this.tokenizer.link(e)) {
                e = e.substring(o.raw.length), t.push(o);
                continue;
            }
            if (o = this.tokenizer.reflink(e, this.tokens.links)) {
                e = e.substring(o.raw.length);
                let a = t.at(-1);
                o.type === "text" && a?.type === "text" ? (a.raw += o.raw, a.text += o.text) : t.push(o);
                continue;
            }
            if (o = this.tokenizer.emStrong(e, n, r)) {
                e = e.substring(o.raw.length), t.push(o);
                continue;
            }
            if (o = this.tokenizer.codespan(e)) {
                e = e.substring(o.raw.length), t.push(o);
                continue;
            }
            if (o = this.tokenizer.br(e)) {
                e = e.substring(o.raw.length), t.push(o);
                continue;
            }
            if (o = this.tokenizer.del(e, n, r)) {
                e = e.substring(o.raw.length), t.push(o);
                continue;
            }
            if (o = this.tokenizer.autolink(e)) {
                e = e.substring(o.raw.length), t.push(o);
                continue;
            }
            if (!this.state.inLink && (o = this.tokenizer.url(e))) {
                e = e.substring(o.raw.length), t.push(o);
                continue;
            }
            let p = e;
            if (this.options.extensions?.startInline) {
                let a = 1 / 0, u = e.slice(1), c;
                this.options.extensions.startInline.forEach((h)=>{
                    c = h.call({
                        lexer: this
                    }, u), typeof c == "number" && c >= 0 && (a = Math.min(a, c));
                }), a < 1 / 0 && a >= 0 && (p = e.substring(0, a + 1));
            }
            if (o = this.tokenizer.inlineText(p)) {
                e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (r = o.raw.slice(-1)), s = !0;
                let a = t.at(-1);
                a?.type === "text" ? (a.raw += o.raw, a.text += o.text) : t.push(o);
                continue;
            }
            if (e) {
                this.infiniteLoopError(e.charCodeAt(0));
                break;
            }
        }
        return t;
    }
    infiniteLoopError(e) {
        let t = "Infinite loop on byte: " + e;
        if (this.options.silent) console.error(t);
        else throw new Error(t);
    }
};
var P = class {
    options;
    parser;
    constructor(e){
        this.options = e || R;
    }
    space(e) {
        return "";
    }
    code({ text: e, lang: t, escaped: n }) {
        let s = (t || "").match(m.notSpaceStart)?.[0], r = e.replace(m.endingNewline, "") + `
`;
        return s ? '<pre><code class="language-' + O(s) + '">' + (n ? r : O(r, !0)) + `</code></pre>
` : "<pre><code>" + (n ? r : O(r, !0)) + `</code></pre>
`;
    }
    blockquote({ tokens: e }) {
        return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
    }
    html({ text: e }) {
        return e;
    }
    def(e) {
        return "";
    }
    heading({ tokens: e, depth: t }) {
        return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
    }
    hr(e) {
        return `<hr>
`;
    }
    list(e) {
        let t = e.ordered, n = e.start, s = "";
        for(let o = 0; o < e.items.length; o++){
            let p = e.items[o];
            s += this.listitem(p);
        }
        let r = t ? "ol" : "ul", i = t && n !== 1 ? ' start="' + n + '"' : "";
        return "<" + r + i + `>
` + s + "</" + r + `>
`;
    }
    listitem(e) {
        return `<li>${this.parser.parse(e.tokens)}</li>
`;
    }
    checkbox({ checked: e }) {
        return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
    }
    paragraph({ tokens: e }) {
        return `<p>${this.parser.parseInline(e)}</p>
`;
    }
    table(e) {
        let t = "", n = "";
        for(let r = 0; r < e.header.length; r++)n += this.tablecell(e.header[r]);
        t += this.tablerow({
            text: n
        });
        let s = "";
        for(let r = 0; r < e.rows.length; r++){
            let i = e.rows[r];
            n = "";
            for(let o = 0; o < i.length; o++)n += this.tablecell(i[o]);
            s += this.tablerow({
                text: n
            });
        }
        return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + s + `</table>
`;
    }
    tablerow({ text: e }) {
        return `<tr>
${e}</tr>
`;
    }
    tablecell(e) {
        let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
        return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
    }
    strong({ tokens: e }) {
        return `<strong>${this.parser.parseInline(e)}</strong>`;
    }
    em({ tokens: e }) {
        return `<em>${this.parser.parseInline(e)}</em>`;
    }
    codespan({ text: e }) {
        return `<code>${O(e, !0)}</code>`;
    }
    br(e) {
        return "<br>";
    }
    del({ tokens: e }) {
        return `<del>${this.parser.parseInline(e)}</del>`;
    }
    link({ href: e, title: t, tokens: n }) {
        let s = this.parser.parseInline(n), r = Y(e);
        if (r === null) return s;
        e = r;
        let i = '<a href="' + e + '"';
        return t && (i += ' title="' + O(t) + '"'), i += ">" + s + "</a>", i;
    }
    image({ href: e, title: t, text: n, tokens: s }) {
        s && (n = this.parser.parseInline(s, this.parser.textRenderer));
        let r = Y(e);
        if (r === null) return O(n);
        e = r;
        let i = `<img src="${e}" alt="${O(n)}"`;
        return t && (i += ` title="${O(t)}"`), i += ">", i;
    }
    text(e) {
        return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : O(e.text);
    }
};
var L = class {
    strong({ text: e }) {
        return e;
    }
    em({ text: e }) {
        return e;
    }
    codespan({ text: e }) {
        return e;
    }
    del({ text: e }) {
        return e;
    }
    html({ text: e }) {
        return e;
    }
    text({ text: e }) {
        return e;
    }
    link({ text: e }) {
        return "" + e;
    }
    image({ text: e }) {
        return "" + e;
    }
    br() {
        return "";
    }
    checkbox({ raw: e }) {
        return e;
    }
};
var b = class l {
    options;
    renderer;
    textRenderer;
    constructor(e){
        this.options = e || R, this.options.renderer = this.options.renderer || new P, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new L;
    }
    static parse(e, t) {
        return new l(t).parse(e);
    }
    static parseInline(e, t) {
        return new l(t).parseInline(e);
    }
    parse(e) {
        this.renderer.parser = this;
        let t = "";
        for(let n = 0; n < e.length; n++){
            let s = e[n];
            if (this.options.extensions?.renderers?.[s.type]) {
                let i = s, o = this.options.extensions.renderers[i.type].call({
                    parser: this
                }, i);
                if (o !== !1 || ![
                    "space",
                    "hr",
                    "heading",
                    "code",
                    "table",
                    "blockquote",
                    "list",
                    "checkbox",
                    "html",
                    "def",
                    "paragraph",
                    "text"
                ].includes(i.type)) {
                    t += o || "";
                    continue;
                }
            }
            let r = s;
            switch(r.type){
                case "space":
                    {
                        t += this.renderer.space(r);
                        break;
                    }
                case "hr":
                    {
                        t += this.renderer.hr(r);
                        break;
                    }
                case "heading":
                    {
                        t += this.renderer.heading(r);
                        break;
                    }
                case "code":
                    {
                        t += this.renderer.code(r);
                        break;
                    }
                case "table":
                    {
                        t += this.renderer.table(r);
                        break;
                    }
                case "blockquote":
                    {
                        t += this.renderer.blockquote(r);
                        break;
                    }
                case "list":
                    {
                        t += this.renderer.list(r);
                        break;
                    }
                case "checkbox":
                    {
                        t += this.renderer.checkbox(r);
                        break;
                    }
                case "html":
                    {
                        t += this.renderer.html(r);
                        break;
                    }
                case "def":
                    {
                        t += this.renderer.def(r);
                        break;
                    }
                case "paragraph":
                    {
                        t += this.renderer.paragraph(r);
                        break;
                    }
                case "text":
                    {
                        t += this.renderer.text(r);
                        break;
                    }
                default:
                    {
                        let i = 'Token with "' + r.type + '" type was not found.';
                        if (this.options.silent) return console.error(i), "";
                        throw new Error(i);
                    }
            }
        }
        return t;
    }
    parseInline(e, t = this.renderer) {
        this.renderer.parser = this;
        let n = "";
        for(let s = 0; s < e.length; s++){
            let r = e[s];
            if (this.options.extensions?.renderers?.[r.type]) {
                let o = this.options.extensions.renderers[r.type].call({
                    parser: this
                }, r);
                if (o !== !1 || ![
                    "escape",
                    "html",
                    "link",
                    "image",
                    "checkbox",
                    "strong",
                    "em",
                    "codespan",
                    "br",
                    "del",
                    "text"
                ].includes(r.type)) {
                    n += o || "";
                    continue;
                }
            }
            let i = r;
            switch(i.type){
                case "escape":
                    {
                        n += t.text(i);
                        break;
                    }
                case "html":
                    {
                        n += t.html(i);
                        break;
                    }
                case "link":
                    {
                        n += t.link(i);
                        break;
                    }
                case "image":
                    {
                        n += t.image(i);
                        break;
                    }
                case "checkbox":
                    {
                        n += t.checkbox(i);
                        break;
                    }
                case "strong":
                    {
                        n += t.strong(i);
                        break;
                    }
                case "em":
                    {
                        n += t.em(i);
                        break;
                    }
                case "codespan":
                    {
                        n += t.codespan(i);
                        break;
                    }
                case "br":
                    {
                        n += t.br(i);
                        break;
                    }
                case "del":
                    {
                        n += t.del(i);
                        break;
                    }
                case "text":
                    {
                        n += t.text(i);
                        break;
                    }
                default:
                    {
                        let o = 'Token with "' + i.type + '" type was not found.';
                        if (this.options.silent) return console.error(o), "";
                        throw new Error(o);
                    }
            }
        }
        return n;
    }
};
var S = class {
    options;
    block;
    constructor(e){
        this.options = e || R;
    }
    static passThroughHooks = new Set([
        "preprocess",
        "postprocess",
        "processAllTokens",
        "emStrongMask"
    ]);
    static passThroughHooksRespectAsync = new Set([
        "preprocess",
        "postprocess",
        "processAllTokens"
    ]);
    preprocess(e) {
        return e;
    }
    postprocess(e) {
        return e;
    }
    processAllTokens(e) {
        return e;
    }
    emStrongMask(e) {
        return e;
    }
    provideLexer(e = this.block) {
        return e ? x.lex : x.lexInline;
    }
    provideParser(e = this.block) {
        return e ? b.parse : b.parseInline;
    }
};
var Z = class {
    defaults = C();
    options = this.setOptions;
    parse = this.parseMarkdown(!0);
    parseInline = this.parseMarkdown(!1);
    Parser = b;
    Renderer = P;
    TextRenderer = L;
    Lexer = x;
    Tokenizer = y;
    Hooks = S;
    constructor(...e){
        this.use(...e);
    }
    walkTokens(e, t) {
        let n = [];
        for (let s of e)switch(n = n.concat(t.call(this, s)), s.type){
            case "table":
                {
                    let r = s;
                    for (let i of r.header)n = n.concat(this.walkTokens(i.tokens, t));
                    for (let i of r.rows)for (let o of i)n = n.concat(this.walkTokens(o.tokens, t));
                    break;
                }
            case "list":
                {
                    let r = s;
                    n = n.concat(this.walkTokens(r.items, t));
                    break;
                }
            default:
                {
                    let r = s;
                    this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((i)=>{
                        let o = r[i].flat(1 / 0);
                        n = n.concat(this.walkTokens(o, t));
                    }) : r.tokens && (n = n.concat(this.walkTokens(r.tokens, t)));
                }
        }
        return n;
    }
    use(...e) {
        let t = this.defaults.extensions || {
            renderers: {},
            childTokens: {}
        };
        return e.forEach((n)=>{
            let s = {
                ...n
            };
            if (s.async = this.defaults.async || s.async || !1, n.extensions && (n.extensions.forEach((r)=>{
                if (!r.name) throw new Error("extension name required");
                if ("renderer" in r) {
                    let i = t.renderers[r.name];
                    i ? t.renderers[r.name] = function(...o) {
                        let p = r.renderer.apply(this, o);
                        return p === !1 && (p = i.apply(this, o)), p;
                    } : t.renderers[r.name] = r.renderer;
                }
                if ("tokenizer" in r) {
                    if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
                    let i = t[r.level];
                    i ? i.unshift(r.tokenizer) : t[r.level] = [
                        r.tokenizer
                    ], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [
                        r.start
                    ] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [
                        r.start
                    ]));
                }
                "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
            }), s.extensions = t), n.renderer) {
                let r = this.defaults.renderer || new P(this.defaults);
                for(let i in n.renderer){
                    if (!(i in r)) throw new Error(`renderer '${i}' does not exist`);
                    if ([
                        "options",
                        "parser"
                    ].includes(i)) continue;
                    let o = i, p = n.renderer[o], a = r[o];
                    r[o] = (...u)=>{
                        let c = p.apply(r, u);
                        return c === !1 && (c = a.apply(r, u)), c || "";
                    };
                }
                s.renderer = r;
            }
            if (n.tokenizer) {
                let r = this.defaults.tokenizer || new y(this.defaults);
                for(let i in n.tokenizer){
                    if (!(i in r)) throw new Error(`tokenizer '${i}' does not exist`);
                    if ([
                        "options",
                        "rules",
                        "lexer"
                    ].includes(i)) continue;
                    let o = i, p = n.tokenizer[o], a = r[o];
                    r[o] = (...u)=>{
                        let c = p.apply(r, u);
                        return c === !1 && (c = a.apply(r, u)), c;
                    };
                }
                s.tokenizer = r;
            }
            if (n.hooks) {
                let r = this.defaults.hooks || new S;
                for(let i in n.hooks){
                    if (!(i in r)) throw new Error(`hook '${i}' does not exist`);
                    if ([
                        "options",
                        "block"
                    ].includes(i)) continue;
                    let o = i, p = n.hooks[o], a = r[o];
                    S.passThroughHooks.has(i) ? r[o] = (u)=>{
                        if (this.defaults.async && S.passThroughHooksRespectAsync.has(i)) return (async ()=>{
                            let h = await p.call(r, u);
                            return a.call(r, h);
                        })();
                        let c = p.call(r, u);
                        return a.call(r, c);
                    } : r[o] = (...u)=>{
                        if (this.defaults.async) return (async ()=>{
                            let h = await p.apply(r, u);
                            return h === !1 && (h = await a.apply(r, u)), h;
                        })();
                        let c = p.apply(r, u);
                        return c === !1 && (c = a.apply(r, u)), c;
                    };
                }
                s.hooks = r;
            }
            if (n.walkTokens) {
                let r = this.defaults.walkTokens, i = n.walkTokens;
                s.walkTokens = function(o) {
                    let p = [];
                    return p.push(i.call(this, o)), r && (p = p.concat(r.call(this, o))), p;
                };
            }
            this.defaults = {
                ...this.defaults,
                ...s
            };
        }), this;
    }
    setOptions(e) {
        return this.defaults = {
            ...this.defaults,
            ...e
        }, this;
    }
    lexer(e, t) {
        return x.lex(e, t ?? this.defaults);
    }
    parser(e, t) {
        return b.parse(e, t ?? this.defaults);
    }
    parseMarkdown(e) {
        return (n, s)=>{
            let r = {
                ...s
            }, i = {
                ...this.defaults,
                ...r
            }, o = this.onError(!!i.silent, !!i.async);
            if (this.defaults.async === !0 && r.async === !1) return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
            if (typeof n > "u" || n === null) return o(new Error("marked(): input parameter is undefined or null"));
            if (typeof n != "string") return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
            if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async ()=>{
                let p = i.hooks ? await i.hooks.preprocess(n) : n, u = await (i.hooks ? await i.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(p, i), c = i.hooks ? await i.hooks.processAllTokens(u) : u;
                i.walkTokens && await Promise.all(this.walkTokens(c, i.walkTokens));
                let d = await (i.hooks ? await i.hooks.provideParser(e) : e ? b.parse : b.parseInline)(c, i);
                return i.hooks ? await i.hooks.postprocess(d) : d;
            })().catch(o);
            try {
                i.hooks && (n = i.hooks.preprocess(n));
                let a = (i.hooks ? i.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(n, i);
                i.hooks && (a = i.hooks.processAllTokens(a)), i.walkTokens && this.walkTokens(a, i.walkTokens);
                let c = (i.hooks ? i.hooks.provideParser(e) : e ? b.parse : b.parseInline)(a, i);
                return i.hooks && (c = i.hooks.postprocess(c)), c;
            } catch (p) {
                return o(p);
            }
        };
    }
    onError(e, t) {
        return (n)=>{
            if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
                let s = "<p>An error occurred:</p><pre>" + O(n.message + "", !0) + "</pre>";
                return t ? Promise.resolve(s) : s;
            }
            if (t) return Promise.reject(n);
            throw n;
        };
    }
};
var E = new Z;
function f(l, e) {
    return E.parse(l, e);
}
f.options = f.setOptions = function(l) {
    return E.setOptions(l), f.defaults = E.defaults, j(f.defaults), f;
};
f.getDefaults = C;
f.defaults = R;
function kt(...l) {
    return E.use(...l), f.defaults = E.defaults, j(f.defaults), f;
}
f.use = kt;
f.walkTokens = function(l, e) {
    return E.walkTokens(l, e);
};
f.parseInline = E.parseInline;
f.Parser = b;
f.parser = b.parse;
f.Renderer = P;
f.TextRenderer = L;
f.Lexer = x;
f.lexer = x.lex;
f.Tokenizer = y;
f.Hooks = S;
f.parse = f;
var nn = f.options, rn = f.setOptions, sn = f.walkTokens, on = f.parseInline, an = f, ln = b.parse, pn = x.lex;
;
}),
"[project]/node_modules/parse-srcset/src/parse-srcset.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Srcset Parser
 *
 * By Alex Bell |  MIT License
 *
 * JS Parser for the string value that appears in markup <img srcset="here">
 *
 * @returns Array [{url: _, d: _, w: _, h:_}, ...]
 *
 * Based super duper closely on the reference algorithm at:
 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
 *
 * Most comments are copied in directly from the spec
 * (except for comments in parens).
 */ (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        ((r)=>r !== undefined && __turbopack_context__.v(r))(factory());
    } else if (("TURBOPACK compile-time value", "object") === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.parseSrcset = factory();
    }
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    // 1. Let input be the value passed to this algorithm.
    return function(input) {
        // UTILITY FUNCTIONS
        // Manual is faster than RegEx
        // http://bjorn.tipling.com/state-and-regular-expressions-in-javascript
        // http://jsperf.com/whitespace-character/5
        function isSpace(c) {
            return c === "\u0020" || // space
            c === "\u0009" || // horizontal tab
            c === "\u000A" || // new line
            c === "\u000C" || // form feed
            c === "\u000D"; // carriage return
        }
        function collectCharacters(regEx) {
            var chars, match = regEx.exec(input.substring(pos));
            if (match) {
                chars = match[0];
                pos += chars.length;
                return chars;
            }
        }
        var inputLength = input.length, // (Don't use \s, to avoid matching non-breaking space)
        regexLeadingSpaces = /^[ \t\n\r\u000c]+/, regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/, regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/, regexTrailingCommas = /[,]+$/, regexNonNegativeInteger = /^\d+$/, // ( Positive or negative or unsigned integers or decimals, without or without exponents.
        // Must include at least one digit.
        // According to spec tests any decimal point must be followed by a digit.
        // No leading plus sign is allowed.)
        // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
        regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, url, descriptors, currentDescriptor, state, c, // 2. Let position be a pointer into input, initially pointing at the start
        //    of the string.
        pos = 0, // 3. Let candidates be an initially empty source set.
        candidates = [];
        // 4. Splitting loop: Collect a sequence of characters that are space
        //    characters or U+002C COMMA characters. If any U+002C COMMA characters
        //    were collected, that is a parse error.
        while(true){
            collectCharacters(regexLeadingCommasOrSpaces);
            // 5. If position is past the end of input, return candidates and abort these steps.
            if (pos >= inputLength) {
                return candidates; // (we're done, this is the sole return path)
            }
            // 6. Collect a sequence of characters that are not space characters,
            //    and let that be url.
            url = collectCharacters(regexLeadingNotSpaces);
            // 7. Let descriptors be a new empty list.
            descriptors = [];
            // 8. If url ends with a U+002C COMMA character (,), follow these substeps:
            //		(1). Remove all trailing U+002C COMMA characters from url. If this removed
            //         more than one character, that is a parse error.
            if (url.slice(-1) === ",") {
                url = url.replace(regexTrailingCommas, "");
                // (Jump ahead to step 9 to skip tokenization and just push the candidate).
                parseDescriptors();
            //	Otherwise, follow these substeps:
            } else {
                tokenize();
            } // (close else of step 8)
        // 16. Return to the step labeled splitting loop.
        } // (Close of big while loop.)
        /**
		 * Tokenizes descriptor properties prior to parsing
		 * Returns undefined.
		 */ function tokenize() {
            // 8.1. Descriptor tokeniser: Skip whitespace
            collectCharacters(regexLeadingSpaces);
            // 8.2. Let current descriptor be the empty string.
            currentDescriptor = "";
            // 8.3. Let state be in descriptor.
            state = "in descriptor";
            while(true){
                // 8.4. Let c be the character at position.
                c = input.charAt(pos);
                //  Do the following depending on the value of state.
                //  For the purpose of this step, "EOF" is a special character representing
                //  that position is past the end of input.
                // In descriptor
                if (state === "in descriptor") {
                    // Do the following, depending on the value of c:
                    // Space character
                    // If current descriptor is not empty, append current descriptor to
                    // descriptors and let current descriptor be the empty string.
                    // Set state to after descriptor.
                    if (isSpace(c)) {
                        if (currentDescriptor) {
                            descriptors.push(currentDescriptor);
                            currentDescriptor = "";
                            state = "after descriptor";
                        }
                    // U+002C COMMA (,)
                    // Advance position to the next character in input. If current descriptor
                    // is not empty, append current descriptor to descriptors. Jump to the step
                    // labeled descriptor parser.
                    } else if (c === ",") {
                        pos += 1;
                        if (currentDescriptor) {
                            descriptors.push(currentDescriptor);
                        }
                        parseDescriptors();
                        return;
                    // U+0028 LEFT PARENTHESIS (()
                    // Append c to current descriptor. Set state to in parens.
                    } else if (c === "\u0028") {
                        currentDescriptor = currentDescriptor + c;
                        state = "in parens";
                    // EOF
                    // If current descriptor is not empty, append current descriptor to
                    // descriptors. Jump to the step labeled descriptor parser.
                    } else if (c === "") {
                        if (currentDescriptor) {
                            descriptors.push(currentDescriptor);
                        }
                        parseDescriptors();
                        return;
                    // Anything else
                    // Append c to current descriptor.
                    } else {
                        currentDescriptor = currentDescriptor + c;
                    }
                // (end "in descriptor"
                // In parens
                } else if (state === "in parens") {
                    // U+0029 RIGHT PARENTHESIS ())
                    // Append c to current descriptor. Set state to in descriptor.
                    if (c === ")") {
                        currentDescriptor = currentDescriptor + c;
                        state = "in descriptor";
                    // EOF
                    // Append current descriptor to descriptors. Jump to the step labeled
                    // descriptor parser.
                    } else if (c === "") {
                        descriptors.push(currentDescriptor);
                        parseDescriptors();
                        return;
                    // Anything else
                    // Append c to current descriptor.
                    } else {
                        currentDescriptor = currentDescriptor + c;
                    }
                // After descriptor
                } else if (state === "after descriptor") {
                    // Do the following, depending on the value of c:
                    // Space character: Stay in this state.
                    if (isSpace(c)) {
                    // EOF: Jump to the step labeled descriptor parser.
                    } else if (c === "") {
                        parseDescriptors();
                        return;
                    // Anything else
                    // Set state to in descriptor. Set position to the previous character in input.
                    } else {
                        state = "in descriptor";
                        pos -= 1;
                    }
                }
                // Advance position to the next character in input.
                pos += 1;
            // Repeat this step.
            } // (close while true loop)
        }
        /**
		 * Adds descriptor properties to a candidate, pushes to the candidates array
		 * @return undefined
		 */ // Declared outside of the while loop so that it's only created once.
        function parseDescriptors() {
            // 9. Descriptor parser: Let error be no.
            var pError = false, // 10. Let width be absent.
            // 11. Let density be absent.
            // 12. Let future-compat-h be absent. (We're implementing it now as h)
            w, d, h, i, candidate = {}, desc, lastChar, value, intVal, floatVal;
            // 13. For each descriptor in descriptors, run the appropriate set of steps
            // from the following list:
            for(i = 0; i < descriptors.length; i++){
                desc = descriptors[i];
                lastChar = desc[desc.length - 1];
                value = desc.substring(0, desc.length - 1);
                intVal = parseInt(value, 10);
                floatVal = parseFloat(value);
                // If the descriptor consists of a valid non-negative integer followed by
                // a U+0077 LATIN SMALL LETTER W character
                if (regexNonNegativeInteger.test(value) && lastChar === "w") {
                    // If width and density are not both absent, then let error be yes.
                    if (w || d) {
                        pError = true;
                    }
                    // Apply the rules for parsing non-negative integers to the descriptor.
                    // If the result is zero, let error be yes.
                    // Otherwise, let width be the result.
                    if (intVal === 0) {
                        pError = true;
                    } else {
                        w = intVal;
                    }
                // If the descriptor consists of a valid floating-point number followed by
                // a U+0078 LATIN SMALL LETTER X character
                } else if (regexFloatingPoint.test(value) && lastChar === "x") {
                    // If width, density and future-compat-h are not all absent, then let error
                    // be yes.
                    if (w || d || h) {
                        pError = true;
                    }
                    // Apply the rules for parsing floating-point number values to the descriptor.
                    // If the result is less than zero, let error be yes. Otherwise, let density
                    // be the result.
                    if (floatVal < 0) {
                        pError = true;
                    } else {
                        d = floatVal;
                    }
                // If the descriptor consists of a valid non-negative integer followed by
                // a U+0068 LATIN SMALL LETTER H character
                } else if (regexNonNegativeInteger.test(value) && lastChar === "h") {
                    // If height and density are not both absent, then let error be yes.
                    if (h || d) {
                        pError = true;
                    }
                    // Apply the rules for parsing non-negative integers to the descriptor.
                    // If the result is zero, let error be yes. Otherwise, let future-compat-h
                    // be the result.
                    if (intVal === 0) {
                        pError = true;
                    } else {
                        h = intVal;
                    }
                // Anything else, Let error be yes.
                } else {
                    pError = true;
                }
            } // (close step 13 for loop)
            // 15. If error is still no, then append a new image source to candidates whose
            // URL is url, associated with a width width if not absent and a pixel
            // density density if not absent. Otherwise, there is a parse error.
            if (!pError) {
                candidate.url = url;
                if (w) {
                    candidate.w = w;
                }
                if (d) {
                    candidate.d = d;
                }
                if (h) {
                    candidate.h = h;
                }
                candidates.push(candidate);
            } else if (console && console.log) {
                console.log("Invalid srcset descriptor found in '" + input + "' at '" + desc + "'.");
            }
        } // (close parseDescriptors fn)
    };
});
}),
"[project]/node_modules/sanitize-html/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const htmlparser = __turbopack_context__.r("[project]/node_modules/htmlparser2/dist/index.js [app-ssr] (ecmascript)");
const escapeStringRegexp = __turbopack_context__.r("[project]/node_modules/escape-string-regexp/index.js [app-ssr] (ecmascript)");
const { isPlainObject } = __turbopack_context__.r("[project]/node_modules/is-plain-object/dist/is-plain-object.js [app-ssr] (ecmascript)");
const deepmerge = __turbopack_context__.r("[project]/node_modules/deepmerge/dist/cjs.js [app-ssr] (ecmascript)");
const parseSrcset = __turbopack_context__.r("[project]/node_modules/parse-srcset/src/parse-srcset.js [app-ssr] (ecmascript)");
const { parse: postcssParse } = __turbopack_context__.r("[externals]/postcss [external] (postcss, cjs, [project]/node_modules/postcss)");
const { naughtyHref: launderNaughtyHref } = __turbopack_context__.r("[project]/node_modules/launder/index.js [app-ssr] (ecmascript)");
// Tags that can conceivably represent stand-alone media.
const mediaTags = [
    'img',
    'audio',
    'video',
    'picture',
    'svg',
    'object',
    'map',
    'iframe',
    'embed'
];
// Tags that are inherently vulnerable to being used in XSS attacks.
const vulnerableTags = [
    'script',
    'style'
];
function each(obj, cb) {
    if (obj) {
        Object.keys(obj).forEach(function(key) {
            cb(obj[key], key);
        });
    }
}
// Avoid false positives with .__proto__, .hasOwnProperty, etc.
function has(obj, key) {
    return ({}).hasOwnProperty.call(obj, key);
}
// Returns those elements of `a` for which `cb(a)` returns truthy
function filter(a, cb) {
    const n = [];
    each(a, function(v) {
        if (cb(v)) {
            n.push(v);
        }
    });
    return n;
}
function isEmptyObject(obj) {
    for(const key in obj){
        if (has(obj, key)) {
            return false;
        }
    }
    return true;
}
function stringifySrcset(parsedSrcset) {
    return parsedSrcset.map(function(part) {
        if (!part.url) {
            throw new Error('URL missing');
        }
        return part.url + (part.w ? ` ${part.w}w` : '') + (part.h ? ` ${part.h}h` : '') + (part.d ? ` ${part.d}x` : '');
    }).join(', ');
}
module.exports = sanitizeHtml;
// A valid attribute name.
// We use a tolerant definition based on the set of strings defined by
// html.spec.whatwg.org/multipage/parsing.html#before-attribute-name-state
// and html.spec.whatwg.org/multipage/parsing.html#attribute-name-state .
// The characters accepted are ones which can be appended to the attribute
// name buffer without triggering a parse error:
//   * unexpected-equals-sign-before-attribute-name
//   * unexpected-null-character
//   * unexpected-character-in-attribute-name
// We exclude the empty string because it's impossible to get to the after
// attribute name state with an empty attribute name buffer.
const VALID_HTML_ATTRIBUTE_NAME = /^[^\0\t\n\f\r /<=>]+$/;
// Ignore the _recursing flag; it's there for recursive
// invocation as a guard against this exploit:
// https://github.com/fb55/htmlparser2/issues/105
function sanitizeHtml(html, options, _recursing) {
    if (html == null) {
        return '';
    }
    if (typeof html === 'number') {
        html = html.toString();
    }
    let result = '';
    // Used for hot swapping the result variable with an empty string
    // in order to "capture" the text written to it.
    let tempResult = '';
    function Frame(tag, attribs) {
        const that = this;
        this.tag = tag;
        this.attribs = attribs || {};
        this.tagPosition = result.length;
        this.text = ''; // Node inner text
        this.openingTagLength = 0;
        this.mediaChildren = [];
        this.updateParentNodeText = function() {
            if (stack.length) {
                const parentFrame = stack[stack.length - 1];
                parentFrame.text += that.text;
            }
        };
        this.updateParentNodeMediaChildren = function() {
            if (stack.length && mediaTags.includes(this.tag)) {
                const parentFrame = stack[stack.length - 1];
                parentFrame.mediaChildren.push(this.tag);
            }
        };
    }
    options = Object.assign({}, sanitizeHtml.defaults, options);
    options.parser = Object.assign({}, htmlParserDefaults, options.parser);
    const tagAllowed = function(name) {
        return options.allowedTags === false || (options.allowedTags || []).indexOf(name) > -1;
    };
    // vulnerableTags
    vulnerableTags.forEach(function(tag) {
        if (tagAllowed(tag) && !options.allowVulnerableTags) {
            console.warn(`\n\n⚠️ Your \`allowedTags\` option includes, \`${tag}\`, which is inherently\nvulnerable to XSS attacks. Please remove it from \`allowedTags\`.\nOr, to disable this warning, add the \`allowVulnerableTags\` option\nand ensure you are accounting for this risk.\n\n`);
        }
    });
    // Tags that contain something other than HTML, or where discarding
    // the text when the tag is disallowed makes sense for other reasons.
    // If we are not allowing these tags, we should drop their content too.
    // For other tags you would drop the tag but keep its content.
    // `xmp` is included because htmlparser2 treats it as a raw-text element,
    // so markup inside is parsed as text on input but would otherwise be
    // re-emitted unescaped via the `ontext` branch below, allowing XSS bypass
    // when `xmp` is disallowed (which is the default).
    const nonTextTagsArray = options.nonTextTags || [
        'script',
        'style',
        'textarea',
        'option',
        'xmp'
    ];
    let allowedAttributesMap;
    let allowedAttributesGlobMap;
    if (options.allowedAttributes) {
        allowedAttributesMap = {};
        allowedAttributesGlobMap = {};
        each(options.allowedAttributes, function(attributes, tag) {
            allowedAttributesMap[tag] = [];
            const globRegex = [];
            attributes.forEach(function(obj) {
                if (typeof obj === 'string' && obj.indexOf('*') >= 0) {
                    globRegex.push(escapeStringRegexp(obj).replace(/\\\*/g, '.*'));
                } else {
                    allowedAttributesMap[tag].push(obj);
                }
            });
            if (globRegex.length) {
                allowedAttributesGlobMap[tag] = new RegExp('^(' + globRegex.join('|') + ')$');
            }
        });
    }
    const allowedClassesMap = {};
    const allowedClassesGlobMap = {};
    const allowedClassesRegexMap = {};
    each(options.allowedClasses, function(classes, tag) {
        // Implicitly allows the class attribute
        if (allowedAttributesMap) {
            if (!has(allowedAttributesMap, tag)) {
                allowedAttributesMap[tag] = [];
            }
            allowedAttributesMap[tag].push('class');
        }
        allowedClassesMap[tag] = classes;
        if (Array.isArray(classes)) {
            const globRegex = [];
            allowedClassesMap[tag] = [];
            allowedClassesRegexMap[tag] = [];
            classes.forEach(function(obj) {
                if (typeof obj === 'string' && obj.indexOf('*') >= 0) {
                    globRegex.push(escapeStringRegexp(obj).replace(/\\\*/g, '.*'));
                } else if (obj instanceof RegExp) {
                    allowedClassesRegexMap[tag].push(obj);
                } else {
                    allowedClassesMap[tag].push(obj);
                }
            });
            if (globRegex.length) {
                allowedClassesGlobMap[tag] = new RegExp('^(' + globRegex.join('|') + ')$');
            }
        }
    });
    const transformTagsMap = {};
    let transformTagsAll;
    each(options.transformTags, function(transform, tag) {
        let transFun;
        if (typeof transform === 'function') {
            transFun = transform;
        } else if (typeof transform === 'string') {
            transFun = sanitizeHtml.simpleTransform(transform);
        }
        if (tag === '*') {
            transformTagsAll = transFun;
        } else {
            transformTagsMap[tag] = transFun;
        }
    });
    let depth;
    let stack;
    let skipMap;
    let transformMap;
    let skipText;
    let skipTextDepth;
    let addedText = false;
    initializeState();
    const parser = new htmlparser.Parser({
        onopentag: function(name, attribs) {
            if (options.onOpenTag) {
                options.onOpenTag(name, attribs);
            }
            // If `enforceHtmlBoundary` is `true` and this has found the opening
            // `html` tag, reset the state.
            if (options.enforceHtmlBoundary && name === 'html') {
                initializeState();
            }
            if (skipText) {
                skipTextDepth++;
                return;
            }
            const frame = new Frame(name, attribs);
            stack.push(frame);
            let skip = false;
            const hasText = !!frame.text;
            let transformedTag;
            if (has(transformTagsMap, name)) {
                transformedTag = transformTagsMap[name](name, attribs);
                frame.attribs = attribs = transformedTag.attribs;
                if (transformedTag.text !== undefined) {
                    frame.innerText = transformedTag.text;
                }
                if (name !== transformedTag.tagName) {
                    frame.name = name = transformedTag.tagName;
                    transformMap[depth] = transformedTag.tagName;
                }
            }
            if (transformTagsAll) {
                transformedTag = transformTagsAll(name, attribs);
                frame.attribs = attribs = transformedTag.attribs;
                if (name !== transformedTag.tagName) {
                    frame.name = name = transformedTag.tagName;
                    transformMap[depth] = transformedTag.tagName;
                }
            }
            if (!tagAllowed(name) || options.disallowedTagsMode === 'recursiveEscape' && !isEmptyObject(skipMap) || options.nestingLimit != null && depth >= options.nestingLimit) {
                skip = true;
                skipMap[depth] = true;
                if (options.disallowedTagsMode === 'discard' || options.disallowedTagsMode === 'completelyDiscard') {
                    if (nonTextTagsArray.indexOf(name) !== -1) {
                        skipText = true;
                        skipTextDepth = 1;
                    }
                }
            }
            depth++;
            if (skip) {
                if (options.disallowedTagsMode === 'discard' || options.disallowedTagsMode === 'completelyDiscard') {
                    // We want the contents but not this tag
                    if (frame.innerText && !hasText) {
                        const escaped = escapeHtml(frame.innerText);
                        if (options.textFilter) {
                            result += options.textFilter(escaped, name);
                        } else {
                            result += escaped;
                        }
                        addedText = true;
                    }
                    return;
                }
                tempResult = result;
                result = '';
            }
            result += '<' + name;
            if (name === 'script') {
                if (options.allowedScriptHostnames || options.allowedScriptDomains) {
                    frame.innerText = '';
                }
            }
            const isBeingEscaped = skip && (options.disallowedTagsMode === 'escape' || options.disallowedTagsMode === 'recursiveEscape');
            const shouldPreserveEscapedAttributes = isBeingEscaped && options.preserveEscapedAttributes;
            if (shouldPreserveEscapedAttributes) {
                each(attribs, function(value, a) {
                    result += ' ' + a + '="' + escapeHtml(value || '', true) + '"';
                });
            } else if (!allowedAttributesMap || has(allowedAttributesMap, name) || allowedAttributesMap['*']) {
                each(attribs, function(value, a) {
                    if (!VALID_HTML_ATTRIBUTE_NAME.test(a)) {
                        // This prevents part of an attribute name in the output from being
                        // interpreted as the end of an attribute, or end of a tag.
                        delete frame.attribs[a];
                        return;
                    }
                    // If the value is empty, check if the attribute is
                    // in the allowedEmptyAttributes array.
                    // If it is not in the allowedEmptyAttributes array,
                    // and it is a known non-boolean attribute, delete it
                    // List taken from https://html.spec.whatwg.org/multipage/indices.html#attributes-3
                    if (value === '' && !options.allowedEmptyAttributes.includes(a) && (options.nonBooleanAttributes.includes(a) || options.nonBooleanAttributes.includes('*'))) {
                        delete frame.attribs[a];
                        return;
                    }
                    // check allowedAttributesMap for the element and attribute and modify the value
                    // as necessary if there are specific values defined.
                    let passedAllowedAttributesMapCheck = false;
                    if (!allowedAttributesMap || has(allowedAttributesMap, name) && allowedAttributesMap[name].indexOf(a) !== -1 || allowedAttributesMap['*'] && allowedAttributesMap['*'].indexOf(a) !== -1 || has(allowedAttributesGlobMap, name) && allowedAttributesGlobMap[name].test(a) || allowedAttributesGlobMap['*'] && allowedAttributesGlobMap['*'].test(a)) {
                        passedAllowedAttributesMapCheck = true;
                    } else if (allowedAttributesMap && allowedAttributesMap[name]) {
                        for (const o of allowedAttributesMap[name]){
                            if (isPlainObject(o) && o.name && o.name === a) {
                                passedAllowedAttributesMapCheck = true;
                                let newValue = '';
                                if (o.multiple === true) {
                                    // verify the values that are allowed
                                    const splitStrArray = value.split(' ');
                                    for (const s of splitStrArray){
                                        if (o.values.indexOf(s) !== -1) {
                                            if (newValue === '') {
                                                newValue = s;
                                            } else {
                                                newValue += ' ' + s;
                                            }
                                        }
                                    }
                                } else if (o.values.indexOf(value) >= 0) {
                                    // verified an allowed value matches the entire attribute value
                                    newValue = value;
                                }
                                value = newValue;
                            }
                        }
                    }
                    if (passedAllowedAttributesMapCheck) {
                        if (options.allowedSchemesAppliedToAttributes.indexOf(a) !== -1) {
                            if (naughtyHref(name, value)) {
                                delete frame.attribs[a];
                                return;
                            }
                        }
                        if (name === 'script' && a === 'src') {
                            let allowed = true;
                            try {
                                const parsed = parseUrl(value);
                                if (options.allowedScriptHostnames || options.allowedScriptDomains) {
                                    const allowedHostname = (options.allowedScriptHostnames || []).find(function(hostname) {
                                        return hostname === parsed.url.hostname;
                                    });
                                    const allowedDomain = (options.allowedScriptDomains || []).find(function(domain) {
                                        return parsed.url.hostname === domain || parsed.url.hostname.endsWith(`.${domain}`);
                                    });
                                    allowed = allowedHostname || allowedDomain;
                                }
                            } catch (e) {
                                allowed = false;
                            }
                            if (!allowed) {
                                delete frame.attribs[a];
                                return;
                            }
                        }
                        if (name === 'iframe' && a === 'src') {
                            let allowed = true;
                            try {
                                const parsed = parseUrl(value);
                                if (parsed.isRelativeUrl) {
                                    // default value of allowIframeRelativeUrls is true
                                    // unless allowedIframeHostnames or allowedIframeDomains specified
                                    allowed = has(options, 'allowIframeRelativeUrls') ? options.allowIframeRelativeUrls : !options.allowedIframeHostnames && !options.allowedIframeDomains;
                                } else if (options.allowedIframeHostnames || options.allowedIframeDomains) {
                                    const allowedHostname = (options.allowedIframeHostnames || []).find(function(hostname) {
                                        return hostname === parsed.url.hostname;
                                    });
                                    const allowedDomain = (options.allowedIframeDomains || []).find(function(domain) {
                                        return parsed.url.hostname === domain || parsed.url.hostname.endsWith(`.${domain}`);
                                    });
                                    allowed = allowedHostname || allowedDomain;
                                }
                            } catch (e) {
                                // Unparseable iframe src
                                allowed = false;
                            }
                            if (!allowed) {
                                delete frame.attribs[a];
                                return;
                            }
                        }
                        if (a === 'srcset' || a === 'imagesrcset') {
                            try {
                                let parsed = parseSrcset(value);
                                parsed.forEach(function(value) {
                                    if (naughtyHref(a, value.url)) {
                                        value.evil = true;
                                    }
                                });
                                parsed = filter(parsed, function(v) {
                                    return !v.evil;
                                });
                                if (!parsed.length) {
                                    delete frame.attribs[a];
                                    return;
                                } else {
                                    value = stringifySrcset(filter(parsed, function(v) {
                                        return !v.evil;
                                    }));
                                    frame.attribs[a] = value;
                                }
                            } catch (e) {
                                // Unparseable srcset
                                delete frame.attribs[a];
                                return;
                            }
                        }
                        if (a === 'class') {
                            const allowedSpecificClasses = allowedClassesMap[name];
                            const allowedWildcardClasses = allowedClassesMap['*'];
                            const allowedSpecificClassesGlob = allowedClassesGlobMap[name];
                            const allowedSpecificClassesRegex = allowedClassesRegexMap[name];
                            const allowedWildcardClassesRegex = allowedClassesRegexMap['*'];
                            const allowedWildcardClassesGlob = allowedClassesGlobMap['*'];
                            const allowedClassesGlobs = [
                                allowedSpecificClassesGlob,
                                allowedWildcardClassesGlob
                            ].concat(allowedSpecificClassesRegex, allowedWildcardClassesRegex).filter(function(t) {
                                return t;
                            });
                            if (allowedSpecificClasses && allowedWildcardClasses) {
                                value = filterClasses(value, deepmerge(allowedSpecificClasses, allowedWildcardClasses), allowedClassesGlobs);
                            } else {
                                value = filterClasses(value, allowedSpecificClasses || allowedWildcardClasses, allowedClassesGlobs);
                            }
                            if (!value.length) {
                                delete frame.attribs[a];
                                return;
                            }
                        }
                        if (a === 'style') {
                            if (options.parseStyleAttributes) {
                                try {
                                    const abstractSyntaxTree = postcssParse(name + ' {' + value + '}', {
                                        map: false
                                    });
                                    const filteredAST = filterCss(abstractSyntaxTree, options.allowedStyles);
                                    value = stringifyStyleAttributes(filteredAST);
                                    if (value.length === 0) {
                                        delete frame.attribs[a];
                                        return;
                                    }
                                } catch (e) {
                                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                                    ;
                                    delete frame.attribs[a];
                                    return;
                                }
                            } else if (options.allowedStyles) {
                                throw new Error('allowedStyles option cannot be used together with parseStyleAttributes: false.');
                            }
                        }
                        result += ' ' + a;
                        if (value && value.length) {
                            result += '="' + escapeHtml(value, true) + '"';
                        } else if (options.allowedEmptyAttributes.includes(a)) {
                            result += '=""';
                        }
                    } else {
                        delete frame.attribs[a];
                    }
                });
            }
            if (options.selfClosing.indexOf(name) !== -1) {
                result += ' />';
            } else {
                result += '>';
                if (frame.innerText && !hasText) {
                    const escaped = escapeHtml(frame.innerText);
                    if (options.textFilter) {
                        result += options.textFilter(escaped, name);
                    } else {
                        result += escaped;
                    }
                    addedText = true;
                }
            }
            if (skip) {
                result = tempResult + escapeHtml(result);
                tempResult = '';
            }
            frame.openingTagLength = result.length - frame.tagPosition;
        },
        ontext: function(text) {
            if (skipText) {
                return;
            }
            const lastFrame = stack[stack.length - 1];
            let tag;
            if (lastFrame) {
                tag = lastFrame.tag;
                // If inner text was set by transform function then let's use it
                text = lastFrame.innerText !== undefined ? lastFrame.innerText : text;
            }
            if (options.disallowedTagsMode === 'completelyDiscard' && !tagAllowed(tag)) {
                text = '';
            } else if (tag && tagAllowed(tag) && (options.disallowedTagsMode === 'discard' || options.disallowedTagsMode === 'completelyDiscard') && (tag === 'script' || tag === 'style')) {
                // htmlparser2 gives us these as-is. Escaping them ruins the content. Allowing
                // script tags is, by definition, game over for XSS protection, so if that's
                // your concern, don't allow them. The same is essentially true for style tags
                // which have their own collection of XSS vectors.
                result += text;
            } else if (tag && tagAllowed(tag) && (options.disallowedTagsMode === 'discard' || options.disallowedTagsMode === 'completelyDiscard') && (tag === 'textarea' || tag === 'xmp')) {
                // <textarea> and <xmp> hold text that must not be re-emitted verbatim:
                // if a raw `<` survives into the output it can reopen a tag when the
                // result is re-parsed by a browser, smuggling non-allowlisted markup
                // through the allowlist (mutation-XSS, GHSA-jxwj-j7wr-gfrw — e.g. the
                // `</textarea/>` solidus mis-close). We therefore ALWAYS escape this
                // content rather than passing it through. Escaping unconditionally also
                // closes the related SVG/MathML foreign-content bypass (where the HTML5
                // parser treats <textarea>/<xmp> as ordinary foreign elements and a
                // browser re-parses their contents as live markup, e.g.
                // `<svg><textarea><img src=x onerror=alert(1)></textarea></svg>`): since
                // we never re-emit raw text for these tags, no namespace check is
                // needed. The two tags need different escaping because htmlparser2
                // tokenizes them differently:
                if (tag === 'xmp') {
                    // <xmp> is a raw-text (CDATA) element: entities are NOT decoded, so
                    // its content reaches us as raw source that is already entity-encoded.
                    // Escape only the angle brackets so a literal `<` cannot reopen a tag,
                    // while leaving `&` untouched to avoid double-encoding entities that
                    // are already encoded in the source.
                    result += text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                } else {
                    // <textarea> is an RCDATA element: htmlparser2 (>= 11) decodes
                    // entities inside it, so its content reaches us as plain decoded text.
                    // It must therefore be fully escaped like any other text — escaping
                    // `&` as well as `<`/`>` — so entities round-trip faithfully (no
                    // double-encoding, see the CVE-2026-40186 regression tests) and no
                    // `<` can reopen a tag.
                    result += escapeHtml(text, false);
                }
            // Other "nonTextTags" like <option> are not raw text elements in
            // htmlparser2, so their contents are decoded and must be escaped below
            // like any other text (important to prevent XSS via entity-encoded
            // payloads such as <option>&lt;script&gt;...&lt;/script&gt;</option>).
            } else if (!addedText) {
                const escaped = escapeHtml(text, false);
                if (options.textFilter) {
                    result += options.textFilter(escaped, tag);
                } else {
                    result += escaped;
                }
            }
            if (stack.length) {
                const frame = stack[stack.length - 1];
                frame.text += text;
            }
        },
        onclosetag: function(name, isImplied) {
            if (options.onCloseTag) {
                options.onCloseTag(name, isImplied);
            }
            if (skipText) {
                skipTextDepth--;
                if (!skipTextDepth) {
                    skipText = false;
                } else {
                    return;
                }
            }
            const frame = stack.pop();
            if (!frame) {
                // Do not crash on bad markup
                return;
            }
            if (frame.tag !== name) {
                // Another case of bad markup.
                // Push to stack, so that it will be used in future closing tags.
                stack.push(frame);
                return;
            }
            skipText = options.enforceHtmlBoundary ? name === 'html' : false;
            depth--;
            const skip = skipMap[depth];
            if (skip) {
                delete skipMap[depth];
                if (options.disallowedTagsMode === 'discard' || options.disallowedTagsMode === 'completelyDiscard') {
                    frame.updateParentNodeText();
                    return;
                }
                tempResult = result;
                result = '';
            }
            if (transformMap[depth]) {
                name = transformMap[depth];
                delete transformMap[depth];
            }
            if (options.exclusiveFilter) {
                const filterResult = options.exclusiveFilter(frame);
                if (filterResult === 'excludeTag') {
                    if (skip) {
                        // no longer escaping the tag since it's not added at all
                        result = tempResult;
                        tempResult = '';
                    }
                    // remove the opening tag from the result
                    result = result.substring(0, frame.tagPosition) + result.substring(frame.tagPosition + frame.openingTagLength);
                    return;
                } else if (filterResult) {
                    result = result.substring(0, frame.tagPosition);
                    return;
                }
            }
            frame.updateParentNodeMediaChildren();
            frame.updateParentNodeText();
            if (// Already output />
            options.selfClosing.indexOf(name) !== -1 || isImplied && !tagAllowed(name) && [
                'escape',
                'recursiveEscape'
            ].indexOf(options.disallowedTagsMode) >= 0) {
                if (skip) {
                    result = tempResult;
                    tempResult = '';
                }
                return;
            }
            result += '</' + name + '>';
            if (skip) {
                result = tempResult + escapeHtml(result);
                tempResult = '';
            }
            addedText = false;
        }
    }, options.parser);
    parser.write(html);
    parser.end();
    if (options.disallowedTagsMode === 'escape' || options.disallowedTagsMode === 'recursiveEscape') {
        const lastParsedIndex = parser.endIndex;
        if (lastParsedIndex != null && lastParsedIndex >= 0 && lastParsedIndex < html.length) {
            const unparsed = html.substring(lastParsedIndex);
            result += escapeHtml(unparsed);
        } else if ((lastParsedIndex == null || lastParsedIndex < 0) && html.length > 0 && result === '') {
            result = escapeHtml(html);
        }
    }
    return result;
    //TURBOPACK unreachable
    ;
    function initializeState() {
        result = '';
        depth = 0;
        stack = [];
        skipMap = {};
        transformMap = {};
        skipText = false;
        skipTextDepth = 0;
    }
    function escapeHtml(s, quote) {
        if (typeof s !== 'string') {
            s = s + '';
        }
        if (options.parser.decodeEntities) {
            s = s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            if (quote) {
                s = s.replace(/"/g, '&quot;');
            }
        }
        // TODO: this is inadequate because it will pass `&0;`. This approach
        // will not work, each & must be considered with regard to whether it
        // is followed by a 100% syntactically valid entity or not, and escaped
        // if it is not. If this bothers you, don't set parser.decodeEntities
        // to false. (The default is true.)
        s = s.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, '&amp;') // Match ampersands not part of existing HTML entity
        .replace(/</g, '&lt;').replace(/>/g, '&gt;');
        if (quote) {
            s = s.replace(/"/g, '&quot;');
        }
        return s;
    }
    function naughtyHref(name, href) {
        // Resolve the per-tag scheme allowlist if one is configured for
        // this tag, otherwise fall back to the global allowedSchemes.
        const allowedSchemes = has(options.allowedSchemesByTag, name) ? options.allowedSchemesByTag[name] : options.allowedSchemes || [];
        return launderNaughtyHref(href, {
            allowedSchemes,
            allowProtocolRelative: options.allowProtocolRelative
        });
    }
    function parseUrl(value) {
        value = value.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, '$1//');
        if (value.startsWith('relative:')) {
            // An attempt to exploit our workaround for base URLs being
            // mandatory for relative URL validation in the WHATWG
            // URL parser, reject it
            throw new Error('relative: exploit attempt');
        }
        // naughtyHref is in charge of whether protocol relative URLs
        // are cool. Here we are concerned just with allowed hostnames and
        // whether to allow relative URLs.
        //
        // Build a placeholder "base URL" against which any reasonable
        // relative URL may be parsed successfully
        let base = 'relative://relative-site';
        for(let i = 0; i < 100; i++){
            base += `/${i}`;
        }
        const parsed = new URL(value, base);
        const isRelativeUrl = parsed && parsed.hostname === 'relative-site' && parsed.protocol === 'relative:';
        return {
            isRelativeUrl,
            url: parsed
        };
    }
    /**
   * Filters user input css properties by allowlisted regex attributes.
   * Modifies the abstractSyntaxTree object.
   *
   * @param {object} abstractSyntaxTree  - Object representation of CSS attributes.
   * @property {array[Declaration]} abstractSyntaxTree.nodes[0] -
   * Each object contains prop and value key, i.e { prop: 'color', value: 'red' }.
   * @param {object} allowedStyles       - Keys are properties (i.e color),
   * value is list of permitted regex rules (i.e /green/i).
   * @return {object}                    - The modified tree.
   */ function filterCss(abstractSyntaxTree, allowedStyles) {
        if (!allowedStyles) {
            return abstractSyntaxTree;
        }
        const astRules = abstractSyntaxTree.nodes[0];
        let selectedRule;
        // Merge global and tag-specific styles into new AST.
        if (allowedStyles[astRules.selector] && allowedStyles['*']) {
            selectedRule = deepmerge(allowedStyles[astRules.selector], allowedStyles['*']);
        } else {
            selectedRule = allowedStyles[astRules.selector] || allowedStyles['*'];
        }
        if (selectedRule) {
            abstractSyntaxTree.nodes[0].nodes = astRules.nodes.reduce(filterDeclarations(selectedRule), []);
        }
        return abstractSyntaxTree;
    }
    /**
   * Extracts the style attributes from an AbstractSyntaxTree and formats those
   * values in the inline style attribute format.
   *
   * @param  {AbstractSyntaxTree} filteredAST
   * @return {string}             - Example:
   * "color:yellow;text-align:center !important;font-family:helvetica;"
   */ function stringifyStyleAttributes(filteredAST) {
        return filteredAST.nodes[0].nodes.reduce(function(extractedAttributes, attrObject) {
            extractedAttributes.push(`${attrObject.prop}:${attrObject.value}${attrObject.important ? ' !important' : ''}`);
            return extractedAttributes;
        }, []).join(';');
    }
    /**
    * Filters the existing attributes for the given property. Discards any attributes
    * which don't match the allowlist.
    *
    * @param  {object} selectedRule - Example: { color: red, font-family: helvetica }
    * @param  {array} allowedDeclarationsList - List of declarations
    * which pass the allowlist.
    * @param  {object} attributeObject - Object representing the current css property.
    * @property {string} attributeObject.type - Typically 'declaration'.
    * @property {string} attributeObject.prop - The CSS property, i.e 'color'.
    * @property {string} attributeObject.value - The corresponding value to
    * the css property, i.e 'red'.
    * @return {function} - When used in Array.reduce,
    * will return an array of Declaration objects
    */ function filterDeclarations(selectedRule) {
        return function(allowedDeclarationsList, attributeObject) {
            // If this property is allowlisted...
            if (has(selectedRule, attributeObject.prop)) {
                const matchesRegex = selectedRule[attributeObject.prop].some(function(regularExpression) {
                    return regularExpression.test(attributeObject.value);
                });
                if (matchesRegex) {
                    allowedDeclarationsList.push(attributeObject);
                }
            }
            return allowedDeclarationsList;
        };
    }
    function filterClasses(classes, allowed, allowedGlobs) {
        if (!allowed) {
            // The class attribute is allowed without filtering on this tag
            return classes;
        }
        classes = classes.split(/\s+/);
        return classes.filter(function(clss) {
            return allowed.indexOf(clss) !== -1 || allowedGlobs.some(function(glob) {
                return glob.test(clss);
            });
        }).join(' ');
    }
}
// Defaults are accessible to you so that you can use them as a starting point
// programmatically if you wish
const htmlParserDefaults = {
    decodeEntities: true
};
sanitizeHtml.defaults = {
    allowedTags: [
        // Sections derived from MDN element categories and limited to the more
        // benign categories.
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
        // Content sectioning
        'address',
        'article',
        'aside',
        'footer',
        'header',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'hgroup',
        'main',
        'nav',
        'section',
        // Text content
        'blockquote',
        'dd',
        'div',
        'dl',
        'dt',
        'figcaption',
        'figure',
        'hr',
        'li',
        'menu',
        'ol',
        'p',
        'pre',
        'ul',
        // Inline text semantics
        'a',
        'abbr',
        'b',
        'bdi',
        'bdo',
        'br',
        'cite',
        'code',
        'data',
        'dfn',
        'em',
        'i',
        'kbd',
        'mark',
        'q',
        'rb',
        'rp',
        'rt',
        'rtc',
        'ruby',
        's',
        'samp',
        'small',
        'span',
        'strong',
        'sub',
        'sup',
        'time',
        'u',
        'var',
        'wbr',
        // Table content
        'caption',
        'col',
        'colgroup',
        'table',
        'tbody',
        'td',
        'tfoot',
        'th',
        'thead',
        'tr'
    ],
    // Tags that cannot be boolean
    nonBooleanAttributes: [
        'abbr',
        'accept',
        'accept-charset',
        'accesskey',
        'action',
        'allow',
        'alt',
        'as',
        'autocapitalize',
        'autocomplete',
        'blocking',
        'charset',
        'cite',
        'class',
        'color',
        'cols',
        'colspan',
        'content',
        'contenteditable',
        'coords',
        'crossorigin',
        'data',
        'datetime',
        'decoding',
        'dir',
        'dirname',
        'download',
        'draggable',
        'enctype',
        'enterkeyhint',
        'fetchpriority',
        'for',
        'form',
        'formaction',
        'formenctype',
        'formmethod',
        'formtarget',
        'headers',
        'height',
        'hidden',
        'high',
        'href',
        'hreflang',
        'http-equiv',
        'id',
        'imagesizes',
        'imagesrcset',
        'inputmode',
        'integrity',
        'is',
        'itemid',
        'itemprop',
        'itemref',
        'itemtype',
        'kind',
        'label',
        'lang',
        'list',
        'loading',
        'low',
        'max',
        'maxlength',
        'media',
        'method',
        'min',
        'minlength',
        'name',
        'nonce',
        'optimum',
        'pattern',
        'ping',
        'placeholder',
        'popover',
        'popovertarget',
        'popovertargetaction',
        'poster',
        'preload',
        'referrerpolicy',
        'rel',
        'rows',
        'rowspan',
        'sandbox',
        'scope',
        'shape',
        'size',
        'sizes',
        'slot',
        'span',
        'spellcheck',
        'src',
        'srcdoc',
        'srclang',
        'srcset',
        'start',
        'step',
        'style',
        'tabindex',
        'target',
        'title',
        'translate',
        'type',
        'usemap',
        'value',
        'width',
        'wrap',
        // Event handlers
        'onauxclick',
        'onafterprint',
        'onbeforematch',
        'onbeforeprint',
        'onbeforeunload',
        'onbeforetoggle',
        'onblur',
        'oncancel',
        'oncanplay',
        'oncanplaythrough',
        'onchange',
        'onclick',
        'onclose',
        'oncontextlost',
        'oncontextmenu',
        'oncontextrestored',
        'oncopy',
        'oncuechange',
        'oncut',
        'ondblclick',
        'ondrag',
        'ondragend',
        'ondragenter',
        'ondragleave',
        'ondragover',
        'ondragstart',
        'ondrop',
        'ondurationchange',
        'onemptied',
        'onended',
        'onerror',
        'onfocus',
        'onformdata',
        'onhashchange',
        'oninput',
        'oninvalid',
        'onkeydown',
        'onkeypress',
        'onkeyup',
        'onlanguagechange',
        'onload',
        'onloadeddata',
        'onloadedmetadata',
        'onloadstart',
        'onmessage',
        'onmessageerror',
        'onmousedown',
        'onmouseenter',
        'onmouseleave',
        'onmousemove',
        'onmouseout',
        'onmouseover',
        'onmouseup',
        'onoffline',
        'ononline',
        'onpagehide',
        'onpageshow',
        'onpaste',
        'onpause',
        'onplay',
        'onplaying',
        'onpopstate',
        'onprogress',
        'onratechange',
        'onreset',
        'onresize',
        'onrejectionhandled',
        'onscroll',
        'onscrollend',
        'onsecuritypolicyviolation',
        'onseeked',
        'onseeking',
        'onselect',
        'onslotchange',
        'onstalled',
        'onstorage',
        'onsubmit',
        'onsuspend',
        'ontimeupdate',
        'ontoggle',
        'onunhandledrejection',
        'onunload',
        'onvolumechange',
        'onwaiting',
        'onwheel'
    ],
    disallowedTagsMode: 'discard',
    allowedAttributes: {
        a: [
            'href',
            'name',
            'target'
        ],
        // We don't currently allow img itself by default, but
        // these attributes would make sense if we did.
        img: [
            'src',
            'srcset',
            'alt',
            'title',
            'width',
            'height',
            'loading'
        ]
    },
    allowedEmptyAttributes: [
        'alt'
    ],
    // Lots of these won't come up by default because we don't allow them
    selfClosing: [
        'img',
        'br',
        'hr',
        'area',
        'base',
        'basefont',
        'input',
        'link',
        'meta',
        'col'
    ],
    // URL schemes we permit
    allowedSchemes: [
        'http',
        'https',
        'ftp',
        'mailto',
        'tel'
    ],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: [
        'href',
        'src',
        'cite',
        'action',
        'formaction',
        'data',
        'xlink:href',
        'poster',
        'background',
        'ping',
        'longdesc',
        'usemap',
        'codebase',
        'classid',
        'archive',
        'profile',
        'manifest',
        'itemid',
        'dynsrc',
        'lowsrc'
    ],
    allowProtocolRelative: true,
    enforceHtmlBoundary: false,
    parseStyleAttributes: true,
    preserveEscapedAttributes: false
};
sanitizeHtml.simpleTransform = function(newTagName, newAttribs, merge) {
    merge = merge === undefined ? true : merge;
    newAttribs = newAttribs || {};
    return function(tagName, attribs) {
        let attrib;
        if (merge) {
            for(attrib in newAttribs){
                attribs[attrib] = newAttribs[attrib];
            }
        } else {
            attribs = newAttribs;
        }
        return {
            tagName: newTagName,
            attribs
        };
    };
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0xg8qdz._.js.map