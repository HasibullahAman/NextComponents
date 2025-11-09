import Link from "next/link";
import Products from "./Component/Products/Products";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Hello World...!</h1>
        <Link href="/Users">Users</Link>
        <Products />
      </main>
    </div>
  );
}
