import React,{useState,useEffect} from 'react'
import Card from './card';
import Table from './Table';

const Buslist = () => {
  const [grounds, setGrounds] = useState([]);
  const [selectedGround, setSelectedGround] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [busDetails, setBusDetails] = useState(null);

  
  useEffect(() => {
    fetchGrounds()
      .then(data => setGrounds(data))
      .catch(error => console.error('Error fetching grounds:', error));
  }, []);

  useEffect(() => {
    if (selectedGround) {
      fetchBusDetails(selectedGround, searchTerm)
        .then(data => setBusDetails(data))
        .catch(error => console.error('Error fetching bus details:', error));
    }
  }, [selectedGround, searchTerm]);

  const handleGroundChange = (e) => {
    setSelectedGround(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCardClick = (busNumber) => {
    fetchStudentDetails(busNumber)
      .then(data => console.log(data)) 
      .catch(error => console.error('Error fetching student details:', error));
  };

  const fetchGrounds = async () => {
    return ['Kakinada', 'Rajamundry', 'Petapuram'];
  };
  
  const fetchBusDetails = async (ground, searchTerm) => {
    return Array.from({ length: 12 }, (_, index) => ({
      busNumber: `Bus ${index + 1}`,
      studentCount: Math.floor(Math.random() * 20)
    }));
  };
  
  const fetchStudentDetails = async (busNumber) => {
    return { busNumber, students: [] };
  };
  return (
    <div className='flex justify-center items-center h-full w-full'>
       <div className='flex justify-center items-center flex-col h-full w-full'>
      <div className='md:flex  justify-around mb-[20px]   h-[20%] w-[80%] items-center '>
        <select onChange={handleGroundChange} className='border border-black w-full  md:w-[20%] md:h-[40%] font-medium text-lg p-3 rounded-md '>
          <option value="">Select Ground</option>
          {grounds.map((ground, index) => (
            <option key={index} value={ground} >{ground}</option>
          ))}
        </select>
        <div className='md:h-full h-[60%] md:w-[60%] w-full flex items-center justify-center '>
        <input className='border rounded-md px-4 py-2 outline-none md:w-[40%] w-full md:h-[40%] border-black mr-7' type="text" placeholder="Search Bus Number"  value={searchTerm} onChange={handleSearchChange} />
        <button className="bg-[#004466] text-white rounded-xl px-4 py-2 w-[90px] h-[35px] border-none outline-none">Search</button>
        </div>
      </div>
      <div style={{ display: 'grid',  gap: '20px' }} className='h-[70%] w-[80%]  flex items-center justify-center md:grid-cols-4 grid-cols-2 gap-4'>
        {[...Array(12)].map((_, index) => (
          <Card key={index} busNumber={`Bus ${index + 1}`} onClick={() => handleCardClick(`Bus ${index + 1}`)} />
        ))}

      </div>
      {/* {busDetails && (
        <Table data={busDetails} />
      )} */}
    </div>
    </div>
  )
}

export default Buslist
