const ScrollBanner = ({ images, speed = 5000 }) => {
    return (
      <div className="banner-scroll-inner">
        <div className="banner-scroll-wrapper">
          <section className="banner-scroll-sections" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img className="banner-scroll-imgs" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section className="banner-scroll-sections" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img className="banner-scroll-imgs" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section className="banner-scroll-sections" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img className="banner-scroll-imgs" src={image} alt={id} />
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  export { ScrollBanner };
  