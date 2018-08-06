
import React from 'react'
import { Dropdown, Image } from 'semantic-ui-react'
import Logo from '../images/eye.png'

const trigger = (
  <span>
    <Image src={Logo} size='small' />
  </span>
)

const options = [
    {  key: 'vscode'  , text: <a href='/TextEditor'> VSCode   </a> },
    {  key: 'sublime' , text: <a href='/Sublime'>    Sublime  </a> },
    {  key: 'terminal', text: <a href='Terminal'>    Terminal </a> },
]

const DropdownImageTriggerExample = () => (
  <Dropdown trigger={trigger} options={options} position='bottom center' icon={null} />
)

export default DropdownImageTriggerExample