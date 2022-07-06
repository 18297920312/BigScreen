import React, {useContext, useEffect, useRef} from "react";
import * as echarts from 'echarts';
export const Chart1 = () => {
    const getPx = (n) => {
        return  n / 2420 * (window as any).pageWidth
    }

    const divRef = useRef(null)
    useEffect(() => {
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.current,null, {
        });
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
                axisLabel: {
                    fontSize: getPx(13),
                    margin: getPx(6),
                    interval: 0,
                    color: '#5e6579',
                    formatter:function(text) {
                        if(text.length > 2){
                            const arr = text.split('')
                            arr.splice(2,0,'\n')
                            return arr.join('')
                        } else {
                            return text
                        }
                    }
                }
            },
            yAxis: {
                axisLine: {
                    show:true,
                    lineStyle: {

                    },
                },
                splitLine:{
                    show:false
                },
                axisLabel: {
                    fontSize: getPx(15)
                }
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
        <section  className="section1">
            <div className='管辖统计 setBorder'>
                <h1>案发派出所管辖统计</h1>
                <div className='barChart' ref={divRef}></div>
            </div>
        </section>
    )
}