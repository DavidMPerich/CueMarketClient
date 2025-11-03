import { ButtSleeveInlayDesign } from "../enums/butt-sleeve-inlay-design";
import { PointPattern } from "../enums/point-pattern";
import { PointType } from "../enums/point-type";
import { Material } from "./material";
import { Ring } from "./ring";

export type Butt = {
    id: string;
    collarMaterial: Material;
    forearmMaterial: Material;
    pointType: PointType;
    pointPattern: PointPattern;
    pointMaterial: Material;
    veneers: string;
    wrapColor: string;
    wrapMaterial: Material;
    buttSleeveMaterial: Material;
    buttSleeveInlayDesign: ButtSleeveInlayDesign;
    buttSleeveInlayMaterial: Material;
    ring: Ring;
    buttCapMaterial: Material;
}