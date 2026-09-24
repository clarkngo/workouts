// One stick figure, posed by joint angles.
// Lengths never change, so a new exercise is only a few degrees.
//
// Side view, face 1 looks right and face -1 looks left.
//   torso:  0 stands up. Positive leans toward the face.
//   hip:     0 hangs down. Positive swings the thigh forward.
//   knee:    0 is straight. Positive bends the shin back.
//   shoulder: 0 hangs down. Positive swings the arm forward.
//   elbow:   0 is straight. Positive bends the hand forward.
//   foot:    0 is flat. Positive points the toes down.
//
// Front view uses abd (knee out), knee, out (arm away from the body), and elbow.

const BODY = "#1f242b";
const LIMB = "#4a5560";
const ARM = "#6a7682";
const FAR = "#b8c0c8";
const EDGE = "#1a1e24";

const BONE = {
  torso: 48,
  neck: 18,
  head: 9,
  upper: 28,
  fore: 25,
  thigh: 36,
  shin: 33,
  foot: 15,
};

const W = {
  torso: 18,
  neck: 11,
  arm: 12,
  leg: 15,
  foot: 8,
  muscle: 7,
};

function n(value) {
  return (Math.round(value * 10) / 10).toString();
}

function polar(deg, len) {
  const r = (deg * Math.PI) / 180;
  return [Math.cos(r) * len, Math.sin(r) * len];
}

function add(a, b) {
  return [a[0] + b[0], a[1] + b[1]];
}

function along(a, b, t) {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}

