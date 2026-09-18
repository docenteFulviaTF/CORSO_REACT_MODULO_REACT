import { useEffect } from 'react'

export default function useTitolo(titolo) {
  useEffect(() => {
    document.title = titolo
  }, [titolo])
}
