import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <h1>BANKING SOLUTIONS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Provident cupiditate suscipit, magnam libero velit esse
          sapiente officia inventore!
        </p>

        <div className="dots">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
