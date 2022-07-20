import React, {useContext, useEffect, useRef} from "react";
import * as echarts from 'echarts';
import {getPx} from "../shared/getPx";
import {textWrap} from "../shared/textWrap";
export const Chart11 = () => {
    const divRef = useRef(null)
    useEffect(() => {
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.current,null, {});
// 绘制图表
        myChart.setOption({
            legend: {
                orient: 'vertical',
                right: '3%',
                top: '15%',
                padding: 0,
                itemWidth: getPx(20),
                textStyle:{
                    fontSize : getPx(15),
                    color: 333
                } 
              },
              label: {
                show: true, position: 'outside', 
                normal: {
                    textStyle: {
                          color: 'white'  // 改变标示文字的颜色
                    }
                },
          
                // distanceToLabelLine: 0,
                formatter(options) {
                    return options.value * 100 + '%';
                }
              },
           
              series: [
                {
                  type: 'pie',
                  radius: '50%',
                  center:['30%','50%'],
                  data: [
                    {value: 0.08, name: '东岗路'},
                {value: 0.06, name: '段家滩'},
                {value: 0.11, name: '雁北'},
                {value: 0.09, name: '五泉山'},
                {value: 0.12, name: '中山路'},
                {value: 0.06, name: '庆阳路'},
                {value: 0.08, name: '武都路'},
                {value: 0.08, name: '酒泉路'},
                {value: 0.08, name: '天水路'},
                  ],
                }
              ]
        });
    },[])
    return (
        <div className='类型统计 setBorder'>
            <h1>兰州市案发街道统计</h1>
            <div className='barChart' ref={divRef}></div>
        </div>
    )
}