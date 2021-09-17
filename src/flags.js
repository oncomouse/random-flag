const flags = [
	{
		name: 'tri-band',
		colors: 3,
		dimensions: [3, 2],
		shapes: [
			{
				type: 'stripes',
				count: 3,
				direction: 'vertical',
			},
		],
	},
	{
		name: 'scandinavian',
		colors: 3,
		dimensions: [22,16],
		shapes: [
			{
				color: 3,
				points: [
					[0, 0],
					[1, 0],
					[1, 1],
					[0, 1],
				],
			},
			{
				color: 2,
				points: [
					[0, 0],
					[7/21, 0],
					[7/21, 7/15],
					[0, 7/15],
				],
			},
			{
				color: 2,
				points: [
					[0, 8/15],
					[7/21, 8/15],
					[7/21, 1],
					[0, 1],
				],
			},
			{
				color: 2,
				points: [
					[8/21, 0],
					[1, 0],
					[1, 7/15],
					[8/21, 7/15],
				],
			},
			{
				color: 2,
				points: [
					[8/21, 8/15],
					[1, 8/15],
					[1, 1],
					[8/21, 1],
				],
			},
			{
				color: 1,
				points: [
					[0, 0],
					[6/21, 0],
					[6/21, 6/15],
					[0, 6/15],
				],
			},
			{
				color: 1,
				points: [
					[0, 9/15],
					[6/21, 9/15],
					[6/21, 1],
					[0, 1],
				],
			},
			{
				color: 1,
				points: [
					[9/21, 0],
					[1, 0],
					[1, 6/15],
					[9/21, 6/15],
				],
			},
			{
				color: 1,
				points: [
					[9/21, 9/15],
					[1, 9/15],
					[1, 1],
					[9/21, 1],
				],
			}	
		]
	},
	{
		name: 'seychelles',
		colors: 4,
		dimensions: [2, 1],
		shapes: [
			{
				color: 1,
				points: [
					[0, 0],
					[1/3, 0],
					[0, 1],
				],
			},
			{
				color: 2,
				points: [
					[1/3, 0],
					[2/3, 0],
					[0, 1],
				],
			},
			{
				color: 3,
				points: [
					[2/3, 0],
					[1, 0],
					[1, 1/3],
					[0, 1],
				],
			},
			{
				color: -2,
				points: [
					[1, 1/3],
					[1, 2/3],
					[0, 1],
				],
			},
			{
				color: 4,
				points: [
					[1, 2/3],
					[1, 1],
					[0, 1],
				],
			},
		],
	},
	{
		name: 'simple',
		colors: 2,
		dimensions: [2, 1],
		shapes: [
			{
				type: 'stripes',
				count: 14,
				direction: 'horizontal',
			}
		]

	},
	{
		name: "swiss",
		colors: 2,
		dimensions: [1, 1],
		shapes: [
			{
				color: 1,
				points: [
					[0, 0],
					[0, 1],
					[1, 1],
					[1, 0],
				],
			},
			{
				color: 2,
				points: [
					[0, 0],
					[13/32, 0],
					[13/32, 13/32],
					[0, 13/32],
				],
			},
			{
				color: 2,
				points: [
					[13/32, 0],
					[19/32, 0],
					[19/32, 6/32],
					[13/32, 6/32],
				]
			},
			{
				color: 2,
				points: [
					[19/32, 0],
					[1, 0],
					[1, 13/32],
					[19/32, 13/32],
				]
			},
			{
				color: 2,
				points: [
					[0, 13/32],
					[6/32, 13/32],
					[6/32, 19/32],
					[0, 19/32],
				],
			},
			{
				color: 2,
				points: [
					[27/32, 13/32],
					[1, 13/32],
					[1, 19/32],
					[27/32, 19/32],
				],
			},
			{
				color: 2,
				points: [
					[0, 19/32],
					[13/32, 19/32],
					[13/32, 1],
					[0, 1],
				],
			},
			{
				color: 2,
				points: [
					[13/32, 27/32],
					[19/32, 27/32],
					[19/32, 1],
					[13/32, 1],
				],
			},
			{
				color: 2,
				points: [
					[19/32, 19/32],
					[1, 19/32],
					[1, 1],
					[19/32, 1],
				]
			},
		]
	},
	{
		name: 'cuba',
		colors: 3,
		dimensions: [2, 1],
		shapes: [
			{
				type: 'stripes',
				count: 5,
				direction: 'horizontal',
				colors: [1, 2],
			},
			{
				color: 3,
				points: [
					[0, 0],
					[Math.sqrt(3)/4, 0.5],
					[0, 1],
				],
			},
			{
				color: 2,
				type: 'star',
				points: 5,
				x: Math.sqrt(3)/12,
				y: 0.5,
				outerRadius: 3/20,
				innerRadius: 3/50,
			},
		],
	},
];

export default flags;
