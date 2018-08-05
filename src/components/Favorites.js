import React from 'react'
import { Popup, Item  } from 'semantic-ui-react'
import './TextColors.css'

const addToFavorites = () => (
        <div>
            <span className='r'>
                <Popup
                    trigger={<Item  content='{ Add To Favorites } ' />}
                    content={<Item  content='Added To Favorites' />}
                    on='click'
                />
            </span>
        </div>
)

export default addToFavorites;