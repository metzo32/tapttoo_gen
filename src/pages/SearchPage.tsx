import React from 'react'
import s from '../stores/styling'

export default function SearchPage() {
  
  // const handleSearch = (event) => {

  // }

  return (
    <>
    <s.Div className='search-wrapper'>
      <s.Input 
        type="text"
        id="search"
        // onChange={handleSearch}
      />
    </s.Div>
    <s.Div>
      <s.Input
        type='checkbox'
        id='hashtag'
      />
      <s.Input
        type='checkbox'
        id='hashtag'
      />
      <s.Input
        type='checkbox'
        id='hashtag'
      />
      <s.Input
        type='checkbox'
        id='hashtag'
      />
      <s.Input
        type='checkbox'
        id='hashtag'
      />
    </s.Div>

    <s.Button type='submit'>
            SUBMIT
          </s.Button>
    </>
  )
}
