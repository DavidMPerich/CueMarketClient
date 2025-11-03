export enum RingDesign {
    Single,
    Double,
    Triple,
    Veneer,
    Dash,
    Checker,
    Barbell,
    Dot
}

export const RingDesignDisplay: Record<RingDesign, string> = {
    [RingDesign.Single]: 'Single',
    [RingDesign.Double]: 'Double',
    [RingDesign.Triple]: 'Triple',
    [RingDesign.Veneer]: 'Veneer',
    [RingDesign.Dash]: 'Dash',
    [RingDesign.Checker]: 'Checker',
    [RingDesign.Barbell]: 'Barbell',
    [RingDesign.Dot]: 'Dot'
}