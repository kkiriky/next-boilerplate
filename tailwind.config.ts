import type { Config } from 'tailwindcss';
// import plugin from 'tailwindcss/plugin';

const px0_10 = {
  ...[...Array(11)].map((_, i) => `${i}px`),
} as unknown as Record<string, string>;
const px0_100 = {
  ...[...Array(101)].map((_, i) => `${i}px`),
} as unknown as Record<string, string>;
const px0_600 = {
  ...[...Array(601)].map((_, i) => `${i}px`),
} as unknown as Record<string, string>;

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'], // 폰트 설정
      },
      borderWidth: px0_10,
      borderRadius: px0_100,
      fontSize: px0_100,
      lineHeight: { ...px0_100, normal: 'normal' },
      minWidth: px0_600,
      maxWidth: px0_600,
      minHeight: px0_600,
      maxHeight: px0_600,
      spacing: px0_600,
      letterSpacing: { normal: 'normal' },

      colors: {},
    },
  },
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
  },
  plugins: [
    // plugin(({addVariant, addUtilities }) => {
    //   addUtilities({});
    // }),
  ],
};
export default config;
