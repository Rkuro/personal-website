import { makeStyles } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React, { useState, useEffect, useRef } from 'react';
import useWindowSize from '../hooks/WindowSize';

const useStyles = makeStyles(() => {
    return {
        circleImg: {
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderRadius: '50%',
        },
    };
});

export interface CircleImgProps {
    src: string;
}

export default function CircleImg(props: CircleImgProps) {
    const classes = useStyles();
    const circleImg = useRef(null) as any;
    const [height, setHeight] = useState();

    const updateHeight = () => {
        if (circleImg.current) {
            console.log('circleImg', circleImg.current.offsetWidth);
            setHeight(() => circleImg.current.offsetWidth);
        }
    };

    useEffect(() => {
        updateHeight();
    }, [updateHeight]);

    useWindowSize(() => {
        console.log('window size changed');
        updateHeight();
    });

    let style: CSSProperties = {
        backgroundImage: `url(${props.src})`,
        height: height,
    };

    style = {
        ...style,
        ...props,
    };

    return (
        <React.Fragment>
            <div ref={circleImg} className={classes.circleImg} style={style} />
        </React.Fragment>
    );
}
