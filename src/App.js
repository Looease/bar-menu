import React, {useState} from 'react';
import {Preview} from "./Preview/Preview";
import * as styles from "./App.module.scss";
import {Settings} from "./Settings/Settings";

export const App = () => {

  const [currentTitle, setTitle] = useState("My Cocktail bar");


  return (
    <main className={styles.main}>
        <h1>Bar Menu</h1>
        <Preview name={currentTitle}/>
        <Settings selectedTitle={currentTitle} setTitle={setTitle}/>
    </main>
  );
};
