import flags from '../flags.js';

const randomFlag = () => flags[Math.floor(Math.random() * flags.length)];

export default randomFlag;
