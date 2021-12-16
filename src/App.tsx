import {Suspense, useContext} from "react";
import {useRoutes} from "react-router-dom";
import {router} from './router'
import {LoaderContext} from "./context/LoaderContext";
import {Loading} from "./components/Loading/Loading";


function App() {
    let element = useRoutes(router);

    const {loading} = useContext(LoaderContext);

    return (
        <Suspense fallback={<Loading/>}>
            {loading && <Loading />}

            {element}
        </Suspense>
    );
}

export default App;
