import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews]= useReviews()
    return (
        <div className='container text-center'>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                reviews.map(review=><Review key={review.id}review={review}></Review>)
            }
        </div>
        </div>
    );
};

export default Reviews;