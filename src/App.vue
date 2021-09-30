<template>
  <div class="wrapper" id="app">
    <div class="content">
      <div class="error">
        <p class="error__message">Oops... something went wrong</p>
      </div>
      <div class="search">
        <input type="text" class="search__input" placeholder="Moscow" />
        <!-- <img src="./assets/icons/settings.svg" alt="settings icon" class="search__settings-icon" /> -->
        <!-- add scale checkbox -->
      </div>

      <div class="info">
        <h1 class="info__city">Moscow</h1>
        <h5 class="info__country">Russia</h5>
        <h6 class="info__date-time">"Wed, 25 Aug 2021 14:52:32 GMT"</h6>
        <div class="info__weather">
          <p class="info__weather-temperature">+10 <span class="info__weather-scale">C</span></p>

          <img src="" alt="" class="info__weather-icon" />

          <div class="info__weather-description">
            rainy
            <p class="info__weather-feels-like">
              Feels like
              <span class="info__weather-feels-like-temperature"> 15</span>
              <span class="info__weather-feels-like-scale"> F</span>
            </p>
          </div>
        </div>
        <div class="info__additional">
          <div class="info__additional-wind">
            <img src="" alt="" class="info__additional-wind-icon" />
            <p class="info-additional-wind-text">1.3 m/s</p>
          </div>
          <div class="info__additional-humidity">
            <img src="" alt="" class="info__additional-humidity-icon" />
            <p class="info__additional-humidity-text">40%</p>
          </div>
        </div>
        <div class="info__separator"></div>
        <div class="info__day">
          <div class="info__day-sunrise">
            <div class="info__day-sunrise-icon"></div>
            <div class="info__day-sunrise-text">8.44</div>
          </div>
          <div class="info__day-sunset">
            <div class="info__day-sunset-icon"></div>
            <div class="info__day-sunset-text">8.44</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  color: #fff;
}
$min-container-width: 910px;
$container-background: rgba(0, 0, 0, 0.65);
$container-border-radius: 20px;

.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.content {
  min-width: $min-container-width;
  position: relative;
}
.error {
  display: none;

  position: absolute;
  top: 51px;
  left: 50%;
  transform: translate(-50%);
  height: 61px;
  width: 290px;
  border-radius: $container-border-radius;
  background-color: #b4362e;
  // display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  &__message {
    font-size: 18px;
    line-height: 21px;
    color: #fff;
  }
}
.search {
  min-width: $min-container-width;
  background-color: $container-background;
  padding: 25px 40px;
  display: flex;
  align-items: center;
  margin-bottom: 76px;
  border-radius: $container-border-radius;
  &__input {
    background: none;
    border: none;
    width: 100%;
    height: 28px;
    padding-left: 10px;
    font-size: 24px;
    line-height: 28px;

    color: #ffffff;
  }
  &__settings--icon {
    width: 28px;
    height: 28px;
    margin-left: 40px;
  }
}

.info {
  height: 514px;
  min-width: $min-container-width;
  background-color: $container-background;
  border-radius: $container-border-radius;
  padding: 40px;
  &__city {
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 5px;
  }
  &__country {
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    margin-bottom: 15px;
  }
  &__date-time {
    font-style: italic;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 30px;
  }
  &__weather {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    &-temperature {
      font-size: 64px;
      line-height: 75px;
      margin-right: 30px;
    }
    &-scale {
      // font-size: 64px;
      // line-height: 75px;
    }
    &-icon {
      width: 115px;
      height: 115px;
      margin-right: 20px;
    }
    &-description {
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      display: flex;
      flex-direction: column;
    }
    &-feels-like {
      // font-weight: 500;
      // font-size: 24px;
      // line-height: 28px;
    }
  }
  &__additional {
    display: flex;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }
  &__separator {
    height: 2px;
    width: 100%;
    color: rgba(255, 255, 255, 0.5);
    border-radius: 99px;
    margin: 25px 0;
  }
  &__day {
    display: flex;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
