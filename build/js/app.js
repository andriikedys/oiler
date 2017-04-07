'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function sayHello() {
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        var args = ['\n %c Made with ❤️ by Rivercode %c http://www.riverco.de/ %c %c 🐳 \n\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];
        window.console.log.apply(console, args);
    } else if (window.console) {
        window.console.log('Made with love ❤️ Riverco.de - http://www.riverco.de/  ❤️');
    }
}
// module.exports = sayHello;
/*! jQuery v3.0.0 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
    "use strict";
    "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
    } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};function p(a, b) {
        b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
    }var q = "3.0.0",
        r = function r(a, b) {
        return new r.fn.init(a, b);
    },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function v(a, b) {
        return b.toUpperCase();
    };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
            return f.call(this);
        }, get: function get(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : f.call(this);
        }, pushStack: function pushStack(a) {
            var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
        }, each: function each(a) {
            return r.each(this, a);
        }, map: function map(a) {
            return this.pushStack(r.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        }, slice: function slice() {
            return this.pushStack(f.apply(this, arguments));
        }, first: function first() {
            return this.eq(0);
        }, last: function last() {
            return this.eq(-1);
        }, eq: function eq(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        }, end: function end() {
            return this.prevObject || this.constructor();
        }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
        var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === 'undefined' ? 'undefined' : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (a = arguments[h])) for (b in a) {
                c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            }
        }return g;
    }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
            throw new Error(a);
        }, noop: function noop() {}, isFunction: function isFunction(a) {
            return "function" === r.type(a);
        }, isArray: Array.isArray, isWindow: function isWindow(a) {
            return null != a && a === a.window;
        }, isNumeric: function isNumeric(a) {
            var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
        }, isPlainObject: function isPlainObject(a) {
            var b, c;return a && "[object Object]" === k.call(a) ? (b = e(a)) ? (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n) : !0 : !1;
        }, isEmptyObject: function isEmptyObject(a) {
            var b;for (b in a) {
                return !1;
            }return !0;
        }, type: function type(a) {
            return null == a ? a + "" : "object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === 'undefined' ? 'undefined' : _typeof(a);
        }, globalEval: function globalEval(a) {
            p(a);
        }, camelCase: function camelCase(a) {
            return a.replace(t, "ms-").replace(u, v);
        }, nodeName: function nodeName(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        }, each: function each(a, b) {
            var c,
                d = 0;if (w(a)) {
                for (c = a.length; c > d; d++) {
                    if (b.call(a[d], d, a[d]) === !1) break;
                }
            } else for (d in a) {
                if (b.call(a[d], d, a[d]) === !1) break;
            }return a;
        }, trim: function trim(a) {
            return null == a ? "" : (a + "").replace(s, "");
        }, makeArray: function makeArray(a, b) {
            var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
        }, inArray: function inArray(a, b, c) {
            return null == b ? -1 : i.call(b, a, c);
        }, merge: function merge(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
                a[e++] = b[d];
            }return a.length = e, a;
        }, grep: function grep(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f]);
            }return e;
        }, map: function map(a, b, c) {
            var d,
                e,
                f = 0,
                h = [];if (w(a)) for (d = a.length; d > f; f++) {
                e = b(a[f], f, c), null != e && h.push(e);
            } else for (f in a) {
                e = b(a[f], f, c), null != e && h.push(e);
            }return g.apply([], h);
        }, guid: 1, proxy: function proxy(a, b) {
            var c, d, e;return "string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a) ? (d = f.call(arguments, 2), e = function e() {
                return a.apply(b || this, d.concat(f.call(arguments)));
            }, e.guid = a.guid = a.guid || r.guid++, e) : void 0;
        }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
    });function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);return "function" === c || r.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }var x = function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + 1 * new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function B(a, b) {
            return a === b && (l = !0), 0;
        },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function I(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                if (a[c] === b) return c;
            }return -1;
        },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function aa(a, b, c) {
            var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            ca = function ca(a, b) {
            return b ? "\x00" === a ? '\uFFFD' : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
        },
            da = function da() {
            m();
        },
            ea = ta(function (a) {
            return a.disabled === !0;
        }, { dir: "parentNode", next: "legend" });try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
        } catch (fa) {
            G = { apply: D.length ? function (a, b) {
                    F.apply(a, H.call(b));
                } : function (a, b) {
                    var c = a.length,
                        d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
                } };
        }function ga(a, b, d, e) {
            var f,
                h,
                j,
                k,
                l,
                o,
                r,
                s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
                    if (9 === w) {
                        if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
                    } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
                } else {
                    if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
                }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
                            o[h] = "#" + k + " " + sa(o[h]);
                        }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
                    }if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d;
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id");
                    }
                }
            }return i(a.replace(P, "$1"), b, d, e);
        }function ha() {
            var a = [];function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }return b;
        }function ia(a) {
            return a[u] = !0, a;
        }function ja(a) {
            var b = n.createElement("fieldset");try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }function ka(a, b) {
            var c = a.split("|"),
                e = c.length;while (e--) {
                d.attrHandle[c[e]] = b;
            }
        }function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
                if (c === b) return -1;
            }return a ? 1 : -1;
        }function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
            };
        }function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
            };
        }function oa(a) {
            return function (b) {
                return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && b.disabled === !1 && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ea(b)) !== a);
            };
        }function pa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e,
                        f = a([], c.length, b),
                        g = f.length;while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                    }
                });
            });
        }function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
        }, m = ga.setDocument = function (a) {
            var b,
                e,
                g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);return c ? [c] : [];
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(_, aa);return function (a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(_, aa);return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function (a, b) {
                var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c);
                    }return d;
                }return f;
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function (a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function (a, b) {
                if (b) while (b = b.parentNode) {
                    if (b === a) return !0;
                }return !1;
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
            } : function (a, b) {
                if (a === b) return l = !0, 0;var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
                    g.unshift(c);
                }c = b;while (c = c.parentNode) {
                    h.unshift(c);
                }while (g[d] === h[d]) {
                    d++;
                }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
            }, n) : n;
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}return ga(b, n, null, [a]).length > 0;
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.escape = function (a) {
            return (a + "").replace(ba, ca);
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function (a) {
            var b,
                d = [],
                e = 0,
                f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f));
                }while (e--) {
                    a.splice(d[e], 1);
                }
            }return k = null, a;
        }, e = ga.getText = function (a) {
            var b,
                c = "",
                d = 0,
                f = a.nodeType;if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a);
                    }
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) {
                c += e(b);
            }return c;
        }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                }, CHILD: function CHILD(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
                }, PSEUDO: function PSEUDO(a) {
                    var b,
                        c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                } }, filter: { TAG: function TAG(a) {
                    var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
                        return !0;
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                }, CLASS: function CLASS(a) {
                    var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                }, ATTR: function ATTR(a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                }, CHILD: function CHILD(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode;
                    } : function (b, c, i) {
                        var j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;if (q) {
                            if (f) {
                                while (p) {
                                    m = b;while (m = m[p]) {
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    }o = p = "only" === a && !o && "nextSibling";
                                }return !0;
                            }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];break;
                                    }
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            }return t -= e, t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                }, PSEUDO: function PSEUDO(a, b) {
                    var c,
                        e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d,
                            f = e(a, b),
                            g = f.length;while (g--) {
                            d = I(a, f[g]), a[d] = !(c[d] = f[g]);
                        }
                    }) : function (a) {
                        return e(a, 0, c);
                    }) : e;
                } }, pseudos: { not: ia(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
                        var f,
                            g = d(a, null, e, []),
                            h = a.length;while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f));
                        }
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0;
                    };
                }), contains: ia(function (a) {
                    return a = a.replace(_, aa), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }), lang: ia(function (a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
                        var c;do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
                    };
                }), target: function target(b) {
                    var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
                }, root: function root(a) {
                    return a === o;
                }, focus: function focus(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
                }, selected: function selected(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                }, empty: function empty(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) return !1;
                    }return !0;
                }, parent: function parent(a) {
                    return !d.pseudos.empty(a);
                }, header: function header(a) {
                    return X.test(a.nodeName);
                }, input: function input(a) {
                    return W.test(a.nodeName);
                }, button: function button(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
                }, text: function text(a) {
                    var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                }, first: pa(function () {
                    return [0];
                }), last: pa(function (a, b) {
                    return [b - 1];
                }), eq: pa(function (a, b, c) {
                    return [0 > c ? c + b : c];
                }), even: pa(function (a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c);
                    }return a;
                }), odd: pa(function (a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c);
                    }return a;
                }), lt: pa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d);
                    }return a;
                }), gt: pa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d);
                    }return a;
                }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
            d.pseudos[b] = ma(b);
        }for (b in { submit: !0, reset: !0 }) {
            d.pseudos[b] = na(b);
        }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
            var c,
                e,
                f,
                g,
                h,
                i,
                j,
                k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
                    !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
                }if (!c) break;
            }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        };function sa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value;
            }return d;
        }function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;return b.first ? function (b, c, e) {
                while (b = b[d]) {
                    if (1 === b.nodeType || g) return a(b, c, e);
                }
            } : function (b, c, i) {
                var j,
                    k,
                    l,
                    m = [w, h];if (i) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
                    }
                } else while (b = b[d]) {
                    if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
                        if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
                    }
                }
            };
        }function ua(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;while (e--) {
                    if (!a[e](b, c, d)) return !1;
                }return !0;
            } : a[0];
        }function va(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                ga(a, b[d], c);
            }return c;
        }function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            }return g;
        }function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
                var j,
                    k,
                    l,
                    m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    }
                }if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;while (k--) {
                                (l = r[k]) && j.push(q[k] = l);
                            }e(null, r = [], j, i);
                        }k = r.length;while (k--) {
                            (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                        }
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
            });
        }function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
                return a === b;
            }, h, !0), l = ta(function (a) {
                return I(b, a) > -1;
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
            }]; f > i; i++) {
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) {
                            if (d.relative[a[e].type]) break;
                        }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, e > i && ya(a.slice(i, e)), f > e && ya(a = a.slice(e)), f > e && sa(a));
                    }m.push(c);
                }
            }return ua(m);
        }function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function f(_f, g, h, i, k) {
                var l,
                    o,
                    q,
                    r = 0,
                    s = "0",
                    t = _f && [],
                    u = [],
                    v = j,
                    x = _f || e && d.find.TAG("*", k),
                    y = w += null == v ? 1 : Math.random() || .1,
                    z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
                            if (q(l, g || n, h)) {
                                i.push(l);break;
                            }
                        }k && (w = y);
                    }c && ((l = !q && l) && r--, _f && t.push(l));
                }if (r += s, c && s !== r) {
                    o = 0;while (q = b[o++]) {
                        q(t, u, g, h);
                    }if (_f) {
                        if (r > 0) while (s--) {
                            t[s] || u[s] || (u[s] = E.call(i));
                        }u = wa(u);
                    }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
                }return k && (w = y, j = v), t;
            };return c ? ia(f) : f;
        }return h = ga.compile = function (a, b) {
            var c,
                d = [],
                e = [],
                f = A[a + " "];if (!f) {
                b || (b = g(a)), c = b.length;while (c--) {
                    f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                }f = A(a, za(e, d)), f.selector = a;
            }return f;
        }, i = ga.select = function (a, b, e, f) {
            var i,
                j,
                k,
                l,
                m,
                n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(_, aa), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }i = V.needsContext.test(a) ? 0 : j.length;while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(_, aa), $.test(j[0].type) && qa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && sa(j), !a) return G.apply(e, f), e;break;
                    }
                }
            }return (n || h(a, o))(f, b, !p, e, !b || $.test(a) && qa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ja(function (a) {
            return null == a.getAttribute("disabled");
        }) || ka(J, function (a, b, c) {
            var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
        var d = [],
            e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
            if (1 === a.nodeType) {
                if (e && r(a).is(c)) break;d.push(a);
            }
        }return d;
    },
        z = function z(a, b) {
        for (var c = []; a; a = a.nextSibling) {
            1 === a.nodeType && a !== b && c.push(a);
        }return c;
    },
        A = r.expr.match.needsContext,
        B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        C = /^.[^:#\[\.,]*$/;function D(a, b, c) {
        if (r.isFunction(b)) return r.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c;
        });if (b.nodeType) return r.grep(a, function (a) {
            return a === b !== c;
        });if ("string" == typeof b) {
            if (C.test(b)) return r.filter(b, a, c);b = r.filter(b, a);
        }return r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType;
        });
    }r.filter = function (a, b, c) {
        var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
            return 1 === a.nodeType;
        }));
    }, r.fn.extend({ find: function find(a) {
            var b,
                c,
                d = this.length,
                e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
                for (b = 0; d > b; b++) {
                    if (r.contains(e[b], this)) return !0;
                }
            }));for (c = this.pushStack([]), b = 0; d > b; b++) {
                r.find(a, e[b], c);
            }return d > 1 ? r.uniqueSort(c) : c;
        }, filter: function filter(a) {
            return this.pushStack(D(this, a || [], !1));
        }, not: function not(a) {
            return this.pushStack(D(this, a || [], !0));
        }, is: function is(a) {
            return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
        } });var E,
        F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        G = r.fn.init = function (a, b, c) {
        var e, f;if (!a) return this;if (c = c || E, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
                if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) {
                    r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                }return this;
            }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
        }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
    };G.prototype = r.fn, E = r(d);var H = /^(?:parents|prev(?:Until|All))/,
        I = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
            var b = r(a, this),
                c = b.length;return this.filter(function () {
                for (var a = 0; c > a; a++) {
                    if (r.contains(this, b[a])) return !0;
                }
            });
        }, closest: function closest(a, b) {
            var c,
                d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);if (!A.test(a)) for (; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                        f.push(c);break;
                    }
                }
            }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
        }, index: function index(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
        }, addBack: function addBack(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        } });function J(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) {}return a;
    }r.each({ parent: function parent(a) {
            var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
        }, parents: function parents(a) {
            return y(a, "parentNode");
        }, parentsUntil: function parentsUntil(a, b, c) {
            return y(a, "parentNode", c);
        }, next: function next(a) {
            return J(a, "nextSibling");
        }, prev: function prev(a) {
            return J(a, "previousSibling");
        }, nextAll: function nextAll(a) {
            return y(a, "nextSibling");
        }, prevAll: function prevAll(a) {
            return y(a, "previousSibling");
        }, nextUntil: function nextUntil(a, b, c) {
            return y(a, "nextSibling", c);
        }, prevUntil: function prevUntil(a, b, c) {
            return y(a, "previousSibling", c);
        }, siblings: function siblings(a) {
            return z((a.parentNode || {}).firstChild, a);
        }, children: function children(a) {
            return z(a.firstChild);
        }, contents: function contents(a) {
            return a.contentDocument || r.merge([], a.childNodes);
        } }, function (a, b) {
        r.fn[a] = function (c, d) {
            var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
        };
    });var K = /\S+/g;function L(a) {
        var b = {};return r.each(a.match(K) || [], function (a, c) {
            b[c] = !0;
        }), b;
    }r.Callbacks = function (a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);var b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = -1,
            i = function i() {
            for (e = a.once, d = b = !0; g.length; h = -1) {
                c = g.shift();while (++h < f.length) {
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
                }
            }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
        },
            j = { add: function add() {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                    r.each(b, function (b, c) {
                        r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
                    });
                }(arguments), c && !b && i()), this;
            }, remove: function remove() {
                return r.each(arguments, function (a, b) {
                    var c;while ((c = r.inArray(b, f, c)) > -1) {
                        f.splice(c, 1), h >= c && h--;
                    }
                }), this;
            }, has: function has(a) {
                return a ? r.inArray(a, f) > -1 : f.length > 0;
            }, empty: function empty() {
                return f && (f = []), this;
            }, disable: function disable() {
                return e = g = [], f = c = "", this;
            }, disabled: function disabled() {
                return !f;
            }, lock: function lock() {
                return e = g = [], c || b || (f = c = ""), this;
            }, locked: function locked() {
                return !!e;
            }, fireWith: function fireWith(a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
            }, fire: function fire() {
                return j.fireWith(this, arguments), this;
            }, fired: function fired() {
                return !!d;
            } };return j;
    };function M(a) {
        return a;
    }function N(a) {
        throw a;
    }function O(a, b, c) {
        var d;try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
        } catch (a) {
            c.call(void 0, a);
        }
    }r.extend({ Deferred: function Deferred(b) {
            var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
                d = "pending",
                e = { state: function state() {
                    return d;
                }, always: function always() {
                    return f.done(arguments).fail(arguments), this;
                }, "catch": function _catch(a) {
                    return e.then(null, a);
                }, pipe: function pipe() {
                    var a = arguments;return r.Deferred(function (b) {
                        r.each(c, function (c, d) {
                            var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
                            });
                        }), a = null;
                    }).promise();
                }, then: function then(b, d, e) {
                    var f = 0;function g(b, c, d, e) {
                        return function () {
                            var h = this,
                                i = arguments,
                                j = function j() {
                                var a, j;if (!(f > b)) {
                                    if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                                }
                            },
                                k = e ? j : function () {
                                try {
                                    j();
                                } catch (a) {
                                    r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i));
                                }
                            };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
                        };
                    }return r.Deferred(function (a) {
                        c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
                    }).promise();
                }, promise: function promise(a) {
                    return null != a ? r.extend(a, e) : e;
                } },
                f = {};return r.each(c, function (a, b) {
                var g = b[2],
                    h = b[5];e[b[1]] = g.add, h && g.add(function () {
                    d = h;
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
                }, f[b[0] + "With"] = g.fireWith;
            }), e.promise(f), b && b.call(f, f), f;
        }, when: function when(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function h(a) {
                return function (c) {
                    d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
                };
            };if (1 >= b && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
                O(e[c], h(c), g.reject);
            }return g.promise();
        } });var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
    };var Q = r.Deferred();r.fn.ready = function (a) {
        return Q.then(a), this;
    }, r.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
            a ? r.readyWait++ : r.ready(!0);
        }, ready: function ready(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]));
        } }), r.ready.then = Q.then;function R() {
        d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready();
    }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));var S = function S(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;if ("object" === r.type(c)) {
            e = !0;for (h in c) {
                S(a, b, h, c[h], !0, f, g);
            }
        } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
            return j.call(r(a), c);
        })), b)) for (; i > h; h++) {
            b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
        T = function T(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };function U() {
        this.expando = r.expando + U.uid++;
    }U.uid = 1, U.prototype = { cache: function cache(a) {
            var b = a[this.expando];return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
        }, set: function set(a, b, c) {
            var d,
                e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
                e[r.camelCase(d)] = b[d];
            }return e;
        }, get: function get(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
        }, access: function access(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
        }, remove: function remove(a, b) {
            var c,
                d = a[this.expando];if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;while (c--) {
                        delete d[b[c]];
                    }
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        }, hasData: function hasData(a) {
            var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
        } };var V = new U(),
        W = new U(),
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;function Z(a, b, c) {
        var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : X.test(c) ? JSON.parse(c) : c;
            } catch (e) {}W.set(a, b, c);
        } else c = void 0;return c;
    }r.extend({ hasData: function hasData(a) {
            return W.hasData(a) || V.hasData(a);
        }, data: function data(a, b, c) {
            return W.access(a, b, c);
        }, removeData: function removeData(a, b) {
            W.remove(a, b);
        }, _data: function _data(a, b, c) {
            return V.access(a, b, c);
        }, _removeData: function _removeData(a, b) {
            V.remove(a, b);
        } }), r.fn.extend({ data: function data(a, b) {
            var c,
                d,
                e,
                f = this[0],
                g = f && f.attributes;if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    c = g.length;while (c--) {
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), Z(f, d, e[d])));
                    }V.set(f, "hasDataAttrs", !0);
                }return e;
            }return "object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) ? this.each(function () {
                W.set(this, a);
            }) : S(this, function (b) {
                var c;if (f && void 0 === b) {
                    if (c = W.get(f, a), void 0 !== c) return c;if (c = Z(f, a), void 0 !== c) return c;
                } else this.each(function () {
                    W.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        }, removeData: function removeData(a) {
            return this.each(function () {
                W.remove(this, a);
            });
        } }), r.extend({ queue: function queue(a, b, c) {
            var d;return a ? (b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || []) : void 0;
        }, dequeue: function dequeue(a, b) {
            b = b || "fx";var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function g() {
                r.dequeue(a, b);
            };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        }, _queueHooks: function _queueHooks(a, b) {
            var c = b + "queueHooks";return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () {
                    V.remove(a, [b + "queue", c]);
                }) });
        } }), r.fn.extend({ queue: function queue(a, b) {
            var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
            });
        }, dequeue: function dequeue(a) {
            return this.each(function () {
                r.dequeue(this, a);
            });
        }, clearQueue: function clearQueue(a) {
            return this.queue(a || "fx", []);
        }, promise: function promise(a, b) {
            var c,
                d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function h() {
                --d || e.resolveWith(f, [f]);
            };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
                c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            }return h(), e.promise(b);
        } });var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _ = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
        aa = ["Top", "Right", "Bottom", "Left"],
        ba = function ba(a, b) {
        return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
    },
        ca = function ca(a, b, c, d) {
        var e,
            f,
            g = {};for (f in b) {
            g[f] = a.style[f], a.style[f] = b[f];
        }e = c.apply(a, d || []);for (f in b) {
            a.style[f] = g[f];
        }return e;
    };function da(a, b, c, d) {
        var e,
            f = 1,
            g = 20,
            h = d ? function () {
            return d.cur();
        } : function () {
            return r.css(a, b, "");
        },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && _.exec(r.css(a, b));if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;do {
                f = f || ".5", k /= f, r.style(a, b, k + j);
            } while (f !== (f = h() / i) && 1 !== f && --g);
        }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
    }var ea = {};function fa(a) {
        var b,
            c = a.ownerDocument,
            d = a.nodeName,
            e = ea[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ea[d] = e, e);
    }function ga(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; g > f; f++) {
            d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ba(d) && (e[f] = fa(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
        }for (f = 0; g > f; f++) {
            null != e[f] && (a[f].style.display = e[f]);
        }return a;
    }r.fn.extend({ show: function show() {
            return ga(this, !0);
        }, hide: function hide() {
            return ga(this);
        }, toggle: function toggle(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                ba(this) ? r(this).show() : r(this).hide();
            });
        } });var ha = /^(?:checkbox|radio)$/i,
        ia = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ja = /^$|\/(?:java|ecma)script/i,
        ka = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ka.optgroup = ka.option, ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead, ka.th = ka.td;function la(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c;
    }function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
            V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
        }
    }var na = /<|&#?\w+;/;function oa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; o > n; n++) {
            if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (na.test(f)) {
                g = g || l.appendChild(b.createElement("div")), h = (ia.exec(f) || ["", ""])[1].toLowerCase(), i = ka[h] || ka._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
                    g = g.lastChild;
                }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
            } else m.push(b.createTextNode(f));
        }l.textContent = "", n = 0;while (f = m[n++]) {
            if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = la(l.appendChild(f), "script"), j && ma(g), c) {
                k = 0;while (f = g[k++]) {
                    ja.test(f.type || "") && c.push(f);
                }
            }
        }return l;
    }!function () {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();var pa = d.documentElement,
        qa = /^key/,
        ra = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        sa = /^([^.]*)(?:\.(.+)|)/;function ta() {
        return !0;
    }function ua() {
        return !1;
    }function va() {
        try {
            return d.activeElement;
        } catch (a) {}
    }function wa(a, b, c, d, e, f) {
        var g, h;if ("object" == (typeof b === 'undefined' ? 'undefined' : _typeof(b))) {
            "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
                wa(a, h, c, d, b[h], f);
            }return a;
        }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ua;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
            return r().off(a), g.apply(this, arguments);
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
            r.event.add(this, b, e, d, c);
        });
    }r.event = { global: {}, add: function add(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = V.get(a);if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(pa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || "").match(K) || [""], j = b.length;while (j--) {
                    h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
                }
            }
        }, remove: function remove(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = V.hasData(a) && V.get(a);if (q && (i = q.events)) {
                b = (b || "").match(K) || [""], j = b.length;while (j--) {
                    if (h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
                            k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
                    } else for (n in i) {
                        r.event.remove(a, n + b[j], c, d, !0);
                    }
                }r.isEmptyObject(i) && V.remove(a, "handle events");
            }
        }, dispatch: function dispatch(a) {
            var b = r.event.fix(a),
                c,
                d,
                e,
                f,
                g,
                h,
                i = new Array(arguments.length),
                j = (V.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
                i[c] = arguments[c];
            }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
                        b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
                    }
                }return k.postDispatch && k.postDispatch.call(this, b), b.result;
            }
        }, handlers: function handlers(a, b) {
            var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
                if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                    for (d = [], c = 0; h > c; c++) {
                        f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? r(e, this).index(i) > -1 : r.find(e, this, null, [i]).length), d[e] && d.push(f);
                    }d.length && g.push({ elem: i, handlers: d });
                }
            }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
        }, addProp: function addProp(a, b) {
            Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
                    return this.originalEvent ? b(this.originalEvent) : void 0;
                } : function () {
                    return this.originalEvent ? this.originalEvent[a] : void 0;
                }, set: function set(b) {
                    Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
                } });
        }, fix: function fix(a) {
            return a[r.expando] ? a : new r.Event(a);
        }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
                    return this !== va() && this.focus ? (this.focus(), !1) : void 0;
                }, delegateType: "focusin" }, blur: { trigger: function trigger() {
                    return this === va() && this.blur ? (this.blur(), !1) : void 0;
                }, delegateType: "focusout" }, click: { trigger: function trigger() {
                    return "checkbox" === this.type && this.click && r.nodeName(this, "input") ? (this.click(), !1) : void 0;
                }, _default: function _default(a) {
                    return r.nodeName(a.target, "a");
                } }, beforeunload: { postDispatch: function postDispatch(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                } } } }, r.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, r.Event = function (a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ta : ua, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
    }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: ua, isPropagationStopped: ua, isImmediatePropagationStopped: ua, isSimulated: !1, preventDefault: function preventDefault() {
            var a = this.originalEvent;this.isDefaultPrevented = ta, a && !this.isSimulated && a.preventDefault();
        }, stopPropagation: function stopPropagation() {
            var a = this.originalEvent;this.isPropagationStopped = ta, a && !this.isSimulated && a.stopPropagation();
        }, stopImmediatePropagation: function stopImmediatePropagation() {
            var a = this.originalEvent;this.isImmediatePropagationStopped = ta, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
        } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
            var b = a.button;return null == a.which && qa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ra.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
        } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
        r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
                var c,
                    d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
            } };
    }), r.fn.extend({ on: function on(a, b, c, d) {
            return wa(this, a, b, c, d);
        }, one: function one(a, b, c, d) {
            return wa(this, a, b, c, d, 1);
        }, off: function off(a, b, c) {
            var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a))) {
                for (e in a) {
                    this.off(e, b, a[e]);
                }return this;
            }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ua), this.each(function () {
                r.event.remove(this, a, c, b);
            });
        } });var xa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ya = /<script|<style|<link/i,
        za = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Aa = /^true\/(.*)/,
        Ba = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a, b) {
        return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
    }function Da(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }function Ea(a) {
        var b = Aa.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }function Fa(a, b) {
        var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};for (e in j) {
                    for (c = 0, d = j[e].length; d > c; c++) {
                        r.event.add(b, e, j[e][c]);
                    }
                }
            }W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
        }
    }function Ga(a, b) {
        var c = b.nodeName.toLowerCase();"input" === c && ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }function Ha(a, b, c, d) {
        b = g.apply([], b);var e,
            f,
            h,
            i,
            j,
            k,
            l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && za.test(q)) return a.each(function (e) {
            var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
        });if (m && (e = oa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(la(e, "script"), Da), i = h.length; m > l; l++) {
                j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, la(j, "script"))), c.call(a[l], j, l);
            }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ea), l = 0; i > l; l++) {
                j = h[l], ja.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ba, ""), k));
            }
        }return a;
    }function Ia(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
            c || 1 !== d.nodeType || r.cleanData(la(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && ma(la(d, "script")), d.parentNode.removeChild(d));
        }return a;
    }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
            return a.replace(xa, "<$1></$2>");
        }, clone: function clone(a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = la(h), f = la(a), d = 0, e = f.length; e > d; d++) {
                Ga(f[d], g[d]);
            }if (b) if (c) for (f = f || la(a), g = g || la(h), d = 0, e = f.length; e > d; d++) {
                Fa(f[d], g[d]);
            } else Fa(a, h);return g = la(h, "script"), g.length > 0 && ma(g, !i && la(a, "script")), h;
        }, cleanData: function cleanData(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
                if (T(c)) {
                    if (b = c[V.expando]) {
                        if (b.events) for (d in b.events) {
                            e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        }c[V.expando] = void 0;
                    }c[W.expando] && (c[W.expando] = void 0);
                }
            }
        } }), r.fn.extend({ detach: function detach(a) {
            return Ia(this, a, !0);
        }, remove: function remove(a) {
            return Ia(this, a);
        }, text: function text(a) {
            return S(this, function (a) {
                return void 0 === a ? r.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a, arguments.length);
        }, append: function append() {
            return Ha(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);b.appendChild(a);
                }
            });
        }, prepend: function prepend() {
            return Ha(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);b.insertBefore(a, b.firstChild);
                }
            });
        }, before: function before() {
            return Ha(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        }, after: function after() {
            return Ha(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        }, empty: function empty() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && (r.cleanData(la(a, !1)), a.textContent = "");
            }return this;
        }, clone: function clone(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return r.clone(this, a, b);
            });
        }, html: function html(a) {
            return S(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !ya.test(a) && !ka[(ia.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (r.cleanData(la(b, !1)), b.innerHTML = a);
                        }b = 0;
                    } catch (e) {}
                }b && this.empty().append(a);
            }, null, a, arguments.length);
        }, replaceWith: function replaceWith() {
            var a = [];return Ha(this, arguments, function (b) {
                var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(la(this)), c && c.replaceChild(b, this));
            }, a);
        } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
        r.fn[a] = function (a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; f >= g; g++) {
                c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            }return this.pushStack(d);
        };
    });var Ja = /^margin/,
        Ka = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
        La = function La(b) {
        var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
    };!function () {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", pa.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, pa.removeChild(h), i = null;
            }
        }var c,
            e,
            f,
            g,
            h = d.createElement("div"),
            i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
                return b(), c;
            }, boxSizingReliable: function boxSizingReliable() {
                return b(), e;
            }, pixelMarginRight: function pixelMarginRight() {
                return b(), f;
            }, reliableMarginLeft: function reliableMarginLeft() {
                return b(), g;
            } }));
    }();function Ma(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;return c = c || La(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ka.test(g) && Ja.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }function Na(a, b) {
        return { get: function get() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            } };
    }var Oa = /^(none|table(?!-c[ea]).+)/,
        Pa = { position: "absolute", visibility: "hidden", display: "block" },
        Qa = { letterSpacing: "0", fontWeight: "400" },
        Ra = ["Webkit", "Moz", "ms"],
        Sa = d.createElement("div").style;function Ta(a) {
        if (a in Sa) return a;var b = a[0].toUpperCase() + a.slice(1),
            c = Ra.length;while (c--) {
            if (a = Ra[c] + b, a in Sa) return a;
        }
    }function Ua(a, b, c) {
        var d = _.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }function Va(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += r.css(a, c + aa[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + aa[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + aa[f] + "Width", !0, e))) : (g += r.css(a, "padding" + aa[f], !0, e), "padding" !== c && (g += r.css(a, "border" + aa[f] + "Width", !0, e)));
        }return g;
    }function Wa(a, b, c) {
        var d,
            e = !0,
            f = La(a),
            g = "border-box" === r.css(a, "boxSizing", !1, f);if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), 0 >= d || null == d) {
            if (d = Ma(a, b, f), (0 > d || null == d) && (d = a.style[b]), Ka.test(d)) return d;e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
        }return d + Va(a, b, c || (g ? "border" : "content"), e, f) + "px";
    }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
                    if (b) {
                        var c = Ma(a, "opacity");return "" === c ? "1" : c;
                    }
                } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = r.camelCase(b),
                    i = a.style;return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === 'undefined' ? 'undefined' : _typeof(c), "string" === f && (e = _.exec(c)) && e[1] && (c = da(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        }, css: function css(a, b, c, d) {
            var e,
                f,
                g,
                h = r.camelCase(b);return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Ma(a, b, d)), "normal" === e && b in Qa && (e = Qa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
        } }), r.each(["height", "width"], function (a, b) {
        r.cssHooks[b] = { get: function get(a, c, d) {
                return c ? !Oa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Wa(a, b, d) : ca(a, Pa, function () {
                    return Wa(a, b, d);
                }) : void 0;
            }, set: function set(a, c, d) {
                var e,
                    f = d && La(a),
                    g = d && Va(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = _.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ua(a, c, g);
            } };
    }), r.cssHooks.marginLeft = Na(o.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(Ma(a, "marginLeft")) || a.getBoundingClientRect().left - ca(a, { marginLeft: 0 }, function () {
            return a.getBoundingClientRect().left;
        })) + "px" : void 0;
    }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
        r.cssHooks[a + b] = { expand: function expand(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + aa[d] + b] = f[d] || f[d - 2] || f[0];
                }return e;
            } }, Ja.test(a) || (r.cssHooks[a + b].set = Ua);
    }), r.fn.extend({ css: function css(a, b) {
            return S(this, function (a, b, c) {
                var d,
                    e,
                    f = {},
                    g = 0;if (r.isArray(b)) {
                    for (d = La(a), e = b.length; e > g; g++) {
                        f[b[g]] = r.css(a, b[g], !1, d);
                    }return f;
                }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
            }, a, b, arguments.length > 1);
        } });function Xa(a, b, c, d, e) {
        return new Xa.prototype.init(a, b, c, d, e);
    }r.Tween = Xa, Xa.prototype = { constructor: Xa, init: function init(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
        }, cur: function cur() {
            var a = Xa.propHooks[this.prop];return a && a.get ? a.get(this) : Xa.propHooks._default.get(this);
        }, run: function run(a) {
            var b,
                c = Xa.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Xa.propHooks._default.set(this), this;
        } }, Xa.prototype.init.prototype = Xa.prototype, Xa.propHooks = { _default: { get: function get(a) {
                var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
            }, set: function set(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
            } } }, Xa.propHooks.scrollTop = Xa.propHooks.scrollLeft = { set: function set(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        } }, r.easing = { linear: function linear(a) {
            return a;
        }, swing: function swing(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }, _default: "swing" }, r.fx = Xa.prototype.init, r.fx.step = {};var Ya,
        Za,
        $a = /^(?:toggle|show|hide)$/,
        _a = /queueHooks$/;function ab() {
        Za && (a.requestAnimationFrame(ab), r.fx.tick());
    }function bb() {
        return a.setTimeout(function () {
            Ya = void 0;
        }), Ya = r.now();
    }function cb(a, b) {
        var c,
            d = 0,
            e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
            c = aa[d], e["margin" + c] = e["padding" + c] = a;
        }return b && (e.opacity = e.width = a), e;
    }function db(a, b, c) {
        for (var d, e = (gb.tweeners[b] || []).concat(gb.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) return d;
        }
    }function eb(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && ba(a),
            q = V.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
            g.unqueued || h();
        }), g.unqueued++, m.always(function () {
            m.always(function () {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
            });
        }));for (d in b) {
            if (e = b[d], $a.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
                }n[d] = q && q[d] || r.style(a, d);
            }
        }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ga([a], !0), j = a.style.display || j, k = r.css(a, "display"), ga([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
                o.display = j;
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
            })), i = !1;for (d in n) {
                i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ga([a], !0), m.done(function () {
                    p || ga([a]), V.remove(a, "fxshow");for (d in n) {
                        r.style(a, d, n[d]);
                    }
                })), i = db(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
            }
        }
    }function fb(a, b) {
        var c, d, e, f, g;for (c in a) {
            if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e);
                }
            } else b[d] = e;
        }
    }function gb(a, b, c) {
        var d,
            e,
            f = 0,
            g = gb.prefilters.length,
            h = r.Deferred().always(function () {
            delete i.elem;
        }),
            i = function i() {
            if (e) return !1;for (var b = Ya || bb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                j.tweens[g].run(f);
            }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
        },
            j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Ya || bb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
                var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
            }, stop: function stop(b) {
                var c = 0,
                    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
                    j.tweens[c].run(1);
                }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
            } }),
            k = j.props;for (fb(k, j.opts.specialEasing); g > f; f++) {
            if (d = gb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        }return r.map(k, db, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }r.Animation = r.extend(gb, { tweeners: { "*": [function (a, b) {
                var c = this.createTween(a, b);return da(c.elem, a, _.exec(b), c), c;
            }] }, tweener: function tweener(a, b) {
            r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);for (var c, d = 0, e = a.length; e > d; d++) {
                c = a[d], gb.tweeners[c] = gb.tweeners[c] || [], gb.tweeners[c].unshift(b);
            }
        }, prefilters: [eb], prefilter: function prefilter(a, b) {
            b ? gb.prefilters.unshift(a) : gb.prefilters.push(a);
        } }), r.speed = function (a, b, c) {
        var e = a && "object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off || d.hidden ? e.duration = 0 : e.duration = "number" == typeof e.duration ? e.duration : e.duration in r.fx.speeds ? r.fx.speeds[e.duration] : r.fx.speeds._default, null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
            r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
        }, e;
    }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
            return this.filter(ba).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
        }, animate: function animate(a, b, c, d) {
            var e = r.isEmptyObject(a),
                f = r.speed(b, c, d),
                g = function g() {
                var b = gb(this, r.extend({}, a), f);(e || V.get(this, "finish")) && b.stop(!0);
            };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        }, stop: function stop(a, b, c) {
            var d = function d(a) {
                var b = a.stop;delete a.stop, b(c);
            };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = r.timers,
                    g = V.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
                    g[e] && g[e].stop && _a.test(e) && d(g[e]);
                }for (e = f.length; e--;) {
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                }!b && c || r.dequeue(this, a);
            });
        }, finish: function finish(a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b,
                    c = V.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = r.timers,
                    g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                }for (b = 0; g > b; b++) {
                    d[b] && d[b].finish && d[b].finish.call(this);
                }delete c.finish;
            });
        } }), r.each(["toggle", "show", "hide"], function (a, b) {
        var c = r.fn[b];r.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(cb(b, !0), a, d, e);
        };
    }), r.each({ slideDown: cb("show"), slideUp: cb("hide"), slideToggle: cb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
        r.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), r.timers = [], r.fx.tick = function () {
        var a,
            b = 0,
            c = r.timers;for (Ya = r.now(); b < c.length; b++) {
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        }c.length || r.fx.stop(), Ya = void 0;
    }, r.fx.timer = function (a) {
        r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
    }, r.fx.interval = 13, r.fx.start = function () {
        Za || (Za = a.requestAnimationFrame ? a.requestAnimationFrame(ab) : a.setInterval(r.fx.tick, r.fx.interval));
    }, r.fx.stop = function () {
        a.cancelAnimationFrame ? a.cancelAnimationFrame(Za) : a.clearInterval(Za), Za = null;
    }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
        return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);d.stop = function () {
                a.clearTimeout(e);
            };
        });
    }, function () {
        var a = d.createElement("input"),
            b = d.createElement("select"),
            c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
    }();var hb,
        ib = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
            return S(this, r.attr, a, b, arguments.length > 1);
        }, removeAttr: function removeAttr(a) {
            return this.each(function () {
                r.removeAttr(this, a);
            });
        } }), r.extend({ attr: function attr(a, b, c) {
            var d,
                e,
                f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? hb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
        }, attrHooks: { type: { set: function set(a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                } } }, removeAttr: function removeAttr(a, b) {
            var c,
                d = 0,
                e = b && b.match(K);if (e && 1 === a.nodeType) while (c = e[d++]) {
                a.removeAttribute(c);
            }
        } }), hb = { set: function set(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
        } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = ib[b] || r.find.attr;ib[b] = function (a, b, d) {
            var e,
                f,
                g = b.toLowerCase();return d || (f = ib[g], ib[g] = e, e = null != c(a, b, d) ? g : null, ib[g] = f), e;
        };
    });var jb = /^(?:input|select|textarea|button)$/i,
        kb = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
            return S(this, r.prop, a, b, arguments.length > 1);
        }, removeProp: function removeProp(a) {
            return this.each(function () {
                delete this[r.propFix[a] || a];
            });
        } }), r.extend({ prop: function prop(a, b, c) {
            var d,
                e,
                f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        }, propHooks: { tabIndex: { get: function get(a) {
                    var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : jb.test(a.nodeName) || kb.test(a.nodeName) && a.href ? 0 : -1;
                } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
            var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
        }, set: function set(a) {
            var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        r.propFix[this.toLowerCase()] = this;
    });var lb = /[\t\r\n\f]/g;function mb(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }r.fn.extend({ addClass: function addClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;if (r.isFunction(a)) return this.each(function (b) {
                r(this).addClass(a.call(this, b, mb(this)));
            });if ("string" == typeof a && a) {
                b = a.match(K) || [];while (c = this[i++]) {
                    if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
                        g = 0;while (f = b[g++]) {
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        }h = r.trim(d), e !== h && c.setAttribute("class", h);
                    }
                }
            }return this;
        }, removeClass: function removeClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;if (r.isFunction(a)) return this.each(function (b) {
                r(this).removeClass(a.call(this, b, mb(this)));
            });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
                b = a.match(K) || [];while (c = this[i++]) {
                    if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
                        g = 0;while (f = b[g++]) {
                            while (d.indexOf(" " + f + " ") > -1) {
                                d = d.replace(" " + f + " ", " ");
                            }
                        }h = r.trim(d), e !== h && c.setAttribute("class", h);
                    }
                }
            }return this;
        }, toggleClass: function toggleClass(a, b) {
            var c = typeof a === 'undefined' ? 'undefined' : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
                r(this).toggleClass(a.call(this, c, mb(this), b), b);
            }) : this.each(function () {
                var b, d, e, f;if ("string" === c) {
                    d = 0, e = r(this), f = a.match(K) || [];while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    }
                } else void 0 !== a && "boolean" !== c || (b = mb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""));
            });
        }, hasClass: function hasClass(a) {
            var b,
                c,
                d = 0;b = " " + a + " ";while (c = this[d++]) {
                if (1 === c.nodeType && (" " + mb(c) + " ").replace(lb, " ").indexOf(b) > -1) return !0;
            }return !1;
        } });var nb = /\r/g,
        ob = /[\x20\t\r\n\f]+/g;r.fn.extend({ val: function val(a) {
            var b,
                c,
                d,
                e = this[0];{
                if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
                    var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
                        return null == a ? "" : a + "";
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c);
            }
        } }), r.extend({ valHooks: { option: { get: function get(a) {
                    var b = r.find.attr(a, "value");return null != b ? b : r.trim(r.text(a)).replace(ob, " ");
                } }, select: { get: function get(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], (c.selected || i === e) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), f) return b;g.push(b);
                        }
                    }return g;
                }, set: function set(a, b) {
                    var c,
                        d,
                        e = a.options,
                        f = r.makeArray(b),
                        g = e.length;while (g--) {
                        d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    }return c || (a.selectedIndex = -1), f;
                } } } }), r.each(["radio", "checkbox"], function () {
        r.valHooks[this] = { set: function set(a, b) {
                return r.isArray(b) ? a.checked = r.inArray(r(a).val(), b) > -1 : void 0;
            } }, o.checkOn || (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });var pb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
            var g,
                h,
                i,
                j,
                k,
                m,
                n,
                o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
                        o.push(h), i = h;
                    }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
                }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
                    b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
            }
        }, simulate: function simulate(a, b, c) {
            var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
        } }), r.fn.extend({ trigger: function trigger(a, b) {
            return this.each(function () {
                r.event.trigger(a, b, this);
            });
        }, triggerHandler: function triggerHandler(a, b) {
            var c = this[0];return c ? r.event.trigger(a, b, c, !0) : void 0;
        } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
        r.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), r.fn.extend({ hover: function hover(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function c(a) {
            r.event.simulate(b, a.target, r.event.fix(a));
        };r.event.special[b] = { setup: function setup() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b);e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
            }, teardown: function teardown() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b) - 1;e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
            } };
    });var qb = a.location,
        rb = r.now(),
        sb = /\?/;r.parseXML = function (b) {
        var c;if (!b || "string" != typeof b) return null;try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
    };var tb = /\[\]$/,
        ub = /\r?\n/g,
        vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;function xb(a, b, c, d) {
        var e;if (r.isArray(b)) r.each(b, function (b, e) {
            c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
        });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
            xb(a + "[" + e + "]", b[e], c, d);
        }
    }r.param = function (a, b) {
        var c,
            d = [],
            e = function e(a, b) {
            var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
        };if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
            e(this.name, this.value);
        });else for (c in a) {
            xb(c, a[c], b, e);
        }return d.join("&");
    }, r.fn.extend({ serialize: function serialize() {
            return r.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
            return this.map(function () {
                var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
            }).filter(function () {
                var a = this.type;return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ha.test(a));
            }).map(function (a, b) {
                var c = r(this).val();return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
                    return { name: b.name, value: a.replace(ub, "\r\n") };
                }) : { name: b.name, value: c.replace(ub, "\r\n") };
            }).get();
        } });var yb = /%20/g,
        zb = /#.*$/,
        Ab = /([?&])_=[^&]*/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = {},
        Gb = {},
        Hb = "*/".concat("*"),
        Ib = d.createElement("a");Ib.href = qb.href;function Jb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");var d,
                e = 0,
                f = b.toLowerCase().match(K) || [];if (r.isFunction(c)) while (d = f[e++]) {
                "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
            }
        };
    }function Kb(a, b, c, d) {
        var e = {},
            f = a === Gb;function g(h) {
            var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i;
        }return g(b.dataTypes[0]) || !e["*"] && g("*");
    }function Lb(a, b) {
        var c,
            d,
            e = r.ajaxSettings.flatOptions || {};for (c in b) {
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        }return d && r.extend(!0, a, d), a;
    }function Mb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;while ("*" === i[0]) {
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        }if (d) for (e in h) {
            if (h[e] && h[e].test(d)) {
                i.unshift(e);break;
            }
        }if (i[0] in c) f = i[0];else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;break;
                }g || (g = e);
            }f = f || g;
        }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }function Nb(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
            j[g.toLowerCase()] = a.converters[g];
        }f = k.shift();while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
                    }
                }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
                    b = g(b);
                } catch (l) {
                    return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
                }
            }
        }return { state: "success", data: b };
    }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
        }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function ajax(b, c) {
            "object" == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
                    var b;if (k) {
                        if (!h) {
                            h = {};while (b = Bb.exec(g)) {
                                h[b[1].toLowerCase()] = b[2];
                            }
                        }b = h[a.toLowerCase()];
                    }return null == b ? null : b;
                }, getAllResponseHeaders: function getAllResponseHeaders() {
                    return k ? g : null;
                }, setRequestHeader: function setRequestHeader(a, b) {
                    return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
                }, overrideMimeType: function overrideMimeType(a) {
                    return null == k && (o.mimeType = a), this;
                }, statusCode: function statusCode(a) {
                    var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
                        u[b] = [u[b], a[b]];
                    }return this;
                }, abort: function abort(a) {
                    var b = a || x;return e && e.abort(b), A(0, b), this;
                } };if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
                j = d.createElement("a");try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
                } catch (z) {
                    o.crossDomain = !0;
                }
            }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, ""), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
                y.setRequestHeader(m, o.headers[m]);
            }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
                    y.abort("timeout");
                }, o.timeout));try {
                    k = !1, e.send(v, A);
                } catch (z) {
                    if (k) throw z;A(-1, z);
                }
            } else A(-1, "No Transport");function A(b, c, d, h) {
                var j,
                    m,
                    n,
                    v,
                    w,
                    x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", 0 > b && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
            }return y;
        }, getJSON: function getJSON(a, b, c) {
            return r.get(a, b, c, "json");
        }, getScript: function getScript(a, b) {
            return r.get(a, void 0, b, "script");
        } }), r.each(["get", "post"], function (a, b) {
        r[b] = function (a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
        };
    }), r._evalUrl = function (a) {
        return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
    }, r.fn.extend({ wrapAll: function wrapAll(a) {
            var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;while (a.firstElementChild) {
                    a = a.firstElementChild;
                }return a;
            }).append(this)), this;
        }, wrapInner: function wrapInner(a) {
            return r.isFunction(a) ? this.each(function (b) {
                r(this).wrapInner(a.call(this, b));
            }) : this.each(function () {
                var b = r(this),
                    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
            });
        }, wrap: function wrap(a) {
            var b = r.isFunction(a);return this.each(function (c) {
                r(this).wrapAll(b ? a.call(this, c) : a);
            });
        }, unwrap: function unwrap(a) {
            return this.parent(a).not("body").each(function () {
                r(this).replaceWith(this.childNodes);
            }), this;
        } }), r.expr.pseudos.hidden = function (a) {
        return !r.expr.pseudos.visible(a);
    }, r.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }, r.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    };var Ob = { 0: 200, 1223: 204 },
        Pb = r.ajaxSettings.xhr();o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
        var _c, d;return o.cors || Pb && !b.crossDomain ? { send: function send(e, f) {
                var g,
                    h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
                    h[g] = b.xhrFields[g];
                }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
                    h.setRequestHeader(g, e[g]);
                }_c = function c(a) {
                    return function () {
                        _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
                    };
                }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        _c && d();
                    });
                }, _c = _c("abort");try {
                    h.send(b.hasContent && b.data || null);
                } catch (i) {
                    if (_c) throw i;
                }
            }, abort: function abort() {
                _c && _c();
            } } : void 0;
    }), r.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1);
    }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
                return r.globalEval(a), a;
            } } }), r.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), r.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, _c2;return { send: function send(e, f) {
                    b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
                        b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
                    }), d.head.appendChild(b[0]);
                }, abort: function abort() {
                    _c2 && _c2();
                } };
        }
    });var Qb = [],
        Rb = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
            var a = Qb.pop() || r.expando + "_" + rb++;return this[a] = !0, a;
        } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
            f,
            g,
            h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments;
        }, d.always(function () {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script") : void 0;
    }), o.createHTMLDocument = function () {
        var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
    }(), r.parseHTML = function (a, b, c) {
        if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = oa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
    }, r.fn.load = function (a, b, c) {
        var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");return h > -1 && (d = r.trim(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a]);
            });
        }), this;
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        r.fn[b] = function (a) {
            return this.on(b, a);
        };
    }), r.expr.pseudos.animated = function (a) {
        return r.grep(r.timers, function (b) {
            return a === b.elem;
        }).length;
    };function Sb(a) {
        return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }r.offset = { setOffset: function setOffset(a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = r.css(a, "position"),
                l = r(a),
                m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        } }, r.fn.extend({ offset: function offset(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                r.offset.setOffset(this, a, b);
            });var b,
                c,
                d,
                e,
                f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 };
        }, position: function position() {
            if (this[0]) {
                var a,
                    b,
                    c = this[0],
                    d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
            }
        }, offsetParent: function offsetParent() {
            return this.map(function () {
                var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
                    a = a.offsetParent;
                }return a || pa;
            });
        } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
        var c = "pageYOffset" === b;r.fn[a] = function (d) {
            return S(this, function (a, d, e) {
                var f = Sb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
            }, a, d, arguments.length);
        };
    }), r.each(["top", "left"], function (a, b) {
        r.cssHooks[b] = Na(o.pixelPosition, function (a, c) {
            return c ? (c = Ma(a, b), Ka.test(c) ? r(a).position()[b] + "px" : c) : void 0;
        });
    }), r.each({ Height: "height", Width: "width" }, function (a, b) {
        r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
            r.fn[d] = function (e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");return S(this, function (b, c, e) {
                    var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
                }, b, g ? e : void 0, g);
            };
        });
    }), r.fn.extend({ bind: function bind(a, b, c) {
            return this.on(a, null, b, c);
        }, unbind: function unbind(a, b) {
            return this.off(a, null, b);
        }, delegate: function delegate(a, b, c, d) {
            return this.on(b, a, c, d);
        }, undelegate: function undelegate(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        } }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return r;
    });var Tb = a.jQuery,
        Ub = a.$;return r.noConflict = function (b) {
        return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
    }, b || (a.jQuery = a.$ = r), r;
});
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function (a) {
    var b = navigator.userAgent;a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function () {
        var b,
            c = document.createElement("source"),
            d = function d(a) {
            var b,
                d,
                e = a.parentNode;"PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), setTimeout(function () {
                e.removeChild(b);
            })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, d = a.sizes, a.sizes += ",100vw", setTimeout(function () {
                a.sizes = d;
            }));
        },
            e = function e() {
            var a,
                b = document.querySelectorAll("picture > img, img[srcset][sizes]");for (a = 0; a < b.length; a++) {
                d(b[a]);
            }
        },
            f = function f() {
            clearTimeout(b), b = setTimeout(e, 99);
        },
            g = a.matchMedia && matchMedia("(orientation: landscape)"),
            h = function h() {
            f(), g && g.addListener && g.addListener(f);
        };return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), f;
    }());
}(window), function (a, b, c) {
    "use strict";
    function d(a) {
        return " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a;
    }function e(b, c) {
        var d = new a.Image();return d.onerror = function () {
            A[b] = !1, ba();
        }, d.onload = function () {
            A[b] = 1 === d.width, ba();
        }, d.src = c, "pending";
    }function f() {
        M = !1, P = a.devicePixelRatio, N = {}, O = {}, s.DPR = P || 1, Q.width = Math.max(a.innerWidth || 0, z.clientWidth), Q.height = Math.max(a.innerHeight || 0, z.clientHeight), Q.vw = Q.width / 100, Q.vh = Q.height / 100, r = [Q.height, Q.width, P].join("-"), Q.em = s.getEmValue(), Q.rem = Q.em;
    }function g(a, b, c, d) {
        var e, f, g, h;return "saveData" === B.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c;
    }function h(a) {
        var b,
            c = s.getSet(a),
            d = !1;"pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d;
    }function i(a, b) {
        return a.res - b.res;
    }function j(a, b, c) {
        var d;return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || aa(d, d.set.sizes)), d;
    }function k(a, b) {
        var c, d, e;if (a && b) for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++) {
            if (a === s.makeUrl(e[c].url)) {
                d = e[c];break;
            }
        }return d;
    }function l(a, b) {
        var c,
            d,
            e,
            f,
            g = a.getElementsByTagName("source");for (c = 0, d = g.length; d > c; c++) {
            e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), f && b.push({ srcset: f, media: e.getAttribute("media"), type: e.getAttribute("type"), sizes: e.getAttribute("sizes") });
        }
    }function m(a, b) {
        function c(b) {
            var c,
                d = b.exec(a.substring(m));return d ? (c = d[0], m += c.length, c) : void 0;
        }function e() {
            var a,
                c,
                d,
                e,
                f,
                i,
                j,
                k,
                l,
                m = !1,
                o = {};for (e = 0; e < h.length; e++) {
                f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), k = parseInt(j, 10), l = parseFloat(j), X.test(j) && "w" === i ? ((a || c) && (m = !0), 0 === k ? m = !0 : a = k) : Y.test(j) && "x" === i ? ((a || c || d) && (m = !0), 0 > l ? m = !0 : c = l) : X.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0;
            }m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 1 === o.d && (b.has1x = !0), o.set = b, n.push(o));
        }function f() {
            for (c(T), i = "", j = "in descriptor";;) {
                if (k = a.charAt(m), "in descriptor" === j) {
                    if (d(k)) i && (h.push(i), i = "", j = "after descriptor");else {
                        if ("," === k) return m += 1, i && h.push(i), void e();if ("(" === k) i += k, j = "in parens";else {
                            if ("" === k) return i && h.push(i), void e();i += k;
                        }
                    }
                } else if ("in parens" === j) {
                    if (")" === k) i += k, j = "in descriptor";else {
                        if ("" === k) return h.push(i), void e();i += k;
                    }
                } else if ("after descriptor" === j) if (d(k)) ;else {
                    if ("" === k) return void e();j = "in descriptor", m -= 1;
                }m += 1;
            }
        }for (var g, h, i, j, k, l = a.length, m = 0, n = [];;) {
            if (c(U), m >= l) return n;g = c(V), h = [], "," === g.slice(-1) ? (g = g.replace(W, ""), e()) : f();
        }
    }function n(a) {
        function b(a) {
            function b() {
                f && (g.push(f), f = "");
            }function c() {
                g[0] && (h.push(g), g = []);
            }for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1;;) {
                if (e = a.charAt(j), "" === e) return b(), c(), h;if (k) {
                    if ("*" === e && "/" === a[j + 1]) {
                        k = !1, j += 2, b();continue;
                    }j += 1;
                } else {
                    if (d(e)) {
                        if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
                            j += 1;continue;
                        }if (0 === i) {
                            b(), j += 1;continue;
                        }e = " ";
                    } else if ("(" === e) i += 1;else if (")" === e) i -= 1;else {
                        if ("," === e) {
                            b(), c(), j += 1;continue;
                        }if ("/" === e && "*" === a.charAt(j + 1)) {
                            k = !0, j += 2;continue;
                        }
                    }f += e, j += 1;
                }
            }
        }function c(a) {
            return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1;
        }var e,
            f,
            g,
            h,
            i,
            j,
            k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for (f = b(a), g = f.length, e = 0; g > e; e++) {
            if (h = f[e], i = h[h.length - 1], c(i)) {
                if (j = i, h.pop(), 0 === h.length) return j;if (h = h.join(" "), s.matchesMedia(h)) return j;
            }
        }return "100vw";
    }b.createElement("picture");var o,
        p,
        q,
        r,
        s = {},
        t = !1,
        u = function u() {},
        v = b.createElement("img"),
        w = v.getAttribute,
        x = v.setAttribute,
        y = v.removeAttribute,
        z = b.documentElement,
        A = {},
        B = { algorithm: "" },
        C = "data-pfsrc",
        D = C + "set",
        E = navigator.userAgent,
        F = /rident/.test(E) || /ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35,
        G = "currentSrc",
        H = /\s+\+?\d+(e\d+)?w/,
        I = /(\([^)]+\))?\s*(.+)/,
        J = a.picturefillCFG,
        K = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
        L = "font-size:100%!important;",
        M = !0,
        N = {},
        O = {},
        P = a.devicePixelRatio,
        Q = { px: 1, "in": 96 },
        R = b.createElement("a"),
        S = !1,
        T = /^[ \t\n\r\u000c]+/,
        U = /^[, \t\n\r\u000c]+/,
        V = /^[^ \t\n\r\u000c]+/,
        W = /[,]+$/,
        X = /^\d+$/,
        Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
        Z = function Z(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c);
    },
        $ = function $(a) {
        var b = {};return function (c) {
            return c in b || (b[c] = a(c)), b[c];
        };
    },
        _ = function () {
        var a = /^([\d\.]+)(em|vw|px)$/,
            b = function b() {
            for (var a = arguments, b = 0, c = a[0]; ++b in a;) {
                c = c.replace(a[b], a[++b]);
            }return c;
        },
            c = $(function (a) {
            return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";";
        });return function (b, d) {
            var e;if (!(b in N)) if (N[b] = !1, d && (e = b.match(a))) N[b] = e[1] * Q[e[2]];else try {
                N[b] = new Function("e", c(b))(Q);
            } catch (f) {}return N[b];
        };
    }(),
        aa = function aa(a, b) {
        return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, a;
    },
        ba = function ba(a) {
        if (t) {
            var c,
                d,
                e,
                f = a || {};if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements, f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), e = c.length) {
                for (s.setupRun(f), S = !0, d = 0; e > d; d++) {
                    s.fillImg(c[d], f);
                }s.teardownRun(f);
            }
        }
    };o = a.console && console.warn ? function (a) {
        console.warn(a);
    } : u, G in v || (G = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + new Date().getTime()).substr(0, 9), s.supSrcset = "srcset" in v, s.supSizes = "sizes" in v, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && !function (a) {
        v.srcset = "data:,a", a.src = "data:,a", s.supSrcset = v.complete === a.complete, s.supPicture = s.supSrcset && s.supPicture;
    }(b.createElement("img")), s.supSrcset && !s.supSizes ? !function () {
        var a = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
            c = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            d = b.createElement("img"),
            e = function e() {
            var a = d.width;2 === a && (s.supSizes = !0), q = s.supSrcset && !s.supSizes, t = !0, setTimeout(ba);
        };d.onload = e, d.onerror = e, d.setAttribute("sizes", "9px"), d.srcset = c + " 1w," + a + " 9w", d.src = c;
    }() : t = !0, s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = B, s.DPR = P || 1, s.u = Q, s.types = A, s.setSize = u, s.makeUrl = $(function (a) {
        return R.href = a, R.href;
    }), s.qsa = function (a, b) {
        return "querySelector" in a ? a.querySelectorAll(b) : [];
    }, s.matchesMedia = function () {
        return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function (a) {
            return !a || matchMedia(a).matches;
        } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments);
    }, s.mMQ = function (a) {
        return a ? _(a) : !0;
    }, s.calcLength = function (a) {
        var b = _(a, !0) || !1;return 0 > b && (b = !1), b;
    }, s.supportsType = function (a) {
        return a ? A[a] : !0;
    }, s.parseSize = $(function (a) {
        var b = (a || "").match(I);return { media: b && b[1], length: b && b[2] };
    }), s.parseSet = function (a) {
        return a.cands || (a.cands = m(a.srcset, a)), a.cands;
    }, s.getEmValue = function () {
        var a;if (!p && (a = b.body)) {
            var c = b.createElement("div"),
                d = z.style.cssText,
                e = a.style.cssText;c.style.cssText = K, z.style.cssText = L, a.style.cssText = L, a.appendChild(c), p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), z.style.cssText = d, a.style.cssText = e;
        }return p || 16;
    }, s.calcListLength = function (a) {
        if (!(a in O) || B.uT) {
            var b = s.calcLength(n(a));O[a] = b ? b : Q.width;
        }return O[a];
    }, s.setRes = function (a) {
        var b;if (a) {
            b = s.parseSet(a);for (var c = 0, d = b.length; d > c; c++) {
                aa(b[c], a.sizes);
            }
        }return b;
    }, s.setRes.res = aa, s.applySetCandidate = function (a, b) {
        if (a.length) {
            var c,
                d,
                e,
                f,
                h,
                k,
                l,
                m,
                n,
                o = b[s.ns],
                p = s.DPR;if (k = o.curSrc || b[G], l = o.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (n = F && !b.complete && l.res - .1 > p, n || (l.cached = !0, l.res >= p && (h = l))), !h) for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++) {
                if (c = a[d], c.res >= p) {
                    e = d - 1, h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;break;
                }
            }h && (m = s.makeUrl(h.url), o.curSrc = m, o.curCan = h, m !== k && s.setSrc(b, h), s.setSize(b));
        }
    }, s.setSrc = function (a, b) {
        var c;a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", a.offsetWidth + 1 && (a.style.width = c));
    }, s.getSet = function (a) {
        var b,
            c,
            d,
            e = !1,
            f = a[s.ns].sets;for (b = 0; b < f.length && !e; b++) {
            if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
                "pending" === d && (c = d), e = c;break;
            }
        }return e;
    }, s.parseSets = function (a, b, d) {
        var e,
            f,
            g,
            h,
            i = b && "PICTURE" === b.nodeName.toUpperCase(),
            j = a[s.ns];(j.src === c || d.src) && (j.src = w.call(a, "src"), j.src ? x.call(a, C, j.src) : y.call(a, C)), (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = w.call(a, "srcset"), j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = { srcset: j.srcset, sizes: w.call(a, "sizes") }, j.sets.push(f), g = (q || j.src) && H.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, f.cands.push({ url: j.src, d: 1, set: f }))) : j.src && j.sets.push({ srcset: j.src, sizes: null }), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g && !s.supSizes), h && s.supSrcset && !j.supported && (e ? (x.call(a, D, e), a.srcset = "") : y.call(a, D)), j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), j.parsed = !0;
    }, s.fillImg = function (a, b) {
        var c,
            d = b.reselect || b.reevaluate;a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), c.supported ? c.evaled = r : h(a));
    }, s.setupRun = function () {
        (!S || M || P !== a.devicePixelRatio) && f();
    }, s.supPicture ? (ba = u, s.fillImg = u) : !function () {
        var c,
            d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
            e = function e() {
            var a = b.readyState || "";f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), c && clearTimeout(f));
        },
            f = setTimeout(e, b.body ? 9 : 99),
            g = function g(a, b) {
            var c,
                d,
                e = function e() {
                var f = new Date() - d;b > f ? c = setTimeout(e, b - f) : (c = null, a());
            };return function () {
                d = new Date(), c || (c = setTimeout(e, b));
            };
        },
            h = z.clientHeight,
            i = function i() {
            M = Math.max(a.innerWidth || 0, z.clientWidth) !== Q.width || z.clientHeight !== h, h = z.clientHeight, M && s.fillImgs();
        };Z(a, "resize", g(i, 99)), Z(b, "readystatechange", e);
    }(), s.picturefill = ba, s.fillImgs = ba, s.teardownRun = u, ba._ = s, a.picturefillCFG = { pf: s, push: function push(a) {
            var b = a.shift();"function" == typeof s[b] ? s[b].apply(s, a) : (B[b] = a[0], S && s.fillImgs({ reselect: !0 }));
        } };for (; J && J.length;) {
        a.picturefillCFG.push(J.shift());
    }a.picturefill = ba, "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = ba : "function" == typeof define && define.amd && define("picturefill", function () {
        return ba;
    }), s.supPicture || (A["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="));
}(window, document);

