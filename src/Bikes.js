import React, { useEffect, useState } from "react";
import createEnturService from "@entur/sdk";

const service = createEnturService({
  clientName: "hollund-infoskjermkurs",
});

const Bikes = () => {
  const [bikeStations, setBikeStations] = useState([]);

  useEffect(() => {
    service
      .getBikeRentalStationsByPosition(
        {
          latitude: 63.428311,
          longitude: 10.392514,
        },
        230
      )
      .then((data) => setBikeStations(data));
  }, []);

  return (
    <div className="Bikes">
      {bikeStations.map((station) => (
        <Station key={station.id} station={station} />
      ))}
    </div>
  );
};

export default Bikes;

const Station = (props) => {
  const { name, bikesAvailable, spacesAvailable } = props.station;

  return (
    <div className="station">
      {name} - {bikesAvailable} : {spacesAvailable}
    </div>
  );
};
