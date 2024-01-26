import { Fragment } from "react";
import { SearchBar } from "./app/components/search-bar/search-bar";
import { Rain } from "./app/components/rain/rain";
import Sun from "./app/components/sun/sun";
import { Could } from "./app/components/cloud/could";
import styles from "./App.module.scss";
import Info from "./app/components/info/info";

function App() {
  const marginTop = 5;

  return (
    <Fragment>
      <div className={styles.main}>
        <div className={styles.main_searchbar}>
          <SearchBar />
          <Info />
        </div>
      </div>

      <div className={styles.sky}>
        <Sun leftPosition={40} topPosition={0} />
        <Could leftPosition={0} topPosition={marginTop} bolt={false} />
        <Could leftPosition={8} topPosition={marginTop} bolt={true} />
        <Could leftPosition={30} topPosition={marginTop} bolt={true} />
        <Could leftPosition={45} topPosition={marginTop} bolt={true} />
        <Could leftPosition={80} topPosition={marginTop} bolt={true} />
        <Could leftPosition={90} topPosition={marginTop} bolt={true} />
        <Rain />
      </div>
    </Fragment>
  );
}

export default App;
