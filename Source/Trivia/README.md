# Trivia - React Native Quiz Game

Trivia is a simple Quiz Game, with 10 true or false questions, developed in React Native. This game is been developed as a Code Challenge for G2i, to showcase the abilities and impress.

This project is a super helpful kit to kick-start your next React Native project, as it provides a lot of references and best practices for creating a React Native project from scratch. Some of these are:
- Clear project structure
- Usage of functional components
- Handling shared stypes and themes
- Flux architecture - Using [Redux](https://redux.js.org/docs/introduction/)
- Routing and navigation - Using [React Navigation](https://reactnavigation.org/)
- Unit tests - Using [Jest](https://facebook.github.io/jest/)
- Code Linting - Using [ESLint](https://eslint.org/) with [Airbnb's JS Linting](https://github.com/airbnb/javascript) guidelines

## Trivia Game Flow

![Trivia Game Flow](video/trivia_game_flow.gif "Trivia Game Flow")

## Getting Started
It is recommended that you have the Prerequistes installed before following these steps. 
### 1. Clone and Install
```bash
# Clone the repo
git clone https://github.com/g2i/code-challenge-ajit-singh.git

# Goto to Trivia project folder
cd Source/Trivia/

# Install dependencies
npm install
```
### 2. Run on iOS Simulator
```bash
# This will launch iOS simulator and will launch the app
react-native run-ios
```
### 3. Run on Android Emulator
- Create an AVD (Android Virtual Device)
- Make sure AVD is running
- Run following command 
```bash
# This will launch the app in the AVD
react-native run-android
```
### Prerequisites
- [Node JS](https://nodejs.org/en/download/) 
- [NPM](https://docs.npmjs.com/cli/install)
- [Google Chrome - For debugging](https://www.google.com/chrome/)
- [Xcode](https://developer.apple.com/xcode/)
- [Android Studio](https://developer.android.com/studio/install)
- [Watchman](https://facebook.github.io/watchman/docs/install.html)
- [React native cli](https://www.npmjs.com/package/react-native-cli)

## Running the tests
Run following command to execute the Jest automation unit test suit. It will show the test report on the terminal window, and will also generate the code coverage report in the coverage folder. 
```bash
# Run following command
npm test
```
[**Code Coverage Report**](coverage/lcov-report/index.html "Code Coverage Report")
## Running the Device
### 1. iOS
Given below are the high level steps required to run the app on iOS device. For complete details please refer this [link](https://facebook.github.io/react-native/docs/running-on-device.html). 
- Plug in your device via USB
- Configure code signing
- Build and Run the app

### 2. Android
Given below are the high level steps required to run the app on Android device. For complete details please refer this [link](https://facebook.github.io/react-native/docs/running-on-device.html).
- Enable Debugging over USB
- Plug in your device via USB
- Run your app

## Deployment on App Store/ Play Store
Following are the high level steps required to deploy the app on Apple App Store and Google Play Store, for details please refer respective platform's official documentations. 
### iOS
- Create App Store provisioning profile  
- Register app on iTunes Connect
- Add app icons and update launch image 
- Create app archive (IPA)
- Upload the app to App Store via XCode 
- Use Test Flight for Beta testing and Release
### Android 
- Sign the app
- Create release variant using following command 
```bash
# To create Android Release variant
react-native run-android --variant=release
```
- Generate the APK using following command
```bash
# Generate APK
cd android && ./gradlew assembleRelease
```
- Sign-up to [Google Play Store Developer Console](https://play.google.com/apps/publish/signup) for Beta testing and Release

## Built With
* [react](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces. 
* [react-native](https://github.com/facebook/react-native) - A framework for building native apps with React.
* [react-navigation](https://github.com/react-navigation/react-navigation) - Routing and navigation for your React Native apps.
* [react-native-radio-buttons](https://github.com/ArnaudRinquin/react-native-radio-buttons) - A react component to implement radio buttons-like behaviors: multiple options, only one option can be selected at a given time.
* [redux](https://github.com/reduxjs/redux) - Redux is a predictable state container for JavaScript apps.
* [react-redux](https://github.com/reduxjs/react-redux) - Official React bindings for Redux.
* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [redux-axios-middleware](https://github.com/svrcekmichal/redux-axios-middleware) - Redux middleware for fetching data with axios HTTP client
* [html-entities](https://github.com/mdevils/node-html-entities) - Html entities library. Used for HTML entities encoding/decoding. 
* [prop-types](https://github.com/facebook/prop-types) - Runtime type checking for React props and similar objects.

## Author - 
[**Ajit Singh**](https://www.linkedin.com/in/1986ajitsingh/
) - Poly-skilled Developer with handson expertise on web and mobile platforms like React JS, React Native, iOS, and BREW, across domains like IoT, security, communication, and healthcare. 

### Post by the author: 
-  [*Blog*](https://www.globallogic.com/blogs/author/ajit-singh/)
- *Whitepapers*
    - [Mobile Application Architecture: React Native with Redux](https://www.globallogic.com/gl_news/mobile-application-architecture-react-native-with-redux/)
    - [A Review of React Native for Cross-platform Mobile Application Development](https://www.globallogic.com/gl_news/a-review-of-react-native-for-cross-platform/)
    - [Enabling Enterprise Collaboration Platforms with Mitel Embedded Communications (MiEC) SDK V6.0](https://www.globallogic.com/gl_news/enabling-enterprise-collaboration-platforms-with-mitel-embedded-communications-miec-sdk-v6-0/)
    - [Cashless India: Leveraging Possibilities and Facing Security Challenges In the Mobile Space](https://www.globallogic.com/gl_news/cashless-india-leveraging-possibilities-and-facing-security-challenges-in-the-mobile-space/)
    - [Smart Homes: A Deep Dive](https://www.globallogic.com/gl_news/smart-homes-a-deep-dive/)



