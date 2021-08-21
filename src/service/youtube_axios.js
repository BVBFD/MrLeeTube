import axios from 'axios';

class Youtube {
    constructor(key){
        this.youtube = axios.create({
            baseURL: `https://youtube.googleapis.com/youtube/v3/`,
            params: {key: key}
        });
    }

    async search(query){
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: query
            }
        });
        console.log(response);
        return response.data;
    }

    async mostPopular(){
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            },
        });
        console.log(response);
        return response.data;
    }
};

export default Youtube