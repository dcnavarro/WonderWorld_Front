import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { getCountryDetail } from '../../redux/actions';
import {useEffect} from 'react';
import {StyledContainer} from '../../components/Styles/StyledContainer';
import { StyledContainerCards } from '../../components/Styles/StyledContainerCards';
import { StyledButtonSearchBar } from '../../components/Styles/StyledButtonSearchBar';
import { StyledCardDetail } from '../../components/Styles/StyledCardDetail';
import { StyledContainerCenter } from '../../components/Styles/StyledContainerCenter';
import {StyledFlagsContainer} from "../../components/Styles/StyledFlagsContainer";

const Detail = (props) =>{
    const dispatch =  useDispatch();
   
    useEffect(() => {
        dispatch(getCountryDetail(props.match.params.idCountry));
    }, [props.match.params.idCountry], [dispatch]);

    const eachCountry = useSelector((state) => state.countryDetail)

    return(
        <div>
        <NavBar />
        <StyledContainerCards>
            <StyledCardDetail>
        <div>
            <StyledContainerCenter>
            <img alt='Not found' src={eachCountry.nationalFlag} width='350px' height='200px'></img>
            </StyledContainerCenter>
            <h1>{eachCountry.name}</h1>
            <h2>Continent</h2>
            <hr />
            <h3> {eachCountry.continent}</h3>
            <h2>Capital</h2>
            <hr />
            <h3>{eachCountry.capital}</h3>
            <h2>Subregion</h2>
            <hr />
            <h3>{eachCountry.subregion}</h3>
            <h2>Area</ h2>
            <hr />
            <h3>{eachCountry.area} Km2</h3>
            <h2>Population</h2>
            <hr />
            <h3>{eachCountry.population} People</h3>
            <h2>Activities</h2>
            <hr />
            <h3>{eachCountry.Activities?.map(el=>el.name + " ")}</h3>
        </div>
        <StyledContainerCenter>
        <Link to='/home'><StyledButtonSearchBar>Back</StyledButtonSearchBar></Link>
        </StyledContainerCenter>
        </StyledCardDetail>
        </StyledContainerCards>
        <StyledContainer>
        <StyledFlagsContainer />
        </StyledContainer>
        <StyledContainer>
        <Footer />
        </StyledContainer>
        </div>
    )
}

export default Detail;