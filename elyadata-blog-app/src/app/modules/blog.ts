export class Blog{
    public id: string;
    public title: string;
    public content: string;
    public author: string;
    public img: string| undefined;
    public likes: number;
    public dislikes: number;

    constructor( 
        id: string,
        title: string,
        content: string,
        author: string,
        dislikes: number = 0,
        likes: number = 0,
        img: string| undefined
        )
        {
            this.id = id;
            this.title = title;
            this.content = content;
            this.author = author;
            this.likes = likes;
            this.dislikes = dislikes;
            this.img = img? img: "https://cdn.icon-icons.com/icons2/1945/PNG/512/iconfinder-blog-4661578_122455.png";
        }
}