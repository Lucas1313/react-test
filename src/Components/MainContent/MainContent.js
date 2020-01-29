import React from 'react';
import './MainContent.css';
const MainContent = props => {
  const {leftList, rightList} = props;
  const leftListContent =  (
    <ul>
    {leftList.map((item, index) => {
      return (
        <li key={index}>{item}</li>
      )
    })}
    </ul>
  )
  const rightListContent =  (
    <ul>
      {rightList.map((item, index) => {
        return (
          <li key={index}>{item}</li>
        )
      })}
    </ul>
  )
  return (
    <div className="main-content">
      <section className="content">
        {`Left-column-content`}
        {leftListContent}
      </section>
      <section className="content">
        {`Right-column-content`}
        {rightListContent}
      </section>
    </div>
  )
}
export default MainContent;
