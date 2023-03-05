# Youtube Clone

This is a YouTube clone made using React.js. It uses the YouTube RapidAPI API to search for YouTube videos, play them in a user-friendly interface, see related videos and comments on the video.

Live URL - https://youtube-manish.vercel.app/

## Screenshots

![App Screenshot](./demo.gif "Screen Shot of Web app")

## Features

This app has the following features:

- Search for videos by keyword
- Search for youtube channels by keyword
- Display video details such as title, description, views, likes, and comments
- Play videos in a responsive player with playback controls
- See related videos
- Use context API for state management
- And many more...

## Technologies Used

- ReactJS
- SASS
- React Context API
- YouTube RapidAPI

## Getting Started

Clone the project

```bash
  git clone https://github.com/manishsharma0398/youtube-clone.git

```

Once you have cloned the repository, navigate to the project directory and install the dependencies:

```bash
  cd youtube-clone
```

```bash
  npm install
```

Next, start the development server:

```bash
  npm run dev
```

This will start the application on http://localhost:5173.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in your root folder

`VITE_BASE_URL=https://youtube138.p.rapidapi.com`

`VITE_API_KEY=YOUR_API_KEY`

`VITE_API_HOST=YOUR_HOST_KEY`

To get your API Keys:

    1. Go to https://rapidapi.com/ and click on the "Sign Up" button in the top right corner.

    2. Enter your email address and create a password to sign up for a new account.

    3. Once you have created an account, log in and navigate to the "APIs" tab at the top of the screen.

    4. In the search bar, type "YouTube" and click on the "YouTube" option with verified sign which is created by Glavier .

    5. On the next screen, click the "Pricing" tab to see the different plans available. You can choose a free or paid plan based on your needs.

    6. After selecting a plan, you will be redirected to the "Endpoints" page for the YouTube Data API. Here, you can see all of the available endpoints for the API and test them out using the "Test Endpoint" feature.

    7. To access the API from your React app, you will need to copy the API key provided by RapidAPI. You can do this by clicking on the "Credentials" tab in the left-hand menu, then selecting "API Keys" and clicking on the "copy" button next to your API key.

    8. Finally, you can use this API key in your React app to make requests to the YouTube API and retrieve data such as video information, comments, and more. Be sure for Free Tier only 500 requests are available every month.

## Contributing

Contributions are always welcome!

If you encounter a bug or would like to suggest a new feature, please open an issue in the [GitHub repository](https://github.com/manishsharma0398/youtube-clone/issues "Youtube Clone").
