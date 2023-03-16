import React from 'react';
import classes from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={classes.loader}>
            <span className={classes.box}></span>
            <span className={classes.box}></span>
            <span className={classes.box}></span>
        </div>
    );
};

export default Loader;