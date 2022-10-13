import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import { ApiSliders } from '../Apifolder/sliderApi';
import './Slider.css';

function Slider() {
    const[slides] = useState(ApiSliders)
    const[activeSlide, setActiveslide ] = useState(0)
    const nextSlide = () =>{
        if(activeSlide === slides.length - 1){
            setActiveslide(0)
        }
        else{
            setActiveslide(activeSlide + 1)
        }
    }
    const prevSlide = () =>{
        if(activeSlide === 0){
            setActiveslide(slides.length - 1)
        }
        else{
            setActiveslide(activeSlide - 1)
        }
    }
    const arrowStyle = 'leftArrow rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer ' 
  return (
    <div className='parentDiv h-[540px] bg-white flex items-center justify-between  mobile:hidden'>
        {/* leftarrow */}
        <div className={arrowStyle}>
            <ArrowLeftOutlined style={{ fontSize :'50px'}} onClick={prevSlide}/>
        </div>
        {/* slider */}
       
       {
        // eslint-disable-next-line array-callback-return
        slides.map((slide, index) => {
            if(index === activeSlide){
                return(
                    <div className={`wrapper flex w-[100%] h-[500px]  justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative  ` + slide.background}>
                    <div className='slide flex items-center justify-center h-[100]'>
                        <div className='forImage flex flex-1 items-center justify-center h-[100%]'>
                            <img  className=' h-[100%] object-cover border-[0]' src={slide.src.img} alt='slider_img1' />
                            
                        </div>
                        <div className='des flex flex-col flex-1 place-items-start justify-center ml-11'>
                            <h2 className='text-[50px] mr-[65px]'>{slide.content.h2}</h2>
                            <p className='text-[30px]'> {slide.content.p}</p>
                            <button className='btn'>Shop now</button>
                        </div>
                    </div>
                </div>
                )
            }
        })
       }

       
        {/* rightarrow */}
        <div className={arrowStyle}>
            <ArrowRightOutlined style={{ fontSize :'50px'}} onClick={nextSlide}/>
        </div>
    </div>
  )
}

export default Slider










