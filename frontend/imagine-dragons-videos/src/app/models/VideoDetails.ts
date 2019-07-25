import {Recommendation} from './Recommendation';

export class VideoDetails {
  id: number;
  name: string;
  url: string;
  recommendations: Recommendation[];
}
