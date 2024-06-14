export async function getAllData(){
  const res = await fetch ('http://localhost:5173/clickerUser')
  return res.json()
}

export async function getVaults(){
  const res = await fetch('http://localhost:5173/upgradesForBuy')
  return res.json()
}

export async function getDailyCombo(){
  const res = await fetch('http://localhost:5173/dailyCombo')
  return res.json()
}