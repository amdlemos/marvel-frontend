import useSWR from "swr"

// work
const baseUrl = "https://us-central1-marvel-quantzed.cloudfunctions.net"

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

// request data
export const useGet = (path, params) => {
  if (!path) {
    throw new Error("Path is required")
  }  
  
  const url = new URL("/hello_http"+path, baseUrl)
  
  url.search = getParams(params)  
  console.log('url', url)
  return useSWR(url.toString(), fetcher)  
}

