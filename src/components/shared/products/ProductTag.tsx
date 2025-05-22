interface ProductTagProps {
    price: number;
    currency: string;
}
const ProductTag = ({ price, currency }: ProductTagProps) => {

    const priceAsStringWithFixedFloat = price.toFixed(2);

    const [primePrice, floatPrice] = priceAsStringWithFixedFloat.split(".")

    return (
        <div className="flex items-start text-blue-800">
            <span className="text-sm">{currency}</span>
            <span className="text-2xl">{primePrice}</span>
            <span className="text-xs">.{floatPrice}</span>
        </div>
    );
}

export default ProductTag;