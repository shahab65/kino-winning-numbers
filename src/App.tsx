import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import { useInView } from 'react-intersection-observer';
import style from './App.module.css';
import Box from './components/Box';
import { useKinos, Kino } from './api/kino';
import { useQuery, useInfiniteQuery } from 'react-query';
import axios from 'axios';
import config from 'config';

function App() {
  const { ref, inView } = useInView();

  const { data, isLoading, isError, error, isSuccess, refetch } =
    useInfiniteQuery<Kino[], string>('kinos', () =>
      axios.get(`${config.apiUrl}/payload`).then((res) => res.data)
    );
  console.log('data', data);
  const [selectedKino, setSelectedKino] = useState<Kino | null>(null);
  const onSetSelectedKino = (kino: Kino | null) => setSelectedKino(kino);
  useEffect(() => {
    if (inView) {
      alert('you are at botton');
    }
  }, [inView]);

  return (
    <>
      <Container fluid className={style.root}>
        <h1 className={style.header}>KINO</h1>
        {isLoading && <Spinner animation="border" variant="primary" />}

        <div className={style.container}>
          {data?.pages.map((page) =>
            page.map((kino) => (
              <Box
                key={kino.gameNumber}
                onSetSelectedKino={onSetSelectedKino}
                kino={kino}
              />
            ))
          )}
        </div>
        <div ref={ref} />
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
