import React from 'react';

class CreateToDo extends React.Component {
  
  constructor() {
    
    super();
    
    
    
  }
  
  
  
  render() {
    
    return (
      <form>
        <input type="text" placeholder="What do I need to do" />
        <button>Create</button>
      </form>  
    );
    
  } 
  
  
  
}


export default CreateToDo;