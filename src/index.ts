import fetch from 'node-fetch';

interface ApiOptions {
  url?: string | null;
}

interface ObjectLiteral {
  [key: string]: any;
}

export class TitusClient {
  private config: ApiOptions;
  public BaseUrl = 'http://titusentertainment.xyz/api';

  public constructor(config: ApiOptions = {}) {
    this.config = config;
    if (config.url) {
      this.BaseUrl = config.url;
    }
  }

  private query(type: 'meme' | 'unixporn' | 'nsfw' | 'hentai') {
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

  private queryOpts(query: string): ObjectLiteral {
    return {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ query }),
    };
  }

  private fetchPost(queryName: 'meme' | 'unixporn' | 'nsfw' | 'hentai') {
    const query = this.query(queryName);

    return fetch(this.BaseUrl, this.queryOpts(query))
      .then(res => res.json())
      .then(res => {
        if (!res.data) return Promise.resolve({ success: false, data: {} });
        return Promise.resolve({ success: true, data: res.data });
      });
  }

  public getMeme(): Promise<ObjectLiteral> {
    return this.fetchPost('meme');
  }

  public getHentai(): Promise<ObjectLiteral> {
    return this.fetchPost('hentai');
  }

  public getUnixPorn(): Promise<ObjectLiteral> {
    return this.fetchPost('unixporn');
  }

  public getNsfw(): Promise<ObjectLiteral> {
    return this.fetchPost('nsfw');
  }
}
