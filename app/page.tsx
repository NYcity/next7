import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Hello World! This is the Home page</p>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
      <p>
        <Link href="/products">products go</Link>
      </p>
      <ol>
        <li>
          <Link href="/product/123">Visit Product 123</Link>
        </li>
        <li>
          <Link href="/product/456">Visit Product 456</Link>
        </li>
        <li>
          <Link href="/product/789">Visit Product 789</Link>
        </li>
        <li>
          <Link href="/product/789/info/098">
            Visit Product 789 Info Page (two dynamic segments)
          </Link>
        </li>

        <li>
          <Link href="/">Visit Root Page</Link>
        </li>
      </ol>
    </div>
  )
}

export default Home
