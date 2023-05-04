import Undeline from './Underline'

function Benefits() {
    return(
        <section className="benefits" id="benefits">
            <h2 className="title benefits-title">Benefits of mangoes</h2>
            <Undeline/>
            <p className="subtitle">We will probably agree that one of the best things about summer is mangoes! Rightly called the king of fruits in India, mango is equally loved by all in its various varieties. The sweet and juicy fruit can not only be relished in various forms — from smoothie to chutney and salad — but it also offers umpteen health benefits.</p>
            <ul>
                <li className="list-item">
                    <h3>Lowers risk of cancer:</h3>
                    <p className="subtitle"> Alphonso mango contains lupeol, which has antioxidant and anti-inflammatory properties. Studies indicate that lupeol helps stimulate apoptosis, which further helps to fight prostate cancer.</p>
                </li>
                <li className="list-item">
                    <h3>Antioxidant rich: </h3>
                    <p className="subtitle">
                        Mango is packed with polyphenols, a plant compound, that act as antioxidants to protect your body. They are important because they protect your cells against free radicals that can lead to cell damage. Among the polyphenols, mangiferin has gained the most interest and is sometimes called a “super antioxidant” since it’s especially powerful.
                    </p>
                </li>
                <li className="list-item">
                    <h3>Supports eye health: </h3>
                    <p className="subtitle">
                        Alphonso mango is an excellent source of vitamin A and flavonoids like beta-carotene, alpha-carotene, and beta-cryptoxanthin. 100 grams of fresh mango provides 765 milligrams or 25 percent of recommended daily levels of <strong>vitamin A</strong>, together these compounds are essential for vision.
                    </p>
                </li>
                <li className="list-item">
                    <h3>Mango helps alkalise the body: </h3>
                    <p className="subtitle">An organic mango is rich in tartaric acid, malic acid, and traces of citric acid that primarily help in maintaining the alkali reserve of the body.</p>
                </li>
            </ul>
        </section>
    )
}
export default Benefits
