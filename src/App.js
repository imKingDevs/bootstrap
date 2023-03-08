import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <h1>Go to Next Travel</h1>
      <div className='travel_card'>
        <div className="card m-5" style={{width : '18rem', textAlign: 'center'}}>
          <img src="https://www.planetware.com/photos-large/VIE/vietnam-danang-beach.jpg" className="card-img-top" alt="Beach" title='Beach' />
          <div className="card-body">
            <h5 className="card-title text-capitalize">Beach</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-dark text-capitalize">More About</a>
          </div>
        </div>
        <div className="card m-5" style={{width : '18rem', textAlign: 'center'}}>
          <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-12/11/full/1607655600-5776.jpg" className="card-img-top" alt="Mountain" title='Mountain' />
          <div className="card-body">
            <h5 className="card-title text-capitalize">mountain</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-dark text-capitalize">More About</a>
          </div>
        </div>
        <div className="card m-5" style={{width : '18rem', textAlign: 'center'}}>
          <img src="https://miro.medium.com/max/1200/1*IC7_pdLtDMqwoqLkTib4JQ.jpeg" className="card-img-top" alt="Forest" title='Forest' />
          <div className="card-body">
            <h5 className="card-title text-capitalize">Forest</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-dark text-capitalize">More About</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;