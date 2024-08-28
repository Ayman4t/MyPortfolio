import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Styles/Course.css";


const Course = () => {


    return (
        <div className="Course">

            <div className="overlay">
            </div>
            <header>
                <p >header</p>
            </header>
            <div className="main">
                <div className="slidepart ">
                    <div className="slidehead">
                        <h5>Admin Panel</h5>
                        <div className="underline"></div>
                        <p>6th June 2023</p>
                    </div>

                    <div className="slidenav">
                        <div className="users">
                            <h5>Users</h5>

                            <ul>
                                <li><a class="active" href="#">Admin</a></li>
                                <li><a href="#">Editor</a></li>
                                <li><a href="#">Instructors</a></li>
                                <li><a href="#">Students</a></li>
                            </ul>
                        </div>

                        <div className="articles">
                            <h5>Articles</h5>

                            <ul>
                                <li><a class="active" href="#">Published Articles</a></li>
                                <li><a href="#">Scheduled Articles</a></li>
                                <li><a href="#">Saved Drafts</a></li>

                            </ul>
                        </div>

                        <div className="jops">
                            <h5>Jops</h5>

                            <ul>
                                <li><a class="active" href="#">Published Jobs</a></li>
                                <li><a href="#">Saved Drafts</a></li>

                            </ul>
                        </div>

                        <div className="courses">
                            <h5>Courses</h5>

                            <ul>
                                <li><a class="active" href="#">Published Courses</a></li>
                                <li><a href="#">Scheduled Courses</a></li>
                                <li><a href="#">Saved Drafts</a></li>

                            </ul>
                        </div>
                    </div>

                </div>



                <div className="contentpart ">
                    <button type="button" class="btn btn-warning createcourse">Create New Course</button>
                    <div className="courseslist">
                        <div>
                            <div className="coursestitle">
                                <div>
                                    <h5>Courses</h5>
                                    <div className="underline"></div>
                                </div>
                                <div>
                                    <input type="text" placeholder="Search in Courses" className="searchbtn" />
                                </div>
                            </div>
                            <div className="dataofcourses">

                                <table>
                                    <tr>
                                        <th>Title</th>
                                        <th>Status</th>
                                        <th>Instructor</th>
                                        <th>Level</th>
                                        <th>Start Date</th>
                                        <th>Published On</th>

                                    </tr>
                                    <tr>
                                        <td>Here's the Course name</td>
                                        <td><button type="button" class="btn btn-warning statusopen">OnGoing</button></td>
                                        <td>Mohamed Ali</td>
                                        <td>1</td>
                                        <td>Monday, June 8th</td>
                                        <td>Thursday,June 10th <br /> 12:30 PM</td>
                                        <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                    </tr>
                                    <tr>
                                        <td>Here's the Course name</td>
                                        <td><button type="button" class="btn btn-warning statusopen">OnGoing</button></td>
                                        <td>Mohamed Ali</td>
                                        <td>1</td>
                                        <td>Monday, June 8th</td>
                                        <td>Thursday,June 10th 12:30 PM</td>
                                        <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                    </tr>
                                    <tr>
                                        <td>Here's the Course name</td>
                                        <td><button type="button" class="btn btn-secondary statusclosed">Ended</button></td>
                                        <td>Mohamed Ali</td>
                                        <td>1</td>
                                        <td>Monday, June 8th</td>
                                        <td>Thursday,June 10th 12:30 PM</td>
                                        <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                    </tr>
                                    <tr>
                                        <td>Here's the Course name</td>
                                        <td><button type="button" class="btn btn-secondary statusclosed">Ended</button></td>
                                        <td>Mohamed Ali</td>
                                        <td>1</td>
                                        <td>Monday, June 8th</td>
                                        <td>Thursday,June 10th 12:30 PM</td>
                                        <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                    </tr>

                                    <tr>
                                        <td>Here's the Course name</td>
                                        <td><button type="button" class="btn btn-secondary statusclosed">Ended</button></td>
                                        <td>Mohamed Ali</td>
                                        <td>1</td>
                                        <td>Monday, June 8th</td>
                                        <td>Thursday,June 10th 12:30 PM</td>
                                        <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                    </tr>

                                    <tr>
                                        <td>Here's the Course name</td>
                                        <td><button type="button" class="btn btn-secondary statusclosed">Ended</button></td>
                                        <td>Mohamed Ali</td>
                                        <td>1</td>
                                        <td>Monday, June 8th</td>
                                        <td>Thursday,June 10th 12:30 PM</td>
                                        <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                    </tr>

                                </table>

                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link previous" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link next" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <footer>
                <p >footer</p>
            </footer>
        </div>

    )

};

export default Course;