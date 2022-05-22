import type { Users } from ".";

export const userData:ReadonlyArray<Users> = [{
    "id": "1",
    "firstName": "太郎",
    "lastName": "山田",
    "gender": "man",
    "age": 54,
    "address": {
        "zipCode": "0791143",
        "prefecture": "北海道"
    },
    "phoneNumbers": [
        { "id": "1", "type": "home", "number": "09012341234" }
    ]
},
{
    "id": "2",
    "firstName": "一郎",
    "lastName": "鈴木",
    "gender": "man",
    "age": 18,
    "address": {
        "zipCode": "7612208",
        "prefecture": "香川"
    },
    "phoneNumbers": [
        { "id": "1", "type": "mobile", "number": "09056785678" }
    ]
}];
