import { React, useEffect, useState} from 'react';
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";

const dataUrl = "/features.json"

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#32FF32", "#003200"]);

const MapChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
    >

      <Sphere stroke="#000000" strokeWidth={0.75} fill="#6480ff"/>
      <Graticule stroke="#000000" strokeWidth={0.75} />
      {data.length > 0 && (
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
                />
              );
            })
          }
        </Geographies>
      )}
    </ComposableMap>
  );
};

export default MapChart;