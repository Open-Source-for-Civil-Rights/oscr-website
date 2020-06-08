export interface FixedObject {
  width: number;
  height: number;
  src: string;
  srcSet: string;
  base64?: string;
  tracedSVG?: string;
  srcWebp?: string;
  srcSetWebp?: string;
  media?: string;
}

export interface FluidObject {
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
  base64?: string;
  tracedSVG?: string;
  srcWebp?: string;
  srcSetWebp?: string;
  media?: string;
}

export interface Image {
  childImageSharp: {
    fluid: FluidObject;
  };
}
