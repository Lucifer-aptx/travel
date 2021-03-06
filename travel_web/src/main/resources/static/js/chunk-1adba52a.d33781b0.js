(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-1adba52a"], {
    "196b": function (e, a, t) {
        "use strict";
        t.r(a);
        var l = function () {
            var e = this, a = e.$createElement, t = e._self._c || a;
            return t("div", {
                staticStyle: {
                    width: "100%",
                    height: "100%",
                    color: "#fff"
                }
            }, [t("div", {attrs: {id: "chart"}}), t("div", {staticClass: "order_info"}, [t("ul", [t("li", [t("i"), t("b", [e._v("总订单:")]), t("span", [e._v(e._s(e.leftOrder.total_count))])]), t("li", [t("i"), t("b", [e._v("日均订单数:")]), t("span", [e._v(e._s(e.leftOrder.daily_count))])]), t("li", [t("i"), t("b", [e._v("月订单数:")]), t("span", [e._v(e._s(e.leftOrder.cur_month_count))])]), t("li", [t("i"), t("b", [e._v("订单总里程:")]), t("span", [e._v(e._s(e.leftOrder.total_mileage))])])])]), t("div", {staticClass: "retention"}, [t("h3", [e._v("订单数(辆次)")]), t("div", {staticClass: "progress"}, [t("div", [t("el-progress", {
                attrs: {
                    type: "dashboard",
                    percentage: e.percentage,
                    color: "#f56c6c",
                    "stroke-width": 15,
                    width: 100
                }
            }), t("p", [e._v("日均订单数")])], 1), t("div", [t("el-progress", {
                attrs: {
                    type: "dashboard",
                    percentage: 65,
                    color: "#e6a23c",
                    "stroke-width": 15,
                    width: 100
                }
            }), t("p", [e._v("周订单数")])], 1), t("div", [t("el-progress", {
                attrs: {
                    type: "circle",
                    percentage: 88,
                    color: "#5cb87a",
                    "stroke-width": 15,
                    width: 100
                }
            }), t("p", [e._v("月订单数")])], 1), t("div", [t("el-progress", {
                attrs: {
                    type: "circle",
                    percentage: 78,
                    color: "#6f7ad3",
                    "stroke-width": 15,
                    width: 100
                }
            }), t("p", [e._v("订单累计里程总数")])], 1)])]), t("div", {staticClass: "info"}, [t("el-tabs", {attrs: {type: "card"}}, [t("el-tab-pane", [t("span", {
                attrs: {slot: "label"},
                slot: "label"
            }, [t("i", {staticClass: "el-icon-truck"}), e._v(" 车辆")]), t("div", {staticClass: "table"}, [t("el-table", {
                staticStyle: {width: "100%"},
                attrs: {data: e.tableData, border: ""}
            }, [t("el-table-column", {
                attrs: {prop: "city_code", label: "城市", width: "180"},
                scopedSlots: e._u([{
                    key: "default", fn: function (a) {
                        return [t("div", {
                            staticClass: "name-wrapper",
                            staticStyle: {cursor: "pointer"},
                            attrs: {slot: "reference"},
                            slot: "reference"
                        }, ["110100" === a.row.city_code ? t("el-tag", {attrs: {size: "medium"}}, [e._v("北京")]) : "370600" === a.row.city_code ? t("el-tag", {attrs: {size: "medium"}}, [e._v("烟台")]) : "420100" === a.row.city_code ? t("el-tag", {attrs: {size: "medium"}}, [e._v("武汉")]) : "420300" === a.row.city_code ? t("el-tag", {attrs: {size: "medium"}}, [e._v("十堰")]) : "610100" === a.row.city_code ? t("el-tag", {attrs: {size: "medium"}}, [e._v("西安")]) : "460100" === a.row.city_code ? t("el-tag", {attrs: {size: "medium"}}, [e._v("海口")]) : "510100" === a.row.city_code ? t("el-tag", {attrs: {size: "medium"}}, [e._v("成都")]) : e._e()], 1)]
                    }
                }])
            }), t("el-table-column", {
                attrs: {
                    prop: "_day_vehicle_num",
                    label: "日车辆数",
                    width: "180"
                }
            }), t("el-table-column", {
                attrs: {
                    prop: "_month_vehicle_num",
                    label: "月车辆数"
                }
            })], 1)], 1)]), t("el-tab-pane", {attrs: {label: "订单"}}, [t("span", {
                attrs: {slot: "label"},
                slot: "label"
            }, [t("i", {staticClass: "el-icon-tickets"}), e._v(" 订单")]), t("div", {staticClass: "table"}, [t("el-table", {
                staticStyle: {width: "100%"},
                attrs: {data: e.tableData, border: ""}
            }, [t("el-table-column", {
                attrs: {prop: "city_code", label: "城市", width: "180"},
                scopedSlots: e._u([{
                    key: "default", fn: function (a) {
                        return [t("div", {
                            staticClass: "name-wrapper",
                            staticStyle: {cursor: "pointer"},
                            attrs: {slot: "reference"},
                            slot: "reference"
                        }, ["110100" === a.row.city_code ? t("el-tag", {
                            attrs: {size: "medium"},
                            on: {
                                click: function (t) {
                                    return e.handleEdit(a.$index, a.row)
                                }
                            }
                        }, [e._v("北京")]) : "370600" === a.row.city_code ? t("el-tag", {attrs: {size: "medium"}}, [e._v("烟台")]) : "420100" === a.row.city_code ? t("el-tag", {attrs: {size: "medium"}}, [e._v("武汉")]) : "420300" === a.row.city_code ? t("el-tag", {attrs: {size: "medium"}}, [e._v("十堰")]) : "610100" === a.row.city_code ? t("el-tag", {attrs: {size: "medium"}}, [e._v("西安")]) : "460100" === a.row.city_code ? t("el-tag", {attrs: {size: "medium"}}, [e._v("海口")]) : "510100" === a.row.city_code ? t("el-tag", {attrs: {size: "medium"}}, [e._v("成都")]) : e._e()], 1)]
                    }
                }])
            }), t("el-table-column", {
                attrs: {
                    prop: "_day_order_num",
                    label: "日订单数",
                    width: "180"
                }
            }), t("el-table-column", {
                attrs: {
                    prop: "_week_order_num",
                    label: "周订单数"
                }
            }), t("el-table-column", {attrs: {prop: "_month_order_num", label: "月订单数"}})], 1)], 1)])], 1)], 1)])
        }, n = [], r = (t("c904"), t("cc57"), t("6d57"), t("2796"), t("0c6d")), o = {
            data: function () {
                return {
                    percentage3: 0,
                    percentage2: 0,
                    percentage1: 0,
                    percentage: 60,
                    leftOrder: {total_count: 8886009, daily_count: 8081, cur_month_count: 10999996, total_mileage: 19832492836},
                    colors: [{color: "#f56c6c", percentage: 20}, {color: "#e6a23c", percentage: 40}, {
                        color: "#5cb87a",
                        percentage: 60
                    }, {color: "#1989fa", percentage: 80}, {color: "#6f7ad3", percentage: 100}],
                    myChart: null,
                    list: ["列表1", "列表1", "列表1", "列表1", "列表1", "列表1"],
                    tableData: []
                }
            }, mounted: function () {
                this.initChart(), this.getLeftOrder(), this.get0rderTable(), this.getRightOrder()
            }, methods: {
                handleEdit: function (e, a) {
                    console.log(e), console.log(a)
                }, get0rderTable: function () {
                    var e = this;
                    r["a"].axios({method: "post", data: {}, url: "/didi/vehicle_order"}).then((function (a) {
                        console.log(a), e.tableData = a.data
                    }))
                }, getLeftOrder: function () {
                    var e = this;
                    r["a"].axios({method: "post", url: "/didi/dwmm", data: {}}).then((function (a) {
                        e.leftOrder = a.data[0]
                    }))
                }, getRightOrder: function () {
                    var e = this;
                    r["a"].axios({method: "post", data: {}, url: "/didi/fspos1"}).then((function (a) {
                        console.log("完成率"), console.log(a), e.resultData = a.data[0], e.percentage = parseInt(e.resultData._day_comple_rate), e.percentage1 = parseInt(e.resultData._week_comple_rate), e.percentage2 = parseInt(e.resultData._month_comple_rate), e.percentage3 = parseInt(e.resultData._quarter_comple_rate)
                    }))
                }, initChart: function () {
                    var e = "china", a = [{name: "北京", value: 199}, {name: "天津", value: 42}, {name: "河北", value: 102}, {
                            name: "山西",
                            value: 81
                        }, {name: "内蒙古", value: 47}, {name: "辽宁", value: 67}, {name: "吉林", value: 82}, {
                            name: "黑龙江",
                            value: 123
                        }, {name: "上海", value: 24}, {name: "江苏", value: 92}, {name: "浙江", value: 114}, {
                            name: "安徽",
                            value: 109
                        }, {name: "福建", value: 116}, {name: "江西", value: 91}, {name: "山东", value: 119}, {
                            name: "河南",
                            value: 137
                        }, {name: "湖北", value: 116}, {name: "湖南", value: 114}, {name: "重庆", value: 91}, {
                            name: "四川",
                            value: 125
                        }, {name: "贵州", value: 62}, {name: "云南", value: 83}, {name: "西藏", value: 9}, {
                            name: "陕西",
                            value: 80
                        }, {name: "甘肃", value: 56}, {name: "青海", value: 10}, {name: "宁夏", value: 18}, {
                            name: "新疆",
                            value: 180
                        }, {name: "广东", value: 123}, {name: "广西", value: 59}, {name: "海南", value: 14}], t = {},
                        l = [{name: "北京", value: [{name: "科技人才总数", value: 95}, {name: "理科", value: 82}]}, {
                            name: "天津",
                            value: [{name: "文科", value: 22}, {name: "理科", value: 20}]
                        }, {name: "河北", value: [{name: "文科", value: 60}, {name: "理科", value: 42}]}, {
                            name: "山西",
                            value: [{name: "文科", value: 40}, {name: "理科", value: 41}]
                        }, {name: "内蒙古", value: [{name: "文科", value: 23}, {name: "理科", value: 24}]}, {
                            name: "辽宁",
                            value: [{name: "文科", value: 39}, {name: "理科", value: 28}]
                        }, {name: "吉林", value: [{name: "文科", value: 41}, {name: "理科", value: 41}]}, {
                            name: "黑龙江",
                            value: [{name: "文科", value: 35}, {name: "理科", value: 32}]
                        }, {name: "上海", value: [{name: "文科", value: 12}, {name: "理科", value: 12}]}, {
                            name: "江苏",
                            value: [{name: "文科", value: 47}, {name: "理科", value: 45}]
                        }, {name: "浙江", value: [{name: "文科", value: 57}, {name: "理科", value: 57}]}, {
                            name: "安徽",
                            value: [{name: "文科", value: 57}, {name: "理科", value: 52}]
                        }, {name: "福建", value: [{name: "文科", value: 59}, {name: "理科", value: 57}]}, {
                            name: "江西",
                            value: [{name: "文科", value: 49}, {name: "理科", value: 42}]
                        }, {name: "山东", value: [{name: "文科", value: 67}, {name: "理科", value: 52}]}, {
                            name: "河南",
                            value: [{name: "文科", value: 69}, {name: "理科", value: 68}]
                        }, {name: "湖北", value: [{name: "文科", value: 60}, {name: "理科", value: 56}]}, {
                            name: "湖南",
                            value: [{name: "文科", value: 62}, {name: "理科", value: 52}]
                        }, {name: "重庆", value: [{name: "文科", value: 47}, {name: "理科", value: 44}]}, {
                            name: "四川",
                            value: [{name: "文科", value: 65}, {name: "理科", value: 60}]
                        }, {name: "贵州", value: [{name: "文科", value: 32}, {name: "理科", value: 30}]}, {
                            name: "云南",
                            value: [{name: "文科", value: 42}, {name: "理科", value: 41}]
                        }, {name: "西藏", value: [{name: "文科", value: 5}, {name: "理科", value: 4}]}, {
                            name: "陕西",
                            value: [{name: "文科", value: 38}, {name: "理科", value: 42}]
                        }, {name: "甘肃", value: [{name: "文科", value: 28}, {name: "理科", value: 28}]}, {
                            name: "青海",
                            value: [{name: "文科", value: 5}, {name: "理科", value: 5}]
                        }, {name: "宁夏", value: [{name: "文科", value: 10}, {name: "理科", value: 8}]}, {
                            name: "新疆",
                            value: [{name: "文科", value: 36}, {name: "理科", value: 41}]
                        }, {name: "广东", value: [{name: "文科", value: 63}, {name: "理科", value: 60}]}, {
                            name: "广西",
                            value: [{name: "文科", value: 29}, {name: "理科", value: 30}]
                        }, {name: "海南", value: [{name: "文科", value: 8}, {name: "理科", value: 6}]}];
                    this.myChart = this.$echarts.init(document.getElementById("chart")), this.myChart.showLoading();
                    var n = this.$echarts.getMap(e).geoJson.features;
                    this.myChart.hideLoading(), n.forEach((function (e) {
                        var a = e.properties.name;
                        t[a] = e.properties.cp
                    }));
                    var r = function (e) {
                        for (var a = [], l = 0; l < e.length; l++) {
                            var n = t[e[l].name];
                            n && a.push({name: e[l].name, value: n.concat(e[l].value)})
                        }
                        return a
                    }, o = {
                        backgroundColor: "#1b1b1b",
                        tooltip: {
                            padding: 0,
                            enterable: !0,
                            transitionDuration: 1,
                            textStyle: {color: "#000", decoration: "none"},
                            formatter: function (e) {
                                var a = "";
                                return a = '<div style="width:200px;height:100px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)"><div style="width:80%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 20px"><el-progress :percentage="50" status="warning"></el-progress><span style="margin-left:10px;color:#fff;font-size:16px;">' + e.name + '</span></div><p style="color:#fff;font-size:15px;"><i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px"></i>车辆分布数：<span style="color:#11ee7d;margin:0 6px;">' + l.length + '</span>个</p><p style="color:#fff;font-size:15px;"><i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px"></i>车辆订单数<span style="color:#f48225;margin:0 6px;">' + l.length + "</span>个</p></div>", a
                            }
                        },
                        visualMap: {
                            show: !0,
                            min: 0,
                            max: 200,
                            left: "10%",
                            top: "bottom",
                            calculable: !0,
                            seriesIndex: [1],
                            inRange: {color: ["#04387b", "#467bc0"]}
                        },
                        geo: {
                            show: !0,
                            map: e,
                            label: {normal: {show: !1}, emphasis: {show: !1}},
                            roam: !0,
                            itemStyle: {
                                normal: {areaColor: "#023677", borderColor: "#1180c7"},
                                emphasis: {areaColor: "#4499d0"}
                            }
                        },
                        series: [{
                            name: "散点",
                            type: "scatter",
                            coordinateSystem: "geo",
                            data: r(a),
                            symbolSize: function (e) {
                                return e[2] / 10
                            },
                            label: {normal: {formatter: "{b}", position: "right", show: !0}, emphasis: {show: !0}},
                            itemStyle: {normal: {color: "#fff"}}
                        }, {
                            type: "map",
                            map: e,
                            geoIndex: 0,
                            aspectScale: .75,
                            showLegendSymbol: !1,
                            label: {normal: {show: !0}, emphasis: {show: !1, textStyle: {color: "#fff"}}},
                            roam: !0,
                            itemStyle: {
                                normal: {areaColor: "#031525", borderColor: "#3B5077"},
                                emphasis: {areaColor: "#2B91B7"}
                            },
                            animation: !1,
                            data: a
                        }, {name: "点", type: "scatter", coordinateSystem: "geo", zlevel: 6}, {
                            name: "Top 5",
                            type: "effectScatter",
                            coordinateSystem: "geo",
                            data: r(a.sort((function (e, a) {
                                return a.value - e.value
                            })).slice(0, 10)),
                            symbolSize: function (e) {
                                return e[2] / 10
                            },
                            showEffectOn: "render",
                            rippleEffect: {brushType: "stroke"},
                            hoverAnimation: !0,
                            label: {normal: {formatter: "{b}", position: "left", show: !1}},
                            itemStyle: {normal: {color: "yellow", shadowBlur: 10, shadowColor: "yellow"}},
                            zlevel: 1
                        }]
                    };
                    this.myChart.setOption(o)
                }
            }
        }, i = o, s = (t("7b0f"), t("5511")), m = Object(s["a"])(i, l, n, !1, null, "ca0e5e0a", null);
        a["default"] = m.exports
    }, "7b0f": function (e, a, t) {
        "use strict";
        var l = t("d649"), n = t.n(l);
        n.a
    }, d649: function (e, a, t) {
    }
}]);
//# sourceMappingURL=chunk-1adba52a.d33781b0.js.map