import * as React from 'react';
import { range } from 'ts-functional';
import { useJumpAround } from '../../util/util';
import { CommonProps } from "../../util/util.d";
import './Jitter.less';

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
    
    const [arr, setArr] = React.useState<number[]>(range(1, props.count || 1));
    React.useEffect(() => {
        setArr(range(1, props.count || 1));
    }, [props.count]);

    return <span style={{position: "relative"}}>
        {arr.map((_:any, index:number) => 
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
        )}
        <span style={{visibility: "hidden"}}>{props.children}</span>
    </span>;
}
