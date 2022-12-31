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


<Stack direction='horizontal' gap={8}>
                {headerInfo.map(header => {
                    
                    if(!header){
                        return <div>One moment please...</div>

                    } else {
                        return (
                
                            <div class="center">
            
                            
                                <Figure class="center">
                                    <Figure.Image
                                        width={'25%'}
                                        height={'auto'}
                                        alt={header.name}
                                        src={header.image}
                                        id="icon-soc"
                                        />
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