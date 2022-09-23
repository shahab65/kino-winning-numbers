import axios from 'axios';
import { useQuery } from 'react-query';
import config from 'config';

export type DateType = {
  d: string;
  m: string;
  year: string;
};

export type Kino = {
  gameNumber: string;
  gameDate: DateType;
  bonus: number;
  drawNumbers: string[];
};

export function useKinos() {
  return useQuery<Kino[], string>('kinos', () =>
    axios.get(`${config.apiUrl}/payload`).then((res) => res.data)
  );
}
