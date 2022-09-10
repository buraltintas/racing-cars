const RaceFlagIcon = (props) => {
  return (
    <svg
      className={props.class}
      xmlns='http://www.w3.org/2000/svg'
      width='192'
      height='192'
      fill='#fff'
      viewBox='0 0 256 256'
    >
      <rect width='256' height='256' fill='none'></rect>
      <line
        x1='40'
        y1='216'
        x2='40'
        y2='48'
        fill='none'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
      ></line>
      <path
        d='M40,168c64-48,112,48,176,0V48C152,96,104,0,40,48'
        fill='none'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
      ></path>
      <path
        d='M216,106.1c-64,48-112-48-176,0'
        fill='none'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
      ></path>
      <line
        x1='100'
        y1='37.4'
        x2='100'
        y2='157.4'
        fill='none'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
      ></line>
      <line
        x1='156'
        y1='58.6'
        x2='156'
        y2='178.6'
        fill='none'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
      ></line>
    </svg>
  );
};

export default RaceFlagIcon;
