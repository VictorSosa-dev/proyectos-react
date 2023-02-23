import { useState, useEffect } from 'react'

const CAT_FACTS_URL = 'https://catfact.ninja/fact'
const CAT_PREFIX_URL = 'https://cataas.com/'
//const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App() {
  const [fact, setFact] = useState()
  const [catImg, setCatImg] = useState()

  // para recuperar el fact
  useEffect(() => {
    fetch(CAT_FACTS_URL)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // para recuperar la imagen
  useEffect(() => {
    if (!fact) return
    const arrayWords = fact.split(' ')
    const lastWord = arrayWords.reverse()[0]
    console.log(lastWord)

    fetch(`https://cataas.com/cat/says/${lastWord}?size=50&color=red&json=true`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const { url } = data
        setCatImg(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {catImg && <img src={CAT_PREFIX_URL + catImg} alt="fac" />}
    </main>
  )
}
