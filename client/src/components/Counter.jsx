import React, { useEffect, useRef, useState } from "react";
import alarmSound from "../assets/jazz.mp3";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

const Counter = ({ studyTime, breakTime }) => {
  const [timer, setTimer] = useState(studyTime);
  const [start, setStart] = useState(false);
  const [curSession, setCurSession] = useState("study");

  const timerId = useRef(null);

  useEffect(() => {
    if (!start) {
      return;
    }
    timerId.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, [start, curSession]);

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(timerId.current);
      resetTimer();
      new Audio(alarmSound).play();
    }
  }, [timer]);

  const resetTimer = () => {
    if (curSession === "study") {
      setTimer(breakTime);
      setCurSession("break");
    } else {
      setTimer(studyTime);
      setCurSession("study");
    }
  };

  const handleStart = () => {
    setStart(true);
  };

  const handleReset = () => {
    setStart(false);
    setTimer(studyTime);
  };

  const handlePause = () => {
    setStart(!start);
  };

  const formatCounter = () => {
    return curSession === "study" ? "text-green-300" : "text-red-300";
  };

  return (
    <>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-black-400"></div>
        <span className={`flex-shrink mx-4 ${formatCounter()} text-4xl`}>
          {curSession === "study" ? "STUDY" : "BREAK"}
        </span>
        <div className="flex-grow border-t border-black-400"></div>
      </div>
      <div
        className={`bg-transparent text-9xl text-white p-3 border-2 rounded-lg pb-4 font-light`}
      >
        {formatTime(timer)}
      </div>
      <div className="flex text-3xl my-4 justify-center items-center gap-x-6">
        <div>
          <button
            onClick={handleStart}
            className="backdrop-blur-sm rounded-md p-3 text-white border-transparent border-2 hover:border-white"
          >
            Start
          </button>
        </div>
        <div>
          <button
            onClick={handlePause}
            className="backdrop-blur-sm rounded-md p-3 text-white border-transparent border-2 hover:border-white"
          >
            Pause
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center text-3xl my-4">
        <button
          onClick={handleReset}
          className="backdrop-blur-sm rounded-md p-3 text-white border-transparent border-2 hover:border-white"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
