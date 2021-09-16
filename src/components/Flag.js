import React, { useEffect, useRef } from 'react';
import { Layer, Line, Stage } from 'react-konva';
import randomColor from 'random-color';
import palettes from 'nice-color-palettes/1000';
import randomFlag from '../utils/random-flag';

const FLAG_WIDTH = 600;
const FLAG_HEIGHT = 400;

const randomFromArray = arr => arr[Math.floor(Math.random() * arr.length)];

const generateColors = len => {
	return randomFromArray([
		(len) => {
			const bucket = randomFromArray(palettes).slice();
			if (len === 5) {
				return bucket;
			}
			if (len < 5) {
				return Array(len).fill(null).map(() => {
					return bucket.splice(Math.floor(Math.random() * bucket.length), 1)[0];
				})
			}
			// What to do for bigger than 5?
		},
		(len) => Array(len).fill(null).map(() => randomColor(Math.random(), Math.random()).hexString())
	])(len);
}

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

const flagToShapes = (flag, colors) => flag.shapes.map((s, i) => {
	const color = getColor(colors, s.color);
	return (
		<Line
			key={i}
			points={s.points.map(([x,y]) => [x * FLAG_WIDTH, y * FLAG_HEIGHT]).flat()}
			closed
			fill={color}
			strokeWidth={2}
			stroke={color}>
		</Line>
	)
});

const Flag = ({ reRender }) => {
	const flag = useRef(randomFlag());
	const colors = useRef(generateColors(flag.current.colors));
	useEffect(() => {
		flag.current = randomFlag();
		colors.current = generateColors(flag.current.colors);
	}, [reRender])
	return (
		<Stage width={FLAG_WIDTH} height={FLAG_HEIGHT}>
			<Layer>
				{flagToShapes(flag.current, colors.current)}
			</Layer>
		</Stage>
	);
};

export default Flag;
