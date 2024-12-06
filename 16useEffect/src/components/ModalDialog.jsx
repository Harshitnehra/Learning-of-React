import React from 'react'
import { useEffect } from 'react'
const ModalDialog = (props) => {
    useEffect(() => {
      if (!props.isopen) {
        return
      }
      const dialog = ref.current;
    dialog.showModal();
    return () => {
      dialog.close();
    };  
    }, [props.isopen])
    
  return (
    <div style={{border:"10px", color:"red"}}>
        {props.children}
    </div>
  )
}

export default ModalDialog
