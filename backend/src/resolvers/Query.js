const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('db'),
  // async items(parent, args, ctx, info) {
  //   console.log('Getting items');
  //   const items = await ctx.db.query.items();
  //   return items;
  // },
};

module.exports = Query;
