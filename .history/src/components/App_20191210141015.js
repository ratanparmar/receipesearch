import React , { Component } from 'react'

import Searchbar from './Searchbar'

class App extends Component{
    render(){
        return(
            <div>
                <h2> Welcome to food finder!
                </h2>
                <div>
                    <Searchbar/>
                </div>
            </div>
        )
    }
}

export default App;