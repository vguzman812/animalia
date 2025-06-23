<br/>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#how-to-use">How To Install Locally</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

## Key Features

-   Community Contributions: Empowering users to submit their own well-researched or firsthand animal facts, enriching the collective knowledge base.

-   Expertly Curated: Our initial set of animal facts is extracted from verified sources, meticulously gathered through web scraping techniques using Selenium and BeautifulSoup.

-   Tech Stack: This robust platform is engineered using the MERN stack (MongoDB, Express.js, React, Node.js), ensuring high performance and a responsive user experience.

## How To Use

-   Some images may be blank because media type for that fact may not be a picture.
-   Facts are sorted most recent first.
-   The user can click on an image or name to see an animal fact.
    -   This will bring the user to the fact detail page where they have access to the wikipedia link for that animal, source material, and a media link related to the animal or fact.
-   Users can search for animal by name, or be navigated to a random fact by clicking the "random fact" button in the navigation bar
-   Users can also register or log in by pressing the buttons in the top right of the navigation bar at the top of the screen.
    -   Registering and logging in gives users access to more features such as:
        -   Fact creation
        -   Liking facts
        -   A user dashboard
        -   Admin functionalities if logged in as admin
-   Use the navigation on the bottom of the page to go to more facts.

## How To Install Locally

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/whatever/animalApi.git

# Go into the repository
$ cd animalApi

# Install dependencies
$ npm run build

# Run the app
$ npm run dev
```

<p>Client side should now be running on localhost:5173</p>
<p>API should be running on localhost:8888</p>
<p>Have fun with the local development</p>
