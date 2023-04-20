import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/products"}>Products</Link>
        </li>
        <li>
          <Link href={"/products/details"}>Product Details</Link>
        </li>
        <li>
          <Link href={"/layout"}>Layout</Link>
        </li>
      </ul>
    </div>
  );
}
