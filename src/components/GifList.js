import React from 'react'

const GifList = (props) =>  {

  const gifs = props.gif.map(gif => {
    return (
      <div key={gif.id}>
      <img src={gif.images.fixed_height.url} alt="gif"/>
      </div>
    )
  })
  return <div> {gifs} </div>
}

export default GifList;
