export async function getAllData(){
  const res = await fetch ('http://localhost:3000/clickerUser')
  return res.json()
}

export async function getVaults(){
  const res = await fetch('http://localhost:3000/upgradesForBuy')
  return res.json()
}

export async function getDailyCombo(){
  const res = await fetch('http://localhost:3000/dailyCombo')
  return res.json()
}