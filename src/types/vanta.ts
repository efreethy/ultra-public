export type VantaEffect = {
  destroy?: () => void;
};

export interface VantaBaseOptions {
  el: Element;
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
}

export interface VantaCellsOptions extends VantaBaseOptions {
  scale?: number;
  size?: number;
  speed?: number;
  color1?: number;
  color2?: number;
}

export interface VantaTrunkOptions extends VantaBaseOptions {
  scale?: number;
  scaleMobile?: number;
  backgroundColor?: number;
  color?: number;
  spacing?: number;
  chaos?: number;
}

export interface VantaFogOptions extends VantaBaseOptions {
  highlightColor?: number;
  midtoneColor?: number;
  lowlightColor?: number;
  baseColor?: number;
  blurFactor?: number;
  speed?: number;
}

export interface VantaCloudsOptions extends VantaBaseOptions {
  scale?: number;
  backgroundColor?: number;
  skyColor?: number;
  lightColor?: number;
  texturePath?: string;
}

export interface VantaGlobal {
  CELLS?: (opts: VantaCellsOptions) => VantaEffect;
  TRUNK?: (opts: VantaTrunkOptions) => VantaEffect;
  FOG?: (opts: VantaFogOptions) => VantaEffect;
  CLOUDS2?: (opts: VantaCloudsOptions) => VantaEffect;
}

export interface WindowWithVanta extends Window {
  VANTA?: VantaGlobal;
  THREE?: typeof import("three");
}
