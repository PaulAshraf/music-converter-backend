# music-converter-backend

An API to convert Spotify links into Youtube links.

## API endpoints

`GET /`

Displays this README page.

---

`GET /parse`

Body:

```javascript
{
    "service":"spotify" ,
    "url":"<A Spotify Link>"
}
```

Returns a JSON with the information of the linked track.

```javascript
{
    "name":"<Track Name>" ,
    "Album":"<The Album's name>",
    "Artist":"<The Artist's name>"
}
```

---

`GET /convert`

Body:

```javascript
{
    "fromService":"spotify" ,
    "toService":"youtube" ,
    "url":"<A Spotify Link>"
}
```

Returns a JSON with the information of the linked track and the youtube URL.

```javascript
{
    "track": {
        "name":"<Track Name>" ,
        "Album":"<The Album's name>",
        "Artist":"<The Artist's name>"
    },
    "url":"<Youtube Link of the Track>"
}
```

---
