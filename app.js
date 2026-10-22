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
    kicker: "Warm-up to basics, bodyweight",
    target: "Calves, quads, glutes",
    color: "#ef5a3c",
    ink: "#c2412c",
    exercises: [
      {
        id: "pogo-hop",
        n: 1,
        stage: "Warm-up",
        name: "Pogo hops",
        dose: "2 × 20",
        cue: "Stiff ankles. Small, quick hops on the balls of the feet.",
        marks: [{ on: "near.shin", t: "Calves", place: "tr" }],
        build: posePogo,
      },
      {
        id: "a-skip",
        n: 2,
        stage: "Warm-up",
        name: "A-skip",
        dose: "2 × 15 m",
        cue: "Drive one knee up, opposite arm forward. Land under the hip.",
        marks: [
          { on: "near.thigh", t: "Hip flexors", place: "tr" },
          { on: "far.shin", t: "Calves", place: "bl", tone: "deep" },
        ],
        build: poseASkip,
      },
      {
        id: "snap-down",
        n: 3,
        stage: "Basics",
        name: "Snap-down",
        dose: "3 × 5",
        cue: "Tall on the toes, arms up. Snap down to a quiet half squat.",
        marks: [
          { on: "near.thigh", t: "Quads", place: "tr" },
          { on: "hip", t: "Glutes", place: "tl", tone: "deep" },
        ],
        build: poseSnapDown,
      },
      {
        id: "squat-jump",
        n: 4,
        stage: "Basics",
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
        id: "split-jump",
        n: 5,
        stage: "Basics",
        name: "Split jump",
        dose: "3 × 3 each leg",
        cue: "Lunge stance. Jump, switch legs in the air, land soft.",
        marks: [
          { on: "near.thigh", t: "Quads", place: "tr" },
          { on: "hip", t: "Glutes", place: "tl", tone: "deep" },
        ],
        build: poseSplitJump,
      },
      {
        id: "lateral-bound",
        n: 6,
        stage: "Basics",
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
          { on: "chest", t: "Chest", place: "bl" },
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
    id: "hip-mobility",
    title: "Hip mobility",
    kicker: "Floor only, no machine",
    target: "Hips, glutes",
    color: "#7e57c2",
    ink: "#5b3a9e",
    exercises: [
      {
        id: "double-clamshell",
        n: 1,
        name: "Double clamshell",
        dose: "2 × 10 each side",
        cue: "Lie on your side. Lift both feet, then open the top knee. Hips stay stacked.",
        marks: [
          { on: "left.hip", t: "Glute med", place: "tl" },
          { on: "left.thigh", t: "Hip rotators", place: "tr", tone: "deep" },
        ],
        build: poseDoubleClam,
      },
      {
        id: "hip-flexor-stretch",
        n: 2,
        name: "Half-kneeling hip flexor",
        dose: "45 sec each side",
        cue: "Back knee down. Squeeze that glute and shift the hips forward.",
        marks: [
          { on: "far.thigh", t: "Hip flexors", place: "bl" },
          { on: "hip", t: "Glutes", place: "tl", tone: "deep" },
        ],
        build: poseHipFlexor,
      },
      {
        id: "cossack-squat",
        n: 3,
        name: "Cossack squat",
        dose: "2 × 6 each side",
        cue: "Wide stance. Sit into one hip. Straight leg, toes up.",
        marks: [
          { on: "left.thigh", t: "Adductors", place: "tl" },
          { on: "right.hip", t: "Glutes", place: "tr", tone: "deep" },
        ],
        build: poseCossack,
      },
      {
        id: "glute-bridge",
        n: 4,
        name: "Glute bridge",
        dose: "2 × 12",
        cue: "Feet flat. Drive through the heels. Pause with the hips high.",
        marks: [
          { on: "hip", t: "Glutes", place: "tl" },
          { on: "near.thigh", t: "Hamstrings", place: "tr", tone: "deep" },
        ],
        build: poseBridge,
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

// mids are in-between poses for the animation only, start to finish.
function phases(base, start, finish, mids = []) {
  return {
    start: figure({ ...base, ...start, marks: [] }),
    finish: figure({ ...base, ...finish }),
    keys: [start, ...mids, finish].map((pose) => ({ ...base, ...pose, marks: [] })),
    marks: base.marks,
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
  }, {}, [{
    float: 6,
    torso: 0,
    near: { hip: 2, knee: 4, shoulder: 150, elbow: 4, foot: 40 },
    far: { hip: -2, knee: 4, shoulder: 146, elbow: 4, foot: 40 },
  }]);
}

function posePogo(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: 1,
    hip: [124, 100],
    torso: 2,
    floor: 190,
    gap: 3,
    near: { hip: 2, knee: 4, shoulder: 12, elbow: 80, foot: 36 },
    far: { hip: -2, knee: 4, shoulder: 6, elbow: 80, foot: 36 },
  }, {}, {
    float: 16,
    near: { hip: 0, knee: 2, shoulder: 18, elbow: 70, foot: 50 },
    far: { hip: -3, knee: 2, shoulder: 10, elbow: 70, foot: 50 },
  });
}

function poseASkip(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: 1,
    hip: [124, 100],
    torso: 2,
    floor: 190,
    gap: 3,
    near: { hip: 30, knee: 34, shoulder: 30, elbow: 70, foot: 30 },
    far: { hip: -6, knee: 6, shoulder: -24, elbow: 70, foot: 24 },
  }, {}, {
    float: 8,
    near: { hip: 88, knee: 96, shoulder: -34, elbow: 70, foot: 10 },
    far: { hip: -4, knee: 6, shoulder: 50, elbow: 80, foot: 34 },
  });
}

