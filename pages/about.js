import React from 'react'

const About = () => (
    <div>
        <div className="ml-5">
            <h2>Movie DB</h2>
            <h4>'universal app' built using the NextJS framework.</h4>
            <p>This app allows a user to view, post, edit and delete movies
                and persists this data across sessions.<br/>
                Please note, it is not actually connected to any database and
                clearing cached data will reset movies to default.
            </p>
        </div>
    </div>
)

export default About;