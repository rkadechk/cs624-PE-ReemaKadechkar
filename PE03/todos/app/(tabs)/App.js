import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Input from './Input';
import Heading from './Heading';
import TodoList from './TodoList';
import TabBar from './TabBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      filter: 'All'
    };
  }

  deleteTodo = (todoIndex) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.todoIndex !== todoIndex)
    }));
  }

  toggleComplete = (todoIndex) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.todoIndex === todoIndex
          ? { ...todo, complete: !todo.complete }
          : todo
      )
    }));
  }

  inputChange = (inputValue) => {
    console.log('Input Value:', inputValue);
    this.setState({ inputValue });
  }

  addTodo = () => {
    const { inputValue, todos } = this.state;
    if (inputValue.trim() === '') return;

    this.setState({
      todos: [...todos, {
        title: inputValue,
        todoIndex: Date.now(),
        complete: false,
      }],
      inputValue: '',
    }, () => console.log('State:', this.state));
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    if (filter === 'All') return todos;
    if (filter === 'Active') return todos.filter(t => !t.complete);
    if (filter === 'Complete') return todos.filter(t => t.complete);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {/* Content Area */}
        <View style={styles.contentContainer}>
          <ScrollView
            keyboardShouldPersistTaps="always"
            contentContainerStyle={styles.scrollContent}
          >
            <Heading />
            <Input
              inputValue={inputValue}
              inputChange={this.inputChange}
            />
            <TodoList
              toggleComplete={this.toggleComplete}
              deleteTodo={this.deleteTodo}
              todos={this.getFilteredTodos()}
            />
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.button} onPress={this.addTodo}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={styles.tabBarWrapper}>
            <TabBar
                filter={this.state.filter}
                setFilter={(filter) => this.setState({ filter })}
            />
        <View style={{ height: 40 }} />  
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
  },
  tabBarWrapper: {
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    backgroundColor: '#ffffff',
  },
});

export default App;
