// Ay babe ame amar Page ar title set korlam

import React from "react";
import Head from "next/head";

export default function Title(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
    </>
  );
}
