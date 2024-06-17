import React from 'react'
import s from '../stores/styling'

export default function SearchPage() {
  
  // const handleSearch = (event) => {

  // }

  return (
    <>
    <s.InputWrapper className='search-wrapper'>
      <s.Input 
        type="text"
        id="search"
        // onChange={handleSearch}
      />
    </s.InputWrapper>
    <s.InputWrapper>
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
    </s.InputWrapper>

    <s.SubmitButton type='submit'>
            SUBMIT
          </s.SubmitButton>
    </>
  )
}
