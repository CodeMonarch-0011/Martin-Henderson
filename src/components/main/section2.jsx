import "../../style/main.css"
import martin_img from "/images/martin (6).jpeg"

export function Section2 () {
    return (
        <section className="section-2" id="tv-success">

            <div className="section-2-img">
                <img src={martin_img} alt="martin-img" />
            </div>


            <div className="section-2-body">
                <div className="section-2-header">
                    <span> Television Success: </span>
                   <span> Transition to International Roles </span>
                </div>
            
                
                <div className="section-2-body-cnt">
                    In the late 1990s, Martin moved to Australia and then to the United States to further his acting career. His breakout Hollywood role came in 2002 when he starred opposite Naomi Watts in the horror film The Ring, which was both a critical and commercial success. <br />
                    Following this, he appeared in a variety of films, including Windtalkers (2002), Torque (2004), Bride & Prejudice (2004), and Little Fish (2005), showcasing his versatility across different genres. <br />
                    Martin continued to build his television career with notable roles such as Dr. Ben Keeton in Off the Map (2011) and Dr. Nathan Riggs in Grey’s Anatomy from 2015 to 2017.  His performances in these medical dramas earned him recognition and solidified his status as a leading actor on television
                </div>
            </div>
        
        </section>
    )
}