
import React from 'react'
import { Dropdown, Icon  } from 'semantic-ui-react'
import './TextColors.css'

const trigger = (
  <span className='right'>
    <Icon className="red" name='eye slash'/>
  </span>
)

const options = [
    {  key: 'vscode'  , text: <a href='/TextEditor'>Bleacher Report   </a> },
    {  key: 'sublime' , text: <a href='/Sublime'>   Reddit  </a> },
    {  key: 'terminal', text: <a href='Terminal'>   New York Times  </a> }
]

const DropdownImageTriggerExample = () => (
  <Dropdown inverted trigger={trigger} options={options} position='bottom center' icon={null} />
)

export default DropdownImageTriggerExample