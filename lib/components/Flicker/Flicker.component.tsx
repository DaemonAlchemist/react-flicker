import * as React from 'react';
import { CommonProps, ISubComponentProps } from "../../util/util.types";
import { JumpAround } from '../JumpAround/JumpAround.component';

export const Flicker = (props:CommonProps) => {
    const Component = (p:ISubComponentProps) => <span style={{opacity: p.values[0]}}>
        {p.children}
    </span>;

    return <JumpAround {...props} Component={Component}>
        {props.children}
    </JumpAround>
}
