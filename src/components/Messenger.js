"use client"
import { FacebookProvider, CustomChat } from 'react-facebook';

const Messenger = () => {
  return (
<FacebookProvider appId="305762015485367" chatSupport>
        <CustomChat pageId="123432427525154" minimized={true}/>
      </FacebookProvider>  
  )
}

export default Messenger