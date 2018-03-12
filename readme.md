##### Kiwitype

### A typing practice application
I'm a typist. I worked a summer as a transcriptionist, I have over 500 races on http://TypeRacer.com, and my wpm hovers around 90. I tend to gravitate towards things that resonate with me when deciding on a project, and I wanted to work with React-Redux this time around, so a nice, clean, single page Typing practice application was a perfect project idea.

### My goal
for this project was to attempt to expand on my understanding of more workplace-oriented developent environment. I learned Webpack to set up my development boilerplate, and challenged my understanding of React by learning and implementing Redux for state management (I love it!). I focused on development practices like letting my data shape my application and trying to write DRY code. I learned a lot about ES6 notation and how you should structure your directory tree (this is the first and last time I want to split them up by component/container), and I further developed my understanding of Rails/Sinatra. I'm pleased with the result!


#### __User Stories__
The idea beind the app is simple. You open it, you type, and you have a few options for tracking your speed.

- The User should be able to immediately use the core function of the app, the typing test.

- The user has the option to create an account, so as to track their high scores against other users and on specific excerpts.

- The user may select any specific excerpt listed

- The user can drop a modal from a button to view various statistics collected about their typing


### Technologies used
#### __Node.js__
- **React** as my front-end single page framework, with 
- **Redux** implemented for state management
- **Webpack** for development & the webpack dev server
- **Superagent** for http requests
- **Thunk** for asnychronous request handling

#### __Sinatra__
- To build the Ruby API designed to interface with the database

#### __PostgreSQL__
- Back end database

#### __js / css / html__
- **General** web building tools and applications


### Wireframes and user flow work
#### __Original idea considerations__
![Original ideas](https://github.com/webermn15/kiwitype/blob/master/dist/public/IMG_3856.JPG)


##### __Front page first look wireframe__
![Front page wireframe](https://github.com/webermn15/kiwitype/blob/master/dist/public/IMG_3857.JPG)


##### __Structuring files and thinking about how I wanted my state to look__
![File structure/state shape](https://github.com/webermn15/kiwitype/blob/master/dist/public/IMG_3857.JPG)


##### __Thinking about data in the shape of Redux actions__
![Action flow](https://github.com/webermn15/kiwitype/blob/master/dist/public/IMG_3859.JPG)