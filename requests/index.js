import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = "http://192.168.1.4:8080"

export const useGet = path => {
  if (!path) {
    throw new Error("Path is required")
  }

  const url = baseUrl + path

  const response = useSWR(url, fetcher)
  
  if(!response) console.log(response)

  return response
}