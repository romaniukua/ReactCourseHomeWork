import EventEmitter from 'events';

let data = {
    articles: [
        {
            id: 1,
            title: 'China due to introduce face scans for mobile users',
            urlToImage: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/7867/production/_109932803_5901002b-f351-48da-9ce0-ab628ae1246e.jpg',
            url: 'https://www.bbc.com/news/world-asia-china-50587098',
            description: 'People in China are now required to have their faces scanned when registering new mobile phone services, as the authorities seek to verify the identities of the country\'s hundreds of millions of internet users'
        },
        {
            id: 2,
            title: 'Namibia\'s President Hage Geingob wins re-election',
            urlToImage: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/8D59/production/_109958163_geingobafp.jpg',
            url: 'https://www.bbc.com/news/world-africa-50618516',
            description: 'Namibia\'s President Hage Geingob has been re-elected for a second term, the country\'s electoral commission says.'
        },
        {
            id: 3,
            title: 'Timothy Weeks recalls Taliban hostage ordeal - \'I never gave up hope\'',
            urlToImage: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/111CF/production/_109959007_058343984-1.jpg',
            url: 'https://www.bbc.com/news/world-australia-50619941',
            description: 'An Australian academic freed by the Taliban in a prisoner swap has spoken of his "long and tortuous ordeal" as a hostage in Afghanistan.'
        },
        {
            id: 4,
            title: 'Canadian islanders angry over US mail searches',
            urlToImage: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/514F/production/_109751802_gettyimages-492989547.jpg',
            url: 'https://www.bbc.com/news/world-us-canada-49901455',
            description: 'Campobello, a small Canadian island on the southwestern tip of New Brunswick, is only accessible year-round by bridge from the US state of Maine. US Customs agents have recently begun intercepting mail sent by Canada\'s postal agency to the island, leaving residents frustrated - and worried about their privacy.'
        },
        {
            id: 5,
            title: 'HIV on Ukraine\'s frontline: Soldier who sought escape in battle',
            urlToImage: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/4E4A/production/_109924002_i1.jpg',
            url: 'https://www.bbc.com/news/world-europe-50586518',
            description: '"I am HIV positive; I already had HIV when I joined a volunteer battalion to fight separatists in eastern Ukraine," says Ukrainian war veteran Vasyl. "I had no fear for my life. I had nothing to lose."'
        },
    ],
    counterToShow: 4,
    itemToEdit: null,
}

const EVENT = 'storeEvent';

const store = Object.assign({}, EventEmitter.prototype, {
    getStore(){
        return data;
    },
    addEventListener(cb){
        this.addListener(EVENT, cb);
    },
    removeEventListener(cb){
        this.removeListener(EVENT, cb);
    },
    emitStore(){
        this.emit(EVENT);
    },
    removeNews(id){
        data.articles = data.articles.filter(item => item.id !== id);
    },
    updateNews(news){
        data.articles = data.articles.map(item => item.id === news.id ? news : item);
    },
    createNews(news){
        data.articles = [news, ...data.articles];
    },
    showMore(){
        data.counterToShow+=2;
    },
    findItemToEdit(id){
        data.itemToEdit = data.articles.findIndex(item => item.id === id);
    },
    unsetItem(){
        data.itemToEdit = null;
    }
});

export default store;