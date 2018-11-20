class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('Hello from constructor')
  }

  static getDerivedStateFromProps() {
    console.log('Hello from before rendering')
  }
  componentDidMount() {
    console.log('Hello from after mounting')
  }
  render() {
    console.log('Hello from render')

    return (
      <div>Hello!</div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);


/*OUTPUT: 
Hello from constructor
Hello from before rendering
Hello from render
Hello from after mounting*/
