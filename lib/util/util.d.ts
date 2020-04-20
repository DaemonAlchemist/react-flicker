export declare interface IJumpAroundProps {
    limits?:[number, number];
    smoothChange?:[number, number];
    jumpChange?:[number, number];
    jumpChangeFreq?:number;
    interval?:number;
    count?:number;
}

export declare interface ICommonProps extends IJumpAroundProps {
    Component?:(props:{values:number[], children:any}) => JSX.Element;
    children:any;
}

export declare interface ISubComponentProps {
    values:number[];
    children:any;
}