/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (g, q, f) {
    function p(a, b) {
        this.wrapper = "string" == typeof a ? q.querySelector(a) : a;this.scroller = this.wrapper.children[0];this.scrollerStyle = this.scroller.style;this.options = { resizeScrollbars: !0, mouseWheelSpeed: 20, snapThreshold: .334, disablePointer: !d.hasPointer, disableTouch: d.hasPointer || !d.hasTouch, disableMouse: d.hasPointer || d.hasTouch, startX: 0, startY: 0, scrollY: !0, directionLockThreshold: 5, momentum: !0, bounce: !0, bounceTime: 600, bounceEasing: "", preventDefault: !0, preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },
            HWCompositing: !0, useTransition: !0, useTransform: !0, bindToWrapper: "undefined" === typeof g.onmousedown };for (var c in b) {
            this.options[c] = b[c];
        }this.translateZ = this.options.HWCompositing && d.hasPerspective ? " translateZ(0)" : "";this.options.useTransition = d.hasTransition && this.options.useTransition;this.options.useTransform = d.hasTransform && this.options.useTransform;this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough;this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY;this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX;this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? d.ease[this.options.bounceEasing] || d.ease.circular : this.options.bounceEasing;this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling;!0 === this.options.tap && (this.options.tap = "tap");this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative");"scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1);this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;this.directionY = this.directionX = this.y = this.x = 0;this._events = {};this._init();this.refresh();this.scrollTo(this.options.startX, this.options.startY);this.enable();
    }function u(a, b, c) {
        var e = q.createElement("div"),
            d = q.createElement("div");!0 === c && (e.style.cssText = "position:absolute;z-index:9999", d.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px");d.className = "iScrollIndicator";"h" == a ? (!0 === c && (e.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", d.style.height = "100%"), e.className = "iScrollHorizontalScrollbar") : (!0 === c && (e.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", d.style.width = "100%"), e.className = "iScrollVerticalScrollbar");e.style.cssText += ";overflow:hidden";b || (e.style.pointerEvents = "none");e.appendChild(d);return e;
    }function v(a, b) {
        this.wrapper = "string" == typeof b.el ? q.querySelector(b.el) : b.el;this.wrapperStyle = this.wrapper.style;this.indicator = this.wrapper.children[0];this.indicatorStyle = this.indicator.style;this.scroller = a;this.options = { listenX: !0, listenY: !0, interactive: !1, resize: !0, defaultScrollbars: !1, shrink: !1, fade: !1, speedRatioX: 0, speedRatioY: 0 };for (var c in b) {
            this.options[c] = b[c];
        }this.sizeRatioY = this.sizeRatioX = 1;this.maxPosY = this.maxPosX = 0;this.options.interactive && (this.options.disableTouch || (d.addEvent(this.indicator, "touchstart", this), d.addEvent(g, "touchend", this)), this.options.disablePointer || (d.addEvent(this.indicator, d.prefixPointerEvent("pointerdown"), this), d.addEvent(g, d.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (d.addEvent(this.indicator, "mousedown", this), d.addEvent(g, "mouseup", this)));if (this.options.fade) {
            this.wrapperStyle[d.style.transform] = this.scroller.translateZ;var e = d.style.transitionDuration;if (e) {
                this.wrapperStyle[e] = d.isBadAndroid ? "0.0001ms" : "0ms";var f = this;d.isBadAndroid && t(function () {
                    "0.0001ms" === f.wrapperStyle[e] && (f.wrapperStyle[e] = "0s");
                });this.wrapperStyle.opacity = "0";
            }
        }
    }var t = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.oRequestAnimationFrame || g.msRequestAnimationFrame || function (a) {
        g.setTimeout(a, 1E3 / 60);
    },
        d = function () {
        function a(a) {
            return !1 === e ? !1 : "" === e ? a : e + a.charAt(0).toUpperCase() + a.substr(1);
        }var b = {},
            c = q.createElement("div").style,
            e = function () {
            for (var a = ["t", "webkitT", "MozT", "msT", "OT"], b, e = 0, d = a.length; e < d; e++) {
                if (b = a[e] + "ransform", b in c) return a[e].substr(0, a[e].length - 1);
            }return !1;
        }();b.getTime = Date.now || function () {
            return new Date().getTime();
        };b.extend = function (a, b) {
            for (var c in b) {
                a[c] = b[c];
            }
        };b.addEvent = function (a, b, c, e) {
            a.addEventListener(b, c, !!e);
        };b.removeEvent = function (a, b, c, e) {
            a.removeEventListener(b, c, !!e);
        };b.prefixPointerEvent = function (a) {
            return g.MSPointerEvent ? "MSPointer" + a.charAt(7).toUpperCase() + a.substr(8) : a;
        };b.momentum = function (a, b, c, e, d, k) {
            b = a - b;c = f.abs(b) / c;var g;k = void 0 === k ? 6E-4 : k;g = a + c * c / (2 * k) * (0 > b ? -1 : 1);k = c / k;g < e ? (g = d ? e - d / 2.5 * (c / 8) : e, b = f.abs(g - a), k = b / c) : 0 < g && (g = d ? d / 2.5 * (c / 8) : 0, b = f.abs(a) + g, k = b / c);return { destination: f.round(g), duration: k };
        };var d = a("transform");b.extend(b, { hasTransform: !1 !== d, hasPerspective: a("perspective") in c, hasTouch: "ontouchstart" in g, hasPointer: !(!g.PointerEvent && !g.MSPointerEvent), hasTransition: a("transition") in c });b.isBadAndroid = function () {
            var a = g.navigator.appVersion;return (/Android/.test(a) && !/Chrome\/\d/.test(a) ? (a = a.match(/Safari\/(\d+.\d)/)) && "object" === (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && 2 <= a.length ? 535.19 > parseFloat(a[1]) : !0 : !1
            );
        }();b.extend(b.style = {}, { transform: d, transitionTimingFunction: a("transitionTimingFunction"), transitionDuration: a("transitionDuration"),
            transitionDelay: a("transitionDelay"), transformOrigin: a("transformOrigin") });b.hasClass = function (a, b) {
            return new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className);
        };b.addClass = function (a, c) {
            if (!b.hasClass(a, c)) {
                var e = a.className.split(" ");e.push(c);a.className = e.join(" ");
            }
        };b.removeClass = function (a, c) {
            b.hasClass(a, c) && (a.className = a.className.replace(new RegExp("(^|\\s)" + c + "(\\s|$)", "g"), " "));
        };b.offset = function (a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;) {
                b -= a.offsetLeft, c -= a.offsetTop;
            }return { left: b, top: c };
        };b.preventDefaultException = function (a, b) {
            for (var c in b) {
                if (b[c].test(a[c])) return !0;
            }return !1;
        };b.extend(b.eventType = {}, { touchstart: 1, touchmove: 1, touchend: 1, mousedown: 2, mousemove: 2, mouseup: 2, pointerdown: 3, pointermove: 3, pointerup: 3, MSPointerDown: 3, MSPointerMove: 3, MSPointerUp: 3 });b.extend(b.ease = {}, { quadratic: { style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function fn(a) {
                    return a * (2 - a);
                } }, circular: { style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function fn(a) {
                    return f.sqrt(1 - --a * a);
                } }, back: { style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function fn(a) {
                    return --a * a * (5 * a + 4) + 1;
                } }, bounce: { style: "", fn: function fn(a) {
                    return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
                } }, elastic: { style: "", fn: function fn(a) {
                    return 0 === a ? 0 : 1 == a ? 1 : .4 * f.pow(2, -10 * a) * f.sin(2 * (a - .055) * f.PI / .22) + 1;
                } } });b.tap = function (a, b) {
            var c = q.createEvent("Event");c.initEvent(b, !0, !0);c.pageX = a.pageX;c.pageY = a.pageY;a.target.dispatchEvent(c);
        };b.click = function (a) {
            var b = a.target,
                c;/(SELECT|INPUT|TEXTAREA)/i.test(b.tagName) || (c = q.createEvent(g.MouseEvent ? "MouseEvents" : "Event"), c.initEvent("click", !0, !0), c.view = a.view || g, c.detail = 1, c.screenX = b.screenX || 0, c.screenY = b.screenY || 0, c.clientX = b.clientX || 0, c.clientY = b.clientY || 0, c.ctrlKey = !!a.ctrlKey, c.altKey = !!a.altKey, c.shiftKey = !!a.shiftKey, c.metaKey = !!a.metaKey, c.button = 0, c.relatedTarget = null, c._constructed = !0, b.dispatchEvent(c));
        };return b;
    }();p.prototype = { version: "5.2.0", _init: function _init() {
            this._initEvents();(this.options.scrollbars || this.options.indicators) && this._initIndicators();
            this.options.mouseWheel && this._initWheel();this.options.snap && this._initSnap();this.options.keyBindings && this._initKeys();
        }, destroy: function destroy() {
            this._initEvents(!0);clearTimeout(this.resizeTimeout);this.resizeTimeout = null;this._execEvent("destroy");
        }, _transitionEnd: function _transitionEnd(a) {
            a.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")));
        }, _start: function _start(a) {
            if (!(1 != d.eventType[a.type] && 0 !== (a.which ? a.button : 2 > a.button ? 0 : 4 == a.button ? 1 : 2) || !this.enabled || this.initiated && d.eventType[a.type] !== this.initiated)) {
                !this.options.preventDefault || d.isBadAndroid || d.preventDefaultException(a.target, this.options.preventDefaultException) || a.preventDefault();var b = a.touches ? a.touches[0] : a;this.initiated = d.eventType[a.type];this.moved = !1;this.directionLocked = this.directionY = this.directionX = this.distY = this.distX = 0;this.startTime = d.getTime();this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, a = this.getComputedPosition(), this._translate(f.round(a.x), f.round(a.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd"));this.startX = this.x;this.startY = this.y;this.absStartX = this.x;this.absStartY = this.y;this.pointX = b.pageX;this.pointY = b.pageY;this._execEvent("beforeScrollStart");
            }
        }, _move: function _move(a) {
            if (this.enabled && d.eventType[a.type] === this.initiated) {
                this.options.preventDefault && a.preventDefault();
                var b = a.touches ? a.touches[0] : a,
                    c = b.pageX - this.pointX,
                    e = b.pageY - this.pointY,
                    k = d.getTime(),
                    h;this.pointX = b.pageX;this.pointY = b.pageY;this.distX += c;this.distY += e;b = f.abs(this.distX);h = f.abs(this.distY);if (!(300 < k - this.endTime && 10 > b && 10 > h)) {
                    this.directionLocked || this.options.freeScroll || (this.directionLocked = b > h + this.options.directionLockThreshold ? "h" : h >= b + this.options.directionLockThreshold ? "v" : "n");if ("h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough) a.preventDefault();else if ("horizontal" == this.options.eventPassthrough) {
                            this.initiated = !1;return;
                        }e = 0;
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough) a.preventDefault();else if ("vertical" == this.options.eventPassthrough) {
                            this.initiated = !1;return;
                        }c = 0;
                    }c = this.hasHorizontalScroll ? c : 0;e = this.hasVerticalScroll ? e : 0;a = this.x + c;b = this.y + e;if (0 < a || a < this.maxScrollX) a = this.options.bounce ? this.x + c / 3 : 0 < a ? 0 : this.maxScrollX;if (0 < b || b < this.maxScrollY) b = this.options.bounce ? this.y + e / 3 : 0 < b ? 0 : this.maxScrollY;this.directionX = 0 < c ? -1 : 0 > c ? 1 : 0;this.directionY = 0 < e ? -1 : 0 > e ? 1 : 0;this.moved || this._execEvent("scrollStart");this.moved = !0;this._translate(a, b);300 < k - this.startTime && (this.startTime = k, this.startX = this.x, this.startY = this.y);
                }
            }
        }, _end: function _end(a) {
            if (this.enabled && d.eventType[a.type] === this.initiated) {
                this.options.preventDefault && !d.preventDefaultException(a.target, this.options.preventDefaultException) && a.preventDefault();var b, c;c = d.getTime() - this.startTime;var e = f.round(this.x),
                    k = f.round(this.y),
                    h = f.abs(e - this.startX),
                    g = f.abs(k - this.startY);b = 0;var l = "";this.initiated = this.isInTransition = 0;this.endTime = d.getTime();if (!this.resetPosition(this.options.bounceTime)) if (this.scrollTo(e, k), this.moved) {
                    if (this._events.flick && 200 > c && 100 > h && 100 > g) this._execEvent("flick");else if (this.options.momentum && 300 > c && (b = this.hasHorizontalScroll ? d.momentum(this.x, this.startX, c, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: e, duration: 0 }, c = this.hasVerticalScroll ? d.momentum(this.y, this.startY, c, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: k, duration: 0 }, e = b.destination, k = c.destination, b = f.max(b.duration, c.duration), this.isInTransition = 1), this.options.snap && (this.currentPage = l = this._nearestSnap(e, k), b = this.options.snapSpeed || f.max(f.max(f.min(f.abs(e - l.x), 1E3), f.min(f.abs(k - l.y), 1E3)), 300), e = l.x, k = l.y, this.directionY = this.directionX = 0, l = this.options.bounceEasing), e != this.x || k != this.y) {
                        if (0 < e || e < this.maxScrollX || 0 < k || k < this.maxScrollY) l = d.ease.quadratic;this.scrollTo(e, k, b, l);
                    } else this._execEvent("scrollEnd");
                } else this.options.tap && d.tap(a, this.options.tap), this.options.click && d.click(a), this._execEvent("scrollCancel");
            }
        }, _resize: function _resize() {
            var a = this;clearTimeout(this.resizeTimeout);this.resizeTimeout = setTimeout(function () {
                a.refresh();
            }, this.options.resizePolling);
        }, resetPosition: function resetPosition(a) {
            var b = this.x,
                c = this.y;!this.hasHorizontalScroll || 0 < this.x ? b = 0 : this.x < this.maxScrollX && (b = this.maxScrollX);!this.hasVerticalScroll || 0 < this.y ? c = 0 : this.y < this.maxScrollY && (c = this.maxScrollY);if (b == this.x && c == this.y) return !1;this.scrollTo(b, c, a || 0, this.options.bounceEasing);return !0;
        }, disable: function disable() {
            this.enabled = !1;
        }, enable: function enable() {
            this.enabled = !0;
        }, refresh: function refresh() {
            this.wrapperWidth = this.wrapper.clientWidth;this.wrapperHeight = this.wrapper.clientHeight;this.scrollerWidth = this.scroller.offsetWidth;this.scrollerHeight = this.scroller.offsetHeight;this.maxScrollX = this.wrapperWidth - this.scrollerWidth;this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
            this.hasHorizontalScroll = this.options.scrollX && 0 > this.maxScrollX;this.hasVerticalScroll = this.options.scrollY && 0 > this.maxScrollY;this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth);this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight);this.directionY = this.directionX = this.endTime = 0;this.wrapperOffset = d.offset(this.wrapper);this._execEvent("refresh");this.resetPosition();
        }, on: function on(a, b) {
            this._events[a] || (this._events[a] = []);this._events[a].push(b);
        },
        off: function off(a, b) {
            if (this._events[a]) {
                var c = this._events[a].indexOf(b);-1 < c && this._events[a].splice(c, 1);
            }
        }, _execEvent: function _execEvent(a) {
            if (this._events[a]) {
                var b = 0,
                    c = this._events[a].length;if (c) for (; b < c; b++) {
                    this._events[a][b].apply(this, [].slice.call(arguments, 1));
                }
            }
        }, scrollBy: function scrollBy(a, b, c, e) {
            a = this.x + a;b = this.y + b;this.scrollTo(a, b, c || 0, e);
        }, scrollTo: function scrollTo(a, b, c, e) {
            e = e || d.ease.circular;this.isInTransition = this.options.useTransition && 0 < c;var f = this.options.useTransition && e.style;!c || f ? (f && (this._transitionTimingFunction(e.style), this._transitionTime(c)), this._translate(a, b)) : this._animate(a, b, c, e.fn);
        }, scrollToElement: function scrollToElement(a, b, c, e, k) {
            if (a = a.nodeType ? a : this.scroller.querySelector(a)) {
                var h = d.offset(a);h.left -= this.wrapperOffset.left;h.top -= this.wrapperOffset.top;!0 === c && (c = f.round(a.offsetWidth / 2 - this.wrapper.offsetWidth / 2));!0 === e && (e = f.round(a.offsetHeight / 2 - this.wrapper.offsetHeight / 2));h.left -= c || 0;h.top -= e || 0;h.left = 0 < h.left ? 0 : h.left < this.maxScrollX ? this.maxScrollX : h.left;h.top = 0 < h.top ? 0 : h.top < this.maxScrollY ? this.maxScrollY : h.top;b = void 0 === b || null === b || "auto" === b ? f.max(f.abs(this.x - h.left), f.abs(this.y - h.top)) : b;this.scrollTo(h.left, h.top, b, k);
            }
        }, _transitionTime: function _transitionTime(a) {
            if (this.options.useTransition) {
                a = a || 0;var b = d.style.transitionDuration;if (b) {
                    this.scrollerStyle[b] = a + "ms";if (!a && d.isBadAndroid) {
                        this.scrollerStyle[b] = "0.0001ms";var c = this;t(function () {
                            "0.0001ms" === c.scrollerStyle[b] && (c.scrollerStyle[b] = "0s");
                        });
                    }if (this.indicators) for (var e = this.indicators.length; e--;) {
                        this.indicators[e].transitionTime(a);
                    }
                }
            }
        }, _transitionTimingFunction: function _transitionTimingFunction(a) {
            this.scrollerStyle[d.style.transitionTimingFunction] = a;if (this.indicators) for (var b = this.indicators.length; b--;) {
                this.indicators[b].transitionTimingFunction(a);
            }
        }, _translate: function _translate(a, b) {
            this.options.useTransform ? this.scrollerStyle[d.style.transform] = "translate(" + a + "px," + b + "px)" + this.translateZ : (a = f.round(a), b = f.round(b), this.scrollerStyle.left = a + "px", this.scrollerStyle.top = b + "px");this.x = a;this.y = b;if (this.indicators) for (var c = this.indicators.length; c--;) {
                this.indicators[c].updatePosition();
            }
        }, _initEvents: function _initEvents(a) {
            a = a ? d.removeEvent : d.addEvent;var b = this.options.bindToWrapper ? this.wrapper : g;a(g, "orientationchange", this);a(g, "resize", this);this.options.click && a(this.wrapper, "click", this, !0);this.options.disableMouse || (a(this.wrapper, "mousedown", this), a(b, "mousemove", this), a(b, "mousecancel", this), a(b, "mouseup", this));d.hasPointer && !this.options.disablePointer && (a(this.wrapper, d.prefixPointerEvent("pointerdown"), this), a(b, d.prefixPointerEvent("pointermove"), this), a(b, d.prefixPointerEvent("pointercancel"), this), a(b, d.prefixPointerEvent("pointerup"), this));d.hasTouch && !this.options.disableTouch && (a(this.wrapper, "touchstart", this), a(b, "touchmove", this), a(b, "touchcancel", this), a(b, "touchend", this));a(this.scroller, "transitionend", this);a(this.scroller, "webkitTransitionEnd", this);a(this.scroller, "oTransitionEnd", this);a(this.scroller, "MSTransitionEnd", this);
        }, getComputedPosition: function getComputedPosition() {
            var a = g.getComputedStyle(this.scroller, null),
                b;this.options.useTransform ? (a = a[d.style.transform].split(")")[0].split(", "), b = +(a[12] || a[4]), a = +(a[13] || a[5])) : (b = +a.left.replace(/[^-\d.]/g, ""), a = +a.top.replace(/[^-\d.]/g, ""));return { x: b, y: a };
        }, _initIndicators: function _initIndicators() {
            function a(a) {
                if (f.indicators) for (var b = f.indicators.length; b--;) {
                    a.call(f.indicators[b]);
                }
            }var b = this.options.interactiveScrollbars,
                c = "string" != typeof this.options.scrollbars,
                e = [],
                d,
                f = this;this.indicators = [];this.options.scrollbars && (this.options.scrollY && (d = { el: u("v", b, this.options.scrollbars), interactive: b, defaultScrollbars: !0, customStyle: c, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars, listenX: !1 }, this.wrapper.appendChild(d.el), e.push(d)), this.options.scrollX && (d = { el: u("h", b, this.options.scrollbars), interactive: b, defaultScrollbars: !0, customStyle: c, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenY: !1 }, this.wrapper.appendChild(d.el), e.push(d)));this.options.indicators && (e = e.concat(this.options.indicators));for (b = e.length; b--;) {
                this.indicators.push(new v(this, e[b]));
            }this.options.fadeScrollbars && (this.on("scrollEnd", function () {
                a(function () {
                    this.fade();
                });
            }), this.on("scrollCancel", function () {
                a(function () {
                    this.fade();
                });
            }), this.on("scrollStart", function () {
                a(function () {
                    this.fade(1);
                });
            }), this.on("beforeScrollStart", function () {
                a(function () {
                    this.fade(1, !0);
                });
            }));this.on("refresh", function () {
                a(function () {
                    this.refresh();
                });
            });this.on("destroy", function () {
                a(function () {
                    this.destroy();
                });delete this.indicators;
            });
        }, _initWheel: function _initWheel() {
            d.addEvent(this.wrapper, "wheel", this);d.addEvent(this.wrapper, "mousewheel", this);d.addEvent(this.wrapper, "DOMMouseScroll", this);this.on("destroy", function () {
                clearTimeout(this.wheelTimeout);this.wheelTimeout = null;d.removeEvent(this.wrapper, "wheel", this);d.removeEvent(this.wrapper, "mousewheel", this);d.removeEvent(this.wrapper, "DOMMouseScroll", this);
            });
        }, _wheel: function _wheel(a) {
            if (this.enabled) {
                var b,
                    c,
                    e,
                    d = this;void 0 === this.wheelTimeout && d._execEvent("scrollStart");clearTimeout(this.wheelTimeout);this.wheelTimeout = setTimeout(function () {
                    d.options.snap || d._execEvent("scrollEnd");d.wheelTimeout = void 0;
                }, 400);if ("deltaX" in a) 1 === a.deltaMode ? (b = -a.deltaX * this.options.mouseWheelSpeed, a = -a.deltaY * this.options.mouseWheelSpeed) : (b = -a.deltaX, a = -a.deltaY);else if ("wheelDeltaX" in a) b = a.wheelDeltaX / 120 * this.options.mouseWheelSpeed, a = a.wheelDeltaY / 120 * this.options.mouseWheelSpeed;else if ("wheelDelta" in a) b = a = a.wheelDelta / 120 * this.options.mouseWheelSpeed;else if ("detail" in a) b = a = -a.detail / 3 * this.options.mouseWheelSpeed;else return;b *= this.options.invertWheelDirection;a *= this.options.invertWheelDirection;
                this.hasVerticalScroll || (b = a, a = 0);this.options.snap ? (c = this.currentPage.pageX, e = this.currentPage.pageY, 0 < b ? c-- : 0 > b && c++, 0 < a ? e-- : 0 > a && e++, this.goToPage(c, e)) : (c = this.x + f.round(this.hasHorizontalScroll ? b : 0), e = this.y + f.round(this.hasVerticalScroll ? a : 0), this.directionX = 0 < b ? -1 : 0 > b ? 1 : 0, this.directionY = 0 < a ? -1 : 0 > a ? 1 : 0, 0 < c ? c = 0 : c < this.maxScrollX && (c = this.maxScrollX), 0 < e ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY), this.scrollTo(c, e, 0));
            }
        }, _initSnap: function _initSnap() {
            this.currentPage = {};"string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap));this.on("refresh", function () {
                var a = 0,
                    b,
                    c = 0,
                    e,
                    d,
                    g,
                    n = 0,
                    l;e = this.options.snapStepX || this.wrapperWidth;var m = this.options.snapStepY || this.wrapperHeight;this.pages = [];if (this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (!0 === this.options.snap) for (d = f.round(e / 2), g = f.round(m / 2); n > -this.scrollerWidth;) {
                        this.pages[a] = [];for (l = b = 0; l > -this.scrollerHeight;) {
                            this.pages[a][b] = { x: f.max(n, this.maxScrollX), y: f.max(l, this.maxScrollY), width: e, height: m, cx: n - d, cy: l - g }, l -= m, b++;
                        }n -= e;a++;
                    } else for (m = this.options.snap, b = m.length, e = -1; a < b; a++) {
                        if (0 === a || m[a].offsetLeft <= m[a - 1].offsetLeft) c = 0, e++;this.pages[c] || (this.pages[c] = []);n = f.max(-m[a].offsetLeft, this.maxScrollX);l = f.max(-m[a].offsetTop, this.maxScrollY);d = n - f.round(m[a].offsetWidth / 2);g = l - f.round(m[a].offsetHeight / 2);this.pages[c][e] = { x: n, y: l, width: m[a].offsetWidth, height: m[a].offsetHeight, cx: d, cy: g };n > this.maxScrollX && c++;
                    }this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);0 === this.options.snapThreshold % 1 ? this.snapThresholdY = this.snapThresholdX = this.options.snapThreshold : (this.snapThresholdX = f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold));
                }
            });this.on("flick", function () {
                var a = this.options.snapSpeed || f.max(f.max(f.min(f.abs(this.x - this.startX), 1E3), f.min(f.abs(this.y - this.startY), 1E3)), 300);this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, a);
            });
        }, _nearestSnap: function _nearestSnap(a, b) {
            if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };var c = 0,
                e = this.pages.length,
                d = 0;if (f.abs(a - this.absStartX) < this.snapThresholdX && f.abs(b - this.absStartY) < this.snapThresholdY) return this.currentPage;0 < a ? a = 0 : a < this.maxScrollX && (a = this.maxScrollX);0 < b ? b = 0 : b < this.maxScrollY && (b = this.maxScrollY);for (; c < e; c++) {
                if (a >= this.pages[c][0].cx) {
                    a = this.pages[c][0].x;
                    break;
                }
            }for (e = this.pages[c].length; d < e; d++) {
                if (b >= this.pages[0][d].cy) {
                    b = this.pages[0][d].y;break;
                }
            }c == this.currentPage.pageX && (c += this.directionX, 0 > c ? c = 0 : c >= this.pages.length && (c = this.pages.length - 1), a = this.pages[c][0].x);d == this.currentPage.pageY && (d += this.directionY, 0 > d ? d = 0 : d >= this.pages[0].length && (d = this.pages[0].length - 1), b = this.pages[0][d].y);return { x: a, y: b, pageX: c, pageY: d };
        }, goToPage: function goToPage(a, b, c, d) {
            d = d || this.options.bounceEasing;a >= this.pages.length ? a = this.pages.length - 1 : 0 > a && (a = 0);b >= this.pages[a].length ? b = this.pages[a].length - 1 : 0 > b && (b = 0);var g = this.pages[a][b].x,
                h = this.pages[a][b].y;c = void 0 === c ? this.options.snapSpeed || f.max(f.max(f.min(f.abs(g - this.x), 1E3), f.min(f.abs(h - this.y), 1E3)), 300) : c;this.currentPage = { x: g, y: h, pageX: a, pageY: b };this.scrollTo(g, h, c, d);
        }, next: function next(a, b) {
            var c = this.currentPage.pageX,
                d = this.currentPage.pageY;c++;c >= this.pages.length && this.hasVerticalScroll && (c = 0, d++);this.goToPage(c, d, a, b);
        }, prev: function prev(a, b) {
            var c = this.currentPage.pageX,
                d = this.currentPage.pageY;c--;0 > c && this.hasVerticalScroll && (c = 0, d--);this.goToPage(c, d, a, b);
        }, _initKeys: function _initKeys(a) {
            a = { pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 };var b;if ("object" == _typeof(this.options.keyBindings)) for (b in this.options.keyBindings) {
                "string" == typeof this.options.keyBindings[b] && (this.options.keyBindings[b] = this.options.keyBindings[b].toUpperCase().charCodeAt(0));
            } else this.options.keyBindings = {};for (b in a) {
                this.options.keyBindings[b] = this.options.keyBindings[b] || a[b];
            }d.addEvent(g, "keydown", this);this.on("destroy", function () {
                d.removeEvent(g, "keydown", this);
            });
        }, _key: function _key(a) {
            if (this.enabled) {
                var b = this.options.snap,
                    c = b ? this.currentPage.pageX : this.x,
                    e = b ? this.currentPage.pageY : this.y,
                    g = d.getTime(),
                    h = this.keyTime || 0,
                    n;this.options.useTransition && this.isInTransition && (n = this.getComputedPosition(), this._translate(f.round(n.x), f.round(n.y)), this.isInTransition = !1);this.keyAcceleration = 200 > g - h ? f.min(this.keyAcceleration + .25, 50) : 0;switch (a.keyCode) {case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? c += b ? 1 : this.wrapperWidth : e += b ? 1 : this.wrapperHeight;break;case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? c -= b ? 1 : this.wrapperWidth : e -= b ? 1 : this.wrapperHeight;break;case this.options.keyBindings.end:
                        c = b ? this.pages.length - 1 : this.maxScrollX;e = b ? this.pages[0].length - 1 : this.maxScrollY;break;case this.options.keyBindings.home:
                        e = c = 0;break;case this.options.keyBindings.left:
                        c += b ? -1 : 5 + this.keyAcceleration >> 0;break;case this.options.keyBindings.up:
                        e += b ? 1 : 5 + this.keyAcceleration >> 0;break;case this.options.keyBindings.right:
                        c -= b ? -1 : 5 + this.keyAcceleration >> 0;break;case this.options.keyBindings.down:
                        e -= b ? 1 : 5 + this.keyAcceleration >> 0;break;default:
                        return;}b ? this.goToPage(c, e) : (0 < c ? this.keyAcceleration = c = 0 : c < this.maxScrollX && (c = this.maxScrollX, this.keyAcceleration = 0), 0 < e ? this.keyAcceleration = e = 0 : e < this.maxScrollY && (e = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(c, e, 0), this.keyTime = g);
            }
        }, _animate: function _animate(a, b, c, e) {
            function f() {
                var r = d.getTime(),
                    p;r >= q ? (g.isAnimating = !1, g._translate(a, b), g.resetPosition(g.options.bounceTime) || g._execEvent("scrollEnd")) : (r = (r - m) / c, p = e(r), r = (a - n) * p + n, p = (b - l) * p + l, g._translate(r, p), g.isAnimating && t(f));
            }var g = this,
                n = this.x,
                l = this.y,
                m = d.getTime(),
                q = m + c;this.isAnimating = !0;f();
        }, handleEvent: function handleEvent(a) {
            switch (a.type) {case "touchstart":case "pointerdown":case "MSPointerDown":case "mousedown":
                    this._start(a);break;case "touchmove":case "pointermove":case "MSPointerMove":case "mousemove":
                    this._move(a);break;case "touchend":case "pointerup":case "MSPointerUp":case "mouseup":case "touchcancel":case "pointercancel":case "MSPointerCancel":case "mousecancel":
                    this._end(a);
                    break;case "orientationchange":case "resize":
                    this._resize();break;case "transitionend":case "webkitTransitionEnd":case "oTransitionEnd":case "MSTransitionEnd":
                    this._transitionEnd(a);break;case "wheel":case "DOMMouseScroll":case "mousewheel":
                    this._wheel(a);break;case "keydown":
                    this._key(a);break;case "click":
                    this.enabled && !a._constructed && (a.preventDefault(), a.stopPropagation());}
        } };v.prototype = { handleEvent: function handleEvent(a) {
            switch (a.type) {case "touchstart":case "pointerdown":case "MSPointerDown":case "mousedown":
                    this._start(a);
                    break;case "touchmove":case "pointermove":case "MSPointerMove":case "mousemove":
                    this._move(a);break;case "touchend":case "pointerup":case "MSPointerUp":case "mouseup":case "touchcancel":case "pointercancel":case "MSPointerCancel":case "mousecancel":
                    this._end(a);}
        }, destroy: function destroy() {
            this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null);this.options.interactive && (d.removeEvent(this.indicator, "touchstart", this), d.removeEvent(this.indicator, d.prefixPointerEvent("pointerdown"), this), d.removeEvent(this.indicator, "mousedown", this), d.removeEvent(g, "touchmove", this), d.removeEvent(g, d.prefixPointerEvent("pointermove"), this), d.removeEvent(g, "mousemove", this), d.removeEvent(g, "touchend", this), d.removeEvent(g, d.prefixPointerEvent("pointerup"), this), d.removeEvent(g, "mouseup", this));this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper);
        }, _start: function _start(a) {
            var b = a.touches ? a.touches[0] : a;a.preventDefault();a.stopPropagation();this.transitionTime();this.initiated = !0;this.moved = !1;this.lastPointX = b.pageX;this.lastPointY = b.pageY;this.startTime = d.getTime();this.options.disableTouch || d.addEvent(g, "touchmove", this);this.options.disablePointer || d.addEvent(g, d.prefixPointerEvent("pointermove"), this);this.options.disableMouse || d.addEvent(g, "mousemove", this);this.scroller._execEvent("beforeScrollStart");
        }, _move: function _move(a) {
            var b = a.touches ? a.touches[0] : a,
                c,
                e;d.getTime();this.moved || this.scroller._execEvent("scrollStart");this.moved = !0;c = b.pageX - this.lastPointX;this.lastPointX = b.pageX;e = b.pageY - this.lastPointY;this.lastPointY = b.pageY;this._pos(this.x + c, this.y + e);a.preventDefault();a.stopPropagation();
        }, _end: function _end(a) {
            if (this.initiated) {
                this.initiated = !1;a.preventDefault();a.stopPropagation();d.removeEvent(g, "touchmove", this);d.removeEvent(g, d.prefixPointerEvent("pointermove"), this);d.removeEvent(g, "mousemove", this);if (this.scroller.options.snap) {
                    a = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);var b = this.options.snapSpeed || f.max(f.max(f.min(f.abs(this.scroller.x - a.x), 1E3), f.min(f.abs(this.scroller.y - a.y), 1E3)), 300);if (this.scroller.x != a.x || this.scroller.y != a.y) this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = a, this.scroller.scrollTo(a.x, a.y, b, this.scroller.options.bounceEasing);
                }this.moved && this.scroller._execEvent("scrollEnd");
            }
        }, transitionTime: function transitionTime(a) {
            a = a || 0;var b = d.style.transitionDuration;if (b && (this.indicatorStyle[b] = a + "ms", !a && d.isBadAndroid)) {
                this.indicatorStyle[b] = "0.0001ms";var c = this;t(function () {
                    "0.0001ms" === c.indicatorStyle[b] && (c.indicatorStyle[b] = "0s");
                });
            }
        }, transitionTimingFunction: function transitionTimingFunction(a) {
            this.indicatorStyle[d.style.transitionTimingFunction] = a;
        }, refresh: function refresh() {
            this.transitionTime();this.indicatorStyle.display = this.options.listenX && !this.options.listenY ? this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.scroller.hasVerticalScroll ? "block" : "none" : this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none";this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (d.addClass(this.wrapper, "iScrollBothScrollbars"), d.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (d.removeClass(this.wrapper, "iScrollBothScrollbars"), d.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = f.max(f.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX);this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = f.max(f.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY);this.updatePosition();
        }, updatePosition: function updatePosition() {
            var a = this.options.listenX && f.round(this.sizeRatioX * this.scroller.x) || 0,
                b = this.options.listenY && f.round(this.sizeRatioY * this.scroller.y) || 0;this.options.ignoreBoundaries || (a < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = f.max(this.indicatorWidth + a, 8), this.indicatorStyle.width = this.width + "px"), a = this.minBoundaryX) : a > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = f.max(this.indicatorWidth - (a - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", a = this.maxPosX + this.indicatorWidth - this.width) : a = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), b < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = f.max(this.indicatorHeight + 3 * b, 8), this.indicatorStyle.height = this.height + "px"), b = this.minBoundaryY) : b > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = f.max(this.indicatorHeight - 3 * (b - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", b = this.maxPosY + this.indicatorHeight - this.height) : b = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px"));this.x = a;this.y = b;this.scroller.options.useTransform ? this.indicatorStyle[d.style.transform] = "translate(" + a + "px," + b + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = a + "px", this.indicatorStyle.top = b + "px");
        }, _pos: function _pos(a, b) {
            0 > a ? a = 0 : a > this.maxPosX && (a = this.maxPosX);0 > b ? b = 0 : b > this.maxPosY && (b = this.maxPosY);a = this.options.listenX ? f.round(a / this.sizeRatioX) : this.scroller.x;b = this.options.listenY ? f.round(b / this.sizeRatioY) : this.scroller.y;this.scroller.scrollTo(a, b);
        }, fade: function fade(a, b) {
            if (!b || this.visible) {
                clearTimeout(this.fadeTimeout);this.fadeTimeout = null;var c = a ? 0 : 300;this.wrapperStyle[d.style.transitionDuration] = (a ? 250 : 500) + "ms";this.fadeTimeout = setTimeout(function (a) {
                    this.wrapperStyle.opacity = a;this.visible = +a;
                }.bind(this, a ? "1" : "0"), c);
            }
        } };p.utils = d;"undefined" != typeof module && module.exports ? module.exports = p : "function" == typeof define && define.amd ? define(function () {
        return p;
    }) : g.IScroll = p;
})(window, document, Math);
/*!
 * fullPage 2.9.2
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function (e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function (t) {
        return n(t, e, e.document, e.Math);
    }) : "object" == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) && exports ? module.exports = n(require("jquery"), e, e.document, e.Math) : n(jQuery, e, e.document, e.Math);
}("undefined" != typeof window ? window : undefined, function (e, n, t, o, i) {
    "use strict";
    var a = "fullpage-wrapper",
        r = "." + a,
        l = "fp-scrollable",
        s = "." + l,
        c = "fp-responsive",
        d = "fp-notransition",
        f = "fp-destroyed",
        u = "fp-enabled",
        h = "fp-viewing",
        p = "active",
        v = "." + p,
        g = "fp-completely",
        m = "." + g,
        w = ".section",
        S = "fp-section",
        y = "." + S,
        b = y + v,
        x = y + ":first",
        C = y + ":last",
        T = "fp-tableCell",
        k = "." + T,
        I = "fp-auto-height",
        L = "fp-normal-scroll",
        E = "fp-nav",
        A = "#" + E,
        M = "fp-tooltip",
        O = "." + M,
        H = "fp-show-active",
        R = ".slide",
        B = "fp-slide",
        z = "." + B,
        D = z + v,
        P = "fp-slides",
        q = "." + P,
        F = "fp-slidesContainer",
        V = "." + F,
        W = "fp-table",
        Y = "fp-slidesNav",
        j = "." + Y,
        N = j + " a",
        U = "fp-controlArrow",
        X = "." + U,
        K = "fp-prev",
        Q = "." + K,
        G = U + " " + K,
        J = X + Q,
        Z = "fp-next",
        $ = "." + Z,
        _ = U + " " + Z,
        ee = X + $,
        ne = e(n),
        te = e(t),
        oe = { scrollbars: !0, mouseWheel: !0, hideScrollbars: !1, fadeScrollbars: !1, disableMouse: !0, interactiveScrollbars: !0 };e.fn.fullpage = function (l) {
        function s(n, t) {
            n || $n(0), ot("autoScrolling", n, t);var o = e(b);l.autoScrolling && !l.scrollBar ? (rt.css({ overflow: "hidden", height: "100%" }), U(Et.recordHistory, "internal"), vt.css({ "-ms-touch-action": "none", "touch-action": "none" }), o.length && $n(o.position().top)) : (rt.css({ overflow: "visible", height: "initial" }), U(!1, "internal"), vt.css({ "-ms-touch-action": "", "touch-action": "" }), o.length && rt.scrollTop(o.position().top));
        }function U(e, n) {
            ot("recordHistory", e, n);
        }function Q(e, n) {
            ot("scrollingSpeed", e, n);
        }function Z(e, n) {
            ot("fitToSection", e, n);
        }function $(e) {
            l.lockAnchors = e;
        }function ae(e) {
            e ? (Nn(), Un()) : (jn(), Xn());
        }function re(n, t) {
            "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","), e.each(t, function (e, t) {
                et(n, t, "m");
            })) : n ? (ae(!0), Kn()) : (ae(!1), Qn());
        }function le(n, t) {
            "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","), e.each(t, function (e, t) {
                et(n, t, "k");
            })) : l.keyboardScrolling = n;
        }function se() {
            var n = e(b).prev(y);n.length || !l.loopTop && !l.continuousVertical || (n = e(y).last()), n.length && Ue(n, null, !0);
        }function ce() {
            var n = e(b).next(y);n.length || !l.loopBottom && !l.continuousVertical || (n = e(y).first()), n.length && Ue(n, null, !1);
        }function de(e, n) {
            Q(0, "internal"), fe(e, n), Q(Et.scrollingSpeed, "internal");
        }function fe(e, n) {
            var t = Rn(e);"undefined" != typeof n ? zn(e, n) : t.length > 0 && Ue(t);
        }function ue(e) {
            Ye("right", e);
        }function he(e) {
            Ye("left", e);
        }function pe(n) {
            if (!vt.hasClass(f)) {
                mt = !0, gt = ne.height(), e(y).each(function () {
                    var n = e(this).find(q),
                        t = e(this).find(z);l.verticalCentered && e(this).find(k).css("height", On(e(this)) + "px"), e(this).css("height", gt + "px"), l.scrollOverflow && (t.length ? t.each(function () {
                        An(e(this));
                    }) : An(e(this))), t.length > 1 && gn(n, n.find(D));
                });var t = e(b),
                    o = t.index(y);o && de(o + 1), mt = !1, e.isFunction(l.afterResize) && n && l.afterResize.call(vt), e.isFunction(l.afterReBuild) && !n && l.afterReBuild.call(vt);
            }
        }function ve(n) {
            var t = lt.hasClass(c);n ? t || (s(!1, "internal"), Z(!1, "internal"), e(A).hide(), lt.addClass(c), e.isFunction(l.afterResponsive) && l.afterResponsive.call(vt, n)) : t && (s(Et.autoScrolling, "internal"), Z(Et.autoScrolling, "internal"), e(A).show(), lt.removeClass(c), e.isFunction(l.afterResponsive) && l.afterResponsive.call(vt, n));
        }function ge() {
            l.css3 && (l.css3 = Yn()), l.scrollBar = l.scrollBar || l.hybrid, we(), Se(), re(!0), s(l.autoScrolling, "internal");var n = e(b).find(D);n.length && (0 !== e(b).index(y) || 0 === e(b).index(y) && 0 !== n.index()) && Zn(n), bn(), Wn(), "complete" === t.readyState && tn(), ne.on("load", tn);
        }function me() {
            ne.on("scroll", Oe).on("hashchange", on).blur(fn).resize(yn), te.keydown(an).keyup(ln).on("click touchstart", A + " a", un).on("click touchstart", N, hn).on("click", O, rn), e(y).on("click touchstart", X, dn), l.normalScrollElements && (te.on("mouseenter", l.normalScrollElements, function () {
                ae(!1);
            }), te.on("mouseleave", l.normalScrollElements, function () {
                ae(!0);
            }));
        }function we() {
            var n = vt.find(l.sectionSelector);l.anchors.length || (l.anchors = n.filter("[data-anchor]").map(function () {
                return e(this).data("anchor").toString();
            }).get()), l.navigationTooltips.length || (l.navigationTooltips = n.filter("[data-tooltip]").map(function () {
                return e(this).data("tooltip").toString();
            }).get());
        }function Se() {
            vt.css({ height: "100%", position: "relative" }), vt.addClass(a), e("html").addClass(u), gt = ne.height(), vt.removeClass(f), Ce(), e(y).each(function (n) {
                var t = e(this),
                    o = t.find(z),
                    i = o.length;be(t, n), xe(t, n), i > 0 ? ye(t, o, i) : l.verticalCentered && Mn(t);
            }), l.fixedElements && l.css3 && e(l.fixedElements).appendTo(lt), l.navigation && ke(), Le(), l.scrollOverflow ? ("complete" === t.readyState && Ie(), ne.on("load", Ie)) : Me();
        }function ye(n, t, o) {
            var i = 100 * o,
                a = 100 / o;t.wrapAll('<div class="' + F + '" />'), t.parent().wrap('<div class="' + P + '" />'), n.find(V).css("width", i + "%"), o > 1 && (l.controlArrows && Te(n), l.slidesNavigation && Pn(n, o)), t.each(function (n) {
                e(this).css("width", a + "%"), l.verticalCentered && Mn(e(this));
            });var r = n.find(D);r.length && (0 !== e(b).index(y) || 0 === e(b).index(y) && 0 !== r.index()) ? Zn(r) : t.eq(0).addClass(p);
        }function be(n, t) {
            t || 0 !== e(b).length || n.addClass(p), n.css("height", gt + "px"), l.paddingTop && n.css("padding-top", l.paddingTop), l.paddingBottom && n.css("padding-bottom", l.paddingBottom), "undefined" != typeof l.sectionsColor[t] && n.css("background-color", l.sectionsColor[t]), "undefined" != typeof l.anchors[t] && n.attr("data-anchor", l.anchors[t]);
        }function xe(n, t) {
            "undefined" != typeof l.anchors[t] && n.hasClass(p) && In(l.anchors[t], t), l.menu && l.css3 && e(l.menu).closest(r).length && e(l.menu).appendTo(lt);
        }function Ce() {
            vt.find(l.sectionSelector).addClass(S), vt.find(l.slideSelector).addClass(B);
        }function Te(e) {
            e.find(q).after('<div class="' + G + '"></div><div class="' + _ + '"></div>'), "#fff" != l.controlArrowColor && (e.find(ee).css("border-color", "transparent transparent transparent " + l.controlArrowColor), e.find(J).css("border-color", "transparent " + l.controlArrowColor + " transparent transparent")), l.loopHorizontal || e.find(J).hide();
        }function ke() {
            lt.append('<div id="' + E + '"><ul></ul></div>');var n = e(A);n.addClass(function () {
                return l.showActiveTooltip ? H + " " + l.navigationPosition : l.navigationPosition;
            });for (var t = 0; t < e(y).length; t++) {
                var o = "";l.anchors.length && (o = l.anchors[t]);var i = '<li><a href="#' + o + '"><span></span></a>',
                    a = l.navigationTooltips[t];"undefined" != typeof a && "" !== a && (i += '<div class="' + M + " " + l.navigationPosition + '">' + a + "</div>"), i += "</li>", n.find("ul").append(i);
            }e(A).css("margin-top", "-" + e(A).height() / 2 + "px"), e(A).find("li").eq(e(b).index(y)).find("a").addClass(p);
        }function Ie() {
            e(y).each(function () {
                var n = e(this).find(z);n.length ? n.each(function () {
                    An(e(this));
                }) : An(e(this));
            }), Me();
        }function Le() {
            vt.find('iframe[src*="youtube.com/embed/"]').each(function () {
                Ee(e(this), "enablejsapi=1");
            });
        }function Ee(e, n) {
            var t = e.attr("src");e.attr("src", t + Ae(t) + n);
        }function Ae(e) {
            return (/\?/.test(e) ? "&" : "?"
            );
        }function Me() {
            var n = e(b);n.addClass(g), l.scrollOverflowHandler.afterRender && l.scrollOverflowHandler.afterRender(n), Ze(n), $e(n), l.scrollOverflowHandler.afterLoad(), e.isFunction(l.afterLoad) && l.afterLoad.call(n, n.data("anchor"), n.index(y) + 1), e.isFunction(l.afterRender) && l.afterRender.call(vt);
        }function Oe() {
            var n;if (!l.autoScrolling || l.scrollBar) {
                var o = ne.scrollTop(),
                    i = Re(o),
                    a = 0,
                    r = o + ne.height() / 2,
                    s = lt.height() - ne.height() === o,
                    c = t.querySelectorAll(y);if (s) a = c.length - 1;else if (o) for (var d = 0; d < c.length; ++d) {
                    var f = c[d];f.offsetTop <= r && (a = d);
                } else a = 0;if (He(i) && (e(b).hasClass(g) || e(b).addClass(g).siblings().removeClass(g)), n = e(c).eq(a), !n.hasClass(p)) {
                    At = !0;var u,
                        h,
                        v = e(b),
                        m = v.index(y) + 1,
                        w = Ln(n),
                        S = n.data("anchor"),
                        x = n.index(y) + 1,
                        C = n.find(D);C.length && (h = C.data("anchor"), u = C.index()), St && (n.addClass(p).siblings().removeClass(p), e.isFunction(l.onLeave) && l.onLeave.call(v, m, x, w), e.isFunction(l.afterLoad) && l.afterLoad.call(n, S, x), en(v), Ze(n), $e(n), In(S, x - 1), l.anchors.length && (ct = S), qn(u, h, S, x)), clearTimeout(kt), kt = setTimeout(function () {
                        At = !1;
                    }, 100);
                }l.fitToSection && (clearTimeout(It), It = setTimeout(function () {
                    St && l.fitToSection && (e(b).is(n) && (mt = !0), Ue(e(b)), mt = !1);
                }, l.fitToSectionDelay));
            }
        }function He(n) {
            var t = e(b).position().top,
                o = t + ne.height();return "up" == n ? o >= ne.scrollTop() + ne.height() : t <= ne.scrollTop();
        }function Re(e) {
            var n = e > Mt ? "down" : "up";return Mt = e, Dt = e, n;
        }function Be(e, n) {
            if (bt.m[e]) {
                var t = "down" === e ? "bottom" : "top",
                    o = "down" === e ? ce : se;if (n.length > 0) {
                    if (!l.scrollOverflowHandler.isScrolled(t, n)) return !0;o();
                } else o();
            }
        }function ze(e) {
            var n = e.originalEvent;!Pe(e.target) && l.autoScrolling && qe(n) && e.preventDefault();
        }function De(n) {
            var t = n.originalEvent,
                i = e(t.target).closest(y);if (!Pe(n.target) && qe(t)) {
                l.autoScrolling && n.preventDefault();var a = l.scrollOverflowHandler.scrollable(i),
                    r = Jn(t);Rt = r.y, Bt = r.x, i.find(q).length && o.abs(Ht - Bt) > o.abs(Ot - Rt) ? !ut && o.abs(Ht - Bt) > ne.outerWidth() / 100 * l.touchSensitivity && (Ht > Bt ? bt.m.right && ue(i) : bt.m.left && he(i)) : l.autoScrolling && St && o.abs(Ot - Rt) > ne.height() / 100 * l.touchSensitivity && (Ot > Rt ? Be("down", a) : Rt > Ot && Be("up", a));
            }
        }function Pe(n, t) {
            t = t || 0;var o = e(n).parent();return t < l.normalScrollElementTouchThreshold && o.is(l.normalScrollElements) ? !0 : t == l.normalScrollElementTouchThreshold ? !1 : Pe(o, ++t);
        }function qe(e) {
            return "undefined" == typeof e.pointerType || "mouse" != e.pointerType;
        }function Fe(e) {
            var n = e.originalEvent;if (l.fitToSection && rt.stop(), qe(n)) {
                var t = Jn(n);Ot = t.y, Ht = t.x;
            }
        }function Ve(e, n) {
            for (var t = 0, i = e.slice(o.max(e.length - n, 1)), a = 0; a < i.length; a++) {
                t += i[a];
            }return o.ceil(t / n);
        }function We(t) {
            var i = new Date().getTime(),
                a = e(m).hasClass(L);if (l.autoScrolling && !ft && !a) {
                t = t || n.event;var r = t.wheelDelta || -t.deltaY || -t.detail,
                    s = o.max(-1, o.min(1, r)),
                    c = "undefined" != typeof t.wheelDeltaX || "undefined" != typeof t.deltaX,
                    d = o.abs(t.wheelDeltaX) < o.abs(t.wheelDelta) || o.abs(t.deltaX) < o.abs(t.deltaY) || !c;yt.length > 149 && yt.shift(), yt.push(o.abs(r)), l.scrollBar && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);var f = e(b),
                    u = l.scrollOverflowHandler.scrollable(f),
                    h = i - zt;if (zt = i, h > 200 && (yt = []), St) {
                    var p = Ve(yt, 10),
                        v = Ve(yt, 70),
                        g = p >= v;g && d && (0 > s ? Be("down", u) : Be("up", u));
                }return !1;
            }l.fitToSection && rt.stop();
        }function Ye(n, t) {
            var o = "undefined" == typeof t ? e(b) : t,
                i = o.find(q),
                a = i.find(z).length;if (!(!i.length || ut || 2 > a)) {
                var r = i.find(D),
                    s = null;if (s = "left" === n ? r.prev(z) : r.next(z), !s.length) {
                    if (!l.loopHorizontal) return;s = "left" === n ? r.siblings(":last") : r.siblings(":first");
                }ut = !0, gn(i, s, n);
            }
        }function je() {
            e(D).each(function () {
                Zn(e(this), "internal");
            });
        }function Ne(e) {
            var n = e.position(),
                t = n.top,
                o = n.top > Dt,
                i = t - gt + e.outerHeight(),
                a = l.bigSectionsDestination;return e.outerHeight() > gt ? (!o && !a || "bottom" === a) && (t = i) : (o || mt && e.is(":last-child")) && (t = i), Dt = t, t;
        }function Ue(n, t, o) {
            if ("undefined" != typeof n) {
                var i,
                    a,
                    r = Ne(n),
                    s = { element: n, callback: t, isMovementUp: o, dtop: r, yMovement: Ln(n), anchorLink: n.data("anchor"), sectionIndex: n.index(y), activeSlide: n.find(D), activeSection: e(b), leavingSection: e(b).index(y) + 1, localIsResizing: mt };s.activeSection.is(n) && !mt || l.scrollBar && ne.scrollTop() === s.dtop && !n.hasClass(I) || (s.activeSlide.length && (i = s.activeSlide.data("anchor"), a = s.activeSlide.index()), l.autoScrolling && l.continuousVertical && "undefined" != typeof s.isMovementUp && (!s.isMovementUp && "up" == s.yMovement || s.isMovementUp && "down" == s.yMovement) && (s = Qe(s)), (!e.isFunction(l.onLeave) || s.localIsResizing || l.onLeave.call(s.activeSection, s.leavingSection, s.sectionIndex + 1, s.yMovement) !== !1) && (en(s.activeSection), l.scrollOverflowHandler.beforeLeave(), n.addClass(p).siblings().removeClass(p), Ze(n), l.scrollOverflowHandler.onLeave(), St = !1, qn(a, i, s.anchorLink, s.sectionIndex), Xe(s), ct = s.anchorLink, In(s.anchorLink, s.sectionIndex)));
            }
        }function Xe(n) {
            if (l.css3 && l.autoScrolling && !l.scrollBar) {
                var t = "translate3d(0px, -" + o.round(n.dtop) + "px, 0px)";Hn(t, !0), l.scrollingSpeed ? (clearTimeout(Ct), Ct = setTimeout(function () {
                    Je(n);
                }, l.scrollingSpeed)) : Je(n);
            } else {
                var i = Ke(n);e(i.element).animate(i.options, l.scrollingSpeed, l.easing).promise().done(function () {
                    l.scrollBar ? setTimeout(function () {
                        Je(n);
                    }, 30) : Je(n);
                });
            }
        }function Ke(e) {
            var n = {};return l.autoScrolling && !l.scrollBar ? (n.options = { top: -e.dtop }, n.element = r) : (n.options = { scrollTop: e.dtop }, n.element = "html, body"), n;
        }function Qe(n) {
            return n.isMovementUp ? e(b).before(n.activeSection.nextAll(y)) : e(b).after(n.activeSection.prevAll(y).get().reverse()), $n(e(b).position().top), je(), n.wrapAroundElements = n.activeSection, n.dtop = n.element.position().top, n.yMovement = Ln(n.element), n;
        }function Ge(n) {
            n.wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(x).before(n.wrapAroundElements) : e(C).after(n.wrapAroundElements), $n(e(b).position().top), je());
        }function Je(n) {
            Ge(n), e.isFunction(l.afterLoad) && !n.localIsResizing && l.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1), l.scrollOverflowHandler.afterLoad(), n.localIsResizing || $e(n.element), n.element.addClass(g).siblings().removeClass(g), St = !0, e.isFunction(n.callback) && n.callback.call(this);
        }function Ze(n) {
            if (l.lazyLoading) {
                var t,
                    o = nn(n);o.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                    t = e(this), t.attr("src", t.data("src")), t.removeAttr("data-src"), t.is("source") && t.closest("video").get(0).load();
                });
            }
        }function $e(n) {
            var t = nn(n);t.find("video, audio").each(function () {
                var n = e(this).get(0);n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play();
            }), t.find('iframe[src*="youtube.com/embed/"]').each(function () {
                var n = e(this).get(0);n.hasAttribute("data-autoplay") && _e(n), n.onload = function () {
                    n.hasAttribute("data-autoplay") && _e(n);
                };
            });
        }function _e(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
        }function en(n) {
            var t = nn(n);t.find("video, audio").each(function () {
                var n = e(this).get(0);n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause();
            }), t.find('iframe[src*="youtube.com/embed/"]').each(function () {
                var n = e(this).get(0);/youtube\.com\/embed\//.test(e(this).attr("src")) && !n.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            });
        }function nn(n) {
            var t = n.find(D);return t.length && (n = e(t)), n;
        }function tn() {
            var e = n.location.hash.replace("#", "").split("/"),
                t = decodeURIComponent(e[0]),
                o = decodeURIComponent(e[1]);t && (l.animateAnchor ? zn(t, o) : de(t, o));
        }function on() {
            if (!At && !l.lockAnchors) {
                var e = n.location.hash.replace("#", "").split("/"),
                    t = decodeURIComponent(e[0]),
                    o = decodeURIComponent(e[1]),
                    i = "undefined" == typeof ct,
                    a = "undefined" == typeof ct && "undefined" == typeof o && !ut;t.length && (t && t !== ct && !i || a || !ut && dt != o) && zn(t, o);
            }
        }function an(n) {
            clearTimeout(Lt);var t = e(":focus");if (!t.is("textarea") && !t.is("input") && !t.is("select") && "true" !== t.attr("contentEditable") && "" !== t.attr("contentEditable") && l.keyboardScrolling && l.autoScrolling) {
                var o = n.which,
                    i = [40, 38, 32, 33, 34];e.inArray(o, i) > -1 && n.preventDefault(), ft = n.ctrlKey, Lt = setTimeout(function () {
                    pn(n);
                }, 150);
            }
        }function rn() {
            e(this).prev().trigger("click");
        }function ln(e) {
            wt && (ft = e.ctrlKey);
        }function sn(e) {
            2 == e.which && (Pt = e.pageY, vt.on("mousemove", vn));
        }function cn(e) {
            2 == e.which && vt.off("mousemove");
        }function dn() {
            var n = e(this).closest(y);e(this).hasClass(K) ? bt.m.left && he(n) : bt.m.right && ue(n);
        }function fn() {
            wt = !1, ft = !1;
        }function un(n) {
            n.preventDefault();var t = e(this).parent().index();Ue(e(y).eq(t));
        }function hn(n) {
            n.preventDefault();var t = e(this).closest(y).find(q),
                o = t.find(z).eq(e(this).closest("li").index());gn(t, o);
        }function pn(n) {
            var t = n.shiftKey;if (St || !([37, 39].indexOf(n.which) < 0)) switch (n.which) {case 38:case 33:
                    bt.k.up && se();break;case 32:
                    if (t && bt.k.up) {
                        se();break;
                    }case 40:case 34:
                    bt.k.down && ce();break;case 36:
                    bt.k.up && fe(1);break;case 35:
                    bt.k.down && fe(e(y).length);break;case 37:
                    bt.k.left && he();break;case 39:
                    bt.k.right && ue();break;default:
                    return;}
        }function vn(e) {
            St && (e.pageY < Pt && bt.m.up ? se() : e.pageY > Pt && bt.m.down && ce()), Pt = e.pageY;
        }function gn(n, t, o) {
            var i = n.closest(y),
                a = { slides: n, destiny: t, direction: o, destinyPos: t.position(), slideIndex: t.index(), section: i, sectionIndex: i.index(y), anchorLink: i.data("anchor"), slidesNav: i.find(j), slideAnchor: Vn(t), prevSlide: i.find(D), prevSlideIndex: i.find(D).index(), localIsResizing: mt };return a.xMovement = En(a.prevSlideIndex, a.slideIndex), a.localIsResizing || (St = !1), l.onSlideLeave && !a.localIsResizing && "none" !== a.xMovement && e.isFunction(l.onSlideLeave) && l.onSlideLeave.call(a.prevSlide, a.anchorLink, a.sectionIndex + 1, a.prevSlideIndex, a.xMovement, a.slideIndex) === !1 ? void (ut = !1) : (t.addClass(p).siblings().removeClass(p), a.localIsResizing || (en(a.prevSlide), Ze(t)), !l.loopHorizontal && l.controlArrows && (i.find(J).toggle(0 !== a.slideIndex), i.find(ee).toggle(!t.is(":last-child"))), i.hasClass(p) && qn(a.slideIndex, a.slideAnchor, a.anchorLink, a.sectionIndex), void wn(n, a, !0));
        }function mn(n) {
            Sn(n.slidesNav, n.slideIndex), n.localIsResizing || (e.isFunction(l.afterSlideLoad) && l.afterSlideLoad.call(n.destiny, n.anchorLink, n.sectionIndex + 1, n.slideAnchor, n.slideIndex), St = !0, $e(n.destiny)), ut = !1;
        }function wn(e, n, t) {
            var i = n.destinyPos;if (l.css3) {
                var a = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";xn(e.find(V)).css(_n(a)), Tt = setTimeout(function () {
                    t && mn(n);
                }, l.scrollingSpeed, l.easing);
            } else e.animate({ scrollLeft: o.round(i.left) }, l.scrollingSpeed, l.easing, function () {
                t && mn(n);
            });
        }function Sn(e, n) {
            e.find(v).removeClass(p), e.find("li").eq(n).find("a").addClass(p);
        }function yn() {
            if (bn(), ht) {
                var n = e(t.activeElement);if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
                    var i = ne.height();o.abs(i - qt) > 20 * o.max(qt, i) / 100 && (pe(!0), qt = i);
                }
            } else clearTimeout(xt), xt = setTimeout(function () {
                pe(!0);
            }, 350);
        }function bn() {
            var e = l.responsive || l.responsiveWidth,
                n = l.responsiveHeight,
                t = e && ne.outerWidth() < e,
                o = n && ne.height() < n;e && n ? ve(t || o) : e ? ve(t) : n && ve(o);
        }function xn(e) {
            var n = "all " + l.scrollingSpeed + "ms " + l.easingcss3;return e.removeClass(d), e.css({ "-webkit-transition": n, transition: n });
        }function Cn(e) {
            return e.addClass(d);
        }function Tn(n, t) {
            l.navigation && (e(A).find(v).removeClass(p), n ? e(A).find('a[href="#' + n + '"]').addClass(p) : e(A).find("li").eq(t).find("a").addClass(p));
        }function kn(n) {
            l.menu && (e(l.menu).find(v).removeClass(p), e(l.menu).find('[data-menuanchor="' + n + '"]').addClass(p));
        }function In(e, n) {
            kn(e), Tn(e, n);
        }function Ln(n) {
            var t = e(b).index(y),
                o = n.index(y);return t == o ? "none" : t > o ? "up" : "down";
        }function En(e, n) {
            return e == n ? "none" : e > n ? "left" : "right";
        }function An(e) {
            if (!e.hasClass("fp-noscroll")) {
                e.css("overflow", "hidden");var n,
                    t = l.scrollOverflowHandler,
                    o = t.wrapContent(),
                    i = e.closest(y),
                    a = t.scrollable(e);a.length ? n = t.scrollHeight(e) : (n = e.get(0).scrollHeight, l.verticalCentered && (n = e.find(k).get(0).scrollHeight));var r = gt - parseInt(i.css("padding-bottom")) - parseInt(i.css("padding-top"));n > r ? a.length ? t.update(e, r) : (l.verticalCentered ? e.find(k).wrapInner(o) : e.wrapInner(o), t.create(e, r)) : t.remove(e), e.css("overflow", "");
            }
        }function Mn(e) {
            e.hasClass(W) || e.addClass(W).wrapInner('<div class="' + T + '" style="height:' + On(e) + 'px;" />');
        }function On(e) {
            var n = gt;if (l.paddingTop || l.paddingBottom) {
                var t = e;t.hasClass(S) || (t = e.closest(y));var o = parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"));n = gt - o;
            }return n;
        }function Hn(e, n) {
            n ? xn(vt) : Cn(vt), vt.css(_n(e)), setTimeout(function () {
                vt.removeClass(d);
            }, 10);
        }function Rn(n) {
            var t = vt.find(y + '[data-anchor="' + n + '"]');return t.length || (t = e(y).eq(n - 1)), t;
        }function Bn(e, n) {
            var t = n.find(q),
                o = t.find(z + '[data-anchor="' + e + '"]');return o.length || (o = t.find(z).eq(e)), o;
        }function zn(e, n) {
            var t = Rn(e);t.length && ("undefined" == typeof n && (n = 0), e === ct || t.hasClass(p) ? Dn(t, n) : Ue(t, function () {
                Dn(t, n);
            }));
        }function Dn(e, n) {
            if ("undefined" != typeof n) {
                var t = e.find(q),
                    o = Bn(n, e);o.length && gn(t, o);
            }
        }function Pn(e, n) {
            e.append('<div class="' + Y + '"><ul></ul></div>');var t = e.find(j);t.addClass(l.slidesNavPosition);for (var o = 0; n > o; o++) {
                t.find("ul").append('<li><a href="#"><span></span></a></li>');
            }t.css("margin-left", "-" + t.width() / 2 + "px"), t.find("li").first().find("a").addClass(p);
        }function qn(e, n, t, o) {
            var i = "";l.anchors.length && !l.lockAnchors && (e ? ("undefined" != typeof t && (i = t), "undefined" == typeof n && (n = e), dt = n, Fn(i + "/" + n)) : "undefined" != typeof e ? (dt = n, Fn(t)) : Fn(t)), Wn();
        }function Fn(e) {
            if (l.recordHistory) location.hash = e;else if (ht || pt) n.history.replaceState(i, i, "#" + e);else {
                var t = n.location.href.split("#")[0];n.location.replace(t + "#" + e);
            }
        }function Vn(e) {
            var n = e.data("anchor"),
                t = e.index();return "undefined" == typeof n && (n = t), n;
        }function Wn() {
            var n = e(b),
                t = n.find(D),
                o = Vn(n),
                i = Vn(t),
                a = String(o);t.length && (a = a + "-" + i), a = a.replace("/", "-").replace("#", "");var r = new RegExp("\\b\\s?" + h + "-[^\\s]+\\b", "g");lt[0].className = lt[0].className.replace(r, ""), lt.addClass(h + "-" + a);
        }function Yn() {
            var e,
                o = t.createElement("p"),
                a = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };t.body.insertBefore(o, null);for (var r in a) {
                o.style[r] !== i && (o.style[r] = "translate3d(1px,1px,1px)", e = n.getComputedStyle(o).getPropertyValue(a[r]));
            }return t.body.removeChild(o), e !== i && e.length > 0 && "none" !== e;
        }function jn() {
            t.addEventListener ? (t.removeEventListener("mousewheel", We, !1), t.removeEventListener("wheel", We, !1), t.removeEventListener("MozMousePixelScroll", We, !1)) : t.detachEvent("onmousewheel", We);
        }function Nn() {
            var e,
                o = "";n.addEventListener ? e = "addEventListener" : (e = "attachEvent", o = "on");var a = "onwheel" in t.createElement("div") ? "wheel" : t.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";"DOMMouseScroll" == a ? t[e](o + "MozMousePixelScroll", We, !1) : t[e](o + a, We, !1);
        }function Un() {
            vt.on("mousedown", sn).on("mouseup", cn);
        }function Xn() {
            vt.off("mousedown", sn).off("mouseup", cn);
        }function Kn() {
            if (ht || pt) {
                var n = Gn();l.autoScrolling && lt.off("touchmove " + n.move).on("touchmove " + n.move, ze), e(r).off("touchstart " + n.down).on("touchstart " + n.down, Fe).off("touchmove " + n.move).on("touchmove " + n.move, De);
            }
        }function Qn() {
            if (ht || pt) {
                var n = Gn();e(r).off("touchstart " + n.down).off("touchmove " + n.move);
            }
        }function Gn() {
            var e;return e = n.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" };
        }function Jn(e) {
            var n = [];return n.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, n.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, pt && qe(e) && l.scrollBar && (n.y = e.touches[0].pageY, n.x = e.touches[0].pageX), n;
        }function Zn(e, n) {
            Q(0, "internal"), "undefined" != typeof n && (mt = !0), gn(e.closest(q), e), "undefined" != typeof n && (mt = !1), Q(Et.scrollingSpeed, "internal");
        }function $n(e) {
            var n = o.round(e);if (l.css3 && l.autoScrolling && !l.scrollBar) {
                var t = "translate3d(0px, -" + n + "px, 0px)";Hn(t, !1);
            } else l.autoScrolling && !l.scrollBar ? vt.css("top", -n) : rt.scrollTop(n);
        }function _n(e) {
            return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
        }function et(e, n, t) {
            switch (n) {case "up":
                    bt[t].up = e;break;case "down":
                    bt[t].down = e;break;case "left":
                    bt[t].left = e;break;case "right":
                    bt[t].right = e;break;case "all":
                    "m" == t ? re(e) : le(e);}
        }function nt(n) {
            s(!1, "internal"), re(!1), le(!1), vt.addClass(f), clearTimeout(Tt), clearTimeout(Ct), clearTimeout(xt), clearTimeout(kt), clearTimeout(It), ne.off("scroll", Oe).off("hashchange", on).off("resize", yn), te.off("click touchstart", A + " a").off("mouseenter", A + " li").off("mouseleave", A + " li").off("click touchstart", N).off("mouseover", l.normalScrollElements).off("mouseout", l.normalScrollElements), e(y).off("click touchstart", X), clearTimeout(Tt), clearTimeout(Ct), n && tt();
        }function tt() {
            $n(0), vt.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                e(this).attr("src", e(this).data("src")), e(this).removeAttr("data-src");
            }), e(A + ", " + j + ", " + X).remove(), e(y).css({ height: "", "background-color": "", padding: "" }), e(z).css({ width: "" }), vt.css({ height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), rt.css({ overflow: "", height: "" }), e("html").removeClass(u), lt.removeClass(c), e.each(lt.get(0).className.split(/\s+/), function (e, n) {
                0 === n.indexOf(h) && lt.removeClass(n);
            }), e(y + ", " + z).each(function () {
                l.scrollOverflowHandler.remove(e(this)), e(this).removeClass(W + " " + p);
            }), Cn(vt), vt.find(k + ", " + V + ", " + q).each(function () {
                e(this).replaceWith(this.childNodes);
            }), rt.scrollTop(0);var n = [S, B, F];e.each(n, function (n, t) {
                e("." + t).removeClass(t);
            });
        }function ot(e, n, t) {
            l[e] = n, "internal" !== t && (Et[e] = n);
        }function it() {
            var n = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset"];return e("html").hasClass(u) ? void at("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (l.continuousVertical && (l.loopTop || l.loopBottom) && (l.continuousVertical = !1, at("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), l.scrollBar && l.scrollOverflow && at("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !l.continuousVertical || !l.scrollBar && l.autoScrolling || (l.continuousVertical = !1, at("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), e.each(n, function (e, n) {
                l[n] && at("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + n);
            }), void e.each(l.anchors, function (n, t) {
                var o = te.find("[name]").filter(function () {
                    return e(this).attr("name") && e(this).attr("name").toLowerCase() == t.toLowerCase();
                }),
                    i = te.find("[id]").filter(function () {
                    return e(this).attr("id") && e(this).attr("id").toLowerCase() == t.toLowerCase();
                });(i.length || o.length) && (at("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && at("error", '"' + t + '" is is being used by another element `id` property'), o.length && at("error", '"' + t + '" is is being used by another element `name` property'));
            }));
        }function at(e, n) {
            console && console[e] && console[e]("fullPage: " + n);
        }if (e("html").hasClass(u)) return void it();var rt = e("html, body"),
            lt = e("body"),
            st = e.fn.fullpage;l = e.extend({ menu: !1, anchors: [], lockAnchors: !1, navigation: !1, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: !1, slidesNavigation: !1, slidesNavPosition: "bottom", scrollBar: !1, hybrid: !1, css3: !0, scrollingSpeed: 700, autoScrolling: !0, fitToSection: !0, fitToSectionDelay: 1e3, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: !1, loopTop: !1, loopHorizontal: !0, continuousVertical: !1, continuousHorizontal: !1, scrollHorizontally: !1, interlockedSlides: !1, dragAndMove: !1, offsetSections: !1, resetSliders: !1, fadingEffect: !1, normalScrollElements: null, scrollOverflow: !1, scrollOverflowReset: !1, scrollOverflowHandler: ie, scrollOverflowOptions: null, touchSensitivity: 5, normalScrollElementTouchThreshold: 5, bigSectionsDestination: null, keyboardScrolling: !0, animateAnchor: !0, recordHistory: !0, controlArrows: !0, controlArrowColor: "#fff", verticalCentered: !0, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: !1, sectionSelector: w, slideSelector: R, afterLoad: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, lazyLoading: !0 }, l);var ct,
            dt,
            ft,
            ut = !1,
            ht = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            pt = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            vt = e(this),
            gt = ne.height(),
            mt = !1,
            wt = !0,
            St = !0,
            yt = [],
            bt = {};bt.m = { up: !0, down: !0, left: !0, right: !0 }, bt.k = e.extend(!0, {}, bt.m);var xt,
            Ct,
            Tt,
            kt,
            It,
            Lt,
            Et = e.extend(!0, {}, l);it(), oe.click = pt, oe = e.extend(oe, l.scrollOverflowOptions), e.extend(e.easing, { easeInOutCubic: function easeInOutCubic(e, n, t, o, i) {
                return (n /= i / 2) < 1 ? o / 2 * n * n * n + t : o / 2 * ((n -= 2) * n * n + 2) + t;
            } }), e(this).length && (st.setAutoScrolling = s, st.setRecordHistory = U, st.setScrollingSpeed = Q, st.setFitToSection = Z, st.setLockAnchors = $, st.setMouseWheelScrolling = ae, st.setAllowScrolling = re, st.setKeyboardScrolling = le, st.moveSectionUp = se, st.moveSectionDown = ce, st.silentMoveTo = de, st.moveTo = fe, st.moveSlideRight = ue, st.moveSlideLeft = he, st.reBuild = pe, st.setResponsive = ve, st.destroy = nt, ge(), me());var At = !1,
            Mt = 0,
            Ot = 0,
            Ht = 0,
            Rt = 0,
            Bt = 0,
            zt = new Date().getTime(),
            Dt = 0,
            Pt = 0,
            qt = gt;
    }, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this);
    }, IScroll.prototype.wheelOff = function () {
        this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this);
    });var ie = { refreshId: null, iScrollInstances: [], toggleWheel: function toggleWheel(n) {
            var t = e(b).find(s);t.each(function () {
                var t = e(this).data("iscrollInstance");"undefined" != typeof t && t && (n ? t.wheelOn() : t.wheelOff());
            });
        }, onLeave: function onLeave() {
            ie.toggleWheel(!1);
        }, beforeLeave: function beforeLeave() {
            ie.onLeave();
        }, afterLoad: function afterLoad() {
            ie.toggleWheel(!0);
        }, create: function create(n, t) {
            var o = n.find(s);o.height(t), o.each(function () {
                var n = e(this),
                    t = n.data("iscrollInstance");t && e.each(ie.iScrollInstances, function () {
                    e(this).destroy();
                }), t = new IScroll(n.get(0), oe), ie.iScrollInstances.push(t), t.wheelOff(), n.data("iscrollInstance", t);
            });
        }, isScrolled: function isScrolled(e, n) {
            var t = n.data("iscrollInstance");return t ? "top" === e ? t.y >= 0 && !n.scrollTop() : "bottom" === e ? 0 - t.y + n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight : void 0 : !0;
        }, scrollable: function scrollable(e) {
            return e.find(q).length ? e.find(D).find(s) : e.find(s);
        }, scrollHeight: function scrollHeight(e) {
            return e.find(s).children().first().get(0).scrollHeight;
        }, remove: function remove(e) {
            var n = e.find(s);if (n.length) {
                var t = n.data("iscrollInstance");t.destroy(), n.data("iscrollInstance", null);
            }e.find(s).children().first().children().first().unwrap().unwrap();
        }, update: function update(n, t) {
            clearTimeout(ie.refreshId), ie.refreshId = setTimeout(function () {
                e.each(ie.iScrollInstances, function () {
                    e(this).get(0).refresh();
                });
            }, 150), n.find(s).css("height", t + "px").parent().css("height", t + "px");
        }, wrapContent: function wrapContent() {
            return '<div class="' + l + '"><div class="fp-scroller"></div></div>';
        } };
});
//# sourceMappingURL=fullpage.min.js.map

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
    "use strict";
    var b = window.Slick || {};b = function () {
        function c(c, d) {
            var f,
                e = this;e.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(c), appendDots: a(c), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function customPaging(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
                }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, e.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0);
        }var b = 0;return c;
    }(), b.prototype.activateADA = function () {
        var a = this;a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
    }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
        var e = this;if ("boolean" == typeof c) d = c, c = null;else if (0 > c || c >= e.slideCount) return !1;e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b);
        }), e.$slidesCache = e.$slides, e.reinit();
    }, b.prototype.animateHeight = function () {
        var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({ height: b }, a.options.speed);
        }
    }, b.prototype.animateSlide = function (b, c) {
        var d = {},
            e = this;e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({ animStart: e.currentLeft }).animate({ animStart: b }, { duration: e.options.speed, easing: e.options.easing, step: function step(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
            }, complete: function complete() {
                c && c.call();
            } })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
            e.disableTransition(), c.call();
        }, e.options.speed));
    }, b.prototype.getNavTarget = function () {
        var b = this,
            c = b.options.asNavFor;return c && null !== c && (c = a(c).not(b.$slider)), c;
    }, b.prototype.asNavFor = function (b) {
        var c = this,
            d = c.getNavTarget();null !== d && "object" == (typeof d === 'undefined' ? 'undefined' : _typeof(d)) && d.each(function () {
            var c = a(this).slick("getSlick");c.unslicked || c.slideHandler(b, !0);
        });
    }, b.prototype.applyTransition = function (a) {
        var b = this,
            c = {};b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }, b.prototype.autoPlay = function () {
        var a = this;a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
    }, b.prototype.autoPlayClear = function () {
        var a = this;a.autoPlayTimer && clearInterval(a.autoPlayTimer);
    }, b.prototype.autoPlayIterator = function () {
        var a = this,
            b = a.currentSlide + a.options.slidesToScroll;a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b));
    }, b.prototype.buildArrows = function () {
        var b = this;b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
    }, b.prototype.buildDots = function () {
        var c,
            d,
            b = this;if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) {
                d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            }b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
        }
    }, b.prototype.buildOut = function () {
        var b = this;b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable");
    }, b.prototype.buildRows = function () {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            a = this;if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);g.get(k) && j.appendChild(g.get(k));
                    }i.appendChild(j);
                }e.appendChild(i);
            }a.$slider.empty().append(e), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
        }
    }, b.prototype.checkResponsive = function (b, c) {
        var e,
            f,
            g,
            d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;for (e in d.breakpoints) {
                d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            }null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
        }
    }, b.prototype.changeSlide = function (b, c) {
        var f,
            g,
            h,
            d = this,
            e = a(b.currentTarget);switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);break;case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);break;case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");break;default:
                return;}
    }, b.prototype.checkNavigable = function (a) {
        var c,
            d,
            b = this;if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];else for (var e in c) {
            if (a < c[e]) {
                a = d;break;
            }d = c[e];
        }return a;
    }, b.prototype.cleanUpEvents = function () {
        var b = this;b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }, b.prototype.cleanUpSlideEvents = function () {
        var b = this;b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }, b.prototype.cleanUpRows = function () {
        var b,
            a = this;a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b));
    }, b.prototype.clickHandler = function (a) {
        var b = this;b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
    }, b.prototype.destroy = function (b) {
        var c = this;c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            a(this).attr("style", a(this).data("originalStyling"));
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]);
    }, b.prototype.disableTransition = function (a) {
        var b = this,
            c = {};c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }, b.prototype.fadeSlide = function (a, b) {
        var c = this;c.cssTransitions === !1 ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }), b && setTimeout(function () {
            c.disableTransition(a), b.call();
        }, c.options.speed));
    }, b.prototype.fadeSlideOut = function (a) {
        var b = this;b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
    }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
        var b = this;null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
    }, b.prototype.focusHandler = function () {
        var b = this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
            c.stopImmediatePropagation();var d = a(this);setTimeout(function () {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay());
            }, 0);
        });
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
        var a = this;return a.currentSlide;
    }, b.prototype.getDotCount = function () {
        var a = this,
            b = 0,
            c = 0,
            d = 0;if (a.options.infinite === !0) for (; b < a.slideCount;) {
            ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        } else if (a.options.centerMode === !0) d = a.slideCount;else if (a.options.asNavFor) for (; b < a.slideCount;) {
            ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        } else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);return d - 1;
    }, b.prototype.getLeft = function (a) {
        var c,
            d,
            f,
            b = this,
            e = 0;return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c;
    }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
        var b = this;return b.options[a];
    }, b.prototype.getNavigableIndexes = function () {
        var e,
            a = this,
            b = 0,
            c = 0,
            d = [];for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) {
            d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        }return d;
    }, b.prototype.getSlick = function () {
        return this;
    }, b.prototype.getSlideCount = function () {
        var c,
            d,
            e,
            b = this;return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll;
    }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
        var c = this;c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
    }, b.prototype.init = function (b) {
        var c = this;a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay());
    }, b.prototype.initADA = function () {
        var b = this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
            a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c });
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
            a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c });
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA();
    }, b.prototype.initArrowEvents = function () {
        var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, a.changeSlide));
    }, b.prototype.initDotEvents = function () {
        var b = this;b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }, b.prototype.initSlideEvents = function () {
        var b = this;b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
    }, b.prototype.initializeEvents = function () {
        var b = this;b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }, b.prototype.initUI = function () {
        var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
    }, b.prototype.keyHandler = function (a) {
        var b = this;a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({ data: { message: b.options.rtl === !0 ? "next" : "previous" } }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: b.options.rtl === !0 ? "previous" : "next" } }));
    }, b.prototype.lazyLoad = function () {
        function g(c) {
            a("img[data-lazy]", c).each(function () {
                var c = a(this),
                    d = a(this).attr("data-lazy"),
                    e = document.createElement("img");e.onload = function () {
                    c.animate({ opacity: 0 }, 100, function () {
                        c.attr("src", d).animate({ opacity: 1 }, 200, function () {
                            c.removeAttr("data-lazy").removeClass("slick-loading");
                        }), b.$slider.trigger("lazyLoaded", [b, c, d]);
                    });
                }, e.onerror = function () {
                    c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]);
                }, e.src = d;
            });
        }var c,
            d,
            e,
            f,
            b = this;b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d));
    }, b.prototype.loadSlider = function () {
        var a = this;a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
    }, b.prototype.next = b.prototype.slickNext = function () {
        var a = this;a.changeSlide({ data: { message: "next" } });
    }, b.prototype.orientationChange = function () {
        var a = this;a.checkResponsive(), a.setPosition();
    }, b.prototype.pause = b.prototype.slickPause = function () {
        var a = this;a.autoPlayClear(), a.paused = !0;
    }, b.prototype.play = b.prototype.slickPlay = function () {
        var a = this;a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1;
    }, b.prototype.postSlide = function (a) {
        var b = this;b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA());
    }, b.prototype.prev = b.prototype.slickPrev = function () {
        var a = this;a.changeSlide({ data: { message: "previous" } });
    }, b.prototype.preventDefault = function (a) {
        a.preventDefault();
    }, b.prototype.progressiveLazyLoad = function (b) {
        b = b || 1;var e,
            f,
            g,
            c = this,
            d = a("img[data-lazy]", c.$slider);d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
            e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad();
        }, g.onerror = function () {
            3 > b ? setTimeout(function () {
                c.progressiveLazyLoad(b + 1);
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad());
        }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c]);
    }, b.prototype.refresh = function (b) {
        var d,
            e,
            c = this;e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, { currentSlide: d }), c.init(), b || c.changeSlide({ data: { message: "index", index: d } }, !1);
    }, b.prototype.registerBreakpoints = function () {
        var c,
            d,
            e,
            b = this,
            f = b.options.responsive || null;if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";for (c in f) {
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;) {
                        b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    }b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings;
                }
            }b.breakpoints.sort(function (a, c) {
                return b.options.mobileFirst ? a - c : c - a;
            });
        }
    }, b.prototype.reinit = function () {
        var b = this;b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b]);
    }, b.prototype.resize = function () {
        var b = this;a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
        }, 50));
    }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
        var d = this;return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
    }, b.prototype.setCSS = function (a) {
        var d,
            e,
            b = this,
            c = {};b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)));
    }, b.prototype.setDimensions = function () {
        var a = this;a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
    }, b.prototype.setFade = function () {
        var c,
            b = this;b.$slides.each(function (d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({ position: "relative", right: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 });
        }), b.$slides.eq(b.currentSlide).css({ zIndex: b.options.zIndex - 1, opacity: 1 });
    }, b.prototype.setHeight = function () {
        var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height", b);
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function () {
        var c,
            d,
            e,
            f,
            h,
            b = this,
            g = !1;if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;else if ("multiple" === h) a.each(e, function (a, c) {
            b.options[a] = c;
        });else if ("responsive" === h) for (d in f) {
            if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];else {
                for (c = b.options.responsive.length - 1; c >= 0;) {
                    b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                }b.options.responsive.push(f[d]);
            }
        }g && (b.unload(), b.reinit());
    }, b.prototype.setPosition = function () {
        var a = this;a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
    }, b.prototype.setProps = function () {
        var a = this,
            b = document.body.style;a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1;
    }, b.prototype.setSlideClasses = function (a) {
        var c,
            d,
            e,
            f,
            b = this;d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad();
    }, b.prototype.setupInfinite = function () {
        var c,
            d,
            e,
            b = this;if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) {
                d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            }for (c = 0; e > c; c += 1) {
                d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            }b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                a(this).attr("id", "");
            });
        }
    }, b.prototype.interrupt = function (a) {
        var b = this;a || b.autoPlay(), b.interrupted = a;
    }, b.prototype.selectHandler = function (b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
    }, b.prototype.slideHandler = function (a, b, c) {
        var d,
            e,
            f,
            g,
            j,
            h = null,
            i = this;return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d);
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d);
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
            i.postSlide(e);
        })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
            i.postSlide(e);
        }) : i.postSlide(e))));
    }, b.prototype.startLoad = function () {
        var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading");
    }, b.prototype.swipeDirection = function () {
        var a,
            b,
            c,
            d,
            e = this;return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical";
    }, b.prototype.swipeEnd = function (a) {
        var c,
            d,
            b = this;if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {case "left":case "down":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;break;case "right":case "up":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1;}"vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]));
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {});
    }, b.prototype.swipeHandler = function (a) {
        var b = this;if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {case "start":
                b.swipeStart(a);break;case "move":
                b.swipeMove(a);break;case "end":
                b.swipeEnd(a);}
    }, b.prototype.swipeMove = function (a) {
        var d,
            e,
            f,
            g,
            h,
            b = this;return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0);
    }, b.prototype.swipeStart = function (a) {
        var c,
            b = this;return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0));
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
        var a = this;null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
    }, b.prototype.unload = function () {
        var b = this;a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, b.prototype.unslick = function (a) {
        var b = this;b.$slider.trigger("unslick", [b, a]), b.destroy();
    }, b.prototype.updateArrows = function () {
        var b,
            a = this;b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, b.prototype.updateDots = function () {
        var a = this;null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
    }, b.prototype.visibility = function () {
        var a = this;a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1);
    }, a.fn.slick = function () {
        var f,
            g,
            a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;for (f = 0; e > f; f++) {
            if ("object" == (typeof c === 'undefined' ? 'undefined' : _typeof(c)) || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        }return a;
    };
});
/*!
 * @copyright Copyright (c) 2016 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.1.17
 */
