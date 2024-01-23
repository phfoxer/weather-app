"use client";
import React, { Fragment, useEffect } from "react";
import { SearchBar } from "./components/search-bar/search-bar";
import styles from "./page.module.scss";
import { Could } from "./components/cloud/could";
import { Sun } from "./components/sun/sun";
import { Rain } from "./components/rain/rain";
import { Farm } from "./components/farm/farm";

export default function Home() {
  return (
    <Fragment>
      <main className={styles.main}>
        <div className={styles.search_bar}>
          <SearchBar />
        </div>
      </main>
      <div className={styles.sky_elements}>
        <Rain />

        <Sun leftPosition={40} topPosition={1} />

        <Could leftPosition={2} topPosition={8} bolt={false} />
        <Could leftPosition={12} topPosition={8} bolt={true}  />

        <Could leftPosition={30} topPosition={8} bolt={true}  />
        <Could leftPosition={45} topPosition={5} bolt={true}  />

        <Could leftPosition={80} topPosition={7} bolt={true}  />
        <Could leftPosition={90} topPosition={8} bolt={true}  />
      </div>
      <Farm />
    </Fragment>
  );
}
