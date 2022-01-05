import { client, checkError } from './client';

export async function getDogs() {
  let request = await client.from('dogs').select('*');
  return checkError(request);
}

// export async function getDogById(id) {
//   let requset = await client.from('dogs').select;
// }