(function () {
    if (window && window.addEventListener) {
        var c = Object.create(null),
            l,
            p,
            a = function a() {
            clearTimeout(p);p = setTimeout(l, 100);
        },
            q = function q() {},
            t = function t() {
            var e;window.addEventListener("resize", a, !1);window.addEventListener("orientationchange", a, !1);window.MutationObserver ? (e = new MutationObserver(a), e.observe(document.documentElement, { childList: !0, subtree: !0, attributes: !0 }), q = function q() {
                try {
                    e.disconnect(), window.removeEventListener("resize", a, !1), window.removeEventListener("orientationchange", a, !1);
                } catch (c) {}
            }) : (document.documentElement.addEventListener("DOMSubtreeModified", a, !1), q = function q() {
                document.documentElement.removeEventListener("DOMSubtreeModified", a, !1);window.removeEventListener("resize", a, !1);window.removeEventListener("orientationchange", a, !1);
            });
        },
            u = function u(e) {
            var c,
                a = location.hostname;if (window.XMLHttpRequest) {
                c = new XMLHttpRequest();var m = document.createElement("a");m.href = e;e = m.hostname;c = void 0 === c.withCredentials && "" !== e && e !== a ? XDomainRequest || void 0 : XMLHttpRequest;
            }return c;
        };
        l = function l() {
            function e() {
                --n;0 === n && t();
            }function a(b) {
                return function () {
                    !0 !== c[b.base] && b.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + b.hash);
                };
            }function l(b) {
                return function () {
                    var c = document.body,
                        a = document.createElement("x");b.onload = null;a.innerHTML = b.responseText;if (a = a.getElementsByTagName("svg")[0]) a.setAttribute("aria-hidden", "true"), a.style.position = "absolute", a.style.width = 0, a.style.height = 0, a.style.overflow = "hidden", c.insertBefore(a, c.firstChild);e();
                };
            }function m(a) {
                return function () {
                    a.onerror = null;a.ontimeout = null;e();
                };
            }var d,
                f,
                g,
                h,
                n = 0,
                b,
                k;q();k = document.getElementsByTagName("use");for (h = 0; h < k.length; h += 1) {
                try {
                    f = k[h].getBoundingClientRect();
                } catch (v) {
                    f = !1;
                }g = k[h].getAttributeNS("http://www.w3.org/1999/xlink", "href").split("#");d = g[0];g = g[1];b = f && 0 === f.left && 0 === f.right && 0 === f.top && 0 === f.bottom;f && 0 === f.width && 0 === f.height && !b ? d.length && (b = c[d], !0 !== b && setTimeout(a({ useEl: k[h], base: d, hash: g }), 0), void 0 === b && (g = u(d), void 0 !== g && (b = new g(), c[d] = b, b.onload = l(b), b.onerror = m(b), b.ontimeout = m(b), b.open("GET", d), b.send(), n += 1))) : b || (void 0 === c[d] ? c[d] = !0 : c[d].onload && (c[d].abort(), c[d].onload = void 0, c[d] = !0));
            }k = "";n += 1;e();
        };window.addEventListener("load", function r() {
            window.removeEventListener("load", r, !1);p = setTimeout(l, 0);
        }, !1);
    }
})();
// ==================================================
// fancyBox v3.0.22
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
!function (t, e, n, o) {
    "use strict";
    function s(t) {
        var e = t.currentTarget,
            o = t.data ? t.data.options : {},
            s = t.data ? t.data.items : [],
            i = "",
            a = 0;t.preventDefault(), t.stopPropagation(), n(e).attr("data-fancybox") && (i = n(e).data("fancybox")), i ? (s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n("[data-fancybox=" + i + "]"), a = s.index(e)) : s = [e], n.fancybox.open(s, o, a);
    }if (!n) return o;var i = { speed: 330, loop: !0, opacity: "auto", margin: [44, 0], gutter: 30, infobar: !0, buttons: !0, slideShow: !0, fullScreen: !0, thumbs: !0, closeBtn: !0, smallBtn: "auto", image: { preload: "auto", protect: !1 }, ajax: { settings: { data: { fancybox: !0 } } }, iframe: { tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>', preload: !0, scrolling: "no", css: {} }, baseClass: "", slideClass: "", baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>', spinnerTpl: '<div class="fancybox-loading"></div>', errorTpl: '<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>', closeTpl: '<button data-fancybox-close class="fancybox-close-small">×</button>', parentEl: "body", touch: !0, keyboard: !0, focus: !0, closeClickOutside: !0, beforeLoad: n.noop, afterLoad: n.noop, beforeMove: n.noop, afterMove: n.noop, onComplete: n.noop, onInit: n.noop, beforeClose: n.noop, afterClose: n.noop, onActivate: n.noop, onDeactivate: n.noop },
        a = n(t),
        r = n(e),
        c = 0,
        l = function l(t) {
        return t && t.hasOwnProperty && t instanceof n;
    },
        u = function () {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (e) {
            t.setTimeout(e, 1e3 / 60);
        };
    }(),
        d = function d(o) {
        var s;return "function" == typeof n && o instanceof n && (o = o[0]), s = o.getBoundingClientRect(), s.bottom > 0 && s.right > 0 && s.left < (t.innerWidth || e.documentElement.clientWidth) && s.top < (t.innerHeight || e.documentElement.clientHeight);
    },
        p = function p(t, o, s) {
        var a = this;a.opts = n.extend(!0, { index: s }, i, o || {}), a.id = a.opts.id || ++c, a.group = [], a.currIndex = parseInt(a.opts.index, 10) || 0, a.prevIndex = null, a.prevPos = null, a.currPos = 0, a.firstRun = null, a.createGroup(t), a.group.length && (a.$lastFocus = n(e.activeElement), a.elems = {}, a.slides = {}, a.init(t));
    };n.extend(p.prototype, { init: function init() {
            var t,
                e,
                o = this;o.scrollTop = a.scrollTop(), o.scrollLeft = a.scrollLeft(), n.fancybox.isTouch || n("html").hasClass("fancybox-enabled") || (t = n("body").width(), n("html").addClass("fancybox-enabled"), t = n("body").width() - t, t > 1 && n('<style id="fancybox-noscroll" type="text/css">').html(".compensate-for-scrollbar, .fancybox-enabled body { margin-right: " + t + "px; }").appendTo("head")), e = n(o.opts.baseTpl).attr("id", "fancybox-container-" + o.id).data("FancyBox", o).addClass(o.opts.baseClass).hide().prependTo(o.opts.parentEl), o.$refs = { container: e, bg: e.find(".fancybox-bg"), controls: e.find(".fancybox-controls"), buttons: e.find(".fancybox-buttons"), slider_wrap: e.find(".fancybox-slider-wrap"), slider: e.find(".fancybox-slider"), caption: e.find(".fancybox-caption") }, o.trigger("onInit"), o.activate(), o.current || o.jumpTo(o.currIndex);
        }, createGroup: function createGroup(t) {
            var e = this,
                s = n.makeArray(t);n.each(s, function (t, s) {
                var i,
                    a,
                    r,
                    c,
                    l,
                    u = {},
                    d = {};n.isPlainObject(s) ? (u = s, d = s.opts || {}) : "object" === n.type(s) && n(s).length ? (i = n(s), a = i.data(), d = "options" in a ? a.options : {}, d = "object" === n.type(d) ? d : {}, u.type = "type" in a ? a.type : d.type, u.src = "src" in a ? a.src : d.src || i.attr("href"), d.width = "width" in a ? a.width : d.width, d.height = "height" in a ? a.height : d.height, d.thumb = "thumb" in a ? a.thumb : d.thumb, d.caption = "caption" in a ? a.caption : d.caption || i.attr("title"), d.selector = "selector" in a ? a.selector : d.selector, d.$orig = i) : u = { type: "html", content: s + "" }, u.opts = n.extend(!0, {}, e.opts, d), r = u.type, c = u.src || "", r || (u.content ? r = "html" : c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? r = "image" : c.match(/\.(pdf)((\?|#).*)?$/i) ? r = "pdf" : "#" === c.charAt(0) && (r = "inline"), u.type = r), u.index = e.group.length, u.opts.$orig && !u.opts.$orig.length && delete u.opts.$orig, !u.opts.$thumb && u.opts.$orig && (u.opts.$thumb = u.opts.$orig.find("img:first")), u.opts.$thumb && !u.opts.$thumb.length && delete u.opts.$thumb, "function" === n.type(e.opts.caption) ? u.opts.caption = e.opts.caption.apply(s, [e, u]) : u.opts.caption = u.opts.caption === o ? "" : u.opts.caption + "", "ajax" === r && (l = c.split(/\s+/, 2), l.length > 1 && (u.src = l.shift(), u.opts.selector = l.shift())), "auto" == u.opts.smallBtn && (n.inArray(r, ["html", "inline", "ajax"]) > -1 ? (u.opts.buttons = !1, u.opts.smallBtn = !0) : u.opts.smallBtn = !1), "pdf" === r && (u.type = "iframe", u.opts.closeBtn = !0, u.opts.smallBtn = !1, u.opts.iframe.preload = !1), u.opts.modal && n.extend(!0, u.opts, { infobar: 0, buttons: 0, keyboard: 0, slideShow: 0, fullScreen: 0, closeClickOutside: 0 }), e.group.push(u);
            });
        }, addEvents: function addEvents() {
            var o = this,
                s = function s() {
                a.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft), o.$refs.slider_wrap.show(), o.update();
            };o.removeEvents(), o.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
                t.stopPropagation(), t.preventDefault(), o.close(t);
            }).on("click.fb-previous", "[data-fancybox-previous]", function (t) {
                t.stopPropagation(), t.preventDefault(), o.previous();
            }).on("click.fb-next", "[data-fancybox-next]", function (t) {
                t.stopPropagation(), t.preventDefault(), o.next();
            }), n(t).on("orientationchange.fb resize.fb", function (t) {
                u(function () {
                    "orientationchange" == t.type ? (o.$refs.slider_wrap.hide(), u(s)) : s();
                });
            }), r.on("focusin.fb", function (t) {
                var e;n.fancybox && (e = n.fancybox.getInstance(), !e || n(t.target).hasClass("fancybox-container") || n.contains(e.$refs.container[0], t.target) || (t.stopPropagation(), e.focus()));
            }), n(e).on("keydown.fb", function (t) {
                var e = o.current,
                    s = t.keyCode || t.which;if (e && e.opts.keyboard && !n(t.target).is("input") && !n(t.target).is("textarea")) {
                    if (8 === s || 27 === s) return t.preventDefault(), void o.close();switch (s) {case 37:case 38:
                            t.preventDefault(), o.previous();break;case 39:case 40:
                            t.preventDefault(), o.next();break;case 80:case 32:
                            t.preventDefault(), o.SlideShow && (t.preventDefault(), o.SlideShow.toggle());break;case 70:
                            o.FullScreen && (t.preventDefault(), o.FullScreen.toggle());break;case 71:
                            o.Thumbs && (t.preventDefault(), o.Thumbs.toggle());}
                }
            });
        }, removeEvents: function removeEvents() {
            a.off("scroll.fb resize.fb orientationchange.fb"), r.off("keydown.fb focusin.fb click.fb-close"), this.$refs.container.off("click.fb-close click.fb-previous click.fb-next");
        }, previous: function previous(t) {
            this.jumpTo(this.currIndex - 1, t);
        }, next: function next(t) {
            this.jumpTo(this.currIndex + 1, t);
        }, jumpTo: function jumpTo(t, e) {
            var n,
                s,
                i,
                a,
                r = this;if (n = r.firstRun = null === r.firstRun, s = i = t = parseInt(t, 10), a = !!r.current && r.current.opts.loop, !r.isAnimating && (s != r.currIndex || n)) {
                if (r.group.length > 1 && a) s %= r.group.length, s = s < 0 ? r.group.length + s : s, 2 == r.group.length ? i = t - r.currIndex + r.currPos : (i = s - r.currIndex + r.currPos, Math.abs(r.currPos - (i + r.group.length)) < Math.abs(r.currPos - i) ? i += r.group.length : Math.abs(r.currPos - (i - r.group.length)) < Math.abs(r.currPos - i) && (i -= r.group.length));else if (!r.group[s]) return void r.update(!1, !1, e);r.current && (r.current.$slide.removeClass("fancybox-slide--current fancybox-slide--complete"), r.updateSlide(r.current, !0)), r.prevIndex = r.currIndex, r.prevPos = r.currPos, r.currIndex = s, r.currPos = i, r.createSlide(i), r.group.length > 1 && ((r.opts.loop || i - 1 >= 0) && r.createSlide(i - 1), (r.opts.loop || i + 1 < r.group.length) && r.createSlide(i + 1)), r.current = r.slides[i], r.current.isMoved = !1, r.current.isComplete = !1, e = parseInt(e === o ? 1.5 * r.current.opts.speed : e, 10), r.trigger("beforeMove"), r.updateControls(), n && (r.current.$slide.addClass("fancybox-slide--current"), r.$refs.container.show(), u(function () {
                    r.$refs.bg.css("transition-duration", r.current.opts.speed + "ms"), r.$refs.container.addClass("fancybox-container--ready");
                })), r.update(!0, !1, n ? 0 : e, function () {
                    r.afterMove();
                }), r.loadSlide(r.current), n && r.current.$ghost || r.preload();
            }
        }, createSlide: function createSlide(t) {
            var e,
                o,
                s = this;o = t % s.group.length, o = o < 0 ? s.group.length + o : o, !s.slides[t] && s.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(s.$refs.slider), s.slides[t] = n.extend(!0, {}, s.group[o], { pos: t, $slide: e, isMoved: !1, isLoaded: !1 }));
        }, zoomInOut: function zoomInOut(t, e, o) {
            var s,
                i,
                a,
                r = this,
                c = r.current,
                l = c.$placeholder,
                p = c.opts.opacity,
                h = c.opts.$thumb,
                f = h ? h.offset() : 0,
                g = c.$slide.offset();return !!(l && c.isMoved && f && d(h)) && !("In" === t && !r.firstRun) && (n.fancybox.stop(l), r.isAnimating = !0, s = { top: f.top - g.top + parseFloat(h.css("border-top-width") || 0), left: f.left - g.left + parseFloat(h.css("border-left-width") || 0), width: h.width(), height: h.height(), scaleX: 1, scaleY: 1 }, "auto" == p && (p = Math.abs(c.width / c.height - s.width / s.height) > .1), "In" === t ? (i = s, a = r.getFitPos(c), a.scaleX = a.width / i.width, a.scaleY = a.height / i.height, p && (i.opacity = .1, a.opacity = 1)) : (i = n.fancybox.getTranslate(l), a = s, c.$ghost && (c.$ghost.show(), c.$image && c.$image.remove()), i.scaleX = i.width / a.width, i.scaleY = i.height / a.height, i.width = a.width, i.height = a.height, p && (a.opacity = 0)), r.updateCursor(a.width, a.height), delete a.width, delete a.height, n.fancybox.setTranslate(l, i), l.show(), r.trigger("beforeZoom" + t), u(function () {
                l.css("transition", "all " + e + "ms"), n.fancybox.setTranslate(l, a), setTimeout(function () {
                    var e;l.css("transition", "none"), e = n.fancybox.getTranslate(l), e.scaleX = 1, e.scaleY = 1, n.fancybox.setTranslate(l, e), r.trigger("afterZoom" + t), o.apply(r), r.isAnimating = !1;
                }, e);
            }), !0);
        }, canPan: function canPan() {
            var t = this,
                e = t.current,
                n = e.$placeholder,
                o = !1;return n && (o = t.getFitPos(e), o = Math.abs(n.width() - o.width) > 1 || Math.abs(n.height() - o.height) > 1), o;
        }, isScaledDown: function isScaledDown() {
            var t = this,
                e = t.current,
                o = e.$placeholder,
                s = !1;return o && (s = n.fancybox.getTranslate(o), s = s.width < e.width || s.height < e.height), s;
        }, scaleToActual: function scaleToActual(t, e, s) {
            var i,
                a,
                r,
                c,
                l,
                u = this,
                d = u.current,
                p = d.$placeholder,
                h = parseInt(d.$slide.width(), 10),
                f = parseInt(d.$slide.height(), 10),
                g = d.width,
                b = d.height;p && (u.isAnimating = !0, t = t === o ? .5 * h : t, e = e === o ? .5 * f : e, i = n.fancybox.getTranslate(p), c = g / i.width, l = b / i.height, a = .5 * h - .5 * g, r = .5 * f - .5 * b, g > h && (a = i.left * c - (t * c - t), a > 0 && (a = 0), a < h - g && (a = h - g)), b > f && (r = i.top * l - (e * l - e), r > 0 && (r = 0), r < f - b && (r = f - b)), u.updateCursor(g, b), n.fancybox.animate(p, null, { top: r, left: a, scaleX: c, scaleY: l }, s || d.opts.speed, function () {
                u.isAnimating = !1;
            }));
        }, scaleToFit: function scaleToFit(t) {
            var e,
                o = this,
                s = o.current,
                i = s.$placeholder;i && (o.isAnimating = !0, e = o.getFitPos(s), o.updateCursor(e.width, e.height), n.fancybox.animate(i, null, { top: e.top, left: e.left, scaleX: e.width / i.width(), scaleY: e.height / i.height() }, t || s.opts.speed, function () {
                o.isAnimating = !1;
            }));
        }, getFitPos: function getFitPos(t) {
            var e,
                o,
                s,
                i,
                r,
                c,
                l,
                u = t.$placeholder || t.$content,
                d = t.width,
                p = t.height,
                h = t.opts.margin;return !(!u || !u.length || !d && !p) && ("number" === n.type(h) && (h = [h, h]), 2 == h.length && (h = [h[0], h[1], h[0], h[1]]), a.width() < 800 && (h = [0, 0, 0, 0]), e = parseInt(t.$slide.width(), 10) - (h[1] + h[3]), o = parseInt(t.$slide.height(), 10) - (h[0] + h[2]), s = Math.min(1, e / d, o / p), c = Math.floor(s * d), l = Math.floor(s * p), i = Math.floor(.5 * (o - l)) + h[0], r = Math.floor(.5 * (e - c)) + h[3], { top: i, left: r, width: c, height: l });
        }, update: function update(t, e, o, s) {
            var i = this,
                a = i.current.pos * Math.floor(i.current.$slide.width()) * -1 - i.current.pos * i.current.opts.gutter;i.isAnimating !== !0 && (o = parseInt(o, 10) || 0, n.fancybox.stop(i.$refs.slider), t === !1 ? i.updateSlide(i.current, e) : n.each(i.slides, function (t, n) {
                i.updateSlide(n, e);
            }), o ? n.fancybox.animate(i.$refs.slider, null, { top: 0, left: a }, o, function () {
                i.current.isMoved = !0, "function" === n.type(s) && s.apply(i);
            }) : (n.fancybox.setTranslate(i.$refs.slider, { top: 0, left: a }), i.current.isMoved = !0, "function" === n.type(s) && s.apply(i)));
        }, updateSlide: function updateSlide(t, e) {
            var o = this,
                s = t.$placeholder;t = t || o.current, t && !o.isClosing && (n.fancybox.setTranslate(t.$slide, { top: 0, left: t.pos * Math.floor(t.$slide.width()) + t.pos * t.opts.gutter }), e !== !1 && s && (n.fancybox.setTranslate(s, o.getFitPos(t)), t.pos === o.currPos && o.updateCursor()), t.$slide.trigger("refresh"), o.trigger("onUpdate", t));
        }, updateCursor: function updateCursor(t, e) {
            var n,
                s = this,
                i = s.$refs.container.removeClass("fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab");!s.isClosing && s.opts.touch && (n = t !== o && e !== o ? t < s.current.width && e < s.current.height : s.isScaledDown(), n ? i.addClass("fancybox-controls--canzoomIn") : s.group.length < 2 ? i.addClass("fancybox-controls--canzoomOut") : i.addClass("fancybox-controls--canGrab"));
        }, loadSlide: function loadSlide(t) {
            var e,
                o,
                s,
                i = this;if (t && !t.isLoaded && !t.isLoading) {
                switch (t.isLoading = !0, i.trigger("beforeLoad", t), e = t.type, o = t.$slide, o.unbind("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass), e) {case "image":
                        i.setImage(t);break;case "iframe":
                        i.setIframe(t);break;case "html":
                        i.setContent(t, t.content);break;case "inline":
                        n(t.src).length ? i.setContent(t, n(t.src)) : i.setError(t);break;case "ajax":
                        i.showLoading(t), s = n.ajax(n.extend({}, t.opts.ajax.settings, { url: t.src, success: function success(e, n) {
                                "success" === n && i.setContent(t, e);
                            }, error: function error(e, n) {
                                e && "abort" !== n && i.setError(t);
                            } })), o.one("onReset", function () {
                            s.abort();
                        });break;default:
                        i.setError(t);}return !0;
            }
        }, setImage: function setImage(t) {
            var e = this;return t.isLoaded && !t.hasError ? void e.afterLoad(t) : (t.$placeholder = n('<div class="fancybox-placeholder"></div>').hide().appendTo(t.$slide), void (t.opts.preload !== !1 && t.opts.width && t.opts.height && (t.opts.thumb || t.opts.$thumb) ? (t.width = t.opts.width, t.height = t.opts.height, t.$ghost = n("<img />").one("load error", function () {
                e.isClosing || (n("<img/>")[0].src = t.src, e.revealImage(t, function () {
                    e.setBigImage(t), e.firstRun && t.index === e.currIndex && e.preload();
                }));
            }).addClass("fancybox-image").appendTo(t.$placeholder).attr("src", t.opts.thumb || t.opts.$thumb.attr("src"))) : e.setBigImage(t)));
        }, setBigImage: function setBigImage(t) {
            var e = this,
                o = n("<img />");t.opts.image.protect && n('<div class="fancybox-spaceball"></div>').appendTo(t.$placeholder), t.$image = o.one("error", function () {
                e.setError(t);
            }).one("load", function () {
                e.isClosing || (t.width = this.naturalWidth, t.height = this.naturalHeight, e.afterLoad(t), t.$ghost && (t.timouts = setTimeout(function () {
                    t.$ghost.hide();
                }, 350)));
            }).addClass("fancybox-image").appendTo(t.$placeholder).attr("src", t.src), o[0].complete ? o.trigger("load") : o[0].error ? o.trigger("error") : t.timouts = setTimeout(function () {
                o[0].complete || t.hasError || e.showLoading(t);
            }, 150);
        }, revealImage: function revealImage(t, e) {
            var o = this;return e = e || n.noop, "image" !== t.type || t.hasError || t.isRevealed === !0 ? void e.apply(o) : (t.isRevealed = !0, void (t.pos === o.currPos && o.zoomInOut("In", t.opts.speed, e) || (t.$ghost && !t.isLoaded && o.updateSlide(t, !0), t.pos === o.currPos ? n.fancybox.animate(t.$placeholder, { opacity: 0 }, { opacity: 1 }, 300, e) : t.$placeholder.show(), e.apply(o))));
        }, setIframe: function setIframe(t) {
            var e,
                s = this,
                i = t.opts.iframe,
                a = t.$slide;t.$content = n('<div class="fancybox-content"></div>').css(i.css).appendTo(a), e = n(i.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr("scrolling", n.fancybox.isTouch ? "auto" : i.scrolling).appendTo(t.$content), i.preload ? (t.$content.addClass("fancybox-tmp"), s.showLoading(t), e.on("load.fb error.fb", function (e) {
                this.isReady = 1, t.$slide.trigger("refresh"), s.afterLoad(t);
            }), a.on("refresh.fb", function () {
                var n,
                    s,
                    a,
                    r,
                    c,
                    l = t.$content;if (1 === e[0].isReady) {
                    try {
                        n = e.contents(), s = n.find("body");
                    } catch (t) {}s && s.length && (i.css.width === o || i.css.height === o) && (a = e[0].contentWindow.document.documentElement.scrollWidth, r = Math.ceil(s.outerWidth(!0) + (l.width() - a)), c = Math.ceil(s.outerHeight(!0)), l.css({ width: i.css.width === o ? r + (l.outerWidth() - l.innerWidth()) : i.css.width, height: i.css.height === o ? c + (l.outerHeight() - l.innerHeight()) : i.css.height })), l.removeClass("fancybox-tmp");
                }
            })) : this.afterLoad(t), e.attr("src", t.src), t.opts.smallBtn && t.$content.prepend(t.opts.closeTpl), a.one("onReset", function () {
                try {
                    n(this).find("iframe").hide().attr("src", "//about:blank");
                } catch (t) {}n(this).empty(), t.isLoaded = !1;
            });
        }, setContent: function setContent(t, e) {
            var o = this;o.isClosing || (o.hideLoading(t), t.$slide.empty(), l(e) && e.parent().length ? (e.data("placeholder") && e.parents(".fancybox-slide").trigger("onReset"), e.data({ placeholder: n("<div></div>").hide().insertAfter(e) }).css("display", "inline-block")) : ("string" === n.type(e) && (e = n("<div>").append(e).contents(), 3 === e[0].nodeType && (e = n("<div>").html(e))), t.opts.selector && (e = n("<div>").html(e).find(t.opts.selector))), t.$slide.one("onReset", function () {
                var o = l(e) ? e.data("placeholder") : 0;o && (e.hide().replaceAll(o), e.data("placeholder", null)), t.hasError || (n(this).empty(), t.isLoaded = !1);
            }), t.$content = n(e).appendTo(t.$slide), t.opts.smallBtn === !0 && t.$content.find(".fancybox-close-small").remove().end().eq(0).append(t.opts.closeTpl), this.afterLoad(t));
        }, setError: function setError(t) {
            t.hasError = !0, this.setContent(t, t.opts.errorTpl);
        }, showLoading: function showLoading(t) {
            var e = this;t = t || e.current, t && !t.$spinner && (t.$spinner = n(e.opts.spinnerTpl).appendTo(t.$slide));
        }, hideLoading: function hideLoading(t) {
            var e = this;t = t || e.current, t && t.$spinner && (t.$spinner.remove(), delete t.$spinner);
        }, afterMove: function afterMove() {
            var t = this,
                e = t.current,
                o = {};e && (e.$slide.siblings().trigger("onReset"), n.each(t.slides, function (e, n) {
                n.pos >= t.currPos - 1 && n.pos <= t.currPos + 1 ? o[n.pos] = n : n && n.$slide.remove();
            }), t.slides = o, t.trigger("afterMove"), e.isLoaded && t.complete());
        }, afterLoad: function afterLoad(t) {
            var e = this;e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.$ghost || e.updateSlide(t, !0), t.index === e.currIndex && t.isMoved ? e.complete() : t.$ghost || e.revealImage(t));
        }, complete: function complete() {
            var t = this,
                e = t.current;t.revealImage(e, function () {
                e.isComplete = !0, e.$slide.addClass("fancybox-slide--complete"), t.updateCursor(), t.trigger("onComplete"), e.opts.focus && t.focus();
            });
        }, preload: function preload() {
            var t,
                e,
                n = this;n.group.length < 2 || (t = n.slides[n.currPos + 1], e = n.slides[n.currPos - 1], t && "image" === t.type && n.loadSlide(t), e && "image" === e.type && n.loadSlide(e));
        }, focus: function focus() {
            var t = this.current && this.current.isComplete ? this.current.$slide.find('button,:input,[tabindex],a:not(".disabled")').filter(":visible:first") : null;t && t.length || (t = this.$refs.container), t.focus(), this.$refs.slider_wrap.scrollLeft(0), this.current && this.current.$slide.scrollTop(0);
        }, activate: function activate() {
            var t = this;n(".fancybox-container").each(function () {
                var e = n(this).data("FancyBox");e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate");
            }), t.current && (t.$refs.container.index() > 0 && t.$refs.container.prependTo(e.body), t.updateControls()), t.trigger("onActivate"), t.addEvents();
        }, close: function close(t) {
            var e = this,
                o = e.current,
                s = o.opts.speed,
                i = n.proxy(function () {
                e.cleanUp(t);
            }, this);return !e.isAnimating && !e.isClosing && (e.isClosing = !0, o.timouts && clearTimeout(o.timouts), t !== !0 && n.fancybox.stop(e.$refs.slider), e.$refs.container.removeClass("fancybox-container--active").addClass("fancybox-container--closing"), o.$slide.removeClass("fancybox-slide--complete").siblings().remove(), o.isMoved || o.$slide.css("overflow", "visible"), e.removeEvents(), e.hideLoading(o), e.hideControls(), e.updateCursor(), e.trigger("beforeClose", o, t), e.$refs.bg.css("transition-duration", s + "ms"), this.$refs.container.removeClass("fancybox-container--ready"), void (t === !0 ? setTimeout(i, s) : e.zoomInOut("Out", s, i) || n.fancybox.animate(e.$refs.container, null, { opacity: 0 }, s, "easeInSine", i)));
        }, cleanUp: function cleanUp(t) {
            var e,
                o = this;o.$refs.slider.children().trigger("onReset"), o.$refs.container.empty().remove(), o.current = null, o.trigger("afterClose", t), e = n.fancybox.getInstance(), e ? e.activate() : (n("html").removeClass("fancybox-enabled"), n("#fancybox-noscroll").remove()), o.$lastFocus && o.$lastFocus.focus(), a.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft);
        }, trigger: function trigger(t, e) {
            var o = Array.prototype.slice.call(arguments, 1),
                s = this,
                i = e && e.opts ? e : s.current;i ? o.unshift(i) : i = s, o.unshift(s), n.isFunction(i.opts[t]) && i.opts[t].apply(i, o), s.$refs.container.trigger(t + ".fb", o);
        }, toggleControls: function toggleControls(t) {
            this.isHiddenControls ? this.updateControls(t) : this.hideControls();
        }, hideControls: function hideControls() {
            this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-controls"), this.$refs.container.removeClass("fancybox-show-caption");
        }, updateControls: function updateControls(t) {
            var e = this,
                o = e.$refs.container,
                s = e.$refs.caption,
                i = e.current,
                a = i.index,
                r = i.opts,
                c = r.caption;this.isHiddenControls && t !== !0 || (this.isHiddenControls = !1, e.$refs.container.addClass("fancybox-show-controls"), o.toggleClass("fancybox-show-infobar", !!r.infobar && e.group.length > 1).toggleClass("fancybox-show-buttons", !!r.buttons).toggleClass("fancybox-is-modal", !!r.modal), n(".fancybox-button--left", o).toggleClass("fancybox-button--disabled", !r.loop && a <= 0), n(".fancybox-button--right", o).toggleClass("fancybox-button--disabled", !r.loop && a >= e.group.length - 1), n(".fancybox-button--play", o).toggle(!!(r.slideShow && e.group.length > 1)), n(".fancybox-button--close", o).toggle(!!r.closeBtn), n(".js-fancybox-count", o).html(e.group.length), n(".js-fancybox-index", o).html(a + 1), i.$slide.trigger("refresh"), s && s.empty(), c && c.length ? (s.html(c), this.$refs.container.addClass("fancybox-show-caption "), e.$caption = s) : this.$refs.container.removeClass("fancybox-show-caption"));
        } }), n.fancybox = { version: "3.0.22", defaults: i, getInstance: function getInstance(t) {
            var e = n('.fancybox-container:not(".fancybox-container--closing"):first').data("FancyBox"),
                o = Array.prototype.slice.call(arguments, 1);return e instanceof p && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e);
        }, open: function open(t, e, n) {
            return new p(t, e, n);
        }, close: function close(t) {
            var e = this.getInstance();e && (e.close(), t === !0 && this.close());
        }, isTouch: e.createTouch !== o && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent), use3d: function () {
            var n = e.createElement("div");return t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode <= 11);
        }(), getTranslate: function getTranslate(t) {
            var e, n;return !(!t || !t.length) && (e = t.get(0).getBoundingClientRect(), n = t.eq(0).css("transform"), n && n.indexOf("matrix") !== -1 ? (n = n.split("(")[1], n = n.split(")")[0], n = n.split(",")) : n = [], n.length ? (n = n.length > 10 ? [n[13], n[12], n[0], n[5]] : [n[5], n[4], n[0], n[3]], n = n.map(parseFloat)) : n = [0, 0, 1, 1], { top: n[0], left: n[1], scaleX: n[2], scaleY: n[3], opacity: parseFloat(t.css("opacity")), width: e.width, height: e.height });
        }, setTranslate: function setTranslate(t, e) {
            var n = "",
                s = {};if (t && e) return e.left === o && e.top === o || (n = (e.left === o ? t.position().top : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== o && e.scaleY !== o && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (s.transform = n), e.opacity !== o && (s.opacity = e.opacity), e.width !== o && (s.width = e.width), e.height !== o && (s.height = e.height), t.css(s);
        }, easing: { easeOutCubic: function easeOutCubic(t, e, n, o) {
                return n * ((t = t / o - 1) * t * t + 1) + e;
            }, easeInCubic: function easeInCubic(t, e, n, o) {
                return n * (t /= o) * t * t + e;
            }, easeOutSine: function easeOutSine(t, e, n, o) {
                return n * Math.sin(t / o * (Math.PI / 2)) + e;
            }, easeInSine: function easeInSine(t, e, n, o) {
                return -n * Math.cos(t / o * (Math.PI / 2)) + n + e;
            } }, stop: function stop(t) {
            t.removeData("animateID");
        }, animate: function animate(t, e, s, i, a, r) {
            var c,
                l,
                d,
                p = this,
                h = null,
                f = 0,
                g = function g(n) {
                if (c = [], l = 0, t.length && t.data("animateID") === d) {
                    if (n = n || Date.now(), h && (l = n - h), h = n, f += l, f >= i) return s.scaleX !== o && s.scaleY !== o && e.width !== o && e.height !== o && (s.width = e.width * s.scaleX, s.height = e.height * s.scaleY, s.scaleX = 1, s.scaleY = 1), p.setTranslate(t, s), void r();for (var b in s) {
                        s.hasOwnProperty(b) && e[b] !== o && (e[b] == s[b] ? c[b] = s[b] : c[b] = p.easing[a](f, e[b], s[b] - e[b], i));
                    }p.setTranslate(t, c), u(g);
                }
            };return p.animateID = d = p.animateID === o ? 1 : p.animateID + 1, t.data("animateID", d), r === o && "function" == n.type(a) && (r = a, a = o), a || (a = "easeOutCubic"), r = r || n.noop, i ? (e ? this.setTranslate(t, e) : e = this.getTranslate(t), t.show(), void u(g)) : (this.setTranslate(t, s), void r());
        } }, n.fn.fancybox = function (t) {
        return this.off("click.fb-start").on("click.fb-start", { items: this, options: t || {} }, s), this;
    }, n(e).on("click.fb-start", "[data-fancybox]", s);
}(window, document, window.jQuery), function (t) {
    "use strict";
    var e = function e(_e2, n, o) {
        if (_e2) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function (t, n) {
            _e2 = _e2.replace("$" + t, n || "");
        }), o.length && (_e2 += (_e2.indexOf("?") > 0 ? "&" : "?") + o), _e2;
    },
        n = { youtube: { matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i, params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 }, paramPlace: 8, type: "iframe", url: "//www.youtube.com/embed/$4", thumb: "//img.youtube.com/vi/$4/hqdefault.jpg" }, vimeo: { matcher: /((player\.)?vimeo(pro)?\.com)\/(video\/)?([\d]+)?(\?(.*))?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1, api: 1 }, paramPlace: 7, type: "iframe", url: "//player.vimeo.com/video/$5" }, metacafe: { matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/, type: "iframe", url: "//www.metacafe.com/embed/$1/?ap=1" }, dailymotion: { matcher: /dailymotion.com\/video\/(.*)\/?(.*)/, params: { additionalInfos: 0, autoStart: 1 }, type: "iframe", url: "//www.dailymotion.com/embed/video/$1" }, vine: { matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/, type: "iframe", url: "//vine.co/v/$1/embed/simple" }, instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" }, google_maps: { matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i, type: "iframe", url: function url(t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
            } } };t(document).on("onInit.fb", function (o, s) {
        t.each(s.group, function (o, s) {
            var i,
                a,
                r,
                c,
                l,
                u,
                d,
                p = s.src || "",
                h = !1;s.type || (t.each(n, function (n, o) {
                if (a = p.match(o.matcher), l = {}, d = n, a) {
                    if (h = o.type, o.paramPlace && a[o.paramPlace]) {
                        c = a[o.paramPlace], "?" == c[0] && (c = c.substring(1)), c = c.split("&");for (var f = 0; f < c.length; ++f) {
                            var g = c[f].split("=", 2);2 == g.length && (l[g[0]] = decodeURIComponent(g[1].replace(/\+/g, " ")));
                        }
                    }return o.idPlace && (u = a[o.idPlace]), r = t.extend(!0, {}, o.params, s.opts[n], l), p = "function" === t.type(o.url) ? o.url.call(this, a, r, s) : e(o.url, a, r), i = "function" === t.type(o.thumb) ? o.thumb.call(this, a, r, s) : e(o.thumb, a), !1;
                }
            }), h ? (s.src = p, s.type = h, s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = i), u && (s.opts.id = d + "-" + u), "iframe" === h && (t.extend(!0, s.opts, { iframe: { preload: !1, scrolling: "no" }, smallBtn: !1, closeBtn: !0, fullScreen: !1, slideShow: !1 }), s.opts.slideClass += " fancybox-slide--video")) : s.type = "iframe");
        });
    });
}(window.jQuery), function (t, e, n) {
    "use strict";
    var o = function () {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (e) {
            t.setTimeout(e, 1e3 / 60);
        };
    }(),
        s = function s(e) {
        var n = [];e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];for (var o in e) {
            e[o].pageX ? n.push({ x: e[o].pageX, y: e[o].pageY }) : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
        }return n;
    },
        i = function i(t, e, n) {
        return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0;
    },
        a = function a(t) {
        return t.is("a") || t.is("button") || t.is("input") || t.is("select") || t.is("textarea") || n.isFunction(t.get(0).onclick);
    },
        r = function r(e) {
        var n = t.getComputedStyle(e)["overflow-y"],
            o = t.getComputedStyle(e)["overflow-x"],
            s = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
            i = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;return s || i;
    },
        c = function c(t) {
        for (var e = !1;;) {
            if (e = r(t.get(0))) break;if (t = t.parent(), !t.length || t.hasClass("fancybox-slider") || t.is("body")) break;
        }return e;
    },
        l = function l(t) {
        var e = this;e.instance = t, e.$wrap = t.$refs.slider_wrap, e.$slider = t.$refs.slider, e.$container = t.$refs.container, e.destroy(), e.$wrap.on("touchstart.fb mousedown.fb", n.proxy(e, "ontouchstart"));
    };l.prototype.destroy = function () {
        this.$wrap.off("touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb");
    }, l.prototype.ontouchstart = function (e) {
        var o = this,
            r = n(e.target),
            l = o.instance,
            u = l.current,
            d = u.$content || u.$placeholder;a(r) || a(r.parent()) || c(r) && !r.hasClass("fancybox-slide") || (e.stopPropagation(), e.preventDefault(), !u || o.instance.isAnimating || o.instance.isClosing || (o.startPoints = s(e), !o.startPoints || o.startPoints.length > 1 && !u.isMoved || (o.$wrap.off("touchmove.fb mousemove.fb", n.proxy(o, "ontouchmove")), o.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", n.proxy(o, "ontouchend")), o.$wrap.on("touchmove.fb mousemove.fb", n.proxy(o, "ontouchmove")), o.$wrap.on("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", n.proxy(o, "ontouchend")), o.$target = r, o.$content = d, o.startTime = new Date().getTime(), o.distanceX = o.distanceY = o.distance = 0, o.canvasWidth = Math.round(u.$slide.width()), o.canvasHeight = Math.round(u.$slide.height()), o.canTap = !1, o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.sliderStartPos = n.fancybox.getTranslate(o.$slider), o.contentStartPos = n.fancybox.getTranslate(o.$content), o.contentLastPos = null, 1 !== o.startPoints.length || o.isZooming || (o.canTap = u.isMoved, "image" === u.type && (o.contentStartPos.width > o.canvasWidth + 1 || o.contentStartPos.height > o.canvasHeight + 1) ? (n.fancybox.stop(o.$content), o.isPanning = !0) : (n.fancybox.stop(o.$slider), o.isSwiping = !0), o.$container.addClass("fancybox-controls--isGrabbing")), 2 === o.startPoints.length && u.isMoved && !u.hasError && "image" === u.type && (u.isLoaded || u.$ghost) && (o.isZooming = !0, o.isSwiping = !1, o.isPanning = !1, n.fancybox.stop(o.$content), o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - n(t).scrollLeft(), o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - n(t).scrollTop(), o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, o.startDistanceBetweenFingers = i(o.startPoints[0], o.startPoints[1])))));
    }, l.prototype.ontouchmove = function (t) {
        var e = this;t.preventDefault(), e.newPoints = s(t), e.newPoints && e.newPoints.length && (e.distanceX = i(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = i(e.newPoints[0], e.startPoints[0], "y"), e.distance = i(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()));
    }, l.prototype.onSwipe = function () {
        var e,
            s = this,
            i = s.isSwiping,
            a = s.sliderStartPos.left;i === !0 ? Math.abs(s.distance) > 10 && (s.instance.group.length < 2 ? s.isSwiping = "y" : !s.instance.current.isMoved || s.instance.opts.touch.vertical === !1 || "auto" === s.instance.opts.touch.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = e > 45 && e < 135 ? "y" : "x"), s.canTap = !1, s.instance.current.isMoved = !1, s.startPoints = s.newPoints) : ("x" == i && (!s.instance.current.opts.loop && 0 === s.instance.current.index && s.distanceX > 0 ? a += Math.pow(s.distanceX, .8) : !s.instance.current.opts.loop && s.instance.current.index === s.instance.group.length - 1 && s.distanceX < 0 ? a -= Math.pow(-s.distanceX, .8) : a += s.distanceX), s.sliderLastPos = { top: "x" == i ? 0 : s.sliderStartPos.top + s.distanceY, left: a }, o(function () {
            n.fancybox.setTranslate(s.$slider, s.sliderLastPos);
        }));
    }, l.prototype.onPan = function () {
        var t,
            e,
            s,
            i = this;i.canTap = !1, t = i.contentStartPos.width > i.canvasWidth ? i.contentStartPos.left + i.distanceX : i.contentStartPos.left, e = i.contentStartPos.top + i.distanceY, s = i.limitMovement(t, e, i.contentStartPos.width, i.contentStartPos.height), s.scaleX = i.contentStartPos.scaleX, s.scaleY = i.contentStartPos.scaleY, i.contentLastPos = s, o(function () {
            n.fancybox.setTranslate(i.$content, i.contentLastPos);
        });
    }, l.prototype.limitMovement = function (t, e, n, o) {
        var s,
            i,
            a,
            r,
            c = this,
            l = c.canvasWidth,
            u = c.canvasHeight,
            d = c.contentStartPos.left,
            p = c.contentStartPos.top,
            h = c.distanceX,
            f = c.distanceY;return s = Math.max(0, .5 * l - .5 * n), i = Math.max(0, .5 * u - .5 * o), a = Math.min(l - n, .5 * l - .5 * n), r = Math.min(u - o, .5 * u - .5 * o), n > l && (h > 0 && t > s && (t = s - 1 + Math.pow(-s + d + h, .8) || 0), h < 0 && t < a && (t = a + 1 - Math.pow(a - d - h, .8) || 0)), o > u && (f > 0 && e > i && (e = i - 1 + Math.pow(-i + p + f, .8) || 0), f < 0 && e < r && (e = r + 1 - Math.pow(r - p - f, .8) || 0)), { top: e, left: t };
    }, l.prototype.limitPosition = function (t, e, n, o) {
        var s = this,
            i = s.canvasWidth,
            a = s.canvasHeight;return n > i ? (t = t > 0 ? 0 : t, t = t < i - n ? i - n : t) : t = Math.max(0, i / 2 - n / 2), o > a ? (e = e > 0 ? 0 : e, e = e < a - o ? a - o : e) : e = Math.max(0, a / 2 - o / 2), { top: e, left: t };
    }, l.prototype.onZoom = function () {
        var e = this,
            s = e.contentStartPos.width,
            a = e.contentStartPos.height,
            r = e.contentStartPos.left,
            c = e.contentStartPos.top,
            l = i(e.newPoints[0], e.newPoints[1]),
            u = l / e.startDistanceBetweenFingers,
            d = Math.floor(s * u),
            p = Math.floor(a * u),
            h = (s - d) * e.percentageOfImageAtPinchPointX,
            f = (a - p) * e.percentageOfImageAtPinchPointY,
            g = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            b = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            m = g - e.centerPointStartX,
            y = b - e.centerPointStartY,
            v = r + (h + m),
            x = c + (f + y),
            w = { top: x, left: v, scaleX: e.contentStartPos.scaleX * u, scaleY: e.contentStartPos.scaleY * u };e.canTap = !1, e.newWidth = d, e.newHeight = p, e.contentLastPos = w, o(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos);
        });
    }, l.prototype.ontouchend = function (t) {
        var e = this,
            o = e.instance.current,
            i = Math.max(new Date().getTime() - e.startTime, 1),
            a = e.isSwiping,
            r = e.isPanning,
            c = e.isZooming;return e.endPoints = s(t), e.$container.removeClass("fancybox-controls--isGrabbing"), e.$wrap.off("touchmove.fb mousemove.fb", n.proxy(this, "ontouchmove")), e.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", n.proxy(this, "ontouchend")), e.isSwiping = !1, e.isPanning = !1, e.isZooming = !1, e.canTap ? e.ontap() : (e.velocityX = e.distanceX / i * .5, e.velocityY = e.distanceY / i * .5, e.speed = o.opts.speed, e.speedX = Math.max(.75 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityX) * e.speed)), e.speedY = Math.max(.75 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityY) * e.speed)), void (r ? e.endPanning() : c ? e.endZooming() : e.endSwiping(a)));
    }, l.prototype.endSwiping = function (t) {
        var e = this;"y" == t && Math.abs(e.distanceY) > 50 ? (n.fancybox.animate(e.$slider, null, { top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY, left: e.sliderStartPos.left, opacity: 0 }, e.speedY), e.instance.close(!0)) : "x" == t && e.distanceX > 50 ? e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 ? e.instance.next(e.speedX) : e.instance.update(!1, !0, Math.abs(e.distance) * e.speed / 50);
    }, l.prototype.endPanning = function () {
        var t,
            e,
            o,
            s = this;s.contentLastPos && (t = s.contentLastPos.left + s.velocityX * s.speed * 2, e = s.contentLastPos.top + s.velocityY * s.speed * 2, o = s.limitPosition(t, e, s.contentStartPos.width, s.contentStartPos.height), o.width = s.contentStartPos.width, o.height = s.contentStartPos.height, n.fancybox.animate(s.$content, null, o, s.speed, "easeOutSine"));
    }, l.prototype.endZooming = function () {
        var t,
            e,
            o,
            s,
            i = this,
            a = i.instance.current,
            r = i.newWidth,
            c = i.newHeight;i.contentLastPos && (t = i.contentLastPos.left, e = i.contentLastPos.top, s = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }, n.fancybox.setTranslate(i.$content, s), r < i.canvasWidth && c < i.canvasHeight ? i.instance.scaleToFit(150) : r > a.width || c > a.height ? i.instance.scaleToActual(i.centerPointStartX, i.centerPointStartY, 150) : (o = i.limitPosition(t, e, r, c), n.fancybox.animate(i.$content, null, o, i.speed, "easeOutSine")));
    }, l.prototype.ontap = function () {
        var t = this,
            e = t.instance,
            o = e.current,
            s = t.endPoints[0].x,
            i = t.endPoints[0].y;if (s -= t.$wrap.offset().left, i -= t.$wrap.offset().top, !n.fancybox.isTouch) return o.opts.closeClickOutside && t.$target.is(".fancybox-slide") ? void e.close() : void ("image" == o.type && o.isMoved && (e.canPan() ? e.scaleToFit() : e.isScaledDown() ? e.scaleToActual(s, i) : e.group.length < 2 && e.close()));if (t.tapped) {
            if (clearTimeout(t.tapped), t.tapped = null, Math.abs(s - t.x) > 50 || Math.abs(i - t.y) > 50 || !o.isMoved) return this;"image" == o.type && (o.isLoaded || o.$ghost) && (e.canPan() ? e.scaleToFit() : e.isScaledDown() && e.scaleToActual(s, i));
        } else t.x = s, t.y = i, t.tapped = setTimeout(function () {
            t.tapped = null, e.toggleControls(!0);
        }, 300);return this;
    }, n(e).on("onActivate.fb", function (t, e) {
        e.opts.touch && !e.Guestures && (e.Guestures = new l(e));
    }), n(e).on("beforeClose.fb", function (t, e) {
        e.Guestures && e.Guestures.destroy();
    });
}(window, document, window.jQuery), function (t, e) {
    "use strict";
    var n = function n(t) {
        this.instance = t, this.init();
    };e.extend(n.prototype, { timer: null, speed: 3e3, $button: null, init: function init() {
            var t = this;t.$button = e('<button data-fancybox-play class="fancybox-button fancybox-button--play" title="Slideshow (P)"></button>').appendTo(t.instance.$refs.buttons), t.instance.$refs.container.on("click", "[data-fancybox-play]", function () {
                t.toggle();
            });
        }, set: function set() {
            var t = this;t.instance && t.instance.current && t.instance.currIndex < t.instance.group.length - 1 ? t.timer = setTimeout(function () {
                t.instance.next();
            }, t.speed) : t.stop();
        }, clear: function clear() {
            var t = this;clearTimeout(t.timer), t.timer = null;
        }, start: function start() {
            var t = this;t.stop(), t.instance && t.instance.current && t.instance.currIndex < t.instance.group.length - 1 && (t.instance.$refs.container.on({ "beforeLoad.fb.player": e.proxy(t, "clear"), "onComplete.fb.player": e.proxy(t, "set") }), t.instance.current.isComplete ? t.set() : t.timer = !0, t.instance.$refs.container.trigger("onPlayStart"), t.$button.addClass("fancybox-button--pause"));
        }, stop: function stop() {
            var t = this;t.clear(), t.instance.$refs.container.trigger("onPlayEnd").off(".player"), t.$button.removeClass("fancybox-button--pause");
        }, toggle: function toggle() {
            var t = this;t.timer ? t.stop() : t.start();
        } }), e(t).on("onInit.fb", function (t, e) {
        e.opts.slideShow && !e.SlideShow && e.group.length > 1 && (e.SlideShow = new n(e));
    }), e(t).on("beforeClose.fb onDeactivate.fb", function (t, e) {
        e.SlideShow && e.SlideShow.stop();
    });
}(document, window.jQuery), function (t, e) {
    "use strict";
    var n = function n(t) {
        this.instance = t, this.init();
    };e.extend(n.prototype, { $button: null, init: function init() {
            var n = this;n.isAvailable() && (n.$button = e('<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="Full screen (F)"></button>').appendTo(n.instance.$refs.buttons), n.instance.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                t.stopPropagation(), t.preventDefault(), n.toggle();
            }), e(t).on("onUpdate.fb", function (t, e) {
                n.$button.toggle(!!e.current.opts.fullScreen), n.$button.toggleClass("fancybox-button-shrink", n.isActivated());
            }), e(t).on("afterClose.fb", function () {
                n.exit();
            }));
        }, isAvailable: function isAvailable() {
            var t = this.instance.$refs.container.get(0);return !!(t.requestFullscreen || t.msRequestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullscreen);
        }, isActivated: function isActivated() {
            return !!(t.fullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement || t.msFullscreenElement);
        }, launch: function launch() {
            var t = this.instance.$refs.container.get(0);t && !this.instance.isClosing && (t.requestFullscreen ? t.requestFullscreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen(t.ALLOW_KEYBOARD_INPUT));
        }, exit: function exit() {
            t.exitFullscreen ? t.exitFullscreen() : t.msExitFullscreen ? t.msExitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen && t.webkitExitFullscreen();
        }, toggle: function toggle() {
            this.isActivated() ? this.exit() : this.isAvailable() && this.launch();
        } }), e(t).on("onInit.fb", function (t, e) {
        e.opts.fullScreen && !e.FullScreen && (e.FullScreen = new n(e));
    });
}(document, window.jQuery), function (t, e) {
    "use strict";
    var n = function n(t) {
        this.instance = t, this.init();
    };e.extend(n.prototype, { $button: null, $grid: null, $list: null, isVisible: !1, init: function init() {
            var t = this;t.$button = e('<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="Thumbnails (G)"></button>').appendTo(this.instance.$refs.buttons).on("touchend click", function (e) {
                e.stopPropagation(), e.preventDefault(), t.toggle();
            });
        }, create: function create() {
            var t,
                n,
                o = this.instance;this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(o.$refs.container), t = "<ul>", e.each(o.group, function (e, o) {
                n = o.opts.thumb || (o.opts.$thumb ? o.opts.$thumb.attr("src") : null), n || "image" !== o.type || (n = o.src), n && n.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>');
            }), t += "</ul>", this.$list = e(t).appendTo(this.$grid).on("click touchstart", "li", function () {
                o.jumpTo(e(this).data("index"));
            }), this.$list.find("img").hide().one("load", function () {
                var t,
                    n,
                    o,
                    s,
                    i = e(this).parent().removeClass("fancybox-thumbs-loading"),
                    a = i.outerWidth(),
                    r = i.outerHeight();t = this.naturalWidth || this.width, n = this.naturalHeight || this.height, o = t / a, s = n / r, o >= 1 && s >= 1 && (o > s ? (t /= s, n = r) : (t = a, n /= o)), e(this).css({ width: Math.floor(t), height: Math.floor(n), "margin-top": Math.min(0, Math.floor(.3 * r - .3 * n)), "margin-left": Math.min(0, Math.floor(.5 * a - .5 * t)) }).show();
            }).each(function () {
                this.src = e(this).data("src");
            });
        }, focus: function focus() {
            this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus();
        }, close: function close() {
            this.$grid.hide();
        }, update: function update() {
            this.instance.$refs.container.toggleClass("fancybox-container--thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.$grid.show(), this.focus()) : this.$grid && this.$grid.hide(), this.instance.update();
        }, hide: function hide() {
            this.isVisible = !1, this.update();
        }, show: function show() {
            this.isVisible = !0, this.update();
        }, toggle: function toggle() {
            this.isVisible ? this.hide() : this.show();
        } }), e(t).on("onInit.fb", function (t, e) {
        e.opts.thumbs && !e.Thumbs && e.group.length > 1 && ("image" == e.group[0].type || e.group[0].opts.thumb) && ("image" == e.group[1].type || e.group[1].opts.thumb) && (e.Thumbs = new n(e));
    }), e(t).on("beforeMove.fb", function (t, e, n) {
        var o = e.Thumbs;o && (n.modal ? (o.$button.hide(), o.hide()) : (e.opts.thumbs.showOnStart === !0 && e.firstRun && o.show(), o.$button.show(), o.isVisible && o.focus()));
    }), e(t).on("beforeClose.fb", function (t, e) {
        e.Thumbs && e.Thumbs.isVisible && e.opts.thumbs.hideOnClosing !== !1 && e.Thumbs.close(), e.Thumbs = null;
    });
}(document, window.jQuery);
/*! flipclock 2015-08-31 */
var Base = function Base() {};Base.extend = function (a, b) {
    "use strict";
    var c = Base.prototype.extend;Base._prototyping = !0;var d = new this();c.call(d, a), d.base = function () {}, delete Base._prototyping;var e = d.constructor,
        f = d.constructor = function () {
        if (!Base._prototyping) if (this._constructing || this.constructor == f) this._constructing = !0, e.apply(this, arguments), delete this._constructing;else if (null !== arguments[0]) return (arguments[0].extend || c).call(arguments[0], d);
    };return f.ancestor = this, f.extend = this.extend, f.forEach = this.forEach, f.implement = this.implement, f.prototype = d, f.toString = this.toString, f.valueOf = function (a) {
        return "object" == a ? f : e.valueOf();
    }, c.call(f, b), "function" == typeof f.init && f.init(), f;
}, Base.prototype = { extend: function extend(a, b) {
        if (arguments.length > 1) {
            var c = this[a];if (c && "function" == typeof b && (!c.valueOf || c.valueOf() != b.valueOf()) && /\bbase\b/.test(b)) {
                var d = b.valueOf();b = function b() {
                    var a = this.base || Base.prototype.base;this.base = c;var b = d.apply(this, arguments);return this.base = a, b;
                }, b.valueOf = function (a) {
                    return "object" == a ? b : d;
                }, b.toString = Base.toString;
            }this[a] = b;
        } else if (a) {
            var e = Base.prototype.extend;Base._prototyping || "function" == typeof this || (e = this.extend || e);for (var f = { toSource: null }, g = ["constructor", "toString", "valueOf"], h = Base._prototyping ? 0 : 1; i = g[h++];) {
                a[i] != f[i] && e.call(this, i, a[i]);
            }for (var i in a) {
                f[i] || e.call(this, i, a[i]);
            }
        }return this;
    } }, Base = Base.extend({ constructor: function constructor() {
        this.extend(arguments[0]);
    } }, { ancestor: Object, version: "1.1", forEach: function forEach(a, b, c) {
        for (var d in a) {
            void 0 === this.prototype[d] && b.call(c, a[d], d, a);
        }
    }, implement: function implement() {
        for (var a = 0; a < arguments.length; a++) {
            "function" == typeof arguments[a] ? arguments[a](this.prototype) : this.prototype.extend(arguments[a]);
        }return this;
    }, toString: function toString() {
        return String(this.valueOf());
    } });var _FlipClock;!function (a) {
    "use strict";
    _FlipClock = function FlipClock(a, b, c) {
        return b instanceof Object && b instanceof Date == !1 && (c = b, b = 0), new _FlipClock.Factory(a, b, c);
    }, _FlipClock.Lang = {}, _FlipClock.Base = Base.extend({ buildDate: "2014-12-12", version: "0.7.7", constructor: function constructor(b, c) {
            "object" != (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && (b = {}), "object" != (typeof c === 'undefined' ? 'undefined' : _typeof(c)) && (c = {}), this.setOptions(a.extend(!0, {}, b, c));
        }, callback: function callback(a) {
            if ("function" == typeof a) {
                for (var b = [], c = 1; c <= arguments.length; c++) {
                    arguments[c] && b.push(arguments[c]);
                }a.apply(this, b);
            }
        }, log: function log(a) {
            window.console && console.log && console.log(a);
        }, getOption: function getOption(a) {
            return this[a] ? this[a] : !1;
        }, getOptions: function getOptions() {
            return this;
        }, setOption: function setOption(a, b) {
            this[a] = b;
        }, setOptions: function setOptions(a) {
            for (var b in a) {
                "undefined" != typeof a[b] && this.setOption(b, a[b]);
            }
        } });
}(jQuery), function (a) {
    "use strict";
    _FlipClock.Face = _FlipClock.Base.extend({ autoStart: !0, dividers: [], factory: !1, lists: [], constructor: function constructor(a, b) {
            this.dividers = [], this.lists = [], this.base(b), this.factory = a;
        }, build: function build() {
            this.autoStart && this.start();
        }, createDivider: function createDivider(b, c, d) {
            "boolean" != typeof c && c || (d = c, c = b);var e = ['<span class="' + this.factory.classes.dot + ' top"></span>', '<span class="' + this.factory.classes.dot + ' bottom"></span>'].join("");d && (e = ""), b = this.factory.localize(b);var f = ['<span class="' + this.factory.classes.divider + " " + (c ? c : "").toLowerCase() + '">', '<span class="' + this.factory.classes.label + '">' + (b ? b : "") + "</span>", e, "</span>"],
                g = a(f.join(""));return this.dividers.push(g), g;
        }, createList: function createList(a, b) {
            "object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && (b = a, a = 0);var c = new _FlipClock.List(this.factory, a, b);return this.lists.push(c), c;
        }, reset: function reset() {
            this.factory.time = new _FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0, { minimumDigits: this.factory.minimumDigits }), this.flip(this.factory.original, !1);
        }, appendDigitToClock: function appendDigitToClock(a) {
            a.$el.append(!1);
        }, addDigit: function addDigit(a) {
            var b = this.createList(a, { classes: { active: this.factory.classes.active, before: this.factory.classes.before, flip: this.factory.classes.flip } });this.appendDigitToClock(b);
        }, start: function start() {}, stop: function stop() {}, autoIncrement: function autoIncrement() {
            this.factory.countdown ? this.decrement() : this.increment();
        }, increment: function increment() {
            this.factory.time.addSecond();
        }, decrement: function decrement() {
            0 == this.factory.time.getTimeSeconds() ? this.factory.stop() : this.factory.time.subSecond();
        }, flip: function flip(b, c) {
            var d = this;a.each(b, function (a, b) {
                var e = d.lists[a];e ? (c || b == e.digit || e.play(), e.select(b)) : d.addDigit(b);
            });
        } });
}(jQuery), function (a) {
    "use strict";
    _FlipClock.Factory = _FlipClock.Base.extend({ animationRate: 1e3, autoStart: !0, callbacks: { destroy: !1, create: !1, init: !1, interval: !1, start: !1, stop: !1, reset: !1 }, classes: { active: "flip-clock-active", before: "flip-clock-before", divider: "flip-clock-divider", dot: "flip-clock-dot", label: "flip-clock-label", flip: "flip", play: "play", wrapper: "flip-clock-wrapper" }, clockFace: "HourlyCounter", countdown: !1, defaultClockFace: "HourlyCounter", defaultLanguage: "english", $el: !1, face: !0, lang: !1, language: "english", minimumDigits: 0, original: !1, running: !1, time: !1, timer: !1, $wrapper: !1, constructor: function constructor(b, c, d) {
            d || (d = {}), this.lists = [], this.running = !1, this.base(d), this.$el = a(b).addClass(this.classes.wrapper), this.$wrapper = this.$el, this.original = c instanceof Date ? c : c ? Math.round(c) : 0, this.time = new _FlipClock.Time(this, this.original, { minimumDigits: this.minimumDigits, animationRate: this.animationRate }), this.timer = new _FlipClock.Timer(this, d), this.loadLanguage(this.language), this.loadClockFace(this.clockFace, d), this.autoStart && this.start();
        }, loadClockFace: function loadClockFace(a, b) {
            var c,
                d = "Face",
                e = !1;return a = a.ucfirst() + d, this.face.stop && (this.stop(), e = !0), this.$el.html(""), this.time.minimumDigits = this.minimumDigits, c = _FlipClock[a] ? new _FlipClock[a](this, b) : new _FlipClock[this.defaultClockFace + d](this, b), c.build(), this.face = c, e && this.start(), this.face;
        }, loadLanguage: function loadLanguage(a) {
            var b;return b = _FlipClock.Lang[a.ucfirst()] ? _FlipClock.Lang[a.ucfirst()] : _FlipClock.Lang[a] ? _FlipClock.Lang[a] : _FlipClock.Lang[this.defaultLanguage], this.lang = b;
        }, localize: function localize(a, b) {
            var c = this.lang;if (!a) return null;var d = a.toLowerCase();return "object" == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && (c = b), c && c[d] ? c[d] : a;
        }, start: function start(a) {
            var b = this;b.running || b.countdown && !(b.countdown && b.time.time > 0) ? b.log("Trying to start timer when countdown already at 0") : (b.face.start(b.time), b.timer.start(function () {
                b.flip(), "function" == typeof a && a();
            }));
        }, stop: function stop(a) {
            this.face.stop(), this.timer.stop(a);for (var b in this.lists) {
                this.lists.hasOwnProperty(b) && this.lists[b].stop();
            }
        }, reset: function reset(a) {
            this.timer.reset(a), this.face.reset();
        }, setTime: function setTime(a) {
            this.time.time = a, this.flip(!0);
        }, getTime: function getTime(a) {
            return this.time;
        }, setCountdown: function setCountdown(a) {
            var b = this.running;this.countdown = a ? !0 : !1, b && (this.stop(), this.start());
        }, flip: function flip(a) {
            this.face.flip(!1, a);
        } });
}(jQuery), function (a) {
    "use strict";
    _FlipClock.List = _FlipClock.Base.extend({ digit: 0, classes: { active: "flip-clock-active", before: "flip-clock-before", flip: "flip" }, factory: !1, $el: !1, $obj: !1, items: [], lastDigit: 0, constructor: function constructor(a, b, c) {
            this.factory = a, this.digit = b, this.lastDigit = b, this.$el = this.createList(), this.$obj = this.$el, b > 0 && this.select(b), this.factory.$el.append(this.$el);
        }, select: function select(a) {
            if ("undefined" == typeof a ? a = this.digit : this.digit = a, this.digit != this.lastDigit) {
                var b = this.$el.find("." + this.classes.before).removeClass(this.classes.before);this.$el.find("." + this.classes.active).removeClass(this.classes.active).addClass(this.classes.before), this.appendListItem(this.classes.active, this.digit), b.remove(), this.lastDigit = this.digit;
            }
        }, play: function play() {
            this.$el.addClass(this.factory.classes.play);
        }, stop: function stop() {
            var a = this;setTimeout(function () {
                a.$el.removeClass(a.factory.classes.play);
            }, this.factory.timer.interval);
        }, createListItem: function createListItem(a, b) {
            return ['<li class="' + (a ? a : "") + '">', '<a href="#">', '<div class="up">', '<div class="shadow"></div>', '<div class="inn">' + (b ? b : "") + "</div>", "</div>", '<div class="down">', '<div class="shadow"></div>', '<div class="inn">' + (b ? b : "") + "</div>", "</div>", "</a>", "</li>"].join("");
        }, appendListItem: function appendListItem(a, b) {
            var c = this.createListItem(a, b);this.$el.append(c);
        }, createList: function createList() {
            var b = this.getPrevDigit() ? this.getPrevDigit() : this.digit,
                c = a(['<ul class="' + this.classes.flip + " " + (this.factory.running ? this.factory.classes.play : "") + '">', this.createListItem(this.classes.before, b), this.createListItem(this.classes.active, this.digit), "</ul>"].join(""));return c;
        }, getNextDigit: function getNextDigit() {
            return 9 == this.digit ? 0 : this.digit + 1;
        }, getPrevDigit: function getPrevDigit() {
            return 0 == this.digit ? 9 : this.digit - 1;
        } });
}(jQuery), function (a) {
    "use strict";
    String.prototype.ucfirst = function () {
        return this.substr(0, 1).toUpperCase() + this.substr(1);
    }, a.fn.FlipClock = function (b, c) {
        return new _FlipClock(a(this), b, c);
    }, a.fn.flipClock = function (b, c) {
        return a.fn.FlipClock(b, c);
    };
}(jQuery), function (a) {
    "use strict";
    _FlipClock.Time = _FlipClock.Base.extend({ time: 0, factory: !1, minimumDigits: 0, constructor: function constructor(a, b, c) {
            "object" != (typeof c === 'undefined' ? 'undefined' : _typeof(c)) && (c = {}), c.minimumDigits || (c.minimumDigits = a.minimumDigits), this.base(c), this.factory = a, b && (this.time = b);
        }, convertDigitsToArray: function convertDigitsToArray(a) {
            var b = [];a = a.toString();for (var c = 0; c < a.length; c++) {
                a[c].match(/^\d*$/g) && b.push(a[c]);
            }return b;
        }, digit: function digit(a) {
            var b = this.toString(),
                c = b.length;return b[c - a] ? b[c - a] : !1;
        }, digitize: function digitize(b) {
            var c = [];if (a.each(b, function (a, b) {
                b = b.toString(), 1 == b.length && (b = "0" + b);for (var d = 0; d < b.length; d++) {
                    c.push(b.charAt(d));
                }
            }), c.length > this.minimumDigits && (this.minimumDigits = c.length), this.minimumDigits > c.length) for (var d = c.length; d < this.minimumDigits; d++) {
                c.unshift("0");
            }return c;
        }, getDateObject: function getDateObject() {
            return this.time instanceof Date ? this.time : new Date(new Date().getTime() + 1e3 * this.getTimeSeconds());
        }, getDayCounter: function getDayCounter(a) {
            var b = [this.getDays(), this.getHours(!0), this.getMinutes(!0)];return a && b.push(this.getSeconds(!0)), this.digitize(b);
        }, getDays: function getDays(a) {
            var b = this.getTimeSeconds() / 60 / 60 / 24;return a && (b %= 7), Math.floor(b);
        }, getHourCounter: function getHourCounter() {
            var a = this.digitize([this.getHours(), this.getMinutes(!0), this.getSeconds(!0)]);return a;
        }, getHourly: function getHourly() {
            return this.getHourCounter();
        }, getHours: function getHours(a) {
            var b = this.getTimeSeconds() / 60 / 60;return a && (b %= 24), Math.floor(b);
        }, getMilitaryTime: function getMilitaryTime(a, b) {
            "undefined" == typeof b && (b = !0), a || (a = this.getDateObject());var c = [a.getHours(), a.getMinutes()];return b === !0 && c.push(a.getSeconds()), this.digitize(c);
        }, getMinutes: function getMinutes(a) {
            var b = this.getTimeSeconds() / 60;return a && (b %= 60), Math.floor(b);
        }, getMinuteCounter: function getMinuteCounter() {
            var a = this.digitize([this.getMinutes(), this.getSeconds(!0)]);return a;
        }, getTimeSeconds: function getTimeSeconds(a) {
            return a || (a = new Date()), this.time instanceof Date ? this.factory.countdown ? Math.max(this.time.getTime() / 1e3 - a.getTime() / 1e3, 0) : a.getTime() / 1e3 - this.time.getTime() / 1e3 : this.time;
        }, getTime: function getTime(a, b) {
            "undefined" == typeof b && (b = !0), a || (a = this.getDateObject()), console.log(a);var c = a.getHours(),
                d = [c > 12 ? c - 12 : 0 === c ? 12 : c, a.getMinutes()];return b === !0 && d.push(a.getSeconds()), this.digitize(d);
        }, getSeconds: function getSeconds(a) {
            var b = this.getTimeSeconds();return a && (60 == b ? b = 0 : b %= 60), Math.ceil(b);
        }, getWeeks: function getWeeks(a) {
            var b = this.getTimeSeconds() / 60 / 60 / 24 / 7;return a && (b %= 52), Math.floor(b);
        }, removeLeadingZeros: function removeLeadingZeros(b, c) {
            var d = 0,
                e = [];return a.each(c, function (a, f) {
                b > a ? d += parseInt(c[a], 10) : e.push(c[a]);
            }), 0 === d ? e : c;
        }, addSeconds: function addSeconds(a) {
            this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() + a) : this.time += a;
        }, addSecond: function addSecond() {
            this.addSeconds(1);
        }, subSeconds: function subSeconds(a) {
            this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() - a) : this.time -= a;
        }, subSecond: function subSecond() {
            this.subSeconds(1);
        }, toString: function toString() {
            return this.getTimeSeconds().toString();
        } });
}(jQuery), function (a) {
    "use strict";
    _FlipClock.Timer = _FlipClock.Base.extend({ callbacks: { destroy: !1, create: !1, init: !1, interval: !1, start: !1, stop: !1, reset: !1 }, count: 0, factory: !1, interval: 1e3, animationRate: 1e3, constructor: function constructor(a, b) {
            this.base(b), this.factory = a, this.callback(this.callbacks.init), this.callback(this.callbacks.create);
        }, getElapsed: function getElapsed() {
            return this.count * this.interval;
        }, getElapsedTime: function getElapsedTime() {
            return new Date(this.time + this.getElapsed());
        }, reset: function reset(a) {
            clearInterval(this.timer), this.count = 0, this._setInterval(a), this.callback(this.callbacks.reset);
        }, start: function start(a) {
            this.factory.running = !0, this._createTimer(a), this.callback(this.callbacks.start);
        }, stop: function stop(a) {
            this.factory.running = !1, this._clearInterval(a), this.callback(this.callbacks.stop), this.callback(a);
        }, _clearInterval: function _clearInterval() {
            clearInterval(this.timer);
        }, _createTimer: function _createTimer(a) {
            this._setInterval(a);
        }, _destroyTimer: function _destroyTimer(a) {
            this._clearInterval(), this.timer = !1, this.callback(a), this.callback(this.callbacks.destroy);
        }, _interval: function _interval(a) {
            this.callback(this.callbacks.interval), this.callback(a), this.count++;
        }, _setInterval: function _setInterval(a) {
            var b = this;b._interval(a), b.timer = setInterval(function () {
                b._interval(a);
            }, this.interval);
        } });
}(jQuery), function (a) {
    _FlipClock.TwentyFourHourClockFace = _FlipClock.Face.extend({ constructor: function constructor(a, b) {
            this.base(a, b);
        }, build: function build(b) {
            var c = this,
                d = this.factory.$el.find("ul");this.factory.time.time || (this.factory.original = new Date(), this.factory.time = new _FlipClock.Time(this.factory, this.factory.original));var b = b ? b : this.factory.time.getMilitaryTime(!1, this.showSeconds);b.length > d.length && a.each(b, function (a, b) {
                c.createList(b);
            }), this.createDivider(), this.createDivider(), a(this.dividers[0]).insertBefore(this.lists[this.lists.length - 2].$el), a(this.dividers[1]).insertBefore(this.lists[this.lists.length - 4].$el), this.base();
        }, flip: function flip(a, b) {
            this.autoIncrement(), a = a ? a : this.factory.time.getMilitaryTime(!1, this.showSeconds), this.base(a, b);
        } });
}(jQuery), function (a) {
    _FlipClock.CounterFace = _FlipClock.Face.extend({ shouldAutoIncrement: !1, constructor: function constructor(a, b) {
            "object" != (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && (b = {}), a.autoStart = b.autoStart ? !0 : !1, b.autoStart && (this.shouldAutoIncrement = !0), a.increment = function () {
                a.countdown = !1, a.setTime(a.getTime().getTimeSeconds() + 1);
            }, a.decrement = function () {
                a.countdown = !0;var b = a.getTime().getTimeSeconds();b > 0 && a.setTime(b - 1);
            }, a.setValue = function (b) {
                a.setTime(b);
            }, a.setCounter = function (b) {
                a.setTime(b);
            }, this.base(a, b);
        }, build: function build() {
            var b = this,
                c = this.factory.$el.find("ul"),
                d = this.factory.getTime().digitize([this.factory.getTime().time]);d.length > c.length && a.each(d, function (a, c) {
                var d = b.createList(c);d.select(c);
            }), a.each(this.lists, function (a, b) {
                b.play();
            }), this.base();
        }, flip: function flip(a, b) {
            this.shouldAutoIncrement && this.autoIncrement(), a || (a = this.factory.getTime().digitize([this.factory.getTime().time])), this.base(a, b);
        }, reset: function reset() {
            this.factory.time = new _FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0), this.flip();
        } });
}(jQuery), function (a) {
    _FlipClock.DailyCounterFace = _FlipClock.Face.extend({ showSeconds: !0, constructor: function constructor(a, b) {
            this.base(a, b);
        }, build: function build(b) {
            var c = this,
                d = this.factory.$el.find("ul"),
                e = 0;b = b ? b : this.factory.time.getDayCounter(this.showSeconds), b.length > d.length && a.each(b, function (a, b) {
                c.createList(b);
            }), this.showSeconds ? a(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length - 2].$el) : e = 2, a(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length - 4 + e].$el), a(this.createDivider("Hours")).insertBefore(this.lists[this.lists.length - 6 + e].$el), a(this.createDivider("Days", !0)).insertBefore(this.lists[0].$el), this.base();
        }, flip: function flip(a, b) {
            a || (a = this.factory.time.getDayCounter(this.showSeconds)), this.autoIncrement(), this.base(a, b);
        } });
}(jQuery), function (a) {
    _FlipClock.HourlyCounterFace = _FlipClock.Face.extend({ constructor: function constructor(a, b) {
            this.base(a, b);
        }, build: function build(b, c) {
            var d = this,
                e = this.factory.$el.find("ul");c = c ? c : this.factory.time.getHourCounter(), c.length > e.length && a.each(c, function (a, b) {
                d.createList(b);
            }), a(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length - 2].$el), a(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length - 4].$el), b || a(this.createDivider("Hours", !0)).insertBefore(this.lists[0].$el), this.base();
        }, flip: function flip(a, b) {
            a || (a = this.factory.time.getHourCounter()), this.autoIncrement(), this.base(a, b);
        }, appendDigitToClock: function appendDigitToClock(a) {
            this.base(a), this.dividers[0].insertAfter(this.dividers[0].next());
        } });
}(jQuery), function (a) {
    _FlipClock.MinuteCounterFace = _FlipClock.HourlyCounterFace.extend({ clearExcessDigits: !1, constructor: function constructor(a, b) {
            this.base(a, b);
        }, build: function build() {
            this.base(!0, this.factory.time.getMinuteCounter());
        }, flip: function flip(a, b) {
            a || (a = this.factory.time.getMinuteCounter()), this.base(a, b);
        } });
}(jQuery), function (a) {
    _FlipClock.TwelveHourClockFace = _FlipClock.TwentyFourHourClockFace.extend({ meridium: !1, meridiumText: "AM", build: function build() {
            var b = this.factory.time.getTime(!1, this.showSeconds);this.base(b), this.meridiumText = this.getMeridium(), this.meridium = a(['<ul class="flip-clock-meridium">', "<li>", '<a href="#">' + this.meridiumText + "</a>", "</li>", "</ul>"].join("")), this.meridium.insertAfter(this.lists[this.lists.length - 1].$el);
        }, flip: function flip(a, b) {
            this.meridiumText != this.getMeridium() && (this.meridiumText = this.getMeridium(), this.meridium.find("a").html(this.meridiumText)), this.base(this.factory.time.getTime(!1, this.showSeconds), b);
        }, getMeridium: function getMeridium() {
            return new Date().getHours() >= 12 ? "PM" : "AM";
        }, isPM: function isPM() {
            return "PM" == this.getMeridium() ? !0 : !1;
        }, isAM: function isAM() {
            return "AM" == this.getMeridium() ? !0 : !1;
        } });
}(jQuery), function (a) {
    _FlipClock.Lang.Arabic = { years: "سنوات", months: "شهور", days: "أيام", hours: "ساعات", minutes: "دقائق", seconds: "ثواني" }, _FlipClock.Lang.ar = _FlipClock.Lang.Arabic, _FlipClock.Lang["ar-ar"] = _FlipClock.Lang.Arabic, _FlipClock.Lang.arabic = _FlipClock.Lang.Arabic;
}(jQuery), function (a) {
    _FlipClock.Lang.Danish = { years: "År", months: "Måneder", days: "Dage", hours: "Timer", minutes: "Minutter", seconds: "Sekunder" }, _FlipClock.Lang.da = _FlipClock.Lang.Danish, _FlipClock.Lang["da-dk"] = _FlipClock.Lang.Danish, _FlipClock.Lang.danish = _FlipClock.Lang.Danish;
}(jQuery), function (a) {
    _FlipClock.Lang.German = { years: "Jahre", months: "Monate", days: "Tage", hours: "Stunden", minutes: "Minuten", seconds: "Sekunden" }, _FlipClock.Lang.de = _FlipClock.Lang.German, _FlipClock.Lang["de-de"] = _FlipClock.Lang.German, _FlipClock.Lang.german = _FlipClock.Lang.German;
}(jQuery), function (a) {
    _FlipClock.Lang.English = { years: "Years", months: "Months", days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" }, _FlipClock.Lang.en = _FlipClock.Lang.English, _FlipClock.Lang["en-us"] = _FlipClock.Lang.English, _FlipClock.Lang.english = _FlipClock.Lang.English;
}(jQuery), function (a) {
    _FlipClock.Lang.Spanish = { years: "Años", months: "Meses", days: "Días", hours: "Horas", minutes: "Minutos", seconds: "Segundos" }, _FlipClock.Lang.es = _FlipClock.Lang.Spanish, _FlipClock.Lang["es-es"] = _FlipClock.Lang.Spanish, _FlipClock.Lang.spanish = _FlipClock.Lang.Spanish;
}(jQuery), function (a) {
    _FlipClock.Lang.Finnish = { years: "Vuotta", months: "Kuukautta", days: "Päivää", hours: "Tuntia", minutes: "Minuuttia", seconds: "Sekuntia" }, _FlipClock.Lang.fi = _FlipClock.Lang.Finnish, _FlipClock.Lang["fi-fi"] = _FlipClock.Lang.Finnish, _FlipClock.Lang.finnish = _FlipClock.Lang.Finnish;
}(jQuery), function (a) {
    _FlipClock.Lang.French = { years: "Ans", months: "Mois", days: "Jours", hours: "Heures", minutes: "Minutes", seconds: "Secondes" }, _FlipClock.Lang.fr = _FlipClock.Lang.French, _FlipClock.Lang["fr-ca"] = _FlipClock.Lang.French, _FlipClock.Lang.french = _FlipClock.Lang.French;
}(jQuery), function (a) {
    _FlipClock.Lang.Italian = { years: "Anni", months: "Mesi", days: "Giorni", hours: "Ore", minutes: "Minuti", seconds: "Secondi" }, _FlipClock.Lang.it = _FlipClock.Lang.Italian, _FlipClock.Lang["it-it"] = _FlipClock.Lang.Italian, _FlipClock.Lang.italian = _FlipClock.Lang.Italian;
}(jQuery), function (a) {
    _FlipClock.Lang.Latvian = { years: "Gadi", months: "Mēneši", days: "Dienas", hours: "Stundas", minutes: "Minūtes", seconds: "Sekundes" }, _FlipClock.Lang.lv = _FlipClock.Lang.Latvian, _FlipClock.Lang["lv-lv"] = _FlipClock.Lang.Latvian, _FlipClock.Lang.latvian = _FlipClock.Lang.Latvian;
}(jQuery), function (a) {
    _FlipClock.Lang.Dutch = { years: "Jaren", months: "Maanden", days: "Dagen", hours: "Uren", minutes: "Minuten", seconds: "Seconden" }, _FlipClock.Lang.nl = _FlipClock.Lang.Dutch, _FlipClock.Lang["nl-be"] = _FlipClock.Lang.Dutch, _FlipClock.Lang.dutch = _FlipClock.Lang.Dutch;
}(jQuery), function (a) {
    _FlipClock.Lang.Norwegian = { years: "År", months: "Måneder", days: "Dager", hours: "Timer", minutes: "Minutter", seconds: "Sekunder" }, _FlipClock.Lang.no = _FlipClock.Lang.Norwegian, _FlipClock.Lang.nb = _FlipClock.Lang.Norwegian, _FlipClock.Lang["no-nb"] = _FlipClock.Lang.Norwegian, _FlipClock.Lang.norwegian = _FlipClock.Lang.Norwegian;
}(jQuery), function (a) {
    _FlipClock.Lang.Portuguese = { years: "Anos", months: "Meses", days: "Dias", hours: "Horas", minutes: "Minutos", seconds: "Segundos" }, _FlipClock.Lang.pt = _FlipClock.Lang.Portuguese, _FlipClock.Lang["pt-br"] = _FlipClock.Lang.Portuguese, _FlipClock.Lang.portuguese = _FlipClock.Lang.Portuguese;
}(jQuery), function (a) {
    _FlipClock.Lang.Russian = { years: "лет", months: "месяцев", days: "дней", hours: "часов", minutes: "минут", seconds: "секунд" }, _FlipClock.Lang.ru = _FlipClock.Lang.Russian, _FlipClock.Lang["ru-ru"] = _FlipClock.Lang.Russian, _FlipClock.Lang.russian = _FlipClock.Lang.Russian;
}(jQuery), function (a) {
    _FlipClock.Lang.Swedish = { years: "År", months: "Månader", days: "Dagar", hours: "Timmar", minutes: "Minuter", seconds: "Sekunder" }, _FlipClock.Lang.sv = _FlipClock.Lang.Swedish, _FlipClock.Lang["sv-se"] = _FlipClock.Lang.Swedish, _FlipClock.Lang.swedish = _FlipClock.Lang.Swedish;
}(jQuery), function (a) {
    _FlipClock.Lang.Chinese = { years: "年", months: "月", days: "日", hours: "时", minutes: "分", seconds: "秒" }, _FlipClock.Lang.zh = _FlipClock.Lang.Chinese, _FlipClock.Lang["zh-cn"] = _FlipClock.Lang.Chinese, _FlipClock.Lang.chinese = _FlipClock.Lang.Chinese;
}(jQuery);
$(function () {

    var timerInit = false;

    initTimer();

    function initTimer() {

        var timer = $('.js-sign-timer'),
            currentTime = new Date(),
            closingTime = new Date(currentTime),
            weekDay = currentTime.getDay(),
            remainingTime,
            START_HOUR = 8;

        if (weekDay === 0 || 6) {
            closingTime.setHours('21');
            closingTime.setMinutes('00');
            closingTime.setSeconds('00');
        } else {
            closingTime.setHours('19');
            closingTime.setMinutes('00');
            closingTime.setSeconds('00');
        }

        remainingTime = closingTime - currentTime;
        remainingTime /= 1000;

        if (remainingTime > 0 && !timerInit && currentTime.getHours() >= START_HOUR) {
            timerInit = true;

            timer.each(function () {
                var $this = $(this);

                $this.show().siblings('.sign-timer__message').hide();
                $this.prev().show();
                $this.next().show();

                var clock = new _FlipClock($this, remainingTime, {
                    countdown: true,
                    autoStart: true,
                    stop: function stop() {
                        $this.siblings('.sign-timer__message').fadeIn();
                        $this.prev().slideUp();
                        $this.next().slideUp();
                        $this.fadeOut();
                        timerInit = false;
                    }
                });
            });
        } else {
            var timerInterval = setTimeout(function () {
                initTimer();

                if (timerInit) {
                    clearInterval(timerInterval);
                }
            }, 1000);
        }
    }
});

$(document).ready(function () {

    $('.js-oil-slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="oil-slider__prev"><svg class="icon-arrow-bold"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-bold"></use></svg></button>',
        nextArrow: '<button type="button" class="oil-slider__next"><svg class="icon-arrow-bold"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-bold"></use></svg></button>',
        responsive: [{
            breakpoint: 1023,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.js-serv-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4
            }

        }, {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.js-certif-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 1023,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.js-slider-vertical').slick({
        vertical: true,
        prevArrow: $('.js-arr-top'),
        nextArrow: $('.js-arr-bottom'),
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{

            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                vertical: false
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                vertical: false
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                vertical: false
            }
        }]
    });

    $('.js-gallery').fancybox({
        infobar: true,
        buttons: true,
        slideShow: false,
        fullScreen: false,
        thumbs: false,
        closeBtn: true
    });

    function initSlider(slider) {
        initSlickSlider(slider);
        toggleSlider(768, slider);

        $(window).resize(function () {
            toggleSlider(768, slider);
        });

        function toggleSlider(breakpoint, slider) {
            if ($(window).width() < breakpoint) {
                if (!slider.hasClass('slick-initialized')) {
                    initSlickSlider(slider);
                }
            } else {
                slider.slick('unslick');
            }
        }

        function initSlickSlider(slider) {
            slider.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 350,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });
        }
    }

    initSlider($('.js-partners-slider'));
    initSlider($('.js-passed-slider'));
});

