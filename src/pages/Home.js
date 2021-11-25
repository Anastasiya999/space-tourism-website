
import {Route} from 'react-router-dom';
import ActionSection from '../components/ActionSection';
import BodyWrapper from '../layout/BodyWrapper';

function Home(){
    return (
        <BodyWrapper cName="home">
            <ActionSection className = "grid-container--home"/>
        </BodyWrapper>
        
    )
    
}

export default Home;