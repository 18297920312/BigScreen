import React, {useContext, useEffect, useRef} from "react";
import * as echarts from 'echarts';
import {getPx} from "../shared/getPx";
import {textWrap} from "../shared/textWrap";
export const Chart2 = () => {
    const divRef = useRef(null)
    useEffect(() => {
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.current,null, {
        });
// 绘制图表
        myChart.setOption({
            grid: {
                x: getPx(60),
                y: getPx(20),
                x2: getPx(10),
                y2: getPx(30),
            },
            xAxis: {
                type: 'value',
                show: false,
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    fontSize: getPx(13),
                    margin: getPx(6),
                    interval: 0,
                    color: '#717a96',
                    formatter: function(text) {
                        return textWrap(text,3)
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "#2c70b2",
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine:{
                    show:false
                },
                data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红谷区公安局', '永登区公安局','皋兰区公安局','渝中区公安局','兰州新区公安局']
            },
            series: [
                {
                    name: '2011',
                    type: 'bar',
                    data: [182, 234, 290, 104, 131, 630,521,456,874],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#2034f9'
                            }, {
                                offset: 1,
                                color: '#04a1ff'
                            }]),
                        }
                    }
                },
                {
                    name: '2012',
                    type: 'bar',
                    data: [105, 234, 310, 121, 134, 681,201,22,69],
                    itemStyle: {                                    // 前两个参数是第一个坐标，后两个参数是第二个坐标 ↓
                        normal: {                                   // 从左到右就者杨使用 ↓ ↓
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#b92ae8'
                            }, {
                                offset: 1,
                                color: '#6773e7'
                            }]),
                        }
                    }
                }
            ]
        });
    },[])
    return (
            <div className='案件破获排名 setBorder'>
                <h1>案件破获排名</h1>
                <div className='barChart' ref={divRef}></div>
                <div className="lengend">
                    破案排名1<span className="second"></span>
                    破案排名2<span className="first"></span>
                </div>
            </div>
    )
}