/*
* Definition of flag templates. Exports an array of flag templates
*
* Each flag template is an object that has:
* - name -- The name of the template, this can be anything and is included for
*   debugging.
* - colors -- Number of colors used in the image (can be a number or an arry of
*   numbers to pick from).
* - dimensions -- The ratio of width to height expressed as a two digit array.
* - shapes -- An array of shape objects (more on this below).
*
* Note on values that can be numbers or arrays: If an array is used instead of
* a value, a random number will be picked from the array, as if it were a deck
* of cards. Thus, the same value can be included multiple times. This lets 
* weighted choices be easily produced. For instance, [2,2,2,2,3] will mean 2
* has four chances of being chosen while 3 has only one.
*
* Each shape is an object with the following properties:
* - type -- Can be 'stripes', 'star', or 'line' (which is the assumed default).
* 
* Options vary by shape:
* - 'line' has the following keys:
*   - color -- the palette index (1-based) for the palette color to use (can
*     also be an array to pick from)
*   - points -- A two dimensional array of x,y coordinates to draw points at.
*     Lines are always closed, so three points will define a triangle, four a
*     square. Order matters!
* - 'stripes' has the following keys:
*   - count -- Number of stripes (can also be an array to pick from)
*   - direction -- 'vertical' or 'horizontal' (can also be an array to pick from)
*   - colors -- An array of color indices (1-based) indicating the colors from
*     the palette to use as colors of the stripes. Default is to use the whole
*     palette. If you wanted to make stripes using the first and second colors
*     of the palette, color could be set to `[1,2]`. The cuban template uses
*     this form.
* - 'star' has the following keys:
*   - color -- the palette index (1-based) for the palette color to use (can
*     also be an array to pick from)
*   - points -- The number of points on the star (can also be an array to pick from)
*   - x -- The x coordinate of the star's center
*   - y -- The y coordinate of the star's center
*   - outerRadius -- The radius of the star's points (can also be an array to pick from)
*   - innerRadius -- The radius of the star's narrowest point (can also be an array to pick from)
* - 'circle' has the following keys:
*   - color -- the palette index (1-based) for the palette color to use (can
*     also be an array to pick from)
*   - radius -- The radius of the circle (radius is a ratio of height)
*   - x -- The x coordinate of the circle's center
*   - y -- The y coordinate of the circle's center
*/
const flags = [
	{
		name: 'random-stripes',
		colors: 5,
		dimensions: [3, 2],
		shapes: [
			{
				type: 'stripes',
				count: [2,2,3,3,3,3,4,4,4,5,5,5,6,6,7],
				direction: ['horizontal', 'vertical'],
			}
		]
	},
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
		name: 'majapahit',
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
	{
		name: 'japan',
		colors: 2,
		dimensions: [3, 2],
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
				type: 'circle',
				color: 2,
				radius: 3/10,
				x: 0.5,
				y: 0.5,
			},
		],
	},
	{
		name: 'stripes-and-circles',
		colors: 3,
		dimensions: [3, 2],
		shapes: [
			{
				type: 'stripes',
				colors: [2, 3],
				direction: ['horizontal', 'vertical'],
				count: [1,1,2,2,2,3],
			},
			{
				type: 'circle',
				color: 1,
				radius: 3/10,
				x: 0.5,
				y: 0.5,
			},
		],
	},
];

export default flags;
