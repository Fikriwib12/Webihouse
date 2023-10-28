import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { fetchWebihouseData, postWebihouseData } from '../../api'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import * as Yup from 'yup'

const Dashboard = () => {

    const [webihouseData, setWebihouseData] = useState([])

    useEffect(() => {
        fetchWebihouseData()
        .then((data) => setWebihouseData (data))
        .catch((error) => console.error(error))
    },[])

    const validationSchema = Yup.object().shape({
        Title: Yup.string().required('Title is required'),
        name: Yup.string().required('Name is required'),
        contact: Yup.number().required('Contact is required'),
        imageProduct: Yup.string().required('Image Product is required'),
        description: Yup.string().required('Description is required'),
        imageDetail: Yup.array().of(Yup.string()).required('Image Detail is required'),
        status: Yup.string().required('Status is required'),
        domisili: Yup.string().required('Domisili is required'),
      });

      const initialValues = {
        Title: '',
        name: '',
        contact: '',
        imageProduct: '',
        description: '',
        imageDetail: ['', '', ''],
        status: '',
        domisili: '',
      };

      const handleSubmit = (values, { resetForm }) => {
        postWebihouseData(values)
          .then(() => {
            resetForm();
          })
          .catch((error) => console.error(error));
      };
  return (
    <div>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
         {({values, isSubmitting}) => (
             <Form>
             <div className="mb-3">
                 <label htmlFor="Title">Title:</label>
                 <Field type="text" name="Title" className="form-control"/>
                 <ErrorMessage name='Title' component="div" className='text-danger'/>
             </div>
             <div className="mb-3">
                 <label htmlFor="name">name</label>
                 <Field type="text" name="name" className="form-control"/>
                 <ErrorMessage name='name' component="div" className='text-danger'/>
             </div>
             <div className="mb-3">
                 <label htmlFor="contact">contact</label>
                 <Field type="number" name="contact" className="form-control"/>
                 <ErrorMessage name='contact' component="div" className='text-danger'/>
             </div>
             <div className="mb-3">
                 <label htmlFor="imageProduct">Image Product</label>
                 <Field type="text" name="imageProduct" className="form-control"/>
                 <ErrorMessage name='imageProduct' component="div" className='text-danger'/>
             </div>
             <div className="mb-3">
                 <label htmlFor="description">Description</label>
                 <Field type="text" name="description" className="form-control"/>
                 <ErrorMessage name='description' component="div" className='text-danger'/>
             </div>
             <div className="mb-3">
                <label htmlFor="imageDetail1">Image Detail 1</label>
                <Field type="text" name="imageDetail[0]" className="form-control" />
                <ErrorMessage name='imageDetail[0]' component="div" className='text-danger' />
            </div>
            <div className="mb-3">
                <label htmlFor="imageDetail2">Image Detail 2</label>
                <Field type="text" name="imageDetail[1]" className="form-control" />
                <ErrorMessage name='imageDetail[1]' component="div" className='text-danger' />
            </div>
            <div className="mb-3">
                <label htmlFor="imageDetail3">Image Detail 3</label>
                <Field type="text" name="imageDetail[2]" className="form-control" />
                <ErrorMessage name='imageDetail[2]' component="div" className='text-danger' />
            </div>
            <div className="mb-3">
                <label htmlFor="status">Status</label>
                <Field as="select" name="status" className="form-select">
                  <option value="Dijual">Dijual</option>
                  <option value="Disewakan">Disewakan</option>
                </Field>
                <ErrorMessage name="status" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
                 <label htmlFor="domisili">Domisili</label>
                 <Field type="text" name="domisili" className="form-control"/>
                 <ErrorMessage name='domisili' component="div" className='text-danger'/>
             </div>
             <Button type='submit' variant='primary' disabled={isSubmitting}>
                Submit
             </Button>
            </Form>
         )}   
        </Formik>
       
        <h1>Tes Admin Page</h1>
        <Table bordered variant='primary'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Name</th>
                    <th>Contact</th>  
                    <th>Image Product</th>
                    <th>Description</th>
                    <th>Image Detail</th>
                    <th>Status</th>
                    <th>Domisili</th>
                    
                </tr>
            </thead>
            <tbody>
                {webihouseData.map((item)=>(
                <tr key={item.id}>
                    <td>{item.Title}</td>
                    <td>{item.name}</td>
                    <td>{item.contact}</td>
                    <td>{item.imageProduct}</td>
                    <td>{item.description}</td>
                    <td>{item.imageDetail.join(',')}</td>
                    <td>{item.status}</td>
                    <td>{item.domisili}</td>
                </tr>

                ))}
               
            </tbody>
        </Table>
    </div>
  )
}

export default Dashboard