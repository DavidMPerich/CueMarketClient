import { Material } from "./material";
import { Ring } from "./ring";

export type Shaft = {
    id: string;
    maker: string;
    material: Material;
    tip: string;
    ferruleMaterial: Material;
    collarMaterial: Material;
    ring: Ring;
    cueId: string;
}