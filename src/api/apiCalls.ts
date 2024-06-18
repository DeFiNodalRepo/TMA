export async function getAllData(){
  const res = await fetch ('http://localhost:3000/clickerUser')
  return res.json()
}

export async function getVaults(){
  const res = await fetch('http://localhost:3000/upgradesForBuy')
  return res.json()
}

export async function updateVaults(){
  const res = await fetch(`http://localhost:3000/upgradesForBuy/${vaultId}`)
}

export async function getDailyCombo(){
  const res = await fetch('http://localhost:3000/dailyCombo')
  return res.json()
}

export async function getCryptoStats(){
  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-8tcHHQDJmPUDbFCScXJsXCh2'}
  };
  
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin%2C%20bitcoin%2C%20ethereum%2C%20solana', options)
  console.log("res")
  return res.json()
}