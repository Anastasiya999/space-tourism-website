import {React, useState, useEffect}  from 'react'
import data from './data.json';
import NumberIndicators from '../components/NumberIndicators';
import HeroSection from '../components/HeroSection';
import Grid from '../layout/Grid';
import BodyWrapper from '../layout/BodyWrapper';
import NumberedTitle from '../components/NumberedTitle';

function Technology(){
    const [selectedNumber, setNumber] = useState(0);
    const technology = [...data.technology];
    const size = useWindowSize();

    function handleIndicatorChange(indicatorId){
        setNumber(indicatorId);
    }

    return (
            <BodyWrapper cName = "technology">
                 <Grid cName="grid-container--technology">
                    <NumberedTitle number = "03" title="Space launch 101"/>
                    <NumberIndicators 
                        onIndicatorChange = {handleIndicatorChange}
                    />
                    <HeroSection subject = {technology[selectedNumber]} className = "tech-details flow"/>
                    <picture>
                        <img src= {size.width < 720 ? technology[selectedNumber].images.landscape : technology[selectedNumber].images.portrait} alt={technology[selectedNumber].role.title} />
                    </picture>
                </Grid>
            </BodyWrapper>)
}

function useWindowSize(){
    const [windowSize, setwindowSize] = useState({
        width: undefined,
        height:undefined
    });

    useEffect(() => {
        function handleResize(){
            setwindowSize({
                width:window.innerWidth,
                height: window.innerHeight
            })
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return ()=>window.removeEventListener('resize', handleResize);
    }, [])

    return windowSize;
    
}

export default Technology;