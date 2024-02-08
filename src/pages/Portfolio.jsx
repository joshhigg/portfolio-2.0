import Project from '../components/Project'

const project1 = {
  name: 'Social Syntax',
  link: 'https://social-syntax-1f22eb865286.herokuapp.com/',
  source: "assets/social.syntax.png",
  desc: 'Javascript, Express, mySql, Node, handlebars',
  ghLink: 'https://github.com/joshhigg/syntax-social'
}

const project2 = {
  name: 'Weather Dashboard',
  link: 'https://joshhigg.github.io/weather-dashboard/',
  source: "assets/weather.dashboard.png",
  desc: 'Javscript, HTML, CSS, APIs',
  ghLink: 'https://github.com/joshhigg/weather-dashboard'
}

const project3 = {
  name: 'Notes App',
  link: 'https://note-taker-wip6.onrender.com/',
  source: "assets/notes.app.png",
  desc: 'Javascript, Express, HTML, CSS',
  ghLink: 'https://github.com/joshhigg/note-taker'
}

const project4 = {
  name: 'Tech Blog',
  link: 'https://higgtechblog-d9f097e3a062.herokuapp.com/',
  source: "assets/tech.blog.png",
  desc: 'Javascript, Express, Node, handlebars, sequilize',
  ghLink: 'https://github.com/joshhigg/tech-blog'
}

const project5 = {
  name: 'Employee Tracker',
  link: 'https://github.com/joshhigg/employee-tracker',
  source: "assets/employee.tracker.png",
  desc: "Javascript, mySQL, Node",
  ghLink: 'https://github.com/joshhigg/employee-tracker'
}

const project6 = {
  name: 'Daily Planner',
  link: 'https://joshhigg.github.io/daily-planner/',
  source: "assets/daily.planner.png",
  desc: "HTML, CSS, Javascript",
  ghLink: 'https://github.com/joshhigg/daily-planner'
}

export default function Portfolio() {
    return (
      <div>
        <h1 className='portfolio-title'>Portfolio</h1>
        <div className='portfolio'>
          <Project name={project1.name} link={project1.link}
            source={project1.source} desc={project1.desc} ghLink={ project1.ghLink }/>
          <Project name={project2.name} link={project2.link}
            source={project2.source} desc={project2.desc} ghLink={ project2.ghLink }/>
          <Project name={project3.name} link={project3.link}
            source={project3.source} desc={project3.desc} ghLink={ project3.ghLink }/>
          <Project name={project4.name} link={project4.link}
            source={project4.source} desc={project4.desc} ghLink={ project4.ghLink }/>
          <Project name={project5.name} link={project5.link}
            source={project5.source} desc={project5.desc} ghLink={ project5.ghLink }/>
          <Project name={project6.name} link={project6.link}
            source={project6.source} desc={project6.desc} ghLink={ project6.ghLink }/>
        </div>
      </div>
    );
  }
