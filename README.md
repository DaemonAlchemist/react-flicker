# React Flicker

> `react-flicker`:  When &lt;blink&gt; isn't annoying enough. :)

## Features

- Easy to use react components:
    - `Flicker`:  Causes elements to flicker in and out randomly.
    - `Jitter`:  Causes elements to move about randomly.
    - `JumpAround`:  Wrapper element that allows for custom renderers.
    - `Blink`:  The standard blink tag for old-times sake.
- Does not affect the flow of the flickering or jittering elements.  They remain in the flow of the document and don't cause other elements to jump around when their position or opacity changes.
- Composable - `Flicker`, `Jitter`, and `JumpAround` can be nested to combine effects for maximum annoyance.

## Installing

`npm install -save react-flicker`

## Basic Usage Example

```jsx

import { Flicker, Jitter, JumpAround } from 'react-flicker';

const FlickerColor = (props:ISubComponentProps) =>
  <span style={{color: `rgb(${props.values[0] * 255}, ${props.values[1] * 255}, ${props.values[2] * 255})`}}>
    {props.children}
  </span>;

export const MyComponent = (props) => <p>
    This is a <Flicker>Flicker</Flicker> example.
    This is a <Flicker>Jitter</Flicker> example.
    This is a <JumpAround count={3} Component={FlickerColor}>Custom Renderer</JumpAround> example.
    This is a combined <Jitter count={3}><Flicker>Flicker Jitter</Flicker></Jitter> example
</p>;

```

## More examples

`react-flicker` uses Storybook for a testing and example playground.  To view the examples, install `react-flicker` from source and run Storybook:

```bash
> mkdir react-flicker
> cd react-flicker
> git clone https://github.com/DaemonAlchemist/react-flicker.git .
> npm install
> npm run storybook
```

## API

### `Flicker` Component

Causes contained elements to randomly change their opacity over time.

- `limits?:[number, number]` - The range of opacities the element will remain between.  default: [0, 1]
- `smoothChange?:[number, number]` - Every tick, the element's opacity will change by a random amount between the smoothChange values.  default: [-0.5, 0.5]
- `jumpChange?:[number, number]` - Every time a jump is triggered, the element's opacity will change by a random amount between the jumpChange values.  default: [-1.0, 1.0]
- `jumpChangeFreq?:number` - The chance each tick that the element will trigger a jump.  default: 0.05
- `interval?:number` - The number of milliseconds between ticks.  default: 50

### `Jitter` Component

Causes contained elements to randomly vary their positions over time.  Multiline elements are not supported.

- `limits?:[number, number]` - The range of pixel offsets the element will remain between.  default: [-3, 3]
- `smoothChange?:[number, number]` - Every tick, the element's position will change by a random amount between the smoothChange values.  default: [-0.5, 0.5]
- `jumpChange?:[number, number]` - Every time a jump is triggered, the element's position will change by a random amount between the jumpChange values.  default: [-6.0, 6.0]
- `jumpChangeFreq?:number` - The chance each tick that the element will trigger a jump.  default: 0.1
- `interval?:number` - The number of milliseconds between ticks.  default: 50
- `count?:number` - The number of jittering element to create. default: 1

### `JumpAround` Component

This is the wrapper component that produces new random values each tick.  Pass in a `Component` custom renderer to use these values in your own components.

- `limits?:[number, number]` - The range of opacities the element will remain between.  default: [0, 1]
- `smoothChange?:[number, number]` - Every tick, the element's opacity will change by a random amount between the smoothChange values.  default: [-0.5, 0.5]
- `jumpChange?:[number, number]` - Every time a jump is triggered, the element's opacity will change by a random amount between the jumpChange values.  default: [-1.0, 1.0]
- `jumpChangeFreq?:number` - The chance each tick that the element will trigger a jump.  default: 0.05
- `interval?:number` - The number of milliseconds between ticks.  default: 50
- `count?:number` - The number of random values to produce.  default: 1
- `Component:(props:{values:number[], children:any})` - The component to render.  `values` is the list of random values produced each tick by the JumpAround wrapper.  The number of values your component uses needs to match the `count` prop passed into the JumpAround container.

### `Blink` Component

This is a standard blink tag with customization durations.

- `onDuration:number` - The number of microseconds the content will be visible.
- `offDuration:number` - The number of microseconds the content will be invisible.

### `useJumpAround: (props:IJumpAroundBaseProps) => number[]`

A React hook that provides randomly changing values to a component.

- `limits?:[number, number]` - The range of opacities the element will remain between.  default: [0, 1]
- `smoothChange?:[number, number]` - Every tick, the element's opacity will change by a random amount between the smoothChange values.  default: [-0.5, 0.5]
- `jumpChange?:[number, number]` - Every time a jump is triggered, the element's opacity will change by a random amount between the jumpChange values.  default: [-1.0, 1.0]
- `jumpChangeFreq?:number` - The chance each tick that the element will trigger a jump.  default: 0.05
- `interval?:number` - The number of milliseconds between ticks.  default: 50
- `count?:number` - The number of random values to produce.  default: 1
