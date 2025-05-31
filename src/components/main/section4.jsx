import "../../style/main.css"
import martin_img from "/images/martin (3).jpeg"

export function Section4 () {
    return (
        <section className="section-1">
            <div className="section-1-img short-img">
                <img src={martin_img} alt="martin-img" />
            </div>


            <div className="section-1-body">
                <div className="section-1-header">
                    <span> Recent Projects: </span>
                   <span> Virgin River and Film Endeavors </span>
                </div>
            
                
                <div className="section-1-body-cnt">
                    Since 2019, Martin has starred as Jack Sheridan in the Netflix romantic drama series Virgin River, a role that has garnered him a new generation of fans.  In addition to his television work, he has appeared in films such as Everest (2015), Miracles from Heaven (2016), and the horror film X (2022), demonstrating his continued presence in both television and cinema. 
                </div>
            </div>

        </section>
    )
}