import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { getCountriesByName } from '../../redux/actions';
import { StyledSearchBar } from '../Styles/StyledSearchBar';
import { StyledButtonSearchBar } from '../Styles/StyledButtonSearchBar';

const SearchBar = () =>{
    const dispatch = useDispatch();
    const [name, setName]=useState('');

    const handleInputChange = (event) =>{
    setName(event.target.value)
    }
     
    const handleSubmit = (event) =>{
    dispatch(getCountriesByName(name))
    }

    return(
    <StyledSearchBar>
    <>
    <div>
        <input
        type = 'text'
        placeholder = 'Search Country by Name' 
        onChange = {(event)=> handleInputChange(event)}
         />
         <div>
        <StyledButtonSearchBar type = 'submit' onClick ={(event)=>handleSubmit(event)}>Search</StyledButtonSearchBar>
        </div>
        <br></br>      
    </div>
    
    </>
    </StyledSearchBar>
    )
}

export  {SearchBar};


         