import React from 'react'
import Def from './default'

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div>
                    <img src="http://placekitten.com/600/600" alt="PlaceKitten" />
                </div>
                <p>Oops, sorry, we can't find this page!</p>
                <a href="/"><button className="btn btn-primary">Home Page</button></a>
            </main>
        </Def>
    )
}

export default error404
