import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

import './App.css';

import Header from './components/Header';
import Item from './components/Item';

const App = (): JSX.Element => {

  const { isAuthenticated } = useAuth0();

  interface IItems {text: string, done:boolean}

  const [newItemValue, setNewItemValue] = useState('');
  const [items, setItems] = useState<IItems[]>([]);

  useEffect(() => {
    setItems([
      {text:"First todo", done:false},
      {text:"Second todo", done:true}]);
  },[]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewItemValue(event.target.value);
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setItems([...items, {
      text: newItemValue,
      done: false
    }]);
    setNewItemValue('');
  }

  function toggleTodo(index: number) {
    items[index].done = !items[index].done;
    setItems([...items]);
  }

  return (
  
      <div id="app" className="d-flex flex-column h-100">
        <Header />
        {isAuthenticated && (
          <Container>
            <Row>
              <Col>
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="New todo..." value={newItemValue} onChange={handleChange} />
                  <input type="submit" value="Add Item" />
                </form>

                <ol>
                  {items.map((item, index) => (
                    <Item key={index} clickHandler={()=> toggleTodo(index)} text={item.text} done={item.done} />
                  ))}
                </ol>
              </Col>
            </Row>
          </Container>
        )}
      </div>
  );
}

export default App;
