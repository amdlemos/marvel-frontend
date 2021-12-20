import useSWR from "swr"

const baseUrl = "http://192.168.1.4:8080"
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

