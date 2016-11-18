import React from 'react';
import Task from './Task';

const generateTasks = (collection) =>
  Object.keys(collection)
        .map((taskID, i) => (
          <Task
            key={i}
            title={collection[taskID].name}
            desc={collection[taskID].desciption}
          />
        ));


const TaskList = props => (
  <div className="list-group">
  {generateTasks(props.collection)}
  </div>
);

export default TaskList;
