const joi =require('@hapi/joi')

const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const movieTitleSchema = joi.string().max(80)
const movieYearSchema = joi.number().min(1900).max(2029)
const movieCoverSchema = joi.string().uri()
const movieDescriptionSchema = joi.string().max(300)
const movieDurationSchema = joi.number().min(1).max(300)
const movieContentSchema = joi.string().max(5)
const movieSourceSchema = joi.string().uri()
const movieTagsSchema = joi.array().items(joi.string().max(50))


const createMovieSchema = {
  title: movieTitleSchema.required(),
  year: movieYearSchema.required(),
  cover: movieCoverSchema.required(),
  description: movieDescriptionSchema.required(),
  duration: movieDurationSchema.required(),
  content: movieContentSchema.required(),
  source: movieSourceSchema.required(),
  tags: movieTagsSchema.required(),
}

const updateMovieSchema = {
  title: movieTitleSchema,
  year: movieYearSchema,
  cover: movieCoverSchema,
  description: movieDescriptionSchema,
  duration: movieDurationSchema,
  content: movieContentSchema,
  source: movieSourceSchema,
  tags: movieTagsSchema,
}

module.exports = {
  createMovieSchema,
  updateMovieSchema,
  movieIdSchema,
}