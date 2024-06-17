import Hero from "../components/Hero"
import DevsEmployers from "../components/DevsEmployers"
import BrowseJobs from "../components/BrowseJobs"
import AllJobs from "../components/AllJobs"

function Home() {
  return (
    <>
    <Hero/>
    <DevsEmployers />
    <BrowseJobs isHome={true} />
    <AllJobs />
    </>
  )
}

export default Home