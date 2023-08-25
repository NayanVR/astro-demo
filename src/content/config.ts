import { defineCollection, reference, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        author: reference('authors'),
    }),
});

const authors = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        portfolio: z.string().url(),
    })
});

export const collections = {
    'blog': blogCollection,
    'authors': authors
};