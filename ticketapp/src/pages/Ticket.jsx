import { useState } from 'react';

const Ticket = (props) =>{
      
  //To monitor ticket status..
      const [isstatus, setIsStatus] = useState("Pending");
      console.log(props.ticket)
      
    return(
        <div className={props.className}>
        <table className="tablee">
      <thead className="tableHead"> 
        <tr>
          <th>Date</th>
          <th>Created by</th>
          <th>Post code</th>
          <th>State</th>
          <th>Mangament cost</th>
          <th>Labor cost</th>
          <th>Total</th>
          <th>Comment</th>
          <th>Status</th>
        </tr>
        </thead> 
        <tbody className="tableBody">
        {props.ticket.map((data,index) => {
        return (
                <tr key={index}>
                <td>{data[3]}</td>
                <td>{data[0]}</td>
                <td>{data[1]}</td>
                <td>{data[2]}</td>
                <td>{data[4]}</td>
                <td>{data[5]}</td>
                <td>{parseInt(data[4]) + parseInt(data[5])}</td>
                <td>{data[6]}</td>
                <td>{isstatus}</td>
                <input type="submit" value="APPROVE" onClick={()=> setIsStatus("Approved")}/>
                </tr>
        
         ) })}
        </tbody>
       
    </table>
        </div>
    )
}

export default Ticket;