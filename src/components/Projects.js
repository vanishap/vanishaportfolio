import Footer from "./Footer";
import Title from "./Title";

const Projects = ()=>{
    return (
        <div >
            <Title />
            
           
            <div className="project-details">
            <h3 > Food delivery app</h3>
            <ul >
                <li>Developed large scale online food application from scratch
                    using reusable UI components with ReactJs library.</li>
                <li>Created reusable functional components.</li> 
                <li>Used react-hooks for building the app.</li>
                <li>Consumed API from network requests and fetched the data to display on the application.</li> 
                <li>Built shimmer UI while the page was loading.</li>     
                <li>Built search functionality.</li>  
                <li>Used Tailwind CSS to add styles to the app.</li>  
                <li>Implemented routing by using react-router-dom.</li>  
                <li>Optimised the application's performance by code splitting.</li>
                <li>Maintained the state of application using Redux Tool Kit.</li>          
            </ul>
            <h3 >Birthday remainder app</h3>
            <ul >
                <li>Consumed random API to fetch data.</li>
                <li>Used useState hook to initialise the state.</li>
                <li>Iterated over the data using map method.</li>
            </ul>
            <h3 >JavaScript Coding</h3>
            <ul ><li>Challenging my problem solving skills by everyday coding practices.</li></ul>
            </div>
            <Footer / >
        </div>
    )
}
export default Projects;

