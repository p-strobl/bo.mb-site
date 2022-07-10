import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer>
        Made with{" "}
        <Image src="/netliheart.svg" alt="Netlify Logo" className="logo" /> for
        you
      </footer>
    </>
  );
}
