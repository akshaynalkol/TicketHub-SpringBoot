import React, { useState } from 'react';
import profile from '../assets/profile.png';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}, ${date.getFullYear()}`;
};

const UserProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        name: 'Farah Khan',
        email: 'farah@gmail.com',
        phone: '9754646993',
        gender: 'Female',
        maritalStatus: 'Unmarried',
        dateOfBirth: '1997-02-24',
    });

    const [originalData, setOriginalData] = useState({ ...userData });

    const [activeTab, setActiveTab] = useState('personalDetails');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        setOriginalData({ ...userData });
    };

    const handleCancel = () => {
        setIsEditing(false);
        setUserData({ ...originalData });
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container pt-4">
            <div className="bg-light py-4 mb-3 d-flex align-items-center">
                <img
                    src={profile}
                    alt="Profile"
                    className="rounded-circle mb-0"
                    style={{ width: '100px', height: '100px', backgroundColor: '#fdd835' }}
                />
                <div className="ms-3">
                    <h4 className="fw-bold">{originalData.name}</h4>
                    <p className="mb-0">{originalData.email}</p>
                    <p>{originalData.phone}</p>
                </div>
            </div>

            <div className="row flex-grow-1">
                <div className="col-md-3 bg-light p-4 min-vh-100">
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a
                                href="#"
                                className={`nav-link ${activeTab === 'personalDetails' ? 'active text-dark bg-warning' : 'text-dark'}`}
                                onClick={() => handleTabClick('personalDetails')}
                            >
                                <i className="bi bi-person me-2"></i>Personal Details
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a
                                href="#"
                                className={`nav-link ${activeTab === 'myBookings' ? 'active text-dark bg-warning' : 'text-dark'}`}
                                onClick={() => handleTabClick('myBookings')}
                            >
                                <i className="bi bi-calendar4-week me-2"></i>My Bookings
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link text-dark">
                                <i className="bi bi-bell me-2"></i>Movie Alerts
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link text-dark">
                                <i className="bi bi-gear me-2"></i>Preferences
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link text-dark">
                                <i className="bi bi-credit-card me-2"></i>Saved Cards
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark">
                                <i className="bi bi-wallet me-2"></i>Gift Card Balance
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-9 p-4">
                    {activeTab === 'personalDetails' ? (
                        <div>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h2 className="fw-bold">Contact Information</h2>

                                {!isEditing && (
                                    <button className="btn btn-link text-decoration-none" onClick={toggleEdit}>
                                        Edit Details
                                    </button>
                                )}
                            </div>

                            {!isEditing ? (
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <strong>Full Name</strong>
                                            <p>{originalData.name}</p>
                                        </div>
                                        <div className="col-6">
                                            <strong>Email</strong>
                                            <p>{originalData.email}</p>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <strong>Phone</strong>
                                            <p>{originalData.phone}</p>
                                        </div>
                                        <div className="col-6">
                                            <strong>Gender</strong>
                                            <p>{originalData.gender}</p>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <strong>Marital Status</strong>
                                            <p>{originalData.maritalStatus}</p>
                                        </div>
                                        <div className="col-6">
                                            <strong>Date of Birth</strong>
                                            <p>{formatDate(originalData.dateOfBirth)}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
                                    <div className="row gy-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                value={userData.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                value={userData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row gy-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Phone</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control"
                                                value={userData.phone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Gender</label>
                                            <select
                                                name="gender"
                                                className="form-select"
                                                value={userData.gender}
                                                onChange={handleInputChange}
                                            >
                                                <option value="Female">Female</option>
                                                <option value="Male">Male</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row gy-3 mb-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Marital Status</label>
                                            <select
                                                name="maritalStatus"
                                                className="form-select"
                                                value={userData.maritalStatus}
                                                onChange={handleInputChange}
                                            >
                                                <option value="Unmarried">Unmarried</option>
                                                <option value="Married">Married</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Date of Birth</label>
                                            <input
                                                type="date"
                                                name="dateOfBirth"
                                                className="form-control"
                                                value={userData.dateOfBirth}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button type="button" className="btn btn-secondary me-2" onClick={handleCancel}>
                                            Cancel
                                        </button>
                                        <button type="submit" className="btn btn-warning">
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    ) : activeTab === 'myBookings' ? (
                        <div className="bg-white p-4 rounded shadow-sm">
                            <h4>No Booking Available</h4>
                            <p>Movie bookings & food orders will appear here</p>
                            <button className="btn btn-warning">Book</button>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;







// import React, { useState } from 'react';

// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}, ${date.getFullYear()}`;
// };

