export default function RootPage({ params }: { params: { productId: number } }) {
    return (
        <div>
            <h1>Product page: {params.productId}</h1>
        </div>
    );
}

