import React, { useEffect, useState } from 'react'

const SearchFilter = () => {
    // API data state
    const [data, setData] = useState([]);
    // 
    const[searchApiData, setSearchApiData] = useState([])
    // 
    const [filterValue, setFilterValue] = useState('');


    useEffect(() => {
        const fetchData = () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    setData(json);
                    setSearchApiData(json);
                })
                // console.log(setData)
        }
        fetchData();
    }, [])

    const handleFilter=(e)=> {
        if(e.target.value === '') {
            setData(searchApiData);
        }
        else {
            const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.username.toLowerCase().includes(e.target.value.toLowerCase()) || item.email.toLowerCase().includes(e.target.value.toLowerCase()) || item.phone.toLowerCase().includes(e.target.value.toLowerCase()) )
            setData(filterResult)
        }

        setFilterValue(e.target.value)
    }

    return (
        <div>
            <div className='search-input-os'>
                <input type="text" placeholder='Search' value={filterValue} onInput={(e)=> {handleFilter(e)}}/>
            </div>
            <table>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone no.</th>

                {
                    data.map((value) => {
                        return (

                            <tr>
                                <td>{value.name}</td>
                                <td>{value.username}</td>
                                <td>{value.email}</td>
                                <td>{value.phone}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default SearchFilter;
