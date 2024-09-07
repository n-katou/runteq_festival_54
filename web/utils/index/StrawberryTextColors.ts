export const getTextColor = (color: 'red' | 'pink' | 'white' | 'green') => {
  switch (color) {
    case 'red':
      return '#A8D8BA';
    case 'pink':
      return '#E6584F';
    case 'white':
      return '#FDC7D2';
    case 'green':
      return '#FEFBEA';
    default:
      return 'black';
  }
};

export const getHoverTextColor = (color: 'red' | 'pink' | 'white' | 'green') => {
  switch (color) {
    case 'red':
      return '#FDC7D2';
    case 'pink':
      return '#FEFBEA';
    case 'white':
      return '#A8D8BA';
    case 'green':
      return '#E6584F';
    default:
      return 'black';
  }
};