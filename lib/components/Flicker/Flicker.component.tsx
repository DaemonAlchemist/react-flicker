import * as React from 'react';
import { IFlickerComponentProps, IFlickerProps } from "./Flicker.d";
import './Flicker.less';
import * as useInterval from 'react-useinterval';

export const Flicker = (props:IFlickerProps) => {
    const {opacity, smoothChange, jumpChange, jumpChangeFreq, interval, Component, count} = {
        ...{
            opacity: [0.0, 1.0],
            smoothChange: [-0.5, 0.5],
            jumpChange: [1.0, 1.0],
            jumpChangeFreq: 0.05,
            interval: 50,
            count: 1,
            Component: (props:any) => <span style={{opacity: props.opacities[0]}}>
                {props.children}
            </span>
        },
        ...props
    }
    const [curOpacities, setOpacities] = React.useState<number[]>(new Array(count).fill(1.0));

    const range = (min:number, max:number) => Math.random() * (max - min) + min;

    const changeOpacity = () => {
        setOpacities(curOpacities.map((curOpacity:number) => {
            const shouldJump = Math.random() < jumpChangeFreq;
            const change = !shouldJump ? range(smoothChange[0], smoothChange[1]) : range(jumpChange[0], jumpChange[1]);
            const newOpacity = curOpacity + change;
            return Math.min(opacity[1], Math.max(opacity[0], newOpacity));
        }));
    }
    
    useInterval(changeOpacity, interval);

    return <Component opacities={curOpacities} children={props.children}/>;
}
