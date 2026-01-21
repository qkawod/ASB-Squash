# ASB 웹사이트 배포/SEO 오답노트 (Best Practices)

## 1. 메타데이터(Metadata) 관리의 정석 (`layout.tsx`)

- **시행착오**: `head.tsx`나 `pages/_document.tsx` 사용 시 Next.js 13+ App Router에서 중복/무시 문제 발생.
- **해결책**: `src/app/layout.tsx` 내 `export const metadata` 객체 하나로 통합 관리.
- **핵심 포인트**:
  - 네이버 소유권 확인: `verification: { other: { "naver-site-verification": "키값" } }`
  - OG(Open Graph) 및 설명(Description)을 한글로 정확히 기입.

## 2. Canonical URL과 metadataBase 설정 (필수)

- **시행착오**: 설정 누락 시 OG 이미지/URL이 `localhost`나 `*.vercel.app`으로 잡혀 네이버 봇이 수집 누락.
- **해결책**: Root Layout(`src/app/layout.tsx`) 최상단에 **실제 도메인** 명시.

    ```typescript
    export const metadata: Metadata = {
      metadataBase: new URL("https://www.asbkorea.co.kr"), // 실제 서비스 도메인
      // ...
    }
    ```

## 3. 사이트맵(`sitemap.ts`)과 `robots.ts`의 동적 생성

- **시행착오**: `public` 폴더에 수동 생성 시 업데이트 안 됨.
- **해결책**: Next.js 특수 파일 `src/app/sitemap.ts`, `src/app/robots.ts` 사용.
- **핵심 포인트**:
  - `sitemap.ts`: 모든 정적 페이지의 **절대 경로(Absolute URL)** 반환.
  - `robots.ts`: `sitemap: 'https://.../sitemap.xml'` 경로 필수 포함.

## 4. 키워드(Keywords) 전략

- **시행착오**: 키워드 부족 또는 무관한 키워드 사용 시 순위 하락.
- **해결책**: 핵심 키워드 10~15개 선정하여 `layout.tsx`에 등록.

## 5. 배포 및 등록 순서 (Timing)

- **시행착오**: 도메인 연결 전 네이버 등록 시, 도메인 변경 후 재등록 번거로움.
- **순서**:
    1. Vercel 배포 성공
    2. **Custom Domain 구입 및 연결 (DNS 설정)**
    3. 실제 도메인 접속 확인
    4. **그 후에 네이버 서치어드바이저/구글 서치 콘솔 등록 진행**
