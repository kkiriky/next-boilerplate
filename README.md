# Nextjs Boilerplate

---

1. eslint, prettier 설치 및 설정

```
pnpm add --save-dev \
      @typescript-eslint/parser \
      @typescript-eslint/eslint-plugin \
      eslint \
      typescript \
      prettier
```

=> .eslintrc.json, .prettierrc, .prettierignore 복사 및 붙여넣기

2. svg 컴포넌트 사용 시 svgr 설치 / next.config.js에 svgr관련 코드 추가

```
pnpm add @svgr/webpack --save-dev
```

=> next.config.js 복사 밑 붙여넣기

3. fonts 설정

---

### Tailwind CSS 설정

1. 설치 및 초기화
   => create-next-app 으로 생성 시 설치했으므로 prettier-plugin-tailwindcss만 설치

```
pnpm add -D prettier-plugin-tailwindcss
```

2. tailwind.config.ts 설정

=> tailwind.config.ts 복사 및 붙여넣기

---

### Css-in-js 설정 (styled-components or emotion)

=> Server component 사용 불가

1. 설치

- emotion

```
pnpm add @emotion/react @emotion/styled
```

- styled-components

```
pnpm add styled-components
```

2. reset, font, global 스타일 적용
   => reset.css, fonts.css, globals.css 복사 및 붙여넣기

3. 반응형일 경우 media.ts의 break-point 설정 및 ThemeProvider에 적용

```
<ThemeProvider theme={{ media }}>
   ...
</ThemeProvider>
```

---

### Sitemap

1. 설치 및 설정

```
pnpm add next-sitemap
```

> pnpm을 이용하여 build할 경우에는 .npmrc 설정 필요

```
//.npmrc
enable-pre-post-scripts=true
```

2. 설정 파일 생성
   => next-sitemap.config.js 참고

3. dynamic page

- pages 디렉토리
  => /src/pages/server-sitemap.xml/index.tsx
- app 디렉토리
  => /src/app/server-sitemap.xml/route.ts
