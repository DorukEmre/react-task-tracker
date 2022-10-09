import Header from "./components/Header";
import PassProp from "./components/PassProp";
import Destruct from "./components/Destruct";

function App() {
  return (
    <div className="App">
      <Header/>
      <PassProp title="title is passed as a prop"/>
      <Destruct/>
      <p>Test 1</p>
      <p>Test {1 + 1}</p>
    </div>
  );
}

export default App;
