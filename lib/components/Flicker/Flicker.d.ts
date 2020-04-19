// What gets passed into the component from the parent as attributes
export declare interface IFlickerProps {
    opacity?:[number, number];
    smoothChange?:[number, number];
    jumpChange?:[number, number];
    jumpChangeFreq?:number;
    interval?:number;
    count?:number;
    Component?:(props:{opacities:number[], children:any}) => JSX.Element;
    children:any;
}

export interface IFlickerComponentProps {
    opacities:number[];
    children:any;
}