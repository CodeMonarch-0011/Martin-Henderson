import "../../style/main.css"
import martin_img from "/images/martin (1).jpeg"

export function Section1 () {
    return (
        <section className="section-1 increase-top-paddding" id="story">

            <div className="section-1-img">
                <img src={martin_img} alt="martin-img" />
            </div>


            <div className="section-1-body">
                <div className="section-1-header">
                    <span> Early Life: </span>
                   <span> The Making of a Performer </span>
                </div>
            
                
                <div className="section-1-body-cnt">
                    Born on October 8, 1974, in Auckland, New Zealand, Martin Henderson was introduced to acting at the age of 13 when he appeared in the local television production Strangers (1989).  He attended Birkenhead Primary, Northcote Intermediate, and Westlake Boys High School, where he balanced academics with a passion for rugby, playing as a flanker. 
                    Despite initial plans to study science and business at university, Martin chose to pursue acting full-time, a decision that would set the stage for an international career. <br />
                    Martin’s first significant role came in the early 1990s when he was cast as Stuart Neilson in the New Zealand soap opera Shortland Street, a role he played from 1992 to 1995.  This role made him a household name in his home country and showcased his talent to a broader audience.  
                </div>
            </div>
        
        </section>
    )
}