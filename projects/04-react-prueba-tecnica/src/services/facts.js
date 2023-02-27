const CAT_FACTS_URL = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
  return fetch(CAT_FACTS_URL)
    .then((response) => response.json())
    .then((data) => {
      const { fact } = data
      return fact
    })
}
