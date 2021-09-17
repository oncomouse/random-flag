import randomFromArray from './random-from-array';

// Given a color palette (colors) and an index (1-based), return the palette
// element at that place. Also, 0, -1, and -2 have special meanings, so 
// handle those, too.
const getColor = (colors, color_index) => {
	if (color_index === -1) {
		return '#000000';
	}
	if (color_index === 0) {
		return '#FFFFFF';
	}
	if (color_index === -2) {
		return randomFromArray(['#000000', '#FFFFFF']);
	}
	return colors[color_index - 1];
}
export default getColor;
