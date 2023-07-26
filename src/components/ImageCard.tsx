import React from "react";

interface Product {
    id: number,
    href: string,
    imageSrc: string,
    imageAlt: string
}
  
interface ProductProps {
    product: Product
}

const ImageCard: React.FC<ProductProps> = ({ product }) => {
    return (
        <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-transparent lg:aspect-none lg:h-80">
                <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-contain lg:h-full lg:w-full"
                />
            </div>
        </div>
    )
}

export default ImageCard;
