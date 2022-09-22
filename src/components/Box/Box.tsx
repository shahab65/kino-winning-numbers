import clsx from 'clsx';
import style from './Box.module.css';
import { IBoxProps } from './Box.types';
import { showDate } from '../../utils/tools';

const Box = ({ onClick, isModal, kino }: IBoxProps) => {
  return (
    <div
      className={clsx(style.box, isModal && style.isModal)}
      onClick={onClick}>
      <div className={style.top}>
        <p>
          <span>GAME</span>
          <span>{kino.gameNumber}</span>
        </p>
        <p>
          <span>DATE</span>
          <span>{showDate(kino.gameDate)}</span>
        </p>
      </div>
      <div className={style.numbers}>
        {kino.drawNumbers.map((drawNumber) => (
          <span key={drawNumber}>{drawNumber}</span>
        ))}
      </div>
    </div>
  );
};

export default Box;
