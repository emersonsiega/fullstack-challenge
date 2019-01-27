const formatDateTime = dateTimeString => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }

  const dateTime = new Date(dateTimeString)
  const date = dateTime.toLocaleDateString('pt-BR', options)
  const time = dateTime.toLocaleTimeString('pt-BR')

  return date + ' ' + time.substr(0, 5)
}

export { formatDateTime }
