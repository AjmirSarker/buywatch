import React from 'react';

const Review = (props) => {
    const{id,image,name,review,ratings}=props.review
    return (
        <div class="col mb-5">
        <div class="card border-dark h-100">
          <img src={image} class="card-img-top " alt="..."/>
          <div class="card-body">
            <h5 class="card-title fw-bold ">{name}</h5>
            <p class="card-text">{review}</p>
          </div>
          <div class="card-footer bg-dark">
            <small class="text-warning  fw-bold">Ratings : {ratings}</small>
          </div>
        </div>
      </div>
    );
};

export default Review;