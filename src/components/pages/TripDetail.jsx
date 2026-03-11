import React from "react";
import { useParams } from "react-router-dom";
import { trips } from "../../data/tripsData";

const TripDetail = () => {
  const { id } = useParams();

  const trip = trips.find((t) => t.id === Number(id));

  return <h1> {trip.name} </h1>;
};

export default TripDetail;