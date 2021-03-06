import React from 'react';
import { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import { Tab } from "../Tab/Tab";
import { Spinner } from "../Spinner/Spinner";
import styles from "./modal.module.scss";

import { loadPickPointsData } from "../../api/services/state";

export const Modal = () => {
  const [pickPoints, setPickPoints] = useState(null);
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    loadPickPointsData()
      .then((pickPoints) => setPickPoints(pickPoints))
      .catch(err => {
        console.error(err)
        setError(err.message)
      });
  }, []);
  if (error) {
    return <p>{error}</p>
  }
  if (!pickPoints && !error) {
    return (
      <div className={styles.container}>
        <div className={styles.container__spinnerContainer}>
          <Spinner />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.container__tabsContainer}>
        {pickPoints.map((item, index) => (
          <Tab
            key={Date.now() + index}
            address={item.address}
            budgets={item.budgets}
            coords={item.coordinates}
            id={item.id}
            setCoords={setCoords}
          />
        ))}
      </div>
      <div className={styles.container__mapContainer}>
        <YMaps>
          <Map
            state={{
              center: coords
                ? [coords.latitude, coords.longitude]
                : [
                  pickPoints[0].coordinates.latitude,
                  pickPoints[0].coordinates.longitude,
                ],
              zoom: coords ? 15 : 9,
            }}
            style={{
              height: "100%",
              width: "100%",
              display: "block",
              margin: "0 auto",
            }}
          >
            {coords && (
              <Placemark
                geometry={[coords.latitude, coords.longitude]}
              ></Placemark>
            )}
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