// const UserProfilePage = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [userData, setUserData] = useState({
//     name: 'Farah Khan',
//     email: 'farah242khan@gmail.com',
//     phone: '9754646557',
//     gender: 'Female',
//     maritalStatus: 'Unmarried',
//     dateOfBirth: '1997-02-24',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const toggleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsEditing(false);
//   };

//   return (
//     <div className="container-fluid">
//       {/* Profile Section */}
//       <div className=" bg-light py-4 mb-3">
//         <img
//           src="/path/to/profile-picture.jpg"
//           alt="Profile"
//           className="rounded-circle mb-3"
//           style={{ width: '100px', height: '100px', backgroundColor: '#fdd835' }}
//         />
//         <h4 className="fw-bold">{userData.name}</h4>
//         <p className="mb-0">{userData.email}</p>
//         <p>{userData.phone}</p>
//       </div>

//       <div className="row">
//         {/* Sidebar */}
//         <div className="col-md-3 bg-light p-4">
//           <ul className="nav flex-column">
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link active text-dark bg-warning rounded">
//                 <i className="bi bi-person me-2"></i>Personal Details
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link text-dark">
//                 <i className="bi bi-calendar4-week me-2"></i>My Bookings
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link text-dark">
//                 <i className="bi bi-bell me-2"></i>Movie Alerts
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link text-dark">
//                 <i className="bi bi-gear me-2"></i>Preferences
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link text-dark">
//                 <i className="bi bi-credit-card me-2"></i>Saved Cards
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="nav-link text-dark">
//                 <i className="bi bi-wallet me-2"></i>Gift Card Balance
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="col-md-9 p-4">
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h2 className="fw-bold">Contact Information</h2>
//             <button className="btn btn-link text-decoration-none" onClick={toggleEdit}>
//               {isEditing ? 'Cancel' : 'Edit Details'}
//             </button>
//           </div>

//           {!isEditing ? (
//             <div className="bg-white p-4 rounded shadow-sm">
//               <div className="row mb-3">
//                 <div className="col-6">
//                   <strong>Full Name</strong>
//                   <p>{userData.name}</p>
//                 </div>
//                 <div className="col-6">
//                   <strong>Email</strong>
//                   <p>{userData.email}</p>
//                 </div>
//               </div>
//               <div className="row mb-3">
//                 <div className="col-6">
//                   <strong>Phone</strong>
//                   <p>{userData.phone}</p>
//                 </div>
//                 <div className="col-6">
//                   <strong>Gender</strong>
//                   <p>{userData.gender}</p>
//                 </div>
//               </div>
//               <div className="row mb-3">
//                 <div className="col-6">
//                   <strong>Marital Status</strong>
//                   <p>{userData.maritalStatus}</p>
//                 </div>
//                 <div className="col-6">
//                   <strong>Date of Birth</strong>
//                   <p>{formatDate(userData.dateOfBirth)}</p>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
//               <div className="row mb-3">
//                 <div className="col-md-6">
//                   <label className="form-label">Full Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     className="form-control"
//                     value={userData.name}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control"
//                     value={userData.email}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="row mb-3">
//                 <div className="col-md-6">
//                   <label className="form-label">Phone</label>
//                   <input
//                     type="text"
//                     name="phone"
//                     className="form-control"
//                     value={userData.phone}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label">Gender</label>
//                   <select
//                     name="gender"
//                     className="form-select"
//                     value={userData.gender}
//                     onChange={handleInputChange}
//                   >
//                     <option value="Female">Female</option>
//                     <option value="Male">Male</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="row mb-3">
//                 <div className="col-md-6">
//                   <label className="form-label">Marital Status</label>
//                   <select
//                     name="maritalStatus"
//                     className="form-select"
//                     value={userData.maritalStatus}
//                     onChange={handleInputChange}
//                   >
//                     <option value="Unmarried">Unmarried</option>
//                     <option value="Married">Married</option>
//                   </select>
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label">Date of Birth</label>
//                   <input
//                     type="date"
//                     name="dateOfBirth"
//                     className="form-control"
//                     value={userData.dateOfBirth}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Save Changes
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfilePage;