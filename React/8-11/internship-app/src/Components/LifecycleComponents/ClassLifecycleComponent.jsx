import React from "react";

class ClassLifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor: Компонент создан");
  }

  componentDidMount() {
    console.log("componentDidMount: Компонент смонтирован");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Компонент обновлен");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Компонент будет удален");
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Увеличить
        </button>
      </div>
    );
  }
}

export default ClassLifecycleComponent;