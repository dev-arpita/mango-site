import Underline from './Underline'

function About() {
    return(
       <section className="about-us" id="about-us">
            <h2 className="title about-title">The king of mangoes in India</h2>
            <Underline/>
            <div className="grid">
                <p className="subtitle about-subtitle">
                    Unmatched in taste with a pleasing aroma and flavour our range of Alphonso mangoes
                    have been procured from our mango orchards. Each and every mango is handpicked by our workers. The best ones are then sorted out and then sent
                    into the market. Alphonso mangoes are considered the best mangoes and have a unique as well as excellent taste. The unique taste
                    and sizes of Alphanso mangoes have earned them a wide client base in the national as well ad international arena.
                </p>
                <img className="img"
                    src="https://images.unsplash.com/photo-1622955658214-d05c1c6fcf84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                    alt="Ripe mangoes are hanging from the tree" />
            </div>
        </section>
    )
}
export default About
