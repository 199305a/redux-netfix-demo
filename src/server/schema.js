/*
 * @Descripttion:
 * @Author: cui
 * @Date: 2021-04-12 21:16:13
 * @LastEditors: cui
 * @LastEditTime: 2021-04-12 21:44:30
 */
const movies = require('./movies.json')
const { GraphQLSchema, GraphQLList, GraphQLString, GraphQLObjectType, GraphQLInt,
  GraphQLFloat
} = require('graphql')

const movie = new GraphQLObjectType({
  name: 'Movie',
  fields: {
    title: {
      type: GraphQLString
    }
  },
  cover: {
    type: GraphQLString
  },
  year: {
    type: GraphQLString
  },
  cost: {
    type: GraphQLFloat
  },
  starring: {
    type: new GraphQLList(new GraphQLObjectType({
      name: 'starring',
      fields: {
        name: {
          type: GraphQLString
        }
      }
    }))
  }
})

module.exports = new graphql.GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      movies: {
        type: new graphql.GraphQLList(movie),
        resolve: () => movies
      },
      movie: {
        type: movie,
        args: {
          index: {
            type: GraphQLInt
          }
        },
        resolve: (r, { index }) => movies[index - 1]
      }
    }
  })
})