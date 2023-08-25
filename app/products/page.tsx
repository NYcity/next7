import Link from 'next/link'


export default function Products() {
    return (
        <>
            <h1>Product Detail</h1>
            <Link href="/products/1">물건1번</Link>
        </>
    );
}