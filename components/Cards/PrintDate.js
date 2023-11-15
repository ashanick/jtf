import React from 'react'

function PrintDate({id, item}) {
  console.log('Item Date', item)
    const formatDate = new Date(item).toLocaleDateString(
        'en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })

  return (
    <p className="p" id={id}>{formatDate}</p>
  )
}

export default PrintDate