interface FactType {
  _id?: string;
  user?: string;
  animal: string;
  source: string;
  text: string;
  media?: string;
  wiki?: string;
  likes?: string[];
}

export default FactType;
