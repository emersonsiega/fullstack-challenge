import React from 'react'
import ButterToast, { POS_TOP, POS_CENTER, Cinnamon } from 'butter-toast'

import Icon from './Icon'

const Toast = () => (
  <ButterToast position={{ horizontal: POS_CENTER, vertical: POS_TOP }} timeout={3000} />
)

const showMessage = (title, message = '', icon) => {
  ButterToast.raise({
    content: (
      <Cinnamon.Crisp
        title={title}
        content={message}
        scheme={Cinnamon.Crisp.SCHEME_ORANGE}
        icon={icon ? <Icon name={icon} size="2x" /> : ''}
      />
    ),
  })
}

export { showMessage }

export default Toast
