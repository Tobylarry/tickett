import { Outlet, Link } from "react-router-dom";

export default function Left(props){
    return(
        <div className={props.className}>
         <>
         <nav>
        <ul>
          <li>
            <Link to="/">Tickets</Link>
          </li>
          <li>
            <Link to="/create"> Create Ticket</Link>
          </li>
        </ul>
      </nav>

         <Outlet />
         </>
        </div>
    )
};