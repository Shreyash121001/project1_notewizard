import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import './../App.css';
import { Link } from "react-router-dom";
import title from "./title.png"
import title_white from "./title_white.png"
import './../App.css'


// navbar items map buttons to desired url


export default function Navbar(props) {

  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };
  

  return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">Navbar</Link>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item active">
//             <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/about">About</Link>
//           </li>
//           {/* Add more links here */}
//         </ul>
//       </div>
//     </nav>
//   );
// };










    <div className='nav'>
      <nav className="navbar navbar-expand-lg navbar-light bg-grey fixed-top">
        <div className="container-fluid nav">
        
          <Link className="text-black custom-brand title" to="/">
          <img src={title} alt="Logo" className="navbar-logo" />{props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            onClick={handleToggle}
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded= {!collapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="nav-item">
                <Link className="text-black custom-brand" aria-current="page" to="/textanalyser">
                  TextAnalyser
                </Link>
              </div>
              
              <div className="nav-item">
                <Link className="text-black custom-brand" to="/about">
                  {props.aboutText}
                </Link>
              </div>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success text-black" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}







// export default function navbar(props) {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-dark fixed-top">
//         <div className="container-fluid">
//           <Link className="navbar-brand text-white" to="/">
//             <img src={title_white} alt="Logo" className="navbar-logo" />
//             {props.title}
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active text-white" aria-current="page" to="/">
//                   TextAnalyser
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link text-white" to="/about">
//                   {props.aboutText}
//                 </Link>
//               </li>
//             </ul>

//             <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success text-white" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }






Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here'
};