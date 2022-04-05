import React from 'react';

const Blogs = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center flex-column'>
        <div className="card border-0 text-center shadow w-50 mb-3 my-5 " >
        <div className="row g-0">
         
          <div className="col-12">
            <div className="card-body ">
              <h2 className="card-title fw-bold">What is Semantic tags?</h2>
              <p className="card-text fs-4 ">Semantic HTML elements/tags are those that express their meaning in a way that is both human and machine understandable.So,I can say semantic elements is a element with a meaning.For example : "div,span" tags tells nothing about it's content.But "table,article,form" tags clearly defines the content.Because people understand what paragraphs are and how browsers must show them, this is both semantic and representational.</p>
           </div>
          </div>
        </div>
      </div>
      <div className="card mb-5 w-50 border-0 my-5 shadow mb-3 container" >
      <div className="row g-0">
       
        <div className="col-12">
          <div className="card-body ">
            <h2 className="card-title fw-bold">What is context API ?</h2>
            <p className="card-text fs-4 ">React context allows us to share data (state) across our components more easily.This is the alternative to prop drilling .
            Context api provide a way to share a data to the components without having a explicitly pass a prop through every level of the tree.The Context API can be used to share data with multiple components, without having to pass data through props manually. </p>
         </div>
        </div>
      </div>
    </div>
    </div>
    );
};

export default Blogs;