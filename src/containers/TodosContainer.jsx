import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos, { changeInput, insert, toggle, remove } from '../modules/todos';
import { increase } from '../modules/counter';
import Todos from '../components/Todos';
import useActions from '../lib/useActions';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const [onChangeInput, onInsert, onToggle, onRemove, onIncrease] = useActions(
    [changeInput, insert, toggle, remove, increase],
    [],
  );
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
      onIncrease={onIncrease}
    ></Todos>
  );
};

export default React.memo(TodosContainer);
