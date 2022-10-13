import { Close } from '@material-ui/icons'
import React,{useState} from 'react'

function Annocement() {
    const[annocement, setAnnocement] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center')
    const handleClose = () =>{
        setAnnocement(Annocement + " hidden")
    }
  return (
    <div className={annocement}>
        <h2 >Hurry up it's 40% discount off now </h2>
        <Close className='cursor-pointer' onClick={handleClose}/>
    </div>
  )
}

export default Annocement