import TabList from "../components/TabList";
import {useState} from 'react';
import data from './data.json';
import DestinationInfo from "../components/DestinationInfo";
import Pic from "../components/Pic";
import Grid from "../layout/Grid";
import BodyWrapper from "../layout/BodyWrapper";
import NumberedTitle from "../components/NumberedTitle";

function Destination(){
    const [tab, setTab] = useState(0);
    const destinations = [...data.destinations];
    console.log(destinations[0].images.png);

    function handleTabChange(tabId){
        setTab(tabId);
    }


    return (
        <BodyWrapper cName="destination">
            <Grid cName = "grid-container--destination flow">
                <NumberedTitle number = "01" title="Pick your destination"/>
                <Pic 
                    src = {destinations[tab]}
                />
                <TabList
                    onTabChange = {handleTabChange}
                />
                <DestinationInfo 
                    destination = {destinations[tab]}
                />
            </Grid>
        </BodyWrapper>)
}

export default Destination;