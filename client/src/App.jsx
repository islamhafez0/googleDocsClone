import TextEditor from "./shared/TextEditor";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={<Home />}
            // element={<Navigate to={`/documents/${uuidV4()}`} />}
          />
          <Route path="/documents/:id" element={<TextEditor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
