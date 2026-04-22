# 299note Landing Page

WVAC 2026 학회(2026-04-24)용 다국어 랜딩 페이지.

## 스택

- Next.js 15 (App Router) · TypeScript · Tailwind v3
- next-intl v4 — 5개 로케일 (ja / en / ko / de / es)
- Cloudflare Pages + `@cloudflare/next-on-pages`
- Cloudflare Web Analytics (Pages 자동 주입)

## 디렉토리

```
src/
  app/[locale]/       # layout · page · not-found
  app/globals.css
  components/
    sections/         # Header Hero Why Pillars B2B Roadmap Contact Footer
    ui/               # Logo Button Badge LanguageSwitcher ScrollReveal
  i18n/               # routing · request · navigation
  lib/utils.ts
  middleware.ts       # Accept-Language 기반 리다이렉트
messages/             # ja · en · ko · de · es JSON
public/               # og/ · favicon/ · screenshots/ · qr/ (유저 업로드 예정)
docs/                 # WVAC 피치·A4 시트·follow-up 템플릿
scripts/              # QR 코드 생성 스크립트
```

## 로컬 개발

```bash
npm install
npm run dev             # http://localhost:3000 (자동으로 /ja로 리다이렉트)
npm run typecheck
npm run build
npm run preview         # next-on-pages 빌드 + wrangler pages dev
```

## 배포

`main` 브랜치 push → GitHub Actions → Cloudflare Pages. 필요 시크릿:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

(또는 Cloudflare Pages Git 통합으로 대시보드 쪽 빌드. 이 경우 GH Actions `deploy-cloudflare` 잡을 비활성화.)

## WVAC 2026 자산 (docs/)

- `wvac-pitch-ja.md` / `wvac-pitch-en.md` — 30초·1분 피치 스크립트
- `wvac-a4-sheet.html` — 양면 A4 소개 시트 (앞 일본어·뒤 영어, 인쇄용)
- `followup-email-template.md` — 학회 후 24h 감사 메일 템플릿

### QR 코드 생성

```bash
npm run qr
# → public/qr/wvac2026.png (루트) · wvac2026-utm.png (UTM 태그) 생성
```

## 유저가 직접 준비할 자산

`public/` 하위에 다음 파일이 필요:

- `paws_pink.png` — 로고 심볼
- `favicon/favicon-16.png` `favicon-32.png` `apple-touch-icon.png`
- `og/og-ja.png` `og-en.png` (1200×630, 필수 2장)
- `screenshots/home@2x.png` `timeline@2x.png` `memorial@2x.png` `clinic@2x.png`

각 항목은 ClickUp Sprint 2 서브티켓 참조.

## 도메인

- `299note.com` (Cloudflare Registrar, 2026-04-22 구매)
- `www.299note.com` → apex 리다이렉트
