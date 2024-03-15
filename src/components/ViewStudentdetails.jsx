import React,{useState}from 'react'

const ViewStudentdetails = () => {
    const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState({});

  const fetchData = async () => {
    
    const response = await fetch(`https://api.example.com/data?search=${searchQuery}`);
    const jsonData = await response.json();
    setData(jsonData); 
  };

  const handleSearch = () => {
    fetchData(); 
  };
  const details = {
    "firstname": "Ramya Sri",
    "lastname": "Rayudu",
    "rollno": "21A91A05I1",
    "college": "AEC",
    "branch": "CSE",
    "year": 3,
    "semester": 6,
    "passout": 2025,
    "email": "21A91A05I1@aec.edu.in",
    "phoneNumber": "8096199515",
    "cityName": "Oobalanka",
    "busRoute": "Ravulapalem",
    "feePaid": false,
    "isBusCanceled": false,
  }
  return (
    <div className='h-full w-full  flex items-center justify-center flex-col'>
      <div className=' h-[60px] md:w-[25%]  flex items-center justify-between mb-4'>
      <input
      className="border rounded-md px-4 py-2  outline-none w-[60%] border-black"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      <button  className="bg-[#004466] text-white rounded-xl px-4 py-2 w-[90px] h-[35px] border-none outline-none" onClick={handleSearch}>Search</button>
      </div>
      <div className='h-[40%] md:w-[30%] border border-slate-200 rounded-md w-[70%]'>
      <table className=' h-full w-full text-lg shadow-md '>
        <tbody>
          <tr>
            <th>Name:</th>
            <td>{details.firstname+" "+details.lastname}</td>
          </tr>
          <tr>
            <th>RollNo:</th>
            <td>{details.rollno}</td>
          </tr>
          <tr>
            <th>City:</th>
            <td>{details.cityName}</td>
          </tr>
          <tr>
            <th>BusRoute:</th>
            <td>{details.busRoute}</td>
          </tr>
          
        </tbody>
      </table>
      </div>
      
    </div>
  )
}

export default ViewStudentdetails
