import { Welcome } from '@storybook/react/demo';
import * as React from 'react';
import { Jitter } from '../lib/components/Jitter';

export default {
  title: 'Jitter',
  component: Welcome,
};

export const Default = () => <>This is a <Jitter>Jitter Default</Jitter> example</>;
export const Multiple = () => <>This is a <Jitter count={2}>Jitter Multiple</Jitter> example</>;
