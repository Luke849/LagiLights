import React from 'react'
import { Toggle } from '../ui/toggle'
import { LightType } from '@/types/light';

interface LightProps {
  light: LightType;
}
  
const Light: React.FC<LightProps> = ({ light }) => {
  if (!light) {
    return null;
  }
  const lightStyle = {
    backgroundColor: light.color,
    boxShadow: `0 0 5px ${light.color}`
  }


  return (
    <div style={lightStyle} className='h-52 w-full bg-zinc-100 shadow-sm-white rounded-md p-5 relative'>
      <p className='text-xl font-semibold'>{light.name}</p>
      <Toggle aria-label="light-switch" className='absolute bottom-3 right-3 bg-zinc-900 hover:bg-zinc-800 drop-shadow-none'>
        <svg width="100%" height="50%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='drop-shadow-none'>
          <path className="data-[state=on]:fill-zinc-50 fill-zinc-400" d="M15 16.5V19C15 19.9319 15 20.3978 14.8478 20.7654C14.6448 21.2554 14.2554 21.6448 13.7654 21.8478C13.3978 22 12.9319 22 12 22C11.0681 22 10.6022 22 10.2346 21.8478C9.74458 21.6448 9.35523 21.2554 9.15224 20.7654C9 20.3978 9 19.9319 9 19V16.5M15 16.5C17.6489 15.3427 19.5 12.5755 19.5 9.5C19.5 5.35786 16.1421 2 12 2C7.85786 2 4.5 5.35786 4.5 9.5C4.5 12.5755 6.35114 15.3427 9 16.5M15 16.5H9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Toggle>
    </div>
  )
}

export default Light
