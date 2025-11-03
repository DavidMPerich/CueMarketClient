import { Material } from "./material";
import { Ring } from "./ring";

export type Butt = {
    id: string;
    collarMaterial: Material;
    forearmMaterial: Material;
    pointType: string;
    pointPattern: string;
    pointMaterial: Material;
    veneers: string;
    wrapColor: string;
    wrapMaterial: Material;
    buttSleeveMaterial: Material;
    buttSleeveInlayDesign: string;
    buttSleeveInlayMaterial: Material;
    ring: Ring;
    buttCapMaterial: Material;
}