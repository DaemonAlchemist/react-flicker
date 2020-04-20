import * as React from 'react';
import { IJumpAroundBaseProps } from '../components/JumpAround/JumpAround.d';
export declare const useValueArray: (count: number) => [number[], React.Dispatch<React.SetStateAction<number[]>>];
export declare const range: (min: number, max: number) => number;
export declare const useJumpAround: (props: IJumpAroundBaseProps) => number[];
