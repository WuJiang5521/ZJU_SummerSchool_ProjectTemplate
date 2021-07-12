import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";
import 'echarts/map/js/china';

function Overview() {
    // const {state, dispatch} = useContext(store);

    // const getOption = () => {
    //     return {
    //         xAxis: {
    //             type: 'category',
    //             data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    //         },
    //         yAxis: {
    //             type: 'value'
    //         },
    //         series: [{
    //             data: [120, 200, 150, 80, 70, 110, 130],
    //             type: 'bar',
    //             showBackground: true,
    //             backgroundStyle: {
    //                 color: 'rgba(180, 180, 180, 0.2)'
    //             }
    //         }]
    //     };
    // };

    return <div>
        {/* <ReactEcharts option={getOption()} />; */}
    </div>
}

export default Overview;
