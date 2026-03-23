# 299NOTE Landing Page

반려동물 건강관리 + SNS + 동물병원 연동 플랫폼 랜딩 페이지.

## 구조

```
index.html      # 단일 파일 정적 LP
HOSTING.md      # 호스팅 가이드
.github/
  workflows/
    deploy.yml  # CI/CD (검증 + Cloudflare Pages 배포)
```

## 배포

### 자동 배포 (GitHub Actions)
- `main` push 시 자동 검증 + Cloudflare Pages 배포
- PR 시 검증만 실행 (배포 안 함)

### 필요 GitHub Secrets
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

### 수동 배포
HOSTING.md 참조.

## 도메인
- 299note.com → Cloudflare Pages
