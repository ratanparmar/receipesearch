import { Component } from 'react'
import { connect } from 'redux'
import { render } from '@testing-library/react'

class RecipeList extends Component{
    render(){
        console.log('this.props',this.props)
        return (
            <div></div>
        )
    }
}


function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps,null)(RecipeList)