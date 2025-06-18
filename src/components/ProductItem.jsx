import './ProductItem.css';

const ProductItem = (props) => {
    return (
        <div className="product">
            <img src={props.oneProduct.image} alt={props.oneProduct.name} />
            <div className="product-text">
                <h2>{props.oneProduct.name}</h2>
                <p>Film Size: {props.oneProduct.filmSize}</p>
                <p>Price: ${props.oneProduct.price}</p>
                <p>{props.oneProduct.description}</p>
                <button>add to cart</button>
            </div>
        </div>
    );
};

export default ProductItem;
