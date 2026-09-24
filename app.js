const categories = [
  {
    id: "cable-walks",
    title: "Cable walks",
    kicker: "Hip stability",
    target: "Glute med",
    color: "#1aa6a6",
    ink: "#0c6e74",
    exercises: [
      {
        id: "lateral-walk",
        n: 1,
        name: "Lateral walk",
        dose: "3 × 8 each way",
        cue: "Quarter squat. Step wide. Knee tracks the toes.",
        marks: [
          { on: "left.hip", t: "Glute med", place: "tl" },
          { on: "right.thigh", t: "Quads", place: "tr" },
        ],
        build: poseLateralWalk,
      },
      {
        id: "forward-walk",
        n: 2,
        name: "Forward walk",
        dose: "3 × 8 each way",
        cue: "Short steps. Keep the cable tight and the chest tall.",
        marks: [
          { on: "hip", t: "Glutes", place: "tl" },
          { on: "near.thigh", t: "Hip flexors", place: "tr" },
        ],
        build: poseForwardWalk,
      },
    ],
  },
  {
    id: "plyometrics",
    title: "Plyometrics",
    kicker: "Bounce and land",
    target: "Quads, glutes",
    color: "#ef5a3c",
    ink: "#c2412c",
    exercises: [
      {
        id: "squat-jump",
        n: 1,
        name: "Squat jump",
        dose: "5 × 3",
        cue: "Drop fast. Jump tall. Land soft on the whole foot.",
        marks: [
          { on: "near.thigh", t: "Quads", place: "tr" },
          { on: "hip", t: "Glutes", place: "tl", tone: "deep" },
        ],
        build: poseSquatJump,
      },
      {
        id: "lateral-bound",
        n: 2,
        name: "Lateral bound",
        dose: "3 × 3 each way",
        cue: "Push the ground away. Stick the landing.",
        marks: [
          { on: "hip", t: "Glute med", place: "tl" },
          { on: "near.thigh", t: "Quads", place: "tr" },
        ],
        build: poseLateralBound,
      },
    ],
  },
  {
    id: "foam-roller",
    title: "Foam roller",
    kicker: "Unstick tissue",
    target: "Back, glutes",
    color: "#e6a817",
    ink: "#8f6408",
    exercises: [
      {
        id: "thoracic-roll",
        n: 1,
        name: "Thoracic roll",
        dose: "45–60 sec",
        cue: "Roll the upper back only. Keep the low back quiet.",
        marks: [{ on: "chest", t: "Upper back", place: "tr" }],
        build: poseThoracicRoll,
      },
      {
        id: "glute-roll",
        n: 2,
        name: "Glute roll",
        dose: "45 sec each side",
        cue: "Ankle on the knee. Slow rolls through the glute.",
        marks: [{ on: "hip", t: "Glutes", place: "tl" }],
        build: poseGluteRoll,
      },
    ],
  },
  {
    id: "explosiveness",
    title: "Explosiveness",
    kicker: "Fast ground contact",
    target: "Full body",
    color: "#e23b4a",
    ink: "#c22536",
    exercises: [
      {
        id: "broad-jump",
        n: 1,
        name: "Broad jump",
        dose: "4 × 3",
        cue: "Swing the arms. Jump out. Land soft, then stand tall.",
        marks: [
          { on: "hip", t: "Glutes", place: "tl" },
          { on: "near.thigh", t: "Quads", place: "tr" },
        ],
        build: poseBroadJump,
      },
      {
        id: "clap-pushup",
        n: 2,
        name: "Clap push-up",
        dose: "4 × 3",
        cue: "Body stays one line. Hands leave the floor together.",
        marks: [
          { on: "chest", t: "Chest", place: "tl" },
          { on: "near.upper", t: "Triceps", place: "tr", tone: "deep" },
        ],
        build: poseClapPushup,
      },
    ],
  },
  {
    id: "medicine-ball",
    title: "Medicine ball",
    kicker: "Roll the hips",
    target: "Hips",
    color: "#7cb342",
    ink: "#4f7a24",
    exercises: [
      {
        id: "hip-roll",
        n: 1,
        name: "Hip roll",
        dose: "45 sec each side",
        cue: "Ball in the outer hip. Small moves. Keep breathing.",
        marks: [
          { on: "hip", t: "Piriformis", place: "tl", tone: "deep" },
          { on: "near.thigh", t: "Glutes", place: "tr" },
        ],
        build: poseHipRoll,
      },
      {
        id: "figure-4",
        n: 2,
        name: "Figure-4 opener",
        dose: "45 sec each side",
        cue: "Ankle over the knee. Lean until the hip opens.",
        marks: [
          { on: "hip", t: "Hips", place: "tl" },
          { on: "far.thigh", t: "Glutes", place: "tr", tone: "deep" },
        ],
        build: poseFigure4,
      },
    ],
  },
  {
    id: "kettlebell",
    title: "Kettlebell",
    kicker: "Strength and snap",
    target: "Posterior chain",
    color: "#e07a2f",
    ink: "#b45312",
    exercises: [
      {
        id: "swing",
        n: 1,
        name: "Swing",
        dose: "5 × 10",
        cue: "Hinge the hips back. Snap them through. Arms stay loose.",
        marks: [
          { on: "near.thigh", t: "Hamstrings", place: "bl" },
          { on: "hip", t: "Glutes", place: "tl", tone: "deep" },
        ],
        build: poseSwing,
      },
      {
        id: "goblet-squat",
        n: 2,
        name: "Goblet squat",
        dose: "4 × 6",
        cue: "Bell at the chest. Elbows inside the knees. Heels down.",
        marks: [
          { on: "near.thigh", t: "Quads", place: "tr" },
          { on: "hip", t: "Glutes", place: "tl", tone: "deep" },
        ],
        build: poseGoblet,
      },
    ],
  },
];

