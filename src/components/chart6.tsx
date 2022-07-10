import React, {useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import * as echarts from 'echarts';
// @ts-ignore
import china from '../geo/china.json';
// import '../geo/china.js';
import {getPx} from "../shared/getPx";
export const Chart6 = () => {
    const divRef = useRef(null)
    const colors = {'青海省': '#BB31F7', '甘肃省': '#fd154b', '四川省': '#0eee06'};
    useEffect(() => {
// 基于准备好的dom，初始化echarts实例
        echarts.registerMap("china", china);
        var myChart = echarts.init(divRef.current,null, {});
// 绘制图表
        var data = [
            {
                name: "甘肃省",
                itemStyle: {
                    areaColor: "#fd154b",
                },
                // value:[110.3467, 41.4899]
            },
            {
                name: "四川省",
                itemStyle: {
                    areaColor: "#0eee06",
                }
            },
            {
                name: "青海省",
                itemStyle: {
                    areaColor: "#BB31F7",
                },
            },
        ];
        myChart.setOption({
                // backgroundColor: "black",
                geo: {
                    // map: "china",
                    // aspectScale: 0.8,
                    // layoutCenter: ["50%", "50%"],
                    // layoutSize: "120%",
                    itemStyle: {
                        normal: {
                            areaColor: {
                                type: "linear-gradient",
                                x: 0,
                                y: 1200,
                                x2: 1000,
                                y2: 0,
                                colorStops: [
                                    // {
                                    //     offset: 0,
                                    //     color: "#152E6E", // 0% 处的颜色
                                    // },
                                    // {
                                    //     offset: 1,
                                    //     color: "#0673AD", // 50% 处的颜色
                                    // },
                                ],
                                global: true, // 缺省为 false
                            },
                            // shadowColor: "#0f5d9d",
                            // shadowOffsetX: 0,
                            // shadowOffsetY: 15,
                            // opacity: 0.5,
                        },
                        // emphasis: {
                        //     areaColor: "#0f5d9d",
                        // },
                    },

                    regions: [
                        {
                            name: "南海诸岛",
                            itemStyle: {
                                areaColor: "rgba(0, 10, 52, 1)",
                                borderColor: "rgba(0, 10, 52, 1)",
                                normal: {
                                    opacity: 0,
                                    label: {
                                        show: false,
                                        color: "#009cc9",
                                    },
                                },
                            },
                            label: {
                                show: false,
                                color: "#FFFFFF",
                                fontSize: 12,
                            },
                        },
                    ],
                },
                series: [
                    {
                        type: "map",
                        selectedMode: "multiple",
                        mapType: "china",
                        aspectScale: 0.8,
                        layoutCenter: ["50%", "50%"], //地图位置
                        layoutSize: "120%",
                        zoom: 0.3, //当前视角的缩放比例
                        roam: true, //是否开启平游或缩放
                        scaleLimit: {
                            //滚轮缩放的极限控制
                            min: 0.8,
                            max: 2,
                        },
                        label: {
                            show: false,
                            color: "#FFFFFF",
                            fontSize: 16,
                        },
                        itemStyle: {
                            normal: {
                                areaColor: "#0c3653",
                                borderColor: "#1cccff",
                                borderWidth: 1.8,
                            },
                            emphasis: {
                                areaColor: "#56b1da",
                                label: {
                                    show: false,
                                    color: "#fff",
                                },
                            },
                        },
                        data: data,
                    },
                    {
                        name: 'Top 5',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
                        // symbolSize: [30,120],
                        // symbolOffset:[0, '-40%'] ,
                        label: {
                            normal: {
                                show: false,
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#e3e1da', //标志颜色
                            }
                        },
                        data: data,
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        zlevel: 1
                    },
                ],


        });
    },[])
    return (
        <div className='籍贯 setBorder'>
            <h1>全是犯罪人员籍贯分布图</h1>
            <div className="wrapper">
                <div className='barChart' ref={divRef}></div>
                <div className="legend setBorder">
                    <span className="icon" style={{background: colors['甘肃省']}}/>甘肃籍
                    <span className="icon" style={{background: colors['四川省']}}/>四川籍
                    <span className="icon" style={{background: colors['青海省']}}/>青海籍
                </div>
                <div className="notes">此地图仅显示了中国的部分区域</div>
            </div>
        </div>
    )
}