import {useEffect, useState} from "react";

import {timeout} from "utils/utils";
import {Loading} from "components/ui/loading/Loading";


export const Home = () => {
  const [isAppLoaded, setIsAppLoaded] = useState(false)

  useEffect(() => {
    const load = async () => {
      // todo: some initial data set here
      // fixme: remove timeout
      await timeout(2000)
    }

    load().finally(() => setIsAppLoaded(true))
  }, [])

  if (!isAppLoaded) {
    return <Loading />
  }

  return (
    <div>HomePage</div>
  );
}
