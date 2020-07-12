import React, {useContext} from 'react';
import {store} from "../store";
import ReactEcharts from "echarts-for-react";

function Overview() {
    const {state, dispatch} = useContext(store);

    const getOption = () => {
        console.log(state.data);
        // change your data to an option here
        return {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [1, 2, 3, state.count, 5, 6, 7],
                type: 'line'
            }]
        }
    };

    return <ReactEcharts option={getOption()}/>;
}

export default Overview;
