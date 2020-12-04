import React from 'react'
import Block from './Block'
import images from '../images'
import {Loggers} from './content.config';

function ConditionsList(props) {
  return (
    <>
    {Loggers.map(condition => 
    <Block icon={images[`./${condition.ImgId}`]} title={condition.title} description={condition.description} value={condition.id} />)}
  </>
  )
}

export default ConditionsList
