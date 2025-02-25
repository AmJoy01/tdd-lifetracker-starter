import Navbar from "components/Navbar/Navbar"
import "./ActivityFeed.css"
import { Link } from "react-router-dom"

export default function ActivityPage(){
    <Navbar/>
    return(
        <div className="activity-feed">
            <div className="container">
                <div className="actions">
                    <h2>Activity Feed</h2>
                    <div className="btns">
                        
                        <Link to="/exercise/create">
                        <button className="Button outline small outline gold">Add Exercise</button>
                        </Link>
                        <button className="Button outline small outline blue">Log Sleep</button>
                        <Link to ="/nutrition/create">
                        <button className="Button outline small outline aqua">Record Nutrition</button>
                        </Link>
                    </div>
                </div>
                {/* End of actions */}
                <div className="stats">
                    <div className="main">
                        <div className="SummaryStat large gold">
                            <div className="background">
                                <p>Total Exercise Minutes</p>
                                <h1>0</h1>
                            </div>
                        </div>
                        <div className="SummaryStat large purple">
                            <div className="background">
                                <p>Avg Sleep Hours</p>
                                <h1>0</h1>
                            </div>
                        </div>
                        <div className="SummaryStat large aqua">
                            <div className="background">
                                <p>Avg Daily Calories</p>
                                <h1>0</h1>
                            </div>
                        </div>
                    </div>
                    {/* End of main */}
                    <h4>More Stats</h4>
                    <div className="more">
                        <div className="SummaryStat small teal">
                            <div className="background">
                                <p>Maximum Hourly Calories</p>
                                <h1>0</h1>
                            </div>
                        </div>
                        <div className="SummaryStat small orange">
                            <div className="background">
                                <p>Avg Exercise Intensity</p>
                                <h1>0</h1>
                            </div>
                        </div>
                        <div className="SummaryStat small red">
                            <div className="background">
                                <p>Total Hours Slept</p>
                                <h1>0</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}