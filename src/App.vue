<template>
  <div class="wrapper" id="app">
    <div class="content">
      <div class="error">
        <p class="error__message">Oops... something went wrong</p>
      </div>
      <div class="search">
        <input type="text" class="search__input" placeholder="Moscow" />
        <div class="search__settinds--icon"><img src="@/assets/icons/settings.svg" alt="" /></div>
      </div>
      <div class="settings">
        <div class="settings__scale">
          <input type="checkbox" id="toggle-button" class="toggle-button" />
          <label for="toggle-button"> Fahrenheit </label>
        </div>
        <select name="lang" id="lang" class="settings__lang">
          <option value="ru">ru</option>
          <option value="en">en</option>
        </select>
      </div>
      <div class="info">
        <h1 class="info__city">Moscow</h1>
        <h5 class="info__country">Russia</h5>
        <h6 class="info__date-time">"Wed, 25 Aug 2021 14:52:32 GMT"</h6>
        <div class="info__weather">
          <p class="info__weather-temperature">+10 <span class="info__weather-scale"> &deg;C</span></p>

          <img src="" alt="" class="info__weather-icon" />

          <div class="info__weather-description">
            rainy
            <p class="info__weather-feels-like">
              Feels like
              <span class="info__weather-feels-like-temperature"> 15</span>
              <span class="info__weather-feels-like-scale"> &deg;F</span>
            </p>
          </div>
        </div>
        <div class="info__additional">
          <div class="info__additional-wind">
            <img src="@/assets/icons/wind.svg" alt="wind icon" class="info__additional-wind-icon" />
            <p class="info-additional-wind-text">1.3 m/s</p>
          </div>
          <div class="info__additional-humidity">
            <img src="@/assets/icons/humidity.svg" alt="humidity icon" class="info__additional-humidity-icon" />
            <p class="info__additional-humidity-text">40%</p>
          </div>
        </div>
        <div class="info__separator"></div>
        <div class="info__day">
          <div class="info__day-sunrise">
            <img class="info__day-sunrise-icon" src="@/assets/icons/sunrise.svg" alt="sunrise icon" />
            <div class="info__day-sunrise-text">8.44</div>
          </div>
          <div class="info__day-sunset">
            <img class="info__day-sunset-icon" src="@/assets/icons/sunset.svg" alt="sunset icon" />
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
  border-radius: $container-border-radius;
  padding: 25px 40px;
  display: flex;
  align-items: center;
  margin-bottom: 76px;
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

.settings {
  position: absolute;
  top: 90px;
  right: 0px;
  background-color: $container-background;
  border-radius: $container-border-radius;
  padding: 20px;
  font-size: 18px;
  &__scale {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .toggle-button {
      position: relative;
      display: block;
      width: 49px;
      height: 26px;
      margin-right: 13px;
      border: 1px solid #ffffff;
      border-radius: 30px;
      outline: none;
      cursor: pointer;
      appearance: none;
      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 2px;
        top: 2px;
        width: 20px;
        height: 20px;
        background-color: #ffffff;
        border-radius: 50%;
        transform: translateX(0);
        transition: all 0.7s cubic-bezier(0.2, 0.85, 0.32, 1.2);
      }
      &:checked {
        &:after {
          transform: translateX(calc(100% + 3px));
          background-color: #fff;
          transition: all 0.7s cubic-bezier(0.2, 0.85, 0.32, 1.2);
        }
      }
    }
  }
  &__lang {
    height: 26px;
    border-radius: 30px;
    width: 50px;
  }
}
.info {
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
      margin-top: 10px;
    }
  }
  &__additional {
    display: flex;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    &-wind {
      margin-right: 33px;
      display: flex;
      align-items: center;
      font-weight: 700;
    }
    &-humidity {
      display: flex;
      align-items: center;
      font-weight: 700;
    }
    img {
      margin-right: 15px;
    }
  }
  &__separator {
    height: 2px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 99px;
    margin: 25px 0;
  }
  &__day {
    display: flex;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    &-sunrise {
      display: flex;
      align-items: center;
      font-weight: 700;
      margin-right: 56px;
    }
    &-sunset {
      display: flex;
      align-items: center;
      font-weight: 700;
    }
    img {
      margin-right: 20px;
    }
  }
}
</style>
