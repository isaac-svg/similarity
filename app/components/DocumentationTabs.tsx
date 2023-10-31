"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'
import SimpleBar from "simplebar-react"
import Code from './Code'
import { nodejs, python } from '@/helpers/documentation-codes'
const DocumentationTabs = () => {
  return (
    <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
        <TabsList>
            <TabsTrigger value='nodejs'>Nodejs</TabsTrigger>
            <TabsTrigger value='python'>Python</TabsTrigger>
        </TabsList>
        <TabsContent value='nodejs' >
            <SimpleBar>
            <Code code={nodejs} language='javascript' show animated   />
            </SimpleBar>
        </TabsContent>
        <TabsContent value='python'>
          <SimpleBar>
        <Code code={python} language='python' show animated  />
        </SimpleBar>
        </TabsContent>
        
    </Tabs>
  )
}

export default DocumentationTabs