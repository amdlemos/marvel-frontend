import useSWR from "swr"

console.log('env',process.env.base_url)
const baseUrl = process.env.base_url
const fetcher = (url) => fetch(url).then(res => res.json())
const getParams = (params) => {
  
  if(!params) return ""
  const values = Object.values(params);
  let search = new URLSearchParams()

 
  for (const prop in params) {      
    if (params[prop])
    {      
      search.append(prop, params[prop])
    }
  }
  
  return  search
}

export const useGet = (path, params) => {
  if (!path) {
    throw new Error("Path is required")
  }  
  const url = new URL(path, baseUrl)
  url.search = getParams(params)  
  return useSWR(url.toString(), fetcher)  
}

