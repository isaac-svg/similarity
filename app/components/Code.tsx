"use client"

import React, { FC, useEffect, useState } from 'react'
import  {Highlight,  type Language } from "prism-react-renderer"
import { useTheme } from 'next-themes'
import {themes} from "prism-react-renderer"

type CodeProps ={
    code: string,
    show:boolean,
    language:Language,
    animationDelay?:number,
    animated?: boolean
}
const Code: FC<CodeProps> = ({code, show, language, animated, animationDelay}) => {
    const {theme:applicationTheme} = useTheme()
    const [text, setText] = useState<string>(animated ? "" : code)
    useEffect(()=>{
        if (show && animated){
            let i = 0

            setTimeout(()=>{

                const intervalId = setInterval(()=>{

                    setText(code.slice(0, i))
                    i++
                },15)

                if (i > code.length) clearInterval(intervalId);

                return ()=> clearInterval(intervalId)
            }, animationDelay || 150)
        }

        

    },[code,  show, animationDelay, animated])


    // determine the number of lines
    const lines = text.split(/\r\n|\r|\n/).length
    const theme = applicationTheme === "light" ? themes.nightOwlLight: themes.nightOwl
  return (
    <Highlight theme={theme} code={text} language={language}   >
        {({className, getLineProps, tokens,getTokenProps}
        )=>(
            <pre className={className + "transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar"} 
            style={{
                maxHeight:show? lines * 24: 0,
                opacity:show? 1: 0
            }}>
                {
                    tokens.map((line, i)=>{

                        // eslint-disable-next-line no-unused-vars  
                        const {key,  ...rest} = getLineProps({line, key:i})

                        return(
                            <div key={`line-${i}`} style={{position:"relative"}} {...rest}>
                                {
                                    line.map((token, index)=>{
                                        const {key, ...props} = getTokenProps({token, index})
                                        return (
                                            <span key={index} {...props}>
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                        
                    )
                }
            </pre>
        )}
    </Highlight>
  )
}

export default Code