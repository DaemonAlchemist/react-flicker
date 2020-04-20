import { Welcome } from '@storybook/react/demo';
import * as React from 'react';
import { Jitter } from '../lib/components/Jitter';
import { Flicker } from '../lib/components/Flicker';

export default {
  title: 'Jitter',
  component: Welcome,
};

export const Default = () => <>This is a <Jitter>Jitter Default</Jitter> example</>;
export const Multiple = () => <>This is a <Jitter count={2}>Jitter Multiple</Jitter> example</>;
export const Combined = () => <>This is a combined <Jitter count={3}><Flicker>Flicker Jitter</Flicker></Jitter> example</>;
export const Multiword = () => <><Jitter>This</Jitter> <Jitter>is</Jitter> <Jitter>a</Jitter> <Jitter>multi-word</Jitter> <Jitter>Jitter</Jitter> <Jitter>example.</Jitter></>;
