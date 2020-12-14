<template>
  <div id="formGen" class="container">
    <form id="form" class="form">
      <h2>Register with us</h2>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter username"
          v-model="username"
          class="form-control"
        />
        <small>Error message</small>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="Enter mail" class="form-control" />
        <small>Error message</small>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          v-model="password"
          class="form-control"
        />
        <small>Error message</small>
      </div>
      <div class="form-group">
        <label for="password2">Confirm password</label>
        <input
          type="password"
          id="password2"
          placeholder="Enter password again"
          class="form-control"
        />
        <small>Error message</small>
      </div>

      <button class="btn btn-primary" type="button" @click="addToMongo">Register</button>
    </form>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "AddToMongo",
  data() {
    return {
      User: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    addToMongo() {
      let newUser = {
        username: this.username,
        password: this.password,
      };

      console.log(newUser);
      axios.post("http://localhost:8888/AddToMongo", newUser)
      .then((res) => {
        console.log(res);
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

:root {
  --success-color: #2ecc71;
  --error-color: #e74c3c;
}

* {
  box-sizing: border-box;
}

#formGen {
  background-color: #f9fafb;
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
}

.container {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 400px;
}

h2 {
  text-align: center;
  margin: 0 0 20px;
}

.form {
  padding: 30px 40px;
}

.form-control {
  margin-bottom: 10px;
  padding-bottom: 20px;
  position: relative;
}

.form-control label {
  color: #777;
  display: block;
  margin-bottom: 5px;
}

.form-control input {
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  display: block;
  width: 100%;
  padding: 14px;
  font-size: 14px;
}

.form-control input:focus {
  outline: 0;
  border-color: #777;
}

.form-control.success input {
  border-color: var(--success-color);
}

.form-control.error input {
  border-color: var(--error-color);
}

.form-control small {
  color: var(--error-color);
  position: absolute;
  bottom: 0;
  left: 0;
  visibility: hidden;
}

.form-control.error small {
  visibility: visible;
}

.form button {
  cursor: pointer;
  background-color: #3498db;
  border: 2px solid #3498db;
  border-radius: 4px;
  color: #fff;
  display: block;
  font-size: 16px;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
}
</style>