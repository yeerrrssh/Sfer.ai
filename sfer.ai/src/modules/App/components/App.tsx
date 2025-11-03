import { BrowserRouter } from 'react-router-dom';
import {Layout} from "./Layout";

export function App() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}
