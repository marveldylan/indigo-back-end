const { default: mongoose } = require('mongoose');
const db = require('../db')
const {Channel, Comment, Group, Post, User} = require('../models')

db.on('error', console.error.bind(console, 'MongoDb connection error:'));

const createGroups = async () => {
    const groups = [
        {
            name: 'Music',
            red_score: 680,
            blue_score: 5423,
            indigo: 7.98,
            channel_counter: 21,
            follower_counter: 1250,
            views: 54554
        },
        {
            name: 'Sports',
            red_score: 2134,
            blue_score: 12502,
            indigo: 5.85,
            channel_counter: 27,
            follower_counter: 6588,
            views: 98221
        },
        {
            name: 'Design',
            red_score: 110,
            blue_score: 4030,
            indigo: 36.6,
            channel_counter: 17,
            follower_counter: 856,
            views: 19021
        },
        {
            name: 'Programming',
            red_score: 520,
            blue_score: 11201,
            indigo:21.5,
            channel_counter: 34,
            follower_counter: 8093,
            views: 120271
        }

    ]

    await Group.insertMany(groups);
    console.log('Created some groups!');
    return groups;
}
const createUsers = async () => {
    const users = [
        {
            first_name: 'John',
            last_name: 'Smith',
            email: 'jjohn@ex.com',
            password_digest: 'YBKDTOWjalsfj9fjksdla',
            about: `Hey I'm john nice to meet you. I love life and such.`,
            profile_image: 'null',
            cover_image: 'null',
            post_background: 'null',
            comment_background: 'null',
            red_score: 0,
            blue_score: 0,
            indigo: 0
        },
        {
            first_name: 'Marty',
            last_name: 'McFly',
            email: 'flyboin@ex.com',
            password_digest: 'YBKDTOWjalsafgaa',
            about: `I've gotta go back to the future!`,
            profile_image: 'null',
            cover_image: 'null',
            post_background: 'null',
            comment_background: 'null',
            red_score: 0,
            blue_score: 0,
            indigo: 0
        },

    ]

    await User.insertMany(users);
    console.log('Created some users!');
    return users;
}

const createChannels = async () => {
    // const channels = [
    //     {
    //         user_id: ,
    //         group_id: ,
    //         tags: [],
    //         name: 'Audio Engineering 101',
    //         cover_image: 'null',
    //         red_score: 540,
    //         blue_score: 960,
    //         indigo: 0,
    //         follower_counter: 500,
    //         post_counter: 32,
    //         views: 10000
    //     },
    //     {
    //         user_id: ,
    //         group_id: ,
    //         tags: [],
    //         name: 'Audio Engineering 101',
    //         cover_image: 'null',
    //         red_score: 540,
    //         blue_score: 960,
    //         indigo: 0,
    //         follower_counter: 500,
    //         post_counter: 32,
    //         views: 10000
    //     }

    // ]
}

const createPosts = async () => {

}

const createComments = async () => {

}

const run = async () => {
    await createGroups();
    await createUsers();
    // await createChannels();
    // await createPosts();
    // await createComments()
}

run()