import * as React from 'react';
import { useJumpAround } from '../../util/util';
import { CommonProps } from "../../util/util.types";

export const Jitter = (props:CommonProps) => {
    const curValues = useJumpAround({
        ...{
            limits: [-3, 3],
            jumpChange: [-6.0, 6.0],
            jumpChangeFreq: 0.1,
        },
        ...props,
        count: props.count ? props.count * 2 : 2,
    });
    
    let arr:number[] = [];
    for(let i:number = 0; i<(props.count ? props.count : 1); i++) {arr.push(0);}
    return <span style={{position: "relative", lineHeight: "1"}}>
        <>{arr.map((_:any, index:number) => 
            <span
                key={index}
                style={{
                    position: "absolute",
                    left: `${curValues[index * 2]}px`,
                    top: `${curValues[index * 2 + 1]}px`,
                    whiteSpace: "nowrap",
                }}
            >
                {props.children}
            </span>
        )}</>
        <span style={{visibility: "hidden"}}>{props.children}</span>
    </span>;
}
