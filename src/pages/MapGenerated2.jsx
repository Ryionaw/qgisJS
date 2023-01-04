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

import DirianImage from "../images/legends/Dirian_Pokok_1_40.png";
import JaringanJalanImage from "../images/legends/Jaringan_Jalan_1_39.png";
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

import Gunatanah_1_35 from "../dataQGIS/Gunatanah_1_35.json";
import Gunatanah_2_28 from "../dataQGIS/Gunatanah_2_28.json";
import Gunatanah_3_21 from "../dataQGIS/Gunatanah_3_21.json";
import Gunatanah_42 from "../dataQGIS/Gunatanah_42.json";
import Gunatanah_4_15 from "../dataQGIS/Gunatanah_4_15.json";
import Gunatanah_5_7 from "../dataQGIS/Gunatanah_5_7.json";
import Gunatanah_6_0 from "../dataQGIS/Gunatanah_6_0.json";

import Jaringan_Jalan_1_39 from "../dataQGIS/Jaringan_Jalan_1_39.json";
import Jaringan_Jalan_2_32 from "../dataQGIS/Jaringan_Jalan_2_32.json";
import Jaringan_Jalan_3_25 from "../dataQGIS/Jaringan_Jalan_3_25.json";
import Jaringan_Jalan_46 from "../dataQGIS/Jaringan_Jalan_46.json";
import Jaringan_Jalan_4_19 from "../dataQGIS/Jaringan_Jalan_4_19.json";
import Jaringan_Jalan_5_12 from "../dataQGIS/Jaringan_Jalan_5_12.json";
import Jaringan_Jalan_6_5 from "../dataQGIS/Jaringan_Jalan_6_5.json";

import Perimeter_Ladang_1_37 from "../dataQGIS/Perimeter_Ladang_1_37.json";
import Perimeter_Ladang_2_30 from "../dataQGIS/Perimeter_Ladang_2_30.json";
import Perimeter_Ladang_3_22 from "../dataQGIS/Perimeter_Ladang_3_22.json";
import Perimeter_Ladang_44 from "../dataQGIS/Perimeter_Ladang_44.json";
import Perimeter_Ladang_4_17 from "../dataQGIS/Perimeter_Ladang_4_17.json";
import Perimeter_Ladang_5_10 from "../dataQGIS/Perimeter_Ladang_5_10.json";
import Perimeter_Ladang_6_2 from "../dataQGIS/Perimeter_Ladang_6_2.json";

import Terlebih_Tanam_1_34 from "../dataQGIS/Terlebih_Tanam_1_34.json";
import Terlebih_Tanam_2_27 from "../dataQGIS/Terlebih_Tanam_2_27.json";
import Terlebih_Tanam_3_20 from "../dataQGIS/Terlebih_Tanam_3_20.json";
import Terlebih_Tanam_41 from "../dataQGIS/Terlebih_Tanam_41.json";
import Terlebih_Tanam_4_14 from "../dataQGIS/Terlebih_Tanam_4_14.json";
import Terlebih_Tanam_5_9 from "../dataQGIS/Terlebih_Tanam_5_9.json";
import Terlebih_Tanam_6_3 from "../dataQGIS/Terlebih_Tanam_6_3.json";
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

  const gambareJalan = L.icon({
    iconUrl: JaringanJalanImage,
    iconSize: [32, 32],
  });

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
                        iconUrl: DirianImage,
                        iconSize: [25, 25],
                        iconAnchor: [25, 25],
                        popupAnchor: [25, 25],
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
                        iconUrl: DirianImage,
                        iconSize: [25, 25],
                        iconAnchor: [25, 25],
                        popupAnchor: [25, 25],
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
                        iconUrl: DirianImage,
                        iconSize: [25, 25],
                        iconAnchor: [25, 25],
                        popupAnchor: [25, 25],
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
                        iconUrl: DirianImage,
                        iconSize: [25, 25],
                        iconAnchor: [25, 25],
                        popupAnchor: [25, 25],
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
                        iconUrl: DirianImage,
                        iconSize: [25, 25],
                        iconAnchor: [25, 25],
                        popupAnchor: [25, 25],
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
                        iconUrl: DirianImage,
                        iconSize: [25, 25],
                        iconAnchor: [25, 25],
                        popupAnchor: [25, 25],
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
                      iconUrl: DirianImage,
                      iconSize: [25, 25],
                      iconAnchor: [25, 25],
                      popupAnchor: [25, 25],
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
                      iconUrl: DirianImage,
                      iconSize: [25, 25],
                      iconAnchor: [25, 25],
                      popupAnchor: [25, 25],
                    }),
                  });
                }}
              ></GeoJSON> */}

              {/* CUMA CONTOH GEOJSON DENGAN CUSTOM STYLE */}
              {/* <GeoJSON
                data={Jaringan_Jalan_1_39}
                style={{ color: "red", weight: 5 }}
              /> */}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Guna Tanah">
            <LayerGroup>
              <GeoJSON data={Gunatanah_1_35} />
              <GeoJSON data={Gunatanah_2_28} />
              <GeoJSON data={Gunatanah_3_21} />
              <GeoJSON data={Gunatanah_42} />
              <GeoJSON data={Gunatanah_4_15} />
              <GeoJSON data={Gunatanah_5_7} />
              <GeoJSON data={Gunatanah_6_0} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Jaringan Jalan">
            <LayerGroup>
              <GeoJSON data={Jaringan_Jalan_1_39} />
              <GeoJSON data={Jaringan_Jalan_2_32} />
              <GeoJSON data={Jaringan_Jalan_3_25} />
              <GeoJSON data={Jaringan_Jalan_46} />
              <GeoJSON data={Jaringan_Jalan_4_19} />
              <GeoJSON data={Jaringan_Jalan_5_12} />
              <GeoJSON data={Jaringan_Jalan_6_5} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Perimeter Ladang">
            <LayerGroup>
              <GeoJSON data={Perimeter_Ladang_1_37} />
              <GeoJSON data={Perimeter_Ladang_2_30} />
              <GeoJSON data={Perimeter_Ladang_3_22} />
              <GeoJSON data={Perimeter_Ladang_44} />
              <GeoJSON data={Perimeter_Ladang_4_17} />
              <GeoJSON data={Perimeter_Ladang_5_10} />
              <GeoJSON data={Perimeter_Ladang_6_2} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Terlebih Tanam">
            <LayerGroup>
              <GeoJSON data={Terlebih_Tanam_1_34} />
              <GeoJSON data={Terlebih_Tanam_2_27} />
              <GeoJSON data={Terlebih_Tanam_3_20} />
              <GeoJSON data={Terlebih_Tanam_41} />
              <GeoJSON data={Terlebih_Tanam_4_14} />
              <GeoJSON data={Terlebih_Tanam_5_9} />
              <GeoJSON data={Terlebih_Tanam_6_3} />
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default MapGenerated;
