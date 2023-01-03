import { useState, useRef } from 'react'
import './styles/App.css'
import axios from 'axios';
import jsonToTable from 'json-to-table';
import NewWindow from 'react-new-window'
// const jsonToTable = require('json-to-table');

const Demo = (props) => {
  console.log(props.mrRes)
  return(
    <NewWindow>
      <img src={"data:image/png;base64," +  props.mrRes} />
    </NewWindow>
  )
  }


function App() {
  const [duration, setDuration] = useState(0);
  const [records, setRecords] = useState(0);
  const [res, setRes] = useState();
  const [normalRes, setNormalRes] = useState();
  const [exponentialRes, setexponentialRes] = useState();
  const newWindow = useRef(null);
  // const handleChange= (e) => {
    
  // }
  const getUniform = async () => {
    let duration = document.getElementById('duration').value;
    let record = document.getElementById('record').value;

    let payload = new FormData();

    console.log("here", duration, record)

    payload.append('timer', parseInt(duration));
    payload.append('records', parseInt(record));

    console.log("sadsda", payload)

    const respon = await axios.post('http://192.168.0.122:8003/Uniform_distribution', payload)
    console.log("sdad", respon.data)


    setRes(respon.data);

  }
  const getNormal = async () => {
    let duration = document.getElementById('duration').value;
    let record = document.getElementById('record').value;

    let payload = new FormData();

    console.log("here", duration, record)

    payload.append('timer', parseInt(duration));
    payload.append('records', parseInt(record));

    console.log("sadsda", payload)

    const respon = await axios.post('http://192.168.0.122:8003/Normal_distribution', payload)
    console.log("sdad", respon.data)


    setNormalRes(respon.data);

  }
  const getExponential = async () => {
    let duration = document.getElementById('duration').value;
    let record = document.getElementById('record').value;

    let payload = new FormData();

    console.log("here", duration, record)

    payload.append('timer', parseInt(duration));
    payload.append('records', parseInt(record));

    console.log("sadsda", payload)

    const respon = await axios.post('http://192.168.0.122:8003/Exponential_distribution', payload)
    console.log("sdad", respon.data)


    setexponentialRes(respon.data);

  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App">
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Bank Stimulation</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
    </div>
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
      <div className="relative sm:mb-0 flex-grow w-full">
        <label for="duration" className="leading-7 text-sm text-gray-400">Duration:</label>
        <input type="number" id="duration" name="duration" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
    </div>
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
      <div className="pt-4 relative sm:mb-0 flex-grow w-full">
        <label for="record" className="leading-7 text-sm text-gray-400">Number of Records:</label>
        <input type="number" id="record" name="record" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
    </div>
  </div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Uniform Distribution</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
    </div>
    <div className="flex justify-center align-center lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
      <button onClick={getUniform} className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">View Results</button>
    </div>
    {
      res ?(<Demo mrRes={res} change={setRes}/>) : console.log("none")
    }
  </div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Normal Distribution</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
    </div>
    <div className="flex justify-center align-centerlg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
      <button onClick={getNormal} className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">View Results</button>
    </div>
    {
      normalRes ?(<Demo mrRes={normalRes}  change={setNormalRes}/>) : console.log("none")
    }
  </div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Exponential Distribution</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
    </div>
    <div className="flex justify-center align-center lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
      <button onClick={getExponential} className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">View Results</button>
    </div>
    {
      exponentialRes ?(<Demo mrRes={exponentialRes}  change={setexponentialRes}/>) : console.log("none")
    }
  </div>
</section>
    </div>
  )
}

export default App
