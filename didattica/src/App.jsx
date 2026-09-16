import Base from './giorno-1-fondamenta/JsxBase.jsx';
// import ComponentiBase from './giorno-1-fondamenta/ComponentiBase.jsx';
import {Header, Footer, Benvenuto} from './giorno-1-fondamenta/ComponentiBase.jsx';
import EventiBase from './giorno-3-eventi-stato/EventiBase.jsx';
import EventiArgomenti from './giorno-3-eventi-stato/EventiArgomenti.jsx';
import FormControllatoBase from './giorno-3-eventi-stato/FormControllatoBase.jsx';
import FormControllatoValidazione from './giorno-3-eventi-stato/FormControllatoValidazione.jsx';
import LiftingStateBase from './giorno-3-eventi-stato/LiftingStateBase.jsx';
import LiftingStateTreLivelli from './giorno-3-eventi-stato/LiftingStateTreLivelli.jsx';
import ContextApiVsProps from './giorno-3-eventi-stato/ContextApiVsProps.jsx';
import EventiEsercizio from './giorno-3-eventi-stato/esercizi/EventiEsercizio.jsx';

function App() {
  return (
    <>
      <Header />
      {/* <EventiBase /> */}
      {/* <EventiArgomenti /> */}
      {/* <FormControllatoBase /> */}
      {/* <FormControllatoValidazione /> */}
      {/* <LiftingStateBase /> */}
      {/* <LiftingStateTreLivelli /> */}
      {/* <ContextApiVsProps /> */}
      <EventiEsercizio />
      <Footer />
    </>
  );
}

export default App;