$(function () {

    // price accordion and tabs
    (function () {
        var priceAccordion = $('.js-price-accordion');

        priceAccordion.each(function () {
            var _this = $(this),
                _thisItem = _this.children(),
                _thisTitle = _this.find('.price-accordion__item-title'),
                _thisContent = _this.find('.price-accordion__item-content'),
                priceTabs = _this.find('.price-accordion__item'),
                priceTabsContent = $('.js-price-tabs').find('.price-adv__tab');

            priceTabs.on('click', function (e) {
                var index = $(this).index();

                priceTabsContent.eq(index - 1).slideToggle(200);
                priceTabsContent.hide().eq(index - 1).slideToggle(200);
            });

            _thisTitle.on('click', function (e) {
                e.preventDefault();

                if ($(this).closest(_thisItem).hasClass('is-active')) {
                    $(this).next().slideUp().closest(_thisItem).removeClass('is-active');
                } else {
                    $(this).closest(_thisItem).siblings().filter('.is-active').each(function () {
                        $(this).removeClass('is-active').find(_thisContent).slideUp();
                    });
                    $(this).next().slideDown().closest(_thisItem).addClass('is-active');
                }
            });

            _thisTitle.first().trigger('click');
        });
    })();

    // partners hide content
    (function () {
        var partnersSlider = $('.js-partners-slider'),
            partnersMoreBtn = $('.js-partners-more');

        partnersMoreBtn.each(function () {

            var sliderContent = $(this).prev(partnersSlider).children();

            $(this).on('click', function (e) {
                e.preventDefault();

                $(this).toggleClass('is-active');

                if ($(this).text() === 'Подробнее') {
                    $(this).text('Скрыть');
                } else {
                    $(this).text('Подробнее');
                }

                sliderContent.each(function () {
                    if ($(this).hasClass('is-visible')) {
                        $(this).fadeOut().removeClass('is-visible');
                    }
                    if ($(this).is(':hidden')) {
                        $(this).fadeIn().css("display", "inline-block").addClass('is-visible');
                    }
                });
            });
        });
    })();

    // pack ordering
    (function () {

        var packBtn = $('.js-pack-btn'),
            packPopup = packBtn.next(),
            popupClose = $('.js-subscribe-pack-close');

        packBtn.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            packPopup.toggleClass('is-active');

            if ($(this).parent().siblings().children(packPopup).hasClass('is-active')) {
                $(this).parent().siblings().children(packPopup).removeClass('is-active');
            }
        });

        popupClose.on('click', function () {
            $(this).parent().removeClass('is-active');
        });

        $(window).on('click', function () {
            packPopup.removeClass('is-active');
        });

        packPopup.on('click', function (e) {
            e.stopPropagation();
        });
    })();

    // gmap scroll disable
    $(function () {
        $('div.gmap-holder').click(function (e) {
            $(this).find('iframe').css('pointer-events', 'all');
        }).mouseleave(function (e) {
            $(this).find('iframe').css('pointer-events', 'none');
        });
    });
});

