import m1 from '../img/pexels-john-diez-7578747.jpg';
import m2 from '../img/adult.jpg'
import img1 from '../img/children.jpg';
import b1 from '../img/best.jpg';

export const ApiSliders =[
    {
        src:{img:m1},
        content:{
            h2:"Amazing Summer Deal",
            p:"Upto 40% off"
        },
        background: 'bg-gradient-to-tr from-neutral-300 to-neutral-300'
    },
    {
        src:{img:m2},
        active:true,
        content:{
            h2:"Awsome Week Deal",
            p:"Upto 40% off"
        },
        background: 'bg-[#7a8990]'
    },
    {
        src:{img:img1},
        active:true,
        content:{
            h2:"Chidren Week Deal",
            p:"Upto 40% off"
        },
        background: 'bg-[#7acad3]'
    },
    {
        src:{img:b1},
        active:true,
        content:{
            h2:"Best Deal Ever",
            p:"Upto 40% off"
        },
        background: 'bg-[#dce0e1]'
    },
    

]