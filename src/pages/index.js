import React, {useEffect, useState} from "react"

export default function Home () {

  const [data, setData] = useState("");

  useEffect(()=>{
    (async()=>{
      const response = await fetch('.netlify/functions/hello')
      const tempdata = await response.json()
      setData(tempdata)
    }
    )
    ()
  })

  return (
    <div>
      Hello Netlify
      Data is: {data.message}
    </div>
  )
}