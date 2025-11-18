export interface IStepField {
  id: string;
  question: string;
  type: string;
  placeholder: string;
}

export interface IStepItem {
  id: number;
  title: string;
  description: string;
  info?: string;
  fields: IStepField[];
}

export type StepsArray = IStepItem[];
