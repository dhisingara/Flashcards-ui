import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./hooks/useCountdown";
import "./Timer.css";
const ExpiredNotice = ({ hardToRemember }: { hardToRemember: boolean }) => {
  return (
    <>
      {hardToRemember ? (
        <span className="expired-notice">
          <span style={{ color: "#c59292" }}>Hard To Remember</span>
        </span>
      ) : (
        <span className="expired-notice">
          <span style={{ color: "#7cd97c" }}>Ready to Learn</span>
        </span>
      )}
    </>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="show-counter">
      <DateTimeDisplay value={days} type={"Days"} isDanger={false} />
      &nbsp;:&nbsp;
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      &nbsp;:&nbsp;
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      &nbsp;:&nbsp;
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate, hardToRemember }: any) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice hardToRemember={hardToRemember} />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
