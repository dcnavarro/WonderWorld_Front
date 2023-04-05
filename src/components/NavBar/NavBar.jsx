import {Link} from 'react-router-dom';
import { StyledNavBar } from '../Styles/StyledNavBar';
import { StyledButtonNavBar } from '../Styles/StyledButtonNavBar';

const NavBar = () =>{
    return(
       <div>
    <StyledNavBar>
     
    
  
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,200" rel="stylesheet" />

   
   
        <StyledButtonNavBar>
            <span className='material-symbols-outlined'>home</span>
            <Link to='/home'>Home</Link>
        </StyledButtonNavBar>
    
    
        <StyledButtonNavBar>
            <span className='material-symbols-outlined'>globe_asia</span>
            <Link to='/activities'>Activities</Link>
        </StyledButtonNavBar>
    
    
        <StyledButtonNavBar>
         <span className='material-symbols-outlined'>add_circle</span>
            <Link to='/create'>Create Activity</Link>
        </StyledButtonNavBar>
      </StyledNavBar>
    
</div>
    
  
    );
    };

export  {NavBar};     