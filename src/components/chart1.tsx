import React, {useContext, useEffect, useRef} from "react";
import * as echarts from 'echarts';
import {getPx} from "../shared/getPx";
import {textWrap} from "../shared/textWrap";
export const Chart1 = () => {
    const divRef = useRef(null)
    useEffect(() => {
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.current,null, {});
// 绘制图表
        myChart.setOption({
            grid: {
                x: getPx(35),
                y: getPx(20),
                x2: getPx(20),
                y2: getPx(45),
            },
            xAxis: {
                data: ['城关区', '七里河区', '西固区', '安宁区', '红谷区', '永登区','皋兰区','渝中区','兰州新区'],
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#2c70b2",
                    },
                } ,
                axisLabel: {
                    fontSize: getPx(13),
                    color: '#717a96',
                    margin: getPx(6),
                    interval: 0,
                    formatter: function(text) {
                        return textWrap(text,2)
                    }
                }
            },
            yAxis: {
                axisLine: {
                    show:true,
                    lineStyle: {
                        color: "#2c70b2",
                    }
                },
                splitLine:{
                    show:false
                },
                axisLabel: {
                    fontSize: getPx(15),
                    color: '#717a96',
                    axisLine: {
                        show:true,
                    },
                },
            },
            series: [
                {
                    type: 'bar',
                    data: [40, 29,26 , 17, 24, 12,16,30,34]
                }
            ]
        });
    },[])
    return (
            <div className='管辖统计 setBorder'>
                <h1>案发派出所管辖统计</h1>
                <div className='barChart' ref={divRef}></div>
            </div>
    )
}