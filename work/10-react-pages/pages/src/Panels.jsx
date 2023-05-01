import './static/css/Panels.css';
import Cat1 from './static/images/Cat1.jpg';
import Cat2 from './static/images/Cat2.jpg';
function Panels(){
    return(
        <div className="panel">
            <div class="panel__right">
                <img class="panel__pic__right" src={Cat1} alt="cat waiting on sofa" />
                <h2 class="panel__title">Cat waiting on Sofa</h2>
                <div class="panel__text">After the Jellicle Ball, the cats rest and contemplate 
                “The Moments of Happiness” before introducing more cats. Gus the Theatre Cat 
                is an aged stage actor who worked with the greatest actors of his day and 
                Skimbleshanks the Railway Cat introduces himself.Macavity returns with two 
                of his henchmen who invade the proceedings and kidnap Old Deuteronomy. Demeter 
                and Bombalurina sing what they know of Macavity, whose evil deeds have resulted 
                in his being dubbed the Napoleon of crime.Macavity returns once more, disguised 
                as Old Deuteronomy, but he is exposed and battles with Munkustrap and the other 
                male cats. Tired and almost defeated, Macavity rigs an electrical explosion 
                that puts out all the lights, leaving the Jellicles in the dark. But they still 
                have to find Old Deuteronomy.The Rum Tum Tugger calls upon Mr Mistoffelees, 
                the conjuring cat, to use his magical powers to bring back their leader. 
                Mistoffelees succeeds in reinstating the lights, locating Old Deuteronomy and 
                showing off his spectacular magic tricks, including his infamous conjuring turn.</div>
            </div>
            <div class="panel__left">
                <img class="panel__pic__left" src={Cat2} alt="Cat lurking in Dark" />
                <div class="panel__area">
                    <h2 class="panel__title">Cat lurking in Dark</h2>
                    <div class="panel__text">After the Jellicle Ball, the cats rest and contemplate 
                “The Moments of Happiness” before introducing more cats. Gus the Theatre Cat 
                is an aged stage actor who worked with the greatest actors of his day and 
                Skimbleshanks the Railway Cat introduces himself.Macavity returns with two 
                of his henchmen who invade the proceedings and kidnap Old Deuteronomy. Demeter 
                and Bombalurina sing what they know of Macavity, whose evil deeds have resulted 
                in his being dubbed the Napoleon of crime.Macavity returns once more, disguised 
                as Old Deuteronomy, but he is exposed and battles with Munkustrap and the other 
                male cats. Tired and almost defeated, Macavity rigs an electrical explosion 
                that puts out all the lights, leaving the Jellicles in the dark. But they still 
                have to find Old Deuteronomy.The Rum Tum Tugger calls upon Mr Mistoffelees, 
                the conjuring cat, to use his magical powers to bring back their leader. 
                Mistoffelees succeeds in reinstating the lights, locating Old Deuteronomy and 
                showing off his spectacular magic tricks, including his infamous conjuring turn.</div>
                </div>
            </div>
        </div>
    );
}
export default Panels;