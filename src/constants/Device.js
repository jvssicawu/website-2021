const size = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
};

const Device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
};

export default Device;
