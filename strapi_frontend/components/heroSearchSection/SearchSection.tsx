import React from 'react'
import Card from '../card/Card'
import styles from './Search.module.css'

function SearchBox() {
  const n = 10
  return (
    <div
      className={`${styles.search__results} rounded-[1rem] h-[62.2rem] p-[2rem] bg-[#577E8F] font-body w-[50%]`}
    >
      <h6 className="text-white text-[2rem] mb-2">
        Dein Ergebnis für Personal in München
      </h6>
      <div
        className={`${styles.card__container} overflow-auto h-[92%] pr-[1rem]`}
      >
        {[...Array(n)].map((el, idx) => (
          <Card key={idx} index={idx} />
        ))}
      </div>
    </div>
  )
}

export default SearchBox
