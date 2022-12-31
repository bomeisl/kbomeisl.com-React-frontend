import React, { useEffect, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import projects from './ProjectApi';
import Figure from 'react-bootstrap/Figure';

const Icons = () => {

    const [headerInfo,setHeaderInfo] = useState([]);

    const fetchHeader = async () =>{
        const response = await projects.get('/header/')
        setHeaderInfo(response.data)
    };


<Stack direction='horizontal' gap={4}>
                {headerInfo.map(header => {
                    
                    if(!header){
                        return <div>One moment please...</div>

                    } else {
                        return (
                
                            <div>
            
                            
                                <Figure>
                                    <Figure.Image
                                        width={'25%'}
                                        height={'auto'}
                                        alt={header.name}
                                        src={header.image}/>
                                </Figure>        
                         
                            
            
                        </div> 
                        
                    
                                
                        )
                    }
                })}
                </Stack>

useEffect(()=>{
    fetchHeader()
},[])

}

export default Icons;