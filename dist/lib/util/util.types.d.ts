import {IJumpAroundProps} from "../components/JumpAround/JumpAround.d";

export declare type CommonProps = Omit<IJumpAroundProps, 'Component'>;

export declare interface ISubComponentProps {
    values:number[];
    children:any;
}
