import React from 'react'
import NavAdmin from '../../components/NavAdmin'
import { postWebihouseData } from '../../api'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import { Button, Col, Container, Form as BootstrapForm, Row, Alert } from 'react-bootstrap'
import * as Yup from 'yup'
import FooterAdmin from '../../components/FooterAdmin'

const Webiform = () => {
  const validationSchema = Yup.object().shape({
    Title: Yup.string().required('Title is required'),
    name: Yup.string().required('Name is required'),
    contact: Yup.number().required('Contact is required'),
    harga: Yup.string().required('Harga is required'),
    imageProduct: Yup.string().required('Image Product is required'),
    description: Yup.string().required('Description is required'),
    
    status: Yup.string().required('Status is required'),
    domisili: Yup.string().required('Domisili is required'),
    imageAvatar: Yup.string().required('Image Avatar is required'),
    
    gmaps: Yup.string().required('Gmaps is required')
    
  });

  const initialValues = {
    Title: '',
    name: '',
    contact: '',
    harga: '',
    imageProduct: '',
    description: '',
    imageDetail: ['', '', '', ''],
    status: 'Dijual', // Set a default value
    domisili: '',
    imageAvatar:'',
    fasilitas: ['', '', '1 Lantai', '1 Kamar Tidur', '1 Kamar Mandi'],
    gmaps:'',
  };

  const handleSubmit = (values, { resetForm }) => {
    postWebihouseData(values)
      .then(() => {
        resetForm();
        alert('succes')
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <NavAdmin />

      <Container className='my-5'>
        <div className='title'>
          <p>Admin/Form</p>
          <h1>Form Unit</h1>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Row className='mb-3'>
                <Col md={6}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='Title'>Title:</BootstrapForm.Label>
                    <Field type='text' name='Title' className='form-control' />
                    <ErrorMessage name='Title' component='div' className='text-danger' />
                  </BootstrapForm.Group>
                </Col>
                <Col md={6}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='name'>Name</BootstrapForm.Label>
                    <Field type='text' name='name' className='form-control' />
                    <ErrorMessage name='name' component='div' className='text-danger' />
                  </BootstrapForm.Group>
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col md={6}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='contact'>Contact</BootstrapForm.Label>
                    <Field type='number' name='contact' className='form-control' />
                    <ErrorMessage name='contact' component='div' className='text-danger' />
                  </BootstrapForm.Group>
                </Col>
                <Col md={6}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='imageAvatar'>Image Avatar</BootstrapForm.Label>
                    <Field type='text' name='imageAvatar' className='form-control' />
                    <ErrorMessage name='imageAvatar' component='div' className='text-danger' />
                  </BootstrapForm.Group>
                </Col>
                <Col md={12}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='imageProduct'>Image Product</BootstrapForm.Label>
                    <Field type='text' name='imageProduct' className='form-control' />
                    <ErrorMessage name='imageProduct' component='div' className='text-danger' />
                  </BootstrapForm.Group>
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col md={3}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='imageDetail[0]'>Image Detail 1</BootstrapForm.Label>
                    <Field type='text' name='imageDetail[0]' className='form-control' />
                    <ErrorMessage name='imageDetail[0]' component='div' className='text-danger' />
                  </BootstrapForm.Group>
                </Col>
                <Col md={3}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='imageDetail[1]'>Image Detail 2</BootstrapForm.Label>
                    <Field type='text' name='imageDetail[1]' className='form-control' />
                    <ErrorMessage name='imageDetail[1]' component='div' className='text-danger' />
                  </BootstrapForm.Group>
                </Col>
                <Col md={3}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='imageDetail[2]'>Image Detail 3</BootstrapForm.Label>
                    <Field type='text' name='imageDetail[2]' className='form-control' />
                    <ErrorMessage name='imageDetail[2]' component='div' className='text-danger' />
                  </BootstrapForm.Group>
                </Col>
                <Col md={3}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='imageDetail[3]'>Image Detail 4</BootstrapForm.Label>
                    <Field type='text' name='imageDetail[3]' className='form-control' />
                    <ErrorMessage name='imageDetail[3]' component='div' className='text-danger' />
                  </BootstrapForm.Group>
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col md={4}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='status'>Status</BootstrapForm.Label>
                    <Field as='select' name='status' className='form-select'>
                      <option value='Dijual'>Dijual</option>
                      <option value='Disewakan'>Disewakan</option>
                    </Field>
                    <ErrorMessage name='status' component='div' className='text-danger' />
                  </BootstrapForm.Group>
                </Col>
                <Col md={4}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='domisili'>Domisili</BootstrapForm.Label>
                    <Field type='text' name='domisili' className='form-control' />
                    <ErrorMessage name='domisili' component='div' className='text-danger' />
                  </BootstrapForm.Group>
                </Col>
                <Col md={4}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='harga'>Harga</BootstrapForm.Label>
                    <Field type='text' name='harga' className='form-control' />
                    <ErrorMessage name='harga' component='div' className='text-danger' />
                  </BootstrapForm.Group>
                </Col>
                <Col md={4} className='mt-2'>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='fasilitas[0]'>Luas Tanah</BootstrapForm.Label>
                    <Field type='number' name='fasilitas[0]' className='form-control' />
                    <ErrorMessage name='fasilitas' component='div' className='text-danger' />
                  </BootstrapForm.Group>
                </Col>
                <Col md={4} className='mt-2'>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='fasilitas[1]'>Lebar Bangunan</BootstrapForm.Label>
                    <Field type='number' name='fasilitas[1]' className='form-control' />
                    <ErrorMessage name='fasilitas' component='div' className='text-danger' />
                  </BootstrapForm.Group>
                </Col>
                <Col md={4} className='mt-2'>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='gmaps'>Gmaps</BootstrapForm.Label>
                    <Field type='text' name='gmaps' className='form-control' />
                    <ErrorMessage name='gmaps' component='div' className='text-danger' />
                  </BootstrapForm.Group>
                </Col>
                <Col md={4} className='mt-2'>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='fasilitas[2]'>Lantai</BootstrapForm.Label>
                    <Field type='text' name='fasilitas[2]' className='form-control'></Field>
                  </BootstrapForm.Group>
                </Col>
                <Col md={4} className='mt-2'>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='fasilitas[3]'>Kamar Tidur</BootstrapForm.Label>
                    <Field type='text' name='fasilitas[3]' className='form-control'></Field>
                  </BootstrapForm.Group>
                </Col>
                <Col md={4} className='mt-2'>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='fasilitas[4]'>Kamar Mandi</BootstrapForm.Label>
                    <Field type='text' name='fasilitas[4]' className='form-control'></Field>
                  </BootstrapForm.Group>
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label htmlFor='description'>Description</BootstrapForm.Label>
                    <Field as='textarea' name='description' className='form-control' rows={6} />
                    <ErrorMessage name='description' component='div' className='text-danger' />
                  </BootstrapForm.Group>
                </Col>
              </Row>
              <Button type='submit' variant='primary' disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>

      <FooterAdmin/>
    </div>
  );
}

export default Webiform;
