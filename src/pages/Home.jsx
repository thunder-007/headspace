import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import NotificationBar from '../components/NotificationBar'
import HomeCards from "../components/HomeCards.jsx";
import HeadspaceStories from "../components/HeadStories.jsx";
import Wellness from "../components/childComponents/Wellness.jsx";
import HeadspaceStats from "../components/childComponents/Stats.jsx";
import {LampDemo} from "../components/Lamp.jsx";
const Home = () => {
  return (
    <>
    <NotificationBar/>
    <Navbar/>
    <Landing/>
      <HomeCards/>
      <HeadspaceStories/>
      <Wellness/>
      <HeadspaceStats/>
      <LampDemo/>
    </>
  )
}

export default Home