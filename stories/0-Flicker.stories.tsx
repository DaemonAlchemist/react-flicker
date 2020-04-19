import { Welcome } from '@storybook/react/demo';
import * as React from 'react';
import { Flicker } from "../lib/components/Flicker";
import { IFlickerComponentProps } from '../lib/components/Flicker/Flicker';

export default {
  title: 'Flicker',
  component: Welcome,
};

const FlickerColor = (props:IFlickerComponentProps) =>
  <span style={{color: `rgb(${props.opacities[0] * 255}, ${props.opacities[1] * 255}, ${props.opacities[2] * 255})`}}>
    {props.children}
  </span>;



export const Default = () => <Flicker>Flicker Default</Flicker>;
export const Slow = () => <Flicker interval={500}>Flicker Slow</Flicker>;
export const HighOpacity = () => <Flicker opacity={[0.5, 1.0]}>High Opacity</Flicker>;
export const LowOpacity = () => <Flicker opacity={[0.0, 0.5]}>Low Opacity</Flicker>;
export const FadeOut = () => <Flicker smoothChange={[-0.05, -0.05]}>Fade Out</Flicker>;
export const FadeIn = () => <Flicker smoothChange={[0.05, 0.05]} jumpChange={[-1.0, -1.0]}>Fade In</Flicker>;
export const CustomRenderer = () => <Flicker count={3} Component={FlickerColor}>Custom Renderer</Flicker>;