function shade(hex) {
  const value = parseInt(hex.slice(1), 16);
  const scale = (channel) => Math.max(0, Math.min(255, Math.round(channel * 0.78)));
  const r = scale((value >> 16) & 255);
  const g = scale((value >> 8) & 255);
  const b = scale(value & 255);
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

function limbSide(hip, shoulder, ang, face) {
  const pose = ang || {};
  const thighDir = 90 - face * (pose.hip || 0);
  const knee = add(hip, polar(thighDir, BONE.thigh));
  const shinDir = thighDir + face * (pose.knee || 0);
  const ankle = add(knee, polar(shinDir, BONE.shin));
  const footDir = face === 1 ? (pose.foot || 0) : 180 - (pose.foot || 0);
  const toe = add(ankle, polar(footDir, BONE.foot));
  const upperDir = 90 - face * (pose.shoulder || 0);
  const elbow = add(shoulder, polar(upperDir, BONE.upper));
  const foreDir = upperDir - face * (pose.elbow || 0);
  const wrist = add(elbow, polar(foreDir, BONE.fore));
  return { hip, knee, ankle, toe, shoulder, elbow, wrist };
}

function limbFront(hip, shoulder, ang, side, stance) {
  const pose = ang || {};
  const hipJ = [hip[0] + side * stance, hip[1]];
  const shoulderJ = [shoulder[0] + side * (stance * 0.7 + 8), shoulder[1]];
  const thighDir = 90 - side * (pose.abd || 0);
  const knee = add(hipJ, polar(thighDir, BONE.thigh));
  const shinDir = thighDir + side * (pose.knee || 0);
  const ankle = add(knee, polar(shinDir, BONE.shin));
  const footDir = side === 1 ? (pose.foot || 0) : 180 - (pose.foot || 0);
  const toe = add(ankle, polar(footDir, BONE.foot));
  const upperDir = 90 - side * (pose.out || 0);
  const elbow = add(shoulderJ, polar(upperDir, BONE.upper));
  const foreDir = upperDir + side * (pose.elbow || 0);
  const wrist = add(elbow, polar(foreDir, BONE.fore));
  return { hip: hipJ, knee, ankle, toe, shoulder: shoulderJ, elbow, wrist };
}

function collectPoints(joints) {
  const pts = [joints.hip, joints.shoulder, joints.head, [joints.head[0], joints.head[1] - BONE.head]];
  for (const limb of [joints.far, joints.near, joints.left, joints.right]) {
    if (!limb) continue;
    for (const key of ["hip", "knee", "ankle", "toe", "shoulder", "elbow", "wrist"]) {
      if (limb[key]) pts.push(limb[key]);
    }
  }
  return pts;
}

function translate(joints, dx, dy) {
  const move = (p) => (p ? [p[0] + dx, p[1] + dy] : p);
  const moveLimb = (limb) => {
    if (!limb) return limb;
    return {
      hip: move(limb.hip),
      knee: move(limb.knee),
      ankle: move(limb.ankle),
      toe: move(limb.toe),
      shoulder: move(limb.shoulder),
      elbow: move(limb.elbow),
      wrist: move(limb.wrist),
    };
  };
  return {
    ...joints,
    hip: move(joints.hip),
    shoulder: move(joints.shoulder),
    head: move(joints.head),
    far: moveLimb(joints.far),
    near: moveLimb(joints.near),
    left: moveLimb(joints.left),
    right: moveLimb(joints.right),
  };
}

function bounds(joints) {
  const pts = collectPoints(joints);
  return pts.reduce((box, p) => ({
    minX: Math.min(box.minX, p[0]),
    maxX: Math.max(box.maxX, p[0]),
    minY: Math.min(box.minY, p[1]),
    maxY: Math.max(box.maxY, p[1]),
  }), { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity });
}

function scaleJoints(joints, cx, cy, s, tx, ty) {
  const move = (p) => (p ? [(p[0] - cx) * s + tx, (p[1] - cy) * s + ty] : p);
  const moveLimb = (limb) => {
    if (!limb) return limb;
    return {
      hip: move(limb.hip),
      knee: move(limb.knee),
      ankle: move(limb.ankle),
      toe: move(limb.toe),
      shoulder: move(limb.shoulder),
      elbow: move(limb.elbow),
      wrist: move(limb.wrist),
    };
  };
  return {
    ...joints,
    scale: (joints.scale || 1) * s,
    hip: move(joints.hip),
    shoulder: move(joints.shoulder),
    head: move(joints.head),
    far: moveLimb(joints.far),
    near: moveLimb(joints.near),
    left: moveLimb(joints.left),
    right: moveLimb(joints.right),
  };
}

function frame(joints, spec) {
  const box = { l: 58, t: 30, r: 202, b: spec.float ? 158 : 172 };
  const b = bounds(joints);
  const w = Math.max(b.maxX - b.minX, 1);
  const h = Math.max(b.maxY - b.minY, 1);
  const s = Math.min(1, (box.r - box.l) / w, (box.b - box.t) / h);
  const cx = (b.minX + b.maxX) / 2;
  const cy = (b.minY + b.maxY) / 2;
  return scaleJoints(joints, cx, cy, s, (box.l + box.r) / 2, (box.t + box.b) / 2);
}

function solve(spec) {
  if (spec.view === "front") return frame(solveFront(spec), spec);
  const face = spec.face ?? 1;
  const hip = spec.hip.slice();
  const torsoDir = -90 + face * (spec.torso || 0);
  const shoulder = add(hip, polar(torsoDir, BONE.torso));
  const head = add(shoulder, polar(torsoDir, BONE.neck + BONE.head));
  const gap = spec.gap ?? 9;
  const farHip = [hip[0] - face * gap, hip[1] + 1];
  const farShoulder = [shoulder[0] - face * gap, shoulder[1]];
  const far = limbSide(farHip, farShoulder, spec.far || {}, face);
  if (spec.farLeg === false) far.hip = far.knee = far.ankle = far.toe = null;
  if (spec.farArm === false) far.shoulder = far.elbow = far.wrist = null;
  return frame({
    view: "side",
    face,
    hip,
    shoulder,
    head,
    far,
    near: limbSide(hip, shoulder, spec.near || {}, face),
    drawFarLeg: spec.farLeg !== false,
    drawFarArm: spec.farArm !== false,
  }, spec);
}

function solveFront(spec) {
  const hip = spec.hip.slice();
  const shoulder = [hip[0], hip[1] - BONE.torso];
  const head = [shoulder[0], shoulder[1] - BONE.neck - BONE.head];
  const stance = spec.stance ?? 14;
  return {
    view: "front",
    face: 1,
    hip,
    shoulder,
    head,
    left: limbFront(hip, shoulder, spec.left, -1, stance),
    right: limbFront(hip, shoulder, spec.right, 1, stance),
  };
}

function markSegment(joints, mark) {
  const on = mark.on;
  if (on === "hip") {
    const face = joints.face || 1;
    return [joints.hip, [joints.hip[0] - face * 14, joints.hip[1] - 6]];
  }
  if (on === "chest") return [along(joints.shoulder, joints.hip, 0.12), along(joints.shoulder, joints.hip, 0.48)];
  const [side, bone] = on.split(".");
  const limb = joints[side];
  if (bone === "hip") {
    const outward = side === "left" ? -1 : side === "right" ? 1 : -(joints.face || 1);
    return [limb.hip, [limb.hip[0] + outward * 13, limb.hip[1] - 5]];
  }
  const ends = {
    thigh: ["hip", "knee"],
    shin: ["knee", "ankle"],
    upper: ["shoulder", "elbow"],
    fore: ["elbow", "wrist"],
  }[bone];
  return [along(limb[ends[0]], limb[ends[1]], 0.24), along(limb[ends[0]], limb[ends[1]], 0.76)];
}

const DIR = {
  tl: [-1, -0.75],
  tr: [1, -0.75],
  ml: [-1, 0.1],
  mr: [1, 0.1],
  bl: [-0.9, 0.7],
  br: [0.9, 0.7],
};

function labelSvg(mark, target) {
  const dir = DIR[mark.place] || DIR.tl;
  const textWidth = Math.min(86, mark.t.length * 5.5);
  let x = target[0] + dir[0] * 26;
  let y = target[1] + dir[1] * 20;
  const anchor = dir[0] >= 0 ? "start" : "end";
  if (anchor === "start") x = Math.min(Math.max(8, x), 252 - textWidth);
  else x = Math.max(Math.min(252, x), 8 + textWidth);
  y = Math.max(14, Math.min(158, y));
  return `<text x="${n(x)}" y="${n(y)}" text-anchor="${anchor}" fill="#8b939e" font-size="11" font-family="Archivo, Helvetica, sans-serif" font-weight="500">${mark.t}</text>`;
}

function musclePatch(a, b, color, scale) {
  const mid = along(a, b, 0.5);
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const len = Math.hypot(dx, dy) || 1;
  const ang = (Math.atan2(dy, dx) * 180) / Math.PI;
  const rx = Math.max(9, len * 0.46) * scale;
  const ry = W.muscle * 0.72 * scale;
  return `<ellipse cx="${n(mid[0])}" cy="${n(mid[1])}" rx="${n(rx)}" ry="${n(ry)}" fill="${color}" transform="rotate(${n(ang)} ${n(mid[0])} ${n(mid[1])})"/>`;
}

function floorLine(y) {
  return `<line x1="34" y1="${y}" x2="226" y2="${y}" stroke="#e4e0da" stroke-width="1.6" stroke-linecap="round"/>`;
}

function shadow(x, y) {
  return `<ellipse cx="${n(x)}" cy="${n(y)}" rx="24" ry="4" fill="#000" opacity="0.08"/>`;
}

function roller(x, y, r = 15) {
  return `<circle cx="${n(x)}" cy="${n(y)}" r="${r}" fill="#f4f0e6" stroke="${BODY}" stroke-width="2.4"/><circle cx="${n(x)}" cy="${n(y)}" r="${n(r * 0.38)}" fill="none" stroke="${BODY}" stroke-width="1.6"/>`;
}

function medball(x, y, r = 16) {
  return `<circle cx="${n(x)}" cy="${n(y)}" r="${r}" fill="#c44732"/><path d="M${n(x)} ${n(y - r + 1)} Q${n(x + r * 0.55)} ${n(y)} ${n(x)} ${n(y + r - 1)}" fill="none" stroke="#8e2f1d" stroke-width="1.5"/><path d="M${n(x - r + 1)} ${n(y)} Q${n(x)} ${n(y - r * 0.32)} ${n(x + r - 1)} ${n(y)}" fill="none" stroke="#8e2f1d" stroke-width="1.3"/><path d="M${n(x - r + 1)} ${n(y)} Q${n(x)} ${n(y + r * 0.32)} ${n(x + r - 1)} ${n(y)}" fill="none" stroke="#8e2f1d" stroke-width="1.3"/>`;
}

function kettlebell(x, y, s = 1) {
  return `<g transform="translate(${n(x)} ${n(y)}) scale(${s})"><path d="M-9 8 C-9 -6 9 -6 9 8" fill="none" stroke="#2a3038" stroke-width="3.3" stroke-linecap="round"/><path d="M-9 8 H9" stroke="#2a3038" stroke-width="3.2" stroke-linecap="round"/><circle cx="0" cy="20" r="13" fill="#2a3038"/><path d="M-4 18 Q0 13 4 18" fill="none" stroke="#9aa3ab" stroke-width="1.4"/></g>`;
}

function cableRig(post, end, color) {
  const x = post[0];
  const y = post[1];
  const bottom = Math.min(Math.max(y, end[1]) + 8, 184);
  const top = y - 18;
  return `<rect x="${n(x)}" y="${n(top)}" width="6" height="${n(bottom - top)}" rx="2" fill="#d5dce3"/><rect x="${n(x - 5)}" y="${n(bottom - 3)}" width="16" height="4" rx="1" fill="#c5ced6"/><circle cx="${n(x + 3)}" cy="${n(y)}" r="5.5" fill="#f7f8f6" stroke="#7d8792" stroke-width="2"/><line x1="${n(x + 9)}" y1="${n(y)}" x2="${n(end[0])}" y2="${n(end[1])}" stroke="${color}" stroke-width="2.3"/><circle cx="${n(end[0])}" cy="${n(end[1])}" r="4.6" fill="none" stroke="${color}" stroke-width="2.2"/>`;
}

function bone(a, b, wa, wb, color, edge = null) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const len = Math.hypot(dx, dy) || 1;
  const px = -dy / len;
  const py = dx / len;
  const p = [
    [a[0] + px * wa / 2, a[1] + py * wa / 2],
    [b[0] + px * wb / 2, b[1] + py * wb / 2],
    [b[0] - px * wb / 2, b[1] - py * wb / 2],
    [a[0] - px * wa / 2, a[1] - py * wa / 2],
  ];
  const stroke = edge ? ` stroke="${edge}" stroke-width="${edge === "#fff" ? 2.2 : 1.4}" stroke-linejoin="round"` : "";
  return `<path d="${p.map((pt, i) => `${i ? "L" : "M"}${n(pt[0])} ${n(pt[1])}`).join("")}Z" fill="${color}"${stroke}/>`;
}

