import { makeStyles } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React from 'react';


const useStyles = makeStyles(() =>{
    return {
        circleImg: {
            width: "600px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "600px",
            borderRadius: "50%"
        }
    };
});

export interface CircleImgProps {
    src: string,
    height?: number,
    width?: number
}

export default function CircleImg(props: CircleImgProps) {
    const classes = useStyles();


    let style: CSSProperties = {
        backgroundImage: `url(${props.src})`,
    }

    style = {
        ...style,
        ...props
    }

    return (
        <React.Fragment>
            <div className={classes.circleImg} style={style}/>
        </React.Fragment>
    );
}
