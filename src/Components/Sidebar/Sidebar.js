import React from 'react';
import './styles.sass';

const Sidebar = ({ historyItems }) => {
   return (
      <div
         className='sidebar col-lg-2 bg-light border-right'
         id='sidebar-wrapper'>
         <div className='list-group list-group-flush'>
            {historyItems.map((item) => {
               return (
                  <span
                     key={item.id}
                     className='list-group-item list-group-item-action bg-light'>
                     {item.value}
                  </span>
               );
            })}
         </div>
      </div>
   );
};

export default Sidebar;
