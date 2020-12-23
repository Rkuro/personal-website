import * as React from 'react';
import ReactMapGL from 'react-map-gl';

export default function Map() {
    console.log("process env: ", process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN)
    const [viewport, setViewport] = React.useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    return (
        <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            onViewportChange={(viewport) => setViewport(viewport)}
            mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        />
    );
}