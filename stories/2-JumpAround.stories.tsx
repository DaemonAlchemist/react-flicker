import { Welcome } from '@storybook/react/demo';
import * as React from 'react';
import { JumpAround } from '../lib/components/JumpAround/JumpAround.component';
import { ISubComponentProps } from "../lib/util/util.d";

export default {
  title: 'JumpAround',
  component: Welcome,
};

const FlickerColor = (props:ISubComponentProps) =>
  <span style={{color: `rgb(${props.values[0] * 255}, ${props.values[1] * 255}, ${props.values[2] * 255})`}}>
    {props.children}
  </span>;

export const CustomRenderer = () => <>This is a <JumpAround count={3} Component={FlickerColor}>Custom Renderer</JumpAround> example</>;
