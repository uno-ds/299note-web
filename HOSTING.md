# 299NOTE 랜딩 페이지 호스팅 가이드

> 이 LP는 별도 리포지토리로 이전 예정입니다.

## 호스팅 옵션 비교

| 서비스 | 비용 | SSL | 커스텀 도메인 | 비고 |
|--------|------|-----|-------------|------|
| **Cloudflare Pages** | 무료 | ✅ | ✅ | 이미 R2 사용 중, 인프라 통합 용이 |
| GitHub Pages | 무료 | ✅ | ✅ | 리포에서 바로 배포, 설정 간단 |
| Vercel | 무료 | ✅ | ✅ | Git push 자동 배포 |
| Netlify | 무료 | ✅ | ✅ | 폼/리다이렉트 기능 내장 |

**권장: Cloudflare Pages** — 이미 Cloudflare R2를 사용 중이므로 DNS/CDN 통합 관리 가능.

---

## 1. Cloudflare Pages (권장)

### 배포

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Pages** → **Create a project**
2. **Connect to Git** → LP 리포지토리 선택
3. 빌드 설정:
   - **Build command**: (비워둠 — 정적 파일)
   - **Build output directory**: `.` (루트) 또는 `index.html`이 있는 디렉토리
4. **Save and Deploy**

### 커스텀 도메인

1. Pages 프로젝트 → **Custom domains** → `299note.com` 추가
2. Cloudflare DNS에 CNAME 자동 생성됨
3. SSL 자동 적용

### 업데이트

Git push → 자동 배포 (프리뷰 URL 제공)

---

## 2. GitHub Pages

### 배포

1. LP 리포지토리 → **Settings** → **Pages**
2. Source: **Deploy from a branch** → `main` / `/ (root)` 선택
3. Save → `https://<username>.github.io/<repo-name>/` 에서 확인

### 커스텀 도메인

1. Settings → Pages → **Custom domain** → `299note.com` 입력
2. DNS에 레코드 추가:
   ```
   # A 레코드 (apex domain)
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153

   # 또는 CNAME (www)
   www  CNAME  <username>.github.io
   ```
3. **Enforce HTTPS** 체크

### 업데이트

`main` 브랜치에 push → 자동 배포

---

## 3. Vercel

### 배포

1. [vercel.com](https://vercel.com/) → **Add New Project** → Git 리포 연결
2. Framework Preset: **Other**
3. Build 설정:
   - **Build Command**: (비워둠)
   - **Output Directory**: `.`
4. **Deploy**

### 커스텀 도메인

1. Project → **Settings** → **Domains** → `299note.com` 추가
2. DNS에 레코드 추가:
   ```
   @    A      76.76.21.21
   www  CNAME  cname.vercel-dns.com
   ```

### 업데이트

Git push → 자동 배포 (프리뷰 URL 제공)

---

## 4. Netlify

### 배포

1. [netlify.com](https://www.netlify.com/) → **Add new site** → **Import an existing project**
2. Git 리포 연결
3. 빌드 설정:
   - **Build command**: (비워둠)
   - **Publish directory**: `.`
4. **Deploy site**

### 커스텀 도메인

1. Site → **Domain settings** → **Add custom domain** → `299note.com`
2. DNS에 레코드 추가:
   ```
   @    A      75.2.60.5
   www  CNAME  <site-name>.netlify.app
   ```
3. SSL 자동 발급 (Let's Encrypt)

### 업데이트

Git push → 자동 배포

---

## DNS 설정 (공통)

`299note.com` 도메인의 DNS 설정은 선택한 호스팅 서비스에 따라 위 가이드를 참고.

| 용도 | 레코드 | 값 |
|------|--------|-----|
| LP (루트) | A 또는 CNAME | 호스팅 서비스별 상이 |
| LP (www) | CNAME | 호스팅 서비스별 상이 |
| API (STG) | CNAME | `stg-api.299note.com` → 백엔드 서버 |
| API (PRD) | CNAME | `api.299note.com` → 백엔드 서버 |
