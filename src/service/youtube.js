class Youtube {
    constructor(key){
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    };

    // search = (query) => {
    //     return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`
    //             , this.getRequestOptions)
    //             .then(response => response.json())
    //             .then(result => result);
    // };

    search = async (query) => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions);
        const result_1 = await response.json();
        return result_1;
    };

    // mostPopular = () => {
    //     return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&regionCode=KR&key=${this.key}`
    //             , this.getRequestOptions)
    //             .then(response => response.json())
    //             .then(result => result);
    // }; 

    mostPopular = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&regionCode=KR&key=${this.key}`,
            this.getRequestOptions);
        const result_1 = await response.json();
        return result_1;
    }; 
}

export default Youtube;