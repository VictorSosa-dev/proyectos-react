const CAT_FACTS_URL = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const response = await fetch(CAT_FACTS_URL)
  const data = await response.json()
  const { fact } = data
  return fact
}
