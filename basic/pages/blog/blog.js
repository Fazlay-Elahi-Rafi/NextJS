import Link from "next/link";
import React from "react";

// api thake data get korar jono getStaticProps
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function Blog({ data }) {
  console.log(data);
  return (
    <>
      <div className="col-8">
        {data.slice(0, 4).map((info) => {
          return (
            <>
              <Link href={`/blog/${info.id}`}>
                <h1 style={{ cursor: "pointer" }}>
                  <span style={{ margin: "0 10px 0 0" }}>{info.id}</span>
                  {info.title}
                </h1>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
