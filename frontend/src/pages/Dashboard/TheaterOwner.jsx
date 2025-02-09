import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/profile.png';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { getTheaterOwnerById } from '../../services/TheaterOwnerService';

const TheaterOwnerDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('theaterInfo');
    const [theaterOwners, setTheaterOwners] = useState([]);

    const loadTheaterOwner = async (id) => {
        let res = await getTheaterOwnerById(1);
        // console.log(res);

        setTheaterOwners(res.data);
    }

    useEffect(() => {
        loadTheaterOwner();
    }, []);

    // Mock Data for Movies
    const [movies, setMovies] = useState([
        { id: 1, title: "Avatar", genre: "Sci-Fi", duration: "2h 42m" },
        { id: 2, title: "Titanic", genre: "Romance", duration: "3h 14m" },
    ]);

    // State for Adding/Editing Movies
    const [newMovie, setNewMovie] = useState({ id: '', title: '', genre: '', duration: '' });
    const [editingMovie, setEditingMovie] = useState(null);

    // Handle Input Change
    const handleInputChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };

    // Add Movie
    const handleAddMovie = () => {
        if (!newMovie.title || !newMovie.genre || !newMovie.duration) {
            toast.error("All fields are required!");
            return;
        }
        setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
        toast.success("Movie Added Successfully!");
        setNewMovie({ id: '', title: '', genre: '', duration: '' });
    };

    // Edit Movie
    const handleEditMovie = (movie) => {
        setEditingMovie(movie);
        setNewMovie(movie);
    };

    // Update Movie
    const handleUpdateMovie = () => {
        setMovies(movies.map(movie => (movie.id === newMovie.id ? newMovie : movie)));
        toast.success("Movie Updated Successfully!");
        setEditingMovie(null);
        setNewMovie({ id: '', title: '', genre: '', duration: '' });
    };

    // Delete Movie
    const handleDeleteMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
        toast.success("Movie Deleted Successfully!");
    };

    // Handle Tab Switching
    const handleTabClick = (tab) => setActiveTab(tab);

    // Logout Function
    const handleLogout = () => {
        sessionStorage.removeItem('user_details');
        setUser(null);
        // console.log(sessionStorage.getItem('user_details'));
        toast.success("TheaterOwner Logout Successfully!!");
        navigate('/');
    };

    // Register Chart.js components
    ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

    const chartData = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: "Tickets Sold",
                data: [100, 200, 150, 300, 250],
                backgroundColor: ["rgba(243, 156, 18, 0.5)", "rgba(231, 76, 60, 0.5)", "rgba(52, 152, 219, 0.5)", "rgba(46, 204, 113, 0.5)", "rgba(155, 89, 182, 0.5)"],
                borderColor: ["#f39c12", "#e74c3c", "#3498db", "#2ecc71", "#9b59b6"],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="container pt-4">
            <div className="bg-light p-4 mb-3 d-flex align-items-center">
                <img src={profile} alt="Theater Owner" className="rounded-circle" style={{ width: '100px', height: '100px' }} />
                <div className="ms-3">
                    <h4 className="fw-bold">Theater Owner Panel</h4>
                    <p className="mb-0">owner@tickethub.com</p>
                </div>
            </div>

            <div className="row align-items-start">
                <div className="col-lg-3 col-md-4 bg-light p-4 rounded">
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <button className={`nav-link w-100 text-start rounded ${activeTab === 'theaterInfo' ? 'active text-dark bg-warning' : 'text-dark'}`} onClick={() => handleTabClick('theaterInfo')}>
                                <i className="bi bi-house-door me-2"></i>Theater Info
                            </button>
                        </li>
                        <li className="nav-item mb-2">
                            <button className={`nav-link w-100 text-start rounded ${activeTab === 'manageMovies' ? 'active text-dark bg-warning' : 'text-dark'}`} onClick={() => handleTabClick('manageMovies')}>
                                <i className="bi bi-film me-2"></i>Manage Movies
                            </button>
                        </li>
                        <li className="nav-item mb-2">
                            <button className={`nav-link w-100 text-start rounded ${activeTab === 'dataAnalysis' ? 'active text-dark bg-warning' : 'text-dark'}`} onClick={() => handleTabClick('dataAnalysis')}>
                                <i className="bi bi-bar-chart me-2"></i>Data Analysis
                            </button>
                        </li>
                        <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
                    </ul>
                </div>

                {/* ✅ Right side content for active tab */}
                <div className="col-lg-9 col-md-8">
                    {activeTab === 'theaterInfo' && (
                        <div className="bg-white rounded shadow-sm p-4 border w-100">
                            <h2 className='fw-bold mb-4'>Theater Information</h2>
                            <p><strong>Name:</strong> {theaterOwners?.name}</p>
                            <p><strong>Theaters:</strong> {theaterOwners?.theaters?.map(val => val.name).join()}</p>
                            <p><strong>Location:</strong> {theaterOwners?.theaters?.map(val => val.location).join()}</p>
                            <p><strong>Contact Info:</strong> {theaterOwners?.contactInfo}</p>
                        </div>
                    )}

                    {activeTab === 'manageMovies' && (
                        <div className="bg-white rounded shadow-sm p-4">
                            <h2 className='fw-bold mb-4'>Manage Movies</h2>
                            <div className="mb-3">
                                <input type="text" name="title" placeholder="Movie Title" className="form-control mb-2" value={newMovie.title} onChange={handleInputChange} />
                                <input type="text" name="genre" placeholder="Genre" className="form-control mb-2" value={newMovie.genre} onChange={handleInputChange} />
                                <input type="text" name="duration" placeholder="Duration" className="form-control mb-2" value={newMovie.duration} onChange={handleInputChange} />
                                {editingMovie ? (
                                    <button className="btn btn-warning" onClick={handleUpdateMovie}>Update Movie</button>
                                ) : (
                                    <button className="btn btn-success" onClick={handleAddMovie}>Add Movie</button>
                                )}
                            </div>
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Genre</th>
                                        <th>Duration</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {movies.map(movie => (
                                        <tr key={movie.id}>
                                            <td>{movie.title}</td>
                                            <td>{movie.genre}</td>
                                            <td>{movie.duration}</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm me-2" onClick={() => handleEditMovie(movie)}>Edit</button>
                                                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'dataAnalysis' && (
                        <div className="bg-white rounded shadow-sm p-4">
                            <h2 className='fw-bold mb-4'>Data Analysis</h2>
                            {/* <Bar data={chartData} /> */}
                            {/* <div style={{ width: "600px", height: "400px" }}> */}
                            <Bar data={chartData} />
                            {/* </div> */}
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default TheaterOwnerDashboard;
