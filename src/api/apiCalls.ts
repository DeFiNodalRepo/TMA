import { baseUrl } from "./constants"



// export async function getAllData(){
//   const res = await fetch (`${baseUrl}/clickerUser`)
//   return res.json()
// }

export async function getAuth(initSessionData) {
  try {
      const res = await fetch(`${baseUrl}/authorise`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({initData: initSessionData, referredBy: "referal id"})
      });

      if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      return data;
  } catch (error) {
      console.error("Failed to fetch auth:", error);
      throw error; // Rethrow to handle in the calling function
  }
}

export async function getSyncData(apiToken, upgradeId='') {
  const res = await fetch(`${baseUrl}/upgrade`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiToken}`, 
    },
    body: JSON.stringify({ upgradeId: upgradeId }),
  });
  console.log("apitoken function", apiToken)
  return res.json();
}
  

export async function getConfData() {
  try {
      const res = await fetch(`${baseUrl}/conf`);

      if (!res.ok) {
        const message = await res.text();
          throw new Error(`HTTP error! status: ${res.status}: ${message}`);
      }

      const data = await res.json();
      return data;
  } catch (error) {
      console.error("Failed to fetch conf:", error);
      throw error; 
  }
}

export async function updateVaults({apiToken, id}){
    const res = await fetch(`${baseUrl}/upgrade`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`
      },
      body: {
        "upgrade": id,
      },
    });
    return res.json()
}

export async function getNews() {
  const news = await fetch(`${baseUrl}/news`)
  return news.json()
}

export async function getCryptoStats(){
  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-8tcHHQDJmPUDbFCScXJsXCh2'}
  };
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin%2C%20bitcoin%2C%20ethereum%2C%20solana', options)
  return res.json()
}