function phases(base, start, finish) {
  return {
    start: figure({ ...base, ...start, marks: [] }),
    finish: figure({ ...base, ...finish }),
  };
}

function poseLateralWalk(color, marks, marker) {
  return phases({
    view: "front",
    color,
    marks,
    marker,
    hip: [130, 100],
    stance: 15,
    plant: 182,
    floor: 186,
    left: { abd: 24, knee: 36, out: 42, elbow: 6 },
    right: { abd: 20, knee: 32, out: 38, elbow: 4 },
    behind(j, ink) {
      return cableRig([16, j.left.ankle[1] - 6], j.left.ankle, ink);
    },
  }, {
    stance: 8,
    left: { abd: 8, knee: 16, out: 12, elbow: 4 },
    right: { abd: 8, knee: 16, out: 12, elbow: 4 },
  }, {});
}

function poseForwardWalk(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: 1,
    hip: [124, 110],
    torso: 8,
    plant: 182,
    floor: 186,
    near: { hip: 34, knee: 16, shoulder: -22, elbow: 18, foot: 6 },
    far: { hip: -26, knee: 14, shoulder: 32, elbow: 16, foot: 4 },
    behind(j, ink) {
      return cableRig([14, j.far.ankle[1] - 28], j.far.ankle, ink);
    },
  }, {
    torso: 2,
    near: { hip: 8, knee: 8, shoulder: 6, elbow: 8, foot: 2 },
    far: { hip: 4, knee: 6, shoulder: 4, elbow: 6, foot: 2 },
  }, {});
}

function poseSquatJump(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: 1,
    hip: [124, 96],
    torso: -6,
    gap: 3,
    float: 22,
    floor: 190,
    near: { hip: 36, knee: 70, shoulder: 168, elbow: 6, foot: 34 },
    far: { hip: 24, knee: 74, shoulder: 160, elbow: 4, foot: 38 },
  }, {
    float: 0,
    torso: 12,
    near: { hip: 48, knee: 78, shoulder: -28, elbow: 20, foot: 8 },
    far: { hip: 40, knee: 74, shoulder: -22, elbow: 16, foot: 8 },
  }, {});
}

function poseLateralBound(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: 1,
    hip: [118, 100],
    torso: 28,
    plant: 188,
    float: 26,
    floor: 190,
    gap: 4,
    near: { hip: 48, knee: 36, shoulder: 55, elbow: 8, foot: 28 },
    far: { hip: -36, knee: 18, shoulder: -30, elbow: 12, foot: 20 },
  }, {
    torso: 18,
    float: 0,
    near: { hip: 36, knee: 62, shoulder: -20, elbow: 16, foot: 6 },
    far: { hip: 10, knee: 20, shoulder: 8, elbow: 8, foot: 4 },
  }, {});
}

