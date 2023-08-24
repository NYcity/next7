import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <h1>About</h1>
      <div>
        Back to <Link href="/">Home</Link>
        <img
          src="https://s.yimg.com/ny/api/res/1.2/yFEwmcMtNEpX3g4YUjUmWQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTQ2Nw--/https://media.zenfs.com/en/afp.com.sg/af7eb5fd049a6e5a7774f17350f510cf"

          alt="Picture of the author"
        />
      </div>
    </>
  )
}
