/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/button-has-type */
import { createRef, useEffect, useState } from "react";
import styles from "./styles.module.css";

const listOfEvents = [
  "click",
  "mousedown",
  "mouseup",
  "focus",
  "blur",
  "keydown",
  "change",
  "dblclick",
  "keydown",
  "keyup",
  "keypress",
  "textInput",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "resize",
  "scroll",
  "zoom",
  "select",
  "change",
  "submit",
  "reset",
];

export default function EventExample() {
  const ref = createRef<HTMLButtonElement>();
  const [list, setList] = useState<string[]>([]);
  useEffect(() => {
    const addEvent = (eventType: string) => {
      return () =>
        setList((l) => [eventType].concat(l.reverse().slice(0, 4)).reverse());
    };
    if (ref.current) {
      listOfEvents.forEach((eventType) => {
        ref.current.addEventListener(eventType, addEvent(eventType));
      });
    }
    return () => {
      if (ref.current) {
        listOfEvents.forEach((eventType) => {
          ref.current.removeEventListener(eventType, addEvent(eventType));
        });
      }
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <button ref={ref} className={styles.button}>
          ✨ Click me! ✨
        </button>
      </div>
      <EventList events={list} />
    </div>
  );
}

export function EventList({ events }: { events: string[] }) {
  return (
    <div className={styles.events}>
      {events.map((e, i) => [
        <div key={`${e}${i}`} className={styles.event}>
          {e}
        </div>,
        i === events.length - 1 ? null : (
          <div key={`${e}${i}-spacer`} className={styles.eventSpacer}>
            then
          </div>
        ),
      ])}
    </div>
  );
}
