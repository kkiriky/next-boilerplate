const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

const media = {
  custom: customMediaQuery,
  md: customMediaQuery(768),
  lg: customMediaQuery(1280),
  xl: customMediaQuery(1440),
};

export default media;
