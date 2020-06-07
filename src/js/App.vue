<template>
    <div class="cuerpo">
    <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Chat-Socket</b-navbar-brand>
    <b-icon icon="list" font-scale="3" variant="secondary" v-b-toggle.sidebar-backdrop style="cursor: pointer;"></b-icon>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  
    <b-sidebar
      id="sidebar-backdrop"
      title="Sidebar with backdrop"
      :backdrop-variant="dark"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <p>MENU!!!</p>
      </div>
    </b-sidebar>
  
    	<b-row class="mx-0 w-100">
    		<b-col cols="2" class="pr-0 pl-0 border-right br-secondary">
    				<p>Antiguas Chats</p>
    		</b-col>
    		<b-col cols="10"  class="pr-0 pl-0 border-left" variant="secondary">
    				<h1>{{title}}</h1>
    		</b-col>
    	</b-row>
    </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';
  import '../css/style.css';
  import { BJumbotron, BNavbar, BIcon, BRow, BCol } from 'bootstrap-vue';
  export default {
    data() {
      return {
        title: "Welcome to Index!!!",
      }
    },
  }
</script>

<style>
</style>
