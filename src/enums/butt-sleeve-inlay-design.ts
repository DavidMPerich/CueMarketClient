export enum ButtSleeveInlayDesign {
    Window,
    Diamond,
    Box,
    Propeller,
    Clover,
    Gambler,
    ReversePoint
}

export const ButtSleeveInlayDesignDisplay: Record<ButtSleeveInlayDesign, string> = {
    [ButtSleeveInlayDesign.Window]: "Window",
    [ButtSleeveInlayDesign.Diamond]: "Diamond",
    [ButtSleeveInlayDesign.Box]: "Box",
    [ButtSleeveInlayDesign.Propeller]: "Propeller",
    [ButtSleeveInlayDesign.Clover]: "Clover",
    [ButtSleeveInlayDesign.Gambler]: "Gambler",
    [ButtSleeveInlayDesign.ReversePoint]: "Reverse Point"
}