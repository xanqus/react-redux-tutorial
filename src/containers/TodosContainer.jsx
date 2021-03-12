import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import { increase } from '../modules/counter';
import Todos from '../components/Todos';

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
  number,
  increase,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
      onIncrease={increase}
    ></Todos>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInput: (input) => {
    dispatch(changeInput(input));
  },
  insert: (text) => {
    dispatch(insert(text));
  },
  toggle: (id) => {
    dispatch(toggle(id));
  },
  remove: (id) => {
    dispatch(remove(id));
  },
  increase: () => {
    dispatch(increase());
  },
});

export default connect(
  ({ todos, counter }) => ({
    input: todos.input,
    todos: todos.todos,
    number: counter.number,
  }),
  mapDispatchToProps,
)(TodosContainer);
