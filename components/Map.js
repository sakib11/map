import * as React from 'react';
import { useState, useEffect } from 'react';
import MapGL, { Source, Layer } from 'react-map-gl';
import { dataLayer } from '../utils/map-style';

/**
 * Map component
 */

export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 40,
        longitude: -100,
        zoom: 3,
        bearing: 0,
        pitch: 0
    });
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(
            'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson'
        )
            .then(res => res.json())
            .then(data => setData(data));
    }, []);


    return (
        <>
            <MapGL
                {...viewport}
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/mapbox/navigation-day-v1"
                onViewportChange={setViewport}
                mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                interactiveLayerIds={['data']}
            >
                <Source type="geojson" data={data}>
                    <Layer {...dataLayer} />
                </Source>
            </MapGL>
        </>
    );
}
