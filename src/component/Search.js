import React, { useContext, useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { useClickOutside } from 'react-click-outside-hook'
import axios from '../axios'
import { AppContext } from '../App'


const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
const baseUrl = "https://image.tmdb.org/t/p/w500";

const Search = () => {
  const [isShowListSearch, setIsShowListSearch] = useState(false)
  const [ref, hasClickedOutside] = useClickOutside()
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [dataList, setDataList] = useState([])
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {

    hasClickedOutside && hideListSearch()
  }, [hasClickedOutside])

  useEffect(() => {
    let id;
    if (searchQuery) {
      id = setTimeout(fetchList, 1000)
    } else {
      setDataList([])
    }
    return () => {
      clearTimeout(id)
    }
  }, [searchQuery])

  const fetchList = async () => {
    setIsLoading(true)
    if (searchQuery.length != 0) {
      const res = await axios.get(`/search/movie?api_key=${apiKey}&query=${searchQuery}`)
        .catch((err) => console.log(err))
      if (res) {
        setDataList(res.data.results)
      }
    } else {

    }

    setIsLoading(false)
  }

  const hideListSearch = () => {
    setIsShowListSearch(false)
    setSearchQuery('')
    setDataList([])
  }
  const handleClick = (movie) => {
    hideListSearch()
    dispatch({ type: 'UPDATE_DATA_SEARCH', data: movie })
  }


  console.log(dataList)
  return (
    <Container ref={ref}>
      <Input type="text" placeholder="search..." onFocus={() => setIsShowListSearch(true)} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></Input>
      <SearchIcon>
        <GrSearch />
      </SearchIcon>
      {isShowListSearch &&
        <ListSearch>
          {
            isLoading && <ClipLoader color="#ccc" size={30} />
          }
          {
            !isLoading && !searchQuery && <p>type to search</p>
          }
          {
            dataList && dataList.map(item => <ItemSearch key={item.id} onClick={() => handleClick(item)}>
              <img src={baseUrl + (item.backdrop_path || item.poster_path || '/kuStRV9ItXESNvuEGDZMsm65yfv.jpg')} alt={item.title || item.name} />
              <p> {item.title || item.name}</p>
            </ItemSearch>)
          }
        </ListSearch>}
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;
const Input = styled.input`
  padding: 10px 40px 10px 20px;
  border: 1px solid #000;
  border-radius: 5px;
  outline: none;
`;
const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-40%);
`;
const ListSearch = styled.div`
  position: absolute;
  top: 105%;
  height: 200px;
  left: 0;
  background: #fff;
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  p{
    margin-top: 30px;
    font-size: 13px;
  }
`;

const ItemSearch = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  display:flex;
  :hover{
    background: #ccc;
    transition: 0.2s ease;
  }
  img{
    width: 40px;
    margin-right: 10px;
  }
`
export default Search;
