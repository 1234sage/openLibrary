import React, {useState, useEffect} from "react";
import "./App.css";
import BookCard from "./components/BookCard";
import BookList from "./components/BookList";
import ErrorMessage from "./components/ErrorMessage";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";

const App = () => {
    const [books,setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect (() => {
        fetch("https://openlibrary.org/search.json?q=javascript")
        .then((res) => res.json())
        .then((data) => {
            const first = data.docs.slice(0,20);
            setBooks(first);
            setFilteredBooks(first);
            setLoading(false);
        })
        .catch(()=> {
            setError(true);
            setLoading(false);
        });
    }, [] );

    useEffect(()=>{
        const filtered = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));
        setFilteredBooks(filtered)
    }, [search, books]);

    return(
        <div className = "App">
            <h1>Каталог книг</h1>
            <SearchBar search = {search} setSearch = {setSearch}/>
            {loading ? (
                <Loader />
            ): error ? (
                <ErrorMessage/>
            ):(
                <BookList books = {filteredBooks}/>
            )}
        </div>
    )
}

export default App;