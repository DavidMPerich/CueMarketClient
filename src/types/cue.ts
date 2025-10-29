import { Butt } from "./butt";

export type Cue = {
    id: string;
    type: string;
    ownerUserName: string;
    maker: string;
    model: string;
    year: string;
    butt: Butt;
    jointType: string;
    imperfections: string;
    weight: string;
    length: string;
    price: number;
    isVerified: boolean;
    description: string;
}