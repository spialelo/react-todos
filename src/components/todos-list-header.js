import React from 'react';

class TodosListHeader extends React.Component {
  
  
  render() {
    return (
      <thead>
          <tr>
            <th className="">Task</th>
            <th>Actions</th>
          </tr>
        </thead>
    );
  }
  
  
}


export default TodosListHeader;