import React, {useContext} from 'react';
import { Map, APILoader } from '@uiw/react-baidu-map';
import {store} from "../store";

function DetailView() {
    const {state, dispatch} = useContext(store);

    return <div style={{ width: '100%', height: '100%' }}>
        <APILoader akay="Yvjkj9EN8qfW4vDB6WoTfd01DYWWTzDW">
            <Map />
        </APILoader>
    </div>;
}

export default DetailView;
