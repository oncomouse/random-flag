import randomFromArray from './random-from-array';
import randomColor from 'random-color';
import niceColorPalettes from 'nice-color-palettes/1000';

// Given a number of colors, return an error of number hex strings (#ABCDEF).
// The function contains an array of palette generation techniques, from which
// it randomly chooses to generate the palette. This gives a bit more variety
// to the palettes used for each flag.
const generateColors = (numColors) => {
	return randomFromArray([
		// Use nice-color-palettes to generate our palette
		(numColors) => {
			const palette = randomFromArray(niceColorPalettes).slice();
			if (numColors === 5) {
				return palette;
			}
			// Generate our palette by iterating over the existing palette to provide
			// our colors. I think there's a way to fill an array with copies of
			// palette a number of times equal to palette % len and then add the rest
			// in a loop, but I'm not sure:
			let bucket = [];
			return Array(numColors).fill(null).map(() => {
				if (bucket.length === 0) {
					bucket = palette.slice();
				}
				return bucket.splice(Math.floor(Math.random() * bucket.length), 1)[0];
			})
		},
		// Use random-color to generate our palette:
		(numColors) => Array(numColors).fill(null).map(() => randomColor(Math.random(), Math.random()).hexString())
	])(numColors);
}
export default generateColors;
