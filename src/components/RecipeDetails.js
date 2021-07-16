import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';


const RecipeDetail =(props)=>{
    
        const {name} = useParams()
// console.log(props)
let currentItem
        Object.keys(props.recipereducer).map((key)=>{
        // console.log(props.recipereducer[key])
                if(props.recipereducer[key].recipe.label === name){
                        
                        currentItem = props.recipereducer[key]
                }
                return null
        })
        console.log(currentItem)
        let sharLink = currentItem?currentItem.recipe?currentItem.recipe.shareAs:'#':'#'
        return(
            <>
            <h4 className='link'><Link to ='/'>home</Link></h4>
            <div>Welcome to recipe detail page</div>
            
            <Card className="text-center">
                <Card.Header>Recipe Details</Card.Header>
                <Card.Body>
                <Card.Title><p>{name}</p></Card.Title>
                <Card.Text>
                For more detail on the recipe please follow :
                </Card.Text>
                <Card.Link href={sharLink} target='_blank'>This Link</Card.Link>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </>
        )
    
}

function mapStateToProps(state){
        return state;
}


export default connect(mapStateToProps,null)(RecipeDetail);
