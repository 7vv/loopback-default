//DB 마이그레이션 작업
module.exports = async function (app) {
  const mongodb = app.dataSources.mongodb;
  const mysql = app.dataSources.mysql;


  createCoffeShop = async () => {
    return new Promise((resolve, reject) => {
      mysql.automigrate('abs', err => {
        if (err) throw err;

        const Abs = app.models.Abs;
        Abs.create([
          {
            name: 'Bel Cafe',
          },
          {
            name: 'Three Bees Coffee House',
          },
          {
            name: 'Caffe Artigiano',
          }
        ], (err, doc) => {
          if (err) console.log('Boot Mongodb marg Error', err)
          resolve(doc);
        });
      })
    })
  }

  createReviewer = async () => {
    return new Promise((resolve, reject) => {
      mongodb.automigrate('Reviewer', err => {
        if (err) return callback(err);

        const Reviewer = app.models.Reviewer;

        Reviewer.create([
          {
            email: 'sungho@naver.com',
            password: '1270'
          }
        ], (err, doc) => {
          if (err) console.log('Boot Mysql marg Error', err)
          resolve(doc);
        });
      })
    })
  }

  //create reviews
  createReviews = async (reviewers, coffeeShops) => {
    return new Promise((resolve, reject) => {
      mongodb.automigrate('Review', (err) => {
        if (err) console.log('error',err)
        const Review = app.models.Review;
        const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
        Review.create([
          {
            date: Date.now() - (DAY_IN_MILLISECONDS * 4),
            rating: 5,
            comments: 'A very good coffee shop.',
            publisherId: reviewers[0].id,
            coffeeShopId: coffeeShops[0].id,
          }
        ], (err, doc) => {
          if (err) console.log('Create Review Error', err);
          resolve(doc);
        });
      });
    })
  }


  const coffeDoc = await createCoffeShop();
  const reviewerDoc = await createReviewer();
  console.log('1', coffeDoc);
  console.log('2', reviewerDoc)
  console.log('created Two marg')
  const review = await createReviews(reviewerDoc, coffeDoc);
  console.log('3', review)
}
