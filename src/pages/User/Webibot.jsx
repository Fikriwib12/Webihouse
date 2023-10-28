import React, { useState } from 'react'
import NavUser from '../../components/NavUser'
import FooterUser from '../../components/FooterUser'
import { Configuration, OpenAIApi } from 'openai'
import {Form, FloatingLabel, Button , InputGroup, Stack,} from 'react-bootstrap'
import Question from '../../components/Question'


const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
})

const openai = new OpenAIApi (configuration)

const Webibot = () => {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleClick = async()=> {
    setLoading(true)
    try{
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 100,

      })
      setResult(response.data.choices[0].text)
    } catch (error){
      console.error(error)
    }
    setLoading(false)
  }
  return (
    <div>
        <NavUser/>

        
        
        <div className='d-flex justify-content-center align-items-center flex-column mt-5'>

        <h1>Webibot</h1>

        <h4 className='mt-4'>Apa Yang kamu cari?</h4>

        <div className='my-5'>

        <Question/>
        </div>


        

        <main className='main'>
        <Stack>
        
          <InputGroup className="mb-3">
            <Form.Control
            placeholder="Ajukan pertanyaan anda disini"
            aria-describedby="basic-addon2"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            />
              <Button 
              variant="outline-secondary" 
              id="button-addon2"
              onClick={handleClick}
              disabled={loading || prompt.length === 0}>
                {loading ? "Generating..." : "Generate"}
              </Button>
          </InputGroup>
          


        <FloatingLabel controlId="floatingTextarea2">
            <Form.Control
            as="textarea"
            style={{ height: '300px', width: '500px' }}
            value={result}
            readOnly
        />
        </FloatingLabel>
        </Stack>
      
      </main>
      </div>

        <FooterUser/>
    </div>
  )
}

export default Webibot