const addDeck = name => ({ type: 'ADD_DECK', data: name });
const showAddDeck = () => ({ type: 'SHOW_ADD_DECK' });
const hideAddDeck = () => ({ type: 'HIDE_ADD_DECK' });

//Reducer
const cards = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date
      });

      return state.concat([newCard]);
    default:
      return state || [];
  }
};

// Reducer
const decks = (state, action) => {
  switch (action.type) {
    case 'ADD_DECK':
      let newDeck = {
        name: action.data,
        id: +new Date
      };

      return state.concat([newDeck]);

    default:
      return state || [];
  }
};

// Reducer
const addingDeck = (state, action) => {
  switch (action.type) {
    case 'SHOW_ADD_DECK': return true;
    case 'HIDE_ADD_DECK': return false;
    default: return !!state;
  }
};

const store = Redux.createStore(Redux.combineReducers({
  cards,
  decks,
  addingDeck
}));

store.subscribe(() => {
  console.log(store.getState());
});

const App = (props) => {
  return (
    <div className='app'>
      {props.children}
    </div>
  );
};

class Sidebar extends React.Component {
  render() {
    let props = this.props;

    return (
      <div className="sidebar">
        <h2>All Decks</h2>

        <button onClick={ e => this.props.showAddDeck() }>New Deck</button>

        <ul>
          {props.decks.map((deck, i) =>
            <li key={i}> {deck.name}</li>
          )}
        </ul>
        { props.addingDeck && <input id="newDeck" ref="add" onKeyPress={this.createDeck} /> }
      </div>
    );
  }
  createDeck(evt) {

    if (evt.which !== 13) return;

    // let name = ReactDOM.findDOMNode(this.refs.add).value;
    let name = ReactDOM.findDOMNode(newDeck).value;

    console.log('What is the value of the variable name? ' + name);

    this.props.addDeck(name);
    this.props.hideAddDeck();
  }
}

function run () {
  let state = store.getState();
  ReactDOM.render((<App>
    <Sidebar
      decks={state.decks}
      addingDeck={state.addingDeck}
      addDeck={name => store.dispatch(addDeck(name))}
      showAddDeck={() => store.dispatch(showAddDeck())}
      hideAddDeck={() => store.dispatch(hideAddDeck())}
    />
  </App>), document.getElementById('root'));
}

run();

store.subscribe(run);
