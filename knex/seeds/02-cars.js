exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
          {
          "description":" change of suspension",
          "make":"Nissan", "model":"Versa",
          "estimate_date":"2021/12/01",
          "id":3340,
          "status":"",
          "image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-nissan-versa-mmp-1-1604946206.jpg?crop=1.00xw:0.846xh;0,0.154xh&resize=1200:*"
          },
          {
          "description":" motor adjustment",
          "make":" Honda ",
          "model":"CR-V",
          "id":3341,
          "image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-honda-cr-v-mmp-1-1596577310.jpg?crop=0.962xw:0.810xh;0.0176xw,0.190xh&resize=1200:*",
          "status":""
          },
          {
          "description":" engine tuning ",
          "make":"Honda", "model":"Civic",
          "estimate_date":"2020/20/12",
          "id":3342,
          "km":90000,
          "image":"https://upload.wikimedia.org/wikipedia/commons/6/6d/2017_Honda_Civic_SR_VTEC_1.0_Front.jpg",
          "status":""
          },
          {
          "description":" oil change ",
          "make":" Volkswaguen",
          "model":"Tiguan",
          "km":13500,
          "id":3343,
          "image":"https://cdn.jdpower.com/JDPA_2020%20Volkswagen%20Tiguan%20SEL%20Premium%20R-Line%20White%20Front%20View.jpg",
          "status":""
          },
          {
          "description":" change of pads ",
          "make":" Nissan ",
          "model":"Sentra",
          "km":6000,
          "id":3344,
          "image":"https://media.ed.edmunds-media.com/nissan/sentra/2020/oem/2020_nissan_sentra_sedan_sv_fq_oem_3_815.jpg",
          "status":""
          },
          {
          "description":" change of pads ", "make":"Volkswagen",
          "model":"Vento",
          "km":80050,
          "id":3345,
          "image":"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3a%2f%2fcdni.autocarindia.com%2fExtraImages%2f20200302011916_VW_Vento_1.jpg&h=795&w=1200&c=0",
          "status":""
          },
          {
          "description":"Change Transmission (CVT)", "make":"Chevrolet",
          "model":"Aveo NG",
          "estimate_date":"2021/09/07",
          "km":33460,
          "id":3346,
          "image":"https://i.blogs.es/f9556c/chevrolet-aveo-2018_/2560_3000.jpg",
          "status":""
          },
          {
          "make":"Chevrolet", 
          "model":"Spark",
          "km":16098,
          "id":3347,
          "image":"https://upload.wikimedia.org/wikipedia/commons/3/3a/Chevrolet_Spark_LS%2B_1.2_%E2%80%93_Frontansicht%2C_26._Juni_2011%2C_Mettmann.jpg",
          "status":""
          }
      ]);
    });
};

