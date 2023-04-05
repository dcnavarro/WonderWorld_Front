import {FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, GET_COUNTRIES_BY_NAME, GET_COUNTRY_DETAIL, SORT_BY_NAME, SORT_BY_POPULATION, GET_COUNTRIES, GET_ACTIVITIES, POST_ACTIVITY, CLEAR_FILTERS} from "./actions";

const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    countryDetail: []
};

const rootReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        
        case GET_COUNTRIES_BY_NAME:
            return{
                ...state,
                countries: action.payload
            }

        case GET_ACTIVITIES:
            return{
                ...state,
                activities: action.payload
            }
        
        case GET_COUNTRY_DETAIL:
            return{
                ...state,
                countryDetail:action.payload
            }  

        case POST_ACTIVITY:
            return{
                ...state,
            }

        case FILTER_BY_CONTINENT:
            const allCountries = state.countries
            const continentsFiltered = action.payload === "All" ? allCountries 
            : allCountries.filter(el => el.continent.includes(action.payload))
            return{
                ...state,
                countries: continentsFiltered
            }
        
        
        case FILTER_BY_ACTIVITY:
            const all_Countries = state.allCountries
            const activitiesFiltered = action.payload === "All" ? all_Countries 
            : all_Countries.filter(el => el.Activities.map(el=>el.name).toString().split(',').includes(action.payload)) 
            return{
                ...state,
                countries: activitiesFiltered
            }

        case SORT_BY_NAME:
            let newArray = action.payload === 'Asc'?
            state.countries.sort(function(a,b){
                if(a.name>b.name){
                    return 1
                }
                if(b.name>a.name){
                    return -1
                }
                return 0
            }) : 
            state.countries.sort(function(a,b){
                if(a.name>b.name){
                    return -1
                }
                if(b.name>a.name){
                    return 1
                }
                return 0
            })
            return{
                ...state,
                countries: newArray
            }

        case SORT_BY_POPULATION:
        let newArray2 = action.payload === 'Asc'?
            state.countries.sort(function(a,b){
                if(a.population<b.population){
                    return -1
                }
                if(b.population<a.population){
                    return 1
                }
                return 0
            }) : 
            state.countries.sort(function(a,b){
                if(a.population<b.population){
                    return 1
                }
                if(b.population<a.population){
                    return -1
                }
                return 0
            })
            return{
                ...state,
                countries: newArray2
            }

        case CLEAR_FILTERS:
            return{
                ...state,
                countries: [],
                allCountries: [],
                activities: [],
                countryDetail: [],
            }
        default:
            return{
                ...state,
            };
    };
};

export default rootReducer;