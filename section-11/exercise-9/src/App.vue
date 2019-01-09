<template>
    <div class="container">
        <form>
            <div class="row" v-if="!submitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <form>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <full-name-input v-model="fullname"></full-name-input>
                    <div class="row">
                      <div class="col-sm-12">
                          <label for="email">Email</label>
                          <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter email">
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                          <label for="password">Password</label>
                          <input v-model="password" type="password" class="form-control" id="password" placeholder="Enter password">
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                          Store data? 
                          <div class="form-check" style="display: inline-block;">
                            <input v-model="store" class="form-check-input" type="radio" id="inlineRadio1" value="Yes">
                            <label class="form-check-label" for="inlineRadio1">Yes</label>
                          </div>
                          <div class="form-check" style="display: inline-block;">
                            <input v-model="store" class="form-check-input" type="radio" id="inlineRadio2" value="No">
                            <label class="form-check-label" for="inlineRadio2">No</label>
                          </div>
                      </div>
                    </div>


                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button type="button" class="btn btn-primary" @click="submitted = true">Submit</button>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                  </form>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" >
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullname }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ store }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import FullNameInput from './FullNameInput.vue';
    export default {
      data() {
        return {
          fullname: '',
          email: '',
          password: '',
          store: 'Yes',
          submitted: false
        }
      },

      components: {
        FullNameInput,
      }
    }
</script>

<style>
</style>
