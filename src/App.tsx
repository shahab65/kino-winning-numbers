import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import style from './App.module.css';
import Box from './components/Box';
import { useKinos } from './api/kino';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { data, isLoading, isError, error, isSuccess, refetch } = useKinos();
  console.log('data', data);
  return (
    <>
      <Container fluid className={style.root}>
        <h1 className={style.header}>KINO</h1>
        {isLoading && <Spinner animation="border" variant="primary" />}

        <div className={style.container}>
          {data?.map((kino) => (
            <Box key={kino.gameNumber} onClick={handleShow} kino={kino} />
          ))}
        </div>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName={style.modalDialog}>
        {/* <Box isModal /> */}
      </Modal>
    </>
  );
}

export default App;
