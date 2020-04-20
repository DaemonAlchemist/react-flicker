import { Welcome } from '@storybook/react/demo';
import * as React from 'react';
import { Flicker } from "../lib/components/Flicker";
import { ISubComponentProps } from "../lib/util/util.d";

export default {
  title: 'Flicker',
  component: Welcome,
};

const FlickerColor = (props:ISubComponentProps) =>
  <span style={{color: `rgb(${props.values[0] * 255}, ${props.values[1] * 255}, ${props.values[2] * 255})`}}>
    {props.children}
  </span>;



export const Default = () => <>This is a <Flicker>Flicker Default</Flicker> example</>;
export const Slow = () => <>This is a <Flicker interval={500}>Flicker Slow</Flicker> example</>;
export const HighOpacity = () => <>This is a <Flicker limits={[0.5, 1.0]}>High Opacity</Flicker> example</>;
export const LowOpacity = () => <>This is a <Flicker limits={[0.0, 0.5]}>Low Opacity</Flicker> example</>;
export const FadeOut = () => <>This is a <Flicker smoothChange={[-0.05, -0.05]}>Fade Out</Flicker> example</>;
export const FadeIn = () => <>This is a <Flicker smoothChange={[0.05, 0.05]} jumpChange={[-1.0, -1.0]}>Fade In</Flicker> example</>;
export const CustomRenderer = () => <>This is a <Flicker count={3} Component={FlickerColor}>Custom Renderer</Flicker> example</>;
