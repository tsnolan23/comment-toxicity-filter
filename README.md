# Fight Toxicity with Perspective API

In an effort to combat toxicity on the internet, the Perspective API uses machine learning to attempt to determine the toxic intent of a comment. This repo uses that API to compare the toxic probability of the comment to a threshold in the application to deem if it would allowed or not.

Check out the [demo](https://tsnolan23.github.io/comment-toxicity-filter/) to see it in action!

<img width="897" alt="Screen Shot 2019-05-26 at 11" src="https://user-images.githubusercontent.com/12575994/58384631-7e7f8e00-7fa9-11e9-81b3-fe9dbd61e8d9.png">

---

### Local Setup

1. Clone this repository with `git clone https://github.com/tsnolan23/comment-toxicity-filter`
1. Change into the repo directory with `cd comment-toxicity-filter`
1. Install dependencies with `yarn install`
1. Rename the `.env.example` file to `.env`
1. Provide a Google API key with the Perspective API enabled in the `.env` file
1. Start up the app `yarn start`
