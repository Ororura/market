export class Services<T> {
  async getData(url: string): Promise<T | undefined> {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }

  async postData(url: string, body: T) {
    try {
      return await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(body),
      });
    } catch (e) {
      console.log(e);
    }
  }
}
