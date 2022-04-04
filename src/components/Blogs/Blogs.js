import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
        <div className="card border-0 shadow mb-3 my-5 " >
        <div className="row g-0">
         
          <div className="col-12">
            <div className="card-body ">
              <h2 className="card-title fw-bold">What is Semantic tags?</h2>
              <p className="card-text fs-4 ">Semantic HTML elements/tags are those that express their meaning in a way that is both human and machine understandable.So,I can say semantic elements is a element with a meaning.For example : "div,span" tags tells nothing about it's content.But "table,article,form" tags clearly defines the content.</p>
           </div>
          </div>
        </div>
      </div>
      <div className="card border-0 my-5 shadow mb-3 container" >
      <div className="row g-0">
       
        <div className="col-12">
          <div className="card-body ">
            <h2 className="card-title fw-bold">What is context API ?</h2>
            <p className="card-text fs-4 ">React context allows us to share data (state) across our components more easily.This is the alternative to prop drilling .The Context API can be used to share data with multiple components, without having to pass data through props manually. </p>
         </div>
        </div>
      </div>
    </div>
    </div>
    );
};

export default Blogs;