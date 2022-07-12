import React, { useEffect,useRef } from "react";
import * as echarts from 'echarts';
import { getPx } from "../shared/getPx";
export const Chart8 = () => {
    const divRef = useRef(null)
    const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];
    useEffect(() => {
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.current,null, {});
// 绘制图表
        myChart.setOption({
            color : colors,
            legend: {
              bottom: '1%',
              left: 'center',
              itemWidth: getPx(13),
              itemheight: getPx(1),
              textStyle: {
                color: 'white',
                fontSize: getPx(15)
              }
            },
            labelLine: {
                  width: getPx(10),
                },
            series: [
              {
                type: 'pie',
                radius: ['50%', '60%'],
          
                itemStyle: {
                //   borderRadius: getPx(10),
                  borderWidth: getPx(1),
                  borderColor: '#0F113A',
                },
                label: {
                  show: false,
                  position: 'center'
                },
          
                data: [
                    {value: 0.07, name: '10-20'},
                    {value: 0.10, name: '20-30'},
                    {value: 0.23, name: '30-40'},
                    {value: 0.28, name: '40-50'},
                    {value: 0.32, name: '50-60'},
                ],
                center: ['50%',getPx(110)],
              }
            ]
        })
    },[])
    return (
            <div className='chart789' ref={divRef}></div>
    )
}