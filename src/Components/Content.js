import styles from './content.module.css'

const Content = () => {

    function Change(e){
        console.log("first " , e.target)
        console.log("sec " , e.target.nextElementSibling)
        e.target.nextElementSibling.classList.toggle(styles.mhide);
    }

    let courseObj = {
        "sectionsCount": "15",
        "lecturesCount": "146",
        "totalLength": "14h 42m",
        "content": [
            [["Up and Running With Python"], ["Installing Python", "Hello World"]],
            [
            ["The Basics (Data Types)"],
            [
                "Variables",
                "Multiple Assignment",
                "Data Types and Ints",
                "Strings",
                "Placeholders",
                "Lists/Arrays",
                "List Functions",
                "Dictionaries",
                "Dictionary Functions",
                "Tuples",
                "Exercise Files"
            ]
            ],
            [
            ["Conditions and Loops"],
            [
                "If-Else Statements",
                "Relational Operators",
                "Nested If/Else",
                "Elif Statements",
                "Logical Operators",
                "For Loops",
                "While Loops",
                "Nested For Loops",
                "Pass, Break and Continue",
                "Try and Except",
                "Commenting",
                "Quick Tips",
                "Exercise Files"
            ]
            ],
            [
            ["Functions!"],
            [
                "Creating our own Functions",
                "Global and Local Vars",
                "Abs and Bool",
                "Help and Dir",
                "Eval and Exec",
                "Str, Int, Float",
                "Recap and Sum"
            ]
            ],
            [
            ["Classes! (Object Orientated Programming)"],
            [
                "Basics of Classes",
                "Functions in Classes",
                "Class Attributes",
                "Inheritance",
                "Overriding Methods"
            ]
            ],
            [
            ["File Input/Output"],
            [
                "Creating a File",
                "Creating a File (Windows)",
                "Reading a File",
                "Writing to a File",
                "Appending to Files",
                "Copying Files"
            ]
            ],
            [
            ["Using Python Modules"],
            [
                "Random Module - Randint",
                "Guessing Game",
                "Guessing Game Challenge",
                "Random Module - Shuffle and Choice",
                "Sys Module",
                "Time Module",
                "Turtle Module",
                "For Loops in Turtle",
                "Up and Down Functions",
                "Coloring in Turtle",
                "Functions in Turtle",
                "Exercise Files"
            ]
            ],
            [
            ["Crawling The Web"],
            [
                "Re Module",
                "Crawling The Web (Stocks)",
                "Stock Quotes (.py)",
                "Crawling The Web (Weather)",
                "Weather (.py)",
                "Crawling The Web (Definition)",
                "Definition (.py)"
            ]
            ],
            [
            ["Beautiful Soup HTML Parsing"],
            [
                "Intro to Beautiful Soup",
                "Installing the Beautiful Soup Module",
                "Prettify with Soup",
                "Drilling Down",
                "Functions in Soup",
                ".String and .Parent",
                "Searching in Soup",
                "Weather Parsing",
                "Antonym Parsing"
            ]
            ],
            [
            ["MatPlotLib - Charts, Plots and 3D Figures!"],
            [
                "Intro to MatPlotLib",
                "First Graph!",
                "Understanding the MatPlotLib Interface",
                "Graph Labels",
                "Creating a Graph from a File",
                "Understanding SubPlots and Figures",
                "Coloring of Graph",
                "Multiple Plots in a Graph",
                "Multiple Graphs in a Figure",
                "What about 3 graphs?",
                "Bar Graphs Intro",
                "Modifying our Bar Graph",
                "Pie Chart Intro",
                "Modifying our Pie Chart",
                "Adding a Legend",
                "3D Graphics Intro",
                "3D Scatter Plots",
                "Multiple 3D Scatter Plots",
                "3D Bar Graphs",
                "3D Wireframes"
            ]
            ],
            [
            ["Data Analysis with Pandas!"],
            [
                "Intro to Pandas",
                "Series Data Structure",
                "Series Continuation",
                "Data Frames Intro",
                "Creating a CSV",
                "Reading a CSV",
                "Writing to a CSV",
                "Getting our Data",
                "Slicing Data Frames",
                "Data Manipulation",
                "Indexing and More",
                "Merging Data Frames",
                "GroupBy Function",
                "MovieLens Data",
                "Heavy Data Analysis",
                "MatPlotLib with Pandas",
                "Let's Finish This"
            ]
            ],
            [
            ["Python GUI with Tkinter"],
            [
                "Tkinter Introduction",
                "Labels",
                "Buttons",
                "Layouts",
                "Fill",
                "Grid Layout",
                "Entries",
                "Check Buttons",
                "GUI Login",
                "Actions on Button Click",
                "Binding Functions",
                "More Binding!",
                "Getting Entry Data",
                "Message Box",
                "Drop Down Menus",
                "Calculator Part 1",
                "Calculator Part 2",
                "Calculator Part 3",
                "Calculator Part 4",
                "Canvas Intro",
                "Canvas Objects",
                "Canvas Fill",
                "Random Rectangle Generator",
                "Text and Arcs",
                "Animations"
            ]
            ],
            [
            ["Our First Game (Bounce!)"],
            [
                "Creating our Ball",
                "Adding the Game Interface",
                "Adding the Paddle",
                "Final Touches",
                "Recap",
                "Bounce! (.py) (v1/v2/v3)"
            ]
            ],
            [
            ["Our Second Game (Pong!)"],
            [
                "Creating our Ball",
                "Adding Paddle1",
                "Adding Paddle2",
                "Final Touches",
                "Pong! (.py)"
            ]
            ],
            [["What's Next?"], ["Up and Beyond!"]]
        ]
    }

    let L=[];
    for(let i=0;i<courseObj.content.length;i++)
    {
        let lecs = [];
        for(let j=0;j<courseObj.content[i][1].length;j++)
        {
            lecs.push((

                        <div className={styles.mtut}>
                            <p>{courseObj.content[i][1][j]}</p>
                            <p>04:29</p>
                        </div>
            ))
        }
        L.push((<div>
                    <div className={styles.mdiv}  onClick={Change}>
                        <h3>{courseObj.content[i][0]}</h3>
                        <p>{courseObj.content[i][1].length} lectures - 6min</p>
                    </div>
                    <div className={styles.mdiv2 + " " + styles.mhide}>
                        {lecs}
                    </div>
                </div>));
    }

    return(
        <div style={{marginTop : "50px"}}>
            <h2>Course content</h2>
            <p>15 sections • 146 lectures • 14h 42m total length</p>
            {L}
        </div>
    )

}

export default Content;