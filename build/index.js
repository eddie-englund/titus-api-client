"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
class TitusClient {
    constructor(config = {}) {
        this.BaseUrl = 'http://titusentertainment.xyz:3200/api';
        this.config = config;
        if (config.url) {
            this.BaseUrl = config.url;
        }
    }
    query(type) {
        return `
        {
            ${type} {
                title
                body
                url
                image
            }
        }
        `;
    }
    queryOpts(query) {
        return {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ query }),
        };
    }
    fetchPost(queryName) {
        const query = this.query(queryName);
        return node_fetch_1.default(this.BaseUrl, this.queryOpts(query))
            .then(res => res.json())
            .then(res => {
            if (!res.data)
                return Promise.resolve({ sucsess: false, data: {} });
            return Promise.resolve(res);
        });
    }
    getMeme() {
        return this.fetchPost('meme');
    }
    getHentai() {
        return this.fetchPost('hentai');
    }
    getUnixPorn() {
        return this.fetchPost('unixporn');
    }
    getNsfw() {
        return this.fetchPost('nsfw');
    }
}
exports.TitusClient = TitusClient;
