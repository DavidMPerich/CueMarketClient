export enum PointPattern {
    Four,
    Six,
    ThreeHighThreeLow,
    Eight,
    FourHighFourLow,
    Ten,
    Twelve,
    Other
}

export const PointPatternDisplay: Record<PointPattern, string> = {
    [PointPattern.Four]: "4-Point",
    [PointPattern.Six]: "6-Point",
    [PointPattern.ThreeHighThreeLow]: "3-High 3-Low",
    [PointPattern.Eight]: "8-Point",
    [PointPattern.FourHighFourLow]: "4-High 4-Low",
    [PointPattern.Ten]: "10-Point",
    [PointPattern.Twelve]: "12-Point",
    [PointPattern.Other]: "Other"
}