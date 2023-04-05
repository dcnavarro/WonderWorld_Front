import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from '../../components/Footer/Footer';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getActivities} from "../../redux/actions";
import { StyledCardActivities } from "../../components/Styles/StyledCardActivities";
import {StyledContainer} from "../../components/Styles/StyledContainer";
import {StyledContainerActivities} from '../../components/Styles/StyledContainerActivities';
import { StyledFlagsContainer } from "../../components/Styles/StyledFlagsContainer";


const Activities = () =>{

    const dispatch =  useDispatch();
   
    useEffect(() => {
        dispatch(getActivities())
}, [dispatch]);

const eachActivity = useSelector((state) => state.activities)



return(
        <div>
        <NavBar />
        <StyledContainerActivities>
        
        <div>
            {
            eachActivity.map((el)=>
            <>
            <StyledCardActivities>
            <h1>{el.name}</h1>
            <h2>Duration</h2>
            <hr />
            <h3>{el.duration} hours</h3>
            <h2>Difficulty</h2>
            <hr />
            <h3>{el.difficulty}</h3>
            <h2>Season</h2>
            <hr />
            <h3>{el.season}</h3>
            <h2>Countries</h2>
            <hr />
            <h3>{el.Countries.map(el=>"  /  " + el.name + "   /  ")}</h3>
            </StyledCardActivities>
            </>)
            }
        </div>
        </StyledContainerActivities>
        <StyledContainer>
        <StyledFlagsContainer />
        </StyledContainer>
        <StyledContainer>
        <Footer />
        </StyledContainer>
        </div>
    );

}

export default Activities;