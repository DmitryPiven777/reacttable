import React, { useEffect, useState } from 'react';

function App() {

  const [todo, setTodo] = useState('');                   // отдельный стэйт для инпута
  const [todos, setTodos] = useState([]);                  // отдельный стэйт для списка
  
  const [plantodos, setPlantodos] = useState([]);         // стэйт для второго списка (с чекбоксом)
  const [check, setCheck] = useState(false);              // стэйт для чекбокса


  
                                                            //прослушиватель события ввода для input. Для onChange создаем функцию, которая принимает событие ввода, берёт target.value - это то, что вводит пользователь
  function onChan(event) {  
    setTodo(event.target.value);
  }

  function onChan1() {  
    setCheck(prevState => !prevState);
  }

  // function onChan2() {  
  //   if (check == false) {
  //  } else 
  // }
                                                                         // addTodo ничего не принимает, внутри него берем стэйт и пушим в prevState
  const addTodo = (event) => { 
                                                                        // эта строка нужна, чтоб страница не перезагружалась:
    event.preventDefault(); 

    // const newTodo = {

      // name: todo,
      // isCanceled: false
      // };

      if (check == false) {
      setTodos(prevState => [...prevState,todo]);    
        
                                                                                  // prevState переопределяет текущее состояние с параметрами последнего состояния

            } else setPlantodos(prevState => [...prevState,todo]);

      setTodo('');                                            // передаём сюда пустую строку для очищения инпута  после нажатия клика

      <button onClick={addTodo}>Добавить задачу</button>
    }

                                                                                      // функция удаления тудушки
    function remove(index) {  
      setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
    }

    function remove2(index) {  
      setPlantodos([...plantodos.slice(0, index), ...plantodos.slice(index + 1)]);
    }


//в input добавил пропы value и onChange и передал в них стэйт todo и функцию onChange соответственно 

    //в checked  кладется состояние, выбран или нет
    //в onChange чекбокса передается функция prevState - предыдущее состояние, по-умолчанию оно у нас в false
    // prevState=>!prevState - говорит о том что мы возвращаем обратное предыдущему состоянию, т.е. если там лежит false клик по чекбоксу запишет в check true и наоборот
  
    return (    
  <>

<div style={{
  margin:30
}}>
    <form action="">

      <input value={todo} onChange={onChan} />  

      <button onClick={addTodo}>Добавить задачу</button>
    </form>
</div>

    <div style={{
        display:'flex',
        marginLeft: 30
        }}>
          <p>Отложить</p>
          <input type="checkbox" checked={check} onChange={onChan1} />
    </div>

    <div style={{
  display:'flex'
   }}>

      <div style={{
  margin:30
   }}>    
        <h1>Активные задачи</h1>

        <ul>     
            {todos.map((todo,index) =>
                <li key={index}style={{marginBottom:30}}>
                {todo}
                <button onClick={()=>remove(index)} style={{marginLeft:30}}> *удалить* </button>
                </li>)}
        </ul> 

      </div>

      <div style={{
  margin:30
   }}>
        <h1>Отложенные задачи</h1>
        <ul>     
            {plantodos.map((todo,index) =>
                <li key={index}style={{marginBottom:30}}>
                {todo}
                <button onClick={()=>remove2(index)} style={{marginLeft:30}}> *удалить* </button>
                </li>)}
        </ul> 

          {/* так добавлялась только тудушка
          { <ul>                   
          {plantodos.map(todo =>
              <li>{todo}</li>)}
          </ul> */}

      </div>  
    </div>    
  </>
  )
  };

export default App;

