export interface Tweet extends TweetBody {
    private _createdAt: string | number | Date
    _id:string
    _creators:string
    _updatedAt:string
    _rev: string
    _type: 'tweet'
    blockTweet: boolean 

}


export type TweetBody ={
    text: string
    username: string 
    profileImg: string
    image?: string

}