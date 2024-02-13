const Footer = () => {
  return (
    <footer>
      <div className="containerChild">
        <div className="offer">
          <h1>Subscribe to the Newsletter</h1>

          <p>Enter your email below to get our daily offers and news</p>

          <form action="">
            <label htmlFor="">
              <input type="email" placeholder="Enter your email" />
              <button className="btn__offer">Get Started</button>
            </label>
          </form>
        </div>
      </div>

      {/* <div className="big__container">
        <div className="containerChild">
          <div className="footer pt-20 ">
            <div className="lines">
              <div className="line">
                <h1>UI.desk</h1>

                <a href="#">
                  On formed merits hunted unable merely by mr whence or.
                </a>
              </div>

              <div className="line">
                <h2>Home</h2>
                <a href="#">Company</a>
                <a href="#">News</a>
                <a href="#">Team</a>
              </div>

              <div className="line">
                <h2>About</h2>
                <a href="#">History</a>
                <a href="#">Service</a>
                <a href="#">Pricing</a>
              </div>

              <div className="line">
                <h2>Partner</h2>
                <a href="#">Business</a>
                <a href="#">Plan</a>
                <a href="#">Marketing</a>
              </div>

              <div className="line">
                <h2>Contact</h2>
                <a href="#">Regodev</a>
                <a href="#">(33) 433 37 33</a>
                <a href="#">Uzbekistan , Tashkent</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
