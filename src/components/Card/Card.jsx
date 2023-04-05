import { StyledCard } from "../Styles/StyledCard";

const Card = (props) =>{
    return(
        <StyledCard>
        <div>
        <div>
            <img src={props.nationalFlag?props.nationalFlag:props.image} alt="" width='350px' height='200px'/>
        </div>
        <h1>{props.name}</h1>
        <h3>{props.continent}</h3>
        </div>
        </StyledCard>
    )
}

export {Card};