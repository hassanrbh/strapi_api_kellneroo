import React from 'react'
import Card from '../card/Card'
import styles from './Search.module.css'

function SearchBox() {
  const n = 10
  return (
    <div
      className={`${styles.search__results} rounded-[0.7rem] h-[38.875rem] p-[1.3rem] bg-[#577E8F] font-body w-[70%]`}
    >
      <h6 className="text-white text-[1.2rem] mb-2">
        Dein Ergebnis für Personal in München
      </h6>
      <div
        className={`${styles.card__container} overflow-auto h-[92%] pr-[0.7rem]`}
      >
        {[...Array(n)].map((el, idx) => (
          <Card key={idx} index={idx} />
        ))}
      </div>
    </div>
  )
}

export default SearchBox
