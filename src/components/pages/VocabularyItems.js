import React from 'react'
import {Link} from 'react-router-dom'
function VocabularyItems(item) {
  return (
    <>
      <li className="Vocabulary_item">
        <Link className="Vocabulary_link" to={item.path}>
            <img src={item.src} alt="Vocabulary Image"
            className="vocabulary_img"/>
        <h5 className="Vocabulary_text">{item.text}</h5>
        </Link>
      </li>
    </>
  )
}

export default VocabularyItems
