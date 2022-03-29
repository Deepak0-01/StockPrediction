import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import { doc, setDoc } from "firebase/firestore";
import {db} from './Firebase';
import TweetCard from './TweetCard';

function TweeterSentiment() {

  const [tweetText, settweetText] = useState("");
  const [tweets, settweets] = useState([]);

  useEffect(() => {
    db.collection("tweets").onSnapshot((snapshot) =>
      settweets(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          tweetText:doc.data().tweetText,
          sentimentScore:doc.data().sentimentScore
         
        }))
      )
    );
  }, []);

 
    return (
        <>
        
          
        <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"12px",marginBottom:"5px" ,flexWrap:"wrap"}}>
        {tweets.length>0 && tweets.map((tweet)=>(
            <TweetCard key={tweet.id} tweetText={tweet.tweetText} />
        ))}

        </div>

        </>
    )
}

export default TweeterSentiment
