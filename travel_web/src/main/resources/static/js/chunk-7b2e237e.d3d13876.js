(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-7b2e237e"], {
    "06a2": function (t, e, n) {
        "use strict";
        var i = n("fc81")(!0);
        n("492d")(String, "String", (function (t) {
            this._t = String(t), this._i = 0
        }), (function () {
            var t, e = this._t, n = this._i;
            return n >= e.length ? {value: void 0, done: !0} : (t = i(e, n), this._i += t.length, {value: t, done: !1})
        }))
    }, "190b": function (t, e, n) {
        n("149f") && "g" != /./g.flags && n("064e").f(RegExp.prototype, "flags", {configurable: !0, get: n("f1fe")})
    }, "2b45": function (t, e, n) {
        "use strict";
        n("190b");
        var i = n("69b3"), o = n("f1fe"), s = n("149f"), r = "toString", a = /./[r], l = function (t) {
            n("bf16")(RegExp.prototype, r, t, !0)
        };
        n("238a")((function () {
            return "/a/b" != a.call({source: "a", flags: "b"})
        })) ? l((function () {
            var t = i(this);
            return "/".concat(t.source, "/", "flags" in t ? t.flags : !s && t instanceof RegExp ? o.call(t) : void 0)
        })) : a.name != r && l((function () {
            return a.call(this)
        }))
    }, "5a88": function (t, e, n) {
        var i = n("fb68");
        t.exports = function (t, e) {
            if (!i(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
            return t
        }
    }, 6179: function (t, e, n) {
        "use strict";
        var i = n("064e").f, o = n("e005"), s = n("ef91"), r = n("4ce5"), a = n("a73b"), l = n("206c"), c = n("492d"),
            u = n("475d"), f = n("1157"), d = n("149f"), h = n("f71f").fastKey, p = n("5a88"), g = d ? "_s" : "size",
            m = function (t, e) {
                var n, i = h(e);
                if ("F" !== i) return t._i[i];
                for (n = t._f; n; n = n.n) if (n.k == e) return n
            };
        t.exports = {
            getConstructor: function (t, e, n, c) {
                var u = t((function (t, i) {
                    a(t, u, e, "_i"), t._t = e, t._i = o(null), t._f = void 0, t._l = void 0, t[g] = 0, void 0 != i && l(i, n, t[c], t)
                }));
                return s(u.prototype, {
                    clear: function () {
                        for (var t = p(this, e), n = t._i, i = t._f; i; i = i.n) i.r = !0, i.p && (i.p = i.p.n = void 0), delete n[i.i];
                        t._f = t._l = void 0, t[g] = 0
                    }, delete: function (t) {
                        var n = p(this, e), i = m(n, t);
                        if (i) {
                            var o = i.n, s = i.p;
                            delete n._i[i.i], i.r = !0, s && (s.n = o), o && (o.p = s), n._f == i && (n._f = o), n._l == i && (n._l = s), n[g]--
                        }
                        return !!i
                    }, forEach: function (t) {
                        p(this, e);
                        var n, i = r(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                        while (n = n ? n.n : this._f) {
                            i(n.v, n.k, this);
                            while (n && n.r) n = n.p
                        }
                    }, has: function (t) {
                        return !!m(p(this, e), t)
                    }
                }), d && i(u.prototype, "size", {
                    get: function () {
                        return p(this, e)[g]
                    }
                }), u
            }, def: function (t, e, n) {
                var i, o, s = m(t, e);
                return s ? s.v = n : (t._l = s = {
                    i: o = h(e, !0),
                    k: e,
                    v: n,
                    p: i = t._l,
                    n: void 0,
                    r: !1
                }, t._f || (t._f = s), i && (i.n = s), t[g]++, "F" !== o && (t._i[o] = s)), t
            }, getEntry: m, setStrong: function (t, e, n) {
                c(t, e, (function (t, n) {
                    this._t = p(t, e), this._k = n, this._l = void 0
                }), (function () {
                    var t = this, e = t._k, n = t._l;
                    while (n && n.r) n = n.p;
                    return t._t && (t._l = n = n ? n.n : t._t._f) ? u(0, "keys" == e ? n.k : "values" == e ? n.v : [n.k, n.v]) : (t._t = void 0, u(1))
                }), n ? "entries" : "values", !n, !0), f(e)
            }
        }
    }, "6d57": function (t, e, n) {
        for (var i = n("e44b"), o = n("80a9"), s = n("bf16"), r = n("e7ad"), a = n("86d4"), l = n("da6d"), c = n("cb3d"), u = c("iterator"), f = c("toStringTag"), d = l.Array, h = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, p = o(h), g = 0; g < p.length; g++) {
            var m, v = p[g], b = h[v], w = r[v], k = w && w.prototype;
            if (k && (k[u] || a(k, u, d), k[f] || a(k, f, v), l[v] = d, b)) for (m in i) k[m] || s(k, m, i[m], !0)
        }
    }, "88c5": function (t, e, n) {
        "use strict";
        var i = n("6179"), o = n("5a88"), s = "Map";
        t.exports = n("fea3")(s, (function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }), {
            get: function (t) {
                var e = i.getEntry(o(this, s), t);
                return e && e.v
            }, set: function (t, e) {
                return i.def(o(this, s), 0 === t ? 0 : t, e)
            }
        }, i, !0)
    }, "91b7": function (t, e, n) {
        "use strict";
        n.r(e);
        var i = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {attrs: {id: "container"}}, [n("div", {staticClass: "list"}, [n("div", {staticClass: "real_time_order"}, [n("h2", [t._v("实时订单轨迹监控")]), n("ul", [n("li", [t._v("实时订单id：         状态:")]), n("div", {staticClass: "dataShow"}, t._l(t.realOrderList, (function (e) {
                    return n("li", {
                        key: e, on: {
                            click: function (n) {
                                return t.realtimeTrack(e)
                            }
                        }
                    }, [t._v(t._s(e.substring(7, e.length)))])
                })), 0)])]), n("div", {staticClass: "historical_orders"}, [n("h2", [t._v("历史订单轨迹回放")]), n("ul", [n("li", [t._v("历史订单id：         状态:")]), n("div", {staticClass: "dataShow"}, t._l(t.hisOrderList, (function (e) {
                    return n("li", {
                        key: e, on: {
                            click: function (n) {
                                t.hisTrack(e.substring(7, e.length))
                            }
                        }
                    }, [t._v(t._s(e.substring(7, e.length)))])
                })), 0)])]), n("div", {attrs: {id: "lng_lat"}}, [t._v(t._s(t.message))])]), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isControl,
                        expression: "isControl"
                    }], staticClass: "input-card"
                }, [n("h4", [t._v("轨迹回放控制")]), n("div", {staticClass: "input-item"}, [n("el-row", [n("el-col", {attrs: {span: 12}}, [n("div", [n("input", {
                    staticClass: "btn",
                    attrs: {type: "button", value: "开始动画", id: "start"},
                    on: {
                        click: function (e) {
                            return t.startAnimation()
                        }
                    }
                })])]), n("el-col", {attrs: {span: 12}}, [n("div", {staticStyle: {"margin-left": "5px"}}, [n("input", {
                    staticClass: "btn",
                    attrs: {type: "button", value: "暂停动画", id: "pause"},
                    on: {
                        click: function (e) {
                            return t.pauseAnimation()
                        }
                    }
                })])])], 1), n("el-row", [n("el-col", {attrs: {span: 12}}, [n("div", [n("input", {
                    staticClass: "btn",
                    attrs: {type: "button", value: "继续动画", id: "resume"},
                    on: {
                        click: function (e) {
                            return t.resumeAnimation()
                        }
                    }
                })])]), n("el-col", {attrs: {span: 12}}, [n("div", {staticStyle: {"margin-left": "5px"}}, [n("input", {
                    staticClass: "btn",
                    attrs: {type: "button", value: "停止动画", id: "stop"},
                    on: {
                        click: function (e) {
                            return t.stopAnimation()
                        }
                    }
                })])])], 1)], 1)])])
            }, o = [], s = (n("6d57"), n("2b45"), n("9a33"), n("63ff"), n("e5af")), r = n("9d37"),
            a = (n("06a2"), n("88c5"), new Map);
        a.set("510100", [104.067923463, 30.6799428454]), a.set("460100", [110.330801848, 20.022071277]), a.set("610100", [108.953098279, 34.2777998978]), a.set("420100", [114.316200103, 30.5810841269]);
        var l = a, c = (n("365c"), {
            data: function () {
                var t;
                return t = {
                    orderStatus: !1,
                    websocket: null,
                    wsuri: "ws://localhost:8080/websocket",
                    realOrderList: [],
                    hisOrderList: [],
                    map: null,
                    cityCode: "075"
                }, Object(r["a"])(t, "websocket", null), Object(r["a"])(t, "lngAndLat", null), Object(r["a"])(t, "lineArr", []), Object(r["a"])(t, "marker", null), Object(r["a"])(t, "timename", null), Object(r["a"])(t, "isEnd", !1), Object(r["a"])(t, "polyline", null), Object(r["a"])(t, "passedPolyline", null), Object(r["a"])(t, "message", ""), Object(r["a"])(t, "history", ""), Object(r["a"])(t, "history1", ""), Object(r["a"])(t, "isControl", !1), Object(r["a"])(t, "datatime", null), t
            }, computed: {
                getCitycode: function () {
                    return this.$store.state.citycode
                }
            }, watch: {
                getCitycode: {
                    handler: function (t, e) {
                        console.log(this.getCitycode)
                    }
                }
            }, created: function () {
                this.initWebSocket()
            }, mounted: function () {
                var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                console.log(this.$store.state.citycode), this.initMap(), this.map.setCenter([104.07513, 30.72724]), this.map.on("complete", (function () {
                                    console.log("地图准备完成...............")
                                })), console.log("设置正北方向......"), console.log("请求实时订单列表"), console.log("citycode:" + this.getCitycode), this.getOrderdata();
                            case 8:
                            case"end":
                                return t.stop()
                        }
                    }), t, this)
                })));

                function e() {
                    return t.apply(this, arguments)
                }

                return e
            }(), destroyed: function () {
                console.log("+++++++++_______"), window.clearInterval(this.timename), window.clearInterval(this.datatime), this.closeWebSocket()
            }, methods: {
                getOrderdata: function () {
                    var t = this;
                    this.datatime = window.setInterval((function () {
                        console.log("获取数据"), t.$axios({
                            method: "post",
                            url: "/track/realtimeOrder",
                            data: {cityCode: 510100}
                        }).then((function (e) {
                            console.log(e), t.realOrderList = e.data.data
                        }))
                    }), 3e3)
                }, initMap: function () {
                    var t = this;
                    this.map = new AMap.Map("container", {
                        resizeEnable: !0,
                        rotateEnable: !0,
                        pitchEnable: !1,
                        zoom: 25,
                        pitch: 65,
                        rotation: 45,
                        viewMode: "3D",
                        expandZoomRange: !0,
                        zoomToAccuracy: !0,
                        center: l.get(this.citycode),
                        mapStyle: "amap://styles/34eee3392325080eabb764ca4af5f2ab"
                    }), AMap.plugin(["AMap.ControlBar"], (function () {
                        var e = new AMap.ControlBar;
                        t.map.addControl(e)
                    }))
                }, initWebSocket: function () {
                    "undefined" === typeof WebSocket ? alert("您的浏览器不支持socket") : (console.log("0000000"), this.websocket = new WebSocket(this.wsuri), this.websocket.onmessage = this.websocketonmessage, this.websocket.onopen = this.websocketonopen, this.websocket.onerror = this.websocketonerror, this.websocket.onclose = this.closeWebSocket)
                }, setMessage: function (t) {
                    this.message = t
                }, websocketonerror: function (t) {
                    console.log("cuowu" + t), this.setMessage(t)
                }, websocketonopen: function () {
                    console.log("连接成功！！！"), this.setMessage(open)
                }, websocketonmessage: function (t) {
                    console.log("webstock回调"), this.setMessage(t.data), console.log(t.data), -1 != t.data.indexOf(",") ? this.lngAndLat = (t.data + "").split(",") : -1 != t.data.indexOf("end") && (console.log("订单结束"), this.orderStatus = !0, this.lngAndLat = t.data)
                }, closeWebSocket: function () {
                    this.websocket.close()
                }, send: function () {
                    console.log("是否调用此方法");
                    var t = document.getElementById("text").value;
                    this.websocket.send(t)
                }, realtimeTrack: function (t) {
                    var e = this;
                    console.log(t), this.marker = null, console.log("+++++++xsaxsaxsa"), console.log(1 !== this.websocket.readyState), 1 !== this.websocket.readyState && (console.log("+++++++xsaxsaxsa"), this.websocket = new WebSocket(this.wsuri), this.websocket.onmessage = this.websocketonmessage), this.isControl = !1, "undefined" != typeof this.lngAndLat && null != this.lngAndLat || (this.lngAndLat = "");
                    var n = this.lngAndLat.toString();
                    console.log(n), this.marker = null, window.clearInterval(this.timename);
                    var i = window.setInterval((function () {
                        if (n = e.lngAndLat.toString(), -1 != n.indexOf("end")) {
                            console.log("订单结束"), e.orderStatus = !0, window.clearInterval(i), e.websocket.close();
                            var o = e.realOrderList.indexOf(t);
                            return o > -1 && e.realOrderList.splice(o, 1), e.hisOrderList.push(t), e.lngAndLat = "", void e.map.setFitView()
                        }
                        if (-1 != n.indexOf(",")) {
                            var s = new AMap.LngLat(e.lngAndLat[0], e.lngAndLat[1], !1);
                            null != e.marker ? (console.log(e.marker), console.log("走1"), e.map.animateEnable = !0, e.map.panTo(s), e.marker.moveTo(s, 2e4, (function (t) {
                                return t
                            }))) : (console.log(e.marker), console.log("周二"), e.marker = new AMap.Marker({
                                map: e.map,
                                position: s,
                                icon: "https://webapi.amap.com/images/car.png",
                                offset: new AMap.Pixel(-26, -13),
                                autoRotation: !0,
                                angle: -90
                            }))
                        }
                        console.log("---发送id---:" + t), e.websocket.send(t)
                    }), 300);
                    console.log("+++++++"), console.log(this.marker)
                }, startAnimation: function () {
                    null != this.polyline && null != this.passedPolyline && 0 != this.lineArr.length ? this.marker.moveAlong(this.lineArr, 200) : alert("轨迹点不存在!")
                }, pauseAnimation: function () {
                    console.log("this.polyline", this.polyline), console.log("this.passedPolyline", this.passedPolyline), console.log("this.lineArr.length", this.lineArr.length), null != this.polyline && null != this.passedPolyline && 0 != this.lineArr.length ? this.marker.pauseMove() : alert("轨迹点不存在!")
                }, resumeAnimation: function () {
                    null != this.polyline && null != this.passedPolyline && 0 != this.lineArr.length ? this.marker.resumeMove() : alert("轨迹点不存在!")
                }, stopAnimation: function () {
                    0 != this.lineArr.length ? this.marker.stopMove() : alert("轨迹点不存在!")
                }, hisTrack: function () {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e) {
                        var n, i = this;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    console.log(this.marker), this.map.setFitView(), console.log(this.marker), this.isControl = !0, n = [], this.$axios({
                                        method: "post",
                                        url: "/track/historyTrackPoints",
                                        data: {orderId: e}
                                    }).then((function (t) {
                                        n = t.data.data, 200 === t.status && (i.lineArr = new Array, console.log("操作成功！"), n.forEach((function (t, e) {
                                            var n = new Array;
                                            n[0] = t.lng, n[1] = t.lat, i.lineArr[e] = n
                                        })), null != i.marker && (console.log("1"), i.map.remove(i.marker), i.marker = null), null != i.polyline && (console.log("1"), i.map.remove(i.polyline), i.polyline = null), null != i.passedPolyline && (console.log("1"), i.map.remove(i.passedPolyline), i.passedPolyline = null), i.marker = new AMap.Marker({
                                            map: i.map,
                                            position: i.lineArr[0],
                                            icon: "https://webapi.amap.com/images/car.png",
                                            offset: new AMap.Pixel(-26, -13),
                                            autoRotation: !0,
                                            angle: -90
                                        }), i.map.setFitView(), console.log(i.marker.getPosition()), i.marker.on("moving", (function (t) {
                                            console.log(t.passedPath), i.map.panTo(i.marker.getPosition()), console.log("this", i), i.passedPolyline.setPath(t.passedPath)
                                        })), i.polyline = new AMap.Polyline({
                                            map: i.map,
                                            path: i.lineArr,
                                            showDir: !0,
                                            strokeColor: "#ffed04",
                                            strokeWeight: 6
                                        }), i.passedPolyline = new AMap.Polyline({
                                            map: i.map,
                                            strokeColor: "#AF5",
                                            strokeWeight: 6
                                        }))
                                    }));
                                case 6:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));

                    function e(e) {
                        return t.apply(this, arguments)
                    }

                    return e
                }()
            }
        }), u = c, f = (n("9f46"), n("5511")), d = Object(f["a"])(u, i, o, !1, null, "3af56fc6", null);
        e["default"] = d.exports
    }, "9d37": function (t, e, n) {
        "use strict";

        function i(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        n.d(e, "a", (function () {
            return i
        }))
    }, "9f46": function (t, e, n) {
        "use strict";
        var i = n("bb1b"), o = n.n(i);
        o.a
    }, bb1b: function (t, e, n) {
    }, f71f: function (t, e, n) {
        var i = n("ec45")("meta"), o = n("fb68"), s = n("e042"), r = n("064e").f, a = 0,
            l = Object.isExtensible || function () {
                return !0
            }, c = !n("238a")((function () {
                return l(Object.preventExtensions({}))
            })), u = function (t) {
                r(t, i, {value: {i: "O" + ++a, w: {}}})
            }, f = function (t, e) {
                if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!s(t, i)) {
                    if (!l(t)) return "F";
                    if (!e) return "E";
                    u(t)
                }
                return t[i].i
            }, d = function (t, e) {
                if (!s(t, i)) {
                    if (!l(t)) return !0;
                    if (!e) return !1;
                    u(t)
                }
                return t[i].w
            }, h = function (t) {
                return c && p.NEED && l(t) && !s(t, i) && u(t), t
            }, p = t.exports = {KEY: i, NEED: !1, fastKey: f, getWeak: d, onFreeze: h}
    }, fea3: function (t, e, n) {
        "use strict";
        var i = n("e7ad"), o = n("e46b"), s = n("bf16"), r = n("ef91"), a = n("f71f"), l = n("206c"), c = n("a73b"),
            u = n("fb68"), f = n("238a"), d = n("d0c5"), h = n("399f"), p = n("1e5b");
        t.exports = function (t, e, n, g, m, v) {
            var b = i[t], w = b, k = m ? "set" : "add", y = w && w.prototype, _ = {}, A = function (t) {
                var e = y[t];
                s(y, t, "delete" == t ? function (t) {
                    return !(v && !u(t)) && e.call(this, 0 === t ? 0 : t)
                } : "has" == t ? function (t) {
                    return !(v && !u(t)) && e.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function (t) {
                    return v && !u(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                } : "add" == t ? function (t) {
                    return e.call(this, 0 === t ? 0 : t), this
                } : function (t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this
                })
            };
            if ("function" == typeof w && (v || y.forEach && !f((function () {
                (new w).entries().next()
            })))) {
                var L = new w, S = L[k](v ? {} : -0, 1) != L, O = f((function () {
                    L.has(1)
                })), C = d((function (t) {
                    new w(t)
                })), x = !v && f((function () {
                    var t = new w, e = 5;
                    while (e--) t[k](e, e);
                    return !t.has(-0)
                }));
                C || (w = e((function (e, n) {
                    c(e, w, t);
                    var i = p(new b, e, w);
                    return void 0 != n && l(n, m, i[k], i), i
                })), w.prototype = y, y.constructor = w), (O || x) && (A("delete"), A("has"), m && A("get")), (x || S) && A(k), v && y.clear && delete y.clear
            } else w = g.getConstructor(e, t, m, k), r(w.prototype, n), a.NEED = !0;
            return h(w, t), _[t] = w, o(o.G + o.W + o.F * (w != b), _), v || g.setStrong(w, t, m), w
        }
    }
}]);
//# sourceMappingURL=chunk-7b2e237e.d3d13876.js.map