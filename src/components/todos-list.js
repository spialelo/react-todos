import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';



class TodosList extends React.Component {
  
  constructor() {
    super();
    this.renderItems = this.renderItems.bind(this);
  }
  
  
  
  renderItems(){
    return _.map(this.props.todos, 
                 (todo, index) => <TodosListItem key={index} {...todo}/> );
                 
  }
  
  
  
  render(){
    
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
    
  }
  
}


export default TodosList;