import React,{useState} from 'react'

const Studentdetails = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState({});

  const fetchData = async () => {
    // Fetch data from backend using searchQuery
    // For demonstration, I'm using a placeholder URL
    const response = await fetch(`https://api.example.com/data?search=${searchQuery}`);
    const jsonData = await response.json();
    setData(jsonData); // Update data state with fetched data
  };

  const handleSearch = () => {
    fetchData(); // Call fetchData when search button is clicked
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
          <tr>
            <td></td>
            <td><button  className="bg-[#004466] text-white rounded-[40px] px-4 py-2 w-[80px] h-[35px] border-none outline-none">Delete</button></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Studentdetails



// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Assuming you have Axios installed

// function TableWithData() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from backend when component mounts
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('YOUR_BACKEND_API_ENDPOINT');
//       setData(response.data); // Assuming your backend response is an array of objects
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Data Table</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             {/* Add more table headers as needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               {/* Render additional data fields as needed */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default TableWithData;
