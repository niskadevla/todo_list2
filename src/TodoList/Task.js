import React, {Component} from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {edit: false};
  }

  save() {
    const value = this.refs._input.value;
    this.setState({edit: false});
    this.props.onSave(value, this.props.index);
  }

  edit() {
    this.setState({edit: true});
  }

  remove() {
    this.props.onRemove(this.props.index);
  }

  renderNorm() {
    const text = this.props.children;
    return (
      <li className="task">
        <p className="task__text">{text}</p>
        <button className="btn btn-edit" onClick={() => this.edit()}>
          <span className="btn__line btn__line_top"></span>
          <span className="btn__line btn__line_right"></span>
          <span className="btn__line btn__line_bottom"></span>
          <span className="btn__line btn__line_left"></span>
          Edit
        </button>
        <button className="btn-remove" onClick={() => this.remove()}>&times;</button>
      </li>
    );
  }

  renderEdit() {
    const text = this.props.children;

    return (
      <li className="task">
        <input type="text" ref="_input" className="task__input" defaultValue={text} />
        <button className="btn btn-edit" onClick={() => this.save()}>
          <span className="btn__line btn__line_top"></span>
          <span className="btn__line btn__line_right"></span>
          <span className="btn__line btn__line_bottom"></span>
          <span className="btn__line btn__line_left"></span>
          Save
        </button>
      </li>
    );
  }

  render() {
    // const read = this.props.read ? 'read' : '';
    return this.state.edit ? this.renderEdit() : this.renderNorm();
  }
}


// class Task extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   // this.props = props;
//   // }
//
//   edit() {
//    alert('Edit');
//   }
//
//   remove() {
//     alert('Remove');
//   }
//
//   render() {
//     const text = this.props.children;
//     // const read = this.props.read ? 'read' : '';
//     return (
//       /* // <div className={'task ' + read}> */
//       <div className={this.props.className}>
//         <p className="task__text">{text}</p>
//         <button className="btn btn-edit" onClick={() => this.props.onEdit(true)}>
//           <span className="btn__line btn__line_top"></span>
//           <span className="btn__line btn__line_right"></span>
//           <span className="btn__line btn__line_bottom"></span>
//           <span className="btn__line btn__line_left"></span>
//           Edit
//         </button>
//         <button className="btn-remove" onClick={this.remove}>&times;</button>
//       </div>
//     );
//   }
// }

export default Task;
