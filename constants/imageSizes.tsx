type sizeValue = {
  [key: string]: number;
};

type imageCategory = {
  [key: string]: sizeValue;
};

type sizeObject = {
  [key: string]: imageCategory;
};

const imageSizes: sizeObject = {
  PRODUCT: {
    square: {
      height: 500,
      width: 500,
    },
    landscape: {
      height: 375,
      width: 500,
    },
    portrait: {
      height: 888,
      width: 500,
    },
    thumb: {
      height: 150,
      width: 150,
    },
    hero: {
      height: 900,
      width: 1600,
    },
  },
};

export default imageSizes;
