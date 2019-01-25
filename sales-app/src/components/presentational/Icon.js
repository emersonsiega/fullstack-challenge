import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'

const Icon = ({ name, size = '1x' }) => <FontAwesomeIcon icon={icons[name]} size={size} />

export default Icon
