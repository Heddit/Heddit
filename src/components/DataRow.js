import React from ‘react’;

const DataRow = (props) => {
  const title = props.title;
  const link = props.link;
  const img = props.img;

  return (
    <div>
        <h2>{`Title ${title}`}</h2>    
        <img src={img} />
        <a href={link}>
        </a>
    </div>
  );
}

export default DataRow;