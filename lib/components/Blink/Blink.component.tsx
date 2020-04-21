import * as React from 'react';
import {IBlinkProps} from "./Blink.d";

export const Blink = (props:IBlinkProps) => {
    const {onDuration, offDuration} = {
        ...{
            offDuration: 250,
            onDuration: 750,
        },
        ...props
    };

    const [isVisible, setIsVisible] = React.useState(true);

    const hide = () => {setTimeout(() => {setIsVisible(false); show();}, onDuration);}
    const show = () => {setTimeout(() => {setIsVisible(true); hide();}, offDuration);}
    React.useEffect(hide, []);

    return <span style={{visibility: !isVisible ? "hidden" : undefined}}>{props.children}</span>;
}
