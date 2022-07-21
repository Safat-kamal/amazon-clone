import React from 'react';
import ErrImg from './404.jpg';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
    <img src={ErrImg} alt="" style={{objectFit:"cover",width:"100vw",height:"98vh",overflow:"hidden",marginTop:"5px"}} />
    <Link to="/"><button style={{position:"absolute",top:"70%",left:"45%",fontSize:"1.1em",fontWeight:"500",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"orangered",color:"white",padding:"8px 14px",borderRadius:"5px",cursor:"pointer"}}><KeyboardBackspaceIcon/>  Go Back</button></Link>
  </div>
  )
}

export default NotFound
