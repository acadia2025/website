/**
@author lp
@title  Canvas renderer
@desc   Rendering to a canvas element
*/

// A few extra fields are available when choosing the canvas renderer:
// The offset (from top, left) and the size of the canvas element.
export const settings = {
	renderer : 'canvas',
	// Settings available only
	// for the 'canvas' renderer
	canvasOffset : {
		x : 'auto',
		y : 20
	},
	canvasSize : {
		width : 600,
		height : 600
		
	},
	// Universal settings
	cols : 80,
	rows : 30,
	backgroundColor : 'MAGENTA',
	color : 'CYAN',
	fps: 60
}


const pattern = ' ACADIA  2025  MIAMI  '

const { sin, round, abs } = Math

export function main(coord, context, cursor, buffer) {
	const t = context.time * 0.0001
	const x = coord.x
	const y = coord.y
	const o = sin(y * x * sin(t) * 0.003 + y * 0.01 + t) * 20
	const i = round(abs(x + y + o)) % pattern.length
	return pattern[i]
}




