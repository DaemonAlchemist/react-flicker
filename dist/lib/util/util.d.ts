import * as React from 'react';
import { IJumpAroundProps } from './util.d';
export declare const useValueArray: (count: number) => [number[], React.Dispatch<React.SetStateAction<number[]>>];
export declare const range: (min: number, max: number) => number;
export declare const useJumpAround: (props: IJumpAroundProps) => number[];
