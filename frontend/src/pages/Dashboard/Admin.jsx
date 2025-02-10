import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/profile.png';
import { deleteUser, getAllUsers, signUpUser, updateUser } from '../../services/UserService';
import { deleteTheaterOwner, getAllTheaterOwner } from '../../services/TheaterOwnerService';
import { deleteBooking, getAllBookings } from '../../services/BookingService';

const AdminDashboard = () => {
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem('user_details');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('manageUsers');

  /*** Manage Users State & Handlers ***/
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ id: '', name: '', email: '', phone: '', gender: '' });
  const [editingUser, setEditingUser] = useState(null);

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const addUser = async () => {
    if (!newUser.name || !newUser.email || !newUser.phone || !newUser.gender) {
      toast.error("All fields are required for user!");
      return;
    }

    try {
      let res = await signUpUser(newUser);
      // console.log(res);
      toast.success(res.data.message);
      setNewUser({ id: '', name: '', email: '', phone: '', gender: '' });
    } catch (error) {
      // console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
      setNewUser({ id: '', name: '', email: '', phone: '', gender: '' });
    }
  };

  const editUser = (user) => {
    setEditingUser(user);
    setNewUser(user);
  };

  const updateUsers = async () => {
    try {
      let res = await updateUser(newUser.id, newUser);
      // console.log(res);
      toast.success(res.data.message);
      setEditingUser(null);
      setNewUser({ id: '', name: '', email: '', phone: '', gender: '' });
    }
    catch (error) {
      // console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
      setEditingUser(null);
      setNewUser({ id: '', name: '', email: '', phone: '', gender: '' });
    }
  };

  const deleteUsers = async (id) => {
    try {
      let res = await deleteUser(id);
      // console.log(res);
      setUsers(users.filter(user => user.id !== id));
      toast.success(res.data.message);
    }
    catch (error) {
      // console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  const loadAllUsers = async () => {
    let res = await getAllUsers();
    // console.log(res);

    setUsers(res.data);
  }

  useEffect(() => {
    loadAllUsers();
  }, [newUser]);

  /*** Manage Theater Owners State & Handlers ***/
  const [theaterOwners, setTheaterOwners] = useState([]);
  const [newOwner, setNewOwner] = useState({ id: '', name: '', email: '', theater: '' });
  const [editingOwner, setEditingOwner] = useState(null);

  const handleOwnerInputChange = (e) => {
    const { name, value } = e.target;
    setNewOwner({ ...newOwner, [name]: value });
  };

  const addOwner = () => {
    if (!newOwner.name || !newOwner.email || !newOwner.theater) {
      toast.error("All fields are required for theater owner!");
      return;
    }
    setTheaterOwners([...theaterOwners, { ...newOwner, id: theaterOwners.length + 101 }]);
    toast.success("Theater Owner added successfully!");
    setNewOwner({ id: '', name: '', email: '', theater: '' });
  };

  const editOwner = (owner) => {
    setEditingOwner(owner);
    setNewOwner(owner);
  };

  const updateOwner = () => {
    setTheaterOwners(theaterOwners.map(owner => owner.id === newOwner.id ? newOwner : owner));
    toast.success("Theater Owner updated successfully!");
    setEditingOwner(null);
    setNewOwner({ id: '', name: '', email: '', theater: '' });
  };

  const deleteOwner = async (id) => {
    try {
      let res = await deleteTheaterOwner(id);
      // console.log(res);
      setTheaterOwners(theaterOwners.filter(owner => owner.id !== id));
      toast.success(res.data.message);
    }
    catch (error) {
      // console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  const loadAllTheaterOwner = async () => {
    let res = await getAllTheaterOwner();
    // console.log(res);

    setTheaterOwners(res.data);
  }

  useEffect(() => {
    loadAllTheaterOwner();
  }, [newOwner]);

  /*** Manage Bookings State & Handlers ***/
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({ id: '', user: '', movie: '', date: '' });
  const [editingBooking, setEditingBooking] = useState(null);

  const handleBookingInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  const addBooking = () => {
    if (!newBooking.user || !newBooking.movie || !newBooking.date) {
      toast.error("All fields are required for booking!");
      return;
    }
    setBookings([...bookings, { ...newBooking, id: bookings.length + 201 }]);
    toast.success("Booking added successfully!");
    setNewBooking({ id: '', user: '', movie: '', date: '' });
  };

  const editBooking = (booking) => {
    setEditingBooking(booking);
    setNewBooking(booking);
  };

  const updateBooking = () => {
    setBookings(bookings.map(booking => booking.id === newBooking.id ? newBooking : booking));
    toast.success("Booking updated successfully!");
    setEditingBooking(null);
    setNewBooking({ id: '', user: '', movie: '', date: '' });
  };

  const deleteBookings = async (id) => {
    try {
      let res = await deleteBooking(id);
      // console.log(res);
      setBookings(bookings.filter(booking => booking.id !== id));
      toast.success(res.data.message);
    }
    catch (error) {
      // console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  const loadAllBooking = async () => {
    let res = await getAllBookings();
    // console.log(res);

    setBookings(res.data);
  }

  useEffect(() => {
    loadAllBooking();
  }, [newBooking]);

  /*** General Handlers ***/
  const handleTabClick = (tab) => setActiveTab(tab);

  const handleLogout = () => {
    sessionStorage.removeItem('user_details');
    setUser(null);
    // console.log(sessionStorage.getItem('user_details'));
    toast.success("Admin Logout Successfully!!");
    navigate('/');
  };

  return (
    <div className="container pt-4">
      {/* Header Section */}
      <div className="bg-light p-4 mb-3 d-flex align-items-center">
        <img
          src={profile}
          alt="Admin Profile"
          className="rounded-circle"
          style={{ width: '100px', height: '100px' }}
        />
        <div className="ms-3">
          <h4 className="fw-bold">Admin Panel</h4>
          <p className="mb-0">{user?.name}</p>
        </div>
      </div>

      {/* Main Dashboard Section */}
      <div className="row align-items-start">
        {/* Left Navigation Panel */}
        <div className="col-lg-3 col-md-4 bg-light p-4 rounded">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <button
                className={`nav-link w-100 text-start rounded ${activeTab === 'manageUsers' ? 'active text-dark bg-warning' : 'text-dark'}`}
                onClick={() => handleTabClick('manageUsers')}
              >
                <i className="bi bi-people me-2"></i>Manage Users
              </button>
            </li>
            <li className="nav-item mb-2">
              <button
                className={`nav-link w-100 text-start rounded ${activeTab === 'manageTheaterOwners' ? 'active text-dark bg-warning' : 'text-dark'}`}
                onClick={() => handleTabClick('manageTheaterOwners')}
              >
                <i className="bi bi-building me-2"></i>Manage Theater Owners
              </button>
            </li>
            <li className="nav-item mb-2">
              <button
                className={`nav-link w-100 text-start rounded ${activeTab === 'manageBookings' ? 'active text-dark bg-warning' : 'text-dark'}`}
                onClick={() => handleTabClick('manageBookings')}
              >
                <i className="bi bi-bookmark-check me-2"></i>Manage Bookings
              </button>
            </li>
            <button className="btn btn-danger mt-3" onClick={handleLogout}>
              Logout
            </button>
          </ul>
        </div>

        {/* Right Content Panel */}
        <div className="col-lg-9 col-ms-8">
          {/* Manage Users Section */}
          {activeTab === 'manageUsers' && (
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className='fw-bold mb-4'>Manage Users</h2>
              {/* <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="User Name"
                  className="form-control mb-2"
                  value={newUser.name}
                  onChange={handleUserInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="User Email"
                  className="form-control mb-2"
                  value={newUser.email}
                  onChange={handleUserInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="User Phone"
                  className="form-control mb-2"
                  value={newUser.phone}
                  onChange={handleUserInputChange}
                />
                <select
                  name="gender"
                  className="form-select mb-2"
                  value={newUser.gender}
                  onChange={handleUserInputChange}
                >
                  <option value="">Gender</option>
                  <option value="FEMALE">Female</option>
                  <option value="MALE">Male</option>
                </select>
                {editingUser ? (
                  <button className="btn btn-warning" onClick={updateUsers}>
                    Update User
                  </button>
                ) : (
                  <button className="btn btn-success" onClick={addUser}>
                    Add User
                  </button>
                )}
              </div> */}
              <table className="table text-center">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users && users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.gender}</td>
                      <td>
                        {/* <button className="btn btn-primary btn-sm me-2" onClick={() => editUser(user)}>
                          Edit
                        </button> */}
                        <button className="btn btn-danger btn-sm" onClick={() => deleteUsers(user.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Manage Theater Owners Section */}
          {activeTab === 'manageTheaterOwners' && (
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className='fw-bold mb-4'>Manage Theater Owners</h2>
              {/* <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Owner Name"
                  className="form-control mb-2"
                  value={newOwner.name}
                  onChange={handleOwnerInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Owner Email"
                  className="form-control mb-2"
                  value={newOwner.email}
                  onChange={handleOwnerInputChange}
                />
                <input
                  type="text"
                  name="theater"
                  placeholder="Theater Name"
                  className="form-control mb-2"
                  value={newOwner.theater}
                  onChange={handleOwnerInputChange}
                />
                {editingOwner ? (
                  <button className="btn btn-warning" onClick={updateOwner}>
                    Update Owner
                  </button>
                ) : (
                  <button className="btn btn-success" onClick={addOwner}>
                    Add Owner
                  </button>
                )}
              </div> */}
              <table className="table text-center">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Theater</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {theaterOwners.map((owner) => (
                    <tr key={owner.id}>
                      <td>{owner.name}</td>
                      <td>{owner.email}</td>
                      <td>{owner.theaters.map(val => val.name).join()}</td>
                      <td>
                        {/* <button className="btn btn-primary btn-sm me-2" onClick={() => editOwner(owner)}>
                          Edit
                        </button> */}
                        <button className="btn btn-danger btn-sm" onClick={() => deleteOwner(owner.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Manage Bookings Section */}
          {activeTab === 'manageBookings' && (
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className='fw-bold mb-4'>Manage Bookings</h2>
              {/* <div className="mb-3">
                <input
                  type="text"
                  name="user"
                  placeholder="User"
                  className="form-control mb-2"
                  value={newBooking.user}
                  onChange={handleBookingInputChange}
                />
                <input
                  type="text"
                  name="movie"
                  placeholder="Movie"
                  className="form-control mb-2"
                  value={newBooking.movie}
                  onChange={handleBookingInputChange}
                />
                <input
                  type="date"
                  name="date"
                  className="form-control mb-2"
                  value={newBooking.date}
                  onChange={handleBookingInputChange}
                />
                {editingBooking ? (
                  <button className="btn btn-warning" onClick={updateBooking}>
                    Update Booking
                  </button>
                ) : (
                  <button className="btn btn-success" onClick={addBooking}>
                    Add Booking
                  </button>
                )}
              </div> */}
              <table className="table text-center">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Movie</th>
                    <th>Date</th>
                    <th>Theater</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings && bookings?.map((booking) => (
                    <tr key={booking.id}>
                      <td>{booking.user.name}</td>
                      <td>{booking.showtime.movie.title}</td>
                      <td>{booking.bookingDate}</td>
                      <td>{booking.showtime.theater.name}</td>
                      <td>
                        {/* <button className="btn btn-primary btn-sm me-2" onClick={() => editBooking(booking)}>
                          Edit
                        </button> */}
                        <button className="btn btn-danger btn-sm" onClick={() => deleteBookings(booking.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
