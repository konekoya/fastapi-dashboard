import { BASE_URL } from '@/const/api';
import axios from 'axios';
export const loginUrl = `${BASE_URL}/login`;

export const login = async (
  url: string,
  { arg }: { arg: { formData: FormData } }
) => {
  await axios.post(url, arg.formData);
};
