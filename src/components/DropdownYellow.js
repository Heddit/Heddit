
import React from 'react'
import { Dropdown, Icon  } from 'semantic-ui-react'
import './TextColors.css'

const trigger = (
  <span className='right'>
    <Icon className="yellow" name='eye slash'/>
  </span>
)

const options = [
    {  key: 'vscode'  , text: <a href='/TextEditor'>Add    </a> },
    {  key: 'sublime' , text: <a href='/Sublime'>   Rename   </a> },
    {  key: 'terminal', text: <a href='Terminal'>   Remove  </a> }
]

const DropdownImageTriggerExample = () => (
  <Dropdown inverted trigger={trigger} options={options} position='bottom center' icon={null} />
)

export default DropdownImageTriggerExample