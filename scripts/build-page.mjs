import fs from "fs";

const src = new URL("../../gruzgame04/app/page.tsx", import.meta.url);
const dst = new URL("../app/page.tsx", import.meta.url);

let c = fs.readFileSync(src, "utf8");

const reps = [
  ["gruzgame04", "gruzgame07"],
  ["GruzGame04", "GruzGame07"],
  ["GRUZGAME04", "GRUZGAME07"],
  ["Капитан", "Командир"],
  ["🏴‍☠️ PIRATE CANNON TAP", "🐊 CROCO TANK TAP"],
  ["Добыча", "Очки"],
  ["Пиратов с check-in", "Бойцов с check-in"],
  ["К пушке!", "К танку!"],
  ["ТАПАЙ ПУШКУ", "ТАПАЙ ТАНК"],
  ["выстрел", "удар"],
  ["пиратов", "бойцов"],
  ["pirateButton", "swampButton"],
  ["cannonButton", "tankButton"],
  ["cannonVisual", "tankVisual"],
  ["cannonMuzzleFlash", "tankHitFlash"],
  ["cannonBarrel", "tankHull"],
  ["cannonWheelLeft", "tankTrackLeft"],
  ["cannonWheelRight", "tankTrackRight"],
  ["cannonWheel", "tankTrack"],
  ["cannonCaption", "tankCaption"],
  ["oceanLayer", "swampLayer"],
  ["waveLayer", "reedsLayer"],
  ["deckLayer", "mudLayer"],
  ["railLayer", "bunkerLayer"],
  ["flagLayer", "crocSilhouette"],
  ["💥", "🐊"],
];

for (const [a, b] of reps) {
  c = c.split(a).join(b);
}

c = c.replace(
  "  withGruzGame07BuilderCodeDataSuffix,\n} from",
  "  isGruzGame07ContractConfigured,\n  getGruzGame07BuilderCodeDataSuffix,\n  withGruzGame07BuilderCodeDataSuffix,\n} from",
);

c = c.replace(
  "  const contractAddress = getGruzGame07ContractAddress();",
  "  const contractAddress = getGruzGame07ContractAddress();\n  const contractConfigured = isGruzGame07ContractConfigured();\n  const builderSuffixConfigured = Boolean(getGruzGame07BuilderCodeDataSuffix());",
);

c = c.replace(
  "  const handleSyncTaps = async () => {\n    if (!address || !isCorrectChain || pendingTaps <= 0) return;",
  `  const handleSyncTaps = async () => {
    if (!contractConfigured) {
      setError("Укажите NEXT_PUBLIC_GRUZGAME07_CONTRACT_ADDRESS в .env.local");
      return;
    }
    if (!address || !isCorrectChain || pendingTaps <= 0) return;`,
);

c = c.replace(
  "  const handleCheckin = async () => {\n    if (!address || !state?.canCheckinNow) return;",
  `  const handleCheckin = async () => {
    if (!contractConfigured) {
      setError("Укажите NEXT_PUBLIC_GRUZGAME07_CONTRACT_ADDRESS в .env.local");
      return;
    }
    if (!address || !state?.canCheckinNow) return;`,
);

const banner = `        {!contractConfigured && (
          <p className={styles.warning}>
            Контракт не задан. Добавьте NEXT_PUBLIC_GRUZGAME07_CONTRACT_ADDRESS (Vercel env или .env.local).
          </p>
        )}
        {contractConfigured && !builderSuffixConfigured && (
          <p className={styles.hint}>Builder suffix не задан — tx пойдут без ERC-8021 суффикса.</p>
        )}

`;

c = c.replace("{error && <p className={styles.error}>{error}</p>}", `${banner}{error && <p className={styles.error}>{error}</p>}`);

c = c.replace(
  "disabled={pendingTaps <= 0 || !isCorrectChain || isBusy}",
  "disabled={pendingTaps <= 0 || !isCorrectChain || isBusy || !contractConfigured}",
);

c = c.replace(
  "disabled={!state?.canCheckinNow || isBusy || !address || !isCorrectChain}",
  "disabled={!state?.canCheckinNow || isBusy || !address || !isCorrectChain || !contractConfigured}",
);

c = c.replace(
  `<div className={styles.tankHull} />`,
  `<div className={styles.tankHull}><span className={styles.crocOnTank}>🐊</span></div>`,
);

fs.writeFileSync(dst, c, "utf8");
console.log("page.tsx written");
