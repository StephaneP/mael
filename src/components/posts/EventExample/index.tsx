import { createRef, useEffect, useState } from "react";
import { styles } from "./styles";

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
    const localRef = ref.current;
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
      if (localRef) {
        listOfEvents.forEach((eventType) => {
          localRef.removeEventListener(eventType, addEvent(eventType));
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div style={styles.container}>
      <div style={styles.btnContainer}>
        <button ref={ref} style={styles.button}>
          ✨ Click me! ✨
        </button>
      </div>
      <EventList events={list} />
    </div>
  );
}

export function EventList({ events }: { events: string[] }) {
  return (
    <div style={styles.events}>
      {events.map((e, i) => [
        <div key={`${e}${i}`} style={styles.event}>
          {e}
        </div>,
        i === events.length - 1 ? null : (
          <div key={`${e}${i}-spacer`} style={styles.eventSpacer}>
            then
          </div>
        ),
      ])}
    </div>
  );
}
