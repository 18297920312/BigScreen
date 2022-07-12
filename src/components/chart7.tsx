import React, { useEffect,useRef } from "react";
import ReactDOM from "react-dom";
import * as echarts from 'echarts';
export const Chart7 = () => {
    const divRef = useRef(null)
    useEffect(() => {
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.current,null, {});
// 绘制图表
        myChart.setOption({
            
        })
    },[])
    return (
        <div className='分布 setBorder'>
            <h1>犯罪人员年龄分布</h1>
            <div className="box">
                <div className='barChart' ref={divRef}></div>
              
            </div>
        </div>
    )
}