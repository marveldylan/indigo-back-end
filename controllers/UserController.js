const { default: mongoose } = require('mongoose')
const { User } = require('../models')

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({ users })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getUserById = async (req, res) => {
    try {
        const userId = req.params.user_id;
        const user = await User.findById(userId)
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).send(`Oops! We can't seem to find this user.`);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.user_id, req.body, {
            new: true
        })
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}

// const userFollowCategory = async (req, res) => {
//     try {
//         let userId = req.params.user_id
//         let categoryId = req.params.category_id;
//         const user = await User.findByIdAndUpdate(userId, {
//             $push: {
//                 subscribed_categories: categoryId
//             }
//         })
//         res.json(user)
//     } catch (error) {
//         res.send(error.message)
//     }
// }

// const userFollowCategory = async (req, res) => {
//     try {
//         let userId = req.params.user_id
//         let categoryId = req.params.category_id;
//         const user = await User.findOneAndUpdate(
//             {
//                 _id: userId, 
//                 subscribed_categores: { $nin: [categoryId]}
//             }, 
//             {
//                 $push: {
//                     subscribed_categories: categoryId
//             }
//         })
//         res.json(user)
//     } catch (error) {
//         res.send(error.message)
//     }
// }

// const userUnfollowCategory = async (req, res) => {
//     try {
//         let userId = req.params.user_id
//         let categoryId = req.params.category_id;
//         const user = await User.findByIdAndUpdate(userId, {
//             $pullAll: {
//                 subscribed_categories: categoryId
//             }
//         })
//         res.json(user)
//     } catch (error) {
//         res.send(error.message)
//     }
// }

const userFollowGroup = async (req, res) => {
    try {
        let userId = req.params.user_id
        let groupId = req.params.group_id;
        const user = await User.findByIdAndUpdate(userId, {
            $push: {
                subscribed_groups: groupId
            }
        })
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}

const userUnfollowGroup = async (req, res) => {
    try {
        let userId = req.params.user_id
        let groupId = req.params.group_id;
        const user = await User.findByIdAndUpdate(userId, {
            $pull: {
                subscribed_groups: groupId
            }
        })
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}

const userDisbandGroup = async (req, res) => {
    try {
        let userId = req.params.user_id
        let groupId = req.params.group_id;
        const user = await User.findByIdAndUpdate(userId, {
            $pull: {
                user_groups: groupId
            }
        })
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}

const userFollowChannel = async (req, res) => {
    try {
        let userId = req.params.user_id
        let channelId = req.params.channel_id;
        const user = await User.findByIdAndUpdate(userId, {
            $push: {
                subscribed_channels: channelId
            }
        })
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}

const userUnfollowChannel = async (req, res) => {
    try {
        let userId = req.params.user_id
        let channelId = req.params.channel_id;
        const user = await User.findByIdAndUpdate(userId, {
            $pull: {
                subscribed_channels: channelId
            }
        })
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}

const userDisbandChannel = async (req, res) => {
    try {
        let userId = req.params.user_id
        let channelId = req.params.channel_id;
        const user = await User.findByIdAndUpdate(userId, {
            $pull: {
                user_channels: channelId
            }
        })
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}

const userRemoveSavedPost = async (req, res) => {
    try {
        let userId = req.params.user_id
        let postId = req.params.post_id;
        const user = await User.findByIdAndUpdate(userId, {
            $pull: {
                saved_posts: postId
            }
        })
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}

const userRemoveUserPost = async (req, res) => {
    try {
        let userId = req.params.user_id
        let postId = req.params.post_id;
        const user = await User.findByIdAndUpdate(userId, {
            $pull: {
                user_posts: postId
            }
        })
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}

const userFollowUser = async (req, res) => {
    try {
        let userId = req.params.user_id
        let followedId = req.params.followed_id;
        const user = await User.findByIdAndUpdate(userId, {
            $push: {
                following: followedId
            }
        })
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}

const userUnfollowUser = async (req, res) => {
    try {
        let userId = req.params.user_id
        let followedId = req.params.followed_id;
        const user = await User.findByIdAndUpdate(userId, {
            $pull: {
                following: followedId
            }
        })
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}



module.exports = {
    getUsers,
    getUserById,
    updateUser,
    // userFollowCategory,
    // userUnfollowCategory,
    userUnfollowGroup,
    userFollowGroup,
    userDisbandGroup,
    userFollowChannel,
    userUnfollowChannel,
    userDisbandChannel,
    userRemoveSavedPost,
    userRemoveUserPost,
    userFollowUser,
    userUnfollowUser

}