import React, {useContext, useEffect, useRef} from "react";
import * as echarts from 'echarts';
import {getPx} from "../shared/getPx";
export const Chart4 = () => {
    const divRef = useRef(null)
    useEffect(() => {
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.current,null, {});
// 绘制图表
        myChart.setOption({
            grid: {
                top: getPx(25),
                left: getPx(15),
                right: getPx(25),
                bottom: getPx(20),
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    show: false,
                } ,
                axisLabel: {
                    fontSize: getPx(13),
                    color: '#717a96',
                },
                axisTick: {
                    show: false
                },
                splitLine:{
                    show:true,
                    lineStyle: {
                        color: '#063f7a'
                    }
                },
                data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
            },
            yAxis: {
                type: 'value',
                splitLine:{
                    show:true,
                    lineStyle: {
                        color: '#063f7a'
                    }
                },
                axisLabel: {
                    formatter: (text) => {
                        return text * 100 + '%'
                    },
                    fontSize: getPx(13),
                    color: '#717a96',
                }
            },
            series: [
                {
                    data: [
                        0.15, 0.13, 0.11,
                        0.13, 0.14, 0.15,
                        0.16, 0.18, 0.21,
                        0.19, 0.17, 0.16,
                        0.15
                    ],
                    type: 'line',
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#414a9f'
                        }, {
                            offset: 1,
                            color: '#1b1d52'
                        }]),
                    }
                }
            ]
        })
    },[])
    return (
        <div className='案发时段分析 setBorder'>
            <h1>案发时段分析</h1>
            <div className='barChart' ref={divRef}></div>
        </div>
    )
}