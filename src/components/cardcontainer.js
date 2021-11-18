import React,{useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './card.css'
import { AiFillStar } from 'react-icons/ai';

const Card=(props)=> {



    const [cardData,setCardData]=useState([
        {
            name:"Scot M",
            date:"June 18, 2021",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            name:"Scot M",
            date:"June 18, 2021",
            description:"More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            name:"Scot M",
            date:"June 18, 2021",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            name:"Scot M",
            date:"June 18, 2021",
            description:"Lorem Ipsum is simply dummy like Aldus PageMaker including versions of Lorem Ipsum.",
        },
    ])



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  

    return (
        <div className="bg-card-slider">
            <Carousel
    swipeable={true}
    draggable={true}
    showDots={true}
    responsive={responsive}
    ssr={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    transitionDuration={500}
    containerClass="carousel-container"
    deviceType={props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
>
    {cardData.map((data,index)=>{
        return(

            <div key={index} className="card-slider shadow">
                <div className="name-google">
      <h6 className="review-name">{data.name}</h6>
      <img className="google-img" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" />
      </div>
      <div className="rating">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
 </div>
 <p className="rating-date">{data.date}</p>
 <p className="rating-description">
 {data.description}
 </p>
  </div>

        )
    })}
  
</Carousel>
            
        </div>
    );
}

export default Card;