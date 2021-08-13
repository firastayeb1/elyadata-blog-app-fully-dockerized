import { Blog } from "../../../modules/blog";

export class BlogCard{
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
export const BlogToBlogCard = (blog: Blog| undefined)=>{
    return blog? new BlogCard(
        blog.id,
        blog.title,
        blog.content.length < 50? blog.content: blog.content.substr(0,45)+'.. more.',
        blog.author,
        blog.dislikes,
        blog.likes,
        blog.img
    ): blog;
}

export const BlogCardToBlog = (blogCard: BlogCard| undefined)=>{
    
}