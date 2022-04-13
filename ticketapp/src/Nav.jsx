import Avatar from './image/luffy.jpg';

const Nav = (props) => {
    return(
        <div className={props.className}>
          <div className="inner">
          <div>  <span className="logo">leafly</span></div>
            <div> <span className="img"><img src={Avatar} alt="" /></span></div>
          </div>
        </div>
    )
}

export default Nav;