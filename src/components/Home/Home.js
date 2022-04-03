import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews,setReviews]= useReviews()
    const navigate = useNavigate()
 
    let ThreeReview=reviews.slice(0,3);
//    console.log(ThreeReview);
  return (
    <div className=''>
      <div className="container Home ">
        <div className="row g-5 background ">
          <div className="col-12 col-md-6 d-flex flex-column my-auto ">
            <h1 className='text-warning  my-3 fw-bolder'> Your smart watch</h1>
            <h1 className='text-success my-3 fw-bolder'>Let's buy it</h1>
            <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.{<br></br>} Numquam atque ipsa aperiam eos ducimus nisi qui expedita neque dicta? Quis!</p>
            <button className='w-25 fw-bolder fs-5 my-3 btn btn-outline-dark'> Live demo</button>
            
          </div>
          <div className="col-12 col-md-6 text-heigh">
            
            <img className='img-fluid ms-5' src='Watch/apple.png' alt="" />
           
          </div>
        </div>
        
      </div>
      <div className='container text-center  mb-5'>
            <h1 className='d-flex justify-content-center fw-bolder text-success mb-5'>Customer review</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                ThreeReview.map(review=><Review key={review.id}review={review}></Review>)
                  
                }
            </div>
            <button onClick={()=>navigate(`/reviews`)} className='btn btn-secondary fw-bold '>See all reviews</button>

        </div>
      
    </div>
  );
};

export default Home;
