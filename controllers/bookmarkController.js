const Movie = require("../models/movies"); // Wer're bringing in the movies here since we're bookmarking from the movies
// Controller to get all bookmarked movies
// Defines an ascynchronous function "allBookmarks" to handle the retrieval of all movie bookmarked by a user
const allBookmarks = async (req, res) => {
try {
    //Extract the "userId" from the authenticated user (set by middleware to verify JWT token)
    const { userId } = req.user;

    //Finds all movies in the "Movies" collection where the "bookmarkedBy" field includes the "userId"
    const bookmarks = await Movie.find({ bookmarkedBy: userId });

    // Sends a success respnse with status 200, returning the movies that the user has bookmarked
    res.status(200).json({ data: bookmarks });
} catch (error) {
    res.status(400).json({message: error.message})
}
};

// CONTOLLER TO BOOKMARK A NEW MOVIE TO THE BOOKMARK
const addBookmark = async(req, res)=> {
    const {id} = req.params;
    const {userId} = req.user

    try {
        const movie = await Movie.findOneAndUpdate({_id: id}, {$push: {bookmarkedBy: userId}})
        // error handling
        if (!movie) {
            res.status(400).json({message: `No Movie with ID:${id}`})
        }
        res.status(200).json({message: "Movie Bookmarked"})
    } catch (error) {
        res.status()
    }
}

// CONTROLLER TO REMOVE AN EXISTING BOOKMARK
const removeBookmark = async (req, res) => {

    const {id} = req.params;
    const {userId} = req.user;
    try {
        const movie = await Movie.findOneAndUpdate(
          { _id: id },
          { $pull: { bookmarkedBy: userId } }
        );
        if (!movie) {
          res.status(400).json({ message: `No Movie with ID:${id}` });
        }
        res.status(200).json({ message: "Bookmarked Movie Removed Successfully" });
    } catch (error) {
        
    }
}

module.exports= { allBookmarks, addBookmark, removeBookmark}