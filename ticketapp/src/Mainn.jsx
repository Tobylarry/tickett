import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Left from './pages/Left';
import Ticket from './pages/Ticket';
import Create from './pages/Create';

export default function Mainn(props){
    const [data, setData] = useState([]); //Data to display

    //Function to get new input and push to the existing data
    const addData = (log) => {
      let logs = [...data, log];
      setData(logs);
    }

    return(
        <div className={props.className}>
           <div className="mainns">
          <Router>
              <div className="mains">
                  <Left className="left" />
              </div>
               <div>
               <Routes>
               <Route path="/create" element={<Create addData = {addData} />}/>
                <Route index element={<Ticket className="ticket" ticket={data} />} />
               </Routes>
               </div>
          </Router>
           </div>
        </div>
    )
}