$(function () {
    if ($('.js-oil-fullpage').length) {
        $('.js-oil-fullpage').fullpage({
            sectionsColor: ['#fff', '#f1f1f1', '#fff', '#f1f1f1', '#fff', '#f1f1f1', '#fff', '#f1f1f1', '#fff', '#f1f1f1'],
            anchors: ['oil-section-1', 'oil-section-2', 'oil-section-3', 'oil-section-4', 'oil-section-5', 'oil-section-6', 'oil-section-7', 'oil-section-8', 'oil-section-9', 'oil-section-10'],
            menu: '.js-oil-nav',
            scrollOverflow: true,
            dragAndMove: true
        });

        if ($(window).width() <= 767) {
            $.fn.fullpage.destroy('all');
        }
    }

    // more text button
    /**
     * Created by -------------------- on 07.03.2017.
     */
    (function () {
        var moreTextBtn = $('.js-more-text'),
            moreCommentBtn = $('.js-more-comment');

        moreCommentBtn.on('click', function (e) {
            console.log('df');
            e.preventDefault();
            console.log($(this).prev());
            $(this).prev().fadeToggle();
            $(this).text(!$(this).hasClass('is-active') ? 'Свернуть' : 'Развернуть');
            $(this).toggleClass('is-active');
        });

        moreTextBtn.on('click', function (e) {
            e.preventDefault();

            $(this).prev().fadeToggle();
            $(this).text(!$(this).hasClass('is-active') ? 'Скрыть' : 'Подробнее');
            $(this).toggleClass('is-active');
        });
    })();

    // scroll to section
    (function () {
        var nav = $('.js-about-us-nav'),
            navItem = nav.children(),
            scrollLink = $('.js-scroll-link');

        navItem.on('click', function (e) {
            e.preventDefault();
            var el = $(this).attr('href');
            $('html, body').animate({ scrollTop: $(el).offset().top }, 1000);
            return false;
        });

        scrollLink.on('click', function (e) {
            e.preventDefault();
            var el = $(this).attr('href');
            $('html, body').animate({ scrollTop: $(el).offset().top }, 1000);
            return false;
        });
    })();

    // clear placeholder
    (function () {
        var el = $('input, textarea');
        el.focus(function () {
            $(this).data('placeholder', $(this).attr('placeholder'));
            $(this).attr('placeholder', '');
        });
        el.blur(function () {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    })();

    /**
     * Created by -------------------- on 28.02.2017.
     */
    (function () {
        function PriceCounter() {
            var motorTypeBtn = void 0;
            var detalNumb = void 0;
            var price = void 0;
            var defultResult = void 0;
            var cilinderNumber = void 0;

            function readCheckboxes() {
                motorTypeBtn = $('.js-change-price');
                detalNumb = $('.js-motor-numb');
                price = $('.js-chage-price');
                defultResult = $('.js-result').html();
                cilinderNumber = parseInt($('.js-motor-numb:checked').val());
            }
            function count(arg) {
                if (!arg) {
                    var visual = parseInt($('.js-visual-price').html());
                    var diagnostic = parseInt($('.js-comp-diagnostic').html());
                    cilinderNumber = parseInt($('.js-motor-numb:checked').val());
                    var newPrice = parseInt(price.html());
                    var result = visual + diagnostic + newPrice * cilinderNumber;
                    $('.js-result').html('<span class="result-price">' + result + ' грн </span>');
                } else {
                    $('.js-result').html(arg);
                }
            }
            function init() {
                readCheckboxes();
                motorTypeBtn.on('change', function () {
                    price.html($(this).val());
                    readCheckboxes();
                    if (cilinderNumber) {
                        count();
                    } else {
                        $('.js-result').html(defultResult);
                    }
                });
                detalNumb.on('change', function () {
                    if ($(this).val() !== '0') {
                        count();
                    } else {
                        count('<span class="result-price">-</span>');
                    }
                });
            }
            init();
        }
        var countprice = new PriceCounter();
    })();
});

sayHello();