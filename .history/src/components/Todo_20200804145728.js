import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleTodo } from '../redux/actions';

const Todo = ({ todo, toggletodo }) => {
    <li onClick={() => toggleTodo(todo.id)}>
        {todo && todo.complete ? "👌" : "👋"}
        <span>
            {todo.content}
        </span>
    </li>
};