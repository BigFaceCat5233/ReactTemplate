/*
 * @Author: he xiaojun
 * @Date: 2020-07-06 17:15:07
 * @LastEditTime: 2020-07-08 10:07:29
 * @FilePath: \tts\src\App.js
 */
import "./app.css";
import styles from "./app.scss";
import React from "react";
import samll_pic from "./assets/small.jpg";
import big_pic from "./assets/big.jpg";
import { hot } from "react-hot-loader/root";

function App() {
  return (
    <div className="text">
      hello world!!!
      <div className={styles.title}>
        hello sass-loader
        <img src={samll_pic} />
        <img src={big_pic} />
      </div>
    </div>
  );
}

export default hot(App);
