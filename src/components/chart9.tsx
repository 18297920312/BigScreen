import React, {useContext, useEffect, useRef} from "react";
import * as echarts from 'echarts';
import {getPx} from "../shared/getPx";
export const Chart9 = () => {
    const divRef = useRef(null)
    useEffect(() => {
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.current,null, {});
// 绘制图表
        myChart.setOption({
            grid: {
                top: getPx(25),
                left: getPx(5),
                right: getPx(25),
                bottom: getPx(80),
                containLabel: true,
            },
            legend: {
                data: ['盗窃'],
                itemHeight: getPx(20),
                itemWidth: getPx(50),
                bottom: getPx(20),
                padding: 0,
                textStyle: {
                    fontSize: getPx(25),
                    color: '#6887a9'
                }
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
                data: [0, 18, 28, 38, 48, 58, 68, 78],
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
                },
                
            },
            series: [
                {
                    name: '盗窃',
                    data: [
                        0.19, 0.20, 0.26,
                        0.35, 0.26, 0.20,
                        0.08, 0.06
                      ],
                    itemStyle: {
                        color: '#F7A110',
                        width:getPx(10)
                    },
                    type: 'line',
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#F7A110'
                          }, {
                            offset: 1,
                            color: '#1B1D52'
                          }]),
                    }
                }
            ]
        })
    },[])
    return (
        <div className='犯罪年龄趋势'>
            <h1>犯罪年龄趋势图</h1>
            <div className='barChart' ref={divRef}></div>
        </div>
    )
}