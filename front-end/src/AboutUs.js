import { Link } from 'react-router-dom'
import './AboutUs.css'
import{useState,useEffect} from 'react'
import axios from 'axios'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs= props => {
  const [header, setHeader] = useState([])
  const [bio, setBio] = useState('')
  const [images, setImages] = useState('')
  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState('')

  const fetchPage = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
      .then(response => {
        // axios bundles up all response data in response.data property
        const header= response.data.header
        setHeader(header)
        const bio = response.data.bio;
        setBio(bio)
        const images = response.data.images
        setImages(images);
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        // the response has been received, so remove the loading icon
        setLoaded(true)
      })
  }

  useEffect(() =>{
    fetchPage()
  },[])


  return (
    <>
      <h1>{header}</h1>
      <p>{bio}</p>
      <img src={images} alt='profile'></img>
    
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
