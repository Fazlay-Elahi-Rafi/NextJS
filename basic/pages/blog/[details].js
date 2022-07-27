// File ar nam [fileName] braket ar modde rakte hobe

import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((info) => {
    return {
      params: {
        // details means amar file name(jai file nemo oy file name deta hobe)
        details: info.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.details;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function Details({ data }) {
  return (
    <div key={data.id}>
      <h1 style={{ margin: "0 10px 0 0" }}>{data.id}</h1>
      <p style={{ cursor: "pointer" }}>{data.body}</p>
    </div>
  );
}
