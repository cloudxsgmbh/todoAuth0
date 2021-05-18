import React from 'react'
import logo from './logo.svg';
import Header from './components/Header'
import Item from './components/Item'
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      newItemValue: '',
      items: [
        {text:"First todo", done:false},
        {text:"Second todo", done:true}
      ]
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
  }

  handleChange(event) {
    this.setState({newItemValue: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();

    let items = this.state.items.slice()

    items.push({
      text: this.state.newItemValue,
      done:false
    })

    this.setState({
      newItemValue: '',
      items: items
    })
  }

  toggleTodo(index) {
    let items = this.state.items.slice()
    let item = items[index]
    item.done = !item.done

    this.setState({items: items})
  }

  render(){
    return (
      <div className="App">
        <Header />

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="New todo..." value={this.state.newItemValue} onChange={this.handleChange} />
          <input type="submit" value="Add Item" />
        </form>

        <ol>
          {this.state.items.map((item,index) => (
            <Item key={index} clickHandler={()=> this.toggleTodo(index)} text={item.text} done={item.done} />
          ))}
        </ol>
      </div>
    );
    }
}

export default App;
