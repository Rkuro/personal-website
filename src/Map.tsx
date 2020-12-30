import { makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';
import ReactMapGL from 'react-map-gl';

const useLocalClasses = makeStyles((theme: Theme) => {
    return {
        wrapper: {
            borderRadius: theme.shape.borderRadius,
            flex: 1,
            height: '100%',
            overflow: 'hidden',
        },
    };
});

export default function Map() {
    const classes = useLocalClasses();

    const [viewport, setViewport] = React.useState({
        // latitude: 37.7577,
        // longitude: -122.4376,
        zoom: 1,
    });

    return (
        <React.Fragment>
            <div className={classes.wrapper}>
                <ReactMapGL
                    {...viewport}
                    width="100%"
                    height="100%"
                    onViewportChange={(viewport) => setViewport(viewport)}
                    mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                />
            </div>
        </React.Fragment>
    );
}
