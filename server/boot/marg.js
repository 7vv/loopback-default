//DB 마이그레이션 작업
module.exports = function(app) {

  app.dataSources.mysql.automigrate('abs', function(err) {
    if (err) throw err;

    app.models.Abs.create([{
      name: 'Bel Cafe',
    }, {
      name: 'Three Bees Coffee House',
    }, {
      name: 'Caffe Artigiano',
    }], function(err, Abss) {
      if (err) throw err;

      console.log('Models created: \n', Abss);
    });
  });
}
