// js/api.js — lapisan data
const ALAMAT = 'https://jsonplaceholder.typicode.com/posts';

export async function muat() {
  const respons = await fetch(ALAMAT);
  console.log('status', respons.status, 'ok', respons.ok);
  console.log('content-type', respons.headers.get('content-type'));
  if (!respons.ok) {
    throw new Error('status ' + respons.status);
  }
  return respons.json();
}