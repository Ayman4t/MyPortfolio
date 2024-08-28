import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Styles/Article.css";


const Article = () => {


    return (
        <div className="article">

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
                    <button type="button" class="btn btn-warning createarticle">Create New Article</button>
                    <div className="articleslist">
                        <div>
                            <div className="articlestitle">
                                <div>
                                    <h5>Articles</h5>
                                    <div className="underline"></div>
                                </div>
                                <div>
                                    <input type="text" placeholder="Search in Articles" className="searchbtn" />
                                </div>
                            </div>
                            <div className="dataofarticles">

                                <table>
                                    <tr>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Status</th>
                                        <th>Date & Time</th>

                                    </tr>
                                    <tr>
                                        <td>Here's the article title</td>
                                        <td>Tech</td>
                                        <td><button type="button" class="btn btn-warning statusopen">published</button></td>
                                        <td>Monday, June 5th <br /> 12:30 PM</td>

                                        <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                    </tr>
                                    <tr>
                                        <td>Here's the article title</td>
                                        <td>Education</td>
                                        <td><button type="button" class="btn btn-warning statusopen">published</button></td>
                                        <td>Monday, June 5th <br /> 12:30 PM</td>

                                        <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                    </tr>
                                    <tr>
                                        <td>Here's the article title</td>
                                        <td>Business</td>
                                        <td><button type="button" class="btn btn-secondary statusclosed">Draft</button></td>
                                        <td>Monday, June 5th <br /> 12:30 PM</td>

                                        <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                    </tr>
                                    <tr>
                                        <td>Here's the article title</td>
                                        <td>Tech</td>
                                        <td><button type="button" class="btn btn-secondary statusclosed">Draft</button></td>
                                        <td>Monday, June 5th <br /> 12:30 PM</td>

                                        <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                    </tr>

                                    <tr>
                                        <td>Here's the article title</td>
                                        <td>Education</td>
                                        <td><button type="button" class="btn btn-secondary statusclosed">Draft</button></td>
                                        <td>Monday, June 5th <br /> 12:30 PM</td>

                                        <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                    </tr>

                                    <tr>
                                        <td>Here's the article title</td>
                                        <td>Business</td>
                                        <td><button type="button" class="btn btn-secondary statusclosed">Draft</button></td>
                                        <td>Monday, June 5th <br /> 12:30 PM</td>

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

export default Article;