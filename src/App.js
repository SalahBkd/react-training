import './App.css';
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import {Provider} from "react-redux";
import IceCreamContainer from "./components/IceCreamContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
      <Provider store={store}>
        <div>
            {/*<CakeContainer />*/}
            {/*<IceCreamContainer />*/}
            <UserContainer />
        </div>
      </Provider>

  );
}

export default App;
