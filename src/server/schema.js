/*
 * @Descripttion:
 * @Author: cui
 * @Date: 2021-04-12 18:38:59
 * @LastEditors: cui
 * @LastEditTime: 2021-04-12 19:10:03
 */

const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat }
  = require('graphql')
const movies = require('./movies.json')

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
  },
})
module.exports = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      movies: {
        type: new graphql.GraphQLList(new graphql.GraphQLObjectType({
          name: 'Movie',
          fields: {
            title: {
              type: graphql.GraphQLString
            }
          }
        })),
        resolve: () => movies
      },
      movie: {
        type: movie,
        args: {
          index: {
            type: GraphQLInt,
          }
        },
        resolve: (r, { index }) => movies[index - 1]
      }
    }
  })
})