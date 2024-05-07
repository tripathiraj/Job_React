import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListing from "../components/JobListing"
import JobListings from '../components/JobListings';
import Card from '../components/Card';
import VeiwAllJobs from '../components/VeiwAllJobs';

const HomePage =()=>{
    return(
        <>
        <Hero/>
        <HomeCards/>
        <JobListing isHome ={true}/>
  
        <VeiwAllJobs/>
     
        
        </>
    )
}
export default HomePage;