import React, { useEffect, useState } from "react";

export default function Clock() {
  const [second, setSecond] = useState(0);
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(time);
      setTime(new Date());
      setSecond(time.getSeconds() * 6);
      setHour(time.getHours() * 30);
      setMinutes(time.getMinutes() * 5);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);
  //   console.log(timer);
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="h-4/5 w-4/5  grid gap-20 justify-center ">
        <div className="">
          {/* band circle */}
          <div className="ring-[2rem] w-[30rem] h-[30rem] ring-white rounded-full flex justify-center items-center   pr-1 shadow-black shadow-2xl drop-shadow-2xl">
            <div>
              {/* clock indicator group */}
              <div className="relative flex justify-center items-center">
                {/* number group */}
                <div className="absolute text-4xl flex justify-center items-center font-serif  text-black font-thin">
                  <p className="absolute bottom-48 ">12</p>
                  <p className="absolute left-[5.5rem] bottom-40">1</p>
                  <p className="absolute left-40 bottom-20">2</p>
                  <p className="absolute left-48">3</p>
                  <p className="absolute left-40 top-20">4</p>
                  <p className="absolute left-20 top-40">5</p>
                  <p className="absolute top-48">6</p>
                  <p className="absolute right-[5.5rem] top-40">7</p>
                  <p className="absolute right-40 top-20">8</p>
                  <p className="absolute right-48">9</p>
                  <p className="absolute right-40 bottom-20">10</p>
                  <p className="absolute right-20 bottom-40">11</p>
                </div>
                {/* second band */}
                <div
                  className={`w-1 h-[12rem] bg-black absolute origin-bottom rounded-ss-full bottom-0 z-10`}
                  style={{ rotate: `${second}deg` }}
                />
                <div
                  className={`w-1 h-[2rem] bg-black absolute origin-top rounded-full top-0 z-10`}
                  style={{ rotate: `${second}deg` }}
                />
                {/* minute band */}
                <div
                  className="w-[.50rem] h-[9rem]  bg-slate-600 absolute origin-bottom rounded-ss-full bottom-0 "
                  style={{ rotate: `${minutes}deg` }}
                />
                <div
                  className="w-[.50rem] h-[1.5rem]  bg-slate-600 absolute origin-top rounded-full top-0"
                  style={{ rotate: `${minutes}deg` }}
                />
                {/* hour band */}
                <div
                  className="w-[.8rem] h-[7.2rem] bg-cyan-950 absolute origin-bottom rounded-ss-full bottom-0 "
                  style={{ rotate: `${hour}deg` }}
                />
                <div
                  className="w-[.8rem] h-[1.5rem] bg-cyan-950 absolute origin-top rounded-full top-0 "
                  style={{ rotate: `${hour}deg` }}
                />
                {/* center circle */}
                <div className="h-[1.4rem] w-[1.4rem] bg-orange-400  rounded-full flex justify-center items-center absolute z-20">
                  <div className="h-4 w-4 rounded-full bg-black" />
                </div>
                {/* Number Group */}
              </div>
            </div>
          </div>
        </div>
        {/* Digital Clock */}
        <div className="top-1  ">
          <div className="h-60 w-[36rem]  ring-[1rem] ring-white relative flex justify-center items-center  bg-slate-200 drop-shadow-2xl shadow-black rounded-lg ring-inset overflow-clip z-20">
            <div className="h-[10rem]  bg-blend-luminosity blur-3xl  w-[35rem] ring-4 bg-red-500 absolute opacity-50 -z-10 animate-spin" />

            {/* shadow */}
            <div className="absolute font-bold text-slate-400  text-[8rem] flex right-7 ">
              <h1 className="shadow-black drop-shadow-2xl">
                {hour / 30 > 9
                  ? hour / 30 > 12
                    ? `0${hour / 30 - 12}`
                    : hour / 30
                  : `0${hour / 30}`}
              </h1>
              :<p>{minutes / 5 > 9 ? minutes / 5 : `0${minutes / 5}`}</p>:
              <p>{second / 6 > 9 ? second / 6 : `0${second / 6}`}</p>
            </div>
            {/* main text */}
            <div className="absolute font-bold  text-[8rem] opacity-1 flex">
              <p className="shadow-black drop-shadow-2xl">
                {hour / 30 > 9
                  ? hour / 30 > 12
                    ? `0${hour / 30 - 12}`
                    : hour / 30
                  : `0${hour / 30}`}
              </p>
              :<p>{minutes / 5 > 9 ? minutes / 5 : `0${minutes / 5}`}</p>:
              <p>{second / 6 > 9 ? second / 6 : `0${second / 6}`}</p>
            </div>
            <div className="absolute text-[2rem] font-bold bottom-4 right-8">
              {hour / 30 > 12 ? "PM" : "AM"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
