export type Image = {
  asset: {
    id: string;
    url: string;
  };
  lqip?: string;
  crop?: {
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    height: number;
    width: number;
    x: number;
    y: number;
  };
};
