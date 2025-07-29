import { useEffect, useState } from 'react';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className='container mb-5 mt-5 min-vh-100'>
      <div className="container d-flex justify-content-center align-items-center ">
        {!opened ? (
          <div
            className="envelope-closed text-center"
            style={{ cursor: 'pointer' }}
            onClick={() => setOpened(true)}
            data-aos="zoom-in"
          >
            <img
              src="https://www.domtar.com/wp-content/uploads/2023/05/D3_ECEnvelope-Domtar-Paper-Marketing-min.jpg"
              alt="Envelope"
              style={{ width: '300px', background: 'transparent', border: 'none' }}
            />
            <p className="mt-3 text-muted dm-serif-display-regular">Click to open</p>
          </div>
        ) : (
          <div
            className="card shadow-lg text-center p-2 envelope-card "
            style={{
              maxWidth: '550px',
              width: '100%',
              border: 'none'
            }}
            data-aos="fade-up"
          >

            <div className="card-body">
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.pinimg.com/originals/f9/be/36/f9be3671d0e8f43258ccbf2ad6e6191a.gif"
                  alt="Birthday"
                  className="image-cover"
                  data-aos="zoom-in"
                />
              </div><div className="pyro">
                <div className="before"></div>
                {['K_1', 'K_2', 'K_3', 'K_4'].map((img, index) => (
                  <div className="image-wrapper" key={img} data-aos="fade-up" data-aos-delay={index * 400}>
                    <img src={`https://raw.githubusercontent.com/ZXINNATTAPAT/HBDKONG/refs/heads/HBDKong/public/${img}.jpg`} alt="Birthday" className="image-cover" />
                  </div>
                ))} 
                <div className="after"></div>
                <div className="before"></div>
                <div className="image-wrapper surprise-wrapper" data-aos="zoom-in-up" data-aos-delay="500">
                  <img
                    src="https://raw.githubusercontent.com/ZXINNATTAPAT/HBDKONG/refs/heads/HBDKong/public/K_5.jpg"
                    alt="Birthday Surprise"
                    className="image-cover surprise-image"
                  />
                  <div className="surprise-text">Surprise!</div>
                </div>
                <div className="after"></div>

                <p className="card-text fs-5 mb-4 parisienne-regular" data-aos="fade-up" data-aos-delay="700">
                  Happy Birthday, my friend Wishing you strong health, endless joy, and a love that lasts forever
                </p>

                <p className="text-muted fst-italic" data-aos="fade-up" data-aos-delay="800">
                  Design by Nattazxin
                  <img
                    src="https://i.pinimg.com/736x/6e/76/6b/6e766bb2abc3479493c7837c862d7996.jpg"
                    alt="Birthday"
                    className="inline-icon"
                  // style={{ width: "18px", marginLeft: "8px", verticalAlign: "text-bottom" }}
                  />
                </p>
                
              </div>
            </div>
          </div>

        )}
      </div>

    </div>

  );
}

export default App
