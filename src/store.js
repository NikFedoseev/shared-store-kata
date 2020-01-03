import React from "react";
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = [];
    this.actions = {
      setInputValue: value =>
        this.setState({ ...this.state, inputValue: value })
    };
  }
  addListeners(ctx) {
    this.listeners.push(ctx);
  }
  removeListeners(ctx) {
    this.listeners = this.listeners.filter(c => c !== ctx);
  }
  setState(value) {
    this.state = value;
    this.fire(this.state);
  }
  fire(state) {
    this.listeners.map(listener => listener.next(state));
  }
}
const store = new Store({ inputValue: "ad", fasdf: "fasasdf" });

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function(Component) {
    return class ConnectHOC extends React.PureComponent {
      constructor() {
        super();
        this.next = state => {
          this.setState(mapStateToProps(state));
        };
      }
      componentDidMount() {
        store.addListeners(this);
        this.next(store.state);
      }

      componentWillUnmount() {
        store.removeListeners(this);
      }
      render() {
        return (
          <Component
            {...this.state}
            actions={mapDispatchToProps(store.actions)}
          >
            {this.children}
          </Component>
        );
      }
    };
  };
}
