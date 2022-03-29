import React, { useEffect, useState } from "react";
import { PadSequences } from "./PadSequences";
import Button from '@mui/material/Button';
import * as tf from "@tensorflow/tfjs";
import {db} from './Firebase';
import TweetCard from "./TweetCard";





function Feedback1() {

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
  



 

  const url = {
    model:
      "https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json",
    metadata:
      "https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json",
  };

  const OOV_INDEX = 2;

  const [metadata, setMetadata] = useState();
  const [model, setModel] = useState();
  const [testText, setText] = useState("");
  const [testScore, setScore] = useState("");
  const [trimedText, setTrim] = useState("");
  const [seqText, setSeq] = useState("");
  const [padText, setPad] = useState("");
  const [inputText, setInput] = useState("");

  async function loadModel(url) {
    try {
      const model = await tf.loadLayersModel(url.model);
      setModel(model);
    } catch (err) {
      console.log(err);
    }
  }

  async function loadMetadata(url) {
    try {
      const metadataJson = await fetch(url.metadata);
      const metadata = await metadataJson.json();
      setMetadata(metadata);
    } catch (err) {
      console.log(err);
    }
  }

  const getSentimentScore = (text) => {
    console.log(text);
    const inputText = text
      .trim()
      .toLowerCase()
      .replace(/(\.|\,|\!)/g, "")
      .split(" ");
    setTrim(inputText);
    console.log(inputText);
    const sequence = inputText.map((word) => {
      let wordIndex = metadata.word_index[word] + metadata.index_from;
      if (wordIndex > metadata.vocabulary_size) {
        wordIndex = OOV_INDEX;
      }
      return wordIndex;
    });
    setSeq(sequence);
    console.log(sequence);
    // Perform truncation and padding.
    const paddedSequence = PadSequences([sequence], metadata.max_len);
    console.log(metadata.max_len);
    setPad(paddedSequence);

    const input = tf.tensor2d(paddedSequence, [1, metadata.max_len]);
    console.log(input);
    setInput(input);
    const predictOut = model.predict(input);
    const score = predictOut.dataSync()[0];
    predictOut.dispose();
    setScore(score);

    db.collection("tweets").add({
        tweetText:tweetText,
        sentimentScore: score*100
    }).then(setScore(""))
    .catch(err=>alert(err.message));

    return score;
  };

  useEffect(() => {
    tf.ready().then(() => {
      loadModel(url);
      loadMetadata(url);
    });
  }, []);

  console.log(testScore * 100);

  return (
    <>
        <div className='predict'>

        <div className='predict__form'>

        <div className='predict__form-option'>

        
        <textarea className='ticker__input' type="text" placeholder="Type your views here" onChange={(e)=>settweetText(e.target.value)} />


        
        </div>

        <Button onClick={(e)=>getSentimentScore(tweetText)} style={{marginTop:"20px",width:"fit-content"}} className='fetch__button' variant="contained" color="success" size="large">
       Analyse Sentiments
      </Button>

        
        
        </div>

       

    
            
        </div>
          
        <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"12px",marginBottom:"5px" ,flexWrap:"wrap"}}>
        {tweets.length>0 && tweets.map((tweet)=>(
            <TweetCard key={tweet.id} tweetText={tweet.tweetText} sentimentScore={tweet.sentimentScore} />
        ))}

        </div>

        </>
  );
}

export default Feedback1;