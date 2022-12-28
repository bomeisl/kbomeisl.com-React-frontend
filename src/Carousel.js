import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Card from 'react-bootstrap/Card';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



function UncontrolledExample(props) {
const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };


    const listItems = props.images.map((pic) =>

    <Card className="bg-dark text-white" key = {pic.id}>
        <Card.Img src={pic.image} alt="Card image" />
        <Card.ImgOverlay>
        <Card.Title>{pic.header}</Card.Title>
        <Card.Text>
            {pic.sub}
        </Card.Text>
        </Card.ImgOverlay>
    </Card>
   
 
    
    );

    return (
      <Carousel responsive={responsive}
      swipeable={true}
  draggable={false}
  showDots={true}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={10000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  CustomRightArrow={<CustomRightArrow/>}
      >
        {listItems}
        
      </Carousel>
    );
  }
  
  export default UncontrolledExample;