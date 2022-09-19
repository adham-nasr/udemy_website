import styles from './Reviews.module.css'

const Reviews = () => {

    let obj = {"reviews": [
        {
          "id": 1,
          "name": "Asif H.",
          "rate": 3,
          "content": "Sometimes confusing but was able to clarify. Good job nonetheless."
        },
        {
          "id": 2,
          "name": "M.S.Swaroop",
          "rate": 4,
          "content": "the course is specialized so that we learn ourselves deeply,simple and easy."
        },
        {
          "id": 3,
          "name": "Saurish R.",
          "rate": 5,
          "content": "In depth concepts of python have been clearly explained. Good chemistry between student and instructor. Fantastic course. Completed every vid and had lot of fun."
        },
        {
          "id": 4,
          "name": "Shiristi",
          "rate": 5,
          "content": "I can't say as i have not taken that many classes yet but so far it is good. edited( so yeah it was a journey for me many things happen but i am glad they did and also grateful to the person who is guiding me and thanks udemy for these courses really appreciate it !!!)"
        },
        {
          "id": 5,
          "name": "Ejeshi G.",
          "rate": 4,
          "content": "teacher is good and direct, though not prompt at responding to questions and enquiries."
        }
        ]
    };
    let atrobj={
        "xml:space":"preserve"
    }
    let L= [];

    for(let i=0;i<obj.reviews.length;i++)
    {
        let s1=[];
        let s2=[];
        for(let j=0;j<obj.reviews[i].rate;j++)
        {
            s1.push(
                <span>
                    <svg baseProfile="tiny" version="1.2" viewBox="0 0 24 24" {...atrobj} fill="#e59819" stroke="#e59819" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"><path d="m9.362 9.158s-3.16 0.35-5.268 0.584c-0.19 0.023-0.358 0.15-0.421 0.343s0 0.394 0.14 0.521c1.566 1.429 3.919 3.569 3.919 3.569-2e-3 0-0.646 3.113-1.074 5.19-0.036 0.188 0.032 0.387 0.196 0.506 0.163 0.119 0.373 0.121 0.538 0.028 1.844-1.048 4.606-2.624 4.606-2.624s2.763 1.576 4.604 2.625c0.168 0.092 0.378 0.09 0.541-0.029 0.164-0.119 0.232-0.318 0.195-0.505-0.428-2.078-1.071-5.191-1.071-5.191s2.353-2.14 3.919-3.566c0.14-0.131 0.202-0.332 0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375 0.122-0.453 0.294c-0.874 1.932-2.183 4.83-2.183 4.83z"/></svg>
                </span>
            )
        }
        for(let j=0;j<5-obj.reviews[i].rate;j++)
        {
            s2.push(
                <span>
                    <svg baseProfile="tiny" version="1.2" viewBox="0 0 24 24" {...atrobj} fill="transparent" stroke="#e59819" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"><path d="m9.362 9.158s-3.16 0.35-5.268 0.584c-0.19 0.023-0.358 0.15-0.421 0.343s0 0.394 0.14 0.521c1.566 1.429 3.919 3.569 3.919 3.569-2e-3 0-0.646 3.113-1.074 5.19-0.036 0.188 0.032 0.387 0.196 0.506 0.163 0.119 0.373 0.121 0.538 0.028 1.844-1.048 4.606-2.624 4.606-2.624s2.763 1.576 4.604 2.625c0.168 0.092 0.378 0.09 0.541-0.029 0.164-0.119 0.232-0.318 0.195-0.505-0.428-2.078-1.071-5.191-1.071-5.191s2.353-2.14 3.919-3.566c0.14-0.131 0.202-0.332 0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375 0.122-0.453 0.294c-0.874 1.932-2.183 4.83-2.183 4.83z"/></svg>
                </span>
            )
        }
        L.push(
            <div className={styles.Rdiv}>
                <div className={styles.Rdiv1}>
                    <div className={styles.Rdiv2}>
                        <p>{obj.reviews[i].name[0]}</p>
                    </div>
                </div>
                <div>
                    <p><strong>{obj.reviews[i].name}</strong></p>
                    <div className={styles.rRdiv}>
                        <div>
                            {s1}
                            {s2}
                        </div>
                        <div className={styles.duRdiv}>a week ago</div>
                    </div>
                    <p>{obj.reviews[i].content}</p>
                    <p>was this review helpful?</p>
                    <div>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{marginTop : "50px"}}>
            <h1>Reviews</h1>
            {L}
        </div>
    )
}

export default Reviews;


