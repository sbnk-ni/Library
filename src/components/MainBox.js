import React, { useEffect, useState } from 'react';
import StaticData from '../Data/StaticData.json';
import MainTable from './MainTable';
import '../styles/mainBox.css';

export default function MainBox() {

  const [inputValue, setInputValue] = useState(""); /*State to handle search input*/
  const [inputValue1, setInputValue1] = useState(""); /*State to handle search input*/
  const [inputValue2, setInputValue2] = useState(""); /*State to handle search input*/
  const [inputValue3, setInputValue3] = useState(""); /*State to handle search input*/
  const [searchResult, setSearchResult] = useState(StaticData); /* State to handle search results */

  /* Handle input function */
  const handleInput = (e) => {setInputValue(e.target.value);}

  const handleInput1 = (e) => {setInputValue1(e.target.value); } 

  const handleInput2 = (e) => {setInputValue2(e.target.value); }

  const handleInput3 = (e) => {setInputValue3(e.target.value); }
  useEffect(() => {handleSearch(inputValue,inputValue1,inputValue2,inputValue3)},[inputValue]); 
  useEffect(() => {handleSearch(inputValue,inputValue1,inputValue2,inputValue3)},[inputValue1]); 
  useEffect(() => {handleSearch(inputValue,inputValue1,inputValue2,inputValue3)},[inputValue3]); 
  useEffect(() => {handleSearch(inputValue,inputValue1,inputValue2,inputValue3)},[inputValue2]); 

  /* Search function */
  const handleSearch = (SearchKey,SearchKey1,SearchKey2,SearchKey3) => {
    var keys = ['title'] // fields we have to search in 
    var lowSearchKey = SearchKey.toLowerCase();
    var lowSearchKey1 = SearchKey1.toLowerCase();
    var lowSearchKey2 = SearchKey2.toLowerCase();
    var lowSearchKey3 = SearchKey3.toLowerCase();
    var result = StaticData.filter(obj =>{
      if(((obj.title.toLowerCase().includes(lowSearchKey) ))&&((obj.language.toLowerCase().includes(lowSearchKey2) )&& (obj.author.toLowerCase().includes(lowSearchKey1)))){
        if((lowSearchKey3!="")&&(lowSearchKey3.length>=3)){
          if (obj.year.toLowerCase().match(lowSearchKey3)){
            return obj;
          }
        }
        else{
          return obj;
        }
      }
    });
    setSearchResult(result);
  }
  
  return (
    <div className='box'>
      <div className='search-box'>
        <div className="search-container">
        <input type="text" name="search" id="search-input" value={inputValue} placeholder={"Search with Title"} onChange={(e)=>{handleInput(e)}}/>
        <input type="text" name="search" id="search-input" value={inputValue1} placeholder={"Search with Author"} onChange={(e)=>{handleInput1(e)}}/>
        <input type="text" name="search" id="search-input" value={inputValue2} placeholder={"Search with Language"} onChange={(e)=>{handleInput2(e)}}/>
        <input type="text" name="search" id="search-input" value={inputValue3} placeholder={"Search with Year"} onChange={(e)=>{handleInput3(e)}}/>
          
        </div>
      </div>
      <MainTable data={searchResult}/>
      <p id="quotes" align="center">“A room without books is like a body without a soul.”
― Marcus Tullius Cicero</p>
    </div>
  )
}
