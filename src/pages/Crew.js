
import HeroSection from "../components/HeroSection";
import data from './data.json';
import {useState} from 'react';
import DotIndicators from "../components/DotIndicators";
import Pic from "../components/Pic";
import Grid from "../layout/Grid";
import BodyWrapper from "../layout/BodyWrapper";
import NumberedTitle from "../components/NumberedTitle";

function Crew(){
    const [indicator, setIndicator] = useState(0);
    const crew = [...data.crew];
    

    function handleIndicatorChange(indicatorId){
        setIndicator(indicatorId);
    }
    return (
        <BodyWrapper cName="crew">
            <Grid cName="grid-container--crew flow">
                <NumberedTitle number = "02" title="Meet you crew"/> 
                <DotIndicators 
                    onIndicatorChange = {handleIndicatorChange}
                />
                <HeroSection subject = {crew[indicator]} className = "crew-details flow"/>
                <Pic 
                        src = {crew[indicator]}
                />
        </Grid>
        </BodyWrapper>
    )
}

export default Crew;