function disc(p, r, color, edge = null) {
  const stroke = edge ? ` stroke="${edge}" stroke-width="1.4"` : "";
  return `<circle cx="${n(p[0])}" cy="${n(p[1])}" r="${n(r)}" fill="${color}"${stroke}/>`;
}

function filledLimb(limb, s, color, part = "both", face = 1) {
  if (!limb) return "";
  const edge = color === FAR ? null : color === ARM ? "#fff" : EDGE;
  const parts = [];
  if (part !== "arm" && limb.hip && limb.knee && limb.ankle) {
    const hipW = 12.5 * s;
    const kneeW = 9 * s;
    const ankleW = 5.8 * s;
    const toeW = 3.6 * s;
    parts.push(bone(limb.hip, limb.knee, hipW, kneeW, color, edge));
    parts.push(bone(limb.knee, limb.ankle, kneeW, ankleW, color, edge));
    if (limb.toe) parts.push(bone(limb.ankle, limb.toe, ankleW * 0.85, toeW, color, edge));
    parts.push(disc(limb.hip, hipW / 2.4, color));
    parts.push(disc(limb.knee, kneeW / 2.3, color));
    parts.push(disc(limb.ankle, ankleW / 2.1, color));
    if (limb.toe) parts.push(disc(limb.toe, toeW / 2 + 0.2, color));
  }
  if (part !== "leg" && limb.shoulder && limb.elbow && limb.wrist) {
    const sh = limb.shoulder;
    const el = limb.elbow;
    const wr = limb.wrist;
    const shW = 7.2 * s;
    const elW = 5.6 * s;
    const wrW = 4.4 * s;
    parts.push(bone(sh, el, shW, elW, color, edge));
    parts.push(bone(el, wr, elW, wrW, color, edge));
    parts.push(disc(sh, shW / 2.5, color));
    parts.push(disc(el, elW / 2.3, color));
    parts.push(disc(wr, wrW / 2 + 0.2, color));
  }
  return parts.join("");
}

