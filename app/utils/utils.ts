export async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url, {cache: 'no-store'});
  const data: T = await response.json();
  return data;
}