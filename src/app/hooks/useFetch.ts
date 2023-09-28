
type RequestConfig = Omit<RequestInit, 'url'>
export const useFetch = () => {
    return async (url: string, config?: RequestConfig) => {
        const response = await fetch(url, config)
        if (response.ok) {
            const json = await response.json()
            return json
        }
        
        throw new Error(response.statusText || 'Something went wrong')
    }
}