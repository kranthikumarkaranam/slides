import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';
import './index.css';

const SLIDES = [
    {
        title: "Today's workout plan",
        text: "We're gonna do 3 fundamental exercises.",
        src: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
    },
    {
        title: "First, 10 push-ups",
        text: "Do 10 reps. Remember about full range of motion. Don't rush.",
        src: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80'
    },
    {
        title: "Next, 20 squats",
        text: "Squats are important. Remember to keep your back straight.",
        src: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: "Finally, 15 sit-ups",
        text: "Slightly bend your knees. Remember about full range of motion.",
        src: 'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: "Great job!",
        text: "You made it, have a nice day and see you next time!",
        src: 'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
    }
];

const title = 'App';

const AppWrapper = () => {
   return (
        <><App slides={SLIDES}/></>
    )
}

AppRegistry.registerComponent(title, () => AppWrapper);

AppRegistry.runApplication('App', {
    rootTag: document.getElementById('root'),
});

applyPolyfills().then(() => {
    defineCustomElements(window);
});
