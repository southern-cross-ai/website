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
          <h2 style={headlineStyle}>Code Contribution</h2>
          <p style={textStyle}>
            If you want to make code contribution to this project, please raise issues on the GitHub repository and the administor will contact you soon.
          </p>
          
          <div style={{ margin: '20px 0' }}></div>

          <h2 style={headlineStyle}>Model Innovation</h2>
          <p style={textStyle}>
            If you have want to inspire us with your model design, please contact us with discord or raise issues on Github repository.
          </p>
        </div>

        <div style={columnStyle}>
          <h2 style={headlineStyle}>Data Contribution</h2>
          <p style={textStyle}>
            We are looking for more diverse data that can represent the nurances of Australian culture for model training. If you have any data that you think can help us, please contact us.
          </p>
          
          <div style={{ margin: '20px 0' }}></div>

          <h2 style={headlineStyle}>Fund or Hardwares</h2>
          <p style={textStyle}>
            Fund or hardwares will well support the development of this project. If you are interested in supporting us, please contact us.
          </p>
        </div>
      </div>
      <div style={{ margin: '50px 0' }}></div>
    </div>

  );
}

