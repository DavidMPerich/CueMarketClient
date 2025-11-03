import { RingDesign } from "../enums/ring-design";
import { Material } from "./material";

export type Ring = {
    id: string;
    ringDesign: RingDesign;
    material: Material;
    locations: string;
}