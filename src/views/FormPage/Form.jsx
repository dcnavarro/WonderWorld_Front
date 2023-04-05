import { useState} from "react";
import {useHistory} from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import {postActivity} from "../../redux/actions";
import {useDispatch} from "react-redux";
import { StyledContainerForm } from "../../components/Styles/StyledContainerForm";
import { StyledContainerCenter } from "../../components/Styles/StyledContainerCenter";
import {StyledCardForm} from "../../components/Styles/StyledCardForm";
import { Footer } from "../../components/Footer/Footer";
import {StyledContainer} from "../../components/Styles/StyledContainer";
import { StyledButtonSearchBar } from "../../components/Styles/StyledButtonSearchBar";
import { StyledForm } from "../../components/Styles/StyledForm";
import { StyledFlagsContainer } from "../../components/Styles/StyledFlagsContainer";
import style from "../../components/Styles/Errors.module.css"


const Form = () =>{

const dispatch = useDispatch();

const history= useHistory();

const [form, setForm] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        idCountry: []

});

const [errors, setErrors] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        idCountry: ''
});

const changeHandler = (event) =>{
const property = event.target.name;
const value = event.target.value;
validate({...form, [property]:value});
setForm({...form, [property]:value});
}

const validate = (form) => {
  let errors = {};
  
  if (!form.name) {
    errors.name = 'Activity name is required';
  }

  if (form.difficulty < 1.0 || form.difficulty > 5.0) {
    errors.difficulty = 'Activity difficulty must be between one and five';
  }

  if (form.duration < 1 || form.duration > 24) {
    errors.duration = 'Activity duration must be between one and twenty four hours';
  }

  if (!form.season || !['summer', 'winter', 'spring', 'autumn'].includes(form.season.toLowerCase())) {
    errors.season = 'Season must be "Summer", "Winter", "Spring" or "Autumn"';
  }

  if (!form.idCountry || form.idCountry.length === 0) {
    errors.idCountry = 'One idCountry is required';
  }

  setErrors(errors);
};


    const submitHandler = (event) =>{
    
        event.preventDefault();
        dispatch(postActivity(form));
        let errorsArray = Object.keys(errors);
        console.log(errorsArray)
        errorsArray.length === 0? alert('Success! New activity created')
        : alert('Error! Please verify data');

        setForm({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        idCountry: []
        });

        setTimeout(() => {
        history.push('/home');
        }, 2000)
    }
    
    return(
        <div>
        <NavBar />
        <StyledContainerForm>
            <StyledCardForm>
                <div>
                <StyledForm onSubmit={submitHandler}>
                    <StyledContainerCenter>
                    <div>
                    <h1>Create your own activity!</h1>
                    </div>
                <div>
                <label htmlFor="name">Activity Name </label>
                <hr/>
                <input className={errors.name && style.error} type='text' value={form.name} onChange={changeHandler} name='name' />
                <br />
                <span>{errors.name? errors.name : ""}</span> 
            </div>
            <div>
                <label htmlFor="difficulty">Difficulty </label>
                <hr/>
                <input className={errors.difficulty && style.error} type='number' value={form.difficulty} onChange={changeHandler} name= 'difficulty' />
                <br />
                {errors.difficulty && <span>{errors.difficulty}</span>} 
            </div>
            <div>
                <label htmlFor="duration">Duration </label>
                <hr/>
                <input className={errors.duration && style.error} type='number' value={form.duration} onChange={changeHandler} name='duration' />
                <br />
                {errors.duration && <span>{errors.duration}</span>} 
            </div>
            <div>
                <label htmlFor="season">Season </label>
                <hr/>
                <input className={errors.season && style.error} type='text' value={form.season} onChange={changeHandler} name='season' />
                <br />
                {errors.season && <span>{errors.season}</span>} 
            </div>
            <div>
                <label htmlFor="idCountry">idCountry </label>
                <hr/>
                <input className={errors.idCountry && style.error} type='text' value={form.idCountry} onChange={changeHandler} name='idCountry' />
                <br />
                {errors.idCountry && <span>{errors.idCountry}</span>} 
            </div>
                </StyledContainerCenter>
            <StyledContainerCenter>
            <StyledButtonSearchBar type='submit'>Create</StyledButtonSearchBar>
            </StyledContainerCenter>
                </StyledForm>
            </div>
                </StyledCardForm>
                </StyledContainerForm>
            <StyledContainer>
            <StyledFlagsContainer />
            </StyledContainer>
                    <StyledContainer>
                    <Footer />
                    </StyledContainer>
                    </div>
                    )
                };

export default Form;