function poseSnapDown(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: 1,
    hip: [124, 100],
    torso: 0,
    floor: 190,
    gap: 3,
    near: { hip: 0, knee: 0, shoulder: 172, elbow: 0, foot: 40 },
    far: { hip: -2, knee: 0, shoulder: 168, elbow: 0, foot: 40 },
  }, {}, {
    torso: 30,
    near: { hip: 42, knee: 72, shoulder: -34, elbow: 12, foot: 4 },
    far: { hip: 36, knee: 66, shoulder: -28, elbow: 10, foot: 4 },
  });
}

function poseSplitJump(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: 1,
    hip: [124, 108],
    torso: 0,
    floor: 190,
    gap: 4,
    near: { hip: 82, knee: 86, shoulder: -24, elbow: 30, foot: 0 },
    far: { hip: -14, knee: 76, shoulder: 26, elbow: 30, foot: 150 },
  }, {}, {
    near: { hip: -14, knee: 76, shoulder: 26, elbow: 30, foot: 150 },
    far: { hip: 82, knee: 86, shoulder: -24, elbow: 30, foot: 0 },
  }, [{
    float: 24,
    near: { hip: 34, knee: 40, shoulder: 0, elbow: 30, foot: 30 },
    far: { hip: 28, knee: 50, shoulder: 0, elbow: 30, foot: 40 },
  }]);
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
    torso: 91,
    plant: 176,
    floor: 180,
    farLeg: false,
    farArm: false,
    near: { hip: -100, knee: -70, shoulder: 150, elbow: -110, foot: 12 },
    behind(j, ink, floorY) {
      const back = along(j.shoulder, j.hip, 0.35);
      return roller(back[0], floorY - 15, 15);
    },
  }, {
    torso: 46,
    near: { hip: -108, knee: -40, shoulder: 130, elbow: -110, foot: 8 },
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
    near: { hip: 104, knee: 109, shoulder: 40, elbow: 30, foot: 0 },
    far: { hip: 125, knee: 150, foot: 20 },
    farArm: false,
    behind(j, ink, floorY) {
      return roller(j.hip[0] + 4, floorY - 15, 15);
    },
  }, {
    torso: -20,
    near: { hip: 104, knee: 107, shoulder: 30, elbow: 30, foot: 0 },
    far: { hip: 128, knee: 152, foot: 20 },
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
    torso: 67,
    plant: 168,
    floor: 176,
    gap: 7,
    farLeg: false,
    near: { hip: -67, knee: 0, shoulder: 0, elbow: 0, foot: 20 },
    far: { shoulder: -4, elbow: 0 },
  }, {}, {
    torso: 58,
    near: { hip: -58, knee: 0, shoulder: 18, elbow: 24, foot: 20 },
    far: { shoulder: 14, elbow: 28 },
  });
}

function poseHipRoll(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: -1,
    hip: [146, 128],
    torso: 80,
    plant: 174,
    floor: 178,
    farLeg: false,
    farArm: false,
    near: { hip: -99, knee: -65, shoulder: 0, elbow: 90, foot: 18 },
    behind(j, ink, floorY) {
      return medball(j.hip[0] + 2, floorY - 16, 16);
    },
  }, {
    torso: 88,
    near: { hip: -84, knee: -30, shoulder: 0, elbow: 90, foot: 10 },
  }, {});
}

