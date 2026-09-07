import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Khobor } from "./pages/Khobor";
import { Hotline } from "./pages/Hotline";
import { Seba } from "./pages/Seba";
import { Itihash } from "./pages/Itihash";
import { Event } from "./pages/Event";
import { JomaDin } from "./pages/JomaDin";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/khobor" element={<Khobor />} />
          <Route path="/hotline" element={<Hotline />} />
          <Route path="/seba" element={<Seba />} />
          <Route path="/itihash" element={<Itihash />} />
          <Route path="/event" element={<Event />} />
          <Route path="/joma-din" element={<JomaDin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
