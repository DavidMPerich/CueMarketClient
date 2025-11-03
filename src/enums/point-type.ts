export enum PointType {
    FullSplice,
    HalfSplice,
    Inlaid,
    Floating,
    Box,
    None,
    Other
}

export const PointTypeDisplay: Record<PointType, string> = {
    [PointType.FullSplice]: "Full Splice",
    [PointType.HalfSplice]: "Half Splice",
    [PointType.Inlaid]: "Inlaid",
    [PointType.Floating]: "Floating",
    [PointType.Box]: "Box",
    [PointType.None]: "None",
    [PointType.Other]: "Other"
}