// Note: Page ar nam 404 rakte e hobe(No need to link this page)

import Link from "next/link";
import { useRouter } from "next/router";

function Error() {
  const router = useRouter();
  return (
    <>
      <h1>Error</h1>
      <Link href="/">GO BACK</Link>
      <br />
      <br />
      <br />
      {/* OnClick use kore onno page a jaowya */}
      <a onClick={() => router.push("/")}>GO BACK</a>
    </>
  );
}

export default Error;
