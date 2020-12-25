import { makeStyles } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React, { useState, useEffect, useRef } from 'react';


const useStyles = makeStyles(() =>{
    return {
        circleImg: {
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "50%"
        }
    };
});

export interface CircleImgProps {
    src: string,
}

export default function CircleImg(props: CircleImgProps) {
    const classes = useStyles();
    const circleImg = useRef(null) as any;
    const [height, setHeight] = useState();

    useEffect(() => {
        if (circleImg.current) {
            console.log("circleImg", circleImg.current.offsetWidth);
            setHeight(() => circleImg.current.offsetWidth);
        }
    }, [circleImg.current]);

    let style: CSSProperties = {
        backgroundImage: `url(${props.src})`,
        height: height
    }

    style = {
        ...style,
        ...props
    }

    console.log("render circleImg:", circleImg.current);
    // if (circleImg.current != null) {
    //     style.height = circleImg.current.offsetWidth;
    // }
    

    return (
        <React.Fragment>
            <div ref={circleImg} className={classes.circleImg} style={style}/>
        </React.Fragment>
    );
}
