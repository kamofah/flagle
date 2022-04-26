import React from 'react'

export const Attempt = (props) => {
  return (
    <div>
        <div id='disabled-attempt' style={{display: props.hide}}></div>
        
        <div id='enabled-attempt' style={{display: props.show}}>
            <div id='country-attempted' className='country-content'>
                <p>{props.country}</p>
            </div>
            <div id='continent' className='country-content'>
                <p>{props.continent}</p>
            </div>
            <div id='currency' className='country-content'>
                <p>{props.currency}</p>
            </div>
        </div>
    </div>
    
  )
}
