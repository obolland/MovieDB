import React from 'react'

const About = () => (
    <div>
        <div className="ml-5 mr-5">
            <h2>Movie DB</h2>
            <h4>'universal app' built using the NextJS framework.</h4>
            <p>I've built this to showcase the latest features of the ever-evolving
                Next JS framework. This app demonstrates the 'universal' features
                of Next JS, including automatic code splitting and the utilisation of
                both Serverless side rendering
                (the API routes in this application where built using serverless functions),
                and statically generated HTML.<br />
                Google Firestore was used for the backend.
                <br/>
            </p>
        </div>
    </div>
)

export default About;