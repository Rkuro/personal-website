import { makeStyles, Theme } from '@material-ui/core';
import { FeatureCollection } from 'geojson';
import * as React from 'react';
import ReactMapGL, { Layer, Source, ViewportProps } from 'react-map-gl';
import data from '../data/points.json';

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

const dataLayer = {
    id: 'data',
    type: 'fill',
    paint: {
        'fill-color': {
            property: 'percentile',
            stops: [
                [0, '#3288bd'],
                [1, '#66c2a5'],
                [2, '#abdda4'],
                [3, '#e6f598'],
                [4, '#ffffbf'],
                [5, '#fee08b'],
                [6, '#fdae61'],
                [7, '#f46d43'],
                [8, '#d53e4f'],
            ],
        },
        'fill-opacity': 0.8,
    },
};

export default function Map(): JSX.Element {
    const classes = useLocalClasses();

    return (
        <React.Fragment>
            <div className={classes.wrapper}></div>
        </React.Fragment>
    );
}
