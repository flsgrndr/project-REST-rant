import { Place, Comment } from '../models'

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await Place.findOne({ name: 'H-Thai-ML' })

    // Create a fake sample comment.
    let comment = await Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    // Add that comment to the place's comment array.
    place.comments.push(comment.id)

    //save the place now that it has comment
    await place.save()
    
    // Exit the program
    process.exit()
}

seed()
