import React from 'react'
import Square from './Square'

export default function Board() {
  return (
    <>
        <div className='row-board'>
            <Square/>
            <Square/>
            <Square/>
        </div>

        <div className='row-board'>
            <Square/>
            <Square/>
            <Square/>
        </div>

        <div className='row-board'>
            <Square/>
            <Square/>
            <Square/>
        </div>
    </>
  )
}
