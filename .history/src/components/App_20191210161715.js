import React , { Component } from 'react'

import Searchbar from './Searchbar'
import '../style/index.css'

class App extends Component{
    render(){
        return(
            <div className="App">
                <h2> Welcome to food finder!
                </h2>
                <div className="App">
                    <Searchbar/>
                </div>
            </div>
        )
    }
}

export default App;