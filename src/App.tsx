import Container from 'react-bootstrap/Container'
import style from './App.module.css'
import { useState } from 'react'

function App() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Container fluid className={style.root}>
      <h1 className={style.header}>KINO</h1>
      <div className={style.container}>
        {Array.from(Array(35).keys()).map((item: number) => (
          <div key={item} className={style.box}>
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
        ))}
      </div>
    </Container>
  )
}

export default App

function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}
