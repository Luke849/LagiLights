export interface LightType {
    id: number;
    name: string;
    color: string;
    type: 'off'| 'on' | 'dim' | 'flicker' | 'blink'
  }