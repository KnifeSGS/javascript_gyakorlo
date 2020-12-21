
const userHandler = {
    //delay time in seconds
    delay: 5,
    repeatCount: 10,
    repeatNum: 0,
    url: 'http://localhost:3000/users',
    // 1. adatok lekérése
    // 2. ha nem sikerül ismételje
    // 3. Kiírom, hogy az alkalmazás offline
    // 4. Ha sikertlen az összes kérés betöltöm localStorageból
    // 5. Ha ez sem megy, üres tömböt adok
    
    async getList() {
        while (this.repeatNum < this.repeatCount) {
            try {
                const response = await fetch(this.url);
                if (response.status >= 400) {
                    throw new Error('Request error');
                }
                const data = await response.json();
                this.repeatNum = 0;
                return data;
            }
            catch (err) {
                this.repeatNum += 1;
                await new Promise( res => setTimeout(res, this.delay * 1000));
                return this.getList();
            }
        }
        this.repeatNum = 0;
        alert('Az alkalmazás offline');
        if (localStorage.users) {
            return JSON.parse(localStorage.users);
        } else {
            alert('A helyi tároló is üres');
            return [];
        }
    },
    showList(parent, delay, repeatCount) {
        this.delay = delay;
        this.repeatCount = repeatCount;
        parent = document.querySelector(parent);
        this.getList().then(
            list => {
                this.generateList(parent, list);
                localStorage.user = JSON.stringify(list);
            },
            err => console.error(err)
        )
    },
    generateList(parent, list) {
        list.forEach(element => {
            const p = document
        });
    }


}