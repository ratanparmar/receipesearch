import React,{ Component } from 'react'
import {Form, FormControl,FormGroup,FormLabel,Button} from 'react-bootstrap'

class Searchbar extends Component{
    render(){
        return(
            <Form inline>
                <FormGroup>
                    <FormLabel>Ingredients</FormLabel>
                    {''}
                        <FormControl type="text" placeholder='garlic,chicken'/>
                </FormGroup>
                {''}
                <FormGroup>
                    <FormLabel>Dish</FormLabel>
                    {''}
                    <FormControl type="text" placeholder='butter chicken'/>
                </FormGroup>
                {''}
                <Button >Submit</Button>
            </Form>
        )
    }
}
export default Searchbar;