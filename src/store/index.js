import React, {createContext, useReducer, useEffect} from 'react';
import {fetchCsvData} from "./api";

const initialState = {
    count: 0,
    data: null
};
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
const store = createContext();

function StateProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetchCsvData('./data.csv')
          .then(res => {
              dispatch({
                  type: 'init',
                  payload: res
              })
          })
    }, [])

    return <store.Provider value={{state, dispatch}}>
        {children}
    </store.Provider>
}

export {store, StateProvider}