function poseThoracicRoll(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: -1,
    hip: [168, 150],
    torso: 62,
    plant: 176,
    floor: 180,
    farLeg: false,
    farArm: false,
    near: { hip: -100, knee: -70, shoulder: -40, elbow: 100, foot: 12 },
    behind(j) {
      const back = along(j.shoulder, j.hip, 0.35);
      return roller(back[0], back[1] + 12, 15);
    },
  }, {
    torso: 82,
    near: { hip: -108, knee: -40, shoulder: -8, elbow: 70, foot: 8 },
  }, {});
}

function poseGluteRoll(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: 1,
    hip: [118, 132],
    torso: -28,
    plant: 180,
    floor: 184,
    gap: 4,
    near: { hip: 62, knee: 48, shoulder: 48, elbow: 16, foot: 8 },
    far: { hip: 88, knee: 108, shoulder: 20, elbow: 10, foot: 20 },
    farArm: false,
    behind(j) {
      return roller(j.hip[0] + 4, j.hip[1] + 14, 15);
    },
  }, {
    torso: -8,
    near: { hip: 40, knee: 28, shoulder: 20, elbow: 10, foot: 4 },
    far: { hip: 48, knee: 36, shoulder: 16, elbow: 8, foot: 6 },
  }, {});
}

function poseBroadJump(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: 1,
    hip: [112, 108],
    torso: 36,
    plant: 188,
    float: 28,
    floor: 190,
    near: { hip: 42, knee: 48, shoulder: 62, elbow: 6, foot: 30 },
    far: { hip: -28, knee: 22, shoulder: -18, elbow: 8, foot: 18 },
  }, {
    torso: 48,
    float: 0,
    near: { hip: 28, knee: 42, shoulder: -36, elbow: 18, foot: 6 },
    far: { hip: 18, knee: 36, shoulder: -28, elbow: 14, foot: 6 },
  }, {});
}

function poseClapPushup(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: -1,
    hip: [150, 108],
    torso: 78,
    plant: 168,
    floor: 176,
    gap: 7,
    farLeg: false,
    near: { hip: -82, knee: 4, shoulder: 8, elbow: 28, foot: 10 },
    far: { shoulder: 4, elbow: 24 },
  }, {
    near: { hip: -82, knee: 8, shoulder: 18, elbow: 95, foot: 8 },
    far: { shoulder: 14, elbow: 90 },
  }, {});
}

function poseHipRoll(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: -1,
    hip: [146, 128],
    torso: 68,
    plant: 174,
    floor: 178,
    farLeg: false,
    farArm: false,
    near: { hip: -115, knee: -65, shoulder: 8, elbow: 6, foot: 18 },
    behind(j) {
      return medball(j.hip[0] + 2, j.hip[1] + 12, 16);
    },
  }, {
    torso: 88,
    near: { hip: -96, knee: -30, shoulder: 4, elbow: 4, foot: 10 },
  }, {});
}

function poseFigure4(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: 1,
    hip: [124, 118],
    torso: 6,
    floor: 184,
    gap: 2,
    farArm: false,
    near: { hip: 68, knee: 76, shoulder: 18, elbow: 12, foot: 4 },
    far: { hip: 102, knee: 148, foot: 40 },
    behind(j) {
      return medball(j.hip[0] - 2, j.hip[1] + 12, 16);
    },
  }, {
    torso: 2,
    near: { hip: 42, knee: 48, shoulder: 10, elbow: 8, foot: 2 },
    far: { hip: 70, knee: 110, foot: 20 },
  }, {});
}

