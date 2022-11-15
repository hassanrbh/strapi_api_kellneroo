import React, { useEffect, useState } from 'react'
import { Switch, createStyles } from '@mantine/core'

const useStyles = createStyles(() => ({
  thumb: {
    background: '#4A7081',
    borderColor: '#4A7081',
  },
}))

function SwitchComponent() {
  const { classes } = useStyles()

  const [checked, setChecked] = useState(false)
  const [searchType, setSearchType] = useState('Personal')

  useEffect(() => {
    if (!checked) setSearchType('Personal')
    if (checked) setSearchType('Job')
  }, [checked])

  return (
    <div className="flex items-center justify-start pt-[15px] pb-[15px]">
      <span
        style={{ color: searchType === 'Personal' ? '#4A7081' : '#989898' }}
        className="text-[23px] pr-2 font[500] text-primaryColor font-archia"
      >
        Personal
      </span>
      <Switch
        checked={checked}
        onChange={(e: any) => setChecked(e.currentTarget.checked)}
        classNames={{
          thumb: classes.thumb,
        }}
        className="cursor-pointer flex customTrack"
      />
      <span
        style={{ color: searchType === 'Job' ? '#4A7081' : '#989898' }}
        className="text-[23px] pl-2 font[500] text-heroGray font-archia"
      >
        Job
      </span>
    </div>
  )
}

export default SwitchComponent
