# React Native Base

## Environment 

- React Version: ^16.3.1
- React Native Version: 0.63.2
- Node Version: v12 (LTS)
- Default Port: 8000

## Application Demo:
![Gif](https://hrcdn.net/s3_pub/istreet-assets/wulFpwbvZyWfPyZolT1MXw/slide.gif)

## Functionality Requirements
Create a basic slideshow application, as shown above. Application requirements are given below, and the finished application must pass all of the unit tests.


Your task is to complete the implementation of `src/components/Slides.js` according to the following requirements:

- The Slides component takes an array of slides as a prop. Each element of this array denotes a single slide and is an object with 3 properties: string title, string text and string src.
- On application launch, the first slide must be rendered.
- Clicking on the "Next" icon button shows the next slide. This button is disabled when the current slide is the last one.
- Clicking on the "Prev" icon button shows the previous slide. This button is disabled when the current slide is the first one.
- Clicking on the "Restart" button returns to the first slide. This button is disabled when the current slide is the first one.
- You can assume that the passed slides array contains at least one slide.


Initially, the file is filled with boilerplate code.

## Testing Requirements

- The "Restart" button must have `testID="button-restart"`.
- The "Prev" button must have `testID="button-prev"`.
- The "Next" button must have `testID="button-next"`.
- Each slide's image must be rendered as a `<Image>` element with `testID="image"`.
- Each slide's title must be rendered as a `<Text>` element with `testID="title"`.
- Each slide's text must be rendered as a `<Text>` element with `testID="text"`.

Please note that the component has the above testID attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.


## Project Specifications

**Read Only Files**
- `__tests__/*`

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
