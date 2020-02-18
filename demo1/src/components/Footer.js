import React from 'react'
// import FilterLink from '../containers/FilterLink'
import FilterLink from './Link'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      All,asaasdasd
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer