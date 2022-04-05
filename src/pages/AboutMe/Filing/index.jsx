import React, { useEffect, useState } from 'react'
import "./index.css"

export default function Filing(props) {
  const [tagCount, setTagCount] = useState({});
  const isNight = props.isNight;
  const getFiling = () => {
    fetch(`https://api.pphui8.me/filing`)
      .then(res => res.json())
      .then(res => setTagCount(res))
      .catch(err => console.log('Request Failed', err));
  }

  useEffect(() => {
      getFiling();
  }, []);
  return (
    <div className={isNight ? 'filingContainerNight' : 'filingContainer'}>
      <h4 className='filingTitle'>archive</h4>
      {
        Object.keys(tagCount).map((value, index) => {
          return <p className='filingCard' key={index}>{value + ` (` + tagCount[value] + `)`}</p>
        })
      }
    </div>
  )
}
