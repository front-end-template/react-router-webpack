import * as React from 'react'

export default function Header (props: { name: string }) {
  return (
    <header className="header">
      {props.name}
    </header>
  )
}
