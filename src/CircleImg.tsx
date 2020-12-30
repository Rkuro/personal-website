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

export default function CircleImg(props: CircleImgProps): JSX.Element {
    const classes = useStyles();
    const circleImg = useRef<HTMLDivElement>(null);
    const [height] = useState<number | undefined>();

    const updateHeight = () => {
        return circleImg.current?.offsetWidth;
    };

    useEffect(() => {
        updateHeight();
    }, []);

    useWindowSize(updateHeight);

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
