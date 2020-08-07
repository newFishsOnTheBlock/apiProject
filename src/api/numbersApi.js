
export async function numbersApi(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.text();
  return data;
}
