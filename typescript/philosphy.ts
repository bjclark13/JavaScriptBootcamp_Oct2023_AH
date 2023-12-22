import { JSDOM } from 'jsdom';
const starting = "/wiki/Stephen_Curry"

const getArticle = async (article: string, num: number = 0): Promise<number|null> => {
    console.log("https://en.wikipedia.org" + article, num)
    const resp = await fetch("https://en.wikipedia.org" + article)
    const body = await resp.text();
    const link = getFirstATag(body)

    // exit step -> we're done
    if (link === "/wiki/Philosophy") {
        return num; 
    } else if (!link) {
        return null
    } else {
        // recursive step
        return getArticle(link, num+1);
    }
}

const getFirstATag = (body: string): string|null|undefined => {
    const dom = new JSDOM(body)    
    const links = dom.window.document.querySelectorAll('.mw-body-content p>a')

    for (const link of links ) {
        if (!link?.getAttribute('href')?.includes("Help:") ) {
            return link?.getAttribute('href')
        }
    }
}

async function go() {
    const num = await getArticle(starting);
    console.log(`It took you ${num} tries to get to Philosophy`)
}

go()



