import { Kino } from '../../api/kino';
export interface IBoxProps {
  onClick?: () => void;
  isModal?: boolean;
  kino: Kino;
}
