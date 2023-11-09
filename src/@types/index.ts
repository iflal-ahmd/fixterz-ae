import {ReactElement} from "react";

export interface IProcess {
    title: string;
    icon: ReactElement;
    top: string;
}

export interface IService {
    title: string;
    description: string;
    src: Array<string>;
    remarks: string;
}

export interface CarouselData {
    images: Array<string>;
}
