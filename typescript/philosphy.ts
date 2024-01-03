import { JSDOM } from 'jsdom';
const starting = "/wiki/Dr._Seuss"

const getArticle = async (article: string, num: number = 0, nthTag: number = 1): Promise<number|null> => {
    console.log("https://en.wikipedia.org" + article, num)
    const resp = await fetch("https://en.wikipedia.org" + article)
    const body = await resp.text();
    const link = getNthATag(body)

    console.log(link, starting, link === starting)
    // exit step -> we're done
    if (link === "/wiki/Philosophy") {
        return num; 
    } else if (!link) {
        return null
    } else if (link === starting) {
        console.log("We're in a loop!")
        return getArticle(link, num, nthTag + 1);
    } else {
        // recursive step
        return getArticle(link, num+1);
    }
}

const getNthATag = (body: string, n: number = 1): string|null|undefined => {
    const dom = new JSDOM(body)    
    const links = dom.window.document.querySelectorAll('.mw-body-content p>a')

    let i = 0;
    for (const link of links ) {
        if (!link?.getAttribute('href')?.includes("Help:") ) {
            i++;

            if (i === n)
                return link?.getAttribute('href')
        }
    }
}

async function go() {
    const num = await getArticle(starting);

    if (num)
        console.log(`It took you ${num} tries to get to Philosophy`)
    else 
        console.log("Darn, this does not pass the philosophy test")
}

go()



