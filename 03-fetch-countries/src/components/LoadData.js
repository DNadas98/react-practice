async function fetchData() {
  const url = "https://restcountries.com/v3.1/all";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}\t${response.status} - ${response.statusText}`);
  }
  return response.json();
}

function handleLoading(elapsedTime, minTime, setLoading) {
  if (elapsedTime < minTime) {
    setTimeout(() => {
      setLoading(false);
    }, minTime - elapsedTime);
  } else {
    setLoading(false);
  }
}

async function LoadData(setCountriesArray, setLoading) {
  const startTime = new Date().getTime();
  try {
    const data = await fetchData();
    setCountriesArray(data);
  } catch (error) {
    console.error(`Failed to update data:\n${error}`);
  } finally {
    const elapsedTime = new Date().getTime() - startTime;
    handleLoading(elapsedTime, 300, setLoading);
  }
}

export default LoadData;