function filledTorso(joints, color) {
  const s = joints.scale || 1;
  const shR = 4.2 * s;
  const headR = BONE.head * s;
  const span = Math.hypot(joints.head[0] - joints.shoulder[0], joints.head[1] - joints.shoulder[1]) || 1;
  const neckBase = along(joints.shoulder, joints.head, (shR + 1.5) / span);
  const neckTop = along(joints.shoulder, joints.head, 1 - (headR + 1.5) / span);
  return [
    bone(joints.shoulder, joints.hip, 12 * s, 10.5 * s, color),
    disc(joints.hip, 5.2 * s, color),
    disc(joints.shoulder, shR, color),
    bone(neckBase, neckTop, 8 * s, 6.5 * s, LIMB, "#fff"),
    disc(joints.head, headR, color, EDGE),
  ].join("");
}

function drawBody(joints) {
  const s = joints.scale || 1;
  const face = joints.face || 1;
  const parts = [];
  if (joints.view === "front") {
    parts.push(filledLimb(joints.left, s, LIMB, "leg", -1));
    parts.push(filledLimb(joints.right, s, LIMB, "leg", 1));
    parts.push(filledTorso(joints, BODY));
    parts.push(filledLimb(joints.left, s, ARM, "arm", -1));
    parts.push(filledLimb(joints.right, s, ARM, "arm", 1));
  } else {
    if (joints.drawFarLeg) parts.push(filledLimb(joints.far, s, FAR, "leg", face));
    if (joints.drawFarArm) parts.push(filledLimb(joints.far, s, FAR, "arm", face));
    parts.push(filledLimb(joints.near, s, LIMB, "leg", face));
    parts.push(filledTorso(joints, BODY));
    parts.push(filledLimb(joints.near, s, ARM, "arm", face));
  }
  return parts.join("");
}

function figure(spec) {
  const joints = solve(spec);
  const color = spec.color;
  const parts = [];
  if (spec.floor != null) {
    const limbs = [joints.near, joints.drawFarLeg === false ? null : joints.far, joints.left, joints.right].filter((limb) => limb && limb.ankle);
    const sole = Math.max(...limbs.map((limb) => Math.max(limb.ankle[1], limb.toe[1])));
    const floorY = spec.float ? Math.min(190, sole + spec.float) : Math.min(190, sole + 10);
    parts.push(floorLine(floorY));
    if (spec.float) parts.push(shadow((joints.hip[0]), floorY - 2));
  }
  if (spec.behind) parts.push(spec.behind(joints, color));
  parts.push(drawBody(joints));
  if (spec.front) parts.push(spec.front(joints, color));
  const labels = [];
  for (const mark of spec.marks || []) {
    const [a, b] = markSegment(joints, mark);
    const tone = mark.tone === "deep" ? shade(color) : color;
    parts.push(musclePatch(a, b, tone, joints.scale || 1));
    labels.push(labelSvg(mark, along(a, b, 0.5)));
  }
  return parts.join("") + labels.join("");
}
