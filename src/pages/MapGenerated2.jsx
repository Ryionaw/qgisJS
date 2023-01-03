import React, { useState, useEffect } from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  LayersControl,
  LayerGroup,
  useMapEvents,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";

import localIcon from "../images/legends/Dirian_Pokok_1_40.png";
import clusterImage from "../images/marker-icon.png";

// IMPORTING ALL DATA
import Blok_Agronomi_1_38 from "../dataQGIS/Blok_Agronomi_1_38.json";
import Blok_Agronomi_2_31 from "../dataQGIS/Blok_Agronomi_2_31.json";
import Blok_Agronomi_3_24 from "../dataQGIS/Blok_Agronomi_3_24.json";
import Blok_Agronomi_4_18 from "../dataQGIS/Blok_Agronomi_4_18.json";
import Blok_Agronomi_5_11 from "../dataQGIS/Blok_Agronomi_5_11.json";
import Blok_Agronomi_6_4 from "../dataQGIS/Blok_Agronomi_6_4.json";
import Blok_Agronomi_45 from "../dataQGIS/Blok_Agronomi_45.json";

import D10_1_36 from "../dataQGIS/D10_1_36.json";
import D10_2_29 from "../dataQGIS/D10_2_29.json";
import D10_3_23 from "../dataQGIS/D10_3_23.json";
import D10_4_16 from "../dataQGIS/D10_4_16.json";
import D10_43 from "../dataQGIS/D10_43.json";
import D10_5_8 from "../dataQGIS/D10_5_8.json";
import D10_6_1 from "../dataQGIS/D10_6_1.json";

import Dirian_Pokok_1_40 from "../dataQGIS/Dirian_Pokok_1_40.json";
import Dirian_Pokok_2_33 from "../dataQGIS/Dirian_Pokok_2_33.json";
import Dirian_Pokok_3_26 from "../dataQGIS/Dirian_Pokok_3_26.json";
import Dirian_Pokok_47 from "../dataQGIS/Dirian_Pokok_47.json";
import Dirian_Pokok_5_13 from "../dataQGIS/Dirian_Pokok_5_13.json";
import Dirian_Pokok_6_6 from "../dataQGIS/Dirian_Pokok_6_6.json";

// END IMPORTING ALL DATA

