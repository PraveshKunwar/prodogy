import { NextPage } from "next";
import Link from "next/link";

const FourOhFour: NextPage = (): JSX.Element => {
  return (
    <div className="prodogy-404-app">
      That page could not be found.
      <br></br>
      <Link href="/">
        <a>Click here to go back.</a>
      </Link>
    </div>
  );
};

export default FourOhFour;
