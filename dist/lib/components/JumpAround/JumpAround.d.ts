import { CommonProps } from "../../util/util.d";

// What gets passed into the component from the parent as attributes
export declare interface IJumpAroundBaseProps {
    limits?:[number, number];
    smoothChange?:[number, number];
    jumpChange?:[number, number];
    jumpChangeFreq?:number;
    interval?:number;
    count?:number;
}

export declare interface IJumpAroundProps extends IJumpAroundBaseProps {
    Component:(props:{values:number[], children:any}) => JSX.Element;
    children:any;
}