import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import style from './App.module.css'
import Box from './components/Box'
import { useVideoList } from './api/kino'

function App() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const { data, isLoading, isError, error, isSuccess, refetch } = useVideoList()
  console.log('data', data)
  return (
    <>
      <Container fluid className={style.root}>
        <h1 className={style.header}>KINO</h1>
        <div className={style.container}>
          {Array.from(Array(35).keys()).map((item: number) => (
            <Box key={item} onClick={handleShow} />
          ))}
        </div>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName={style.modalDialog}>
        <Box isModal />
      </Modal>
    </>
  )
}

export default App
