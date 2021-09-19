import React, { useEffect, useRef } from 'react';
import { Circle, Layer, Line, Star, Stage } from 'react-konva';
import randomOrValue from '../utils/random-or-value';
import randomFlag from '../utils/random-flag';
import generateColors from '../utils/generate-colors';
import getColor from '../utils/get-color';

// Base size of a flag, in this case a height of 450:
const BASE = 450;

// Translates a flag template and a color palette into a flag image of with a
// width and a height provided. Process the "shapes" element of the flag object
// and convert each shape into the appropriate Konva shape. Supported shapes
// are 'star', 'stripes', and 'line' (default).
//
// See src/flags.js for more information on the flag template.
const flagToShapes = (flag, colors, width, height) => flag.shapes.map((s, i) => {
	const color = getColor(colors, s.color);
	const type = s.type || 'line';
	if (type === 'circle') {
		return (<Circle
			radius={s.radius * height}
			x={s.x * width}
			y={s.y * height}
			fill={color}
			strokeWidth={2}
			stroke={color}
		/>);
	}
	if (type === 'star') {
		const points = randomOrValue(s.points);
		const innerRadius = randomOrValue(s.innerRadius);
		const outerRadius = randomOrValue(s.outerRadius);
		return (<Star
			key={i}
			fill={color}
			strokeWidth={2}
			stroke={color}
			points={points}
			x={s.x * width}
			y={s.y * height}
			innerRadius={innerRadius * height}
			outerRadius={outerRadius * height}
		/>)
	}
	if (type === 'stripes') {
		const stripe_colors = s.hasOwnProperty('colors') ? s.colors : Array(colors.length).fill(null).map((_,i) => i + 1);
		let color_count = 0;
		const count = randomOrValue(s.count);
		const direction = randomOrValue(s.direction)
		return Array(count).fill(null).map((_, i) => {
			const color = getColor(colors, stripe_colors[color_count]);
			color_count = color_count + 1 === stripe_colors.length ? 0 : color_count + 1;
			return (<Line
				key={`stripe-${i}`}
				fill={color}
				stroke={color}
				strokeWidth={2}
				closed
				points={
					direction === 'vertical' ?
						[i * 1/count * width, 0 * height, i * 1/count * width, 1 * height, (i+1) * 1/count * width, 1 * height, (i+1) * 1/count * width, 0 * height] :
						[0 * width, i * 1/count * height, 1 * width, i * 1/count * height, 1 * width, (i+1) * 1/count * height, 0 * width, (i+1) * 1/count * height]
				}
			/>)
		})
	}
	if (type === 'line') {
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
	}
	return (<div/>);
}).flat();

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
