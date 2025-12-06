import { Butt } from "./butt";

export type Cue = {
    id: string;
    type: string;
    ownerId: string;
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

export type EditableCue = {
    type?: string;
    maker?: string;
    model?: string;
    year?: string;
    jointType?: string;
    imperfections?: string;
    weight?: string;
    length?: string;
    price?: number;
    isVerified?: boolean;
    description?: string;
}