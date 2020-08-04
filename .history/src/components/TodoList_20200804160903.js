import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = ({ todos }) => (
    <ul className='todo-list'>
        {todos && todos.length
         ? todos.map((todo) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />
           })
         : "No todos, yeah!"
        }
    </ul>
);

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
}

export default connect(mapStateToProps)(TodoList);