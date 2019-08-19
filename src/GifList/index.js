import React from 'react';
import GifItems from '../GifItems';

const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItems key={image.url} gif={image} />
  });

  return (
    <ul>
    <li>
    {gifItems}
    </li>
    </ul>
  );
};

export default GifList
