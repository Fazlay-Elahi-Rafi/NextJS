import Link from "next/link"; //link use korle amar page load hoibo na..sodo a tag use kore toila page reload hoibo
import style from "../styles/Home.module.css";
import { useState } from "react";
import Title from "./Title";

const index = () => {
  const [state, setState] = useState("check");
  console.log(state);

  return (
    <div>
      <Title title={"Main Page"} />

      <h1>md rafi</h1>
      <Link href="/home">
        <a className={style.btnT}>home page</a>
      </Link>
      <br />
      <br />
      <Link href="/about/about">
        <a className={`${style.btnT} ${style.btnTh}`}>about page</a>
        {/* multiple clsName use korte chile aybe use korte hobe */}
      </Link>
      <br />
      <br />
      <Link href="/about/about2">
        <a>about page 2</a>
      </Link>
      <br />
      <br />
      <Link href="/blog/blog">
        <a>blog</a>
      </Link>
    </div>
  );
};
export default index;
