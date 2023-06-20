import { motion } from "framer-motion";
import { useEffect } from "react";

function About({ setIsAbout }) {
    useEffect(() => setIsAbout(true), []);

    return (
      <motion.div
        className="container"
        style={{ textAlign: "center", marginTop: "10%", marginBottom: '10%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h3>About Bridging Binaries</h3>
        <p style={{textAlign: 'left', whiteSpace: 'pre-wrap', paddingTop: '15px'}}>
        This is an attempt to showcase the works of nine independent architectural practices from a South Asian city. These practices are led by a new breed of young and committed architects who have their works rooted in the same context but not necessarily manifested in a similar manner. They all graduated from the same school of architecture in the first decade of this millennium and all are practicing in Dhaka, the capital of Bangladesh, an ever-expanding megacity of twenty-three million.
        <br /><br />
        Their romance with architecture started in a time that is marked by rapid changes in every single facet of our life. It was a new era facilitating the exchange of ideas and offering an unimaginable degree of exposure through the World Wide Web. It was also an era of unprecedented economic growth in Bangladesh, followed by an inevitable boom in the construction industry. But in this seemingly optimistic atmosphere the journey they embarked upon was rather syncopated, not sustained in the sense that the growth in different segments associated with the production of architecture in the local context was highly uneven, and thus the state of the art often deliriously existed side by side with the ancient in an almost surreal state. Architecture of this least developed country was also still sanctimoniously confined in its socially exclusive domain.
        <br /><br />
        Their generation initiated the expansion of the boundary of mainstream architectural practice in Bangladesh. They dared to operate simultaneously between the elitist and the egalitarian notion of architecture, between the conventional urban epicenter and the rural hinterland. Bypassing the conflict of all apparent binary oppositions like automation and labor or refined and crude, they focused on harnessing strength from the tension of these oppositions and often on bridging the gaps through magical fusion. Discretely their highly innovative architectural practices grew on the essence of the place, relied on design research as well as experiment, and evolved around the spirit of resilience and inclusiveness.
        </p>
      </motion.div>
    );
}

export default About;