import "../../style/main.css"
import martin_img from "/images/martin (5).jpeg"

export function Section5 () {
    return (
        <section className="section-2" id="life">
            <div className="section-2-img short-img">
                <img src={martin_img} alt="martin-img" />
            </div>


            <div className="section-2-body">
                <div className="section-2-header">
                    <span> Personal Life: </span>
                   <span> A Private Individual </span>
                </div>
            
                
                <div className="section-2-body-cnt">
                    Martin is known for keeping his personal life private. As of 2017, he resides in Los Angeles with his dog.  He has been linked to various relationships over the years, including a reported relationship with interior designer Penny Hay. 
                </div>
            </div>

        </section>
    )
}