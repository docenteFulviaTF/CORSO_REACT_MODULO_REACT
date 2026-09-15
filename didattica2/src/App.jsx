import Base from './giorno-1-fondamenta/JsxBase.jsx';
// import ComponentiBase from './giorno-1-fondamenta/ComponentiBase.jsx';
import {Header, Footer, Benvenuto} from './giorno-1-fondamenta/ComponentiBase.jsx';
import PropsBase from './giorno-1-fondamenta/PropsBase.jsx';
import {ComponentiComposizione, Card} from './giorno-1-fondamenta/ComponentiComposizione.jsx';
import UseStateBase from './giorno-2-hooks-rendering/UseStateBase.jsx';

function App() {
  return (
    <>
      <Header />
      {/* <Card>
        <p>Quanto mi piace il bordo della card</p>
      </Card>
      <ComponentiComposizione /> */}
      <UseStateBase />
      <Footer />
    </>
  );
}

export default App;
