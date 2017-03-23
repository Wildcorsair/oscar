<template>
    <div class="users">
        <h1>Users</h1>
        <div class="user-form">
            <label for="first-name">First Name:</label>
            <input id="first-name" type="text" v-model="user.firstName">
            <br>
            <label for="last-name">Last Name:</label>
            <input id="last-name" type="text" v-model="user.lastName">
            <br>
            <button v-on:click="saveUser">Submit</button>
        </div>
        <ul>
            <li v-for="user in users">
                <input type="checkbox" class="toggle" v-model="user.contacted">
                <span :class="{contacted: user.contacted}">
                    {{ user.firstName }} {{ user.lastName }}
                    <button v-on:click="deleteUser">X</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'user',
        data () {
            return {
                user: {
                    firstName: '',
                    lastName: ''
                },
                users: [
                    {firstName: "John", lastName: "Doe", contacted: false},
                    {firstName: "Jane", lastName: "Doe", contacted: false},
                    {firstName: "Fillip", lastName: "Moris", contacted: true}
                ]
            }   
        },
        methods: {
            saveUser: function() {
                this.users.push({
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    contacted: false
                });
            },
            deleteUser: function() {
                
            }
        }
    }
</script>

<style scope>
    .users {
        text-align: left;
    }
    .contacted {
        text-decoration: line-through;
    }
</style>