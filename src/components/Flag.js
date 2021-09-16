import React, { useEffect, useRef } from 'react';
import { Layer, Line, Stage } from 'react-konva';
import randomColor from 'random-color';
import palettes from 'nice-color-palettes/1000';
import randomFlag from '../utils/random-flag';

const FLAG_WIDTH = 600;
const FLAG_HEIGHT = 400;

const randomFromArray = arr => arr[Math.floor(Math.random() * arr.length)];

const generateColors = [
	(len) => {
		const bucket = palettes[Math.floor(Math.random() * palettes.length)].slice();
		if (len === 5) {
			return bucket;
		}
		if (len < 5) {
			return Array(len).fill(null).map(() => {
				console.log(bucket)
				return bucket.splice(Math.floor(Math.random() * bucket.length), 1)[0];
			})
		}
		// What to do for bigger than 5?
	},
	(len) => Array(len).fill(null).map(() => randomColor(Math.random(), Math.random()).hexString())
]

const getColor = (colors, color_index) => {
	if (color_index === -1) {
		return "#000000";
	} else if (color_index === 0) {
		return "#FFFFFF";
	}
	return colors[color_index - 1];
}

const flagToShapes = (flag, colors) => flag.shapes.map((s, i) => (
	<Line
		key={i}
		points={s.points.map(([x,y]) => [(x/100) * FLAG_WIDTH, (y/100) * FLAG_HEIGHT]).flat()}
		closed
		fill={getColor(colors, s.color)}
		strokeWidth={2}
		stroke={getColor(colors, s.color)}>
	</Line>
));

const Flag = ({ reRender }) => {
	const flag = useRef(randomFlag());
	const colors = useRef(randomFromArray(generateColors)(flag.current.colors));
	useEffect(() => {
		flag.current = randomFlag();
		colors.current = randomFromArray(generateColors)(flag.current.colors);
	}, [reRender])
	console.log(colors);
	return (
		<Stage width={FLAG_WIDTH} height={FLAG_HEIGHT}>
			<Layer>
				{flagToShapes(flag.current, colors.current)}
			</Layer>
		</Stage>
	);
};

export default Flag;
