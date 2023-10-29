import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Modal, Button, Form as BootstrapForm  } from 'react-bootstrap'
import * as Yup from 'yup'

const ModalUpdate = ({ show, handleClose, handleUpdate, initialValues }) => {

    const validationSchema = Yup.object().shape({
        Title: Yup.string().required('Title is required'),
        name: Yup.string().required('Name is required'),
        contact: Yup.number().required('Contact is required'),
        imageProduct: Yup.string().required('Image Product is required'),
        description: Yup.string().required('Description is required'),
        status: Yup.string().required('Status is required'),
        domisili: Yup.string().required('Domisili is required'),
        harga: Yup.string().required('Harga is required'),
        gmaps: Yup.string().required('Gmaps Product is required'),
      });
    
  return (
    <div>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Update List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  handleUpdate(values);
                  handleClose();
                }}
                >
                    {()=> (
                           <Form>
                           {/* Form input fields */}
                           <BootstrapForm.Group>
                             <BootstrapForm.Label htmlFor="Title">Title:</BootstrapForm.Label>
                             <Field type="text" name="Title" as={BootstrapForm.Control} />
                             <ErrorMessage name="Title" component="div" className="text-danger" />
                           </BootstrapForm.Group>
                           
                           <BootstrapForm.Group>
                             <BootstrapForm.Label htmlFor="name">Name</BootstrapForm.Label>
                             <Field type="text" name="name" as={BootstrapForm.Control} />
                             <ErrorMessage name="name" component="div" className="text-danger" />
                           </BootstrapForm.Group>

                           <BootstrapForm.Group>
                             <BootstrapForm.Label htmlFor="contact">Contact</BootstrapForm.Label>
                             <Field type="text" name="contact" as={BootstrapForm.Control} />
                             <ErrorMessage name="contact" component="div" className="text-danger" />
                           </BootstrapForm.Group>
                           
                           <BootstrapForm.Group>
                             <BootstrapForm.Label htmlFor="imageAvatar">Image Avatar</BootstrapForm.Label>
                             <Field type="text" name="imageAvatar" as={BootstrapForm.Control} />
                             <ErrorMessage name="imageAvatar" component="div" className="text-danger" />
                           </BootstrapForm.Group>

                           <BootstrapForm.Group>
                             <BootstrapForm.Label htmlFor="imageProduct">Image Product</BootstrapForm.Label>
                             <Field type="text" name="imageProduct" as={BootstrapForm.Control} />
                             <ErrorMessage name="imageProduct" component="div" className="text-danger" />
                           </BootstrapForm.Group>
                           
                           <BootstrapForm.Group>
                             <BootstrapForm.Label htmlFor="imageDetail[0]">Image Detail 1</BootstrapForm.Label>
                             <Field type="text" name="imageDetail[0]" as={BootstrapForm.Control} />
                             <ErrorMessage name="imageDetail[0]" component="div" className="text-danger" />
                           </BootstrapForm.Group>
                           
                           <BootstrapForm.Group>
                             <BootstrapForm.Label htmlFor="imageDetail[1]">Image Detail 2</BootstrapForm.Label>
                             <Field type="text" name="imageDetail[1]" as={BootstrapForm.Control} />
                             <ErrorMessage name="imageDetail[1]" component="div" className="text-danger" />
                           </BootstrapForm.Group>
                           
                           <BootstrapForm.Group>
                             <BootstrapForm.Label htmlFor="imageDetail[2]">Image Detail 3</BootstrapForm.Label>
                             <Field type="text" name="imageDetail[2]" as={BootstrapForm.Control} />
                             <ErrorMessage name="imageDetail[2]" component="div" className="text-danger" />
                           </BootstrapForm.Group>
                           
                           <BootstrapForm.Group>
                             <BootstrapForm.Label htmlFor="imageDetail[3]">Image Detail 4</BootstrapForm.Label>
                             <Field type="text" name="imageDetail[3]" as={BootstrapForm.Control} />
                             <ErrorMessage name="imageDetail[3]" component="div" className="text-danger" />
                           </BootstrapForm.Group>
                           
                           

                           <BootstrapForm.Group>
                            <BootstrapForm.Label htmlFor='status'>Status</BootstrapForm.Label>
                            <Field as='select' name='status' className='form-select'>
                            <option value='Dijual'>Dijual</option>
                            <option value='Disewakan'>Disewakan</option>
                            </Field>
                            <ErrorMessage name='status' component='div' className='text-danger' />
                          </BootstrapForm.Group>

                          
                          <BootstrapForm.Group>
                            <BootstrapForm.Label htmlFor='domisili'>Domisili</BootstrapForm.Label>
                            <Field type='text' name='domisili'as={BootstrapForm.Control} />
                            <ErrorMessage name='domisili' component='div' className='text-danger' />
                         </BootstrapForm.Group>

                         <BootstrapForm.Group>
                            <BootstrapForm.Label htmlFor='harga'>Harga</BootstrapForm.Label>
                            <Field type='text' name='harga' className='form-control' />
                            <ErrorMessage name='harga' component='div' className='text-danger' />
                          </BootstrapForm.Group>

                          <BootstrapForm.Group>
                            <BootstrapForm.Label htmlFor='fasilitas[0]'>Luas Tanah</BootstrapForm.Label>
                            <Field type='number' name='fasilitas[0]' className='form-control' />
                            <ErrorMessage name='fasilitas' component='div' className='text-danger' />
                          </BootstrapForm.Group>

                          <BootstrapForm.Group>
                            <BootstrapForm.Label htmlFor='fasilitas[1]'>Lebar Bangunan</BootstrapForm.Label>
                            <Field type='number' name='fasilitas[1]' className='form-control' />
                            <ErrorMessage name='fasilitas' component='div' className='text-danger' />
                          </BootstrapForm.Group>

                          <BootstrapForm.Group>
                            <BootstrapForm.Label htmlFor='gmaps'>Gmaps</BootstrapForm.Label>
                            <Field type='text' name='gmaps' className='form-control' />
                            <ErrorMessage name='gmaps' component='div' className='text-danger' />
                          </BootstrapForm.Group>

                          <BootstrapForm.Group>
                            <BootstrapForm.Label htmlFor='fasilitas[2]'>Lantai</BootstrapForm.Label>
                            <Field type='text' name='fasilitas[2]' className='form-control'></Field>
                            <ErrorMessage name='fasilitas' component='div' className='text-danger' />
                          </BootstrapForm.Group>

                          <BootstrapForm.Group>
                            <BootstrapForm.Label htmlFor='fasilitas[3]'>Kamar Tidur</BootstrapForm.Label>
                            <Field type='text' name='fasilitas[3]' className='form-control'>
                            </Field>
                            <ErrorMessage name='fasilitas' component='div' className='text-danger' />
                          </BootstrapForm.Group>

                          <BootstrapForm.Group>
                            <BootstrapForm.Label htmlFor='fasilitas[4]'>Kamar Mandi</BootstrapForm.Label>
                            <Field type='text' name='fasilitas[4]' className='form-control'></Field>
                            <ErrorMessage name='fasilitas' component='div' className='text-danger' />
                          </BootstrapForm.Group>

                          <BootstrapForm.Group>
                             <BootstrapForm.Label htmlFor="description">Description</BootstrapForm.Label>
                             <Field as="textarea" name="description" className="form-control" />
                             <ErrorMessage name="description" component="div" className="text-danger" />
                           </BootstrapForm.Group>




             
                           <Button variant="primary" type="submit" className='mt-3'>
                             Update
                           </Button>
                         </Form>
                

                    )}

                 
                </Formik>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default ModalUpdate