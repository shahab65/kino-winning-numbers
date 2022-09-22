import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import style from './App.module.css';
import Box from './components/Box';
import { useKinos, Kino } from './api/kino';

function App() {
  const { data, isLoading, isError, error, isSuccess, refetch } = useKinos();
  console.log('data', data);
  const [selectedKino, setSelectedKino] = useState<Kino | null>(null);
  const onSetSelectedKino = (kino: Kino | null) => setSelectedKino(kino);

  return (
    <>
      <Container fluid className={style.root}>
        <h1 className={style.header}>KINO</h1>
        {isLoading && <Spinner animation="border" variant="primary" />}

        <div className={style.container}>
          {data?.map((kino) => (
            <Box
              key={kino.gameNumber}
              onSetSelectedKino={onSetSelectedKino}
              kino={kino}
            />
          ))}
        </div>
      </Container>
      <Modal
        show={!!selectedKino}
        onHide={() => onSetSelectedKino(null)}
        centered
        dialogClassName={style.modalDialog}>
        {selectedKino && (
          <Box isModal kino={selectedKino} onSetSelectedKino={() => {}} />
        )}
      </Modal>
    </>
  );
}

export default App;
