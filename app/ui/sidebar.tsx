import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="">
      <h1>My App</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Genres</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/trending">Trending</Link>
          </li>
          <li>
            <Link href="/favourite">Favourite</Link>
          </li>
        </ul>

        <div>
          <Link href="/login"></Link>
        </div>
      </nav>
    </div>
  );
}
