import React from 'react'
import Block from './Block'
import images from '../images'
import {triggerList} from './content.config';

function TriggersList(props) {
  return (
    <>
      {triggerList.map(trigger => 
      <Block icon={images[`./${trigger.ImgId}`]} title={trigger.title} description={trigger.description} value={trigger.id} />)}
    </>
  )
}

export default TriggersList
