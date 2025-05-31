import "../../style/main.css"

function Section3Card ({ title, year, text }) {
    return (
        <div className="section-3-card">
        
            <span>“Played {text} in</span>
            <span>
                <span>{title}</span>
                <span className="highlight" />
            </span>

            <span>{year}”</span>
        </div>
    )
}

export function Section3 () {
    return (
        <section className="section-3" id="films">
            <span className="section-3-header"> Filmography & Television Highlights </span>

            <div className="section-3-grid">
                <Section3Card title="Shortland Street" year="1992–1995" text="Stuart Neilson" />
                <Section3Card title="The Ring" year="2002" text="Noah Clay" />
                <Section3Card title="Torque" year="2004" text="Cary Ford" />
                <Section3Card title="Bride & Prejudice" year="2004" text="Will Darcy" />
                <Section3Card title="Little Fish" year="2005" text="Ray" />
                <Section3Card title="Flyboys" year="2006" text="Reed Cassidy" />
                <Section3Card title="Smokin’ Aces" year="2006" text="Hollis Elmore" />
                <Section3Card title="Battle in Seattle" year="2007" text="Jay" />
                <Section3Card title="Off the Map" year="2011" text="Dr. Ben Keeton" />
                <Section3Card title="Everest" year="2015" text="Andy ‘Harold’ Harris" />
                <Section3Card title="Miracles from Heaven" year="2016" text="Kevin Beam" />
                <Section3Card title="Grey’s Anatomy" year="2015–2017" text="Dr. Nathan Riggs" />
                <Section3Card title="X" year="2022" text="X" />
                <Section3Card title="Virgin River" year="2019–present" text="Jack Sheridan" />
            </div>
        </section>
    )
}