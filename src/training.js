export const PUSHUPS = {
  name: "Klata",
  sets: [
    {
      name: "Pompki z podwyższeniem rąk",
      repeates: 14,
    },
    {
      name: "Pompki damskie",
      repeates: 12,
    },
    // {
    //   name: "Pompki",
    //   repeates: 8,
    // },
    // {
    //   name: "Pompki szerokie",
    //   repeates: 10,
    // },
    // {
    //   name: "Pompki na kolanach",
    //   repeates: 12,
    // },
    // {
    //   name: "Pompki z podwyższeniem rąk",
    //   repeates: 12,
    // },
    // {
    //   name: "Pompki szerokie",
    //   repeates: 8,
    // },
    // {
    //   name: "Pompki hinduskie",
    //   repeates: 10,
    // },
  ],
};

export const STATUS = {
  FINISHED: "FINISHED",
  STARTED: "STARTED",
};

export default () => ({
  training: PUSHUPS,
  status: STATUS.STARTED,
  set: {
    current: 0,
  },

  get currentSet() {
    return this.training.sets[this.set.current];
  },

  get started() {
    return this.status === STATUS.STARTED;
  },

  get finished() {
    return this.status === STATUS.FINISHED;
  },

  nextSet() {
    this.set.current++;
    if (!this.training.sets[this.set.current]) {
      this.status = STATUS.FINISHED;
      this.set.current = 0;
    }
  },
});
