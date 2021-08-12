import * as Stitches from '@stitches/react'
import * as React from 'react'

const { css, config, styled } = Stitches.createStitches({
	utils: {
		/** util to do stuff */
		ml: (value: Stitches.PropertyValue<'margin'>) => ({ marginLeft: value }),
	},
	theme: {
		colors: {
			red100: '#ff0000',
		},
	},
	themeMap: { ...Stitches.defaultThemeMap },
})

type CSS = Stitches.CSS<typeof config>

// ---------------------------------------------------------------------------
// INSTRUCTIONS:
// Test cases are below.
// Make sure to only have one uncommented use case at once.
// Make sure to "Restart TS Server".
// Be patient, some errors only show up after 30+ seconds.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// USE CASE 1
// ---------------------------------------------------------------------------

const StyledStatus = Stitches.styled('span', {
	color: 'red',
	variants: {
		mySize: {
			myLarge: {},
		},
	},
})

export const Status: React.ForwardRefExoticComponent<React.ComponentProps<typeof StyledStatus>> = React.forwardRef(
	(props, forwardedRef) => {
		return <StyledStatus aria-hidden {...props} ref={forwardedRef} />
	}
)

export default function Home() {
	return <Status onClick={event => { }} />
}

// ---------------------------------------------------------------------------
// USE CASE 2
// Uncomment to test
// ---------------------------------------------------------------------------

// const shared: CSS = {
// 	color: '$red100'
// }

// const Text = styled('span', shared)