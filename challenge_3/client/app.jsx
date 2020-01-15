class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home'
    };
  }

  //componentDidMount()
  checkout() {
    this.setState({
      currentPage: 'F1'
    })
  }

  render() {
    

    return (
      <div>
        <Nav/>
        {(this.state.currentPage === 'home' ? <HomePage checkout={this.checkout.bind(this)}/> : <FormPage/>)}
      </div>
    )
  }
};

// NAV BAR =============================================================
const Nav = (props) => (
  <h1>MONTE VERDE</h1>
);

// HOME PAGE ===========================================================
const HomePage = (props) => (
  <>
    <CheckoutButton checkout={props.checkout}/>
  </>
);

// CHECKOUT BUTTON =====================================================
const CheckoutButton = (props) => (
  <>
    <button onClick={props.checkout}>Checkout</button>
    <br/>
  </>
);


// FORM PAGE ===========================================================

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      // inputs dynamic according to needs
      // button with method applied
      <>
        <InputBar/>
        <button>Next</button>
      </>
    )
  }
}

// INPUT BAR ========================================================

const InputBar = (props) => (
  // placeholer is passed in as a prop
  // value will be passed up
  <input placeholder={props.name}></input>
)







ReactDOM.render(<App/>, document.getElementById('app'));