function poseFigure4(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: 1,
    hip: [124, 118],
    torso: 30,
    floor: 184,
    gap: 2,
    farArm: false,
    near: { hip: 101, knee: 103, shoulder: 30, elbow: 12, foot: 0 },
    far: { hip: 125, knee: 150, foot: 20 },
    behind(j, ink, floorY) {
      return medball(j.hip[0] - 2, floorY - 16, 16);
    },
  }, {
    torso: 2,
    near: { hip: 101, knee: 103, shoulder: 18, elbow: 12, foot: 0 },
    far: { hip: 125, knee: 150, foot: 20 },
  }, {});
}

function poseDoubleClam(color, marks, marker) {
  // Front view laid on the right side, head on the bottom arm. Left is the top leg.
  return phases({
    view: "front",
    color,
    marks,
    marker,
    turn: 90,
    lie: true,
    hip: [130, 100],
    stance: 7,
    floor: 186,
    left: { abd: 0, knee: -28, out: 20, elbow: 30, foot: 120 },
    right: { abd: 0, knee: 28, out: 180, elbow: -160, foot: 60 },
  }, {}, {
    left: { abd: 34, knee: 56, out: 20, elbow: 30, foot: 60 },
  }, [{
    left: { abd: 16, knee: 14, out: 20, elbow: 30, foot: 90 },
  }]);
}

function poseHipFlexor(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: 1,
    hip: [118, 110],
    torso: 0,
    floor: 186,
    gap: 4,
    near: { hip: 85, knee: 87, shoulder: 4, elbow: 10, foot: 0 },
    far: { hip: -10, knee: 80, shoulder: 2, elbow: 8, foot: 170 },
  }, {}, {
    torso: -6,
    near: { hip: 88, knee: 90, shoulder: 170, elbow: 6, foot: 0 },
    far: { hip: -22, knee: 68, shoulder: 166, elbow: 6, foot: 170 },
  });
}

function poseCossack(color, marks, marker) {
  return phases({
    view: "front",
    color,
    marks,
    marker,
    hip: [130, 100],
    stance: 14,
    floor: 186,
    left: { abd: 22, knee: 0, out: 12, elbow: 4, foot: 0 },
    right: { abd: 22, knee: 0, out: 12, elbow: 4, foot: 0 },
  }, {}, {
    left: { abd: 54, knee: 0, out: 30, elbow: 70, foot: 0 },
    right: { abd: 70, knee: 100, out: 30, elbow: 70, foot: 0 },
  });
}

