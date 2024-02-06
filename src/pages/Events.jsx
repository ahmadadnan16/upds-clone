import React from "react";
import EventCard from "../components/EventCard";

const Events = () => {
  return (
    <div className="w-11/12 mx-auto my-5">
      <h1 className="text-2xl font-semibold my-4">
        Events{" "}
        <span className="text-lg font-normal text-gray-500">
          View upcoming and previous alumni events & conferences from UDPS
        </span>
      </h1>
      <div className="w-full border border-gray-200 rounded-md p-2 shadow-lg">
        {/*Upcoming Events */}
        <div className="flex justify-center items-center h-40">
          <h2 className="text-xl text-gray-500 font-medium">
            No Upcoming Events
          </h2>
        </div>
        {/*Past Events */}
        <h1 className="text-xl font-bold text-gray-400 uppercase border-b mx-3 my-5">
          Past Events
        </h1>
        <div className="flex flex-wrap gap-2 w-full mx-5">
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
        </div>
      </div>
    </div>
  );
};

export default Events;
