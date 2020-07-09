import React, {useContext} from 'react';
import {store} from "../store";

function DetailView() {
    const {state, dispatch} = useContext(store);

    return <div>
        <p>{state.count}</p>
        <button onClick={() => dispatch({type: 'increment'})}>add</button>
    </div>;
}

export default DetailView;
