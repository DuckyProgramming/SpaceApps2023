import { React, useEffect, useState} from 'react';
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography, Sphere, Graticule, ZoomableGroup } from "react-simple-maps";
import "./App.css";

const dataUrl = "/features.json"

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#32FF32", "#003200"]);

const MapChart = () => {
  const [data, setData] = useState([]);
  const [zoom, setZoom] = useState([10]);

  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);
  const handleZoomIn = () => {
    setZoom(Math.min(Math.max(zoom+1,1),10));
  };
  const handleZoomOut = () => {
    setZoom(Math.min(Math.max(zoom-1,1),10));
  };

  return (
    <div>
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147
        }}
      >

        {data.length > 0 && (
        <ZoomableGroup zoom={zoom} translateExtent={[[0,0],[800,550]]}>
            <Sphere stroke="#000000" strokeWidth={0.75} fill="#6480ff"/>
            <Graticule stroke="#000000" strokeWidth={0.75} />
            <Geographies geography={dataUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const d = data.find((s) => s.ISO3 === geo.id);
                  return (
                    <Geography
                      geography={geo}
                      fill={d ? colorScale(d["2017"]) : "#F5F4F6"}
                      stroke="#000000"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { outline: 'none' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        )}
      </ComposableMap>
      <div className="basicRow">
        <button className="simpleButton" onClick={handleZoomIn}>Zoom In</button>
        <button className="simpleButton" onClick={handleZoomOut}>Zoom Out</button>
      </div>
    </div>
  );
};

export default MapChart;