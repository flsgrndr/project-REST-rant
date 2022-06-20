const router = require('express').Router()
import { Place, Comment } from '../models'

//get places
router.get('/', (req, res) => {
  Place.find()
    .then((places) => {
      res.render('places/index', {places})
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

//post new place
router.post('/', (req, res) => {
  if (req.body.pic === '') {req.body.pic = undefined}
  if (req.body.city === '') {req.body.city = undefined}
  if (req.body.state === '') {req.body.state = undefined}
  Place.create(req.body)
    .then(() => {
      res.redirect('/places');
    })
    .catch(err => {
      if(err && err.name === 'ValidationError'){
        let message = "Validation Error: "
        for(var field in err.errors){
          message+= `${field} was ${err.errors[field].value}.`
          message+= `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('places/new', {message})
      }
      else{
        res.render('error404');
      }
    })
})

//get new place
router.get('/new', (req, res) => {
  res.render('places/new')
})

//get show places
router.get('/:id', (req, res) => {
  Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//put edit places
router.put('/:id', (req, res) => {
  Place.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
      .then(() => {
          res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

//delete places
router.delete('/:id', (req, res) => {
  Place.findByIdAndDelete(req.params.id)
      .then(() => {
          res.redirect('/places')
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

//get edit places
router.get('/:id/edit', (req, res) => {
  Place.findById(req.params.id)
      .then(place => {
          res.render('places/edit', { place })
      })
      .catch(err => {
          res.render('error404')
      })
})

//post comment to place
router.post('/:id/comment', (req, res) => {
  console.log('post comment', req.body)
  if (req.body.author === '') { req.body.author = undefined }
    req.body.rant = req.body.rant ? true : false
    Place.findById(req.params.id)
        .then(place => {
            Comment.create(req.body)
                .then(comment => {
                    place.comments.push(comment.id)
                    place.save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`)
                        })
                        .catch(err => {
                            res.render('error404')
                        })
                })
                .catch(err => {
                    res.render('error404')
                })
        })
        .catch(err => {
            res.render('error404')
        })
})

//delete comment from place
router.delete('/:id/comment/:commentId', (req, res) => {
  Comment.findByIdAndDelete(req.params.commentId)
        .then(() => {
            console.log('Success')
            res.redirect(`/places/${req.params.id}`)
        })
        .catch(err => {
            res.render('error404')
        })
})

export default router