import 'react-native';
import React from 'react';
import App from '../src/App';
import {render, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('slideshow_app', () => {

    afterEach(() => {
        cleanup();
    });

    const testIds = {
        restartButton: "button-restart",
        prevButton: "button-prev",
        nextButton: "button-next",
        title: "title",
        text: "text",
    };


    const makeSlides = (numSlides) => Array.from({length: 10}, (_, idx) => ({
        title: `title ${idx}`,
        text: `text ${idx}`
    }));

    const renderApp = (slides) => render(<App slides={slides}/>);


    it('App renders correctly', () => {
        const slides = makeSlides(2);

        const {getByTestId} = renderApp(slides);

        const restartButton = getByTestId(testIds.restartButton);
        expect(restartButton).toHaveTextContent("Restart");
        expect(restartButton).toHaveAttribute('disabled');

        const prevButton = getByTestId(testIds.prevButton);
        expect(prevButton).toHaveAttribute('disabled');

        const nextButton = getByTestId(testIds.nextButton);
        expect(nextButton).not.toHaveAttribute('disabled');

        const titleElem = getByTestId(testIds.title);
        expect(titleElem).toHaveTextContent(slides[0].title);

        const textElem = getByTestId(testIds.text);
        expect(textElem).toHaveTextContent(slides[0].text);
    });

    it('Switching between slides works as expected', () => {
        const slides = makeSlides(5);

        const {getByTestId} = renderApp(slides);

        const restartButton = getByTestId(testIds.restartButton);
        const prevButton = getByTestId(testIds.prevButton);
        const nextButton = getByTestId(testIds.nextButton);
        const titleElem = getByTestId(testIds.title);
        const textElem = getByTestId(testIds.text);

        const clicks = [
            'next', 'next', 'next', 'prev', 'prev', 'prev', 'next', 'next', 'restart', 'next', 'next', 'next', 'next', 'prev',
        ];

        let idx = 0;
        for (const click of clicks) {
            if (click === 'restart') {
                fireEvent.click(restartButton);
                idx = 0;
            } else if (click === 'prev') {
                fireEvent.click(prevButton);
                if(idx !== 0) {
                    idx -= 1;
                }
            } else if (click === 'next') {
                fireEvent.click(nextButton);
                if(idx !== slides.length) {
                    idx += 1;
                }
            }
            expect(idx >= 0).toEqual(true);
            expect(idx < slides.length).toEqual(true);
            if (idx !== 0) {
                expect(restartButton).not.toHaveAttribute('disabled');
                expect(prevButton).not.toHaveAttribute('disabled');
            } else {
                expect(restartButton).toHaveAttribute('disabled');
                expect(prevButton).toHaveAttribute('disabled');
            }

            if (idx + 1 < slides.length) {
                expect(nextButton).not.toHaveAttribute('disabled');
            } else {
                expect(nextButton).toHaveAttribute('disabled');
            }
            const {title, text} = slides[idx];
            expect(titleElem).toHaveTextContent(title);
            expect(textElem).toHaveTextContent(text);
        }
    });


});

