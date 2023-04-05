import axios from 'axios';

const GET_COUNTRIES = "GET_COUNTRIES";
const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
const GET_COUNTRY_DETAIL= "GET_COUNTRY_DETAIL";
const GET_ACTIVITIES = "GET_ACTIVITIES";
const POST_ACTIVITY = "POST_ACTIVITY";
const SORT_BY_NAME = "SORT_BY_NAME";
const SORT_BY_POPULATION = "SORT_BY_POPULATION";
const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
const CLEAR_FILTERS = "CLEAR_FILTERS"


const getCountries = () =>{
    return async function (dispatch){
        const apiData = await axios.get(`http://localhost:3001/countries`, {mode:'no-cors'});

        const countries = apiData.data;
        dispatch({type: GET_COUNTRIES, payload: countries})
    }};

const getCountriesByName = (name) =>{
    return async function (dispatch){
        var json = await axios.get(`http://localhost:3001/countries/?name=`+name, {mode:'no-cors'});
        return dispatch({
            type: GET_COUNTRIES_BY_NAME,
            payload: json.data
        })
    }
}

const getCountryDetail = (idCountry) =>{
    return async function (dispatch){
        var info = await axios.get(`http://localhost:3001/countries/${idCountry}`);
        return dispatch({
            type: GET_COUNTRY_DETAIL,
            payload: info.data[0]
        })
    }
}

const getActivities = () =>{
    return async function (dispatch){
        var info = await axios.get(`http://localhost:3001/activities`, {mode:'no-cors'});
        return dispatch({
            type: GET_ACTIVITIES,
            payload: info.data
        });
    };
};

const postActivity = (payload) =>{
    return async function (dispatch){
        try{var info = await axios.post(`http://localhost:3001/activities`, payload);
        return info;
        }catch(error){
           throw new Error({error: error.message}) 
        };
    }};

const filterCountriesByContinent = (payload) =>{
    console.log(payload)
    return{
        type: FILTER_BY_CONTINENT,
        payload
    }
};

const filterCountriesByActivity = (payload) =>{
    console.log(payload)
    return{
        type: FILTER_BY_ACTIVITY,
        payload
    }
};


const sortByName=(payload) =>{
    return{
        type: SORT_BY_NAME,
        payload
    }
}

const sortByPopulation=(payload) =>{
    return{
        type: SORT_BY_POPULATION,
        payload
    }
}


const clearFilters=() =>{
    return{
        type: CLEAR_FILTERS
    }
}


export {getCountries, getCountriesByName, getCountryDetail, getActivities, postActivity, filterCountriesByContinent,filterCountriesByActivity, sortByName, sortByPopulation,clearFilters,SORT_BY_NAME, SORT_BY_POPULATION, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, POST_ACTIVITY, GET_ACTIVITIES, GET_COUNTRY_DETAIL, GET_COUNTRIES_BY_NAME, GET_COUNTRIES, CLEAR_FILTERS}