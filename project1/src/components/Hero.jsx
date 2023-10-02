const Hero= () =>{
    return(
       <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVES THE BEST</h1>
            <p> YOUR FEET DESERVES THE BEST AND WE ARE HERE 
                TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVES THE BEST AND WE ARE HERE 
                TO HELP YOU WITH OUR SHOES. 
            </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Available On</p>
            </div>
            <div className="brand-icons">
                <img src="/Images/amazon.png" alt="Amazon"/>
                <img src="/Images/flipkart.png" alt="Flipkart"/>
            </div>
        </div>
        <div className="hero-image">
        <img src="/Images/shoe_image.png" alt="Amazon"/>
        </div>
       </main>
    );
};
export default Hero;