import React from 'react'

const InputBox = ({label , placeholder, onChange , Btype}) => {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">
        {label}
      </div>
      <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" type={Btype} />
    </div>
  )
}

export default InputBox;