(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-31860728"], {
    2226: function (t, e, a) {
        "use strict";
        a.r(e);
        var r = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {attrs: {id: "container"}}, [a("div", {staticClass: "left"}, [a("div", {staticClass: "order_info"}, [a("h2", [t._v("订单概况")]), a("ul", [a("li", [a("i", {staticClass: "el-icon-document"}), t._v("订单总数: " + t._s(t.orderOverview.orderCount))]), a("li", [a("i", {staticClass: "el-icon-user-solid"}), t._v("乘车人数: " + t._s(t.orderOverview.orderPassengerCount))]), a("li", [a("i", {staticClass: "el-icon-location"}), t._v("累计轨迹点数: " + t._s(t.pointsCount))])])]), a("div", {staticClass: "order_count"}, [a("h2", [t._v("\n        订单数量变化\n        "), a("p", {
                on: {
                    click: function (e) {
                        return t.open()
                    }
                }
            }, [t._v("详情")])]), a("div", {attrs: {id: "myChartOne"}})])]), t._m(0), a("el-dialog", {
                attrs: {
                    title: "详情",
                    width: "70%",
                    visible: t.dialogTableVisible
                }, on: {
                    "update:visible": function (e) {
                        t.dialogTableVisible = e
                    }
                }
            }, [a("div", {
                staticStyle: {width: "100%", height: "300px", "z-index": "999"},
                attrs: {id: "myChartTwo"}
            })])], 1)
        }, i = [function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "right"}, [a("div", {staticClass: "speed"}, [a("h2", [t._v("平均行车速度")]), a("div", {attrs: {id: "myChartThree"}})])])
        }], n = a("9d37"), o = (a("c904"), a("9a33"), a("9dd9"), a("f548"), a("63ff"), a("e5af")), s = (a("365c"), {
            data: function () {
                return {
                    nowCity: 510100,
                    dialogTableVisible: !1,
                    orderOverview: {orderCount: 8009, orderPassengerCount: 10836},
                    orderGps: [],
                    markers: [],
                    pointsCount: 1032,
                    startTimeDate: "",
                    endTime: "",
                    endTimeDate: null,
                    startTime: "2016-11-01 10:06:14",
                    t: 0,
                    icon: {
                        type: "image",
                        image: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                        size: [6, 9],
                        anchor: "bottom-center",
                        angel: 0,
                        retina: !0
                    },
                    ellipseMarker: null,
                    map: null,
                    layer: null,
                    myChart: null,
                    myChart2: null,
                    myChart3: null,
                    myChart4: null,
                    myChart5: null,
                    hourOrderCount: {},
                    keyData: [],
                    keyData2: [],
                    itemData: [],
                    realtimeTrackInterval: ""
                }
            }, created: function () {
                var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                Date.prototype.format = function (t) {
                                    var e = {
                                        "M+": this.getMonth() + 1,
                                        "d+": this.getDate(),
                                        "h+": this.getHours(),
                                        "m+": this.getMinutes(),
                                        "s+": this.getSeconds(),
                                        "q+": Math.floor((this.getMonth() + 3) / 3),
                                        S: this.getMilliseconds()
                                    };
                                    for (var a in/(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))), e) new RegExp("(" + a + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[a] : ("00" + e[a]).substr(("" + e[a]).length)));
                                    return t
                                }, this.t = new Date(this.startTime).getTime(), this.t += 12e4, this.endTimeDate = new Date(this.t), this.endTime = this.endTimeDate.format("yyyy-MM-dd hh:mm:ss");
                            case 5:
                            case"end":
                                return t.stop()
                        }
                    }), t, this)
                })));

                function e() {
                    return t.apply(this, arguments)
                }

                return e
            }(), computed: {
                listenshowpage1: function () {
                    return this.$store.state.citycode
                }
            }, watch: {
                listenshowpage1: {
                    handler: function (t, e) {
                        console.log(t), window.clearInterval(this.realtimeTrackInterval), window.clearInterval(this.realtimeTrackInterval1), window.clearInterval(this.realtimeTrackInterval2), this.changeCity(t)
                    }, deep: !0
                }
            }, destroyed: function () {
                window.clearInterval(this.realtimeTrackInterval), window.clearInterval(this.realtimeTrackInterval1), window.clearInterval(this.realtimeTrackInterval2)
            }, mounted: function () {
                this.getHourOrderCount(this.nowCity), this.getOrderOverview(this.nowCity), this.initChart3(), this.initMap(), console.log("设置正北方向......")
            }, methods: {
                changeCity: function (t) {
                    t = t;
                    this.realtimeTrack(t), this.getHourOrderCount(t), this.getOrderOverview(t)
                }, open: function () {
                    var t = this, e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (var a in this.dialogTableVisible = !0, console.log("sxsxsxsxsxsssss"), console.log(this.hourOrderCount), this.hourOrderCount) console.log(a), console.log("+++++"), e.splice(parseInt(a.split("-")[2].split("_")[1]) - 1, 1, parseInt(this.hourOrderCount[a]));
                    var r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                    console.log(e), this.$nextTick((function () {
                        t.initChart2(r, e)
                    }))
                }, changeDate: function (t) {
                    console.log(t), this.getOrderOverview(this.nowCity), this.changeCity(this.nowCity)
                }, getOrderOverview: function (t) {
                    var e = this;
                    this.util.axios({
                        method: "post",
                        url: "/track/orderOverview",
                        data: {cityCode: t, startTime: "2021-08-28 01:09:12", endTime: "2021-08-28 23:59:59"}
                    }).then((function (t) {
                        null === t.data.data ? e.orderOverview = {
                            orderCount: 0,
                            orderPassengerCount: 0
                        } : e.orderOverview = t.data.data
                    }))
                }, getHourOrderCount: function () {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t(e) {
                        var a = this;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    this.hourOrderCount = [], this.keyData = [], this.itemData = [], this.keyData2 = [], this.util.axios({
                                        method: "post",
                                        url: "/track/hourOrderCount",
                                        data: {
                                            cityCode: e,
                                            startTime: "2021-08-28  00:00:00",
                                            endTime: "2021-08-28  23:00:00"
                                        }
                                    }).then((function (t) {
                                        for (var e in console.log("订单详情"), console.log(t), a.hourOrderCount = t.data.data, a.hourOrderCount) a.keyData.push(e);
                                        for (var r in a.keyData.sort(), a.keyData) a.itemData.push(a.hourOrderCount[a.keyData[r]]);
                                        for (var i = 0; i < a.keyData.length; i++) a.keyData2.push(a.keyData[i].split("-")[2].split("_")[1]);
                                        console.log(a.itemData), console.log(a.keyData2), a.initChart()
                                    }));
                                case 5:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })));

                    function e(e) {
                        return t.apply(this, arguments)
                    }

                    return e
                }(), initMap: function () {
                    var t = this;
                    this.map = new AMap.Map("container", {
                        resizeEnable: !0,
                        rotateEnable: !0,
                        pitchEnable: !1,
                        zoom: 17,
                        pitch: 65,
                        rotation: 45,
                        viewMode: "3D",
                        expandZoomRange: !0,
                        zoomToAccuracy: !0,
                        center: [104.082214, 30.673637],
                        mapStyle: "amap://styles/34eee3392325080eabb764ca4af5f2ab"
                    }), AMap.plugin(["AMap.ControlBar"], (function () {
                        t.map.addControl(new AMap.ControlBar)
                    })), this.layer = new AMap.LabelsLayer({
                        zooms: [3, 20],
                        zIndex: 1e3,
                        animation: !1,
                        collision: !1
                    }), this.map.add(this.layer)
                }, initChart: function () {
                    var t = {
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {type: "cross", label: {backgroundColor: "#6a7985"}}
                        },
                        xAxis: {
                            axisLine: {lineStyle: {type: "solid", color: "#6f7ad3", width: "2"}},
                            axisLabel: {textStyle: {color: "#6f7ad3"}, formatter: "{value} 时"},
                            type: "category",
                            boundaryGap: !1,
                            data: this.keyData2
                        },
                        yAxis: Object(n["a"])({
                            axisLine: {lineStyle: {type: "solid", color: "#6f7ad3", width: "2"}},
                            axisLabel: {textStyle: {color: "#6f7ad3"}},
                            type: "value"
                        }, "axisLabel", {margin: 2, formatter: "{value} 个"}),
                        series: [{
                            name: "订单数量",
                            type: "line",
                            stack: "总量",
                            areaStyle: {normal: {color: "#009FD9"}},
                            itemStyle: {normal: {color: "#00a0ea", lineStyle: {color: "#253A5D"}}},
                            data: this.itemData
                        }]
                    };
                    this.myChart = this.$echarts.init(document.getElementById("myChartOne")), this.myChart.setOption(t)
                }, initChart2: function (t, e) {
                    var a = {
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {type: "cross", label: {backgroundColor: "#6a7985"}}
                        },
                        xAxis: {
                            axisLine: {lineStyle: {type: "solid", color: "#6f7ad3", width: "2"}},
                            axisLabel: {textStyle: {color: "#6f7ad3"}, interval: 0, formatter: "{value} 时"},
                            type: "category",
                            boundaryGap: !1,
                            data: t
                        },
                        yAxis: Object(n["a"])({
                            axisLine: {lineStyle: {type: "solid", color: "#6f7ad3", width: "2"}},
                            axisLabel: {textStyle: {color: "#6f7ad3"}},
                            type: "value"
                        }, "axisLabel", {margin: 2, formatter: "{value} 个"}),
                        series: [{
                            name: "订单数量",
                            type: "line",
                            stack: "总量",
                            areaStyle: {normal: {color: "#009FD9"}},
                            itemStyle: {normal: {color: "#00a0ea", lineStyle: {color: "#253A5D"}}},
                            data: e
                        }]
                    };
                    this.myChart2 = this.$echarts.init(document.getElementById("myChartTwo")), this.myChart2.setOption(a)
                }, initChart3: function () {
                    var t = {
                        tooltip: {trigger: "axis"},
                        grid: {left: "3%", right: "4%", bottom: "3%", containLabel: !0},
                        toolbox: {feature: {saveAsImage: {}}},
                        xAxis: {
                            axisLine: {lineStyle: {type: "solid", color: "#fff", width: "1"}},
                            axisLabel: {textStyle: {color: "#fff"}},
                            type: "category",
                            boundaryGap: !1,
                            data: ["周一", "周二", "周三","周四","周五"]
                        },
                        yAxis: {
                            axisLine: {type: "value", lineStyle: {type: "solid", color: "#fff", width: "1"}},
                            axisLabel: {textStyle: {color: "#fff"}},
                            type: "value"
                        },
                        series: [{
                            name: "行驶速度",
                            type: "line",
                            stack: "总量",
                            itemStyle: {normal: {color: "#00a0ea", lineStyle: {color: "#009FD9"}}},
                            data: [120, 132, 101]
                        }]
                    };
                    this.myChart = this.$echarts.init(document.getElementById("myChartThree")), this.myChart.setOption(t)
                }, initChart4: function () {
                    var t = {
                        series: [{
                            name: "访问来源",
                            type: "pie",
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: !1,
                            label: {
                                normal: {show: !1, position: "center"},
                                emphasis: {show: !0, textStyle: {fontSize: "30", fontWeight: "bold"}}
                            },
                            labelLine: {normal: {show: !1}},
                            data: [{value: 335, name: "直接访问"}, {value: 310, name: "行驶速度"}, {
                                value: 234,
                                name: "联盟广告"
                            }, {value: 135, name: "视频广告"}, {value: 1548, name: "搜索引擎"}]
                        }]
                    };
                    this.myChart = this.$echarts.init(document.getElementById("myChartFour")), this.myChart.setOption(t)
                }, initChart5: function () {
                    var t = {
                        tooltip: {},
                        dataset: {source: [["1", 43.3, 85.8], ["2", 83.1, 73.4], ["3", 86.4, 65.2], ["4", 72.4, 53.9]]},
                        xAxis: {type: "category", axisLine: {lineStyle: {color: "#fff"}}},
                        yAxis: {axisLine: {lineStyle: {color: "#fff"}}},
                        series: [{type: "bar"}, {type: "bar"}]
                    };
                    this.myChart = this.$echarts.init(document.getElementById("myChartFive")), this.myChart.setOption(t)
                }, drawCircleMarker: function (t) {
                    this.markers = [];
                    for (var e = 0; e < t.length; e++) {
                        var a = t[e].lnglat, r = {position: a, icon: this.icon}, i = new AMap.LabelMarker(r);
                        this.markers.push(i)
                    }
                    this.layer.add(this.markers)
                }
            }
        }), l = s, c = (a("6bb7"), a("5511")), u = Object(c["a"])(l, r, i, !1, null, "378ed85d", null);
        e["default"] = u.exports
    }, "2ea2": function (t, e, a) {
        var r = a("c2f7"), i = a("ceac").concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function (t) {
            return r(t, i)
        }
    }, "538d": function (t, e, a) {
    }, "6bb7": function (t, e, a) {
        "use strict";
        var r = a("538d"), i = a.n(r);
        i.a
    }, "9d37": function (t, e, a) {
        "use strict";

        function r(t, e, a) {
            return e in t ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = a, t
        }

        a.d(e, "a", (function () {
            return r
        }))
    }, "9dd9": function (t, e, a) {
        var r = a("e7ad"), i = a("1e5b"), n = a("064e").f, o = a("2ea2").f, s = a("2fd4"), l = a("f1fe"), c = r.RegExp,
            u = c, h = c.prototype, d = /a/g, f = /a/g, m = new c(d) !== d;
        if (a("149f") && (!m || a("238a")((function () {
            return f[a("cb3d")("match")] = !1, c(d) != d || c(f) == f || "/a/i" != c(d, "i")
        })))) {
            c = function (t, e) {
                var a = this instanceof c, r = s(t), n = void 0 === e;
                return !a && r && t.constructor === c && n ? t : i(m ? new u(r && !n ? t.source : t, e) : u((r = t instanceof c) ? t.source : t, r && n ? l.call(t) : e), a ? this : h, c)
            };
            for (var p = function (t) {
                t in c || n(c, t, {
                    configurable: !0, get: function () {
                        return u[t]
                    }, set: function (e) {
                        u[t] = e
                    }
                })
            }, v = o(u), y = 0; v.length > y;) p(v[y++]);
            h.constructor = c, c.prototype = h, a("bf16")(r, "RegExp", c)
        }
        a("1157")("RegExp")
    }, a2cd: function (t, e, a) {
        "use strict";
        var r = a("238a");
        t.exports = function (t, e) {
            return !!t && r((function () {
                e ? t.call(null, (function () {
                }), 1) : t.call(null)
            }))
        }
    }, c904: function (t, e, a) {
        "use strict";
        var r = a("e46b"), i = a("5daa"), n = a("008a"), o = a("238a"), s = [].sort, l = [1, 2, 3];
        r(r.P + r.F * (o((function () {
            l.sort(void 0)
        })) || !o((function () {
            l.sort(null)
        })) || !a("a2cd")(s)), "Array", {
            sort: function (t) {
                return void 0 === t ? s.call(n(this)) : s.call(n(this), i(t))
            }
        })
    }, f548: function (t, e, a) {
        "use strict";
        var r = a("69b3"), i = a("008a"), n = a("eafa"), o = a("ee21"), s = a("e754"), l = a("7108"), c = Math.max,
            u = Math.min, h = Math.floor, d = /\$([$&`']|\d\d?|<[^>]*>)/g, f = /\$([$&`']|\d\d?)/g, m = function (t) {
                return void 0 === t ? t : String(t)
            };
        a("0aed")("replace", 2, (function (t, e, a, p) {
            return [function (r, i) {
                var n = t(this), o = void 0 == r ? void 0 : r[e];
                return void 0 !== o ? o.call(r, n, i) : a.call(String(n), r, i)
            }, function (t, e) {
                var i = p(a, t, this, e);
                if (i.done) return i.value;
                var h = r(t), d = String(this), f = "function" === typeof e;
                f || (e = String(e));
                var y = h.global;
                if (y) {
                    var g = h.unicode;
                    h.lastIndex = 0
                }
                var C = [];
                while (1) {
                    var b = l(h, d);
                    if (null === b) break;
                    if (C.push(b), !y) break;
                    var w = String(b[0]);
                    "" === w && (h.lastIndex = s(d, n(h.lastIndex), g))
                }
                for (var x = "", k = 0, O = 0; O < C.length; O++) {
                    b = C[O];
                    for (var S = String(b[0]), D = c(u(o(b.index), d.length), 0), T = [], I = 1; I < b.length; I++) T.push(m(b[I]));
                    var M = b.groups;
                    if (f) {
                        var A = [S].concat(T, D, d);
                        void 0 !== M && A.push(M);
                        var L = String(e.apply(void 0, A))
                    } else L = v(S, d, D, T, M, e);
                    D >= k && (x += d.slice(k, D) + L, k = D + S.length)
                }
                return x + d.slice(k)
            }];

            function v(t, e, r, n, o, s) {
                var l = r + t.length, c = n.length, u = f;
                return void 0 !== o && (o = i(o), u = d), a.call(s, u, (function (a, i) {
                    var s;
                    switch (i.charAt(0)) {
                        case"$":
                            return "$";
                        case"&":
                            return t;
                        case"`":
                            return e.slice(0, r);
                        case"'":
                            return e.slice(l);
                        case"<":
                            s = o[i.slice(1, -1)];
                            break;
                        default:
                            var u = +i;
                            if (0 === u) return a;
                            if (u > c) {
                                var d = h(u / 10);
                                return 0 === d ? a : d <= c ? void 0 === n[d - 1] ? i.charAt(1) : n[d - 1] + i.charAt(1) : a
                            }
                            s = n[u - 1]
                    }
                    return void 0 === s ? "" : s
                }))
            }
        }))
    }
}]);
//# sourceMappingURL=chunk-31860728.9d9c1d76.js.map