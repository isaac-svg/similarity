import { Metadata } from 'next'
import React from 'react'
import LargeHeading from "../../components/ui/LargeHeading"
import Paragraph from '@/app/components/ui/paragraph'
import DocumentationTabs from '@/app/components/DocumentationTabs'
import "simplebar-react/dist/simplebar.min.css"

export const metadata:Metadata ={
  title:"Similarity API | Documentation",
  description:"Free and open-source text similarity API"
}
const page = () => {

  return (
    <div className='container max-w-7xl mx-auto mt-12 '>
      <div className="flex flex-col items-center gap-6">
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>
        <DocumentationTabs/>
      </div>
    </div>
  )
}

export default page