import flags from '../flags.js';

const randomFlag = (name) => (typeof name === 'undefined') ? flags[Math.floor(Math.random() * flags.length)] : flags.filter(flag => flag.name === name)[0];

export default randomFlag;
