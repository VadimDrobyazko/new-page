import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import { MenuProvider } from './context/MenuContext.jsx';

function App() {
  return (
    <MenuProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </MenuProvider>
  );
}

export default App;
