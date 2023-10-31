const d = {
    "dependencies": {
        "@emotion/react": "^11.10.6",
        "@emotion/styled": "^11.10.6",
        "@mui/material": "^5.11.11",
        "@mui/system": "^5.11.11",
        "@mui/x-data-grid": "^6.0.0",
        "@next-auth/prisma-adapter": "^1.0.5",
        "@prisma/client": "^4.11.0",
        "@radix-ui/react-dropdown-menu": "^2.0.3",
        "@radix-ui/react-scroll-area": "^1.0.2",
        "@radix-ui/react-tabs": "^1.0.2",
        "@total-typescript/ts-reset": "^0.3.7",
        "@upstash/ratelimit": "^0.3.9",
        "@upstash/redis": "^1.20.1",
        "class-variance-authority": "^0.4.0",
        "clsx": "^1.2.1",
        "date-fns": "^2.29.3",
        "framer-motion": "^10.0.1",
        "lodash": "^4.17.21",
        "lucide-react": "^0.122.0",
        "nanoid": "^4.0.1",
        "next-auth": "^4.20.1",
        "next-themes": "^0.2.1",
        "openai": "^3.2.1",
        "prism-react-renderer": "^1.3.5",
        "prisma": "^4.11.0",
        "react-hook-form": "^7.43.4",
        "react-hot-toast": "^2.4.0",
        "sharp": "^0.31.3",
        "simplebar-react": "^3.2.1",
        "tailwind-merge": "^1.10.0",
        "zod": "^3.21.0"
      },
}
const fs = require("fs/promises")

const  cleanDeps =async (obj)=>{

    try {
    const file = await  fs.open("./dps.txt", "w+")

        Object.keys(obj).forEach(async k=>{
         await   file.write(`${k} `)
        })
        file.close()
    } catch (error) {
        
    }
    finally{
        console.log("Done")
    }

}
cleanDeps({
    "@emotion/react": "^11.10.6",
    "@emotion/styled": "^11.10.6",
    "@mui/material": "^5.11.11",
    "@mui/system": "^5.11.11",
    "@mui/x-data-grid": "^6.0.0",
    "@next-auth/prisma-adapter": "^1.0.5",
    "@prisma/client": "^4.11.0",
    "@radix-ui/react-dropdown-menu": "^2.0.3",
    "@radix-ui/react-scroll-area": "^1.0.2",
    "@radix-ui/react-tabs": "^1.0.2",
    "@total-typescript/ts-reset": "^0.3.7",
    "@upstash/ratelimit": "^0.3.9",
    "@upstash/redis": "^1.20.1",
    "class-variance-authority": "^0.4.0",
    "clsx": "^1.2.1",
    "date-fns": "^2.29.3",
    "framer-motion": "^10.0.1",
    "lodash": "^4.17.21",
    "lucide-react": "^0.122.0",
    "nanoid": "^4.0.1",
    "next-auth": "^4.20.1",
    "next-themes": "^0.2.1",
    "openai": "^3.2.1",
    "prism-react-renderer": "^1.3.5",
    "prisma": "^4.11.0",
    "react-hook-form": "^7.43.4",
    "react-hot-toast": "^2.4.0",
    "sharp": "^0.31.3",
    "simplebar-react": "^3.2.1",
    "tailwind-merge": "^1.10.0",
    "zod": "^3.21.0"
  },)