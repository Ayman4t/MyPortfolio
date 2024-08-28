import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Styles/Application.css";


const Application = () => {


    return (
        <div className="applications">

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

                    <div className="applicationlist">
                        <div>
                            <div className="applicationtitle">
                                <div>
                                    <h5>applications for " Jop " a "company name"</h5>
                                    <div className="underline"></div>
                                </div>

                            </div>
                            <div className="dataofapplications">

                                <table>
                                    <tr>
                                        <th>applicant</th>
                                        <th>Experience</th>
                                        <th>Email</th>
                                        <th>Mobile Number</th>

                                    </tr>
                                    <tr>
                                        <td>Here's the Applicant name</td>
                                        <td>2 Years </td>
                                        <td>userone@gmail.com</td>
                                        <td>00201132789</td>

                                        <td><button type="button" class="btn btn-warning downloadbtn">Download CV</button></td>

                                    </tr>
                                    <tr>
                                        <td>Here's the Applicant name</td>
                                        <td>2 Years </td>
                                        <td>userone@gmail.com</td>
                                        <td>00201132789</td>

                                        <td><button type="button" class="btn btn-warning downloadbtn">Download CV</button></td>

                                    </tr>
                                    <tr>
                                        <td>Here's the Applicant name</td>
                                        <td>2 Years </td>
                                        <td>userone@gmail.com</td>
                                        <td>00201132789</td>

                                        <td><button type="button" class="btn btn-warning downloadbtn">Download CV</button></td>

                                    </tr>
                                    <tr>
                                        <td>Here's the Applicant name</td>
                                        <td>2 Years </td>
                                        <td>userone@gmail.com</td>
                                        <td>00201132789</td>

                                        <td><button type="button" class="btn btn-warning downloadbtn">Download CV</button></td>

                                    </tr>

                                    <tr>
                                        <td>Here's the Applicant name</td>
                                        <td>2 Years </td>
                                        <td>userone@gmail.com</td>
                                        <td>00201132789</td>

                                        <td><button type="button" class="btn btn-warning downloadbtn">Download CV</button></td>

                                    </tr>

                                    <tr>
                                        <td>Here's the Applicant name</td>
                                        <td>2 Years </td>
                                        <td>userone@gmail.com</td>
                                        <td>00201132789</td>

                                        <td><button type="button" class="btn btn-warning downloadbtn">Download CV</button></td>

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

export default Application;