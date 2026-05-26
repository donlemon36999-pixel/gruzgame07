import fs from "fs";

const src = new URL("../../gruzgame04/app/page.module.css", import.meta.url);
const dst = new URL("../app/page.module.css", import.meta.url);

let c = fs.readFileSync(src, "utf8");

const reps = [
  ["#f4e4c1", "#d8f0c8"],
  ["oceanLayer", "swampLayer"],
  ["waveLayer", "reedsLayer"],
  ["deckLayer", "mudLayer"],
  ["railLayer", "bunkerLayer"],
  ["flagLayer", "crocSilhouette"],
  ["pirateButton", "swampButton"],
  ["cannonButton", "tankButton"],
  ["cannonVisual", "tankVisual"],
  ["cannonMuzzleFlash", "tankHitFlash"],
  ["cannonBarrel", "tankHull"],
  ["cannonWheelLeft", "tankTrackLeft"],
  ["cannonWheelRight", "tankTrackRight"],
  ["cannonWheel", "tankTrack"],
  ["cannonCaption", "tankCaption"],
];

for (const [a, b] of reps) {
  c = c.split(a).join(b);
}

c = c.replace(
  `.swampLayer {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 50% 120%, rgba(8, 42, 68, 0.9) 0%, transparent 55%),
    linear-gradient(180deg, #0b1f3a 0%, #123a5c 38%, #1a5f7a 68%, #0e3d52 100%);
  z-index: 0;
}`,
  `.swampLayer {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 20%, rgba(120, 200, 80, 0.25) 0%, transparent 45%),
    radial-gradient(ellipse at 70% 80%, rgba(20, 60, 30, 0.8) 0%, transparent 55%),
    linear-gradient(180deg, #1a3d24 0%, #2d5a34 35%, #1f4a2a 70%, #0f2818 100%);
  z-index: 0;
}`,
);

c = c.replace(
  `.reedsLayer {
  position: absolute;
  inset: auto 0 18% 0;
  height: 28%;
  background:
    repeating-linear-gradient(
      -8deg,
      rgba(26, 95, 122, 0.55) 0 18px,
      rgba(14, 61, 82, 0.45) 18px 36px
    );
  opacity: 0.85;
  z-index: 1;
}`,
  `.reedsLayer {
  position: absolute;
  inset: auto 0 22% 0;
  height: 30%;
  background:
    repeating-linear-gradient(
      90deg,
      transparent 0 12px,
      rgba(45, 90, 52, 0.5) 12px 16px,
      transparent 16px 28px
    );
  opacity: 0.75;
  z-index: 1;
}`,
);

c += `

.crocOnTank {
  position: absolute;
  left: 50%;
  top: 42%;
  transform: translate(-50%, -50%);
  font-size: 2.4rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  pointer-events: none;
}

.tankHull {
  position: relative;
}

.crocSilhouette {
  position: absolute;
  top: 10%;
  left: 6%;
  font-size: 3rem;
  opacity: 0.35;
  z-index: 3;
  content: "🐊";
}
`;

fs.writeFileSync(dst, c, "utf8");
console.log("page.module.css written");
