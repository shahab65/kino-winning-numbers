import axios from 'axios'
import { useQuery } from 'react-query'

export function useVideoList() {
  return useQuery<any, string>('videoList', () =>
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => res)
  )
}
