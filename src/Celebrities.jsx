import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CelebDetail from './CelebDetail'
import LazyLoad from 'react-lazy-load'
let key = require("./key")

function Celebrities() {

    const [celebs,setCelebs] = useState([])
    const [celebDetail, setCelebDetail] = useState("")
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")


    function filterCelebs(e) {
        
        return e.name.toLowerCase().includes(search.toLowerCase())

    }

    function getCelebs() {
        axios
          .get(
            `https://api.themoviedb.org/3/person/popular?api_key=${key}&page=${page}`
          )
          .then(res => {
            let newArr = celebs.concat(res.data.results);
              setCelebs(newArr);
              if (celebs.length <= 1000) {
                  let newPage = page + 1
                  setPage(newPage)
              }
          })
          .catch(err => console.log(err));
    }

    let filteredCelebs = celebs.filter(filterCelebs)

    useEffect(getCelebs, [page])
    
    // setInterval(() => {
    //     if (page >= 42)return
    //     if (page < 42){
    //     let newPage = page+1
    //     setPage(newPage)
    //     }
    // },5000)
    

    return (
      <div className="Celebrities">
        <h1>Celebrities ({filteredCelebs.length})</h1>
        <input onChange={e => setSearch(e.target.value)} />
        <div className="Celebrities__main">
          <div className="Celebrities__container">
            {celebs &&
              filteredCelebs.map((e, i) => (
                <div
                  className="Celebrities_OneCelebrity"
                  key={i}
                      value={e}
                    style={{fontWeight:e.id===celebDetail.id ? 900:200}}
                  onClick={() => setCelebDetail(celebs[i])}
                >
                  <img
                    alt={e.name}
                    src={"https://image.tmdb.org/t/p/w185" + e.profile_path}
                    style={{ height: "50px" }}
                  />
                  {e.name}
                </div>
              ))}
          </div>

          {celebDetail && <CelebDetail celeb={celebDetail} />}
        </div>
      </div>
    );

}

export default Celebrities