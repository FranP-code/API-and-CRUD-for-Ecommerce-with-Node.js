import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

function App() {
  return (
    <Header
      color={'rgb(123, 169, 255)'}
      text={'CRUD Place'}
      additionalChildren={
        <Button
          text={'Back to Store'}
          link={'http://www.google.com'}

          color={'#fff'}
          hoverColor={'#ccc'}
        />
      }
    />
  );
}

export default App;
