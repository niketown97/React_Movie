import {
    BrowserRouter as Router, Switch, Route, Routes
} from "react-router-dom";
import Home from "./routes/home";
import Detail from "./routes/detail";
function App3() {
        return( 
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<Detail />} />
                </Routes>
            </Router>
        )
    }
export default App3;