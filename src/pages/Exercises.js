import React from "react";
import ExerciseList from "../components/ExerciseList"
import Welcome from "../components/Welcome";
import AddButton from "../components/AddButton";

class Exercises extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  
  state = {
    data: [],
    loading: true,
    error: null
}

async componentDidMount(){
    await this.fetchExercises()
}

fetchExercises = async () => {
    try {
        let res = await fetch('http://localhost:8000/api/exercises')
        let data = await res.json()

        this.setState({
            data,
            loading: false
        })
        
    } catch (error) {
        this.setState({
            loading: false,
            error
        })
    }
}

  render() {
    return (
      <div>
        <Welcome username="John" />
         
         <ExerciseList exercises={this.state.data}/>

         <AddButton/>
        
      </div>
    );
  }
}

export default Exercises;
