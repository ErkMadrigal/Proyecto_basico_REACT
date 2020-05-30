import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Task from './Task'

class Tasks extends Component{
    render(){
        return this.props.tasks.map(task => 
            <Task 
            task={task} 
            key={task.id} 
            deletedTask={this.props.deletedTask}
            checkDone={this.props.checkDone}/>) 
    }
}

Task.PropType={
    tasks: PropTypes.array.isRequired 
}

export default Tasks;