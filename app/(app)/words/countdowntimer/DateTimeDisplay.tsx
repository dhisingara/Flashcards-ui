import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }: any) => {
  return (
    <span className={isDanger ? "countdown danger" : "countdown"}>
      <span>{value}</span>
      <span>{type}</span>
    </span>
  );
};

export default DateTimeDisplay;
