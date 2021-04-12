import { useState } from 'react';

import Header from '../../Components/Header';
import MainContent from '../../Components/MainContent';
import Sidebar from '../../Components/Sidebar';

const Main = () => {
   const [historyItems, setHistoryItems] = useState([]);
   const [type, setType] = useState('');

   const selectHandler = (e) => {
      const newSelectedOption = {
         value: e.target.textContent,
         id: Date.now(),
      };
      setType(e.target.textContent);
      console.log(type);
      setHistoryItems((prev) => [newSelectedOption, ...prev]);
   };

   return (
      <>
         <Header handleSelect={selectHandler} />
         <div className='d-flex'>
            <Sidebar historyItems={historyItems} />
            <MainContent type={type} />
         </div>
      </>
   );
};

export default Main;
