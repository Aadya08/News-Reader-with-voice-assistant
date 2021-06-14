import React, { useState, useEffect } from 'react';
import wordsToNumbers from 'words-to-numbers';
import Header from './Header';
import Footer from './Footer';
import NewsCards from './Components/NewsCards/NewsCards'
import alanBtn from '@alan-ai/alan-sdk-web';
const sdkKey = "b9adc381c7b00e7fbb393d80850a741e2e956eca572e1d8b807a3e2338fdd0dc/stage";


const App = () => {

    const[ newsArticle, setNewsArticle ] = useState([]);

    

    useEffect(() => {
        alanBtn({
             key : sdkKey,
             onCommand: ({ command, articles, number }) => {
                 if(command === 'newHeadlines'){
                     //alert("code executed");
                     //console.log(articles);
                     setNewsArticle(articles);
                 }
                 else if(command === 'open'){
                     const parsedNum = number.length>2 ? wordsToNumbers(number, {fuzzy:true}): number;
                     const article = articles[parsedNum-1];
                     if(parsedNum>20){
                         alanBtn().playText("Try again");
                     }
                     else if (article){
                        window.open(article.url, '_blank');
                        alanBtn().playText("Sure, opening");

                     }
                     
                 }
             }
        })
        
        
    }, [])


    return(
        <div>
            <Header />
            <NewsCards articles={newsArticle} />
            <Footer />
            
        </div>
    );
}
export default App;