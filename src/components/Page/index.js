import React from 'react';

import styles from "./index.module.css";


function Page({topWhiteSpace, children}) {
  return (
    <div className={styles["page-box"]} style={{paddingTop:topWhiteSpace?"32px":"0"}}>
      {children}
    </div>
  );
}

export default Page;
