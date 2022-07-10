import React, {lazy, Suspense} from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import {setupStore} from "redux/store";
import ErrorBoundary from "ErrorBoundary";
import {Loading} from "components/ui/loading/Loading";


const App = lazy(() => import('components/App').then((m) => ({default: m.App})));


const AppContainer = () => {
  const store = setupStore()

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default AppContainer;
