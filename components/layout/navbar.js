const alink = "px-1";

export default function Navbar() {
  return (
    <>
      <nav>
        <a className={" " + alink} href="#">
          Home
        </a>{" "}
        |
        <a className={alink} href="#">
          About
        </a>{" "}
        |
        <a className={alink} href="#">
          Symptoms
        </a>{" "}
        |
      </nav>
    </>
  );
}
