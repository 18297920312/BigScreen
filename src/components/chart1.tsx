import React, {useContext, useEffect, useRef} from "react";
import * as echarts from 'echarts';
import {getPx} from "../shared/getPx";
import {textWrap} from "../shared/textWrap";
export const Chart1 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null)
    const data = [
        {name:'城关区',num:40},
        {name:'七里河区',num:29},
        {name:'西固区',num:26},
        {name:'安宁区',num:17},
        {name:'红谷区',num:24},
        {name:'永登区',num:12},
        {name:'皋兰区',num:16},
        {name:'渝中区',num:30},
        {name:'兰州新区',num:34},
    ]
    const x = (data) =>{
        myChart.current.setOption({
            grid: {
                x: getPx(35),
                y: getPx(20),
                x2: getPx(20),
                y2: getPx(45),
            },
            xAxis: {
                data: data.map(i=>i.name),
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
                    data: data.map(i=>i.num)
                }
            ]
        });
    }
    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
        x(data)
// 绘制图表
        
    },[])
    useEffect(() => {
        setInterval(()=>{
            const newData = [
                {name:'城关区',num:Math.random() * 10},
                {name:'七里河区',num:Math.random() * 10},
                {name:'西固区',num:Math.random() * 10},
                {name:'安宁区',num:Math.random() * 10},
                {name:'红谷区',num:Math.random() * 10},
                {name:'永登区',num:Math.random() * 10},
                {name:'皋兰区',num:Math.random() * 10},
                {name:'渝中区',num:Math.random() * 10},
                {name:'兰州新区',num:Math.random() * 10},
            ]
            x(newData)
        },2000)
    },[])
    return (
            <div className='管辖统计 setBorder'>
                <h1>案发派出所管辖统计</h1>
                <div className='barChart' ref={divRef}></div>
            </div>
    )
}