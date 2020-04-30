import React, { useMemo } from 'react'
import { IWidgetProps } from '../Repository'
import "./list.scss"

interface IListConfig {
  name: string,
  icon: string,
  color: string,
  moreInfo: string
}

export default function ListWidget({ widget: { node, state: { items } } } : IWidgetProps) {
  const lastUpdate = useMemo(() => new Date(), [items])
  const {
    icon,
    color: backgroundColor,
    name,
    moreInfo
  } : IListConfig = node?.config || {}

  const listItems = items?.map(({ label, value }) => (
    <li key={label}>
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </li>
  ))

  return (
    <div className="widget widget-list" style={{ backgroundColor }}>
      <h1 className="title">{name}</h1>

      <ul className="list-nostyle">
        {listItems}
      </ul>

      <p className="more-info">{moreInfo}</p>

      <p className="updated-at">{lastUpdate.toLocaleTimeString()}</p>

      {icon && <i className={`fa ${icon} icon-background`}></i>}
    </div>
  )
}