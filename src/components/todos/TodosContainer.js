import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo';

class TodosContainer extends Component {

  renderTodos = () => {
    return this.props.todos.map(todo => <Todo key={todo.id} delete={this.props.delete} todo={todo} />)
  }
  
  render() {
    return(
      <ol>
        {this.renderTodos()}
      </ol>
    );
  }

}
  
  const mapStateToProps = state => {
    return {
      todos: state.todos
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      delete: todoText => dispatch({type: 'DELETE_TODO', todoText})
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);