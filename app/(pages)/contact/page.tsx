import React from 'react';

export default function Contact() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  };

  const columnStyle = {
    width: '45%',
  };

  const headlineStyle = {
    fontSize: '24px',
    color: '#000',
  };

  const textStyle = {
    fontSize: '16px',
    color: '#000',
  };

  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold z-10 text-blue-900">Contact</h1>
      </div>

      <div style={containerStyle}>
        <div style={columnStyle}>
          <h2 style={headlineStyle}>Contact Information</h2>
          <p style={textStyle}>
            Matthew Altenburg<br />
            Technical Lead<br />
            <a href="mailto:matthew.altenburg@anu.edu.au">matthew.altenburg@anu.edu.au</a>
          </p>
          <div style={{ margin: '20px 0' }}></div>
          <p style={textStyle}>
            Andrew Smith<br />
            Researcher Engagement<br />
            <a href="mailto:andrew.smith@anu.edu.au">andrew.smith@anu.edu.au</a>
          </p>
        </div>
      </div>

      <div style={containerStyle}>
        <div style={columnStyle}>
          <h2 style={headlineStyle}>Code Contribution</h2>
          <p style={textStyle}>
            If you want to make code contribution to this project, please raise issues on the GitHub repository and the administrator will contact you soon.
          </p>
          
          <div style={{ margin: '20px 0' }}></div>

          <h2 style={headlineStyle}>Model Innovation</h2>
          <p style={textStyle}>
            If you have ideas to inspire us with your model design, please contact us with Discord or raise issues on our GitHub repository.
          </p>
        </div>

        <div style={columnStyle}>
          <h2 style={headlineStyle}>Data Contribution</h2>
          <p style={textStyle}>
            We are looking for more diverse data that can represent the nuances of Australian culture for model training. If you have any data that you think can help us, please contact us.
          </p>
          
          <div style={{ margin: '20px 0' }}></div>

          <h2 style={headlineStyle}>Fund or Hardwares</h2>
          <p style={textStyle}>
            Fund or hardware support will greatly aid the development of this project. If you are interested in supporting us, please contact us.
          </p>
        </div>
      </div>

      <div style={{ margin: '50px 0' }}></div>
    </div>
  );
}
