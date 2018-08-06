
import React from 'react'
import { Dropdown, Image  } from 'semantic-ui-react'
import Logo from '../images/eye.png'
import './TextColors.css'

const trigger = (
  <span>
    <Image src={Logo} size='small' />
  </span>
)

const options = [
    {  key: 'vscode'  , text: <a href='/TextEditor'>VSCode   <i class="fas fa-code"></i>   </a> },
    {  key: 'sublime' , text: <a href='/Sublime'>   Sublime  <i class="fas fa-code"></i> </a> },
    {  key: 'terminal', text: <a href='Terminal'>   Terminal <i class="fas fa-terminal"></i> </a> },
    {  key: 'log-out', text: <a href='/'> <i class="fas fa-sign-out-alt"></i> Log Out </a> }
]

const DropdownImageTriggerExample = () => (
  <Dropdown inverted trigger={trigger} options={options} position='bottom center' icon={null} />
)

export default DropdownImageTriggerExample