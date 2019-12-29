import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    wrapper: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundColor: 'rgba(0,0,0,0.2)',
        zIndex: 10000000,
    },
    loading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        msTransform: 'translate(-50%,-50%)',
        width: '100px',
        height: '100px',
        backgroundColor: 'transparent',
    },
    progress: {
        margin: theme.spacing(2),
    },

}));

const LoadingComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.loading}>
                <CircularProgress className={classes.progress} color="secondary" />
            </div>
        </div>
    )
};

export default LoadingComponent;
