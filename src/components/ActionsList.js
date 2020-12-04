import React from 'react'
import Block from './Block'
import images from '../images'
import {Actions} from './content.config';
function ActionsList(props) {
  return (
    <>
    {Actions.map(action => 
    <Block icon={images[`./${action.ImgId}`]} title={action.title} description={action.description} value={action.id} />)}
  </>
  )
}

export default ActionsList
