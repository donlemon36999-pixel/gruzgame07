# Gruz Game 07 — Croco Tank Tap

Base App mini app for **donlemon36999-pixel** (Next.js + wagmi + Farcaster Mini App SDK).

## Config (hardcoded, no Vercel env)

| Item | Value |
|------|--------|
| Base App ID | `6a158bc4e2595c07fbb7fdeb` → `lib/appConfig.ts` + `<meta name="base:app_id">` |
| Contract (Base Mainnet) | [0x28C2A59D2E10640f5Aa4f1B469F8F76d53cC3A85](https://basescan.org/address/0x28C2A59D2E10640f5Aa4f1B469F8F76d53cC3A85) |
| Check-in price | `0.00001` ETH |
| Builder code | `bc_9p8ygfen` |
| Builder calldata suffix | `0x62635f397038796766656e0b0080218021802180218021802180218021` |

**Vercel:** no dashboard env required. Public URL from `VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL` via `lib/siteUrl.ts`.

Optional local URL: `.env.local` with `NEXT_PUBLIC_URL=http://localhost:3000`

## Onchain tx

`encodeFunctionData` → `withGruzGame07BuilderCodeDataSuffix()` → `sendTransaction` to `GRUZGAME07_CONTRACT_ADDRESS`.

## Run

```bash
npm install
npm run dev
```

## Deploy contract

`contracts/GruzGame07Onchain.sol` — Remix, Base Mainnet.
mnm
