import './Navbar.css'

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="container">
                <div className="logo-header">
                    <a href="https://smarternutrition.com/" target="_blank" rel="noreferrer">
                        <img src="https://smarternutrition.com/cdn/shop/t/141/assets/sn-logo_vitaminD3.png?v=82482970762986973361705683368" alt="" />
                    </a>
                </div>

                <div className="menu-items">
                    <div className="nav-bar-item">
                        <a href="https://smarternutrition.com/collections/all">PRODUCT</a>
                    </div>

                    <div className="nav-bar-item">
                        <a href="https://smarternutrition.com/collections/all">BUNDLES</a>
                    </div>

                    <div className="nav-bar-item">
                        <a href="https://smarternutrition.com/collections/all">QUIZ</a>
                    </div>

                    <div className="nav-bar-item">
                        <a href="https://smarternutrition.com/collections/all">ABOUT US</a>
                    </div>

                    <div className="nav-bar-item">
                        <a href="https://smarternutrition.com/collections/all">FAQ</a>
                    </div>

                    <div className="nav-bar-item">
                        <a href="https://smarternutrition.com/collections/all">BLOG</a>
                    </div>


                </div>

                <div className="header-icons">
                    <div className="header-icon btn all-product-btn">
                        <button>
                            ALL PRODUCTS
                        </button>
                    </div>

                    <div className="header-icon">
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="presentation"><g id="search"><path d="M93.26,93.59l-23.94-24a38,38,0,1,0-3.16,2.5L90.44,96.41a2,2,0,0,0,2.82-2.82ZM10.15,41.06A34.07,34.07,0,1,1,44.21,75.13,34.1,34.1,0,0,1,10.15,41.06Z"></path></g></svg>
                        </a>
                    </div>

                    <div className="header-icon">
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="presentation"><g id="avatar"><path d="M97,50A47,47,0,1,0,17.28,83.74l0,0h0A46.93,46.93,0,0,0,82.39,84a2,2,0,0,0,.5-.47A46.88,46.88,0,0,0,97,50ZM50,7A43,43,0,0,1,81.88,78.82a35.54,35.54,0,0,0-22-18.17,20.28,20.28,0,1,0-19.8,0,35.52,35.52,0,0,0-22,18.18A42.59,42.59,0,0,1,7,50,43,43,0,0,1,50,7Zm0,52.25A16.28,16.28,0,1,1,66.28,43,16.29,16.29,0,0,1,50,59.25ZM21.12,81.84a31.73,31.73,0,0,1,57.76,0,42.93,42.93,0,0,1-57.76,0Z"></path></g></svg>
                        </a>
                    </div>
                    <div className="header-icon">
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="presentation"><g id="bag"><path d="M81.34,27.06a2,2,0,0,0-2-1.89H69V22A19,19,0,1,0,31,22v3.21H20.65a2,2,0,0,0-2,1.89L14.74,94.88a2,2,0,0,0,2,2.12H83.26a2,2,0,0,0,2-2.12ZM35,22A15,15,0,1,1,65,22v3.21H35ZM18.86,93l3.68-63.83H31V46.74a2,2,0,0,0,4,0V29.17H65V46.74a2,2,0,0,0,4,0V29.17h8.5L81.14,93Z"></path></g></svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
