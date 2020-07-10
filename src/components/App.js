import React from 'react';
import clsx from "clsx";
import {makeStyles} from "@material-ui/core";
import AssistView from "./AssistView";
import ControlPanel from "./ControlPanel";
import Overview from "./Overview";
import DetailView from "./DetailView";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
    },
    view: {
        border: '1px solid black',
        borderRadius: '5px',
    },
    controlPanel: {
        position: 'absolute',
        top: 70,
        height: 100,
        left: 70,
        width: 100,
    },
    assistView: {
        position: 'absolute',
        top: 180,
        bottom: 70,
        left: 70,
        width: 100,
    },
    overview: {
        position: 'absolute',
        top: 70,
        bottom: 400,
        left: 180,
        right: 70,
    },
    detailView: {
        position: 'absolute',
        bottom: 70,
        height: 320,
        left: 180,
        right: 70,
    },
}))

function App() {
    const classes = useStyles();

    return <div className={classes.root}>
        <div className={clsx(classes.view, classes.controlPanel)}><ControlPanel/></div>
        <div className={clsx(classes.view, classes.assistView)}><AssistView/></div>
        <div className={clsx(classes.view, classes.overview)}><Overview/></div>
        <div className={clsx(classes.view, classes.detailView)}><DetailView/></div>
    </div>;
}

export default App;
