import * as React from 'react';
import {IJumpAroundProps} from "./JumpAround.d";
import './JumpAround.less';
import { useJumpAround } from '../../util/util';

export const JumpAround = (props:IJumpAroundProps) => {
    const Component = props.Component; 

    const curValues = useJumpAround(props);

    return <Component values={curValues}>
        {props.children}
    </Component>;
}
