import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {LoaderContextProvider} from "./context/LoaderContext";

ReactDOM.render(
    <BrowserRouter>
        <LoaderContextProvider>
            <App/>
        </LoaderContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
