import * as React from 'react';
import { useJumpAround } from '../../util/util';
import { ICommonProps, ISubComponentProps } from "../../util/util.d";
import './Flicker.less';

export const Flicker = (props:ICommonProps) => {
    const ComponentDefault = (p:ISubComponentProps) => <span style={{opacity: p.values[0]}}>
        {p.children}
    </span>;

    const Component = props.Component || ComponentDefault; 

    const curValues = useJumpAround(props);

    return <Component values={curValues} children={props.children}/>;
}
