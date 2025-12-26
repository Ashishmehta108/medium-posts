import ClientExample from "./client"

const asyncoperation=async()=>{
    return await Promise.resolve({id:"ashish"})
}

export default async function About() {
    const data=await asyncoperation()

  return <ClientExample data={data}/>
}
