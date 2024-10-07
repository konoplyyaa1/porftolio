import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/pages/about">About</Link>
    </header>
  );
};

export default Navbar;
