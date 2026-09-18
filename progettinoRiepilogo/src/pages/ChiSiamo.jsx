import useTitolo from '../hooks/useTitolo'

export default function ChiSiamo() {
  useTitolo('Chi siamo - Mini Sito')

  return (
    <div style={{ padding: '20px' }}>
      <h1>Chi siamo</h1>
      <p>Siamo un piccolo progetto dimostrativo React.</p>
    </div>
  )
}
