# Review Form

Review form with customer review trend chart and latest comments. [DEMO](https://productreviews.davidvanzyl.io/)

If you notice any issues/improvements feel free to get in touch, make an issue here on github or create a PR.

The overall folder structure and architecture is kept as simple as possible. This is to [avoid hasty abstractions.](https://kentcdodds.com/blog/aha-programming) The requirement for this application is simple and we have no idea where we will need to
take it in the future, so lets [keep it simple](https://en.wikipedia.org/wiki/KISS_principle).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn docker:run:dev`

Run the dev docker image if it was already built.<br />
See build section below for more info.

### `yarn docker:run:prod`

Run the prod docker image if it was already built.<br />
See build section below for more info.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn docker:build:dev`

Builds the app into a docker container using the Dockerfile configuration.<br />
The page will reload if you make edits.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### `yarn docker:build:prod`

Builds the app for production into a docker container using the Dockerfile.prod configuration.<br />
Open [http://localhost:1337](http://localhost:1337) to view it in the browser.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn docker:stop`

Stop any running docker images.

See the section above on docker related scripts.

## Structure/Architecture

Some explaination on choices made.

#### State

Intentionally no use of redux here. Since there is no need to share state or persist anything using local/component level state,
in the form of a custom hook, seems sufficient and avoids extra complexity.

#### Modules/Abstractions

In a larger production app if would make sense to find commonalities/repitions and create generic/reusable components, in this case
however the scope is limited such that it would only really serve to add complexity with little to no reward, beyond the input and reviewItem as these either require some level of configuration or are a list item. ReviewForm is also seperated to more easily test
that submission and accessibility are working as expected.

Also the App file would likely have routing and similar elements, here elements for the app are directly used since there is no
need for any other setup or seperation.

#### HighCharts v D3

HighCharts is a little less low level than D3 and does what we needed in an easy to understand way/no learning curve.

#### Data/Loading

Since this was a front-end focused task, data was mocked directly into state. Functionally there is little difference, short of the
axios/ky services and loading visuals.

#### Git usage

Breaking up the elements/features into seperate managable commits/PRs would be better in reality.

### Possible future work

- Design/Responsiveness
- Connect to a backend, add loading animations etc
- See if the chart can be made (more?) accessible
- Add analytics (common validation issues, errors, etc)

## Learn More

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br />
- The chart was created using [HighCharts](https://www.highcharts.com/docs/index).<br />
- The star rating component comes from [react-rating-stars-component](https://github.com/ertanhasani/react-stars).<br />
- Forms [Formik](https://github.com/formium/formik).<br />
