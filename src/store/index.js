// 本文件处理数据逻辑

import React, {createContext, useReducer, useEffect} from 'react';
import {fetchCsvData} from "./api";

// 初始数据
const initialState = {
    count: 0,
    data: null
};

// 不同请求的处理
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            };
        case 'init':
            const newData = [];
            // TODO: use action.payload to update newData
            console.log(action.payload);
            return {
                ...state,
                data: newData
            };
        default:
            throw new Error();
    }
}
// 创建数据中心的这样一个上下文，一般称为store
const store = createContext();

// 包装成数据组件
function StateProvider({children}) {
    // 绑定数据以及数据处理方法
    const [state, dispatch] = useReducer(reducer, initialState);

    // 初始化时，读取本地数据
    useEffect(() => {
        fetchCsvData('./data.csv')
          .then(res => {
              dispatch({
                  type: 'init',
                  payload: res
              })
          })
    }, [])

    // 为子元素包裹上数据的上下文环境，方便所有子元素读取
    return <store.Provider value={{state, dispatch}}>
        {children}
    </store.Provider>
}

export {store, StateProvider}
