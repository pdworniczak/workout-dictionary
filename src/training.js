export const TYPE = {
  REPS: "REPS",
  TIMED: "TIMED",
};

export const PUSHUPS = {
  name: "Klata",
  type: TYPE.REPS,
  sets: [
    {
      name: "Pompki z podwyższeniem rąk",
      reps: 14,
    },
    {
      name: "Pompki damskie",
      reps: 12,
    },
    {
      name: "Pompki",
      reps: 8,
    },
    {
      name: "Pompki szerokie",
      reps: 10,
    },
    {
      name: "Pompki na kolanach",
      reps: 12,
    },
    {
      name: "Pompki z podwyższeniem rąk",
      reps: 12,
    },
    {
      name: "Pompki szerokie",
      reps: 8,
    },
    {
      name: "Pompki hinduskie",
      reps: 10,
    },
  ],
};

const STRECHING = {
  name: "Rozciaganie",
  type: TYPE.TIMED,
  sets: [
    {
      name: "Kobra",
      time: 30,
    },
    {
      name: "Pozycja dziecka",
      time: 30,
    },
    {
      name: "Krowa",
      time: 30,
    },
    {
      name: "Kot",
      time: 30,
    },
    {
      name: "Dotknięcie kostek siedziąc",
      time: 120,
    },
    {
      name: "Pozycja diamentu",
      time: 120,
    },
    {
      name: "Rozciaganie czworogłowego lewa noga",
      time: 60,
    },
    {
      name: "Rozciaganie czworogłowego prawa noga",
      time: 60,
    },
    {
      name: "Rozciaganie pachwin lewa noga",
      time: 60,
    },
    {
      name: "Rozciaganie pachwin prawa noga",
      time: 60,
    },
    {
      name: "Skłon",
      time: 120,
    },
    {
      name: "Szpagat poprzeczny",
      time: 120,
    },
  ],
};

export const STATUS = {
  FINISHED: "FINISHED",
  STARTED: "STARTED",
};

export default () => ({
  training: STRECHING,
  status: STATUS.STARTED,
  set: {
    current: 0,
  },

  get currentSet() {
    return this.training.sets[this.set.current];
  },

  get isRepsTraining() {
    return this.training.type === TYPE.REPS;
  },

  get isTimedTraining() {
    return this.training.type === TYPE.TIMED;
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
