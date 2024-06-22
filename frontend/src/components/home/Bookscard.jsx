import React from 'react'
import {Link} from 'react-router-dom'

import {CiUser} from 'react-icons/ci'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineDelete} from 'react-icons/md'
import BookSingleCard from './BookSingleCard'
function Bookscard({books}) {
  return (
    <div className='grid sm:grid-cols-2 lg-grid-cols-3 xl:grid-cols-4 gap-4'>
        { books.map((item)=>(
            <BookSingleCard key={item._id} book={item}/> 
        ))

        }
      
    </div>
  )
}

export default Bookscard