function poseBridge(color, marks, marker) {
  return phases({
    color,
    marks,
    marker,
    face: 1,
    lie: true,
    hip: [140, 120],
    torso: -98,
    floor: 186,
    gap: 4,
    near: { hip: 128, knee: 135, shoulder: 93, elbow: 0, foot: 0 },
    far: { hip: 124, knee: 131, shoulder: 92, elbow: 0, foot: 0 },
  }, {}, {
    torso: -105,
    near: { hip: 110, knee: 120, shoulder: 85, elbow: 0, foot: 0 },
    far: { hip: 106, knee: 116, shoulder: 84, elbow: 0, foot: 0 },
  });
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

function stillsHtml(exercise, phases) {
  return `
      <div class="phase">${figureSvg(`${exercise.name}, start`, phases.start)}<span>Start</span></div>
      <div class="phase">${figureSvg(`${exercise.name}, finish`, phases.finish)}<span>Finish</span></div>`;
}

function cardHtml(exercise, category) {
  const phases = exercise.build(category.color, exercise.marks, `mk-${exercise.id}`);
  const play = `<button type="button" class="play" data-play="${exercise.id}" aria-pressed="false" aria-label="Play ${esc(exercise.name)}">Play</button>`;
  return `<article class="card" id="${exercise.id}" style="--accent:${category.color}">
    ${play}
    <div class="stage pair">
      ${stillsHtml(exercise, phases)}
    </div>
    <div class="title-row"><span></span><h3>${esc(exercise.name)}</h3><span class="n">${exercise.n}.</span></div>
    <p class="dose">${exercise.stage ? `<b class="stage-tag">${esc(exercise.stage)}</b>` : ""}${esc(exercise.dose)}</p>
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

// Plays start to finish and back. A click plays three times; a hover plays
// until the mouse leaves. On touch screens the card in the middle of the
// screen plays, one at a time. Then the card returns to the stills.
const HOLD_START = 320;
const STEP = 360;
const HOLD_FINISH = 520;
const LOOPS = 3;
const players = new Map();

function ease(t) {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

function poseAt(keys, ms) {
  const path = [...keys.keys(), ...[...keys.keys()].reverse().slice(1, -1)];
  const spans = path.map((at) => (at === 0 ? HOLD_START : at === keys.length - 1 ? HOLD_FINISH : 0) + STEP);
  const cycle = spans.reduce((sum, span) => sum + span, 0);
  let t = ms % cycle;
  for (let i = 0; i < path.length; i++) {
    const from = path[i];
    const to = path[(i + 1) % path.length];
    const hold = spans[i] - STEP;
    if (t < spans[i]) {
      if (t < hold) return { spec: keys[from], at: from };
      return { spec: tween(keys[from], keys[to], ease((t - hold) / STEP)), at: -1 };
    }
    t -= spans[i];
  }
  return { spec: keys[0], at: 0 };
}

function cycleLength(keys) {
  return HOLD_START + HOLD_FINISH + STEP * 2 * (keys.length - 1);
}

function stopPlay(id) {
  const player = players.get(id);
  if (!player) return;
  cancelAnimationFrame(player.raf);
  players.delete(id);
  const { card, exercise, phases } = player;
  card.querySelector(".stage").innerHTML = stillsHtml(exercise, phases);
  card.querySelector(".stage").classList.remove("playing");
  const button = card.querySelector(".play");
  button.textContent = "Play";
  button.setAttribute("aria-pressed", "false");
}

function startPlay(id, loops = LOOPS, by = "click") {
  const category = categories.find((item) => item.exercises.some((exercise) => exercise.id === id));
  const exercise = category.exercises.find((item) => item.id === id);
  const phases = exercise.build(category.color, exercise.marks, `mk-${exercise.id}`);
  const fit = fitMotion(phases.keys);
  const card = document.getElementById(id);
  const stage = card.querySelector(".stage");
  stage.classList.add("playing");
  stage.innerHTML = `<div class="phase wide"><svg viewBox="-130 0 520 200" role="img" aria-label="${esc(exercise.name)}, moving"></svg><span>Start to finish</span></div>`;
  const svg = stage.querySelector("svg");
  const button = card.querySelector(".play");
  button.textContent = "Stop";
  button.setAttribute("aria-pressed", "true");
  const player = { card, exercise, phases, raf: 0, by };
  players.set(id, player);
  const total = cycleLength(phases.keys) * loops;
  const t0 = performance.now();
  const tick = (now) => {
    const ms = now - t0;
    if (ms >= total) return stopPlay(id);
    const { spec, at } = poseAt(phases.keys, ms);
    const marks = at === phases.keys.length - 1 ? phases.marks : [];
    svg.innerHTML = figure({ ...spec, fit, marks });
    player.raf = requestAnimationFrame(tick);
  };
  player.raf = requestAnimationFrame(tick);
}

function wirePlayback() {
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const paused = new Set();
  document.querySelector("#routines").addEventListener("click", (event) => {
    const card = event.target.closest(".card");
    if (!card) return;
    const player = players.get(card.id);
    stopPlay(card.id);
    // A tap pauses the scrolling autoplay until the card leaves the middle.
    if (player && player.by === "view") paused.add(card.id);
    else if (!player || player.by !== "click") startPlay(card.id);
  });
  if (still) return;
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse" && !players.has(card.id)) startPlay(card.id, Infinity, "hover");
    });
    card.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "mouse" && players.get(card.id)?.by === "hover") stopPlay(card.id);
    });
  });
  if (!matchMedia("(hover: none)").matches) return;
  const middle = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const id = entry.target.id;
      if (!entry.isIntersecting) {
        paused.delete(id);
        if (players.get(id)?.by === "view") stopPlay(id);
        continue;
      }
      if (paused.has(id) || players.has(id)) continue;
      for (const [other, player] of players) if (player.by === "view") stopPlay(other);
      startPlay(id, Infinity, "view");
    }
  }, { rootMargin: "-45% 0px -45% 0px" });
  document.querySelectorAll(".card").forEach((card) => middle.observe(card));
}

renderFilters();
renderBoard();
wirePlayback();
applyFilter(currentFilter());
window.addEventListener("hashchange", () => applyFilter(currentFilter()));