function poseSwing(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: 1,
    hip: [108, 112],
    torso: 52,
    plant: 182,
    floor: 186,
    gap: 5,
    near: { hip: 18, knee: 24, shoulder: 8, elbow: 4, foot: 4 },
    far: { hip: 6, knee: 18, shoulder: 4, elbow: 2, foot: 2 },
    front(j) {
      return kettlebell(j.near.wrist[0], j.near.wrist[1] - 2, 0.9);
    },
  }, {}, {
    torso: 6,
    near: { hip: -8, knee: 8, shoulder: 150, elbow: 8, foot: 2 },
    far: { hip: -4, knee: 6, shoulder: 148, elbow: 6, foot: 2 },
  });
}

function poseGoblet(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: 1,
    hip: [112, 116],
    torso: 6,
    plant: 182,
    floor: 186,
    farArm: false,
    near: { hip: 52, knee: 58, shoulder: 78, elbow: 108, foot: 2 },
    far: { hip: 40, knee: 55, foot: 2 },
    front(j) {
      return kettlebell(j.near.wrist[0] + 2, j.near.wrist[1] - 4, 0.86);
    },
  }, {
    torso: 2,
    near: { hip: 8, knee: 8, shoulder: 70, elbow: 100, foot: 0 },
    far: { hip: 6, knee: 6, foot: 0 },
  }, {});
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

function figureSvg(label, inner) {
  return `<svg viewBox="0 0 260 200" role="img" aria-label="${esc(label)}">${inner}</svg>`;
}

function cardHtml(exercise, category) {
  const phases = exercise.build(category.color, exercise.marks, `mk-${exercise.id}`);
  return `<article class="card" id="${exercise.id}" style="--accent:${category.color}">
    <div class="stage pair">
      <div class="phase">${figureSvg(`${exercise.name}, start`, phases.start)}<span>Start</span></div>
      <div class="phase">${figureSvg(`${exercise.name}, finish`, phases.finish)}<span>Finish</span></div>
    </div>
    <div class="title-row"><span></span><h3>${esc(exercise.name)}</h3><span class="n">${exercise.n}.</span></div>
    <p class="dose">${esc(exercise.dose)}</p>
    <p class="cue">${esc(exercise.cue)}</p>
  </article>`;
}

function renderBoard() {
  const main = document.querySelector("#routines");
  main.innerHTML = categories.map((category) => `
    <section class="routine" data-cat="${category.id}">
      <header class="group-head">
        <h2>${esc(category.title)}</h2>
        <p class="kicker">${esc(category.kicker)}</p>
        <p class="target" style="color:${category.ink}">Target: ${esc(category.target)}</p>
      </header>
      <div class="cards">
        ${category.exercises.map((exercise) => cardHtml(exercise, category)).join("")}
      </div>
    </section>
  `).join("");
}

function chipHtml(id, label, count, color) {
  const dot = color ? `<i style="background:${color}"></i>` : "<i></i>";
  return `<button type="button" class="chip" data-filter="${id}" aria-pressed="false">${dot}<span>${esc(label)}</span><em>${count}</em></button>`;
}

function renderFilters() {
  const nav = document.querySelector("#filters");
  const total = categories.reduce((sum, category) => sum + category.exercises.length, 0);
  nav.innerHTML = [
    chipHtml("all", "All", total),
    ...categories.map((category) => chipHtml(category.id, category.title, category.exercises.length, category.color)),
  ].join("");
  nav.addEventListener("click", (event) => {
    const button = event.target.closest(".chip");
    if (!button) return;
    const id = button.dataset.filter;
    const url = new URL(location.href);
    url.hash = id === "all" ? "" : id;
    history.replaceState(null, "", url);
    applyFilter(id);
  });
}

function currentFilter() {
  const hash = location.hash.replace("#", "");
  return categories.some((category) => category.id === hash) ? hash : "all";
}

function applyFilter(id) {
  document.querySelectorAll(".routine").forEach((section) => {
    section.hidden = id !== "all" && section.dataset.cat !== id;
  });
  document.querySelectorAll(".chip").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.filter === id ? "true" : "false");
  });
  const status = document.querySelector("#status");
  if (id === "all") {
    status.textContent = "Showing all routines";
    return;
  }
  const category = categories.find((item) => item.id === id);
  status.textContent = `Showing ${category.title}`;
}

renderFilters();
renderBoard();
applyFilter(currentFilter());
window.addEventListener("hashchange", () => applyFilter(currentFilter()));
