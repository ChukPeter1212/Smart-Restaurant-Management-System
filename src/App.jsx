import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Orders from "./Pages/Orders";
import Reservation from "./Pages/Reservation";
import Admin from "./Pages/Admin";
import ChatBot from "./Components/ChatBot";

function App() {
  return (
    <div>
      <Home />
      <Menu />
      <Orders />
      <Reservation />
      <Admin />
      <ChatBot />
    </div>
  );
}

export default App;