import {useEffect} from 'react';



const mee = () => {

    useEffect(() => {
        console.log('mee');
    }, []);


  return (
    <div className="maa" >mee</div>
  )
}

export default mee