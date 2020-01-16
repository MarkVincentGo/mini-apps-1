class App extends React.Component {
  constructor(props) {
    super(props);
    this.forms = {
      F1: ['name', 'email', 'password'],
      F2: ['address_line_1', 'address_line_2', 'city', 'state', 'zip_code', 'phone_number'],
      F3: ['credit_card_number', 'expiration_date', 'CVV', 'billing_zip_code']
    }
    this.pageOrder = ['home', 'F1', 'F2', 'F3', 'confirmation']
    this.state = {
      currentPage: this.pageOrder[0]
    };
  }

  //componentDidMount()
  checkout() {
    console.log('checkout invoked')
    this.setState({
      currentPage: 'F1'
    })
  }

  nextPage() {
    console.log('next page invoked')
    
    let currentPage = this.state.currentPage;
    let index = this.pageOrder.indexOf(currentPage);
    let nextPage = this.pageOrder[index + 1]

    this.setState((state) => {
      return {currentPage: nextPage}
    })
  }

  render() {
    let page;
     if (this.state.currentPage === 'home') {
      page = <HomePage checkout={this.checkout.bind(this)}/> 
    } else if (this.state.currentPage === 'confirmation') {
      page = <ConfirmationPage/>;
    } else if (this.state.currentPage[0] === 'F') {
      page = <FormPage formPage={this.forms[this.state.currentPage]} nextPage={this.nextPage.bind(this)}/>
    }
  
    return (
      <div>
        <Nav/>
        {page}
      </div>
    )
  }
}

// NAV BAR =============================================================
const Nav = () => (
  <h1>CONGO</h1>
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
    this.state = {
      formNumber: 1
    }
    this.inputs = {};
  }

  formData(key, text) {
    this.inputs[key] = text;
  }

  submit() {
    //clears the input boxes so that the page looks new
    this.clearInputBoxes();
    
    // keeps track of the formNumber
    this.setState({
      formNumber: this.state.formNumber + 1
    })
    
    if (this.state.formNumber === 3) {
      axios.post('http://localhost:3000/form', this.inputs)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    console.log('submit invoked', this.inputs);
    }
    
    
  }

  clearInputBoxes() {
    var inputs = document.getElementsByTagName('input');
    _.each(inputs, input => {input.value = ''});
  }
  

  render() {
    return (
      // inputs dynamic according to needs
      // button with method applied
      <>
        {this.props.formPage.map((field, i) => (
          <>
            <label key={i + 100}>{field}</label>
            <br/>
            <InputBar getFormData={this.formData.bind(this)} name={field} key={i}/>
            <br/>
          </>
        ))}
        <button onClick={() => {this.props.nextPage(); this.submit.call(this)}}>Next</button>
      </>
    )
  }
}

// INPUT BAR ========================================================

const InputBar = (props) => (
  // placeholer is passed in as a prop
  // value will be passed up
  <input placeholder={props.name} onChange={(event) => props.getFormData(props.name, event.target.value)} required></input>
)

// SUMMARY PAGE =====================================================
const ConfirmationPage = () => {

  return <p>Hi.</p>
  
};





ReactDOM.render(<App/>, document.getElementById('app'));
let poop;
