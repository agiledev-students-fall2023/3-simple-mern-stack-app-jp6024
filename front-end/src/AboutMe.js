import { Link } from 'react-router-dom'
import './AboutMe.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutMe= props => {
  return (
    <>
      <h1>About Me!</h1>
      <p>Thanks for taking a look.</p>
        <img src="https://cdn.discordapp.com/attachments/389883405199736833/1156592754701377536/IMG_4807.jpg?ex=65158871&is=651436f1&hm=bb44e73f4ed16016c69b297ec4d119588292b28a6e035736c0e6813e9c4cd1a8&" alt='profile'></img>
        <p>
        My name is Janet! I'm a Computer Science major at NYU.     </p>
      <p>I like to go on runs by the pier and I have an unhealthy caffeine addiction.</p>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutMe
