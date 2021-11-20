import { useState } from "react";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import MainApplication from "./components/MainApplication/MainApplication";
import SubHeader from "./components/SubHeader/SubHeader";

function App() {

  const [userLogged, setUserLogged] = useState(false)

  return (
    <>

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

      {
        !userLogged ?
          <SubHeader

            color={'#D17262'}
            text={'Login to modify the DB'}

            additionalChildren={
              <Button
                text={'Login'}
                link={'./login'}
                color={'#fff'}
                hoverColor={'#ccc'}
              />
            }
          />
        : null
      }

      <MainApplication/>
    </>
  );
}

export default App;
