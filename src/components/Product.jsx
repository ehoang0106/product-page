import './Product.css'

const Product = () => {
    return (
        <div className="Product">
            <div className="content-left">
                <div className="slider">
                    <ul className='slides'>
                        <li>
                            <img src="https://smarternutrition.com/cdn/shop/products/smarter-curcumin-banner-d.04.png?v=1644620182&width=1500" alt="curcumin" />
                        </li>
                        <li>
                            <img src="https://smarternutrition.com/cdn/shop/products/SN_Curcumin_D.04_SupFacts.jpg?v=1644620182&width=1500" alt="supplement facts" />
                        </li>
                    </ul>
                </div>

                <div className="main-slider">
                    <img src="https://smarternutrition.com/cdn/shop/products/smarter-curcumin-banner-d.04.png?v=1644620182&width=1500" alt="hi" />
                </div>
            </div>

            <div className="content-right">
                
            </div>
        </div>
    );
}

export default Product;