import { useEffect, useState } from "react";

function Hora() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useState;

  const timeOptions = { hour: "numeric", minute: "numeric", second: "numeric" };
  const formattedTime = currentTime.toLocaleString([], timeOptions);

  const hours = formattedTime.split(":")[0];
  const minutes = formattedTime.split(":")[1];

  return (
    <div>
      <p id="hora">
        <span>{hours}:</span>
        <span>{minutes}</span>
      </p>
    </div>
  );
}

export default Hora;
