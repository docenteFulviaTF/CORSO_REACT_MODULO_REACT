import Base from './giorno-1-fondamenta/JsxBase.jsx';
// import ComponentiBase from './giorno-1-fondamenta/ComponentiBase.jsx';
import {Header, Footer, Benvenuto} from './giorno-1-fondamenta/ComponentiBase.jsx';
import PropsBase from './giorno-1-fondamenta/PropsBase.jsx';
import {ComponentiComposizione, Card} from './giorno-1-fondamenta/ComponentiComposizione.jsx';
import UseStateBase from './giorno-2-hooks-rendering/UseStateBase.jsx';
import UseStateOggettiBase from './giorno-2-hooks-rendering/UseStateOggettiBase.jsx';
import UseStateOggettiVariante from './giorno-2-hooks-rendering/UseStateOggettiVariante.jsx';
import UseEffectBase from './giorno-2-hooks-rendering/UseEffectBase.jsx';
import UseEffectDipendenze from './giorno-2-hooks-rendering/UseEffectDipendenze.jsx';
import RenderingCondizionaleBase from './giorno-2-hooks-rendering/RenderingCondizionaleBase.jsx';
import RenderingCondizionaleVariante from './giorno-2-hooks-rendering/RenderingCondizionaleVariante.jsx';
import UseRefBase from './giorno-2-hooks-rendering/UseRefBase.jsx';
import UseRefVariante from './giorno-2-hooks-rendering/UseRefVariante.jsx';
import UseMemoCallbackBase from './giorno-2-hooks-rendering/UseMemoCallbackBase.jsx';
import ListaPreferiti from './giorno-2-hooks-rendering/esercizi/ListaPreferiti.jsx';
import GestionePreferiti from './giorno-2-hooks-rendering/esercizi/GestionePreferiti.jsx';
import UseStateEsercizio from './giorno-2-hooks-rendering/esercizi/UseStateEsercizio.jsx';
import UseStateOggettiEsercizio from './giorno-2-hooks-rendering/esercizi/UseStateOggettiEsercizio.jsx';
import UseRefEsercizio from './giorno-2-hooks-rendering/esercizi/UseRefEsercizio.jsx';
import RenderingListeEsercizio from './giorno-2-hooks-rendering/esercizi/RenderingListeEsercizio.jsx';
import UseMemoCallbackEsercizio from './giorno-2-hooks-rendering/esercizi/UseMemoCallbackEsercizio.jsx';
import UseEffectEsercizio from './giorno-2-hooks-rendering/esercizi/UseEffectEsercizio.jsx';

function App() {
  return (
    <>
      <Header />
      {/* <Card>
        <p>Quanto mi piace il bordo della card</p>
      </Card>
      <ComponentiComposizione /> */}
      {/* <UseStateBase /> */}
      {/* <UseStateOggettiBase /> */}
      {/* <UseStateOggettiVariante /> */}
      {/* <UseEffectBase /> */}
      {/* <UseEffectDipendenze /> */}
      {/* <RenderingCondizionaleBase /> */}
      {/* <RenderingCondizionaleVariante /> */}
      {/* <UseRefBase /> */}
      {/* <UseRefVariante /> */}
      {/* <UseMemoCallbackBase /> */}
      {/* <ListaPreferiti /> */}
      {/* <GestionePreferiti />*/}
      {/* <UseStateEsercizio /> */}
      {/* <UseStateOggettiEsercizio /> */}
      {/* <UseRefEsercizio /> */}
      {/* <RenderingListeEsercizio /> */}
      {/* <UseMemoCallbackEsercizio /> */}
      <UseEffectEsercizio />
      <Footer />
    </>
  );
}

export default App;
