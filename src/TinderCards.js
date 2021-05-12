import React,{useState} from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

const TinderCards = () => {
    const [people,setPeople] = useState([
    {
        name:"Steve Jobs",
        url:"https://www.gannett-cdn.com/-mm-/c658d5ef1b1f082808d78f9cb4c7bf8fdb40caee/c=0-233-3000-1928/local/-/media/2015/11/16/USATODAY/USATODAY/635832974544947991-AP-STEVE-JOBS-OPERA-74950121.JPG"
    },
    {
        name:"Elon Musk",
        url:"https://c.ndtvimg.com/2021-03/9op9k9ko_elon-musk-reuters_625x300_25_March_21.jpg"
    }
    ,
    {
        name:"salman khan",
        url:"https://filmfare.wwmindia.com/thumb/content/2020/oct/salmankhan41603953543.jpg?width=1200&height=900"
    }
    ,
    {
        name:"shahrukh khan",
        url:"https://tribune-reloaded.s3.amazonaws.com/media/images/2145014-srkk-1580112319/2145014-srkk-1580112319.jpg"
    }
    ,{
        name:"cristiano ronaldo",
        url:"https://www.saoluisdofuturo.com.br/wp-content/uploads/2020/02/images-2.jpg"
    }
    ,
    {
        name:"johnny depp",
        url:"https://img.theweek.in/content/dam/week/news/entertainment/images/2019/4/25/Johnny-Depp-dating.jpg"
    }
    ,{
        name:"Lionel messi",
        url:"https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/1104C/production/_109980796_messi.jpg"
    }
    ,
    {
        name:"Emma Watson",
        url:"https://images.businessoffashion.com/profiles/asset/1576627872477040/emma-watson-1577236307043261.png?auto=format%2Ccompress&crop=top&fit=crop&h=576&w=1024"
    }
    ,
    {
        name:"Selene Gomez",
        url:"https://cdn.mos.cms.futurecdn.net/aK2A6C4HoVEDmaj5WGzZwR-1200-80.jpg"
    }
    ,
    {
        name:"Dua Lipa",
        url:"https://media.allure.com/photos/5e74d24c86a8240008b7f3e7/4:3/w_2664,h_1998,c_limit/dua%20lipa%20grammys.jpg"
    }
    ,
    {
        name:"Anne Hathway",
        url:"https://www.hellomagazine.com/imagenes/film/20210112104350/anne-hathaway-reassured-after-promoting-film/0-502-617/anne-hathaway-close-up-t.jpg"
    }


    ])
    return (
        <div>

            <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard className="swipe" key={person.name} preventSwipe={['up','down']}>
                    <div style={{backgroundImage:`url(${person.url})`}} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
