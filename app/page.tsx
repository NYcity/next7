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
    </div>
  )
}

export default Home
