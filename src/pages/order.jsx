import React from 'react';
import Sidebar from '../component/sidebar';
import '../styles/order.css';
function Order() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4 order-page" style={{ backgroundColor: '#f8f9fa' }}>
       <h1>orders</h1> 
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quos nostrum libero. Beatae voluptatibus nam voluptas deserunt nihil est aspernatur dolores ullam magnam qui facere, atque autem consequatur eligendi natus debitis. Nemo nobis eligendi assumenda adipisci accusantium eveniet corporis a tempore voluptatem veniam? Aut debitis odio accusamus at numquam vero quasi iste aspernatur aliquid nulla! Corrupti delectus illo, magnam dignissimos impedit ipsum dicta tenetur quas eos quaerat ratione animi culpa reprehenderit quam non rem atque aperiam quos. Accusantium amet, ducimus modi ipsam minus neque maxime? Et laborum quisquam in neque, amet itaque laudantium eaque officiis, impedit excepturi quibusdam animi vero!</p>
      </div>
    </div>
  );
}

export default Order