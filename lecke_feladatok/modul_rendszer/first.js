'use strict';

export const setCookie = (name, value, expirationMinutes = 15, path = '/') => {
    const now = new Date();
    now.setTime(now.getTime() + (expirationMinutes * 60 * 1000));
    const expires = now.toUTCString();
    document.cookie = `${name}=${value};expires=${expires};path=${path}`;
};

const cookieName = 'token';
const cookieValue= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

setCookie(cookieName, cookieValue, 15)

