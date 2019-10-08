import React from 'react'

function CelebDetail({celeb}) {
    

    return (
        <div className="CelebDetail">
            
            <img
                style={{ width: '200px'}}
          alt={celeb.name}
          src={"https://image.tmdb.org/t/p/w185" + celeb.profile_path}
        />
        {celeb.name}
        <h2>Known for</h2>
        {celeb.known_for.map((e, i) => (
            <div key={i}>
            <img src={"https://image.tmdb.org/t/p/w185" + e.poster_path} />
            
                   <div> {e.original_title}</div>
          </div>
        ))}
      </div>
    );
}

export default CelebDetail