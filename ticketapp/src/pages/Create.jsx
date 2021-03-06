import { useState } from 'react';

export default function Create({ addData }){
 
      // Set all paramters to be inserted into the array using states..
      const [namee, setNamee] = useState();
      const [post, setPost] = useState();
      const [state, setState] = useState();
      const [datee, setDatee] = useState();
      const [mgtCost, setMgtCost] = useState();
      const [laborCost, setLaborCost] = useState();
      const [comment, setComment] = useState();
      const [status, setStatus] = useState("Pending");

    //handle inputs and pass into the array
    const handleSubmit= (e) => {
        addData([namee, post, state, datee, mgtCost, laborCost, comment, status])
        e.preventDefault();
      }

    return(
        <div className="create">
            <form className="details" onSubmit={e => { handleSubmit(e) }}>
               <label>Name</label><br/>
               <input id="namee" type="text" name='namee' value={namee} onChange={e => setNamee(e.target.value)} /><br/>
               <label>Post</label><br/>
               <input id="post" type="text" name='post' value={post} onChange={e => setPost(e.target.value)}/><br />
               <label>Date</label><br />
               <input type="text" name='datee' value={datee} placeholder="00/00/1993" onChange={(e)=> setDatee(e.target.value)} /> <br />
               <label>State</label><br/>
               <input id="state" type="text" name='state' value={state} onChange={e => setState(e.target.value)}/><br/>
               <label>Management cost</label><br/>
               <input type="text" name='mgtCost' onChange={e => setMgtCost(e.target.value)} /><br/>
               <label>Labor Cost</label><br/>
               <input type="text" name='laborCost' onChange={e => setLaborCost(e.target.value)} /><br/>
               <textarea id="comment" name='comment' rows="5" cols="40" onChange={e => setComment(e.target.value)} style={{width:"90%"}} ></textarea><br />
               <input type="submit" value="SUBMIT TICKET" className="btn"/>
            </form>
        </div>
    )
}
