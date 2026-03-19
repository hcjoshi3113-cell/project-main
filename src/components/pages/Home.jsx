import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item style={{ height: "95vh" }}>
        <video
          autoPlay
          muted
          loop
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        >
          <source src="https://www.pexels.com/download/video/33834285/"></source>
        </video>

        <Carousel.Caption>
          <h3 className="display-1">Beauty of Nature</h3>
          <p className="fs-5">
            Enjoy the peaceful beauty of nature and its calming scenery. 
            A perfect moment to relax and feel the freshness of the natural world..
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "95vh" }}>
        <Image
          src="https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg"
          alt="slide-2"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        ></Image>
        <Carousel.Caption>
          <h3 className="display-1">Natural Calmness</h3>
          <p className="fs-5 " >
            A relaxing glimpse of nature’s beauty, filled with peace, freshness, and natural charm.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "95vh" }}>
        <Image
          src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"
          alt="third-slide"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
        <Carousel.Caption>
          <h1 className="display-1">Relaxing Nature Vibes</h1>
          <p className="fs-5">
            Pure natural scenery that brings calmness, relaxation, and positive vibes.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "95vh" }}>
        <Image
          src="https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg"
          alt="slide-4"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        ></Image>
        <Carousel.Caption>
          <h3 className="display-1 ">Serenity in Nature</h3>
          <p className="fs-5 " >
            Beautiful nature moments that show the peaceful side of our world.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "95vh" }}>
        <Image
          src="https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg"
          alt="slide-5"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        ></Image>
        <Carousel.Caption>
          <h3 className="display-1">Fresh Nature Experience</h3>
          <p className="fs-5" >
            Experience the calm and refreshing view of nature. 
            A simple reminder of how beautiful our natural world is.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;