import { BASE_URL } from '@/const/api';
import axios from 'axios';
import useSWR from 'swr';

export const useHello = () => {
  const url = BASE_URL;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(url, fetcher);
  return { data, error };
};
