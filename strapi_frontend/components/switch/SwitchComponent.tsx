import React, { useState } from 'react'
import { Switch } from '@mantine/core'

type Props = {}

function SwitchComponent({}: Props) {
  const [searchType, setSearchType] = useState<string>('Personal')

  return (
    <div className="flex items-center justify-start">
      <span>Personal</span>
      <Switch />
      <span>Job</span>
    </div>
  )
}

export default SwitchComponent
