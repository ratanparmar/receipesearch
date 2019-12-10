import React,{ Component } from 'react'
import {Form, FormControl,FormGroup,ControlLabel,Button} from 'react-bootstrap'

class Searchbar extends Component{
    render(){
        return(
            <Form inline>
                <FormGroup>
                    <ControlLabel>Ingredients</ControlLabel>
                        <FormControl type="text" placeholder='garlic,chicken'/>
                </FormGroup>
                <FormGroup>

                </FormGroup>
                <Button >Submit</Button>
            </Form>
        )
    }
}
export default Searchbar;