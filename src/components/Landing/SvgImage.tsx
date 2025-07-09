import { useEffect, useState } from "react";
import hero1 from '../../assets/images/hero1.svg'
import hero2 from '../../assets/images/hero2.svg'
import figma from '../../assets/images/Figma.svg'
import react from '../../assets/images/React.svg'
import node from '../../assets/images/node.svg'

function SvgImage() {
    const [index, setIndex] = useState<number>(0)
    const [animate, setAnimate] = useState<boolean>(false)
    const arr: string[] = [hero1, hero2]
    
    useEffect(()=>{
      const interval = setInterval(() => {
        setAnimate(true)
        setIndex((prevIndex) => (prevIndex + 1) % arr.length);
      }, 5000)
      return () => clearInterval(interval)
    }, [])

    useEffect(()=>{
      if (!animate) return
      const timeout = setTimeout(() => setAnimate(false), 100)
      return () => clearTimeout(timeout)
    }, [animate])
    
    const image = arr[index]
  return (
      <div className={`transition-all w-full h-full duration-1000 ease-in-out relative
        ${image ? "" : "bg-slate-300 animate-pulse rounded-full shadow-lg"}`}>
          {image && ( 
            <div className=" absolute w-full h-full shadow-md rounded-full bg-gradient-to-r
              from-[#00A991] via-[#eaf8f3ce] to-[#006647] drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]">
              <img alt="hero-image" loading="lazy" src={image}
              className= {`object-contain w-full h-full shadow-md rounded-full bg-gradient-to-r
              from-[#00A991] via-[#eaf8f3ce] to-[#006647] drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]
              transition duration-100 ease-in-out`}/>
                <img src={figma} alt="figma-image" className="absolute -top-2 left-15 size-35 drop-shadow-[#00A991] drop-shadow-2xl"/>
                <img src={node} alt="node-image" className="absolute right-1 top-15 size-35 drop-shadow-[#006647] drop-shadow-2xl"/>
                <img src={react} alt="react-image" className="absolute bottom-0 size-35 left-5 drop-shadow-[#00A991] drop-shadow-2xl"/>
              </div>
          )}
      </div>
  )}

export default SvgImage



