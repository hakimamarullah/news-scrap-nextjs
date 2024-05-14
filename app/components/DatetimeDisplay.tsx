"use client";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-lg text-gray-500 text-center mb-4">
      Current Time: {dayjs(dateTime).format("DD MMM YYYY HH:mm:ss")} WIB
    </div>
  );
};

export default DateTimeDisplay;
