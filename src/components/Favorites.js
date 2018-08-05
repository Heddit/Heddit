import React from 'react'
import { Popup, Item, Header  } from 'semantic-ui-react'
import './TextColors.css'


let addToFavesText = "<a href='#' className='w' (  <span className='r'> Add To Favorites </span>) </a>"


const addToFavorites = () => (
        <div>
            <span className='lb'>
                <Popup
                    trigger={<Item  content='{ Add To Favorites } ' />}
                    content={<Item  content='Added To Favorites' />}
                    on='click'
                />
            </span>
        </div>


)


export default addToFavorites;