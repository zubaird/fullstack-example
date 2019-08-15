import React from 'react' 
import ReactDOM from 'react-dom'
import axios from 'axios'

const APIendpoint = "http://localhost:3000/donuts"


// Create Component 
class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {donuts:[]}

        axios.get(APIendpoint)
            .then(donuts => {
                console.log(donuts);
                this.setState({donuts: donuts.data})
            })
    }


    render(){
        return (
            <>
                <h1>Quiz Questions!</h1>
                <ul>
                    {this.state.donuts.map(donut => <li>{donut.donut_name}</li>)}
                </ul>

                
            </>
        )
    }
}




// Render stuff to the DOM
ReactDOM.render(<App />,document.getElementById('app'));