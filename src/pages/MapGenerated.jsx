import React from "react";
import L from "leaflet";
import { Map, TileLayer, GeoJSON, LayersControl } from "react-leaflet";
import "leaflet.markercluster";
import "leaflet/dist/leaflet.css";

import Blok_Agronomi_1_38 from "../dataQGIS/Blok_Agronomi_1_38.json";
import Blok_Agronomi_2_31 from "../dataQGIS/Blok_Agronomi_2_31.json";
import Blok_Agronomi_3_24 from "../dataQGIS/Blok_Agronomi_3_24.json";
import Blok_Agronomi_4_18 from "../dataQGIS/Blok_Agronomi_4_18.json";
import Blok_Agronomi_5_11 from "../dataQGIS/Blok_Agronomi_5_11.json";
import Blok_Agronomi_6_4 from "../dataQGIS/Blok_Agronomi_6_4.json";
import Blok_Agronomi_45 from "../dataQGIS/Blok_Agronomi_45.json";

const MapGenerated = () => {
  const mapStyle = { height: "90vh" };

  const clusterGroup = new L.MarkerClusterGroup({
    iconCreateFunction: (cluster) => {
      return L.icon({
        iconUrl: "../images/marker-icon-2x.png",
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });
    },
  });

  Blok_Agronomi_1_38.features.forEach((feature) => {
    const { coordinates } = feature.geometry;
    const marker = L.marker(coordinates, {
      icon: L.icon({
        iconUrl: "../images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41],
      }),
    });
    clusterGroup.addLayer(marker);
  });
  Blok_Agronomi_2_31.features.forEach((feature) => {
    const { coordinates } = feature.geometry;
    const marker = L.marker(coordinates, {
      icon: L.icon({
        iconUrl: "../images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41],
      }),
    });
    clusterGroup.addLayer(marker);
  });
  Blok_Agronomi_3_24.features.forEach((feature) => {
    const { coordinates } = feature.geometry;
    const marker = L.marker(coordinates, {
      icon: L.icon({
        iconUrl: "../images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41],
      }),
    });
    clusterGroup.addLayer(marker);
  });
  Blok_Agronomi_4_18.features.forEach((feature) => {
    const { coordinates } = feature.geometry;
    const marker = L.marker(coordinates, {
      icon: L.icon({
        iconUrl: "../images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41],
      }),
    });
    clusterGroup.addLayer(marker);
  });
  Blok_Agronomi_5_11.features.forEach((feature) => {
    const { coordinates } = feature.geometry;
    const marker = L.marker(coordinates, {
      icon: L.icon({
        iconUrl: "../images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41],
      }),
    });
    clusterGroup.addLayer(marker);
  });
  Blok_Agronomi_6_4.features.forEach((feature) => {
    const { coordinates } = feature.geometry;
    const marker = L.marker(coordinates, {
      icon: L.icon({
        iconUrl: "../images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41],
      }),
    });
    clusterGroup.addLayer(marker);
  });
  Blok_Agronomi_45.features.forEach((feature) => {
    const { coordinates } = feature.geometry;
    const marker = L.marker(coordinates, {
      icon: L.icon({
        iconUrl: "../images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41],
      }),
    });
    clusterGroup.addLayer(marker);
  });

  return (
    <div className="MapGenerated">
      <Map
        center={[2.4663059215427623, 103.79543140113321]}
        zoom={15}
        style={mapStyle}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON data={Blok_Agronomi_1_38} cluster={clusterGroup} />
        <GeoJSON data={Blok_Agronomi_2_31} cluster={clusterGroup} />
        <GeoJSON data={Blok_Agronomi_3_24} cluster={clusterGroup} />
        <GeoJSON data={Blok_Agronomi_4_18} cluster={clusterGroup} />
        <GeoJSON data={Blok_Agronomi_5_11} cluster={clusterGroup} />
        <GeoJSON data={Blok_Agronomi_6_4} cluster={clusterGroup} />
        <GeoJSON data={Blok_Agronomi_45} cluster={clusterGroup} />
      </Map>
    </div>
  );
};

export default MapGenerated;
