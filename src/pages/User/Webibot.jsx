import React, { useState } from 'react';
import NavUser from '../../components/NavUser';
import FooterUser from '../../components/FooterUser';
import { Configuration, OpenAIApi } from 'openai';
import { Form, FloatingLabel, Button, InputGroup, Stack } from 'react-bootstrap';
import Question from '../../components/Question';

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const Webibot = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      if (!prompt.toLowerCase().includes('rumah')) {
        setResult("Maaf, saya tidak bisa menjawab pertanyaan di luar pengetahuan tentang rumah.");
        setLoading(false);
        return;
      }
      if (prompt.toLowerCase().includes('bagaimana cara menjual rumah')) {
        setResult(
          "Untuk menjual rumah di WebiHouse, Anda dapat mengikuti langkah-langkah berikut:\n" +
          "1. Pergi ke menu 'Home' di Website WebiHouse.\n" +
          "2. Klik tombol 'Titipkan Unit Anda' untuk memasarkan rumah Anda.\n" +
          "3. Anda akan langsung diarahkan ke WhatsApp tim WebiHouse untuk memberikan data dan memulai proses pemasaran rumah Anda."
        )
      } else {
        const response = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: prompt,
          temperature: 0.5,
          max_tokens: 100,
        });
        setResult(response.data.choices[0].text);
      }
    } catch (error) {
      console.error(error);
      setResult("Terjadi kesalahan dalam menghasilkan jawaban.");
    }
    setLoading(false);
  };

  return (
    <div>
      <NavUser />
      <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
        <h1>Webibot</h1>
        <h4 className='mt-4'>Apa yang Anda cari?</h4>
        <div className='my-5'>
          <Question />
        </div>
        <main className='main'>
          <Stack>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Ajukan pertanyaan Anda di sini"
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
      <FooterUser />
    </div>
  );
};

export default Webibot;
