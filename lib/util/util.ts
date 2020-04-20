import * as React from 'react';
import { IJumpAroundProps } from './util.d';
import * as useInterval from 'react-useinterval';

export const useValueArray = (count:number) => React.useState<number[]>(new Array(count).fill(1.0));

export const range = (min:number, max:number) => Math.random() * (max - min) + min;

export const useJumpAround = (props:IJumpAroundProps) => {
    const defaults = {
        limits: [0.0, 1.0],
        smoothChange: [-0.5, 0.5],
        jumpChange: [1.0, 1.0],
        jumpChangeFreq: 0.05,
        interval: 50,
        count: 1,
    };

    const {limits, smoothChange, jumpChange, jumpChangeFreq, interval, count} = {
        ...defaults,
        ...props,
    }

    const [curValues, setValues] = useValueArray(count);
    React.useEffect(() => {
        changeValues();
    }, [props.count]);

    const changeValues = () => {
        setValues(curValues.map((curOpacity:number) => {
            const shouldJump = Math.random() < jumpChangeFreq;
            const change = !shouldJump ? range(smoothChange[0], smoothChange[1]) : range(jumpChange[0], jumpChange[1]);
            const newOpacity = curOpacity + change;
            return Math.min(limits[1], Math.max(limits[0], newOpacity));
        }));
    }
    
    useInterval(changeValues, interval);

    return curValues;
}
