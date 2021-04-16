import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour}) => {
  return(
    <section className='title'>
        <h2>our Tours</h2>
        <div className="underline"/>
        <div>
            {
                tours.map((tour) =>{
                    return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                })
            }
        </div>

    </section>
  );
};

export default Tours;
