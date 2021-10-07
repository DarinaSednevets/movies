// import { Link } from 'react-router-dom'
// import routes from "../../routes"
import { Component } from "react"

class SearchForm extends Component {
    state = {
        searchQuery: "",
    }

    handleChange = (event) => {
        this.setState({
            searchQuery: event.currentTarget.value,
        })
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: "" });
    };
    render() {
        const { searchQuery } = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    onChange={this.handleChange}
                    value={searchQuery}
                    type="text"
                    placeholder="search movie"
                ></input>
                <button type="submit">search</button>
            </form>
        )
    }
}
export default SearchForm;