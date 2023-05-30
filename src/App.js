import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://akabab.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((users) => this.setState({ characters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { characters, searchfield } = this.state;
    const filteredCharacter = characters.filter((character) =>
      character.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Starwars Infostop</h1>
        <SearchBox
          placeholder="Search your character"
          handleChange={this.handleChange}
        />
        <CardList characters={filteredCharacter} />
      </div>
    );
  }
}

export default App;
