import { StyledButtonPagination } from "../Styles/StyledButtonPagination";

const Pagination = ({allCountries, countriesPerPage, pagination, currentPage}) =>{
    let pageNumbers = [];
    for (let i=1 ; i<= Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    } 

    return (
        <div>
        <nav>
            {
                pageNumbers && pageNumbers.map((number)=>{
                    return(
                    <StyledButtonPagination key={number} onClick={()=>pagination(number)} className={number === currentPage ? 'active' : '' }> {number} </StyledButtonPagination>
                    );
                })
            } 
            
        </nav>
        </div>
    )
}

export {Pagination}
