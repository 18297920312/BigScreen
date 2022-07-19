import React, {useContext, useEffect, useRef} from "react";
import * as echarts from 'echarts';
import {getPx} from "../shared/getPx";
import {textWrap} from "../shared/textWrap";
export const Chart10 = () => {
    const divRef = useRef(null)
    useEffect(() => {
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.current,null, {});
// 绘制图表
        myChart.setOption({
            legend: {
                right: getPx(50),
                orient : 'vertical',
                textStyle: {
                    color: 333
                }
            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [getPx(15), getPx(100)],
                    center: ['30%', '50%'],
                    roseType: 'area',
                    textStyle: {color: 'white', fontSize: getPx(20)},
                    itemStyle: {
                        borderRadius: 8
                    },
                    label: {
                        show: true, position: 'outside', textStyle: {color: 'white', fontSize: getPx(20)},
                        distanceToLabelLine: 0,
                        formatter(options) {
                            return options.value * 100 + '%';
                        }
                    },
                    data: [
                        { value: 0.4, name: '刑事案件' },
                        { value: 0.46, name: '经济案件' },
                        { value: 0.5, name: '民事案件' },
                        { value: 0.26, name: '交通案件' },
                        { value: 0.22, name: '其他' },

                    ],
                }
            ]
        });
    },[])
    return (
        <div className='类型统计 setBorder'>
            <h1>兰州市案发类型统计</h1>
            <div className='barChart' ref={divRef}></div>
        </div>
    )
}