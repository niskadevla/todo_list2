import React, {Component} from 'react';
import './App.css';
import TaskList from './TodoList/TaskList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1 className="title">
            <a href="/">Todo list</a>
          </h1>
        </header>

        <TaskList />
      </div>
    );
  }
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [
//         {
//           text: 'Buy bread',
//           read: false,
//           edit: false,
//         },
//         {
//           text: 'Buy butter',
//           read: false,
//           edit: false,
//         },
//         {
//           text: 'Buy milk',
//           read: false,
//           edit: false,
//         },
//       ]
//     }
//   }
//
//   edit(isEdit) {
//     alert('isEdit');
//     console.log(this.state);
//     this.setState({tasks: [
//         {
//           text: 'Buy bread',
//           read: false,
//           edit: isEdit,
//         },
//         {
//           text: 'Buy butter',
//           read: false,
//           edit: isEdit,
//         },
//         {
//           text: 'Buy milk',
//           read: false,
//           edit: isEdit,
//         },
//       ]
//     })
//   }
//
//   render() {
//     const {tasks} = this.state;
//     return (
//       <div className="container">
//         <header>
//           <h1 className="title">Todo list</h1>
//         </header>
//
//         {tasks.map((task, key) => <Task key={key}
//                                         className='task'
//                                         onEdit={isEdit => this.edit(isEdit)}>
//                                           {task.text}
//                                   </Task>)}
//       </div>
//     );
//   }
// }

export default App;
