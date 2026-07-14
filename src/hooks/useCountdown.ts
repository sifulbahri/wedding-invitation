import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";

const TARGET_DATE = dayjs("2026-11-15T09:00:00");

export function useCountdown() {
  const calculate = () => {
    const now = dayjs();

    const diff = TARGET_DATE.diff(now);

    if (diff <= 0) {
      return {
        completed: true,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const totalSeconds = Math.floor(diff / 1000);

    return {
      completed: false,
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    };
  };

  const [time, setTime] = useState(calculate);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return useMemo(() => time, [time]);
}
