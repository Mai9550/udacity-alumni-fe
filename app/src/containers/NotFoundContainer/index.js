import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
// importing the gromment components used in this page
// import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import Header from 'grommet-udacity/components/Header';
import Heading from 'grommet-udacity/components/Heading';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Anchor from 'grommet-udacity/components/Anchor';

class NotFound extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();
    this.renderContent = this.renderContent.bind(this);
  }

  renderContent() {
    // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    // a list of content entries that can be loop over randomly
    const content = [
      {
        original: 'Contemplating banana bread recipes',
        title: 'We could not think of enough banana bread recipes',
        body: 'Learn to make an app that shuffles ingredients endlessly!',
        link: 'https://www.udacity.com/course/ios-developer-nanodegree--nd003',
        description: 'iOS Developer Nanodegree',
      },
      {
        original: 'Reticulating Splines',
        title: 'We did not manage to reticulate all splines',
        body: 'Learn to reticulate inputs to make cars spin their splines autonomously!',
        link: 'https://www.udacity.com/drive',
        description: 'Self-Driving Car Nanodegree',
      },
      {
        original: 'The instructors are getting camera-ready for you',
        title: 'The instructors are not quite camera-ready',
        body: 'Learn to make them look good anyways!',
        link: 'https://www.udacity.com/course/senior-web-developer-nanodegree-by-google--nd802',
        description: 'Senior Web-Developer Nanodegree',
      },
      {
        original: 'The instructor is setting up the classroom',
        title: 'None of the classrooms are currently set up',
        body: 'Learn to create a virtual classroom that is always ready (and needs no brooming)!',
        link: 'https://www.udacity.com/course/vr-developer-nanodegree--nd017',
        description: 'Virtual-Reality Nanodegree',
      },
      {
        original: 'Thanks for waiting while we prepare the classroom',
        title: 'These classrooms take a while to be prepared',
        body: 'Learn to teach machines that need no classrooms!',
        link: 'https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009',
        description: 'Machine Learning Nanodegree',
      },
      {
        original: 'Adding duplication fluid to our ditto machine...',
        title: 'Ran out of duplication fluid',
        body: 'Learn to code and make smart functions do the work!',
        link: 'https://www.udacity.com/course/android-developer-nanodegree-by-google--nd801',
        description: 'Android Developer Nanodegree',
      },
      {
        original: 'Once you have completed the course, cake will be served',
        title: 'There should be some cake here for you.',
        body: 'Learn to make digital cake that almost smells home-made!',
        link: 'https://www.udacity.com/course/vr-developer-nanodegree--nd017',
        description: 'Virtual-Reality Nanodegree',
      },
      {
        original: 'Dust off your slide-rule...',
        title: 'No need for dusty slide-rules',
        body: 'Learn to move the numbers on your computer!',
        link: 'https://www.udacity.com/course/data-analyst-nanodegree--nd002',
        description: 'Data Analyst Nanodegree',
      },
      {
        original: 'Cleaning the whiteboard',
        title: 'Clean up this white board',
        body: 'And fill it up with useful information!',
        link: 'https://github.com/udacityalumni/',
        description: 'Contribute to the Alumni-Web-App',
      },
      {
        original: 'And now for something completely different...',
        title: 'And now for something slightly different...',
        body: 'Learn about Business Analysis, because, you know... money.',
        link: 'https://www.udacity.com/course/predictive-analytics-for-business--nd008',
        description: 'Predictive Analytics for Business Nanodegree',
      },
      {
        original: 'Check the materials section for each class to find helpful course notes and other information from fellow Udacians!',
        title: 'Check out the wiki for this project to find helpful notes from fellow Alumni!',
        body: 'There is enough to read to fill a rainy day!',
        link: 'https://github.com/udacityalumni/resources/wiki',
        description: 'Learn about the Alumni-Web-App',
      },
      {
        original: 'Did you know you can meet other Udacians on the Forums?',
        title: 'Did you know you can meet other Alumnis through contributing?',
        body: 'Bring this page into existence (and learn a lot on the way)!',
        link: 'https://github.com/udacityalumni/',
        description: 'Contribute to the Alumni-Web-App',
      },
      {
        original: 'Waking up the sleepers in the front row...',
        title: 'Good morning front-row-sleeper! Put your dreams onto this page',
        body: 'Become a part of the Developer-Team!',
        link: 'https://github.com/udacityalumni/',
        description: 'Contribute to the Alumni-Web-App',
      },
      {
        original: 'None',
        title: 'Your code here',
        body: 'If it is empty and you want it, come and make it!',
        link: 'https://github.com/udacityalumni/',
        description: 'Contribute to the Alumni-Web-App',
      },
    ];

    // choosing a random entry for the 404 page from content
    const randomArticle = getRandomInt(0, content.length);

    return (
      <Box pad="large" textAlign="center">
        <Box align="center">
          <Heading tag="h3">
            Hello curious adventurer! : )
          </Heading>
          <Paragraph textAlign="center">
            { /* maybe could be smaller font. better would be no linebreak in here */ }
            You've wandered into uncharted territory. 404-Land.<br />If that is right were you belong, then get ready to map!
          </Paragraph>
        </Box>
        <Box align="center">
          <Heading tag="h1" className="problem" alignContent="center">
            { content[randomArticle].title }
          </Heading>
          <Paragraph className="solution">
            { content[randomArticle].body }
          </Paragraph>
          <Anchor className="solution-link" href={ content[randomArticle].link }>
            { content[randomArticle].description }
          </Anchor>
        </Box>
      </Box>
      );
  }

  render() {
    return (
      <div className={styles.notFound}>
        { this.renderContent() }
      </div>
    );
  }
}


const Container = cssModules(NotFound, styles);

export default Container;