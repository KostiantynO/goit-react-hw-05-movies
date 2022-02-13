import { lazy } from 'react';

export const chunk = (name, isComponent = false) => {
  return lazy(async () => ({
    default: (isComponent
      ? await import(`components/${name}`)
      : await import(`pages/${name}`))[name],
  }));
};
