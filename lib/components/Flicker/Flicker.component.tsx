import * as React from 'react';
import { useJumpAround } from '../../util/util';
import { CommonProps, ISubComponentProps } from "../../util/util.d";
import './Flicker.less';
import { JumpAround } from '../JumpAround/JumpAround.component';

export const Flicker = (props:CommonProps) => {
    const Component = (p:ISubComponentProps) => <span style={{opacity: p.values[0]}}>
        {p.children}
    </span>;

    return <JumpAround {...props} Component={Component}>
        {props.children}
    </JumpAround>
}
