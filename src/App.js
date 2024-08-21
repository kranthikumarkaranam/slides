import React from 'react';
import {ScrollView} from 'react-native-web';
import Slides from './components/Slides';

const title = 'Slideshow App';


const App = ({slides}) => {
    return (
        <>
            <ScrollView>
                <h8k-navbar header={title}/>
                <div className="app-container">
                    <Slides slides={slides}/>
                </div>
            </ScrollView>
        </>
    )
        ;
};

export default App;
