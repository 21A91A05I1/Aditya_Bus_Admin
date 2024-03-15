import React,{useState} from 'react'


const Operatordetails = () => {
  const[formData,setFormData]=useState({
    fname:'',
    lname: '',
    opeid:'',
    phn:'',
    password:'',
  })

  const handleChange = (e) => {
       const { name, value } = e.target;
         setFormData({
          ...formData,
          [name]: value,
        });
       };
 const [errors, setErrors] = useState({});

 const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = {};
       if (!formData.fname.trim()) {
         validationErrors.fname = 'Fname is required';
       }
       if(!formData.lname.trim()){
        validationErrors.lname = 'Lname is required';
       }
       if(!formData.opeid.trim()){
        validationErrors.opeid = 'Operator Id is required';
       }
       if(!formData.phn.trim()){
        validationErrors.phn = 'Phone number is required';
       }
       if (!formData.password.trim()) {
         validationErrors.password = 'Password is required';
       }
       if (Object.keys(validationErrors).length > 0) {
         setErrors(validationErrors);
       } else {
         
         console.log('Form submitted:', formData);
       }
 }
 
  return (
    <div className='h-full w-full flex items-center justify-center '>
      <div className='min-h-[85%] w-[30%] p-6 rounded-xl shadow-md'>
        <h1 className='text-2xl font-medium text-center mb-4'>Add Operator</h1>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label className="block text-gray-700 text-sm font-bold  mb-2"  >First Name</label>
                <input
            className="border rounded-md px-4 py-2 w-full outline-none"
            name="fname"
            type="text"
            placeholder="Enter your Firstname"
            value={formData.fname}
            onChange={handleChange}
        />{errors.fname && <span className='text-red-500'>{errors.fname}</span>}
            </div>
            <div className='mb-3'>
                <label className="block text-gray-700 text-sm font-bold  mb-2 " >Last Name</label>
                <input
            className="border rounded-md px-4 py-2 w-full outline-none"
            name="lname"
            type="text"
            placeholder="Enter your Lastname"
            value={formData.lname}
            onChange={handleChange}
        />{errors.lname && <span className='text-red-500'>{errors.lname}</span>}
            </div>
            <div className='mb-3'>
                <label className="block text-gray-700 text-sm font-bold  mb-2">OperatorId</label>
                <input
            className="border rounded-md px-4 py-2 w-full outline-none"
            name="opeid"
            type="text"
            placeholder="Enter your Id"
            value={formData.opeid}
            onChange={handleChange}
        />{errors.opeid && <span className='text-red-500'>{errors.opeid}</span>}
            </div>
            <div className='mb-3'>
                <label className="block text-gray-700 text-sm font-bold  mb-2">Phone Number</label>
                <input
            className="border rounded-md px-4 py-2 w-full outline-none"
            name="phn"
            type="text"
            placeholder="Enter your phonenumber"
            value={formData.phn}
            onChange={handleChange}
        />{errors.phn && <span className='text-red-500'>{errors.phn}</span>}
            </div>
            <div className='mb-3'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                <input
            className="border rounded-md px-4 py-2 w-full outline-none"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
        />{errors.password && <span className='text-red-500'>{errors.password}</span>}
            </div>
            <div className='flex items-center justify-center'>
            <button
        className="bg-[#004466] text-white rounded-[40px] px-4 py-2 w-[100px] h-[40px] border-none outline-none"
        type="submit"
    >
        Submit
    </button>
            </div>
        </form>

      </div>
    </div>
  )
}

export default Operatordetails