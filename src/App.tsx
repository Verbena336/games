import React, { Suspense } from 'react';

import Loading from './components/Loading';

const AppRoutes = React.lazy(() => import('./components/Routes'));

function App(): JSX.Element {
  return (
    <Suspense fallback={<Loading />}>
      <AppRoutes data-testid="routes" />
    </Suspense>
  );
}

export default App;
