export const makeUrl = (image = '', type, size = 'original') => {
  const requestSize = {
    poster: () => ({
      sm: 'w92',
      sl: 'w154',
      md: 'w185',
      lg: 'w342',
      xs: 'w500',
      xl: 'w780',
      original: 'original',
    }),
    bg: () => ({ sm: 'w300', md: 'w780', lg: 'w1280', original: 'original' }),
    profile: () => ({
      sm: 'w45',
      md: 'w185',
      lg: 'h632',
      original: 'original',
    }),
  }[type]()[size];

  return image && `https://image.tmdb.org/t/p/${requestSize}${image}`;
};
