import React, { useEffect, useRef, useState, type MouseEvent, type MouseEventHandler } from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import { restoreState } from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";

function Clock() {
  const [timerId, setTimerId] = useState<number | undefined>(undefined);
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState<Date>(new Date(restoreState("hw9-date", Date.now())));
  const [show, setShow] = useState<boolean>(false);
  //   useEffect(() => {

  //   }, []);
  const timerRef = useRef<any>(null);
  //   console.log(timerId);
  const start = () => {
    // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
    // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
    timerRef.current = setInterval(() => setDate(() => new Date(Date.now())));
    setTimerId(timerRef.current);
  };

  const stop = () => {
    // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    clearInterval(timerRef.current);
    setTimerId(undefined);
  };

  const onMouseEnter = () => {
    // console.log(event);
    setShow(true);
    // пишут студенты // показать дату если наведена мышка
  };
  const onMouseLeave = () => {
    //   event: MouseEvent<HTMLDivElement>;
    // пишут студенты // спрятать дату если мышка не наведена
    setShow(false);
  };
  const getStringTime = () => {
    const stringTime = [date.getHours().toString(), date.getMinutes().toString(), date.getSeconds().toString()];
    const result = stringTime.map(el => (el.length < 2 ? "0" + el : el)).join(":");
    return result;
  };
  const getStringDate = () => {
    const stringDate = [date.getDate().toString(), (date.getMonth() + 1).toString(), date.getFullYear().toString()];
    const result = stringDate.map(el => (el.length < 2 ? "0" + el : el)).join(".");
    return result;
  };

  const stringTime = getStringTime() || <br />; // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringDate = getStringDate() || <br />; // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay = date.toLocaleDateString("en", { weekday: "long" }) || <br />; // пишут студенты
  //   const test = new Intl.DateTimeFormat("en", { weekday: "long" }).format(date.getDay());
  //   const test = date.toLocaleDateString("en", { weekday: "long" });
  //   console.log(test);
  const stringMonth = date.toLocaleDateString("en", { month: "long" }) || <br />; // пишут студенты
  //   console.log(timerRef);
  return (
    <div className={s.clock}>
      {/* <div>
        FOR MY TEST <br></br>
        {stringTime}
        <br></br>
        {stringDate}
        <br></br>
        {stringDay}
        <br></br>
        {stringMonth}
        <br></br>
        TEST END
      </div> */}
      <div id={"hw9-watch"} className={s.watch} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <span id={"hw9-day"}>{stringDay}</span>,{" "}
        <span id={"hw9-time"}>
          <strong>{stringTime}</strong>
        </span>
      </div>

      <div id={"hw9-more"}>
        <div className={s.more}>
          {show ? (
            <>
              <span id={"hw9-month"}>{stringMonth}</span>, <span id={"hw9-date"}>{stringDate}</span>
            </>
          ) : (
            <>
              <br />
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={"hw9-button-start"}
          disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
          onClick={start}>
          start
        </SuperButton>
        <SuperButton
          id={"hw9-button-stop"}
          disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
          onClick={stop}>
          stop
        </SuperButton>
      </div>
    </div>
  );
}

export default Clock;
