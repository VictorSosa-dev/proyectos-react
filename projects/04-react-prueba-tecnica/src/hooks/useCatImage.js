import { useState, useEffect } from 'react'

const CAT_PREFIX_URL = 'https://cataas.com/'
//const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function useCatImage({ fact }) {
  const [catImg, setCatImg] = useState()

  // para recuperar la imagen
  useEffect(() => {
    if (!fact) return
    const arrayWords = fact.split(' ')
    const lastWord = arrayWords.reverse()[0]
    //console.log(lastWord)

    fetch(`https://cataas.com/cat/says/${lastWord}?size=50&color=red&json=true`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data)
        const { url } = data
        setCatImg(url)
      })
  }, [fact])

  return { catImg: `${CAT_PREFIX_URL}${catImg}` }
}
