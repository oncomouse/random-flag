import React, { useEffect, useRef } from 'react';
import { Layer, Line, Star, Stage } from 'react-konva';
import randomColor from 'random-color';
import palettes from 'nice-color-palettes/1000';
import randomFlag from '../utils/random-flag';

const BASE = 450;

const randomFromArray = arr => arr[Math.floor(Math.random() * arr.length)];

const generateColors = (len) => {
	return randomFromArray([
		// Use nice-color-palettes to generate our palette
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
		// Use random-color to generate our palette:
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

const flagToShapes = (flag, colors, width, height) => flag.shapes.map((s, i) => {
	const color = getColor(colors, s.color);
	if (s.hasOwnProperty('shape')) {
		if (s.shape.type === 'star') {
			return (<Star
				key={i}
				fill={color}
				strokeWidth={2}
				stroke={color}
				points={s.shape.points}
				x={s.shape.x * width}
				y={s.shape.y * height}
				innerRadius={s.shape.innerRadius * height}
				outerRadius={s.shape.outerRadius * height}
			/>)
		}
	}
	return (
		<Line
			key={i}
			points={s.points.map(([x,y]) => [x * width, y * height]).flat()}
			closed
			fill={color}
			strokeWidth={2}
			stroke={color}
		/>
	)
});

const Flag = ({ reRender }) => {
	const flag = useRef(randomFlag());
	const colors = useRef(generateColors(flag.current.colors));
	useEffect(() => {
		flag.current = randomFlag();
		colors.current = generateColors(flag.current.colors);
	}, [reRender]);
	const flag_width = BASE * flag.current.dimensions[0] / flag.current.dimensions[1];
	const flag_height = BASE;
	return (
		<Stage width={flag_width} height={flag_height}>
			<Layer>
				{flagToShapes(flag.current, colors.current, flag_width, flag_height)}
			</Layer>
		</Stage>
	);
};

export default Flag;
