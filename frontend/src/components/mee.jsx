import {useEffect} from 'react';



const mee = () => {

    useEffect(() => {
        console.log('mee');
    }, [0]);


  return (
    <div className="maa" >mee</div>
  )
}

export default mee