
import React from 'react'
import { Dropdown, Image } from 'semantic-ui-react'
import Logo from '../images/eye.png'

const trigger = (
  <span>
    <Image src={Logo} size='small' />
  </span>
)

const options = [
    {  text: <a href='/TextEditor'> VSCode </a> },
    {  text: <a href='/Sublime'> Sublime </a>  },
    {  text: <a href='Terminal'> Terminal </a> },
]

const DropdownImageTriggerExample = () => (
  <Dropdown trigger={trigger} options={options} pointing='top left' icon={null} />
)

export default DropdownImageTriggerExample