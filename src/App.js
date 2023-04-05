import {Route, Switch} from 'react-router-dom';
import {Home, LandingPage, Form, Detail, Activities} from './views/index';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/Styles/Global.styled';

const theme ={
  colors:{
    header: '#fff',
    body: '#fff',
    footer: '#eef1f1'
  }
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
    <GlobalStyles />
    <Switch>
    <Route exact path = '/' render={()=><LandingPage />} />
    <Route path ='/home' render={()=><Home />} />
    <Route path ='/activities' render={()=><Activities />} />
    <Route exact path = '/create' render={()=><Form />} />
    <Route path = '/:idCountry' render={(props)=> <Detail {...props} />} />
    </Switch>
    </ThemeProvider>
  );
}

export default App;
