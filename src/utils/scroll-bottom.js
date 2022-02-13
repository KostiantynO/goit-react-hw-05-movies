import { Status } from 'utils';
const { RESOLVED } = Status;

export const scrollBottom = status => {
  if (status === RESOLVED) {
    window.scrollTo({
      top: document.body.scrollHeight > 900 ? 650 : 0,
      behavior: 'smooth',
    });
  }
};

export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const scrollBot = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
};
