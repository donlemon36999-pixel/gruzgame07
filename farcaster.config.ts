import { getSiteUrl } from "./lib/siteUrl";

const ROOT_URL = getSiteUrl();

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const farcasterConfig = {
  accountAssociation: {
    header: "",
    payload: "",
    signature: "",
  },
  miniapp: {
    version: "1",
    name: "Croco Tank Tap",
    subtitle: "Swamp Tap Game",
    description:
      "Tap the tank with your crocodile crew, perform onchain check-ins every 2 minutes, and climb the swamp leaderboard on Base.",
    imageUrl: `${ROOT_URL}/hero.svg`,
    buttonTitle: "Tap the Tank",
    screenshotUrls: [`${ROOT_URL}/hero.svg`],
    iconUrl: `${ROOT_URL}/icon.svg`,
    splashImageUrl: `${ROOT_URL}/splash.svg`,
    splashBackgroundColor: "#1a3d24",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "games",
    tags: ["game", "tap", "crocodile", "tank", "leaderboard", "onchain", "base"],
    heroImageUrl: `${ROOT_URL}/hero.svg`,
    tagline: "Tap. Check in. Dominate the swamp.",
    ogTitle: "Croco Tank Tap",
    ogDescription: "Crocodile tank tap game for Base App.",
    ogImageUrl: `${ROOT_URL}/hero.svg`,
    castShareUrl: ROOT_URL,
  },
} as const;