const MapGenerated = () => {
  const [geojsonVisible, setGeojsonVisible] = useState(false);
  const [zoomer, setZoomer] = useState(null);

  useEffect(() => {
    if (zoomer >= 10 && zoomer <= 12) {
      console.log("burung");
      setGeojsonVisible(true);
    } else {
      console.log("burungs");
      setGeojsonVisible(false);
    }
  }, [zoomer]);

  const mapStyle = { height: "90vh" };

  const clusterGroup = new L.MarkerClusterGroup({
    iconCreateFunction: (cluster) => {
      return L.icon({
        iconUrl: clusterImage,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });
    },
  });

  function GetZoom() {
    const map = useMapEvents({
      click: () => {
        map.locate();
      },
      locationfound: (location) => {
        console.log("location found:", location);
      },
      zoomend: (e) => (
        console.log(e.target.getZoom()), setZoomer(e.target.getZoom())
      ),
    });
    return null;
  }
  return (
    <div className="MapGenerated">
      <MapContainer
        center={[2.4663059215427623, 103.79543140113321]}
        zoom={15}
        style={mapStyle}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GetZoom />
        <LayersControl position="bottomright">
          <LayersControl.Overlay name="Block Agronomi">
            <LayerGroup>
              <GeoJSON data={Blok_Agronomi_1_38} />
              <GeoJSON data={Blok_Agronomi_2_31} />
              <GeoJSON data={Blok_Agronomi_3_24} />
              <GeoJSON data={Blok_Agronomi_4_18} />
              <GeoJSON data={Blok_Agronomi_5_11} />
              <GeoJSON data={Blok_Agronomi_6_4} />
              <GeoJSON data={Blok_Agronomi_45} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="D10" checked={geojsonVisible}>
            <LayerGroup>
              <GeoJSON data={D10_1_36} />
              <GeoJSON data={D10_2_29} />
              <GeoJSON data={D10_3_23} />
              <GeoJSON data={D10_4_16} />
              <GeoJSON data={D10_43} />
              <GeoJSON data={D10_5_8} />
              <GeoJSON data={D10_6_1} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Dirian Pokok">
            <LayerGroup>
              <MarkerClusterGroup chunkedLoading>
                <GeoJSON
                  data={Dirian_Pokok_1_40}
                  pointToLayer={(feature, latlng) => {
                    return L.marker(latlng, {
                      icon: L.icon({
                        iconUrl: localIcon,
                        iconSize: [5, 5],
                        iconAnchor: [5, 5],
                        popupAnchor: [5, 5],
                      }),
                    });
                  }}
                  cluster={clusterGroup}
                />
                <GeoJSON
                  data={Dirian_Pokok_2_33}
                  pointToLayer={(feature, latlng) => {
                    return L.marker(latlng, {
                      icon: L.icon({
                        iconUrl: localIcon,
                        iconSize: [5, 5],
                        iconAnchor: [5, 5],
                        popupAnchor: [5, 5],
                      }),
                    });
                  }}
                  cluster={clusterGroup}
                />
                <GeoJSON
                  data={Dirian_Pokok_3_26}
                  pointToLayer={(feature, latlng) => {
                    return L.marker(latlng, {
                      icon: L.icon({
                        iconUrl: localIcon,
                        iconSize: [5, 5],
                        iconAnchor: [5, 5],
                        popupAnchor: [5, 5],
                      }),
                    });
                  }}
                  cluster={clusterGroup}
                />
                <GeoJSON
                  data={Dirian_Pokok_47}
                  pointToLayer={(feature, latlng) => {
                    return L.marker(latlng, {
                      icon: L.icon({
                        iconUrl: localIcon,
                        iconSize: [5, 5],
                        iconAnchor: [5, 5],
                        popupAnchor: [5, 5],
                      }),
                    });
                  }}
                  cluster={clusterGroup}
                />
                <GeoJSON
                  data={Dirian_Pokok_5_13}
                  pointToLayer={(feature, latlng) => {
                    return L.marker(latlng, {
                      icon: L.icon({
                        iconUrl: localIcon,
                        iconSize: [5, 5],
                        iconAnchor: [5, 5],
                        popupAnchor: [5, 5],
                      }),
                    });
                  }}
                  cluster={clusterGroup}
                />
                <GeoJSON
                  data={Dirian_Pokok_6_6}
                  pointToLayer={(feature, latlng) => {
                    return L.marker(latlng, {
                      icon: L.icon({
                        iconUrl: localIcon,
                        iconSize: [5, 5],
                        iconAnchor: [5, 5],
                        popupAnchor: [5, 5],
                      }),
                    });
                  }}
                  cluster={clusterGroup}
                />
              </MarkerClusterGroup>

              {/* CUMA CONTOH GEOJSON DENGAN MARKER CLUSTERING */}
              {/* <GeoJSON
                data={Dirian_Pokok_6_6}
                cluster={true}
                uncluster={false}
                clusterMaxZoom={14}
                clusterMinZoom={5}
                pointToLayer={(feature, latlng) => {
                  return L.marker(latlng, {
                    icon: L.icon({
                      iconUrl: localIcon,
                      iconSize: [5, 5],
                      iconAnchor: [5, 5],
                      popupAnchor: [5, 5],
                    }),
                  });
                }}
              /> */}

              {/* CUMA CONTOH GEOJSON DENGAN MARKER CUSTOM */}
              {/* <GeoJSON
                data={Dirian_Pokok_1_40}
                pointToLayer={(feature, latlng) => {
                  return L.marker(latlng, {
                    icon: L.icon({
                      iconUrl: localIcon,
                      iconSize: [5, 5],
                      iconAnchor: [5, 5],
                      popupAnchor: [5, 5],
                    }),
                  });
                }}
              ></GeoJSON> */}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default MapGenerated;
