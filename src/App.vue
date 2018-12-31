<template>
  <div id="app">
    <b-container class="p-4">
        <b-row>
          <b-col class="col-md-4 mx-auto text-center">
            <b-card class="tiempo">
              <h1>{{datos.main.temp}}°c</h1>
              <h4>{{datos.weather[0].main}}</h4>
              <h5>{{datos.name}}</h5>

              
              <!-- <img :src="getImage()" alt="weather image"> 
              <h1>{{datos.Icono}}</h1>
              <h1>{{datos.Temp}}°c</h1>
              <h4>{{datos.Estado}}</h4>
              <h5>{{datos.Estacion}}</h5>
              <b-form-select v-on="getCity(selected)" v-model="selected" :options="options" class="mb-3 city" />
              <h1>{{selected}}</h1>   -->    
              <b-row>
                <b-col><h5>Sunrise {{sunriseData}}</h5></b-col>
                <b-col><h5>Sunset {{sunsetData}}</h5></b-col>
              </b-row> 

              <b-row>
                <b-col><img src="./images/humidity.png"></b-col>
                <b-col><img src="./images/wind.png"></b-col>
              </b-row> 
              <b-row>
                <b-col><h5>{{datos.main.humidity}}%</h5></b-col>
                <b-col><h5>{{datos.main.pressure}}</h5></b-col>
                <b-col><h5>{{datos.wind.speed}}m/s</h5></b-col>
                <b-col><h5>{{datos.wind.deg}}</h5></b-col>
              </b-row> 

            </b-card>
          </b-col>
        </b-row>
        
    </b-container>    
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      datos: [],
      selected: null,
      options: [
        { value: null, text: '--Please select an option--' },
        { value: 'SCSE', text: 'Coquimbo' },
        { value: 'SCQN', text: 'Santiago Centro' },
        { value: 'SCTB', text: 'Santiago Oriente' },
      ],
      sunriseData: [],
      sunsetData: []
    }
  },

  created(){

      /*axios.get("https://api.gael.cl/general/public/clima/SCSE")
      .then(res =>  {this.datos = res.data;
      }) */   
      this.getWeather();
  },



  methods: {

    getWeather() {
      fetch('http://api.openweathermap.org/data/2.5/weather?q=Coquimbo,cl&appid=f07cdebc98f8baef5e9d0412ade196cb&units=metric')
        .then(res => res.json())
        .then(data => {
          this.datos = data;
          var sunrise = this.datos.sys.sunrise;
          var sunriseHour = new Date(sunrise * 1000).getHours();
          var sunriseMinute = new Date(sunrise * 1000).getMinutes();
          this.sunriseData = (sunriseHour + ':' + sunriseMinute );

          var sunset = this.datos.sys.sunset;
          var sunsetHour = new Date(sunset * 1000).getHours();
          var sunsetMinute = new Date(sunset * 1000).getMinutes();
          this.sunsetData = (sunsetHour + ':' + sunsetMinute );
          });
    }

  /*
    getImage(){
      return require('./images/'+ this.datos.Icono);
    },

    getWeather() {
      fetch('https://api.gael.cl/general/public/clima/SCSE')
        .then(res => res.json())
        .then(data => {
          this.datos = data;
          });
    },

    getCity(selected) {
      fetch('https://api.gael.cl/general/public/clima/' + selected)
        .then(res => res.json())
        .then(data => {
        this.datos = data;
        })
    }*/
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 25px;
  color: white;
  height: 100%;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.row{
  padding-top: 30px;
}

.tiempo{
  border-radius: 10%;
  background-color: #8EC5FC;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  -webkit-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.59);
  -moz-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.59);
  box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.59);
}

.city{
  background-color: #f6d365;
}
h1, h2 {
  font-weight: normal;
}

</style>
