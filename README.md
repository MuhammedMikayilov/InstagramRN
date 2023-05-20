# InstagramRN

InstagramRN is a React Native application that aims to replicate the core features and design of the popular social media platform Instagram. It allows users to sign in, browse their feed, like and comment on posts, follow other users, and more.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **User Authentication**: Users can sign up and log in to the application using their email and password. The authentication process is handled securely and efficiently.

2. **Home Feed**: Users can view a feed of posts from the users they follow. The feed includes images, captions, and likes counts.

3. **Post Interactions**: Users can like and comment on posts directly from the feed. They can also view the comments and likes of other users on each post.

4. **User Profiles**: Each user has their own profile that displays their username, profile picture, and a grid of their posts. Users can view their own profile and profiles of other users.

5. **Follow/Unfollow**: Users can follow and unfollow other users to stay updated with their posts in their home feed.

6. **Explore**: Users can explore posts from other users outside their following list. The explore section showcases popular and trending posts.

7. **Search**: Users can search for other users by their username and view their profiles.

8. **Notifications**: Users receive notifications about new likes, comments, and follows.

## Installation

To install and run the InstagramRN application locally, follow these steps:

1. Make sure you have **Node.js** and **npm** (Node Package Manager) installed on your machine.

2. Clone the repository using the following command:

   ```bash
   git clone https://github.com/MuhammedMikayilov/InstagramRN.git
   ```

3. Navigate to the project's directory:

   ```bash
   cd InstagramRN
   ```

4. Install the required dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm start
   ```

   This will start the Metro bundler and provide you with a QR code in the terminal.

6. You can run the application on a connected device or emulator using one of the following commands:

   - For iOS:

     ```bash
     npm run ios
     ```

   - For Android:

     ```bash
     npm run android
     ```

   Make sure you have the necessary development environment set up for iOS or Android development.

## Usage

Once the InstagramRN application is running on your device or emulator, you can use the following instructions to navigate and interact with the app:

- **Sign Up**: If you don't have an account yet, click on the "Sign Up" button and provide your email and password to create a new account.

- **Log In**: If you already have an account, click on the "Log In" button and enter your email and password to sign in.

- **Home Feed**: After signing in, you will be directed to the home feed screen. Scroll through the feed to see posts from users you follow. Interact with posts by liking, commenting, or tapping on the user's profile picture to view their profile.

- **Profile**: Tap on your own profile picture or username at the bottom tab bar to view your profile. From here, you can edit your profile information, view your posts, and manage your followers and following.

- **Explore**: Tap on the "Explore" icon at the bottom tab bar to discover popular posts from users outside your

 following list.

- **Search**: Access the search functionality by tapping on the "Search" icon at the bottom tab bar. Enter a username to search for a specific user and view their profile.

- **Notifications**: Notifications about new likes, comments, and follows will appear in the notifications tab.

- **Log Out**: To log out of your account, go to the profile screen and tap on the settings icon. From there, select "Log Out" to sign out of your account.

## Dependencies

The InstagramRN application relies on the following major dependencies:

- [React Native](https://reactnative.dev/): A JavaScript framework for building native mobile applications.
- [Firebase](https://firebase.google.com/): A comprehensive app development platform providing various services, including authentication and database management.
- [React Navigation](https://reactnavigation.org/): A routing and navigation library for React Native applications.

For a complete list of dependencies and their versions, please refer to the `package.json` file in the repository.

## Contributing

Contributions to the InstagramRN project are welcome! If you find a bug or have a feature suggestion, please open an issue in the [GitHub repository](https://github.com/MuhammedMikayilov/InstagramRN/issues).

If you wish to contribute to the codebase, please follow the guidelines outlined in the [CONTRIBUTING.md](https://github.com/MuhammedMikayilov/InstagramRN/blob/main/CONTRIBUTING.md) file.

## License

The InstagramRN project is open-source and released under the [MIT License](https://opensource.org/licenses/MIT). Feel free to modify and distribute the codebase as per the terms of the license.
