import React, { useEffect, useState } from 'react'
import NavAdmin from '../../components/NavAdmin'
import FooterAdmin from '../../components/FooterAdmin'
import {BsHouseDoor, BsHouseGear} from 'react-icons/bs'
import './admin-style.css'
import { fetchWebihouseData } from '../../api'
import SidebarAdmin from '../../components/SidebarAdmin'



const Dashboard2 = () => {
    const [webihouseData, setWebihouseData] = useState([])
    const [disewakanCount, setDisewakanCount] = useState(0)
    const [dijualCount, setDijualCount] = useState(0)

    useEffect(() => {
        fetchWebihouseData()
        .then((data) => {
            // Filter data berdasarkan status "Dijual" dan "Disewakan"
            const dijualData = data.filter((item) => item.status === 'Dijual');
            const disewakanData = data.filter((item) => item.status === 'Disewakan');

            setWebihouseData(data);

            setDijualCount(dijualData.length)
            setDisewakanCount(disewakanData.length)
           
          })
          .catch((error) => console.error(error));
    }, [])

    

   

  return (
    <div>
        <NavAdmin/>
        
        <SidebarAdmin/>
    

        <div className='container my-5'>
        <div className='title'>
            <p>Admin/Dashboard</p>
            <h1>Dashboard</h1>
        </div>
        
        {/* card unit dijual */}
        <div className='item-dashboard my-4'>
        <div className='item1'>
            <div className='d-flex justify-content-center '>
                <h3><BsHouseDoor style={{color:'#6D31EDFF', width:'28px', height:'28px'}}/></h3>
            </div>
            <div className='d-flex justify-content-center'>
                <h1 className='dijualCount'>{dijualCount}</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <p className='unitTerjual'>Unit Dijual</p>
            </div>
            
        </div>
        {/* end card unit dijual */}

        {/* card unit disewakan */}
        <div className='item2'>
        <div className='d-flex justify-content-center '>
                <h3><BsHouseGear style={{color:'#15ABFFFF'}}/></h3>
            </div>
            <div className='d-flex justify-content-center'>
                <h1 className='disewakanCount'>{disewakanCount}</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <p className='unitDisewakan'>Unit Disewakan</p>
            </div>

        </div>
        {/* end card unit disewakan */}
        
        </div>
        
        </div>

        <FooterAdmin/>
    </div>
  )
}

export default Dashboard2