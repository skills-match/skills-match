// intetface/IPlan.ts
export interface IPlan {
    id: string;
    title: string;
    subtitle: string;
    price: string;
    features: string[];
    buttonLabel: string;
    borderColor: string;
    highlight: boolean;
}