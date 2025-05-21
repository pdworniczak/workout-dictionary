import { TYPE } from "./training";

export const STATE = {
  RUNNING: "RUNNING",
  STOPED: "STOPED",
  FINISHED: "FINISHED",
};

export const EVENT = {
  STOPWATCH_FINISHED: "stopwatch-finished",
};

const DEFAULT_TIMER = 5;

export default () => ({
  _time: DEFAULT_TIMER,
  state: STATE.STOPED,

  init() {
    this._time = this.training.sets[this.set.current].time || DEFAULT_TIMER;
  },

  set time(value) {
    this._time = value;
  },

  get time() {
    return this._time;
  },

  get displayRunBtn() {
    return this.state === STATE.STOPED;
  },

  get displayLabel() {
    if (this.training.type === TYPE.REPS && this.state === STATE.RUNNING) {
      return "Odpoczywaj";
    } else if (
      this.training.type === TYPE.TIMED &&
      this.state === STATE.RUNNING
    ) {
      return "Rozciągaj się";
    }
    return "";
  },

  get displayTime() {
    return this.state === STATE.RUNNING;
  },

  runStopwatch() {
    if (this.set?.current !== 0) {
      this._time = this.training.sets[this.set.current].time || DEFAULT_TIMER;
      if (this.training.type === TYPE.TIMED) {
        this.run();
      }
    }
  },

  run() {
    this.state = STATE.RUNNING;
    const timer = () => {
      const timerIntervalId = setInterval(() => {
        this._time--;
        if (this._time <= 0) {
          clearInterval(timerIntervalId);
          if (this.training.type !== TYPE.TIMED) {
            this.state = STATE.STOPED;
          }
          this.$dispatch(EVENT.STOPWATCH_FINISHED);
        }
      }, 10);
    };
    timer();
  },
});
