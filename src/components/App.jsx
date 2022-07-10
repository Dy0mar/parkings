import {useEffect, useState, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {timeout} from "utils/utils";
import {authRoutes, publicRoutes} from 'routes/routes';

import {Loading} from "components/ui/loading/Loading";
import Layout from "components/layout/Layout";
import "./App.css";

import _map from "lodash/map";


export const App = () => {
  const [isAppLoaded, setIsAppLoaded] = useState(false)

  useEffect(() => {
    const load = async () => {
      // todo: some initial fata set here
      // fixme: remove timeout
      // await timeout(2000)
    }

    load().finally(() => setIsAppLoaded(true))
  }, [])

  if (!isAppLoaded) {
    return <Loading />
  }

  return (
    <Layout >
      <Suspense fallback={<Loading />}>
        <Routes>
          {_map(authRoutes, ({path, element, exact}) => <Route key={path} path={path} element={element} exact={exact} />)}
          {_map(publicRoutes, ({path, element, exact}) => <Route key={path} path={path} element={element} exact={exact} />)}
        </Routes>
      </Suspense>
    </Layout>
  );
}
