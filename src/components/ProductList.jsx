import { useState } from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";

const ProductList = (props) => {
    const [selectedFilter, setSelectedFilter] = useState("");

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    const filteredProducts = props.products?.filter((product) =>
        product.filmSize.includes(selectedFilter)
    );

    return (
        <div>
            <div className="filter">
                <h2>Filter by Film Size:</h2>
                <select className="dropdown" value={selectedFilter} onChange={handleFilterChange}>
                    <option value="">All Film Sizes</option>
                    <option value="35mm">35mm</option>
                    <option value="120">120</option>
                    <option value="4x5">4x5</option>
                    <option value="600">600</option>
                </select>
            </div>
            <div className="product-list">
                {filteredProducts?.map((product) => (
                    <ProductItem key={product.id} oneProduct={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
