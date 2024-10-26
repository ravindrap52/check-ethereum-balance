export interface ImageProps {
  src: string;
  height: number;
  width: number;
  alt: string;
  cssClass?: string | string[];
}

export interface FormData {
  [key:string]: string;
}

export interface FormChildProps {
  onSendData: (data: FormData) => void;
}

export interface CurrencyMapping {
  [locale: string]: string;
}
