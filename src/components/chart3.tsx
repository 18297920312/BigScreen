import React, {useContext, useEffect, useRef} from "react";
import * as echarts from 'echarts';
import {getPx} from "../shared/getPx";
import {textWrap} from "../shared/textWrap";
export const Chart3 = () => {
    const divRef = useRef(null)
    useEffect(() => {
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.current,null, {});
// 绘制图表
        myChart.setOption({
            legend: {
                data: ['盗窃', '两枪', '诈骗', '谋杀', '卖淫'],
                itemHeight: getPx(10),
                bottom: 0,
                textStyle: {
                    fontSize: getPx(15),
                    color: '#6887a9'
                }
            },
            grid: {
                top: getPx(5),
                left: getPx(15),
                right: getPx(20),
                bottom: getPx(70),
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data: [ '2011','', '2013', '', '2015', '', '2017',''],
                axisTick: {
                    show: false
                },
                splitLine:{
                    show:true,
                    lineStyle: {
                        color: '#063f7a'
                    }
                },
                axisLine:{
                    interval: 1,
                    lineStyle: {
                        color: "#063f7a"
                    }
                },
                axisLabel: {
                    fontSize: getPx(13),
                    color: '#717a96',
                },
            },
            yAxis: {
                type: 'value',
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
            },
            series: [
                {
                    name: '盗窃',
                    type: 'line',
                    stack: 'Total',
                    data: [12, 13, 10, 13, 9, 23, 21, 20]
                },
                {
                    name: '两枪',
                    type: 'line',
                    stack: 'Total',
                    data: [22, 22, 11, 24, 20, 30, 30, 15]
                },
                {
                    name: '诈骗',
                    type: 'line',
                    stack: 'Total',
                    data: [15, 23, 21, 15, 19, 33, 41, 36]
                },
                {
                    name: '卖淫',
                    type: 'line',
                    stack: 'Total',
                    data: [20, 32, 20, 34, 10, 30, 20, 25]
                },
                {
                    name: '谋杀',
                    type: 'line',
                    stack: 'Total',
                    data: [22, 32, 11, 34, 12, 13, 27, 26]
                }
            ]
        })
    },[])
    return (
        <div className='案发统计 setBorder'>
            <h1>发案趋势分析</h1>
            <div className='barChart' ref={divRef}></div>
        </div>
    )
}