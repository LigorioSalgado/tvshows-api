import React, { useState, useEffect } from 'react';
import ResultList from './ResultList'
import { searchShow }  from '../utils/API'
import useDebounce from '../hooks/useDebounce';

//debounce ---> esperar cierto tiempo para ejecutar algo
function Home(){
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([])
    const searchTerm = useDebounce(search,500)
    const makeSearch = (term) => {
        searchShow(term).then((response) => {
            setResults(response.data)
        }).catch(() =>{
            setResults([])
        })
    }

    useEffect(() => {
        if(searchTerm){
            console.log('Valor Final -->', searchTerm)
            makeSearch(searchTerm)
        }

    }, [searchTerm])

    return(
        <div className="main">
            <h1>Devflix</h1>
            <div className="search-box">
                <input 
                type="text" 
                name="search" 
                onChange={(event) => setSearch(event.target.value)}
                value={search}
                />
            </div>
            <ResultList results={results} />
        </div>
    )
}

export default Home;
