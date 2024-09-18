export class Home {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.createdAt = new Date(data.createdAt).toLocaleDateString
    this.updatedAt = new Date(data.updatedAt).toLocaleDateString
    this.creator = data.creator
  }
}


const data=
{
  "_id": "64640a81afbe13b729b6517f",
  "bedrooms": 6,
  "bathrooms": 4,
  "levels": 3,
  "imgUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.icoc.edu%2Fwp-content%2Fuploads%2F2017%2F09%2Fshutterstock_523076503-e1506375581135.jpg&f=1&nofb=1&ipt=e393a4edd238ce89733d1dbb0ef3622955aca0ea753c07262b329c2bb413f4ad&ipo=images",
  "year": 1918,
  "price": 56000,
  "description": "We swear it is up to code",
  "creatorId": "6463f697af735760607741be",
  "createdAt": "2023-05-16T22:58:09.733Z",
  "updatedAt": "2023-05-16T22:58:09.733Z",
  "__v": 0,
  "creator": {
      "_id": "6463f697af735760607741be",
      "name": "SadFish",
      "picture": "https://c4.wallpaperflare.com/wallpaper/921/14/483/fish-sad-fantasy-art-1680x1050-animals-fish-hd-art-wallpaper-thumb.jpg",
      "id": "6463f697af735760607741be"
  },
  "id": "64640a81afbe13b729b6517f"
}