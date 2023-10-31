import React, { useEffect, useState } from 'react'
import NavAdmin from '../../components/NavAdmin'
import ModalUpdate from '../../components/ModalUpdate'
import './admin-style.css'
import { Table } from 'react-bootstrap'
import { deleteWebihouseData, fetchWebihouseData, updateWebihouseData } from '../../api'
import FooterAdmin from '../../components/FooterAdmin'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Webitable = () => {
    const navigate = useNavigate()
    const [webihouseData, setWebihouseData] = useState([])

    useEffect(() =>{
        fetchWebihouseData()
        .then((data)=> setWebihouseData(data))
        .catch((error) => console.error(error))
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
          title: 'Apakah anda yakin?',
          text: 'Anda tidak akan dapat mengembalikan ini!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Ya, hapus!',
          cancelButtonText: 'Batal',
        }).then((result) => {
          if (result.isConfirmed) {
            deleteWebihouseData(id)
              .then(() => {
                setWebihouseData((prevData) => prevData.filter((item) => item.id !== id));
                Swal.fire('Deleted!', 'Data has been deleted.', 'success');
              })
              .catch((error) => {
                console.error(error);
                Swal.fire('Error!', 'An error occurred while deleting the data.', 'error');
              });
          }
        });
      };


    // Menampilkan modal Update
    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const handleShowUpdateModal = (item) => {
        setSelectedItem(item)
        setShowUpdateModal(true)
    }

    const handleCloseUpdateModal = () => {
        setSelectedItem(null);
        setShowUpdateModal(false);
      };

    const handleUpdateData = (updateData) => {
        if (selectedItem) {
            updateWebihouseData(selectedItem.id, updateData)
            .then((updatedItem)=> {
                setWebihouseData((prevData)=> {
                    const updatedIndex = prevData.findIndex((item)=> item.id === updatedItem.id)
                    if(updatedIndex !== -1) {
                        const newData = [...prevData]
                        newData[updatedIndex] = updatedItem
                        return newData
                    }
                    return prevData
                })
                setShowUpdateModal(false);
            })
            .catch((error) => console.error(error));
        }
    }

    const [searchKeyword, setSearchKeyword] = useState('');

    
    

  return (
    <div>
        <NavAdmin/>
        <div className='container my-5'>
        <div className='title'>
            <p>Admin/List Unit</p>
            <h1>List Unit</h1>
        </div>
        
        <div className='search-box'>

        <input
          type="text"
          placeholder="Search..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className='mb-3 '
        />
        </div>

        <div className='mb-4 d-flex justify-content-end'>
            <button onClick={()=> navigate('/admin/form')}>+Tambah Data</button>
        </div>

        <div className="table-container">
        <Table bordered variant='light'>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Image Avatar</th>  
                    <th>Image Product</th>
                    <th>Description</th>
                    <th>Harga</th>
                    <th>Fasilitas</th>
                    <th>Image Detail</th>
                    <th>Status</th>
                    <th>Domisili</th>
                    <th>Gmaps</th>
                    <th className="action-col">Action</th>
                </tr>
            </thead>
            <tbody>
                {webihouseData.map((item, index)=>(
                    searchKeyword &&
                !(
                item.Title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                item.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                item.description.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                item.domisili.toLowerCase().includes(searchKeyword.toLowerCase())
                ) ? null : (
                <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.Title}</td>
                    <td>{item.name}</td>
                    <td>{item.contact}</td>
                    <td><img src={item.imageAvatar} alt="avatar" style={{maxWidth:'100px'}} /></td>
                    <td><img src={item.imageProduct} alt='rumah' style={{maxWidth:'100px'}} /></td>
                    <td>{item.description}</td>
                    <td>{item.harga}</td>
                    <td>
                        {item.fasilitas[0]};  
                        {item.fasilitas[1]};  
                        {item.fasilitas[2]};  
                        {item.fasilitas[3]}; 
                        {item.fasilitas[4]}</td>
                    <td>{item.imageDetail.map((image, index) => (
                        <img
                        key={index}
                        src={image}
                        alt={`detailimage${index}`}
                        style={{ maxWidth: '100px' }}/>
                    ))}</td>
                    <td>{item.status}</td>
                    <td>{item.domisili}</td>
                    <td><iframe src={item.gmaps}  style={{Width:'80px', height:'80px'}}></iframe></td>
                    <td>
                    <div className='action-buttons'>
                    <button onClick={()=> handleDelete(item.id)} className='me-2'>Delete</button>
                    <button onClick={() => handleShowUpdateModal(item)}>Update Data</button>
                    </div>
                    </td>
                    
                    
                </tr>

                )))}
               
            </tbody>
        </Table>
        </div>
        </div>

        <ModalUpdate
        show={showUpdateModal}
        handleClose={handleCloseUpdateModal}
        handleUpdate={handleUpdateData}
        initialValues={selectedItem}/>

        <FooterAdmin/>
    </div>
  )
}

export default Webitable