const cheerio = require('cheerio');
const fs = require('fs');
const url = "https://www.mirrormedia.mg/section/entertainment";

const Header = {
    "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0",
}

fetch(url, { headers: Header })
    .then(async (res) => {
        const HTML = await res.text();
        const $ = cheerio.load(HTML);
        const articles = [];

        $('.article-list-item__ItemWrapper-sc-5c1f4c1e-0').each((index, element) => {
            const title = $(element).find('.article-list-item__ItemTitle-sc-5c1f4c1e-4').text().trim();
            const more = $(element).find('.article-list-item__ItemBrief-sc-5c1f4c1e-5').text().trim();
            const url = "https://www.mirrormedia.mg/"+$(element).attr('href').trim();
            articles.push({ title, more ,url});
        });

        const jasondata = JSON.stringify(articles,null,2);

        fs.writeFileSync('./test.json',jasondata,'utf-8');
        console.log("成功");

        /*articles.forEach(article => {
            console.log(`Title: ${article.title}`);
            console.log(`More: ${article.more}`);
            console.log(`url: https://www.mirrormedia.mg/${article.url}`);
            console.log('-----------------------');
        });*/

        
    })
    .catch((err) => {
        console.log(err);
    });


