import { useEffect } from "react";

export const useTitle = (title) => {
    useEffect(() => {
        const prevTitle = document.title
        document.title = `${title}/U-Note`

        return () => document.title = prevTitle 
    })
  return null;
}

export default useTitle;