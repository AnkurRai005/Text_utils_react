

export default function About(props) {
  return (
    <>
      <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', border: props.mode === 'light' ? '1px solid black' : '1px solid white'}}>
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}>
                History:
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={{ color: props.mode === 'light' ? 'black' : 'white'}}>
                <strong>Developed in May of 2023 as a minor React based Project.</strong><br /> It is a utility system to manipulate your text as you like it. Many features will be added as the developer is eager on supporting this website. Please contact the developer for any feature that you like to get added.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', border: props.mode === 'light' ? '1px solid black' : '1px solid white' }}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}>
                Contact the Developer:
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
              <div className="accordion-body" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                You can <strong><a href="mailto:aadarsh9196@gmail.com" style={{textDecoration: 'none', color: props.mode === 'light' ? 'blue' : 'lightblue'}}>Email</a></strong> the developer regarding anything and he will definitely get back to you with a response.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', border: props.mode === 'light' ? '1px solid black' : '1px solid white' }}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}>
                Developed By:
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <strong><a href="https://ankurkumarrai.in/" target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: props.mode === 'light' ? 'blue' : 'lightblue'}}>Ankur Kumar Rai</a></strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
