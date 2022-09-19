import Sectioncard from "./Sectioncard";

const Home = () => {
    return (
        <div className="div1">
            <header>
                <div className="hed1">
                    <div className="hed2">
                        <img src="https://img-b.udemycdn.com/notices/web_banner/slide_1_image_udlite/b8f46419-eca3-44c1-8ba0-ed2ca89f8884.jpg"/>
                    </div>
                    <div className="hed3">
                        <h1>New to Udemy? Lucky You.</h1>
                        <p>Courses start at E£169.99. Get your new-student offer before it expires.</p>
                    </div>
                </div>
             </header>
            <div className="my_head">
                <h1>A broad selection of courses</h1>
                <p>Choose from 185,000 online video courses with new additions published every month</p>
            </div>
            <div className="tdiv1">
                <div className="tdiv2">
                    <div className="tdiv3">
                        <h2>Expand your career opportunities with Python</h2>
                        <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...</p>
                    </div>
                    <div id="cont" className="flexbox-container">
                    </div>
                </div>
            </div>
            <Sectioncard />
      </div>
    )
}

export default Home;
