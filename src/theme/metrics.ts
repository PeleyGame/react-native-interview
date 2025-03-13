import {mvp} from '@utils/makeValueResponsive';

const metrics = {
  paddings: {
    screenHrPadding: mvp(16),
    standard: mvp(16),
  },
  radius: {
    standard: mvp(8),
    extra: mvp(10),
  },
  borders: {
    standard: mvp(2),
  },
};

export {metrics};
