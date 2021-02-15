const pxSpaces = [0, 4, 8, 16, 24, 32, 40];
const emSpaces = [
  '0.0625em', // 1/16
  '0.125em', // 1/8
  '0.25em', // 1/4
  '0.375em', // 3/8
  '0.5em', // 1/2
  '0.75em', // 3/4
];

let spaces = {};

spaces['space0'] = pxSpaces[0]; //0px
spaces['space1'] = pxSpaces[1]; //4px
spaces['space2'] = pxSpaces[2]; //8px
spaces['space3'] = pxSpaces[3]; //16px
spaces['space4'] = pxSpaces[4]; //24px
spaces['space5'] = pxSpaces[5]; //32px
spaces['space6'] = pxSpaces[6]; //40px
spaces['space'] = pxSpaces[2]; // default 8px

spaces['emSpace1'] = emSpaces[0]; // 0.0625em
spaces['emSpace2'] = emSpaces[1]; // 0.125em
spaces['emSpace3'] = emSpaces[2]; // 0.25em
spaces['emSpace4'] = emSpaces[3]; // 0.375em
spaces['emSpace5'] = emSpaces[4]; // 0.5em
spaces['emSpace6'] = emSpaces[5]; // 0.75em

export default spaces;
