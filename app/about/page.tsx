import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <h1>About</h1>
      <div>
        Back to <Link href="/">Home</Link>
        <Image
          src="/images/logo_round.png"
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>
    </>
  )
}
