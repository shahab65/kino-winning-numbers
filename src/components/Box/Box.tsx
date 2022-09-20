import clsx from 'clsx'
import { getRandomArbitrary } from '../../lib'
import style from './Box.module.css'
import { IBoxProps } from './Box.types'

const Box = ({ onClick, isModal }: IBoxProps) => {
  return (
    <div
      className={clsx(style.box, isModal && style.isModal)}
      onClick={onClick}>
      <div className={style.top}>
        <p>
          <span>GAME</span>
          <span>541528</span>
        </p>
        <p>
          <span>DATE</span>
          <span>09/19/2022</span>
        </p>
      </div>
      <div className={style.numbers}>
        {Array.from(Array(20).keys()).map((number: number) => (
          <span key={number}>{getRandomArbitrary(0, 99)}</span>
        ))}
      </div>
    </div>
  )
}

export default Box
