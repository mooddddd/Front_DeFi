const colorChip = {
  yellow: {
    background: '#FFC107',
    color: '#FFFFFF',
    border: 'none',
  },
  blue: {
    background: '#0194FF',
    hover: '#D2EDFF',
    color: '#FFFFFF',
    border: 'none',
  },
  green: {
    background: '#94CA0D',
    hover: '#D4F57E',
    color: '#FFFFFF',
    border: 'none',
  },
  grey: {
    background: '#CACCD2',
    color: '#000000',
    border: 'none',
  },

  blueBox: {
    background: 'transparent',
    color: '#0194FF',
    border: 'solid 1px #0194FF',
  },

  // vote status
  exectued: {
    background: 'transparent',
    color: '#0194FF',
    border: 'solid 1px #0194FF',
  },
  progress: {
    background: 'transparent',
    color: '#F74343',
    border: 'solid 1px #F74343',
  },
  canceled: {
    background: 'transparent',
    color: '#767C83',
    border: 'solid 1px #767C83',
  },
};

const size = {
  mobile: '768px',
  desktop: '1000px',
};

export const theme = {
  ...colorChip,
  mobile: `(max-width:${size.mobile})`,
  destop: `(max-width:${size.desktop})`,
};
