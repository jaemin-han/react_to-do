import React from 'react';

class Task{
  constructor(name, desc) {
    this.name = name;
    this.desc = desc;
  }
}

const TaskList = props => (
  <div className="list-group">
      <strong>{props.title}</strong>{props.desc}
    </button>
  </div>
);


 export default Task;
