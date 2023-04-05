import { useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCountries, filterCountriesByActivity, filterCountriesByContinent, sortByName, sortByPopulation} from '../../redux/actions';
import {Link} from 'react-router-dom';
import {Card} from '../../components/Card/Card';
import { NavBar } from '../../components/NavBar/NavBar';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Footer } from '../../components/Footer/Footer';
import {Pagination} from '../../components/Pagination/Pagination';
import { StyledContainer } from '../../components/Styles/StyledContainer';
import { StyledContainerCenter } from '../../components/Styles/StyledContainerCenter';
import { StyledButtonSearchBar } from '../../components/Styles/StyledButtonSearchBar';
import { WonderWorld } from '../../components/Styles/WonderWorld.styled';
import { StyledFlagsContainer } from '../../components/Styles/StyledFlagsContainer';
import { StyledSearchBar } from '../../components/Styles/StyledSearchBar';
import { StyledContainerCards } from '../../components/Styles/StyledContainerCards';


const Home = () =>{
    const dispatch = useDispatch();
    const allCountries = useSelector((state)=> state.countries)

    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)

    console.log(setCountriesPerPage)
    console.log(order)

    const lastCountryIndex = currentPage * countriesPerPage;
    const firstCountryIndex = lastCountryIndex - countriesPerPage;
    const currentCountries = allCountries.slice(firstCountryIndex, lastCountryIndex);
    console.log(currentCountries);

    const pagination = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch]);

    function handleSortByName(event){
        dispatch(sortByName(event.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${event.target.value}`)
    };

    function handleSortByPopulation(event){
        dispatch(sortByPopulation(event.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${event.target.value}`)
    };

    function handleClearFilters(event){
        dispatch(getCountries())
    }

    function handleFilterContinent(event){
        dispatch(filterCountriesByContinent(event.target.value))
        }

    function handleFilterActivity(event){
        dispatch(filterCountriesByActivity(event.target.value))
    };

    return(

        <div>
            <NavBar />
            <StyledContainer>
            <WonderWorld>
            <h1>WonderWorld</h1>
            <img src="https://cdn.pixabay.com/photo/2012/04/01/17/14/earth-23593__340.png" alt="" style={{width:'400px'}} />
            </WonderWorld>
            <StyledFlagsContainer />
            <div>
            <StyledContainerCenter>
            <SearchBar />
            </StyledContainerCenter>
            <br></br>
            <StyledSearchBar>
            <select onChange={event=> handleSortByName(event)}>
                <option value='Asc'>Sort By Name</option>
                <option value='Asc'>Ascending</option>
                <option value='Desc'>Descending</option>
            </select>
            <select onChange={event=> handleSortByPopulation(event)}>
                <option>Sort By Population</option>
                <option value='Asc'>Ascending</option>
                <option value='Desc'>Descending</option>
            </select >
            <select onChange={event=> handleFilterContinent(event)}>
                <option value='All'>Filter By Continent</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Africa'>Africa</option>
                <option value='South America'>South America</option>
                <option value='North America'>North America</option>
                <option value='Oceania'>Oceania</option>
                <option value='Antarctica'>Antarctica</option>
            </select>
            <div>        
            </div>         
            <select onChange={event=> handleFilterActivity(event)}>
                <option value='All'>Filter By Activity</option>
                <option value='Backpacking'>Backpacking</option>
                <option value='Biking'>Biking</option>
                <option value='Bird Watching'>Bird Watching</option>
                <option value='Camping'>Camping</option>
                <option value='Canoeing'>Canoeing</option>
                <option value='Hiking'>Hiking</option>
                <option value='Horseback Riding'>Horseback Riding</option>
                <option value='Paragliding'>Paragliding</option>
                <option value='Running'>Running</option>
                <option value='Skiing'>Skiing</option>                
                <option value='Skydiving'>Skydiving</option>               
                <option value='Snorkelling'>Snorkelling</option>
                <option value='Snowboarding'>Snowboarding</option>
                <option value='Surfing'>Surfing</option>                
                <option value='Trekking'>Trekking</option>          
            </select> 
            </StyledSearchBar>
            <StyledContainerCenter>
            <div>
                
                <br />
                <StyledButtonSearchBar onClick={event=> handleClearFilters(event)}>Clear Filters</StyledButtonSearchBar>
                <br />
            </div>
            </StyledContainerCenter>               
            </div>
            <br />
            </StyledContainer>
            <StyledContainerCards>
            
      <Pagination 
            allCountries={allCountries.length} 
            countriesPerPage={countriesPerPage} 
            pagination={pagination}
            currentPage={currentPage}
            />
            <br />
            

            {currentCountries?.map((el)=>{
                return(
                    <div>
                        <Link to={`/${el.id}`}>
                            <Card
                            key={el.id}
                            image={el.nationalFlag}
                            name={el.name}
                            continent={el.continent}
                            />
                        </Link>
                    </div>
                )
            })}

            </StyledContainerCards>
            
            <StyledContainer>
            <Footer />
            </StyledContainer>
        </div>
    )}

    export default Home;