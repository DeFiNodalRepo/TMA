import { baseUrl } from "./constants"

export async function getAllData(){
  const res = await fetch (`${baseUrl}/clickerUser`)
  return res.json()
}

export async function getVaults(){
  const res = await fetch(`${baseUrl}/upgradesForBuy`)
  return res.json()
}

export async function updateVaults({id}){
    const res = await fetch(`${baseUrl}/upgradesForBuy/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        "id": "support_team_post",
        "name": "Support team2 post",
        "price": 1024,
        "profitPerHour": 907,
        "condition": null,
        "section": "PR&Team",
        "level": 10,
        "currentProfitPerHour": 878,
        "profitPerHourDelta": 129,
        "isAvailable": true,
        "isExpired": false,
        "img": "src/assets/btc-eth-lp.png"
      },
    });
    console.log("mutate")
    return res.json()
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