import React, { useEffect, useRef } from 'react';
import { Layer, Line, Stage } from 'react-konva';
import randomColor from 'random-color';
import randomFlag from '../utils/random-flag';

const FLAG_WIDTH = 600;
const FLAG_HEIGHT = 400;

const generateColors = (len) => Array(len).fill(null).map(() => randomColor(Math.random(), Math.random()));
const getColor = (colors, color_index) => {
	if (color_index === -1) {
		return "#000000";
	} else if (color_index === 0) {
		return "#FFFFFF";
	}
	return colors[color_index - 1].hexString();
}

const flagToShapes = (flag, colors) => flag.shapes.map((s, i) => (
	<Line
		key={i}
		test={console.log(s.points.map(([x,y]) => [(x/100) * FLAG_WIDTH, (y/100) * FLAG_HEIGHT]).flat())}
		points={s.points.map(([x,y]) => [(x/100) * FLAG_WIDTH, (y/100) * FLAG_HEIGHT]).flat()}
		closed
		fill={getColor(colors, s.color)}
		strokeWidth={2}
		stroke={getColor(colors, s.color)}>
	</Line>
));

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
