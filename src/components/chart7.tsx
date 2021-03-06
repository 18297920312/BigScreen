import React, { useEffect,useRef } from "react";
import ReactDOM from "react-dom";
import * as echarts from 'echarts';
import { getPx } from "../shared/getPx";
export const Chart7 = () => {
    const divRef = useRef(null)
    useEffect(() => {
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.current,null, {});
// 绘制图表
        myChart.setOption({
            color : [ 'lightgreen', 'pink'],
            legend: {
              bottom: '10%',
              left: 'center',
              itemWidth: getPx(30),
              itemheight: getPx(10),
              textStyle: {
                color: 'white',
                fontSize: getPx(20)
              }
            },
            labelLine: {
                  width: getPx(10)
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
                  { value: 80, name: '男' },
                  { value: 20, name: '女' },
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