(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-f3a06ba0"], {
    "3c7f": function (e, t, a) {
        "use strict";
        var o = a("42f0"), n = a.n(o);
        n.a
    }, "42f0": function (e, t, a) {
    }, a741: function (e, t, a) {
        "use strict";
        a.r(t);
        var o = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                staticStyle: {width: "100%", height: "100%", color: "#fff"},
                attrs: {id: "container"}
            }, [a("div", {staticClass: "num"}, [a("div", {staticClass: "num_item"}, [e._m(0), a("p", [e._v(e._s(e.proMessage.totalOrderCount))])]), a("div", {staticClass: "num_item"}, [e._m(1), a("p", [e._v(e._s(e.proMessage.registerTotalCount))])]), a("div", {staticClass: "num_item"}, [e._m(2), a("p", [e._v(e._s(e.proMessage.pay_all))])])]), a("div", {staticClass: "retention"}, [a("h3", [e._v("订单完成率")]), a("div", {staticClass: "progress"}, [a("div", [a("el-progress", {
                attrs: {
                    type: "dashboard",
                    percentage: e.percentage,
                    color: "#f56c6c",
                    "stroke-width": 15,
                    width: 100
                }
            }), a("p", [e._v("日均订单数")])], 1), a("div", [a("el-progress", {
                attrs: {
                    type: "dashboard",
                    percentage: e.percentage1,
                    color: "#e6a23c",
                    "stroke-width": 15,
                    width: 100
                }
            }), a("p", [e._v("周订单数")])], 1), a("div", [a("el-progress", {
                attrs: {
                    type: "circle",
                    percentage: e.percentage2,
                    color: "#5cb87a",
                    "stroke-width": 15,
                    width: 100
                }
            }), a("p", [e._v("月订单数")])], 1), a("div", [a("el-progress", {
                attrs: {
                    type: "circle",
                    percentage: e.percentage3,
                    color: "#6f7ad3",
                    "stroke-width": 15,
                    width: 100
                }
            }), a("p", [e._v("订单累计里程总数")])], 1)])]), a("div", {staticStyle: {backgroundColor: "#1b1b1b"}})])
        }, n = [function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("h5", [a("i", {staticClass: "el-icon-bank-card"}), a("span", [e._v("平台总订单数")])])
        }, function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("h5", [a("i", {staticClass: "el-icon-bank-card"}), a("span", [e._v("平台注册用户总数")])])
        }, function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("h5", [a("i", {staticClass: "el-icon-bank-card"}), a("span", [e._v("平台订单金额总数")])])
        }], r = (a("cc57"), a("c1f0"), a("debc"), {
            data: function () {
                return {
                    proMessage: {totalOrderCount: 8089 , registerTotalCount: 2181, pay_all: 12000},
                    percentage: 60,
                    percentage1: 65,
                    percentage2: 88,
                    percentage3: 78,
                    options: {},
                    citycode: "",
                    wuhanOptions: {},
                    chengduOptions: {},
                    xianOptions: {},
                    haikouOptions: {},
                    resultData: {},
                    colors: [{color: "#f56c6c", percentage: 10}, {color: "#e6a23c", percentage: 20}, {
                        color: "#5cb87a",
                        percentage: 30
                    }, {color: "#1989fa", percentage: 40}, {color: "#6f7ad3", percentage: 50}, {
                        color: "#f56c6c",
                        percentage: 20
                    }, {color: "#e6a23c", percentage: 40}, {color: "#5cb87a", percentage: 60}, {
                        color: "#1989fa",
                        percentage: 80
                    }, {color: "#6f7ad3", percentage: 100}],
                    myChart: null,
                    list: ["列表1", "列表1", "列表1", "列表1", "列表1", "列表1"]
                }
            }, computed: {
                listenshowpage1: function () {
                    return this.$store.state.citycode
                }
            }, watch: {
                listenshowpage1: {
                    handler: function (e, t) {
                        var a = this;
                        console.log(e), console.log(t), this.getRightOrder(e), "420100" === e && this.$axios.get("api/region").then((function (e) {
                            a.options = e.data.data, a.initChart()
                        }), (function (e) {
                            console.log(e)
                        }))
                    }, deep: !0
                }
            }, methods: {
                initMap: function (e) {
                    console.log("-===="), console.log(e);
                    for (var t = new AMap.Map("container", {
                        center: [114.374025, 30.874155],
                        resizeEnable: !0,
                        zoom: 9,
                        mapStyle: "amap://styles/dark"
                    }), a = [[114.374025, 30.874155], [114.802108, 30.842149], [114.30304, 30.594911], [114.029341, 30.582186], [114.08124, 30.309637], [114.283109, 30.578771], [114.39707, 30.634215], [114.307344, 30.546536], [114.313961, 30.349045], [114.400718, 30.504259], [114.142483, 30.622467], [114.264568, 30.57061], [114.265807, 30.549326]], o = 0; o < a.length; o += 1) {
                        var n = new AMap.Text({
                            text: " ",
                            textAlign: "center",
                            verticalAlign: "middle",
                            draggable: !1,
                            cursor: "pointer",
                            angle: 10,
                            style: {
                                width: "10px",
                                height: "10px",
                                "border-radius": "50%",
                                "border-width": 0,
                                "text-align": "center",
                                "font-size": "12px",
                                color: "blue",
                                "background-color": "#009FD9",
                                "-moz-box-shadow": "0px 0px 20px 2px  #009FD9",
                                "box-shadow": "0px 0px 20px 2px #009FD9",
                                "-webkit-box-shadow": "0 0 20px, 20px #009FD9",
                                position: "absoult",
                                animation: "myfirst 1s ease-out",
                                "animation-iteration-count": "infinite",
                                "animation-delay": "1.1s"
                            },
                            position: a[o]
                        });
                        n.setMap(t), n.resumeMove(t)
                    }
                }, getMapdata: function () {
                    this.util.axios({
                        method: "get",
                        url: "/didi/hars",
                        params: {address_code: "420100"}
                    }).then((function (e) {
                        console.log("地图数据"), console.log(e)
                    }))
                }, getTitleData: function () {
                    var e = this;
                    this.util.axios({method: "post", url: "/didi/pro", data: {}}).then((function (t) {
                        console.log(t), 200 === t.status && (e.proMessage = t.data[0])
                    }))
                }, getRightOrder: function (e) {
                    var t = this;
                    console.log(e);
                    var a = "";
                    "420100" === e ? a = "湖北省武汉市" : "510100" === e ? a = "四川省成都市" : "610100" === e ? a = "陕西省西安市" : "460100" === e && (a = "海南省海口市"), this.util.axios({
                        method: "get",
                        params: {city_name: a},
                        url: "/didi/fspos"
                    }).then((function (e) {
                        t.resultData = e.data[0], t.percentage = parseInt(t.resultData._day_comple_rate), t.percentage1 = parseInt(t.resultData._week_comple_rate), t.percentage2 = parseInt(t.resultData._month_comple_rate), t.percentage3 = parseInt(t.resultData._quarter_comple_rate)
                    }))
                }, initChart: function () {
                    this.myChart = this.$echarts.init(document.getElementById("chart")), this.$echarts.registerMap("wuhan", this.wuhanOptions), this.myChart.hideLoading();
                    var e = {
                        "黄陂区": [114.374025, 30.874155],
                        "新洲区": [114.802108, 30.842149],
                        "江岸区": [114.30304, 30.594911],
                        "蔡甸区": [114.029341, 30.582186],
                        "汉南区": [114.08124, 30.309637],
                        "江汉区": [114.283109, 30.578771],
                        "青山区": [114.39707, 30.634215],
                        "武昌区": [114.307344, 30.546536],
                        "江夏区": [114.313961, 30.349045],
                        "洪山区": [114.400718, 30.504259],
                        "东西湖区": [114.142483, 30.622467],
                        "硚口区": [114.264568, 30.57061],
                        "汉阳区": [114.265807, 30.549326]
                    }, t = [{name: "黄陂区", value: 85}, {name: "新洲区", value: 70}, {name: "江岸区", value: 75}, {
                        name: "蔡甸区",
                        value: 80
                    }, {name: "汉南区", value: 78}, {name: "江汉区", value: 77}, {name: "青山区", value: 79}, {
                        name: "武昌区",
                        value: 85
                    }, {name: "江夏区", value: 81}, {name: "洪山区", value: 83}, {name: "东西湖区", value: 50}, {
                        name: "硚口区",
                        value: 65
                    }, {name: "汉阳区", value: 89}], a = function (t) {
                        for (var a = [], o = 0; o < t.length; o++) {
                            var n = e[t[o].name];
                            n && a.push({name: t[o].name, value: n.concat(t[o].value)})
                        }
                        return a
                    }, o = {
                        backgroundColor: "#1b1b1b",
                        tooltip: {
                            trigger: "item",
                            backgroundColor: "#09bdb1",
                            borderColor: "#FFFFCC",
                            showDelay: 0,
                            hideDelay: 0,
                            enterable: !0,
                            transitionDuration: 0,
                            extraCssText: "z-index:100",
                            formatter: function (e, t, a) {
                                var o = "", n = e.name, r = e.value;
                                return o = "<span style='color:#fff;'>" + n + "</span><br/>数据：" + r, o
                            }
                        },
                        legend: {
                            orient: "vertical",
                            top: "top",
                            left: "right",
                            data: ["credit_pm2.5"],
                            textStyle: {color: "#fff"}
                        },
                        visualMap: {
                            show: !1,
                            x: "left",
                            y: "center",
                            seriesIndex: [1],
                            min: 70,
                            max: 90,
                            text: ["高", "低"],
                            textStyle: {color: "#fff"},
                            inRange: {color: ["#5cd2c3", "#419bd3", "#7a95d2", "#5dcbdc", "#838dcd", "#5de9b1", "#5dc6df", "#5db8ea", "#2bbc90", "#5dc4e3"]}
                        },
                        geo: {
                            map: "wuhan",
                            left: "500",
                            roam: !1,
                            itemStyle: {
                                color: "#fff",
                                normal: {
                                    label: {show: !0, textStyle: {color: "#ff0"}},
                                    borderWidth: 1,
                                    borderColor: "rgba(37,124,169)",
                                    shadowColor: "#e8e8e8",
                                    shadowOffsetY: 15,
                                    shadowOffsetX: 8
                                }
                            }
                        },
                        series: [{
                            name: "credit_pm2.5",
                            type: "effectScatter",
                            left: "500",
                            coordinateSystem: "geo",
                            data: a(t),
                            symbolSize: function (e) {
                                return e[2] / 5
                            },
                            showEffectOn: "render",
                            rippleEffect: {brushType: "stroke"},
                            hoverAnimation: !0,
                            label: {normal: {formatter: "{b}", position: "bottom", color: "#fff", show: !0}},
                            itemStyle: {normal: {color: "#10f9ff", shadowBlur: 0, shadowColor: "#05C3F9"}},
                            zlevel: 1
                        }, {
                            type: "map",
                            mapType: "wuhan",
                            left: "500",
                            roam: !1,
                            itemStyle: {
                                normal: {
                                    label: {show: !0, textStyle: {color: "transparent"}},
                                    borderWidth: 1,
                                    borderColor: "#28729f",
                                    areaColor: "#29b4b7"
                                },
                                emphasis: {
                                    label: {show: !1, textStyle: {color: "transparent"}},
                                    borderColor: "",
                                    areaColor: ""
                                }
                            },
                            data: t
                        }]
                    };
                    this.myChart.setOption(o)
                }
            }, mounted: function () {
                this.initMap(), this.citycode = this.$store.state.citycode, this.getRightOrder(this.citycode), this.getTitleData()
            }, created: function () {
                var e = this;
                this.getMapdata(), console.log(this.$store.state.cityCode), this.$axios.get("http://localhost:8080/region").then((function (t) {
                    e.options = t.data.data
                }), (function (e) {
                    console.log(e)
                })), this.$axios.get("/js/wuhan.json").then((function (t) {
                    console.log(t), e.wuhanOptions = t.data, e.initChart()
                }), (function (e) {
                    console.log(e)
                })), this.$axios.get("http://localhost:8080/xian").then((function (t) {
                    e.xianOptions = t.data.data
                }), (function (e) {
                    console.log(e)
                })), this.$axios.get("http://localhost:8080/haikou").then((function (t) {
                    e.haikouOptions = t.data.data
                }), (function (e) {
                    console.log(e)
                })), this.$axios.get("http://localhost:8080/chengdu").then((function (t) {
                    e.chengduOptions = t.data.data
                }), (function (e) {
                    console.log(e)
                }))
            }
        }), i = r, s = (a("3c7f"), a("5511")), c = Object(s["a"])(i, o, n, !1, null, "f3bc4e2e", null);
        t["default"] = c.exports
    }, cc57: function (e, t, a) {
        var o = a("064e").f, n = Function.prototype, r = /^\s*function ([^ (]*)/, i = "name";
        i in n || a("149f") && o(n, i, {
            configurable: !0, get: function () {
                try {
                    return ("" + this).match(r)[1]
                } catch (e) {
                    return ""
                }
            }
        })
    }
}]);
//# sourceMappingURL=chunk-f3a06ba0.a259d412.js.map