export async function numbersApi() {
  const response = await fetch("http://numbersapi.com/31");
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.text();
  return data;
}
