import {TextInput} from '@sanity/ui'
import React, {ChangeEvent, FC} from 'react'

// TODO: use correct type
type Props = any & {
  onValueChange: (value: number) => void
  value?: number
}

const TextInputNumber: FC<Props> = (props: Props) => {
  const {onValueChange, value, ...remainingProps} = props

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    const regex = /^[0-9\b]+$/

    // Test for number and strip leading zeroes
    if (val === '' || regex.test(val)) {
      onValueChange(parseInt(val, 10) || 0)
    }
  }

  return (
    <TextInput
      {...remainingProps}
      onChange={handleChange} //
      value={value ?? ''}
    />
  )
}

export default TextInputNumber
