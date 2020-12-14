'use strict';

const viewed = 'viewed';
const viewedValue = '5';
const uid = 'uid';
const uidValue = '354774631237';
const ssid = 'ssid';
const ssidValue = 'Bx55OWbHJ0Vt_IGIFÍ';

// cookieObject.setCookie(viewed, viewedValue, 15)
// cookieObject.setCookie(uid, uidValue, 15)
// cookieObject.setCookie(ssid, ssidValue, 15)

export const cookieObject = {
    setCookie(name, value, expirationMinutes = 15, path = '/') {
    const now = new Date();
    now.setTime(now.getTime() + (expirationMinutes * 60 * 1000));
    const expires = now.toUTCString();
    document.cookie = `${name}=${value};expires=${expires};path=${path}`;
    },

    getCookie() {
        const keyValuePairs = document.cookie
        .split('; ');
        return keyValuePairs
    },
    copyToSession(name) {
        sessionStorage.setItem('cookies', JSON.stringify(
            this.getCookie()
        ))
    },
    cookieNames() {
        const cookies = document.cookie
            .split('; ')
            .map(item => item.split('=')[0]);
        return cookies
    },

    deleteAllCookies() {
        this.cookieNames().forEach(element => {
            document.cookie = `${element}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });
    }
}