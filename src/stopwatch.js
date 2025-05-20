export const STATE = {
  RUNNING: "running",
  STOPED: "stoped",
  FINISHED: "finished",
};

export const EVENT = {
  STOPWATCH_FINISHED: "stopwatch-finished",
};

const DEFAULT_TIMER = 5;

export default (time = DEFAULT_TIMER) => ({
  time,
  state: STATE.STOPED,

  init() {
    this.time = this.$el.getAttribute("data-time") || this.time;
  },

  get displayRunBtn() {
    return this.state === STATE.STOPED;
  },

  run() {
    const timer = () => {
      const timerIntervalId = setInterval(() => {
        this.time--;
        if (this.time <= 0) {
          clearInterval(timerIntervalId);
          this.time = DEFAULT_TIMER;
          this.state = STATE.STOPED;
          this.$dispatch(EVENT.STOPWATCH_FINISHED);
        }
      }, 1000);
    };
    timer();
    this.state = STATE.RUNNING;
  },
});
