import {Link} from "react-router-dom";
import {StyledButton} from "../../components/Styles/StyledButton"
import { StyledLanding } from "../../components/Styles/StyledLanding";



const LandingPage = () =>{
    return(   
            <div>
            <StyledLanding>
           
            <h1>WonderWorld</h1>
            <h2>Whole world at one place</h2>
            <h3>Welcome!</h3>
            <br></br>
            <Link to='/home'><StyledButton>Let's Start</StyledButton></Link>
            </StyledLanding>
            </div>

            )
};

export default LandingPage;