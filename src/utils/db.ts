import { MongoClient } from 'mongodb';
export const uri = 'mongodb+srv://robinquinteroc:nachov1ve@robinqcdb.f13qmph.mongodb.net/?retryWrites=true&w=majority';
export const client = new MongoClient(uri);

export async function getPosts() {
    const posts = await client.db('robinqc').collection('posts').find().toArray();
    return posts.map((post) => {
        return {
            id: post._id.toString(),
            title: post.title,
            content: post.content,
            slug: post.slug,
            thumbnail: post.thumbnail,
        }
    });
}