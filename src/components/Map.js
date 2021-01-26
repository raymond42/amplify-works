import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as rwandaData from '../data/rwandaData.json';

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: -1.9646631,
    longitude: 30.0644358,
    width: '96vw',
    height: '100vh',
    zoom: 8
  });
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedPark(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <div className="map" id="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/raymond-gakwaya/ckkdw1ogy0oy017n3ihx56bwe"
      >
        {rwandaData.features.map((park) => (
          <Marker
            key={park.properties.PROVINCE_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <h4>{park.properties.NAME}</h4>
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            onMouseLeave={() => this.setState({ popupInfo: null })}
            closeOnClick={true}
            position="right center"
            className="modal-popup"
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div className="inside-element">
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTION}</p>
              <iframe
                src="https://www.youtube.com/embed/uh5te9k7BaM"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="video"
                width="560"
                height="315"
              />
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
